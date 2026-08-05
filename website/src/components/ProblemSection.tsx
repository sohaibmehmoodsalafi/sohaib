"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const PROBLEMS = [
  { icon: "📉", q: "Inconsistent leads & sales?", d: "Some months are great, others are dead quiet. No predictable pipeline you can count on." },
  { icon: "💸", q: "Wasting money on ads?", d: "Boosting posts with no funnel, no real targeting, and no idea what your true ROI is." },
  { icon: "💬", q: "Low-quality inquiries?", d: "Your WhatsApp fills with messages, but almost none turn into real, paying customers." },
  { icon: "🕌", q: "Quran academy with empty seats?", d: "Struggling to get consistent student enrollments from parents in the USA, UK & Canada." },
];

export default function ProblemSection() {
  const ref = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ padding: "120px 4vw", background: "#080808", borderTop: "1px solid rgba(255,255,255,.07)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />The Problem
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>
          SOUND FAMILIAR?<br /><span style={{ color: "#d4a017" }}>YOU&apos;RE NOT ALONE.</span>
        </h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 560, lineHeight: 1.7, marginBottom: 56 }}>
          You have a great product, service, or academy. What&apos;s missing is a <strong style={{ color: "#f5f0e8", fontWeight: 500 }}>system</strong> that brings customers in — every single month.
        </p>

        <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className="problem-card"
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 18,
                padding: "28px 26px",
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: 30, lineHeight: 1, flexShrink: 0 }}>{p.icon}</div>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#f5f0e8" }}>{p.q}</h3>
                <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.7 }}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 16, color: "#f5f0e8", marginTop: 48, fontWeight: 500 }}>
          The good news? Every one of these is fixable — with the right system. 👇
        </p>
      </div>
    </section>
  );
}
