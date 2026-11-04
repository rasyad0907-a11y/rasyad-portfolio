
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RASYAD. | Creative Designer & Developer",
  description:
    "Personal portfolio of Rasyad — Graphic Designer, Web Developer, and Roblox Game Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
