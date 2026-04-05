// src/components/Cursor.jsx
import React, { useEffect, useRef, useState } from "react";
import T from "../tokens";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Using a ref for high-frequency updates to avoid re-renders
  const state = useRef({ 
    mx: 0, my: 0, rx: 0, ry: 0, 
    hov: false, clicking: false 
  });

  useEffect(() => {
    // 1. Hide on mobile/touch devices
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouch) return;

    // 2. Mouse move and click events
    const move = (e) => { 
      state.current.mx = e.clientX; 
      state.current.my = e.clientY; 
      if (!isVisible) setIsVisible(true); // Only show once mouse moves
    };
    const down = () => { state.current.clicking = true; };
    const up = () => { state.current.clicking = false; };

    // 3. Global Hover Detection (Event Delegation)
    // This looks for <a>, <button>, or any element with data-hover
    const handleHover = (e) => {
      const target = e.target.closest("a, button, [data-hover]");
      state.current.hov = !!target;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", handleHover);

    // 4. Animation Loop (LERP logic)
    let raf;
    const tick = () => {
      const { mx, my, hov, clicking } = state.current;

      // Ring lags behind with smooth easing (0.15 is the "lag" factor)
      state.current.rx += (mx - state.current.rx) * 0.15;
      state.current.ry += (my - state.current.ry) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
        const s = clicking ? "6px" : hov ? "15px" : "8px";
        dotRef.current.style.width = s;
        dotRef.current.style.height = s;
        dotRef.current.style.opacity = isVisible ? "1" : "0";
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.current.rx}px, ${state.current.ry}px, 0) translate(-50%, -50%)`;
        const rs = hov ? "56px" : "30px";
        ringRef.current.style.width = rs;
        ringRef.current.style.height = rs;
        ringRef.current.style.borderColor = hov ? T.green : "rgba(45,140,94,0.3)";
        ringRef.current.style.opacity = isVisible ? (clicking ? "0.5" : "1") : "0";
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    // 5. Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [isVisible]);

  // Don't render if it's a touch device
  if (typeof navigator !== 'undefined' && (('ontouchstart' in window) || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Central Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 8, height: 8,
          background: T.lime,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 100000,
          transition: "width 0.2s, height 0.2s, opacity 0.3s",
          willChange: "transform",
        }}
      />

      {/* Lagging Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 30, height: 30,
          border: `1.5px solid rgba(45,140,94,0.3)`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.3s ease-out, height 0.3s ease-out, border-color 0.3s, opacity 0.3s",
          willChange: "transform",
        }}
      />
      
      {/* Global CSS to hide the real cursor only when this component is active */}
      <style>{`
        body, a, button, [data-hover] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}