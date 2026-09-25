import { ImageResponse } from "next/og";
import { portfolioConfig } from "@/lib/config";

export const runtime = "edge";
export const alt = `${portfolioConfig.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #05070d 0%, #10131c 100%)",
          color: "#e7e9f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#22d3ee", marginBottom: 18 }}>
          {portfolioConfig.title}
        </div>
        <div style={{ display: "flex", fontSize: 66, fontWeight: 700 }}>
          {portfolioConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8b90a3",
            marginTop: 26,
            maxWidth: 820,
          }}
        >
          {portfolioConfig.shortBio}
        </div>
      </div>
    ),
    { ...size }
  );
}
