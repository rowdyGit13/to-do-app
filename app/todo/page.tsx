import { TodoList } from "@/components/todo-list";
import { getProfileByUserId } from "@/db/queries/profiles-queries";
import { getTodos } from "@/db/queries/todos-queries";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function TodoPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/auth/login");
  }

  const profile = await getProfileByUserId(userId);

  if (!profile) {
    return redirect("/auth/signup");
  }

  if (profile.membership === "free") {
    return redirect("/marketing/pricing");
  }

  const todos = await getTodos(userId);

  return (
    <TodoList
      userId={userId}
      initialTodos={todos}
    />
  );
}