"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const CORE_SERVICES = [
  {
    n: "01", icon: "📢", title: "Meta Ads", subtitle: "Meta Advertising Solutions",
    desc: "Expert meta advertising solutions for Facebook & Instagram — social media advertising campaigns with audience research, ad creatives, retargeting funnels, and daily optimization. I turn your ad spend into predictable leads.",
    results: ["5.6× Average ROAS", "Retargeting Funnels", "Daily Optimization", "Custom Audiences"],
  },
  {
    n: "02", icon: "🎯", title: "Google Ads", subtitle: "Google Pay Per Click Advertising",
    desc: "Google Ads optimization and paid search advertising that captures high-intent buyers. Pay per click campaign management with Search ads, Display ads, and remarketing — complete PPC advertising services.",
    results: ["Google Ads Optimization", "Paid Search Ads", "Display & Remarketing", "Conversion Tracking"],
  },
  {
    n: "03", icon: "📱", title: "Social Media Marketing", subtitle: "Social Media Advertising Campaign",
    desc: "Strategic social media advertising campaigns that build trust and generate leads. Digital branding, content strategy, reels, stories, engagement — your brand stays active 24/7.",
    results: ["Content Strategy", "Reels & Stories", "Community Growth", "Digital Branding"],
  },
];

const FUNNEL_STEPS = [
  { icon: "🌐", label: "Landing Pages", desc: "Conversion-optimized pages your ads send traffic to" },
  { icon: "🎨", label: "Ad Creatives", desc: "Scroll-stopping designs that convert" },
  { icon: "📊", label: "Analytics & Tracking", desc: "Every click and conversion measured" },
  { icon: "🔄", label: "Retargeting Funnels", desc: "Warm audiences brought back to buy" },
  { icon: "💬", label: "WhatsApp Automation", desc: "Auto follow-up with every lead" },
  { icon: "📈", label: "Weekly Reporting", desc: "Clear reports, no vanity metrics" },
];

function CoreCard({ n, icon, title, subtitle, desc, results }: typeof CORE_SERVICES[0]) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        background: hov ? "rgba(212,160,23,.04)" : "#161616",
        border: `1px solid ${hov ? "rgba(212,160,23,.25)" : "rgba(255,255,255,.07)"}`,
        borderRadius: 20, padding: "44px 36px",
        position: "relative", overflow: "hidden",
        transition: "all .3s ease",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Gold top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, #d4a017, transparent)`, opacity: hov ? 1 : 0, transition: "opacity .3s" }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <span style={{ fontSize: 36, filter: hov ? "grayscale(0)" : "grayscale(0.5)", transition: "filter .3s" }}>{icon}</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 48, color: "rgba(212,160,23,.1)", lineHeight: 1 }}>{n}</span>
      </div>

      <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 32, letterSpacing: ".04em", lineHeight: 1, marginBottom: 4 }}>{title}</h3>
      <div style={{ fontSize: 12, color: "#d4a017", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>{subtitle}</div>
      <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.8, marginBottom: 24 }}>{desc}</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {results.map((r) => (
          <div key={r} style={{
            display: "flex", alignItems: "center", gap: 8, fontSize: 12,
            color: hov ? "#f5f0e8" : "#6b6b6b", transition: "color .3s",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#d4a017", flexShrink: 0 }} />
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useFadeIn();
  const [funnelHov, setFunnelHov] = useState<number | null>(null);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="services" className="section-pad" style={{ padding: "120px 4vw", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />What I do
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>
          COMPLETE DIGITAL<br />MARKETING ECOSYSTEM
        </h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 560, lineHeight: 1.7, marginBottom: 64 }}>
          I don&apos;t just run one pay per click campaign — I build your <strong style={{ color: "#f5f0e8" }}>entire digital marketing campaign</strong>. From PPC advertising services to the final conversion, every step is designed, optimized, and managed by your dedicated digital marketing consultant.
        </p>

        {/* 3 Core Services */}
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 64 }}>
          {CORE_SERVICES.map((s) => <CoreCard key={s.n} {...s} />)}
        </div>

        {/* Ecosystem / Funnel Section */}
        <div style={{
          background: "#161616", border: "1px solid rgba(255,255,255,.07)",
          borderRadius: 20, padding: "48px 44px", position: "relative", overflow: "hidden",
        }}>
          {/* Background glow */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase" }}>INCLUDED IN EVERY PACKAGE</span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,44px)", letterSpacing: ".04em", marginTop: 8 }}>
                THE FULL FUNNEL — NOT JUST ADS
              </h3>
              <p style={{ fontSize: 14, color: "#9a9a9a", maxWidth: 500, margin: "12px auto 0", lineHeight: 1.7 }}>
                Every client gets the complete ecosystem. Ads alone don&apos;t work — you need the full pipeline to convert clicks into customers.
              </p>
            </div>

            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {FUNNEL_STEPS.map((step, i) => (
                <div
                  key={i}
                  style={{
                    background: funnelHov === i ? "rgba(212,160,23,.08)" : "rgba(255,255,255,.02)",
                    border: `1px solid ${funnelHov === i ? "rgba(212,160,23,.2)" : "rgba(255,255,255,.05)"}`,
                    borderRadius: 14, padding: "24px 20px",
                    transition: "all .25s", cursor: "default",
                  }}
                  onMouseEnter={() => setFunnelHov(i)}
                  onMouseLeave={() => setFunnelHov(null)}
                >
                  <span style={{ fontSize: 24, marginBottom: 12, display: "block" }}>{step.icon}</span>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{step.label}</div>
                  <div style={{ fontSize: 12, color: "#6b6b6b", lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="featured-card" style={{
          marginTop: 40,
          background: "linear-gradient(135deg, #161616 0%, rgba(212,160,23,.08) 100%)",
          border: "1px solid rgba(212,160,23,.15)",
          borderRadius: 20, padding: "40px 44px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, flexWrap: "wrap",
        }}>
          <div>
            <span style={{
              background: "rgba(212,160,23,.12)", border: "1px solid rgba(212,160,23,.25)",
              color: "#d4a017", fontSize: 11, fontWeight: 700, padding: "4px 14px",
              borderRadius: 99, letterSpacing: ".06em", display: "inline-block", marginBottom: 10,
            }}>ONE EXPERT. ONE INVOICE. FULL FUNNEL.</span>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Ready to scale with a complete ecosystem?</h3>
            <p style={{ fontSize: 14, color: "#9a9a9a", maxWidth: 500 }}>
              No agencies, no juniors, no miscommunication. Just results.
            </p>
          </div>
          <a href="https://wa.me/923048885206" target="_blank" rel="noopener noreferrer"
            style={{ background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15, padding: "15px 32px", borderRadius: 99, textDecoration: "none", transition: "background .2s", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#b8860b")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#d4a017")}
          >Let&apos;s Build Your Funnel →</a>
        </div>
      </div>
    </section>
  );
}
