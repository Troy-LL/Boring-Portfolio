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

const paper = "#FFFFFF";
const ink = "#1A1816";
const muted = "#6F6A64";

async function font(file: string) {
  return readFile(join(process.cwd(), "src/fonts", file));
}

export async function shareCard() {
  const [boska, gambetta, switzer] = await Promise.all([
    font("Boska-Italic.ttf"),
    font("Gambetta-Regular.ttf"),
    font("Switzer-Regular.ttf"),
  ]);
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
            fontFamily: "Boska",
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
            fontFamily: "Gambetta",
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
            fontFamily: "Gambetta",
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
      fonts: [
        { name: "Boska", data: boska, style: "normal", weight: 400 },
        { name: "Gambetta", data: gambetta, style: "normal", weight: 400 },
        { name: "Switzer", data: switzer, style: "normal", weight: 400 },
      ],
    }
  );
}
