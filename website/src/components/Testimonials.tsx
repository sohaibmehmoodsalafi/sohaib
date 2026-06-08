"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const TESTIMONIALS = [
  { init: "MK", name: "Muhammad K.", role: "Founder, E-commerce Brand — Pakistan", text: "Sohaib ran our Facebook Ads and built the landing page. Conversion rate hit 12% — revenue doubled in 3 months. Best marketing decision we made.", highlight: "Conversion rate hit 12% — revenue doubled in 3 months." },
  { init: "DA", name: "Dr. Ahmed", role: "Director, Quran Academy — Pakistan", text: "We hired agencies before but nothing worked. Sohaib handled our ads, social media, and website. Admissions went up 3×. Best investment we ever made.", highlight: "Admissions went up 3×. Best investment we ever made." },
  { init: "SM", name: "Sarah M.", role: "E-commerce Owner — UK", text: "Within 2 months, our ROAS went from 1.8× to 5.2×. Sohaib rebuilt our entire funnel — ads, landing page, retargeting. Complete transformation.", highlight: "Complete transformation." },
];

function TestiCard({ init, name, role, text, highlight }: { init: string; name: string; role: string; text: string; highlight: string }) {
  const [hov, setHov] = useState(false);
  const parts = text.split(highlight);
  return (
    <div style={{
      background: "#161616", border: `1px solid ${hov ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.07)"}`,
      borderRadius: 16, padding: 36, transition: "border-color .25s",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40, color: "#d4a017", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
      <p style={{ fontSize: 15, color: "#f5f0e8", lineHeight: 1.75, marginBottom: 28, fontWeight: 300 }}>
        {parts[0]}<strong style={{ fontWeight: 600, color: "#d4a017" }}>{highlight}</strong>{parts[1] || ""}
      </p>
      <div style={{ height: 1, background: "rgba(255,255,255,.07)", marginBottom: 22 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#d4a017", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, color: "#080808", flexShrink: 0 }}>{init}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
          <div style={{ fontSize: 12, color: "#6b6b6b", marginTop: 2 }}>{role}</div>
        </div>
        <div style={{ marginLeft: "auto", color: "#d4a017", fontSize: 12, letterSpacing: 2 }}>★★★★★</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useFadeIn();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ padding: "120px 4vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Reviews
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>WHAT CLIENTS<br />ACTUALLY SAY.</h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 500, lineHeight: 1.7, marginBottom: 64 }}>Real clients. Real results. Ask me for references to verify directly.</p>
        <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => <TestiCard key={i} {...t} />)}
          <div style={{
            background: "transparent", border: "1px dashed rgba(255,255,255,.12)",
            borderRadius: 16, padding: 36, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", textAlign: "center", gap: 14,
          }}>
            <div style={{ fontSize: 36 }}>⭐</div>
            <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.7 }}>47+ verified clients across Pakistan, UAE, UK and USA. References available on request.</p>
            <a href="https://wa.me/923363710499" target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: "#f5f0e8", fontWeight: 500, fontSize: 13, padding: "10px 22px", borderRadius: 99, border: "1px solid rgba(255,255,255,.12)", textDecoration: "none", transition: "border-color .2s" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,.3)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,.12)"}
            >Ask for References →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
