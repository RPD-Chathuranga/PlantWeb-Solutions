// src/sections/Contact.jsx
import { useState } from "react";
import T from "../tokens";
import Reveal from "../components/Reveal";

const INFO_ITEMS = [
  { icon: "💬", label: "WhatsApp", value: "+94 70 465 7789" },
  { icon: "📧", label: "Email", value: "plantwebsolutions@gmail.com" },
  { icon: "⏱️", label: "Response Time", value: "Usually within a few hours" },
  { icon: "📍", label: "Location", value: "Kelaniya, Sri Lanka " },
];

const INITIAL_FORM = { name: "", phone: "", email: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [focused, setFocused] = useState("");

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const inputStyle = (name) => ({
    background: "#fff",
    border: `1.5px solid ${focused === name ? T.green : T.border}`,
    borderRadius: 10,
    padding: "12px 16px",
    width: "100%",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: T.textDark,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(45,140,94,0.08)" : "none",
  });

  const labelStyle = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: T.textLight,
    display: "block",
    marginBottom: 6,
  };

  return (
    <section id="contact" style={{ padding: "110px 6%", background: "#fff" }}>

      <Reveal>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", color: T.green, marginBottom: 12 }}>
          Get In Touch
        </div>
      </Reveal>

      <Reveal delay={1}>
        <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2.2rem,4vw,3.6rem)", fontWeight: 900, letterSpacing: "-1.5px", color: T.textDark, lineHeight: 1.05, marginBottom: 60 }}>
          Let's build your<br />
          <em style={{ color: T.green }}>website.</em>
        </h2>
      </Reveal>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>

        {/* ── LEFT — FORM ── */}
        <Reveal>
          <form
            action="https://formspree.io/f/xvzvdovg"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={labelStyle}>Your Name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="John Silva"
                  style={inputStyle("name")}
                  onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>WhatsApp / Phone</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="+94 77 000 0000"
                  style={inputStyle("phone")}
                  onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                  required
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@yourbusiness.com"
                style={inputStyle("email")}
                onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>What do you need?</label>
              <select name="service" value={form.service} onChange={handle}
                style={{ ...inputStyle("service"), appearance: "none" }}
                onFocus={() => setFocused("service")} onBlur={() => setFocused("")}
                required
              >
                <option value="">Select a service...</option>
                <option>Landing Page</option>
                <option>Business Website (multi-page)</option>
                <option>WhatsApp Integration only</option>
                <option>Not sure — need advice</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Tell us about your business</label>
              <textarea name="message" value={form.message} onChange={handle} rows={4}
                placeholder="What does your business do? Any specific features you need?"
                style={{ ...inputStyle("message"), resize: "vertical", minHeight: 110 }}
                onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "13px 26px",
                borderRadius: 100,
                border: "none",
                background: T.green,
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Send Message →
            </button>

          </form>
        </Reveal>

        {/* ── RIGHT — INFO ── */}
        <Reveal delay={2}>
          <div>
            {INFO_ITEMS.map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 0", borderBottom: `1px solid ${T.border}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${T.green}10`, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", letterSpacing: "1.2px", textTransform: "uppercase", color: T.textLight, marginBottom: 3 }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", fontWeight: 500, color: T.textDark }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}