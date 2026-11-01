import "server-only";
import { Resend } from "resend";
import { serverEnv } from "../env";
import type { EnquiryRecord } from "@/types/enquiries";

let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
  if (resendClient) return resendClient;
  if (!serverEnv.RESEND_API_KEY) return null;
  resendClient = new Resend(serverEnv.RESEND_API_KEY);
  return resendClient;
}

export async function sendLeadNotification(
  lead: EnquiryRecord
): Promise<{ success: boolean; error?: string }> {
  // If email notifications are not configured, gracefully record as skipped
  if (!serverEnv.RESEND_API_KEY || !serverEnv.LEAD_NOTIFICATION_TO) {
    return {
      success: true,
      error: "Notification skipped: RESEND_API_KEY or LEAD_NOTIFICATION_TO not configured in environment.",
    };
  }

  // Do not send live emails in automated test environments
  if (process.env.NODE_ENV === "test") {
    return { success: true };
  }

  try {
    const resend = getResendClient();
    if (!resend) {
      return { success: false, error: "Resend client not initialized" };
    }

    const fromAddress = serverEnv.LEAD_NOTIFICATION_FROM || "onboarding@resend.dev";
    const toAddress = serverEnv.LEAD_NOTIFICATION_TO;

    const emailHtml = `
      <h2>New Inbound Enquiry Received</h2>
      <p><strong>Receipt ID:</strong> ${lead.id}</p>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${lead.phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${lead.service}</p>
      <p><strong>Company:</strong> ${lead.company || "Not provided"}</p>
      <p><strong>Budget Range:</strong> ${lead.budgetRange || "Not provided"}</p>
      <p><strong>Timeline:</strong> ${lead.timing || "Not provided"}</p>
      <p><strong>Source Context:</strong> ${lead.source || "Direct"}</p>
      <hr />
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${lead.message}</p>
    `;

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: `[New Lead] ${lead.name} — ${lead.service}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown notification error";
    console.error("Failed to deliver lead notification email:", errorMessage);
    return { success: false, error: errorMessage };
  }
}
