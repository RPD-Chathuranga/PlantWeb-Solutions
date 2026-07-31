// src/sections/Stats.jsx
import React from 'react';
import T from "../tokens";
import Counter from '../components/Counter';

export default function Stats() {
  const stats = [
    { num: 15, suffix: "+", label: "Websites Delivered" },
    { num: 7, suffix: "d", label: "Avg. Delivery Time" },
    { num: 100, suffix: "%", label: "Mobile Optimized" },
    { num: 5, suffix: "★", label: "Client Rating" },
  ];

  return (
    <section id="stats" style={{ background: "#ffffff", borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={s.label} className="stat-item">
            <div style={{ 
              padding: "60px 36px", 
              textAlign: "center", 
              position: "relative",
              overflow: "hidden" 
            }}>
              
              {/* Number and Suffix Wrapper */}
              <div style={{ 
                fontFamily: "'Fraunces', serif", 
                fontSize: "clamp(2.5rem, 4vw, 3.8rem)", 
                fontWeight: 900, 
                color: T.textDark, // Num and Suffix now both use this color
                lineHeight: 1, 
                letterSpacing: "-1px",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center"
              }}>
                {/* Animated Counter */}
                <Counter target={s.num} />
                
                {/* Suffix - Color inherited from parent (T.textDark) */}
                <span style={{ marginLeft: "2px" }}>{s.suffix}</span>
              </div>

              {/* Label */}
              <div style={{ 
                fontFamily: "'DM Mono', monospace", 
                fontSize: "0.75rem", 
                textTransform: "uppercase", 
                letterSpacing: "1.2px", 
                color: T.textLight, 
                marginTop: 14 
              }}>
                {s.label}
              </div>

              {/* Decorative Lime Indicator */}
              <div style={{ 
                position: "absolute", 
                bottom: 0, 
                left: "50%", 
                transform: "translateX(-50%)", 
                width: "40px", 
                height: "3px", 
                background: T.lime, 
                borderRadius: "2px 2px 0 0" 
              }} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .stats-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
        }

        .stat-item { 
          border-right: 1px solid ${T.border}; 
        }

        .stat-item:last-child { 
          border-right: none; 
        }

        /* Tablet View */
        @media (max-width: 899px) {
          .stats-grid { 
            grid-template-columns: repeat(2, 1fr); 
          }
          .stat-item:nth-child(2n) { 
            border-right: none; 
          }
          .stat-item:nth-child(1), 
          .stat-item:nth-child(2) { 
            border-bottom: 1px solid ${T.border}; 
          }
        }

        /* Mobile View */
        @media (max-width: 550px) {
          .stats-grid { 
            grid-template-columns: 1fr; 
          }
          .stat-item { 
            border-right: none !important; 
            border-bottom: 1px solid ${T.border}; 
          }
          .stat-item:last-child { 
            border-bottom: none; 
          }
        }
      `}</style>
    </section>
  );
}