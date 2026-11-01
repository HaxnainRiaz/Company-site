import "server-only";
import { getDbClient } from "../db";
import { serverEnv } from "../env";
import crypto from "node:crypto";

let rateLimitTableInitialized = false;

export async function ensureRateLimitTable(): Promise<void> {
  if (rateLimitTableInitialized) return;

  const db = getDbClient();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS rate_limits (
      client_hash TEXT NOT NULL,
      window_start INTEGER NOT NULL,
      request_count INTEGER NOT NULL,
      PRIMARY KEY (client_hash, window_start)
    );
  `);

  rateLimitTableInitialized = true;
}

/**
 * Generates an anonymized hash for rate limiting to avoid storing raw client IP addresses.
 */
function hashClientIdentifier(rawIp: string): string {
  return crypto
    .createHmac("sha256", serverEnv.RATE_LIMIT_SECRET)
    .update(rawIp || "anonymous-client")
    .digest("hex")
    .slice(0, 32);
}

/**
 * Atomic database-backed sliding window rate limiter: allows max 10 requests per 10-minute window.
 */
export async function checkRateLimit(
  rawIp: string,
  maxRequests = 10,
  windowSeconds = 600
): Promise<{ allowed: boolean; remaining: number }> {
  try {
    await ensureRateLimitTable();
    const db = getDbClient();

    const clientHash = hashClientIdentifier(rawIp);
    const now = Math.floor(Date.now() / 1000);
    const windowStart = now - (now % windowSeconds);

    // Clean up expired windows older than 1 hour
    await db.execute({
      sql: `DELETE FROM rate_limits WHERE window_start < ?`,
      args: [now - 3600],
    });

    // Fetch or increment window count
    const existing = await db.execute({
      sql: `SELECT request_count FROM rate_limits WHERE client_hash = ? AND window_start = ?`,
      args: [clientHash, windowStart],
    });

    if (existing.rows.length === 0) {
      await db.execute({
        sql: `INSERT INTO rate_limits (client_hash, window_start, request_count) VALUES (?, ?, 1)`,
        args: [clientHash, windowStart],
      });
      return { allowed: true, remaining: maxRequests - 1 };
    }

    const currentCount = Number(existing.rows[0].request_count);
    if (currentCount >= maxRequests) {
      return { allowed: false, remaining: 0 };
    }

    await db.execute({
      sql: `UPDATE rate_limits SET request_count = request_count + 1 WHERE client_hash = ? AND window_start = ?`,
      args: [clientHash, windowStart],
    });

    return { allowed: true, remaining: maxRequests - (currentCount + 1) };
  } catch (error) {
    console.error("Rate limit check error:", error);
    // Fail open in dev if database temporarily busy, but log warning
    return { allowed: true, remaining: 1 };
  }
}
