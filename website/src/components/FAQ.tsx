"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const FAQS = [
  { q: "How do I get international students for my Quran Academy?", a: "I run targeted Meta Ads campaigns across USA, UK, and Canada — reaching parents actively searching for online Quran classes. I build a high-converting landing page with trust signals, free trial class offers, and parent testimonials. My Quran Academy clients typically see 80+ new student enrollments per month at under PKR 400 per student. Everything aligned: ads, page, campaign — one person." },
  { q: "Why choose one expert over a full agency?", a: "Agencies assign your account to junior media buyers who've never designed an ad creative or built a landing page. Your ad says one thing, the landing page says another, and the creative doesn't match either. I personally handle every element — strategy, creative design, landing page, and campaign optimization. One person. One vision. Zero handoff gaps. That's why my landing pages convert at 12%+ while industry average is 2–3%." },
  { q: "What ROAS can I expect from Meta Ads for e-commerce?", a: "Results depend on your niche, average order value, and margins — but my e-commerce clients typically achieve 4×–6× ROAS within 60–90 days. I handle the complete funnel: audience research, scroll-stopping ad creatives, A/B tested copy, retargeting sequences, and a conversion-optimized landing page. My highest performing campaign achieved 5.6× ROAS for a fashion brand." },
  { q: "How quickly will I start seeing leads?", a: "Most clients receive their first qualified leads within 48–72 hours of campaign launch. Real optimization happens over 14–30 days as I A/B test creatives, refine targeting, and optimize your landing page based on real data. Consistent, scalable growth typically stabilizes by day 30–60." },
  { q: "Do you work with clients in USA, UK, Canada, and UAE?", a: "Yes — over 40% of my clients are international. I manage everything remotely via WhatsApp, Zoom, and screen-sharing. Timezone is never a problem. I schedule calls that work for you and provide weekly reports with full campaign performance data, ad creative breakdowns, and recommendations." },
  { q: "Can you run ads without rebuilding my website?", a: "Absolutely. If you already have a website or landing page, I'll audit it for conversion leaks and then run your Meta Ads campaign. However, most clients see dramatically better results when I also build the landing page — because I design the ad creative and destination page as one cohesive experience. That alignment is what pushes conversion rates from 2–3% to 10–12%." },
];

export default function FAQ() {
  const ref = useFadeIn();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" style={{ padding: "120px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />FAQ
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, letterSpacing: ".02em", marginBottom: 64 }}>QUESTIONS<br />CLIENTS ASK.</h2>
        <div>
          {FAQS.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: "100%", background: "none", border: "none",
                  color: open === i ? "#d4a017" : "#f5f0e8", textAlign: "left",
                  fontSize: 16, fontWeight: 500, padding: "24px 0",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20,
                  cursor: "pointer", fontFamily: "'Outfit',sans-serif", transition: "color .2s",
                }}
              >
                {f.q}
                <span style={{
                  width: 28, height: 28, borderRadius: "50%",
                  border: `1px solid ${open === i ? "#d4a017" : "rgba(255,255,255,.12)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, color: open === i ? "#d4a017" : "#9a9a9a", flexShrink: 0,
                  transform: open === i ? "rotate(45deg)" : "none",
                  transition: "transform .3s, border-color .2s, color .2s",
                }}>+</span>
              </button>
              <div style={{
                fontSize: 15, color: "#9a9a9a", lineHeight: 1.8,
                maxHeight: open === i ? 400 : 0, overflow: "hidden",
                transition: "max-height .35s ease, padding .35s",
                paddingBottom: open === i ? 24 : 0,
              }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
