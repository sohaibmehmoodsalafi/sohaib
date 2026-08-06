"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

type Project = { type: string; title: string; result: string; url: string; img?: string; placeholder?: string; dashboard?: boolean; linkLabel?: string };

const PORTFOLIO: Project[] = [
  { type: "E-commerce · Meta Ads Results", title: "Live Sales Dashboard — E-commerce Store", result: "Rs 400K+ sales, 142 orders & +181% revenue growth in 30 days", url: "https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20want%20e-commerce%20results%20like%20this.", linkLabel: "See full breakdown →", dashboard: true },
  { type: "Quran Academy · Lead Generation", title: "International Student Leads — Learn Quran Institute", result: "3× admissions from USA, UK & Canada after launch", url: "https://learnquraninstitute.org/", img: "https://meetsohaib.com/portfolio/learn-quran-institute.jpg", placeholder: "Learn Quran Institute" },
  { type: "E-commerce · Scaling", title: "E-commerce Scaling — VeeTrends Fashion", result: "500+ SKU store — revenue scaled with 5.6× ROAS", url: "https://veetrends.com/", img: "https://meetsohaib.com/portfolio/veetrends.jpg", placeholder: "VeeTrends Fashion" },
  { type: "Travel · Booking Funnel", title: "High-Converting Booking Funnel — Skycon Travel", result: "Online bookings started within first week of launch", url: "https://skycontravel.com/", img: "https://meetsohaib.com/portfolio/skycon-travel.jpg", placeholder: "Skycon Travel" },
  { type: "E-commerce · Brand Launch", title: "Zero-to-1000 Orders — Luxurious.pk", result: "Brand went from zero to 1000+ orders via Meta Ads", url: "https://luxurious.pk/", img: "https://meetsohaib.com/portfolio/luxurious-pk.jpg", placeholder: "Luxurious.pk" },
  { type: "Islamic Platform · Full Build", title: "Full-Stack Platform Design — Hijra Online", result: "Complete platform with integrated lead capture system", url: "https://hijraonline.com/", img: "https://meetsohaib.com/portfolio/hijra-online.jpg", placeholder: "Hijra Online" },
];

// Recreated e-commerce results dashboard (pure HTML/SVG — works on the no-JS live site)
function SalesDashboard() {
  const gold = [70, 55, 30, 24, 44, 60, 72, 64, 57, 70, 61, 54, 68, 40, 34, 50];
  const gray = [96, 82, 72, 80, 86, 76, 83, 73, 89, 81, 75, 86, 79, 55, 71, 82];
  const toPts = (arr: number[]) => arr.map((y, i) => `${12 + i * (456 / 15)},${y}`).join(" ");
  return (
    <div style={{ width: "100%", height: "100%", background: "#0a0e16", padding: "12px 14px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div style={{ background: "rgba(255,255,255,.05)", borderRadius: 8, padding: "6px 10px" }}>
          <div style={{ fontSize: 8, color: "#8a8a8a", textTransform: "uppercase", letterSpacing: ".06em", display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />Total sales
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>Rs 400,877 <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 600 }}>+181%</span></div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ fontSize: 8, color: "#8a8a8a", textTransform: "uppercase", letterSpacing: ".06em" }}>Orders</div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>142 <span style={{ fontSize: 8, color: "#22c55e" }}>+184%</span></div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 8, color: "#8a8a8a", textTransform: "uppercase", letterSpacing: ".06em" }}>Conv.</div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>1.7%</div>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <svg viewBox="0 0 480 110" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <line x1="0" y1="22" x2="480" y2="22" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
          <line x1="0" y1="100" x2="480" y2="100" stroke="rgba(255,255,255,.14)" strokeWidth="1" />
          <polyline points={toPts(gray)} fill="none" stroke="#8a8a8a" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.65" vectorEffect="non-scaling-stroke" />
          <polyline points={toPts(gold)} fill="none" stroke="#4d9fff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, color: "#6b6b6b" }}>
        <span>Jul 1</span><span>Jul 6</span><span>Jul 11</span><span>Jul 16</span>
      </div>
    </div>
  );
}

function PortCard({ type, title, result, url, img, placeholder, dashboard, linkLabel }: Project) {
  const [hov, setHov] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  return (
    <div style={{
      border: `1px solid ${hov ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.07)"}`,
      borderRadius: 16, overflow: "hidden", background: "#161616",
      transform: hov ? "translateY(-4px)" : "none",
      transition: "transform .25s, border-color .25s",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ width: "100%", aspectRatio: "16/9", background: "#1e1e1e", overflow: "hidden", position: "relative" }}>
        {dashboard ? (
          <SalesDashboard />
        ) : imgErr ? (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 32 }}>🖼️</span>
            <span style={{ fontSize: 13, color: "#6b6b6b", padding: "0 20px", textAlign: "center" }}>{placeholder}<br /><span style={{ fontSize: 11, color: "#555" }}>Screenshot coming soon</span></span>
          </div>
        ) : (
          <img src={img} alt={title} onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: hov ? "scale(1.04)" : "none", transition: "transform .4s" }} />
        )}
      </div>
      <div style={{ padding: 24 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{type}</span>
        <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: 13, color: "#9a9a9a", display: "flex", alignItems: "flex-start", gap: 6 }}>
          <span style={{ color: "#d4a017", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{result}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, fontSize: 13, fontWeight: 600, color: "#d4a017", transition: "gap .2s", textDecoration: "none" }}
          onMouseEnter={(e) => e.currentTarget.style.gap = "10px"}
          onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
        >{linkLabel || "Visit live site →"}</a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const ref = useFadeIn();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="work" className="section-pad" style={{ padding: "120px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Portfolio
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>REAL CAMPAIGNS.<br />REAL CLIENTS.</h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 500, lineHeight: 1.7, marginBottom: 64 }}>Every project — ads, creatives, and landing pages — handled by one person.</p>
        <div className="port-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {PORTFOLIO.map((p, i) => <PortCard key={i} {...p} />)}
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems: "center", textAlign: "center", padding: 40,
            border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, background: "#161616",
          }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>📂</div>
            <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>115+ more projects</p>
            <p style={{ fontSize: 13, color: "#9a9a9a", marginBottom: 20 }}>Full case studies with ad spend, leads, and ROAS data.</p>
            <a href="https://wa.me/923048885206" target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: "#f5f0e8", fontWeight: 500, fontSize: 13, padding: "10px 22px", borderRadius: 99, border: "1px solid rgba(255,255,255,.12)", textDecoration: "none" }}
            >Request Full Portfolio →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
