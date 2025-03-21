//define data structure for our profiles table
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const membershipEnum = pgEnum("membership", ["free", "pro"]);

export const profilesTable = pgTable("profiles", {
  //creating columns in our table
  userId: text("user_id").primaryKey().notNull(), //one to one relationship between profiles and users
  membership: membershipEnum("membership").notNull().default("free"),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

//good example of using drizzle for easy access of db from frontend
export type InsertProfile = typeof profilesTable.$inferInsert; //for creating a new profile
export type SelectProfile = typeof profilesTable.$inferSelect; //for fetching a single profile