"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
  [key: string]: any;
}

export const Providers = ({ children, ...props }: ProvidersProps) => {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  );
};