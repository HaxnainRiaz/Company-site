import "server-only";

export const serverEnv = {
  SITE_URL: process.env.SITE_URL || "http://localhost:3000",
  LEAD_DATABASE_URL: process.env.LEAD_DATABASE_URL || "",
  LEAD_DATABASE_AUTH_TOKEN: process.env.LEAD_DATABASE_AUTH_TOKEN || "",
  RESEND_API_KEY: process.env.RESEND_API_KEY || "",
  LEAD_NOTIFICATION_TO: process.env.LEAD_NOTIFICATION_TO || "",
  LEAD_NOTIFICATION_FROM: process.env.LEAD_NOTIFICATION_FROM || "",
  RATE_LIMIT_SECRET: process.env.RATE_LIMIT_SECRET || "default-preview-rate-secret",
};
