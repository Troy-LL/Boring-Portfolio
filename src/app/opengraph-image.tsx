import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F2EEE8",
          color: "#141210",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#C9A36A",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {SITE.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#292623",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            {SITE.positioning}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#292623",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>{SITE.location}</span>
          <span style={{ opacity: 0.7 }}>{SITE.motto}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
