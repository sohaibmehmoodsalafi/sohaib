"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const PROBLEMS = [
  { icon: "📉", q: "Unpredictable enrollments?", d: "Some months your seats are full, others go quiet — with no reliable pipeline of new students." },
  { icon: "💸", q: "Boosting posts, no funnel?", d: "Budget spent on boosted posts with no landing page, no real targeting, and little to show for it." },
  { icon: "💬", q: "Inquiries but few students?", d: "Your WhatsApp fills with messages, but very few ever turn into real, paying enrollments." },
  { icon: "🌍", q: "Can't reach parents abroad?", d: "Struggling to consistently reach Muslim parents in the USA, UK, and Canada who want online Quran classes." },
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
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5.2vw,64px)", lineHeight: 1.0, letterSpacing: "-.01em", marginBottom: 16 }}>
          Great teaching. Empty seats.<br /><span style={{ color: "#d4a017" }}>Sound familiar?</span>
        </h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 620, lineHeight: 1.7, marginBottom: 56 }}>
          You run a sincere, quality academy — but enrollments are unpredictable, boosted posts eat your budget with little to show, and most WhatsApp inquiries never turn into real students. The teaching was never the problem. What&apos;s missing is a <strong style={{ color: "#f5f0e8", fontWeight: 500 }}>system</strong> that brings the right families to your door, month after month.
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
