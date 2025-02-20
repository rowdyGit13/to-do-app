import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema/index.ts",
  out: "./db/migrations",
  dialect: "postgresql", //tells drizzle what language we are using
  dbCredentials: {
    url: process.env.DATABASE_URL! //environmental variable from vercel gets injected here securely
  }
});