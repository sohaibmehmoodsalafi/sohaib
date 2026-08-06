"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

function ContactOpt({ icon, title, sub, href }: { icon: string; title: string; sub: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", gap: 16,
        background: "#161616", border: "1px solid rgba(255,255,255,.07)",
        borderRadius: 14, padding: "18px 22px",
        transform: hov ? "translateX(4px)" : "none",
        borderColor: hov ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.07)",
        transition: "all .2s", color: "#f5f0e8", textDecoration: "none",
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div style={{ width: 44, height: 44, borderRadius: 10, background: "#1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 12, color: "#6b6b6b", marginTop: 2 }}>{sub}</div>
      </div>
      <span style={{ marginLeft: "auto", color: hov ? "#d4a017" : "#6b6b6b", fontSize: 18, transition: "color .2s, transform .2s", transform: hov ? "translateX(4px)" : "none" }}>→</span>
    </a>
  );
}

export default function Contact() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", service: "", msg: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      const text = encodeURIComponent(
        `Assalamu Alaikum Sohaib!\n\nMy name is ${form.name}.\n\nI need help with: ${form.service}\n\n${form.msg ? "About my business: " + form.msg + "\n\n" : ""}My email: ${form.email}`
      );
      window.open(`https://wa.me/923048885206?text=${text}`, "_blank");
      setForm({ name: "", email: "", service: "", msg: "" });
      setErrors({});
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  const inputStyle = (id: string) => ({
    width: "100%", background: "#1e1e1e",
    border: `1px solid ${errors[id] ? "#f87171" : "rgba(255,255,255,.07)"}`,
    borderRadius: 10, color: "#f5f0e8", fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontSize: 15, padding: "13px 16px", outline: "none",
  });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="contact" className="section-pad" style={{ padding: "120px 4vw", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
        {/* Left */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
            <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Get in touch
          </div>
          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(40px,5vw,64px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 20 }}>
            LET&apos;S AUDIT YOUR<br /><span style={{ color: "#d4a017" }}>MARKETING FREE.</span>
          </h2>
          <p style={{ fontSize: 16, color: "#9a9a9a", lineHeight: 1.7, marginBottom: 44 }}>30-minute PPC consultancy call — I&apos;ll review your current digital marketing campaign setup, audit your Google Ads optimization, and tell you exactly what to fix. No commitment. No pressure. Just honest advice from an experienced digital marketing consultant.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 44 }}>
            <ContactOpt icon="💬" title="WhatsApp — fastest response" sub="Reply within 1 hour" href="https://wa.me/923048885206" />
            <ContactOpt icon="📅" title="Book a meeting on Calendly" sub="Pick a time that works for you" href="https://calendly.com/meetsohaib/30min" />
            <ContactOpt icon="💼" title="Connect on LinkedIn" sub="International clients preferred here" href="https://www.linkedin.com/in/sohaibmehmoodsalafi/" />
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["100% Confidential", "No Commitment", "Reply in 1 Hour", "No Spam"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6b6b6b" }}>
                <span style={{ color: "#d4a017", fontWeight: 700 }}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.07)", borderRadius: 20, padding: 44 }}>
          <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 28 }}>Send a message</div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#9a9a9a", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 8 }}>Your name</label>
            <input type="text" value={form.name} onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: "" })); }} placeholder="Muhammad Ahmed" style={inputStyle("name")} />
            {errors.name && <div style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.name}</div>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#9a9a9a", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 8 }}>Email address</label>
            <input type="email" value={form.email} onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: "" })); }} placeholder="you@example.com" style={inputStyle("email")} />
            {errors.email && <div style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.email}</div>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#9a9a9a", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 8 }}>I need help with</label>
            <select value={form.service} onChange={(e) => { setForm((f) => ({ ...f, service: e.target.value })); setErrors((er) => ({ ...er, service: "" })); }}
              style={{ ...inputStyle("service"), color: form.service ? "#f5f0e8" : "#6b6b6b", WebkitAppearance: "none" as const }}>
              <option value="">Select a service</option>
              {["Facebook & Instagram Ads", "Social Media Management", "Website or Landing Page", "Logo & Branding", "Complete Growth Package", "Quran Academy Marketing", "E-commerce Scaling"].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            {errors.service && <div style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.service}</div>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#9a9a9a", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 8 }}>Tell me about your business</label>
            <textarea value={form.msg} onChange={(e) => setForm((f) => ({ ...f, msg: e.target.value }))} placeholder="What do you sell, who are your customers, and what's your main challenge right now?"
              style={{ ...inputStyle("msg"), resize: "vertical" as const, minHeight: 110 }} />
          </div>

          {status === "success" && (
            <div style={{ background: "rgba(0,200,100,0.1)", border: "1px solid rgba(0,200,100,0.3)", borderRadius: 10, padding: "14px 18px", color: "#4ade80", fontSize: 14, marginBottom: 16 }}>
              ✓ Message sent! Opening WhatsApp — I&apos;ll reply within 1 hour.
            </div>
          )}

          <button onClick={handleSubmit} disabled={status === "loading"}
            style={{
              width: "100%", background: status === "loading" ? "#9a7010" : "#d4a017", color: "#080808",
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, fontWeight: 700,
              padding: 16, borderRadius: 99, border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
              transition: "background .2s", letterSpacing: ".02em",
            }}>
            {status === "loading" ? "Sending..." : "Book Free Strategy Call →"}
          </button>
          <p style={{ fontSize: 12, color: "#6b6b6b", textAlign: "center", marginTop: 14 }}>Your info is never shared. No spam ever.</p>
        </div>
      </div>
    </section>
  );
}
