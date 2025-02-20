//define data structure for our todos table
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// initialize the table and pass two arguments:
// 1. name of the table
// 2. schema of the table
//id is uuid and id becuase not one to one relationship between todos and users
export const todosTable = pgTable("todos", {
  id: uuid("id").defaultRandom().primaryKey(), //each time we create a new todo, it will generate a new uuid
  userId: text("user_id").notNull(),
  content: text("content").notNull(), //a todo needs to have text content
  completed: boolean("completed").default(false).notNull(), //a todo needs to have a completed status
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

export type InsertTodo = typeof todosTable.$inferInsert;
export type SelectTodo = typeof todosTable.$inferSelect;