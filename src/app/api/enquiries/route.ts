import { NextRequest, NextResponse } from "next/server";
import { enquiryInputSchema } from "@/server/leads/schema";
import { checkRateLimit } from "@/server/leads/rate-limit";
import { processEnquirySubmission } from "@/server/leads/service";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type verification
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid Content-Type. Expected application/json." },
        { status: 415 }
      );
    }

    // 2. Body size boundary check (max 50KB)
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > 51200) {
      return NextResponse.json(
        { success: false, message: "Request payload exceeds permissible size limits." },
        { status: 413 }
      );
    }

    // 3. Client IP extraction & Rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const rateCheck = await checkRateLimit(clientIp, 10, 600); // 10 requests per 10 mins

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 4. Parse JSON
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Malformed JSON payload in request body." },
        { status: 400 }
      );
    }

    // 5. Zod schema validation
    const parsed = enquiryInputSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path.join(".") || "form";
        if (!fieldErrors[path]) {
          fieldErrors[path] = [];
        }
        fieldErrors[path].push(issue.message);
      }

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    // 6. Process submission and persist
    const response = await processEnquirySubmission(parsed.data);
    return NextResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    console.error("Unhandled enquiry endpoint error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while recording your enquiry. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
