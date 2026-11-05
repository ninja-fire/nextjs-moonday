import { ImageResponse } from "next/og";

export const alt = "Moonday · Brand & product design studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card for every page without its own; case studies use their cover instead.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 15% 20%, #4f46e5 0%, #1d1d1d 45%, #141414 100%)",
          color: "#E7EEEB",
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", fontSize: 40, letterSpacing: "0.02em" }}>Moonday</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1.05 }}>
          <div style={{ display: "flex" }}>We design your</div>
          <div style={{ display: "flex" }}>brand & product faster</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#A8ADAA" }}>
          Brand, product and motion design for tech & Web3 startups
        </div>
      </div>
    ),
    size,
  );
}
