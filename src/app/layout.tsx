import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Portfolio`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.positioning} ${SITE.motto}`,
  keywords: [
    "Troy Lazaro",
    "Troy Lauren T. Lazaro",
    "portfolio",
    "PUP",
    "software",
    "AI",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} | Portfolio`,
    description: `${SITE.positioning} ${SITE.motto}`,
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
