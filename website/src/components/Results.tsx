"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import Counter from "./Counter";

function ResultCard({ n, s, title, sub }: { n: string; s: string; title: string; sub: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="result-card" style={{
      border: `1px solid ${hov ? "rgba(212,160,23,.3)" : "rgba(255,255,255,.07)"}`,
      borderRadius: 16, padding: "36px 30px", background: "#161616",
      position: "relative", overflow: "hidden",
      transform: hov ? "translateY(-3px)" : "none",
      transition: "border-color .25s, transform .25s",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,160,23,.4),transparent)", opacity: hov ? 1 : 0, transition: "opacity .3s" }} />
      <div className="result-num" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 56, color: "#d4a017", lineHeight: 1, marginBottom: 10 }}>
        <Counter end={n} suffix={s} />
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#6b6b6b" }}>{sub}</div>
    </div>
  );
}

export default function Results() {
  const ref = useFadeIn();
  const stats = [
    { n: "3", s: "×", title: "Admissions from USA, UK & Canada", sub: "Learn Quran Institute, after launch" },
    { n: "80", s: "+", title: "New students per month", sub: "At under PKR 400 per enrollment" },
    { n: "85", s: "%", title: "Of clients stay", sub: "Because the results keep coming" },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="results" className="section-pad" style={{
      padding: "120px 4vw", background: "#0f0f0f",
      borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Proof
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(38px,5.4vw,66px)", lineHeight: 1.0, letterSpacing: "-.01em", marginBottom: 16 }}>Real results for<br /><span style={{ color: "#d4a017" }}>real academies.</span></h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 520, lineHeight: 1.7 }}>Real outcomes from real academies and Islamic organizations — not cherry-picked, not estimated.</p>
        <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 64 }}>
          {stats.map((s, i) => <ResultCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
