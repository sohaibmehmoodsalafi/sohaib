"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const FAQS = [
  { q: "How do you get international students for my Quran academy?", a: "I run targeted Meta Ads and Google Ads across the USA, UK, and Canada, reaching Muslim parents actively looking for online Quran classes. I build a trust-focused landing page with a free trial offer and testimonials, then send qualified traffic to it. My academy clients typically see 80+ new student enrollments per month." },
  { q: "Why work with you instead of a marketing agency?", a: "Agencies hand your account to junior staff who have never run an academy or built an enrollment funnel. I handle everything myself — strategy, creatives, landing page, and campaigns — and I also run my own institute, Peace Institute. So you get someone who understands both the deen and the numbers, not just ads." },
  { q: "What results can a Quran academy or Islamic organization expect?", a: "It depends on your fees, program, and location, but academies typically see a steady, predictable flow of new enrollments each month, and non-profits see stronger, more consistent donation campaigns. I focus on real, sustainable growth — predictable students and support, not vanity metrics." },
  { q: "How soon will I start seeing enrollments or donations?", a: "Most clients get their first qualified inquiries within 48–72 hours of launch. Real optimization happens over the first 2–4 weeks as I refine creatives, audiences, and the landing page — and results usually settle into a predictable monthly flow by day 30–60." },
  { q: "Do you work with academies and organizations outside Pakistan?", a: "Yes. Many of my clients are based in the USA, UK, Canada, and UAE. I manage everything remotely over WhatsApp, Zoom, and screen-share, with clear weekly reports — timezones are never a problem." },
  { q: "Is your marketing halal and Shariah-conscious?", a: "Yes. I keep the messaging honest, avoid misleading claims, and respect Islamic values in the creatives and copy. As someone who runs an Islamic institute myself, marketing your mission with integrity matters to me as much as it does to you." },
];

export default function FAQ() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="section-pad" style={{ padding: "120px 4vw", background: "var(--bg-dark)", borderTop: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />FAQ
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 64 }}>QUESTIONS<br />CLIENTS ASK.</h2>
        <div>
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item" style={{ borderBottom: "1px solid var(--hairline)" }}>
              <summary
                className="faq-q"
                style={{
                  width: "100%", color: "var(--text)", textAlign: "left",
                  fontSize: 16, fontWeight: 500, padding: "24px 0",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20,
                  cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "color .2s",
                }}
              >
                {f.q}
                <span className="faq-icon" style={{
                  width: 28, height: 28, borderRadius: "50%",
                  border: "1px solid var(--hairline-2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, color: "var(--text-muted2)", flexShrink: 0,
                  transition: "transform .3s, border-color .2s, color .2s",
                }}>+</span>
              </summary>
              <div style={{
                fontSize: 15, color: "var(--text-muted2)", lineHeight: 1.8, paddingBottom: 24,
              }}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
