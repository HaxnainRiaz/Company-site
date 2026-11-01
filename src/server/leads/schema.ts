import { z } from "zod";

const ALLOWED_SERVICES = [
  "ai-voice-chat-automation",
  "websites-admin-dashboards",
  "pos-retail-management",
  "seo-google-business-profile",
  "workflow-automation",
  "ecommerce-development",
  "mobile-app-development",
  "social-media-marketing",
  "discovery-call",
  "general-enquiry",
] as const;

export const enquiryInputSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters long")
      .max(100, "Name must not exceed 100 characters"),
    email: z
      .string()
      .trim()
      .email("Please provide a valid email address")
      .max(255, "Email is too long")
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .trim()
      .min(7, "Phone number is too short")
      .max(30, "Phone number must not exceed 30 characters")
      .optional()
      .or(z.literal("")),
    service: z.enum(ALLOWED_SERVICES, {
      error: "Please select an approved service category",
    }),
    message: z
      .string()
      .trim()
      .min(20, "Please describe your project in at least 20 characters")
      .max(3000, "Message must not exceed 3,000 characters"),
    company: z.string().trim().max(100).optional().or(z.literal("")),
    website: z.string().trim().max(200).optional().or(z.literal("")),
    industry: z.string().trim().max(100).optional().or(z.literal("")),
    budgetRange: z.string().trim().max(100).optional().or(z.literal("")),
    timing: z.string().trim().max(100).optional().or(z.literal("")),
    timeZone: z.string().trim().max(100).optional().or(z.literal("")),
    source: z.string().trim().max(100).optional().or(z.literal("")),
    idempotencyKey: z.string().trim().max(100).optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      const hasEmail = Boolean(data.email && data.email.length > 0);
      const hasPhone = Boolean(data.phone && data.phone.length > 0);
      return hasEmail || hasPhone;
    },
    {
      message: "Please provide at least one valid contact method (email or phone number)",
      path: ["email"],
    }
  );

export type ValidatedEnquiryInput = z.infer<typeof enquiryInputSchema>;
