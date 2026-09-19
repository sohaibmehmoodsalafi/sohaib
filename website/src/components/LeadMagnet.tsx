"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { FORM_ENDPOINT, CHECKLIST_PDF } from "@/lib/forms";

const POINTS = [
  "The 7 things every Quran academy ad must have",
  "The #1 mistake that wastes your ad budget",
  "A landing-page checklist that turns clicks into enrollments",
];

export default function LeadMagnet() {
  const ref = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="checklist"
      className="section-pad"
      style={{ padding: "100px 4vw", background: "#080808", borderTop: "1px solid rgba(255,255,255,.07)" }}
    >
      <div
        className="lead-grid"
        style={{
          maxWidth: 960, margin: "0 auto",
          background: "#161616", border: "1px solid rgba(255,255,255,.08)", borderRadius: 24,
          padding: "clamp(28px,4vw,48px)",
          display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 44, alignItems: "center",
        }}
      >
        {/* Left: offer */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 16 }}>
            <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Free Download
          </div>
          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.2vw,38px)", lineHeight: 1.1, letterSpacing: "-.01em", marginBottom: 16 }}>
            Free Quran Academy <span style={{ color: "#d4a017" }}>Ad Checklist</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {POINTS.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#c9c3b8", lineHeight: 1.6 }}>
                <span style={{ color: "#d4a017", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{p}
              </div>
            ))}
          </div>
        </div>

        {/* Right: email capture (native form → Web3Forms → redirects to the PDF) */}
        <div style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, padding: "28px 24px" }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Get the checklist (PDF)</div>
          <div style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 18 }}>Enter your email — it opens instantly.</div>
          <form action={FORM_ENDPOINT} method="POST">
            <input type="hidden" name="_subject" value="New Checklist Download — meetsohaib.com" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={CHECKLIST_PDF} />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <input
              name="Email" type="email" required placeholder="you@academy.com"
              style={{ width: "100%", background: "#1e1e1e", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, color: "#f5f0e8", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, padding: "14px 16px", outline: "none", marginBottom: 12 }}
            />
            <button type="submit"
              style={{ width: "100%", background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15, padding: 15, borderRadius: 99, border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              Send me the checklist →
            </button>
          </form>
          <p style={{ fontSize: 11, color: "#6b6b6b", textAlign: "center", marginTop: 12 }}>No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
