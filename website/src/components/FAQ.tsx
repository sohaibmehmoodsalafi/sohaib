"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const FAQS = [
  { q: "How do I get international students for my Quran Academy?", a: "I run targeted social media advertising campaigns and Google pay per click advertising across USA, UK, and Canada — reaching parents actively searching for online Quran classes. I build a high-converting landing page with trust signals and free trial class offers. My Quran Academy clients typically see 80+ new student enrollments per month at under PKR 400 per student through optimized pay per click campaigns." },
  { q: "Why choose a digital marketing consultant over a full agency?", a: "Agencies assign your account to junior media buyers who've never designed an ad creative or built a landing page. As your dedicated digital marketing consultant, I personally handle every element — PPC advertising services, creative design, landing page, and Google Ads optimization. One person. One vision. Zero handoff gaps. That's why my landing pages convert at 12%+ while industry average is 2–3%." },
  { q: "What ROAS can I expect from PPC advertising and Meta Ads?", a: "Results depend on your niche, average order value, and margins — but my e-commerce clients typically achieve 4×–6× ROAS within 60–90 days through dedicated PPC consultancy. I handle the complete funnel: audience research, scroll-stopping ad creatives, A/B tested copy, retargeting sequences, and a conversion-optimized landing page. My highest performing digital marketing campaign achieved 5.6× ROAS." },
  { q: "How quickly will I start seeing leads from paid search advertising?", a: "Most clients receive their first qualified leads within 48–72 hours of pay per click campaign launch. Real Google Ads optimization happens over 14–30 days as I A/B test creatives, refine targeting, and optimize your landing page based on real data. Consistent, scalable growth typically stabilizes by day 30–60." },
  { q: "Do you offer digital marketing consultancy services internationally?", a: "Yes — over 40% of my digital marketing consultancy services clients are international, across USA, UK, Canada, and UAE. I manage everything remotely via WhatsApp, Zoom, and screen-sharing. Timezone is never a problem. I provide weekly reports with full campaign performance data, ad creative breakdowns, and PPC advertising management recommendations." },
  { q: "Can you run PPC ads without rebuilding my website?", a: "Absolutely. If you already have a website, I'll audit it for conversion leaks and then launch your pay per click campaign and social media advertising campaign. However, most clients see dramatically better results when I also build the landing page — because I design the ad creative and destination page as one cohesive digital advertising campaign. That alignment pushes conversion rates from 2–3% to 10–12%." },
];

export default function FAQ() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="section-pad" style={{ padding: "120px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />FAQ
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 64 }}>QUESTIONS<br />CLIENTS ASK.</h2>
        <div>
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
              <summary
                className="faq-q"
                style={{
                  width: "100%", color: "#f5f0e8", textAlign: "left",
                  fontSize: 16, fontWeight: 500, padding: "24px 0",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20,
                  cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "color .2s",
                }}
              >
                {f.q}
                <span className="faq-icon" style={{
                  width: 28, height: 28, borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, color: "#9a9a9a", flexShrink: 0,
                  transition: "transform .3s, border-color .2s, color .2s",
                }}>+</span>
              </summary>
              <div style={{
                fontSize: 15, color: "#9a9a9a", lineHeight: 1.8, paddingBottom: 24,
              }}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
