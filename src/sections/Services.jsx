import React, { useState } from 'react';
import T from "../tokens";
import Reveal from "../components/Reveal";

/* ─── SERVICE CARD SUB-COMPONENT ─── */
function ServiceCard({ icon, title, desc, features, featured, tag, delay, price }) {
  const [hov, setHov] = useState(false);
  
  return (
    <Reveal delay={delay}>
      <div 
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: featured ? `linear-gradient(145deg, ${T.bgDark}, ${T.bgDark2})` : "#fff",
          border: `1px solid ${hov ? (featured ? T.lime + "55" : T.borderHover) : (featured ? "rgba(255,255,255,0.06)" : T.border)}`,
          borderRadius: 20, 
          padding: "36px 30px",
          position: "relative", 
          overflow: "hidden",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s, border-color 0.3s",
          transform: hov ? "translateY(-8px)" : "translateY(0)",
          boxShadow: hov ? (featured ? "0 24px 60px rgba(13,43,31,0.3)" : "0 24px 56px rgba(13,43,31,0.1)") : "0 2px 12px rgba(13,43,31,0.04)",
          cursor: "default", 
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}>
        
        {featured && hov && (
          <div style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${T.lime}20, transparent 70%)`,
            pointerEvents: "none"
          }} />
        )}
        
        {tag && (
          <div style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: T.lime,
            color: T.bgDark,
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            padding: "3px 11px",
            borderRadius: 100,
            fontFamily: "'DM Mono',monospace"
          }}>
            {tag}
          </div>
        )}
        
        <div style={{
          fontSize: "2rem",
          marginBottom: 22,
          display: "inline-block",
          transition: "transform 0.3s",
          transform: hov ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0)"
        }}>
          {icon}
        </div>
        
        <h3 style={{
          fontFamily: "'Fraunces',serif",
          fontSize: "1.4rem",
          fontWeight: 700,
          color: featured ? "#fff" : T.textDark,
          marginBottom: 10,
          letterSpacing: "-0.5px"
        }}>
          {title}
        </h3>
        
        <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "0.88rem",
          color: featured ? "rgba(255,255,255,0.55)" : T.textMid,
          lineHeight: 1.75,
          marginBottom: 20
        }}>
          {desc}
        </p>

        {price && (
          <div style={{ marginBottom: 28 }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: featured ? T.lime : T.green,
              marginBottom: 4,
              opacity: 0.9
            }}>
              Starting from
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.6rem",
              fontWeight: 800,
              color: featured ? "#fff" : T.textDark
            }}>
              {price}
            </div>
          </div>
        )}
        
        <ul style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: "auto"
        }}>
          {features.map(f => (
            <li key={f} style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "0.84rem",
              color: featured ? "rgba(255,255,255,0.6)" : T.textMid
            }}>
              <span style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: featured ? "rgba(168,224,99,0.15)" : "rgba(45,140,94,0.1)",
                color: featured ? T.lime : T.green,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.6rem",
                fontWeight: 700,
                flexShrink: 0
              }}>
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ─── MAIN SERVICES COMPONENT ─── */
export default function Services() {
  const cards = [
    { 
      icon: "🚀", 
      title: "Landing Page", 
      price: "LKR 15,000",
      desc: "A high-converting landing page designed to attract customers and turn visitors into leads or sales", 
      features: ["Best for: New businesses, promotions, campaigns","1 page custom design", "WhatsApp chat integration", "Fully mobile responsive","Delivered in 2-3 days"], 
      featured: false 
    },
    { 
      icon: "🌐", 
      title: "Business Website", 
      price: "LKR 35,000",
      desc: "A full multi-page site that builds trust and turns visitors into customers.", 
      features: ["Best for: Companies that need full online presence","Up to 5 custom pages", "WhatsApp chat integration","Fully mobile responsive", "Google Maps & SEO setup", "Delivered in 3-7 days"], 
      featured: true, 
      tag: "Most Popular" 
    },
    { 
      icon: "🛒", 
      title: "Online Ordering System", 
      price: "LKR 55,000",
      desc: "Allow customers to browse products and place orders directly from your website.", 
      features: ["Product catalog & shopping cart", "Order via WhatsApp or website checkout", "Payment gateway integration available", "Fully mobile responsive","Perfect for restaurants, cafés & small stores","Delivered in 14-28 days"], 
      featured: false 
    },
    { 
      icon: "🧾", 
      title: "POS System", 
      price: "LKR 65,000",
      desc: "A complete point-of-sale system with inventory, billing, and reporting for retail or hospitality businesses.", 
      features: ["Inventory management", "Sales and checkout workflows", "Daily reports & analytics", "Mobile-friendly dashboard", "Cash drawer / payment-ready setup", "Delivered in 21-28 days"], 
      featured: true,
      tag: "Best for Retail"
    },
  ];

  return (
<section id="services" style={{ padding: "110px 6%", background: T.bg }}>      
      <Reveal>
        <div style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "0.7rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: T.green,
          marginBottom: 12
        }}>
          What We Offer
        </div>
      </Reveal>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 56,
        flexWrap: "wrap",
        gap: 20
      }}>
        <Reveal delay={1}>
          <h2 style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(2.2rem,4vw,3.6rem)",
            fontWeight: 900,
            letterSpacing: "-1.5px",
            color: T.textDark,
            lineHeight: 1.05
          }}>
            Everything your business<br />
            needs <em style={{ color: T.green }}>online.</em>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "1rem",
            color: T.textMid,
            lineHeight: 1.75,
            maxWidth: 400
          }}>
            From a simple landing page to a full website — clean, fast, and professional.
          </p>
        </Reveal>
      </div>

      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20
        }}
      >
        {cards.map((c, i) => (
          <ServiceCard key={c.title} {...c} delay={i + 1} />
        ))}
      </div>
    </section>
  );
}