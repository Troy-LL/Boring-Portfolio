import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Troy Lauren T. Lazaro | IT Student & AI/ML Researcher",
  description: "Official portfolio of Troy Lauren T. Lazaro. IT Student at PUP, AI/ML Researcher, and Community Leader. Focused on building with intention. Life is too short to be boring.",
  keywords: ["Troy Lazaro", "AI Researcher", "IT Student", "PUP Manila", "Full Stack Developer", "Boring Portfolio"],
  authors: [{ name: "Troy Lauren T. Lazaro" }],
  openGraph: {
    title: "Troy Lauren T. Lazaro | Portfolio",
    description: "IT Student, AI/ML Researcher & Community Leader. Life is too short to be boring.",
    type: "website",
    locale: "en_PH",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
