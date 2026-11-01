import "server-only";
import { getDbClient } from "../db";
import type { EnquiryRecord } from "@/types/enquiries";

let tableInitialized = false;

export async function ensureEnquiriesTable(): Promise<void> {
  if (tableInitialized) return;

  const db = getDbClient();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id TEXT PRIMARY KEY,
      idempotency_key TEXT UNIQUE,
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      service TEXT NOT NULL,
      message TEXT NOT NULL,
      company TEXT,
      website TEXT,
      industry TEXT,
      budget_range TEXT,
      timing TEXT,
      time_zone TEXT,
      source TEXT,
      notification_status TEXT NOT NULL,
      notification_error TEXT,
      created_at TEXT NOT NULL
    );
  `);

  tableInitialized = true;
}

export async function findEnquiryByIdempotencyKey(
  idempotencyKey: string
): Promise<EnquiryRecord | null> {
  await ensureEnquiriesTable();
  const db = getDbClient();

  const result = await db.execute({
    sql: `SELECT * FROM enquiries WHERE idempotency_key = ? LIMIT 1`,
    args: [idempotencyKey],
  });

  if (result.rows.length === 0) {
    return null;
  }

  const row = result.rows[0];
  return {
    id: String(row.id),
    idempotencyKey: row.idempotency_key ? String(row.idempotency_key) : undefined,
    name: String(row.name),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    service: String(row.service),
    message: String(row.message),
    company: row.company ? String(row.company) : null,
    website: row.website ? String(row.website) : null,
    industry: row.industry ? String(row.industry) : null,
    budgetRange: row.budget_range ? String(row.budget_range) : null,
    timing: row.timing ? String(row.timing) : null,
    timeZone: row.time_zone ? String(row.time_zone) : null,
    source: row.source ? String(row.source) : null,
    notificationStatus: row.notification_status as EnquiryRecord["notificationStatus"],
    notificationError: row.notification_error ? String(row.notification_error) : null,
    createdAt: String(row.created_at),
  };
}

export async function insertEnquiry(record: EnquiryRecord): Promise<void> {
  await ensureEnquiriesTable();
  const db = getDbClient();

  await db.execute({
    sql: `
      INSERT INTO enquiries (
        id, idempotency_key, name, email, phone, service, message,
        company, website, industry, budget_range, timing, time_zone,
        source, notification_status, notification_error, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    args: [
      record.id,
      record.idempotencyKey || null,
      record.name,
      record.email || null,
      record.phone || null,
      record.service,
      record.message,
      record.company || null,
      record.website || null,
      record.industry || null,
      record.budgetRange || null,
      record.timing || null,
      record.timeZone || null,
      record.source || null,
      record.notificationStatus,
      record.notificationError || null,
      record.createdAt,
    ],
  });
}

export async function updateNotificationStatus(
  id: string,
  status: EnquiryRecord["notificationStatus"],
  error?: string | null
): Promise<void> {
  await ensureEnquiriesTable();
  const db = getDbClient();

  await db.execute({
    sql: `UPDATE enquiries SET notification_status = ?, notification_error = ? WHERE id = ?`,
    args: [status, error || null, id],
  });
}

export async function getFailedNotifications(): Promise<EnquiryRecord[]> {
  await ensureEnquiriesTable();
  const db = getDbClient();

  const result = await db.execute(`
    SELECT * FROM enquiries WHERE notification_status = 'failed' ORDER BY created_at ASC LIMIT 50
  `);

  return result.rows.map((row) => ({
    id: String(row.id),
    idempotencyKey: row.idempotency_key ? String(row.idempotency_key) : undefined,
    name: String(row.name),
    email: row.email ? String(row.email) : null,
    phone: row.phone ? String(row.phone) : null,
    service: String(row.service),
    message: String(row.message),
    company: row.company ? String(row.company) : null,
    website: row.website ? String(row.website) : null,
    industry: row.industry ? String(row.industry) : null,
    budgetRange: row.budget_range ? String(row.budget_range) : null,
    timing: row.timing ? String(row.timing) : null,
    timeZone: row.time_zone ? String(row.time_zone) : null,
    source: row.source ? String(row.source) : null,
    notificationStatus: row.notification_status as EnquiryRecord["notificationStatus"],
    notificationError: row.notification_error ? String(row.notification_error) : null,
    createdAt: String(row.created_at),
  }));
}
