"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const PORTFOLIO = [
  { type: "Quran Academy · Lead Generation", title: "International Student Leads — Learn Quran Institute", result: "3× admissions from USA, UK & Canada after launch", url: "https://learnquraninstitute.org/", img: "https://meetsohaib.com/portfolio/learn-quran-institute.jpg", placeholder: "Learn Quran Institute" },
  { type: "E-commerce · Scaling", title: "E-commerce Scaling — VeeTrends Fashion", result: "500+ SKU store — revenue scaled with 5.6× ROAS", url: "https://veetrends.com/", img: "https://meetsohaib.com/portfolio/veetrends.jpg", placeholder: "VeeTrends Fashion" },
  { type: "Travel · Booking Funnel", title: "High-Converting Booking Funnel — Skycon Travel", result: "Online bookings started within first week of launch", url: "https://skycontravel.com/", img: "https://meetsohaib.com/portfolio/skycon-travel.jpg", placeholder: "Skycon Travel" },
  { type: "E-commerce · Brand Launch", title: "Zero-to-1000 Orders — Luxurious.pk", result: "Brand went from zero to 1000+ orders via Meta Ads", url: "https://luxurious.pk/", img: "https://meetsohaib.com/portfolio/luxurious-pk.jpg", placeholder: "Luxurious.pk" },
  { type: "Islamic Platform · Full Build", title: "Full-Stack Platform Design — Hijra Online", result: "Complete platform with integrated lead capture system", url: "https://hijraonline.com/", img: "https://meetsohaib.com/portfolio/hijra-online.jpg", placeholder: "Hijra Online" },
];

function PortCard({ type, title, result, url, img, placeholder }: { type: string; title: string; result: string; url: string; img: string; placeholder: string }) {
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
        {imgErr ? (
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
        >Visit live site →</a>
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
        <h2 className="section-title" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>REAL CAMPAIGNS.<br />REAL CLIENTS.</h2>
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
