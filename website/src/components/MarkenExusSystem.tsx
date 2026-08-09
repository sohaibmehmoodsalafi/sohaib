"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const STEPS = [
  { n: "01", icon: "🔍", title: "Understand your families", desc: "I map the exact parents, students, or donors you want — their hopes and hesitations — so every rupee reaches people ready to act." },
  { n: "02", icon: "🧭", title: "Build the funnel", desc: "A trust-building landing page and enrollment flow, designed so your ad and your page speak the same language." },
  { n: "03", icon: "📣", title: "Launch the ads", desc: "Precisely targeted campaigns on Facebook, Instagram, and Google — the right message to the right family at the right time." },
  { n: "04", icon: "🎯", title: "Test and improve", desc: "Creatives and copy refined on real data, pushing enrollment and donation rates well above average." },
  { n: "05", icon: "🚀", title: "Retarget and grow", desc: "Winning campaigns scaled and warm audiences brought back, compounding your growth month over month." },
];

export default function MarkenExusSystem() {
  const ref = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="system"
      className="section-pad"
      style={{ padding: "120px 4vw", background: "#f5f0e8", color: "#14110c" }}
    >
      <div className="system-2col" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 64, alignItems: "start" }}>
        {/* ── Left: heading ── */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".18em", color: "#8a8378", textTransform: "uppercase", marginBottom: 20 }}>The System</div>
          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px,4.2vw,58px)", lineHeight: 1.03, letterSpacing: "-.02em", marginBottom: 22, color: "#14110c" }}>
            The MarkenExus<br /><span style={{ color: "#b8860b" }}>Growth System</span><span style={{ color: "#b8860b", fontSize: ".55em", verticalAlign: "top" }}>™</span>
          </h2>
          <p style={{ fontSize: 16, color: "#5a5348", maxWidth: 440, lineHeight: 1.7, marginBottom: 28 }}>
            A simple system that turns ad spend into students and donations — refined across academies and Islamic organizations to bring you predictable enrollments and support, not just clicks.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#14110c", borderRadius: 99, padding: "10px 20px" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#d4a017", display: "block" }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#f5f0e8", letterSpacing: ".01em" }}>Proven across 4 continents · 5.6× ROAS</span>
          </div>
        </div>

        {/* ── Right: accordion (native <details> — works without JS) ── */}
        <div>
          {STEPS.map((s, i) => (
            <details key={i} className="sys-acc" open={i === 0}>
              <summary className="sys-sum">
                <span className="sys-num">{s.n}</span>
                <span className="sys-icon" aria-hidden="true">{s.icon}</span>
                <span className="sys-title">{s.title}</span>
                <span className="sys-chev" aria-hidden="true">⌄</span>
              </summary>
              <div className="sys-desc">{s.desc}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
