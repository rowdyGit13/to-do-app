import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/utilities/providers";

export const metadata: Metadata = {
  title: "ToDo App",
  description: "A simple to-do list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
