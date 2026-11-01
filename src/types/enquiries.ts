export interface EnquiryInput {
  name: string;
  email?: string;
  phone?: string;
  service: string;
  message: string;
  company?: string;
  website?: string;
  industry?: string;
  budgetRange?: string;
  timing?: string;
  timeZone?: string;
  source?: string;
  idempotencyKey?: string;
}

export interface EnquiryRecord {
  id: string;
  idempotencyKey?: string;
  name: string;
  email: string | null;
  phone: string | null;
  service: string;
  message: string;
  company: string | null;
  website: string | null;
  industry: string | null;
  budgetRange: string | null;
  timing: string | null;
  timeZone: string | null;
  source: string | null;
  notificationStatus: "pending" | "sent" | "failed" | "skipped";
  notificationError?: string | null;
  createdAt: string;
}

export interface EnquiryResponse {
  success: boolean;
  receipt?: string;
  message: string;
  errors?: Record<string, string[]>;
}
