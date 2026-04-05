// src/sections/Footer.jsx
import T from "../tokens";

// Icon components for cleaner mapping
const Icons = {
  fb: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  tt: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
  // Updated WhatsApp Icon with official brand path
  wa: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
};

export default function Footer() {
  return (
    <footer style={{ background: T.bgDark, padding: "40px 6% 36px" }}>
      <div className="footer-grid" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        
        {/* Brand */}
        <div style={{ maxWidth: 300 }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 12, letterSpacing: "-0.5px" }}>
            Plant<span style={{ color: T.lime }}>Web</span> Solutions
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
            Modern, affordable websites for small businesses. Fast, mobile-friendly, and built to convert.
          </p>
          
          {/* Social Icons Section */}
          <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
            {[
              { id: "fb", link: "https://facebook.com" },
              { id: "tt", link: "https://tiktok.com" },
              { id: "wa", link: "https://wa.me/94XXXXXXXXX" }
            ].map(social => (
              <a 
                key={social.id} 
                href={social.link}
                target="_blank"
                rel="noreferrer"
                style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: 10, 
                  background: "rgba(255,255,255,0.04)", 
                  border: "1px solid rgba(255,255,255,0.08)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  color: "rgba(255,255,255,0.4)", 
                  transition: "all 0.3s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.background = `${T.lime}15`; 
                  e.currentTarget.style.color = T.lime;
                  e.currentTarget.style.borderColor = `${T.lime}40`;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)"; 
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {Icons[social.id]}
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        {[
          { title: "Services", links: ["Landing Pages", "Business Websites", "WhatsApp Integration"] },
          { title: "Company", links: ["Portfolio", "How It Works", "Reviews", "Contact"] },
        ].map(g => (
          <div key={g.title}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".85rem", letterSpacing: "2px", textTransform: "uppercase", color: T.lime, marginBottom: 18, opacity: 0.7 }}>{g.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {g.links.map(l => (
                <a key={l} href="#"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}
                >{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1rem", color: "rgba(255,255,255,0.25)" }}>
          © 2026 <span style={{ color: T.lime }}>PlantWeb Solutions</span>. All rights reserved.
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1rem", color: "rgba(255,255,255,0.25)" }}>
          Kelaniya, Sri Lanka
        </div>
      </div>
    </footer>
  );
}