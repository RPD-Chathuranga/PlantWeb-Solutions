// src/sections/Hero.jsx
import { useState, useEffect } from "react";
import T from "../tokens";
import MagneticBtn from "../components/MagneticBtn";

// ── Sub-Component: Browser Mockup ──
function HeroBrowserMockup() {
  const lines = [
    { w: "70%", color: "rgba(45,140,94,0.3)", h: 8 },
    { w: "50%", color: "rgba(168,224,99,0.2)", h: 6 },
    { w: "85%", color: "rgba(45,140,94,0.12)", h: 5 },
  ];
  return (
    <div style={{
      background: "#fff", borderRadius: 16, overflow: "hidden",
      boxShadow: "0 32px 80px rgba(13,43,31,0.18), 0 8px 24px rgba(13,43,31,0.1)",
      animation: "floatA 5s ease-in-out infinite",
      border: `1px solid ${T.border}`,
    }}>
      {/* Browser chrome */}
      <div style={{ background: T.bg, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: `1px solid ${T.border}` }}>
        {["#ff5f57", "#febc2e", "#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        <div style={{ flex: 1, background: "rgba(0,0,0,0.05)", borderRadius: 4, height: 20, marginLeft: 8, display: "flex", alignItems: "center", paddingLeft: 10 }}>
          <span style={{ fontSize: "0.68rem", color: T.textLight, fontFamily: "'DM Mono',monospace" }}>yourclientbusiness.com</span>
        </div>
      </div>
      {/* Hero bar */}
      <div style={{ background: `linear-gradient(135deg, ${T.bgDark}, ${T.green})`, padding: "18px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>Your Business Online</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["#fff3", "#fff2", "#fff2"].map((c, i) => <div key={i} style={{ flex: 1, height: 5, borderRadius: 3, background: c }} />)}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[T.green + "22", T.lime + "33", T.green + "18"].map((c, i) => (
            <div key={i} style={{ height: 52, borderRadius: 8, background: c, border: `1px solid ${T.border}` }} />
          ))}
        </div>
        {lines.map((l, i) => (
          <div key={i} style={{
            height: l.h, borderRadius: 3, background: l.color, width: l.w,
            backgroundImage: `linear-gradient(90deg, ${l.color} 0%, rgba(168,224,99,0.15) 50%, ${l.color} 100%)`,
            backgroundSize: "400px 100%",
            animation: `shimmer 2.5s ${i * 0.3}s infinite linear`,
          }} />
        ))}
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          <div style={{ height: 28, borderRadius: 14, background: T.bgDark, flex: 1, maxWidth: 100 }} />
          <div style={{ height: 28, borderRadius: 14, background: T.border, flex: 1, maxWidth: 80 }} />
        </div>
      </div>
    </div>
  );
}

// ── Sub-Component: Floating Card ──
function FloatCard({ style: s, animDelay, children }) {
  return (
    <div style={{
      position: "absolute", background: "#fff", borderRadius: 14,
      padding: "12px 16px", boxShadow: "0 12px 40px rgba(13,43,31,0.14)",
      border: `1px solid ${T.border}`,
      animation: `floatB 4s ${animDelay || "0s"} ease-in-out infinite`,
      zIndex: 10,
      ...s,
    }}>
      {children}
    </div>
  );
}

export default function Hero() {
  const words = ["business.", "brand.", "growth.", "future."];
  const [wIdx, setWIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setFade(false);
      setTimeout(() => { setWIdx(i => (i + 1) % words.length); setFade(true); }, 350);
    }, 2600);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" className="hero-grid" style={{
      minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr",
      alignItems: "center", padding: "120px 6% 80px", gap: 60, position: "relative", overflow: "hidden",background: T.bg,
    }}>
      {/* Background Decor */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "10%", left: "50%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(45,140,94,0.07) 0%, transparent 70%)", transform: "translate(-50%,-50%)", animation: "floatA 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(168,224,99,0.08) 0%, transparent 70%)", animation: "floatB 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${T.green}08 1px, transparent 1px), linear-gradient(90deg, ${T.green}08 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />
      </div>

      {/* Left Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(45,140,94,0.08)", border: `1px solid rgba(45,140,94,0.2)`,
          color: T.green, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px",
          textTransform: "uppercase", padding: "7px 16px", borderRadius: 100,
          marginBottom: 28, animation: "fadeIn 0.6s ease both", fontFamily: "'DM Mono',monospace",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.lime, animation: "pulse 2s infinite", display: "inline-block" }} />
          Available for new projects
        </div>

        <h1 style={{
          fontFamily: "'Fraunces',serif", fontWeight: 900, lineHeight: 1.0,
          letterSpacing: "-2.5px", color: T.textDark,
          fontSize: "clamp(3.2rem,5.5vw,5.5rem)",
          animation: "fadeUp 0.8s 0.1s ease both",
        }}>
          Websites that<br />
          <em style={{ color: T.green, fontStyle: "italic" }}>grow</em> your<br />
          <span style={{ position: "relative", display: "inline-block", transition: "opacity 0.35s", opacity: fade ? 1 : 0 }}>
            {words[wIdx]}
            <span style={{
              position: "absolute", left: 0, bottom: 3, width: "100%", height: 7,
              background: T.lime, borderRadius: 4, zIndex: -1,
              transformOrigin: "left", animation: "scaleIn 0.5s 0.9s ease both",
            }} />
          </span>
        </h1>

        <p style={{
          fontFamily: "'DM Sans',sans-serif", fontSize: "1.06rem", color: T.textMid,
          lineHeight: 1.8, maxWidth: 440, margin: "26px 0 36px",
          animation: "fadeUp 0.8s 0.2s ease both",
        }}>
          Modern, affordable websites for small businesses — landing pages, business sites, and WhatsApp integration to help you grow online.
        </p>

        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", animation: "fadeUp 0.8s 0.3s ease both" }}>
          <MagneticBtn href="#contact" dark>Start Your Project</MagneticBtn>
          <a href="#work" style={{
            display: "flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.92rem", fontWeight: 500, color: T.textMid, textDecoration: "none",
            transition: "color 0.2s, gap 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.color = T.textDark; e.currentTarget.style.gap = "12px"; }}
            onMouseLeave={e => { e.currentTarget.style.color = T.textMid; e.currentTarget.style.gap = "8px"; }}
          >
            See our work
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        <div className="hero-badges" style={{ display: "flex", gap: 10, marginTop: 44, flexWrap: "wrap", animation: "fadeUp 0.8s 0.4s ease both" }}>
          {["⚡ Fast Delivery", "📱 Mobile Friendly", "🛡 Reliable Support", "💬 WhatsApp Ready"].map(b => (
            <span key={b} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", fontWeight: 500,
              color: T.textMid, background: "#fff", border: `1px solid ${T.border}`,
              padding: "6px 14px", borderRadius: 100,
              boxShadow: "0 2px 8px rgba(13,43,31,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(13,43,31,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(13,43,31,0.05)"; }}
              data-hover>{b}</span>
          ))}
        </div>
      </div>

      {/* Right Visual Side */}
      <div className="hero-visual" style={{ position: "relative", zIndex: 1, animation: "fadeUp 0.9s 0.3s ease both" }}>
        <HeroBrowserMockup />
        
        {/* Visitors Card */}
        <FloatCard style={{ bottom: -18, left: -28 }} animDelay="0s">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${T.green}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" fill="none" stroke={T.green} strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
            </div>
            <div>
              <div style={{ fontSize: "0.68rem", color: T.textLight, fontFamily: "'DM Sans',sans-serif" }}>Visitors this week</div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: T.textDark, fontFamily: "'Fraunces',serif" }}>+1,284</div>
            </div>
          </div>
        </FloatCard>

        {/* New Customers Card */}
        <FloatCard style={{ top: -18, right: -22 }} animDelay="1.8s">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${T.lime}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" fill="none" stroke={T.textDark} strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </div>
            <div>
              <div style={{ fontSize: "0.68rem", color: T.textLight, fontFamily: "'DM Sans',sans-serif" }}>New customers</div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: T.textDark, fontFamily: "'Fraunces',serif" }}>+47 today</div>
            </div>
          </div>
        </FloatCard>

        {/* Delivered Card */}
        <FloatCard style={{ bottom: 60, right: -30 }} animDelay="0.9s">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "1.1rem" }}>🚀</span>
            <div>
              <div style={{ fontSize: "0.68rem", color: T.textLight }}>Delivered in</div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: T.textDark, fontFamily: "'Fraunces',serif" }}>7 days</div>
            </div>
          </div>
        </FloatCard>
      </div>
    </section>
  );
}