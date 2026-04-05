// src/sections/Process.jsx
import React, { useState } from 'react';
import T from "../tokens";

const Step = ({ s }) => {
  const [hov, setHov] = useState(false);
  
  // Use a fallback if T.lime isn't defined to prevent crashing
  const limeColor = T.lime || "#a8e063";

  return (
    <div 
      onMouseEnter={() => setHov(true)} 
      onMouseLeave={() => setHov(false)}
      data-hover
      style={{ 
        padding: "60px 30px", 
        borderRight: `1px solid rgba(255,255,255,0.08)`, 
        borderBottom: `1px solid rgba(255,255,255,0.08)`,
        background: hov ? "rgba(168,224,99,0.03)" : "transparent",
        transition: "all 0.4s ease",
        position: "relative",
        cursor: "none"
      }}
    >
      {/* Background Number: Very subtle when not hovering, glows when it is */}
      <div style={{ 
        fontFamily: "'Fraunces', serif", 
        fontSize: "5rem", 
        fontWeight: 900, 
        fontStyle: "italic",
        color: hov ? limeColor : "#fff",
        opacity: hov ? 0.15 : 0.03, // Low opacity for that "ghost" effect
        transition: "all 0.5s ease",
        lineHeight: 0.8,
        marginBottom: 20,
        userSelect: "none"
      }}>
        {s.n}
      </div>

      <h3 style={{ 
        fontFamily: "'Fraunces', serif", 
        fontSize: "1.4rem",
        color: "#fff", 
        marginBottom: 15,
        fontWeight: 700 
      }}>
        {s.title}
      </h3>

      <p style={{ 
        fontFamily: "'DM Sans', sans-serif",
        color: "rgba(255,255,255,0.5)", 
        fontSize: "0.95rem", 
        lineHeight: 1.7 
      }}>
        {s.desc}
      </p>

      {/* Hover line indicator at the bottom */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: hov ? "100%" : "0%",
        height: "2px",
        background: limeColor,
        transition: "width 0.4s ease"
      }} />
    </div>
  );
};

export default function Process() {
  const steps = [
    { n: "01", title: "Discovery Call", desc: "We chat about your goals, what you need, and what your customers expect from your website." },
    { n: "02", title: "Design & Build", desc: "We design and develop your site — clean, fast, and built for mobile from the ground up." },
    { n: "03", title: "Review & Refine", desc: "You review and we adjust until every detail is exactly how you envisioned it." },
    { n: "04", title: "Launch & Support", desc: "Your website goes live. We handle everything and stay available after launch." },
  ];

  return (
    <section id="process" style={{ background: T.bgDark || "#080808", padding: "120px 6%" }}>
      <div style={{ 
        fontFamily: "'DM Mono', monospace", 
        fontSize: "0.75rem", 
        color: T.lime || "#a8e063", 
        textTransform: "uppercase", 
        letterSpacing: "2px",
        marginBottom: 15
      }}>
        How It Works
      </div>

      <h2 style={{ 
        fontFamily: "'Fraunces', serif", 
        fontSize: "clamp(2.5rem, 5vw, 4.2rem)", 
        fontWeight: 900, 
        color: "#fff", 
        lineHeight: 1.1, 
        marginBottom: 80,
        letterSpacing: "-1.5px"
      }}>
        Simple,<br />
        <span style={{ color: T.lime || "#a8e063", fontStyle: "italic" }}>transparent</span> process.
      </h2>

      <div className="process-grid">
        {steps.map((s, i) => (
          <Step key={s.n} s={s} />
        ))}
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-left: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 1100px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}