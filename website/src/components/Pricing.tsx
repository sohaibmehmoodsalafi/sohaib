"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const PACKAGES = [
  {
    tier: "Starter", name: "Single Platform", price: "PKR 25,000/mo", featured: false,
    items: ["Meta Ads OR Google Ads (1 platform)", "Campaign Setup & Optimization", "Ad Creatives (5/month)", "Landing Page Setup", "Monthly Performance Report"],
  },
  {
    tier: "Growth", name: "Full Funnel", price: "PKR 55,000/mo", featured: true,
    items: ["Meta Ads + Google Ads (both platforms)", "Complete Funnel Setup", "Ad Creatives (15/month)", "Landing Pages & Lead Forms", "Social Media Management (15 posts)", "Retargeting & Lookalike Audiences", "Weekly Reports & Strategy Calls"],
  },
  {
    tier: "Scale", name: "Ecosystem Package", price: "PKR 90,000/mo", featured: false,
    items: ["Everything in Growth", "Full SMM (30 posts/month + reels)", "WhatsApp Automation & Follow-ups", "Multi-funnel Strategy", "Priority Support & Weekly Calls", "Dedicated Account Management"],
  },
];

function PkgCard({ tier, name, price, featured, items }: { tier: string; name: string; price: string; featured: boolean; items: string[] }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      border: `1px solid ${featured ? "#d4a017" : hov ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.07)"}`,
      borderRadius: 20, padding: "40px 36px", background: featured ? "#1e1e1e" : "#161616",
      position: "relative", transition: "border-color .25s",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {featured && (
        <div style={{
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: "#d4a017", color: "#080808", fontSize: 10, fontWeight: 800,
          letterSpacing: ".1em", padding: "5px 18px", borderRadius: 99,
          whiteSpace: "nowrap", textTransform: "uppercase",
        }}>MOST POPULAR</div>
      )}
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "#6b6b6b", textTransform: "uppercase", marginBottom: 12 }}>{tier}</div>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 30, letterSpacing: ".04em", marginBottom: 6 }}>{name}</h3>
      <p style={{ fontSize: 13, color: "#9a9a9a", marginBottom: 32 }}>Starting from <strong style={{ color: "#f5f0e8", fontSize: 15 }}>{price}</strong></p>
      <ul style={{ listStyle: "none", marginBottom: 36 }}>
        {items.map((item, i) => (
          <li key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 10,
            fontSize: 14, color: "#9a9a9a", padding: "10px 0",
            borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
          }}>
            <span style={{ color: "#d4a017", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{item}
          </li>
        ))}
      </ul>
      <a href="https://wa.me/923048885206" target="_blank" rel="noopener noreferrer"
        style={{
          display: "block", textAlign: "center", padding: "14px 32px", borderRadius: 99,
          fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "all .2s",
          ...(featured
            ? { background: "#d4a017", color: "#080808" }
            : { background: "transparent", color: "#f5f0e8", border: "1px solid rgba(255,255,255,.12)" }),
        }}
        onMouseEnter={(e) => {
          if (featured) e.currentTarget.style.background = "#b8860b";
          else e.currentTarget.style.borderColor = "rgba(255,255,255,.3)";
        }}
        onMouseLeave={(e) => {
          if (featured) e.currentTarget.style.background = "#d4a017";
          else e.currentTarget.style.borderColor = "rgba(255,255,255,.12)";
        }}
      >Get Started →</a>
    </div>
  );
}

export default function Pricing() {
  const ref = useFadeIn();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="packages" className="section-pad" style={{ padding: "120px 4vw", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Pricing
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>SIMPLE PLANS.<br />REAL RESULTS.</h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 500, lineHeight: 1.7, marginBottom: 64 }}>Pick what fits. Scale when ready. All prices are starting points — final quote based on your scope.</p>
        <div className="pkg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {PACKAGES.map((p) => <PkgCard key={p.name} {...p} />)}
        </div>
        <p style={{ fontSize: 12, color: "#6b6b6b", textAlign: "center", marginTop: 20 }}>
          International clients (USA/UK/UAE) — pricing in USD/AED on request via WhatsApp.
        </p>
      </div>
    </section>
  );
}
