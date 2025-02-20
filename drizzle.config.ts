import { config } from "dotenv";
import { DrizzleConfig } from "drizzle-kit";

config({ path: ".env.local" });

const config: DrizzleConfig = {
  schema: "./db/schema/index.ts",
  out: "./db/migrations",
  dialect: "postgresql", //tells drizzle what language we are using
  dbCredentials: {
    url: process.env.DATABASE_URL! //allows us to inject environmental variable securely while comitting this file to git
  }
};

export default config;