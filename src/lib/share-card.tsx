import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const shareAlt = `${SITE.name}. ${SITE.role}.`;

export const shareSize = {
  width: 1200,
  height: 630,
};

export const shareContentType = "image/png";

const paper = "#F2EEE8";
const ink = "#141210";
const muted = "#6F6A64";

async function font(file: string) {
  return readFile(join(process.cwd(), "src/fonts", file));
}

export async function shareCard() {
  const switzer = await font("Switzer-Regular.ttf");
  const host = new URL(SITE.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: paper,
          color: ink,
          padding: "88px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Switzer",
            fontSize: 92,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontFamily: "Switzer",
            fontSize: 28,
            color: muted,
          }}
        >
          {SITE.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            maxWidth: 860,
            fontFamily: "Switzer",
            fontSize: 36,
            lineHeight: 1.35,
          }}
        >
          {SITE.positioning}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontFamily: "Switzer",
            fontSize: 22,
            color: muted,
          }}
        >
          {host}
        </div>
      </div>
    ),
    {
      ...shareSize,
      fonts: [{ name: "Switzer", data: switzer, style: "normal", weight: 400 }],
    }
  );
}
