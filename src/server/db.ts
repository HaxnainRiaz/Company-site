import "server-only";
import { createClient, type Client } from "@libsql/client";
import { serverEnv } from "./env";
import path from "node:path";
import fs from "node:fs";

let dbClient: Client | null = null;

export function getDbClient(): Client {
  if (dbClient) {
    return dbClient;
  }

  let dbUrl = serverEnv.LEAD_DATABASE_URL;

  // If no production database URL is supplied, use a local SQLite file database in development
  if (!dbUrl) {
    const dataDir = path.resolve(process.cwd(), ".data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const dbPath = path.join(dataDir, "leads.db");
    dbUrl = `file:${dbPath.replace(/\\/g, "/")}`;
  }

  dbClient = createClient({
    url: dbUrl,
    authToken: serverEnv.LEAD_DATABASE_AUTH_TOKEN || undefined,
  });

  return dbClient;
}
