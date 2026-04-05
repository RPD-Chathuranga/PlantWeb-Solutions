// src/components/MagneticBtn.jsx
import { useRef, useCallback } from "react";
import T from "../tokens";

export default function MagneticBtn({ children, style: s = {}, href, onClick, dark = false }) {
  const ref = useRef(null);

  // ── Follow cursor slightly while hovering ──
  const onMove = useCallback((e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  }, []);

  // ── Snap back when mouse leaves ──
  const onLeave = useCallback((e) => {
    ref.current.style.transform = "translate(0, 0)";
    e.currentTarget.style.boxShadow = dark
      ? "0 4px 24px rgba(13,43,31,0.22)"
      : "0 4px 24px rgba(168,224,99,0.35)";
    e.currentTarget.style.background = dark ? T.bgDark : T.lime;
  }, [dark]);

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "14px 32px",
    borderRadius: 100,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.92rem",
    fontWeight: 600,
    textDecoration: "none",
    border: "none",
    transition: "background 0.25s, box-shadow 0.25s, transform 0.35s cubic-bezier(0.23,1,0.32,1)",
    background: dark ? T.bgDark : T.lime,
    color:      dark ? T.lime   : T.bgDark,
    boxShadow:  dark
      ? "0 4px 24px rgba(13,43,31,0.22)"
      : "0 4px 24px rgba(168,224,99,0.35)",
    cursor: "none",
    ...s, // ← caller can override any style
  };

  // ── Renders as <a> if href provided, otherwise <button> ──
  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      data-hover
      className="magnetic"
      style={baseStyle}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = dark
          ? "0 8px 36px rgba(13,43,31,0.35)"
          : "0 8px 36px rgba(168,224,99,0.55)";
        e.currentTarget.style.background = dark ? T.green : T.lime;
      }}
    >
      {children}
    </Tag>
  );
}

