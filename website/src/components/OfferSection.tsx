"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const CHECKS = [
  "Audit your current ads & funnel (or your competitors', if you're not running ads yet)",
  "Pinpoint exactly where you're losing leads, students & money",
  "Show the biggest growth opportunities for your business",
  "Hand you a custom Meta & Google Ads game plan — free, no strings attached",
];

export default function OfferSection() {
  const ref = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="audit"
      className="section-pad"
      style={{ padding: "120px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(160deg, #161616 0%, #131313 100%)",
            border: "1px solid rgba(212,160,23,.25)",
            borderRadius: 24,
            padding: "clamp(28px,5vw,52px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,.14), transparent 70%)", pointerEvents: "none" }} />

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
            <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Free Growth Audit
          </div>

          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", lineHeight: .98, letterSpacing: ".02em", marginBottom: 14 }}>
            GET A FREE GROWTH<br />AUDIT FOR YOUR <span style={{ color: "#d4a017" }}>BUSINESS</span>
          </h2>
          <p style={{ fontSize: 15, color: "#9a9a9a", lineHeight: 1.7, marginBottom: 28 }}>
            E-commerce store, Quran academy, or service business — send me your details and I&apos;ll review your marketing, find exactly what&apos;s leaking, and show you how to fix it. No cost, no obligation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {CHECKS.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ color: "#d4a017", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 14, color: "#d4d0c8", lineHeight: 1.6 }}>{c}</span>
              </div>
            ))}
          </div>

          <div className="audit-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20want%20a%20free%20growth%20audit%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: "1 1 220px", textAlign: "center", background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 14, padding: "15px 28px", borderRadius: 99, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              Get Free Audit on WhatsApp →
            </a>
            <a
              href="https://calendly.com/meetsohaib/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: "1 1 180px", textAlign: "center", background: "transparent", color: "#f5f0e8", fontWeight: 500, fontSize: 14, padding: "15px 28px", borderRadius: 99, textDecoration: "none", border: "1px solid rgba(255,255,255,.14)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
