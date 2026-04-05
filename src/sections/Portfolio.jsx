import { useState } from "react";
import T from "../tokens";
import Reveal from "../components/Reveal";
import auramImg from "../assets/auram.jpg";
import lumiereImg from "../assets/lumiere.jpg";
import bakeryImg from "../assets/bakery.jpg";
import textileImg from "../assets/textile.jpg";

const PROJECTS = [
  {
    cat: "Restaurant & Food",
    name: "Auram Fine Dining",
    desc: "Luxury fine dining website with elegant design and premium presentation.",
    color: "#0d2b1f",
    accent: T.lime,
    image: auramImg,
    link: "https://auram-finedining.netlify.app/",
  },
  {
    cat: "Beauty & Wellness",
    name: "Lumiere Premium Saloon",
    desc: "Premium salon website with stylish layout, service sections, and booking feel.",
    color: "#1f0a2b",
    accent: "#e879f9",
    image: lumiereImg,
    link: "https://luimierepremiumsaloon.netlify.app/",
  },
  {
    cat: "Bakery & Shop",
    name: "Bakery Shop",
    desc: "Modern bakery website with product showcase and attractive visual layout.",
    color: "#2b1200",
    accent: "#fb923c",
    image: bakeryImg,
    link: "https://bakeryshop454.netlify.app/",
  },
  {
    cat: "Fashion & Textile",
    name: "Jayathissa Textile",
    desc: "Professional textile business website with clean branding and product display.",
    color: "#0f1e35",
    accent: "#60a5fa",
    image: textileImg,
    link: "https://jayathissatextile.netlify.app/",
  },
];

function GreenBtn({ href, children }) {
  const [hov, setHov] = useState(false);

  return (
    <a
      href={href}
      data-hover
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "13px 26px",
        borderRadius: 100,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.92rem",
        fontWeight: 600,
        textDecoration: "none",
        border: "none",
        cursor: "none",
        flexShrink: 0,
        background: T.green,
        color: "#fff",
        whiteSpace: "nowrap",
        boxShadow: hov ? "0 8px 28px rgba(45,140,94,0.45)" : "0 4px 16px rgba(45,140,94,0.25)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
    >
      {children}
    </a>
  );
}

function ProjectCard({ cat, name, desc, accent, delay, image, link }) {
  const [hov, setHov] = useState(false);

  return (
    <Reveal delay={delay}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          data-hover
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            background: "#fff",
            borderRadius: 20,
            overflow: "hidden",
            border: `1px solid ${hov ? T.borderHover : T.border}`,
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s, border-color 0.3s",
            transform: hov ? "translateY(-6px)" : "translateY(0)",
            boxShadow: hov ? "0 24px 56px rgba(13,43,31,0.12)" : "0 2px 12px rgba(13,43,31,0.04)",
            cursor: "none",
          }}
        >
          {/* Thumbnail */}
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Info */}
          <div style={{ padding: "22px 24px" }}>
            <div
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.65rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: accent,
                marginBottom: 6,
              }}
            >
              {cat}
            </div>

            <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: T.textDark,
                marginBottom: 7,
              }}
            >
              {name}
            </div>

            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "0.84rem",
                color: T.textMid,
                lineHeight: 1.65,
                marginBottom: 16,
              }}
            >
              {desc}
            </p>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: T.green,
              }}
            >
              View Live Site →
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <section id="work" style={{ padding: "110px 6%", background: T.bg }}>
      <Reveal>
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.7rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: T.green,
            marginBottom: 12,
          }}
        >
          Our Work
        </div>
      </Reveal>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 52,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ flex: 1 }}>
          <Reveal delay={1}>
            <h2
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "clamp(2.2rem,4vw,3.6rem)",
                fontWeight: 900,
                letterSpacing: "-1.5px",
                color: T.textDark,
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Recent
              <br />
              <em style={{ color: T.green, fontStyle: "italic" }}>
                projects.
              </em>
            </h2>
          </Reveal>
        </div>

        <div>
          <Reveal delay={2}>
            <div style={{ paddingBottom: "8px" }}>
              <GreenBtn href="#contact">Start your project →</GreenBtn>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="portfolio-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
          gap: 20,
        }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} {...p} delay={i % 2 + 1} />
        ))}
      </div>
    </section>
  );
}