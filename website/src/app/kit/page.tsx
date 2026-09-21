import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const SITE = "https://meetsohaib.com";
const OG_IMAGE = `${SITE}/images/sohaib-og.jpg`;
const GUMROAD = "https://markenexus.gumroad.com/l/ouajlr";

const TITLE = "The Quran Academy Enrollment Kit";
const DESC =
  "The complete, done-for-you ad system I use to fill Quran academies with students — ready-made creatives, proven copy, targeting, WhatsApp scripts and a launch checklist. Refreshed monthly, from $19/month.";

export const metadata: Metadata = {
  title: `${TITLE} — Run My Proven Ad System Yourself | Sohaib Mehmood`,
  description: DESC,
  keywords: [
    "Quran academy marketing kit",
    "Quran academy ads",
    "Meta Ads for Quran academy",
    "Islamic institute marketing",
    "ad creatives Quran academy",
    "enrollment kit",
    "Sohaib Mehmood",
  ],
  alternates: { canonical: `${SITE}/kit` },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESC,
    url: `${SITE}/kit`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "The Quran Academy Enrollment Kit — Sohaib Mehmood" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [OG_IMAGE],
  },
};

// Reusable Join / CTA button — opens Gumroad in a new tab
function JoinButton({ label, ghost = false, style }: { label: string; ghost?: boolean; style?: React.CSSProperties }) {
  return (
    <a
      href={GUMROAD}
      target="_blank"
      rel="noopener noreferrer"
      className={ghost ? "kit-btn-ghost" : "kit-btn"}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, justifyContent: "center",
        fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15,
        padding: "16px 34px", borderRadius: 99, textDecoration: "none",
        ...(ghost
          ? { background: "transparent", color: "#f5f0e8", border: "1px solid rgba(255,255,255,.18)" }
          : { background: "#d4a017", color: "#080808", border: "2px solid #d4a017" }),
        ...style,
      }}
    >
      {label} <span aria-hidden="true">→</span>
    </a>
  );
}

