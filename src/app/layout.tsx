import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { boska, gambetta, switzer } from "./fonts";
import Navbar from "@/components/Navbar";
import DoorProvider from "@/components/DoorProvider";

export const metadata: Metadata = {
  title: "Troy Lazaro",
  description: "I make things. I care how they look and how they work.",
  keywords: ["Troy Lazaro", "troylazaro.dev"],
  authors: [{ name: "Troy Lazaro" }],
  openGraph: {
    title: "Troy Lazaro",
    description: "I make things. I care how they look and how they work.",
    type: "website",
    locale: "en_PH",
  },
};

const roomBoot = `
(function () {
  try {
    if (
      location.pathname !== "/" ||
      location.hash ||
      sessionStorage.getItem("troy-door") === "entered"
    ) {
      document.documentElement.dataset.room = "open";
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${boska.variable} ${gambetta.variable} ${switzer.variable}`}
    >
      <body className="antialiased">
        <Script id="room-boot" strategy="beforeInteractive">
          {roomBoot}
        </Script>
        <noscript>
          <style>{`[data-door]{display:none!important} nav{visibility:visible!important;pointer-events:auto!important}`}</style>
        </noscript>
        <DoorProvider>
          <Navbar />
          {children}
        </DoorProvider>
      </body>
    </html>
  );
}
