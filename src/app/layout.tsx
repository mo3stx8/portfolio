import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostafa Ameen | Full-Stack Developer — Laravel & React",
  description:
    "Full-Stack Web Developer specializing in Laravel, PHP, React, and MySQL. Building responsive, database-driven web applications.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
