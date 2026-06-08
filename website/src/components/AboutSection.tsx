"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import Counter from "./Counter";

function FloatBadge({ bottom, right, top, left, num, lbl, color }: { bottom?: number; right?: number; top?: number; left?: number; num: string; lbl: string; color: string }) {
  return (
    <div style={{
      position: "absolute", bottom, right, top, left,
      background: "#1e1e1e", border: "1px solid rgba(255,255,255,.12)",
      borderRadius: 14, padding: "16px 20px", minWidth: 140,
      boxShadow: "0 20px 40px rgba(0,0,0,.4)",
    }}>
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 30, color, lineHeight: 1 }}>{num}</div>
      <div style={{ fontSize: 11, color: "#6b6b6b", marginTop: 4 }}>{lbl}</div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useFadeIn();
  const [imgErr, setImgErr] = useState(false);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="about" className="about-grid" style={{
      padding: "120px 4vw", maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center",
    }}>
      {/* Visual */}
      <div style={{ position: "relative" }}>
        <div style={{
          background: "#161616", border: "1px solid rgba(255,255,255,.12)",
          borderRadius: 20, aspectRatio: "3/4", display: "flex",
          flexDirection: "column", alignItems: "center", justifyContent: "center",
          overflow: "hidden", position: "relative",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 80%, rgba(212,160,23,.06) 0%, transparent 60%)" }} />
          {imgErr ? (
            <>
              <div style={{ width: 90, height: 90, borderRadius: "50%", background: "#d4a017", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue',sans-serif", fontSize: 34, color: "#080808", zIndex: 1 }}>SM</div>
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
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,5vw,60px)", lineHeight: 1, letterSpacing: ".02em", marginBottom: 20 }}>
          ONE EXPERT.<br />FULL RESULTS.
        </h2>
        <p style={{ fontSize: 15, color: "#9a9a9a", lineHeight: 1.8, marginBottom: 14 }}>
          I&apos;m Sohaib Mehmood — a Digital Marketing Expert specializing in Meta Ads, Google Ads, and Social Media Marketing. Based in Pakistan, serving clients across USA, UK, UAE, and Canada for 5+ years.
        </p>
        <p style={{ fontSize: 15, color: "#9a9a9a", lineHeight: 1.8, marginBottom: 14 }}>
          I build the complete funnel ecosystem: ad campaigns, landing pages, creatives, retargeting funnels, and the automation that fills your calendar with paying clients. Every element is aligned — because I handle it all personally.
        </p>
        <p style={{ fontSize: 15, color: "#9a9a9a", lineHeight: 1.8 }}>
          Most of my clients came from failed agency experiences. Agencies send juniors. I send results — predictable leads on autopilot.
        </p>
        <div style={{ display: "flex", gap: 32, marginTop: 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,.07)", flexWrap: "wrap" }}>
          {[
            { n: "5", s: "+", l: "Years experience" },
            { n: "4", s: "", l: "Countries served" },
            { n: "12", s: "%", l: "Avg. conversion rate" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, color: "#f5f0e8", lineHeight: 1 }}>
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
