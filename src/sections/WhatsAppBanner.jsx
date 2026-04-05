// src/components/WhatsAppBanner.jsx
import React, { useState } from 'react';
import T from "../tokens";

export default function WhatsAppBanner() {
  const [hov, setHov] = useState(false);

  return (
    <section style={{ 
      background: T.bg, 
      padding: "0", 
      width: "100%" 
    }}>
      <div className="wa-banner" style={{
        background: `linear-gradient(135deg, ${T.bgDark2} 0%, ${T.bgDark} 100%)`,
        padding: "60px 6%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        gap: 30, 
        flexWrap: "wrap", 
        position: "relative", 
        overflow: "hidden",
        // BORDER RADIUS REMOVED
        borderRadius: "0", 
        margin: "0",
        borderTop: `1px solid rgba(255,255,255,0.05)`,
        borderBottom: `1px solid rgba(255,255,255,0.05)`,
      }}>
        
        {/* Subtle Glow */}
        <div style={{ 
          position: "absolute", 
          top: "-30%", 
          right: "-5%", 
          width: 400, 
          height: 400, 
          borderRadius: "50%", 
          background: `radial-gradient(circle, ${T.lime}10 0%, transparent 70%)`, 
          zIndex: 0 
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "550px" }}>
          <h3 style={{ 
            fontFamily: "'Fraunces', serif", 
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)", 
            fontWeight: 900, 
            color: "#ffffff",
            lineHeight: 1.1, 
            marginBottom: 8, 
            letterSpacing: "-0.5px"
          }}>
            Have a quick question?<br />
            <span style={{ color: T.lime, fontStyle: "italic" }}>Message us on WhatsApp.</span>
          </h3>
          
          <p style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: "0.95rem", 
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            margin: 0
          }}>
            We reply fast. Tell us about your business and we'll suggest the best option.
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <a 
            href="https://wa.me/94704657789" 
            target="_blank" 
            rel="noreferrer"
            onMouseEnter={() => setHov(true)} 
            onMouseLeave={() => setHov(false)}
            style={{
              display: "inline-flex", 
              alignItems: "center", 
              gap: 10,
              background: hov ? "#20bd5a" : "#25d366", 
              color: "#fff",
              padding: "14px 28px", 
              borderRadius: "100px", // Button keeps its pill shape for the WhatsApp look
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "0.95rem", 
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
              transform: hov ? "translateY(-3px)" : "translateY(0)",
              boxShadow: hov ? `0 10px 25px rgba(37,211,102,0.3)` : "0 4px 15px rgba(0,0,0,0.1)",
              cursor: "pointer"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}