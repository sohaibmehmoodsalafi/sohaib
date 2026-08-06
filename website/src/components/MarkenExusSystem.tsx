"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const STEPS = [
  {
    n: "01",
    title: "Deep Audience Research",
    desc: "I map your ideal buyer — their pain, desires, and objections — so every rupee targets people ready to act, not random impressions.",
  },
  {
    n: "02",
    title: "Funnel & Landing Page Build",
    desc: "A conversion-optimized landing page and full funnel — designed as one system so your ad and destination speak the same language.",
  },
  {
    n: "03",
    title: "Meta & Google Ads Launch",
    desc: "Precision-targeted paid campaigns across Facebook, Instagram & Google — the right message, to the right person, at the right moment.",
  },
  {
    n: "04",
    title: "Creative Testing & Optimization",
    desc: "A/B tested creatives and copy, refined daily on real data — pushing conversion rates from 2–3% to 10–12%.",
  },
  {
    n: "05",
    title: "Retargeting & Scaling",
    desc: "Winning campaigns scaled and warm audiences retargeted — compounding your results into predictable, repeatable growth.",
  },
];

export default function MarkenExusSystem() {
  const ref = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="system"
      className="section-pad"
      style={{ padding: "120px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />The System
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>
          THE MARKENEXUS<br /><span style={{ color: "#d4a017" }}>GROWTH SYSTEM</span><span style={{ color: "#d4a017", fontSize: ".5em", verticalAlign: "top" }}>™</span>
        </h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 560, lineHeight: 1.7, marginBottom: 24 }}>
          A proprietary 5-step growth framework refined across 120+ businesses — built to turn ad spend into predictable revenue, not random posts.
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,23,.08)", border: "1px solid rgba(212,160,23,.25)", borderRadius: 99, padding: "8px 18px", marginBottom: 56 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "block" }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#f5f0e8", letterSpacing: ".02em" }}>Proven across 120+ businesses & 5.6× average ROAS</span>
        </div>

        <div className="system-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="system-card"
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 18,
                padding: "30px 24px 28px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Faint watermark number */}
              <span aria-hidden="true" style={{ position: "absolute", top: -14, right: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 96, lineHeight: 1, color: "rgba(212,160,23,0.06)", pointerEvents: "none", userSelect: "none" }}>{s.n}</span>
              {/* Number chip */}
              <div className="system-num" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: 12, background: "rgba(212,160,23,.1)", border: "1px solid rgba(212,160,23,.3)", color: "#d4a017", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: ".02em", marginBottom: 18, transition: "all .25s" }}>{s.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "#9a9a9a", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a
            href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20want%20the%20MarkenExus%20System%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 14, padding: "15px 34px", borderRadius: 99, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Run the MarkenExus System on my business →
          </a>
        </div>
      </div>
    </section>
  );
}
