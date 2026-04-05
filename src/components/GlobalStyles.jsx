import React from 'react';

const GlobalStyles = () => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,400;1,9..144,700;1,9..144,900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { background: #f5f0e8; overflow-x: hidden; cursor: none; }
      
      a, button { cursor: none; }

      ::-webkit-scrollbar { width: 4px; background: #f5f0e8; }
      ::-webkit-scrollbar-thumb { background: #2d8c5e; border-radius: 2px; }
      ::selection { background: rgba(45,140,94,0.2); color: #0d2b1f; }

      /* ── ANIMATIONS ── */
      @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.6);opacity:0.5} }
      @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      @keyframes floatB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(5px, -15px)} }
      @keyframes shimmer { 0% { background-position: -400px 0; } 100% { background-position: 400px 0; } }
      @keyframes scaleIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }

      .magnetic { transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1); }
      
      /* ── REVEAL SYSTEM ── */
      .reveal-el {
        opacity: 0; 
        transform: translateY(36px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      /* Use .active to match your Intersection Observer hook */
      .reveal-el.active { 
        opacity: 1; 
        transform: translateY(0); 
      }

      /* Expanded Delay Classes */
      .reveal-el.delay-1 { transition-delay: 0.1s; }
      .reveal-el.delay-2 { transition-delay: 0.2s; }
      .reveal-el.delay-3 { transition-delay: 0.3s; }
      .reveal-el.delay-4 { transition-delay: 0.4s; }

      /* ── RESPONSIVE RULES ── */
      @media (max-width: 899px) {
        .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .hero-visual { display: none !important; }
        .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        .services-grid { grid-template-columns: 1fr !important; }
        .portfolio-grid { grid-template-columns: 1fr !important; }
        .process-grid { grid-template-columns: repeat(2,1fr) !important; }
        .contact-grid { grid-template-columns: 1fr !important; }
        .nav-links-desktop { display: none !important; }
      }

      @media (max-width: 639px) {
        .process-grid { grid-template-columns: 1fr !important; }
        section { padding-left: 6% !important; padding-right: 6% !important; }
        .hero-grid { padding: 100px 6% 60px !important; }
      }
    `}</style>
  );
};

export default GlobalStyles;