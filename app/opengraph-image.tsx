import { ImageResponse } from "next/og";

export const alt = "Nitish Kumar M: thoughtful websites and useful software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#ffeadf",
        color: "#39254c",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "58px 70px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 44, fontWeight: 800 }}>nish.</span>
        <span style={{ fontSize: 21 }}>Design & code / Bengaluru, India</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 102,
            letterSpacing: -6,
            lineHeight: 1,
            fontWeight: 800,
            textShadow: "3px 5px 0 #d5a8bb",
          }}
        >
          <span>Ideas into</span>
          <span>interfaces.</span>
        </div>
        <div
          style={{
            display: "flex",
            width: 260,
            height: 260,
            alignItems: "center",
            justifyContent: "center",
            background: "#cbb9f6",
            color: "#39254c",
            borderRadius: 60,
            border: "4px solid #e7dbff",
            boxShadow:
              "10px 14px 0 #b99dbb, inset 6px 6px 12px #f6eaff, inset -8px -10px 14px #af94c9",
            fontSize: 150,
            fontWeight: 700,
            letterSpacing: -10,
            transform: "rotate(-5deg)",
          }}
        >
          nk.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#705e74",
          borderTop: "1px solid #dfc8cf",
          paddingTop: 25,
        }}
      >
        <span>Thoughtful websites. Useful software.</span>
        <span>nishkumar.dev</span>
      </div>
    </div>,
    size,
  );
}
