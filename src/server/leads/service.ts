import "server-only";
import crypto from "node:crypto";
import type { ValidatedEnquiryInput } from "./schema";
import type { EnquiryRecord, EnquiryResponse } from "@/types/enquiries";
import {
  findEnquiryByIdempotencyKey,
  insertEnquiry,
  updateNotificationStatus,
} from "./repository";
import { sendLeadNotification } from "./notifications";

export async function processEnquirySubmission(
  input: ValidatedEnquiryInput
): Promise<EnquiryResponse> {
  // 1. Idempotency check: if already submitted with this idempotency key, return existing receipt
  if (input.idempotencyKey) {
    const existing = await findEnquiryByIdempotencyKey(input.idempotencyKey);
    if (existing) {
      return {
        success: true,
        receipt: existing.id,
        message: "Enquiry already received and recorded.",
      };
    }
  }

  // 2. Generate unique human-readable receipt ID using built-in crypto
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomSuffix = crypto.randomBytes(3).toString("hex").toUpperCase();
  const receiptId = `ENQ-${today}-${randomSuffix}`;

  // 3. Assemble record
  const record: EnquiryRecord = {
    id: receiptId,
    idempotencyKey: input.idempotencyKey || undefined,
    name: input.name,
    email: input.email || null,
    phone: input.phone || null,
    service: input.service,
    message: input.message,
    company: input.company || null,
    website: input.website || null,
    industry: input.industry || null,
    budgetRange: input.budgetRange || null,
    timing: input.timing || null,
    timeZone: input.timeZone || null,
    source: input.source || null,
    notificationStatus: "pending",
    createdAt: new Date().toISOString(),
  };

  // 4. Persist to database BEFORE attempting notification
  await insertEnquiry(record);

  // 5. Attempt notification
  const notificationResult = await sendLeadNotification(record);
  if (notificationResult.success) {
    await updateNotificationStatus(
      receiptId,
      notificationResult.error ? "skipped" : "sent",
      notificationResult.error || null
    );
  } else {
    await updateNotificationStatus(receiptId, "failed", notificationResult.error || null);
  }

  return {
    success: true,
    receipt: receiptId,
    message: "Thank you. Your enquiry has been securely received and recorded.",
  };
}
