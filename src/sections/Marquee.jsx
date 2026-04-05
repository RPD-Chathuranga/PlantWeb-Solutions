// src/sections/Marquee.jsx
import T from "../tokens";

const ITEMS = [
  "Landing Pages",
  "Business Websites",
  "WhatsApp Integration",
  "Mobile First",
  "Fast Delivery",
  "Reliable Support",
  "Affordable Pricing",
  "Small Business Experts",
  "Sri Lanka 🇱🇰",
];

export default function Marquee() {
  // Duplicate array so the scroll loops seamlessly
  const all = [...ITEMS, ...ITEMS];

  return (
    <div style={{
      background: T.bgDark,
      padding: "15px 0",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}>
        {all.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'Fraunces',serif",
            fontStyle: "italic",
            fontSize: "0.88rem",
            color: "rgba(168,224,99,0.85)",
            padding: "0 28px",
            whiteSpace: "nowrap",
          }}>
            {t}{" "}
            <span style={{ color: "rgba(168,224,99,0.3)", fontStyle: "normal" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}