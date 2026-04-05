import React, { useState } from 'react';

/* ─── TESTIMONIAL CARD SUB-COMPONENT ─────────────────────────── */
const ReviewCard = ({ r, i, theme }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "30px",
        border: `1px solid ${hov ? theme.borderHover : theme.border}`,
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov ? "0 20px 50px rgba(13,43,31,0.1)" : "0 2px 12px rgba(13,43,31,0.04)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      {/* Animated Top Border */}
      {hov && (
        <div style={{ 
          position: "absolute", top: 0, left: 0, right: 0, height: 3, 
          background: `linear-gradient(90deg, ${theme.green}, ${theme.lime})`, 
          animation: "fadeIn 0.3s ease" 
        }} />
      )}

      <div>
        {/* Stars */}
        <div style={{ color: "#f59e0b", fontSize: "0.9rem", letterSpacing: 3, marginBottom: 16 }}>
          ★★★★★
        </div>

        {/* Quote */}
        <p style={{ 
          fontFamily: "'Fraunces', serif", 
          fontStyle: "italic", 
          fontSize: "1.05rem", 
          color: theme.textDark, 
          lineHeight: 1.75, 
          marginBottom: 22 
        }}>
          "{r.text}"
        </p>
      </div>

      {/* Author Info */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ 
          width: 40, height: 40, borderRadius: "50%", 
          background: `linear-gradient(135deg, ${r.color}, ${theme.greenLight || theme.lime})`, 
          display: "flex", alignItems: "center", justifyContent: "center", 
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", 
          color: "#fff", flexShrink: 0 
        }}>
          {r.initials}
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: theme.textDark }}>
            {r.name}
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: theme.textLight, marginTop: 2 }}>
            {r.role}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── MAIN TESTIMONIALS SECTION ──────────────────────────────── */
export default function Testimonials() {
  // Theme context (Ensure these match your global tokens)
  const theme = {
    green: "#2d8c5e",
    lime: "#a8e063",
    textDark: "#1a1a1a",
    textLight: "rgba(0,0,0,0.45)",
    border: "#eeeeee",
    borderHover: "#d1d1d1",
    creamDark: "#f9f8f4"
  };

  const reviews = [
    { text: "PlantWeb built our restaurant website in under a week. Now customers WhatsApp us orders directly — it's been a total game changer.", name: "Ravi Kumara", role: "Owner, Green Fork Kitchen", initials: "RK", color: theme.green },
    { text: "Professional, affordable, and incredibly fast. My consulting site looks exactly how I imagined it. Support after launch was great too.", name: "Sasha Perera", role: "Director, Nova Consulting", initials: "SP", color: "#1a4d35" },
    { text: "I was worried about cost but the pricing was very reasonable. The website looks premium and my clients keep complimenting it.", name: "Nadia Fernando", role: "Founder, Bloom Beauty Studio", initials: "NF", color: "#2d5e3a" },
  ];

  return (
    <section id="reviews" style={{ padding: "110px 6%", background: theme.creamDark }}>
      {/* Label */}
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", color: theme.green, marginBottom: 12 }}>
        Client Reviews
      </div>

      {/* Header */}
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 4vw, 3.6rem)", fontWeight: 900, letterSpacing: "-1.5px", color: theme.textDark, lineHeight: 1.05, marginBottom: 52 }}>
        What our<br /><em style={{ color: theme.green, fontStyle: "italic" }}>clients say.</em>
      </h2>

      {/* Grid */}
      <div className="testi-grid">
        {reviews.map((r, i) => (
          <ReviewCard key={r.name} r={r} i={i} theme={theme} />
        ))}
      </div>

      <style>{`
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .testi-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .testi-grid { grid-template-columns: 1fr; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}