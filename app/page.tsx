import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App - Home",
  description: "Welcome to the Todo App - Get Started",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to <span className="text-primary">Todo App</span>
        </h1>
        <p className="text-muted-foreground max-w-[600px] text-lg sm:text-xl">
          Stay organized and boost your productivity with our powerful todo management system
        </p>
      </div>
      
      <div className="flex gap-4">
        <Link href="/login">
          <Button variant="default" size="lg">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant="outline" size="lg">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}