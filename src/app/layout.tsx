import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const title = `${SITE.name} | Portfolio`;
const description = `${SITE.role}. ${SITE.positioning} ${SITE.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    "Troy Lazaro",
    "Troy Lauren T. Lazaro",
    "AI engineer",
    "builder",
    "portfolio",
    "PUP",
    "Manila",
    "software",
    "AI",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/brand/tl.ico", sizes: "48x48" },
      { url: "/brand/tl.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/brand/apple.png", sizes: "180x180", type: "image/png" }],
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
