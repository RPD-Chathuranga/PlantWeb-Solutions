import { useState, useEffect } from "react";
import T from "../tokens";
import MagneticBtn from "./MagneticBtn";
import useBreakpoint from "../hooks/useBreakpoint";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isTablet } = useBreakpoint();

  // ── Hide/show background on scroll ──
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ── Close menu when screen grows past tablet breakpoint ──
  useEffect(() => {
    if (!isTablet) setMenuOpen(false);
  }, [isTablet]);

  const links = ["Services", "Work", "Process", "Reviews", "Contact"];

  const navBg = scrolled || menuOpen
    ? "rgba(245,240,232,0.95)"
    : "transparent";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        padding: "20px 6%",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: T.bg,
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        borderBottom: scrolled || menuOpen ? `1px solid ${T.border}` : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>

        {/* ── Logo ── */}
        <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.3rem", fontWeight: 900, color: T.textDark, letterSpacing: "-0.5px" }}>
          Plant<span style={{ color: T.green }}>Web</span>{" "}
          <span style={{ fontWeight: 300, fontStyle: "italic", color: T.textLight }}>Solutions</span>
        </div>

        {/* ── Desktop links (FIXED: Added conditional display) ── */}
        <div className="nav-links-desktop" style={{ 
          display: isTablet ? "none" : "flex", // Hides links on mobile/tablet
          gap: 36, 
          alignItems: "center" 
        }}>
          {links.slice(0, -1).map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", fontWeight: 500, color: T.textMid, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = T.textDark}
              onMouseLeave={e => e.target.style.color = T.textMid}
            >{l}</a>
          ))}
          <MagneticBtn href="#contact" dark style={{ padding: "9px 22px", fontSize: "0.85rem", }}>
            Get Started
          </MagneticBtn>
        </div>

        {/* ── Hamburger (tablet/mobile only) ── */}
        {isTablet && (
          <button
            data-hover
            onClick={() => setMenuOpen(o => !o)}
            style={{ 
              background: "none", 
              border: `1px solid ${T.border}`, 
              borderRadius: 8, 
              padding: "8px 10px", 
              cursor: "none", 
              display: "flex", 
              flexDirection: "column", 
              gap: 4,
              zIndex: 501 // Ensure it stays above the dropdown
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 20, height: 2,
                background: T.textDark, borderRadius: 1,
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                  : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                  : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* ── Mobile dropdown menu ── */}
      {isTablet && menuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, // Full screen height
          zIndex: 499,
          background: "rgba(245,240,232,0.98)", 
          backdropFilter: "blur(16px)",
          padding: "100px 6% 40px", // Top padding to clear the fixed nav
          display: "flex", 
          flexDirection: "column", 
          gap: 8,
          animation: "fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both",
        }}>
          {links.map(l => (
            <a key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ 
                fontFamily: "'DM Sans',sans-serif", 
                fontSize: "1.5rem", // Larger for touch targets
                fontWeight: 500, 
                color: T.textDark, 
                textDecoration: "none", 
                padding: "15px 0", 
                borderBottom: `1px solid ${T.border}`, 
                transition: "all 0.2s" 
              }}
            >{l}</a>
          ))}
          <div style={{ marginTop: "auto" }}>
             <MagneticBtn href="#contact" dark style={{ width: "100%", padding: "18px" }} onClick={() => setMenuOpen(false)}>
               Get Started
             </MagneticBtn>
          </div>
        </div>
      )}
    </>
  );
}