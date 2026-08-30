import localFont from "next/font/local";

// Self-hosted from Troy-LL/personal (Fontshare kits). Not Google. Not Fontshare CDN.

export const boska = localFont({
  src: [{ path: "../fonts/Boska-Italic.woff2", weight: "400", style: "italic" }],
  variable: "--font-boska",
  display: "swap",
});

export const gambetta = localFont({
  src: [
    { path: "../fonts/Gambetta-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Gambetta-Italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/Gambetta-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Gambetta-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Gambetta-Semibold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gambetta",
  display: "swap",
});

export const switzer = localFont({
  src: [
    { path: "../fonts/Switzer-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});