const KICKER = { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase" as const, marginBottom: 18 };
const KICKER_LINE = { width: 24, height: 1, background: "#d4a017", display: "block" };

const INSIDE_NOW = [
  "10 ready-made ad creatives (editable Canva templates — images + video)",
  "A proven ad-copy swipe file (headlines, ad text, CTAs)",
  "A targeting cheat-sheet for USA, UK, Canada & UAE",
  "A high-converting enrollment landing-page template",
  "WhatsApp follow-up scripts (first reply → booking → no-show)",
  'A step-by-step "first campaign" checklist',
];
const INSIDE_MONTHLY = [
  "5–8 fresh seasonal ad creatives (Ramadan, Hajj, back-to-school & more)",
  'A short "what to run this month" training video',
  "A new template or resource",
  "A live group Q&A call (Kit Plus & above)",
];
const FOR_YOU = [
  "You run a Quran academy, Islamic institute, or Muslim nonprofit and want more students",
  "You want enrollments but aren't ready for a full retainer",
  "You can follow simple, step-by-step instructions",
];
const NOT_FOR_YOU = [
  "You want a zero-involvement, done-for-you service",
  "You won't follow up with leads quickly",
];

const PLANS = [
  {
    tier: "Kit", price: "$19", cadence: "/mo", note: "founding", tagline: "Run it yourself",
    featured: true, cta: "Join the Kit",
    items: ["Everything in the starter kit", "5–8 fresh creatives every month", '"What to run this month" video', "New template or resource monthly"],
  },
  {
    tier: "Kit Plus", price: "$59", cadence: "/mo", note: "", tagline: "Monthly live group Q&A",
    featured: false, cta: "Join Kit Plus",
    items: ["Everything in Kit", "Monthly live group Q&A call", "Ask questions on your own campaigns", "Priority answers in the community"],
  },
  {
    tier: "Done-With-You", price: "$149", cadence: "/mo", note: "", tagline: "Monthly 1:1 review of your ad account",
    featured: false, cta: "Join Done-With-You",
    items: ["Everything in Kit Plus", "Monthly 1:1 ad-account review", "Personalized fixes & next steps", "Direct guidance on your funnel"],
  },
];

const STATS = [
  { n: "120+", l: "clients grown" },
  { n: "5.6×", l: "avg ROAS" },
  { n: "12%", l: "avg conversion" },
  { n: "85%", l: "retention" },
];

const FAQS = [
  { q: "Do I need experience with Facebook ads?", a: "No — the First Campaign Checklist walks you through it click by click, from setting up your ad account to launching your first campaign." },
  { q: "How is this different from an agency?", a: "It's the same proven system an agency would run for you, except you run it yourself at a fraction of the cost — no retainer, no waiting on junior staff." },
  { q: "Will the creatives work for my academy?", a: "Yes — every creative is built specifically for Quran academies and Islamic institutes, and they're editable in Canva in minutes to match your name, colors, and offer." },
  { q: "Is the marketing halal?", a: "Yes. Everything is Shariah-conscious — no misleading claims, no haram imagery, no deceptive tactics. Honest marketing for a mission that matters." },
  { q: "Can I cancel anytime?", a: "Yes — cancel in one click, no questions asked. And founding members keep the $19/month rate locked for life for as long as they stay subscribed." },
  { q: "What if I need more help?", a: "Upgrade to Kit Plus for a monthly live group Q&A, or Done-With-You for a monthly 1:1 review of your ad account." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "The Quran Academy Enrollment Kit",
        description: DESC,
        brand: { "@id": `${SITE}/#business` },
        image: OG_IMAGE,
        url: `${SITE}/kit`,
        offers: PLANS.map((p) => ({
          "@type": "Offer",
          name: p.tier,
          price: p.price.replace("$", ""),
          priceCurrency: "USD",
          url: GUMROAD,
          availability: "https://schema.org/InStock",
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: "#080808", overflow: "hidden" }}>

        {/* ─── 1. HERO ─── */}
        <section className="section-pad" style={{ padding: "150px 4vw 90px", textAlign: "center", background: "radial-gradient(120% 80% at 50% 0%, #14110b 0%, #080808 60%)" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ ...KICKER, justifyContent: "center" }}>
              <span style={KICKER_LINE} />For Quran academies &amp; Islamic institutes<span style={KICKER_LINE} />
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(34px,5.6vw,64px)", lineHeight: 1.05, letterSpacing: "-.02em", color: "#f5f0e8", marginBottom: 22 }}>
              Fill Your Quran Academy With Students — <span style={{ color: "#d4a017" }}>Run My Proven Ad System Yourself</span>
            </h1>
            <p style={{ fontSize: 17, color: "#b8b2a6", lineHeight: 1.75, maxWidth: 640, margin: "0 auto 32px" }}>
              The complete kit I use to grow academies — ready-made ad creatives, proven copy, targeting, WhatsApp scripts, and a launch checklist. Refreshed every month. For less than the cost of one hour of an agency&apos;s time.
            </p>
            <JoinButton label="Join the Kit — from $19/month" style={{ fontSize: 16, padding: "18px 40px" }} />
            <p style={{ fontSize: 13, color: "#9a9a9a", marginTop: 26, letterSpacing: ".01em" }}>
              5.6× average ROAS · 120+ clients grown · Halal &amp; Shariah-conscious
            </p>
          </div>
        </section>

        {/* ─── 2. PROBLEM & PROMISE ─── */}
        <section className="section-pad" style={{ padding: "90px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1, letterSpacing: "-.01em", color: "#f5f0e8", marginBottom: 24 }}>
              Great teaching. Empty seats. Sound familiar?
            </h2>
            <p style={{ fontSize: 17, color: "#b8b2a6", lineHeight: 1.85, marginBottom: 18 }}>
              Most Quran academies don&apos;t have a teaching problem — they have a marketing problem. You know your classes change lives, but students aren&apos;t coming in fast enough, and a full agency costs more than you can commit to.
            </p>
            <p style={{ fontSize: 17, color: "#b8b2a6", lineHeight: 1.85, marginBottom: 34 }}>
              The middle path: get the exact system an expert uses and run it yourself. Everything is done for you except pressing &ldquo;go&rdquo;.
            </p>
            <div style={{ background: "linear-gradient(160deg, #161310 0%, #12100c 100%)", border: "1px solid rgba(212,160,23,.3)", borderRadius: 16, padding: "24px 28px" }}>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(18px,2.4vw,24px)", color: "#f5f0e8", lineHeight: 1.4, margin: 0 }}>
                No agency. No guesswork. <span style={{ color: "#d4a017" }}>Just a proven system you control.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. WHAT'S INSIDE ─── */}
        <section className="section-pad" style={{ padding: "90px 4vw", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={KICKER}><span style={KICKER_LINE} />What&apos;s inside</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-.01em", color: "#f5f0e8", marginBottom: 48 }}>
              Everything you need — done for you.
            </h2>
            <div className="kit-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: "34px 32px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "#f5f0e8", marginBottom: 24 }}>The moment you join:</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {INSIDE_NOW.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15, color: "#c9c3b8", lineHeight: 1.6 }}>
                      <span style={{ color: "#d4a017", fontWeight: 800, flexShrink: 0 }}>✓</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "linear-gradient(160deg, #1a160f 0%, #141109 100%)", border: "1px solid rgba(212,160,23,.28)", borderRadius: 18, padding: "34px 32px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "#f5f0e8", marginBottom: 24 }}>Every month you stay:</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {INSIDE_MONTHLY.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15, color: "#c9c3b8", lineHeight: 1.6 }}>
                      <span style={{ color: "#d4a017", fontWeight: 800, flexShrink: 0 }}>★</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <JoinButton label="Join the Kit — from $19/month" />
            </div>
          </div>
        </section>

        {/* ─── 4. WHO IT'S FOR ─── */}
        <section className="section-pad" style={{ padding: "90px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={KICKER}><span style={KICKER_LINE} />Is this for you?</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-.01em", color: "#f5f0e8", marginBottom: 48 }}>
              Built for doers, not spectators.
            </h2>
            <div className="kit-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              <div style={{ background: "#161616", border: "1px solid rgba(212,160,23,.22)", borderRadius: 18, padding: "34px 32px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 19, color: "#d4a017", marginBottom: 22 }}>This is for you if…</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {FOR_YOU.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15, color: "#c9c3b8", lineHeight: 1.6 }}>
                      <span style={{ color: "#d4a017", fontWeight: 800, flexShrink: 0 }}>✓</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: "34px 32px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 19, color: "#9a9a9a", marginBottom: 22 }}>Not for you if…</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {NOT_FOR_YOU.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15, color: "#9a9a9a", lineHeight: 1.6 }}>
                      <span style={{ color: "#6b6b6b", fontWeight: 800, flexShrink: 0 }}>✕</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ fontSize: 15, color: "#b8b2a6", lineHeight: 1.7, textAlign: "center", maxWidth: 620, margin: "36px auto 0" }}>
              Never run an ad before? The <strong style={{ color: "#f5f0e8" }}>First Campaign Checklist</strong> walks you through it click by click.
            </p>
          </div>
        </section>

        {/* ─── 5. PRICING ─── */}
        <section className="section-pad" style={{ padding: "90px 4vw", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ ...KICKER, justifyContent: "center", width: "100%" }}><span style={KICKER_LINE} />Pricing<span style={KICKER_LINE} /></div>
            <div style={{ background: "linear-gradient(160deg, #1a160f 0%, #141109 100%)", border: "1px solid rgba(212,160,23,.35)", borderRadius: 14, padding: "16px 24px", textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(14px,2vw,17px)", color: "#f5f0e8", margin: 0, lineHeight: 1.5 }}>
                🚀 Founding offer — first members join at just <span style={{ color: "#d4a017" }}>$19/month, locked for life</span>. Limited spots.
              </p>
            </div>
            <div className="pkg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {PLANS.map((p) => (
                <div key={p.tier} className="kit-card" style={{
                  border: `1px solid ${p.featured ? "#d4a017" : "rgba(255,255,255,.08)"}`,
                  borderRadius: 20, padding: "40px 34px", background: p.featured ? "#1e1e1e" : "#161616",
                  position: "relative",
                }}>
                  {p.featured && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#d4a017", color: "#080808", fontSize: 10, fontWeight: 800, letterSpacing: ".1em", padding: "5px 18px", borderRadius: 99, whiteSpace: "nowrap", textTransform: "uppercase" }}>Most Popular</div>
                  )}
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "#6b6b6b", textTransform: "uppercase", marginBottom: 12 }}>{p.tagline}</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: ".01em", color: "#f5f0e8", marginBottom: 10 }}>{p.tier}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 40, color: "#f5f0e8" }}>{p.price}</span>
                    <span style={{ fontSize: 15, color: "#9a9a9a" }}>{p.cadence}</span>
                    {p.note && <span style={{ fontSize: 11, fontWeight: 700, color: "#d4a017", background: "rgba(212,160,23,.12)", border: "1px solid rgba(212,160,23,.25)", borderRadius: 6, padding: "3px 8px", marginLeft: 4 }}>{p.note}</span>}
                  </div>
                  <ul style={{ listStyle: "none", margin: "28px 0 32px", padding: 0 }}>
                    {p.items.map((it, i) => (
                      <li key={it} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#9a9a9a", padding: "10px 0", borderBottom: i < p.items.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none" }}>
                        <span style={{ color: "#d4a017", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{it}
                      </li>
                    ))}
                  </ul>
                  <JoinButton label={p.cta} ghost={!p.featured} style={{ display: "flex", width: "100%", padding: "14px 24px", fontSize: 14 }} />
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#6b6b6b", textAlign: "center", marginTop: 24 }}>
              Cancel anytime · Halal &amp; Shariah-conscious · 30-day money-back guarantee
            </p>
          </div>
        </section>

        {/* ─── 6. WHY ME ─── */}
        <section className="section-pad" style={{ padding: "90px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div className="kit-2col" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 44, alignItems: "center" }}>
              <div>
                <div style={KICKER}><span style={KICKER_LINE} />Why me</div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.6vw,42px)", lineHeight: 1.1, letterSpacing: "-.01em", color: "#f5f0e8", marginBottom: 22 }}>
                  I&apos;ve run academies — not just ads for them.
                </h2>
                <p style={{ fontSize: 16, color: "#b8b2a6", lineHeight: 1.85, marginBottom: 30 }}>
                  I&apos;m Sohaib Mehmood. For 5+ years I&apos;ve helped Quran academies, Islamic institutes, and Muslim nonprofits turn ad spend into enrolled students and donors — across Pakistan, UAE, UK, and USA. This kit is that exact system.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
                  {STATS.map((s) => (
                    <div key={s.l}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(22px,3vw,30px)", color: "#d4a017", lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: 12, color: "#9a9a9a", marginTop: 6, lineHeight: 1.3 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/* Photo placeholder — swap src for a portrait when ready */}
                <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", marginBottom: 18 }}>
                  <img src="/images/sohaib-mehmood.jpg" alt="Sohaib Mehmood" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                {/* Testimonial placeholder — replace with 1–2 real client quotes */}
                <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: "20px 22px" }}>
                  <p style={{ fontSize: 14, color: "#c9c3b8", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                    &ldquo;Add a short client testimonial here — the result they got and how the kit helped.&rdquo;
                  </p>
                  <p style={{ fontSize: 12, color: "#6b6b6b", marginTop: 12, fontWeight: 600 }}>— Client name, Academy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. FAQ ─── */}
        <section className="section-pad" style={{ padding: "90px 4vw", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={KICKER}><span style={KICKER_LINE} />FAQ</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4.4vw,52px)", lineHeight: 1.05, letterSpacing: "-.01em", color: "#f5f0e8", marginBottom: 44 }}>
              Questions before you join.
            </h2>
            <div>
              {FAQS.map((f, i) => (
                <details key={i} className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                  <summary className="faq-q" style={{ width: "100%", color: "#f5f0e8", textAlign: "left", fontSize: 16, fontWeight: 500, padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                    {f.q}
                    <span className="faq-icon" style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#9a9a9a", flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{ fontSize: 15, color: "#9a9a9a", lineHeight: 1.8, paddingBottom: 24 }}>{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. FINAL CTA ─── */}
        <section className="section-pad" style={{ padding: "100px 4vw", textAlign: "center", background: "radial-gradient(120% 90% at 50% 100%, #14110b 0%, #080808 60%)", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(30px,5vw,56px)", lineHeight: 1.05, letterSpacing: "-.02em", color: "#f5f0e8", marginBottom: 20 }}>
              Ready to fill your academy?
            </h2>
            <p style={{ fontSize: 17, color: "#b8b2a6", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 34px" }}>
              Join the Enrollment Kit today and get your first campaign live this week, in sha&apos; Allah. Founding spots at $19/month won&apos;t last.
            </p>
            <JoinButton label="Join the Kit — from $19/month" style={{ fontSize: 16, padding: "18px 40px" }} />
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
