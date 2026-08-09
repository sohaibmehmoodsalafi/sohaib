"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import Counter from "./Counter";

function FloatBadge({ bottom, right, top, left, num, lbl, color }: { bottom?: number; right?: number; top?: number; left?: number; num: string; lbl: string; color: string }) {
  return (
    <div className="about-float" style={{
      position: "absolute", bottom, right, top, left,
      background: "#1e1e1e", border: "1px solid rgba(255,255,255,.12)",
      borderRadius: 14, padding: "16px 20px", minWidth: 140,
      boxShadow: "0 20px 40px rgba(0,0,0,.4)",
    }}>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 30, color, lineHeight: 1 }}>{num}</div>
      <div style={{ fontSize: 11, color: "#6b6b6b", marginTop: 4 }}>{lbl}</div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useFadeIn();
  const [imgErr, setImgErr] = useState(false);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="about" className="about-grid section-pad" style={{
      padding: "120px 4vw", maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center",
    }}>
      {/* Visual */}
      <div style={{ position: "relative" }}>
        <div className="about-image" style={{
          background: "#161616", border: "1px solid rgba(255,255,255,.12)",
          borderRadius: 20, aspectRatio: "3/4", display: "flex",
          flexDirection: "column", alignItems: "center", justifyContent: "center",
          overflow: "hidden", position: "relative",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 80%, rgba(212,160,23,.06) 0%, transparent 60%)" }} />
          {imgErr ? (
            <>
              <div style={{ width: 90, height: 90, borderRadius: "50%", background: "#d4a017", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 34, color: "#080808", zIndex: 1 }}>SM</div>
              <p style={{ fontSize: 12, color: "#6b6b6b", textAlign: "center", maxWidth: 180, zIndex: 1, lineHeight: 1.5, marginTop: 16 }}>Meta Ads Expert<br />Based in Karachi, Pakistan</p>
            </>
          ) : (
            <img
              src="/images/sohaib-office.webp"
              alt="Sohaib Mehmood working at his professional office — dual monitors, Islamic calligraphy, warm workspace"
              onError={() => setImgErr(true)}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", borderRadius: 20, transform: "scaleX(-1)" }}
            />
          )}
        </div>
        <FloatBadge bottom={-20} right={-20} num="120+" lbl="Clients worldwide" color="#d4a017" />
        <FloatBadge top={24} left={-24} num="5.6×" lbl="Avg. ROAS" color="#ff5c35" />
      </div>

      {/* Text */}
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />
          About me
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px,4.6vw,56px)", lineHeight: 1.02, letterSpacing: "-.01em", marginBottom: 20 }}>
          One person.<br /><span style={{ color: "#d4a017" }}>Your mission first.</span>
        </h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", lineHeight: 1.85 }}>
          I&apos;m Sohaib Mehmood. For over 5 years I&apos;ve helped academies and Islamic organizations across Pakistan, the UK, the USA, and the UAE grow — with honest, halal marketing and no agency markup. I also run my own institute, <strong style={{ color: "#f5f0e8", fontWeight: 600 }}>Peace Institute</strong>, so I care about your students as much as your numbers. When you work with me, you work with me — not a junior team.
        </p>
        <div className="about-counter-row" style={{ display: "flex", gap: 32, marginTop: 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,.07)", flexWrap: "wrap" }}>
          {[
            { n: "5", s: "+", l: "Years experience" },
            { n: "4", s: "", l: "Countries served" },
            { n: "12", s: "%", l: "Avg. conversion rate" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 36, color: "#f5f0e8", lineHeight: 1 }}>
                <Counter end={s.n} suffix={s.s} />
              </div>
              <div style={{ fontSize: 12, color: "#6b6b6b", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
