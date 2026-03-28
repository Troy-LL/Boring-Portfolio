import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Troy Lauren T. Lazaro | Portfolio",
  description: "IT Student, AI/ML Researcher & Community Leader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
