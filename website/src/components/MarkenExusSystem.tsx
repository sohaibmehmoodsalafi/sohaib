"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const STEPS = [
  { n: "01", icon: "🔍", title: "Audience Research", desc: "I map the exact parents, students, and donors you want — their beliefs, hopes, and hesitations — so every rupee reaches families ready to enroll or give." },
  { n: "02", icon: "🧭", title: "Funnel Setup", desc: "A trust-building landing page and enrollment flow, designed so your ad and your page tell one clear, convincing story." },
  { n: "03", icon: "📣", title: "Paid Ads Strategy", desc: "Precisely targeted campaigns on Facebook, Instagram, and Google — reaching the right Muslim families at the right moment, in the right place." },
  { n: "04", icon: "🎯", title: "Conversion Optimization", desc: "Creatives, copy, and pages refined on real data — turning more clicks into real enrollments and donations." },
  { n: "05", icon: "🚀", title: "Scaling Systems", desc: "Winning campaigns scaled, warm audiences retargeted, and clear weekly reporting — so growth compounds without breaking your academy." },
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
            <details key={i} name="marken-system" className="sys-acc" open={i === 0}>
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
