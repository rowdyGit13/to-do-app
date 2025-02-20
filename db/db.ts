import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { todosTable } from "./schema/todos-schema";
import { profilesTable } from "./schema/profiles-schema";

config({ path: ".env.local" });

const schema = {
    profiles: profilesTable,
    todos: todosTable
};

const client = postgres(process.env.DATABASE_URL!); //once again using the environmental variable securely

export const db = drizzle(client, { schema });