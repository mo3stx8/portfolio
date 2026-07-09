import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostafa Ameen | Full-Stack Developer",
  description:
    "Portfolio of Mostafa Ameen — Full-Stack Developer specializing in modern web applications",
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
