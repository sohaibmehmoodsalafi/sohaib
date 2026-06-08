"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import Counter from "./Counter";

function ResultCard({ n, s, title, sub }: { n: string; s: string; title: string; sub: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      border: `1px solid ${hov ? "rgba(212,160,23,.3)" : "rgba(255,255,255,.07)"}`,
      borderRadius: 16, padding: "36px 30px", background: "#161616",
      position: "relative", overflow: "hidden",
      transform: hov ? "translateY(-3px)" : "none",
      transition: "border-color .25s, transform .25s",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,160,23,.4),transparent)", opacity: hov ? 1 : 0, transition: "opacity .3s" }} />
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 56, color: "#d4a017", lineHeight: 1, marginBottom: 10 }}>
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
    { n: "3", s: "×", title: "Average lead increase", sub: "Within first 60 days of campaigns" },
    { n: "12", s: "%", title: "Average conversion rate", sub: "Industry average is just 2–3%" },
    { n: "85", s: "%", title: "Client retention rate", sub: "Results make them stay" },
    { n: "5.6", s: "×", title: "Average ROAS", sub: "Every Rs. 1 spent → Rs. 5.6 back" },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="results" style={{
      padding: "120px 4vw", background: "#0f0f0f",
      borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Proof
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 16 }}>NUMBERS<br />DON&apos;T LIE.</h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 500, lineHeight: 1.7 }}>Average across 120+ client campaigns. Not cherry-picked. Not estimated.</p>
        <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 64 }}>
          {stats.map((s, i) => <ResultCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
