import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Apexa AI Labs — AI & Custom Software in Saudi Arabia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #020617 0%, #0e7490 45%, #ea580c 100%)",
          padding: "64px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              opacity: 0.9,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Makkah · Saudi Arabia
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
            Apexa AI Labs
          </div>
          <div style={{ fontSize: 34, fontWeight: 500, opacity: 0.95, maxWidth: 900 }}>
            Best AI & custom software partner for KSA businesses
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          <div>AI Automations · Custom Software · Arabic-ready</div>
          <div>apexa.ai</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
