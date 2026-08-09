"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

export default function WhyDifferent() {
  const ref = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ padding: "110px 4vw", background: "#080808", borderTop: "1px solid rgba(255,255,255,.07)" }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            background: "linear-gradient(160deg, #161310 0%, #12100c 100%)",
            border: "1px solid rgba(212,160,23,.3)",
            borderRadius: 24,
            padding: "clamp(32px,5vw,56px)",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", top: -80, right: -60, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,.16), transparent 70%)", pointerEvents: "none" }} />

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 20 }}>
            <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />What Makes Me Different
          </div>

          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(30px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: 22, maxWidth: 720 }}>
            I&apos;ve run academies — <span style={{ color: "#d4a017" }}>not just ads for them.</span>
          </h2>

          <p style={{ fontSize: "clamp(16px,1.7vw,19px)", color: "#c9c3b8", lineHeight: 1.75, maxWidth: 700 }}>
            Alongside my client work, I run <strong style={{ color: "#f5f0e8", fontWeight: 600 }}>Peace Institute</strong>, my own online Quran and Islamic education platform. So when I build your enrollment funnel, I&apos;m not guessing — I&apos;m using what actually fills seats in a real academy. You get someone who understands both the deen and the numbers.
          </p>
        </div>
      </div>
    </section>
  );
}
