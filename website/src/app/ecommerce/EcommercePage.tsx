"use client";

import { useState } from "react";

/* ── Data ── */
const stats = [
  { value: "5.6×", label: "Average ROAS", icon: "📈" },
  { value: "500+", label: "SKU Stores Managed", icon: "🏪" },
  { value: "PKR 156", label: "Avg Cost Per Lead", icon: "💰" },
  { value: "3.2×", label: "Revenue Growth", icon: "🚀" },
];

const services = [
  {
    num: "01",
    title: "Product Audience Research",
    desc: "Deep-dive into your ideal buyer — demographics, interests, purchase behavior. We find who is most likely to buy and build campaigns around them.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Ad Creative Design (In-House)",
    desc: "Scroll-stopping visuals and copy designed by the same person running your ads. No disconnect between what the ad promises and what the page delivers.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 15l5-5 4 4 3-3 6 6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "A/B Testing & Optimization",
    desc: "Every headline, image, and CTA is tested. Structured experiments to find what converts best — then scale the winners aggressively.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Retargeting Sequences",
    desc: "Most people do not buy on the first visit. Smart retargeting ads bring warm leads back with urgency-driven offers to close the sale.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="#d4a017" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Landing Page Optimization",
    desc: "Conversion-optimized pages built for speed and sales. Every element tested — headline, product layout, CTA placement, mobile experience.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

const caseStudies = [
  {
    name: "VeeTrends Fashion",
    tag: "E-commerce · Scaling",
    url: "veetrends.com",
    initials: "VT",
    metrics: [
      { label: "SKUs Managed", value: "500+" },
      { label: "Revenue Growth", value: "3.2×" },
      { label: "Ad Spend", value: "PKR 80K/mo" },
      { label: "ROAS", value: "5.6×" },
    ],
    story:
      "VeeTrends had a large catalog but no structured ad strategy. I built a full-funnel system: audience segmentation by product category, custom ad creatives for each collection, and retargeting sequences for cart abandoners. Revenue scaled 3.2× within 90 days with a consistent 5.6× ROAS.",
  },
  {
    name: "Luxurious.pk",
    tag: "E-commerce · Brand Launch",
    url: "luxurious.pk",
    initials: "LP",
    metrics: [
      { label: "Starting Point", value: "Zero" },
      { label: "Orders", value: "1,000+" },
      { label: "Cost Per Order", value: "PKR 280" },
      { label: "Timeline", value: "4 Months" },
    ],
    story:
      "Luxurious.pk was a brand new store with no sales history and no audience. I designed the ad creatives, built a conversion-focused landing page, and launched Meta Ads campaigns from scratch. The brand went from zero to 1,000+ orders in 4 months.",
  },
];

/* ── Component ── */
export default function EcommercePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <main style={{ background: "#080808", color: "#f5f0e8", fontFamily: "'Outfit',sans-serif", overflowX: "hidden" }}>
      {/* Responsive + animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseAnim { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .hero-fade { opacity: 0; animation: fadeUp .8s ease forwards; }
        .hero-fade-d1 { animation-delay: .1s; }
        .hero-fade-d2 { animation-delay: .2s; }
        .hero-fade-d3 { animation-delay: .35s; }
        .hero-fade-d4 { animation-delay: .5s; }
        .hero-fade-d5 { animation-delay: .65s; }
        @media (max-width: 768px) {
          .ecom-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .ecom-services { grid-template-columns: 1fr !important; }
          .ecom-metrics { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .ecom-stats { grid-template-columns: 1fr !important; }
        }
      ` }} />

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 4vw", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,8,8,0.95)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,.06)"
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/images/sohaib-logo.png" alt="Sohaib Mehmood Logo" style={{ width: 34, height: 34, objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 15, letterSpacing: ".08em", color: "#f5f0e8", lineHeight: 1.1 }}>SOHAIB MEHMOOD</div>
            <div style={{ fontSize: 8, color: "#6b6b6b", letterSpacing: ".12em" }}>E-COMMERCE MARKETING</div>
          </div>
        </a>
        <a
          href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20have%20an%20e-commerce%20store%20and%20want%20to%20scale%20with%20Meta%20Ads."
          target="_blank" rel="noopener noreferrer"
          style={{
            background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 13,
            padding: "10px 22px", borderRadius: 99, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}
        >
          Get Free Ads Audit
        </a>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "120px 4vw 80px", position: "relative", overflow: "hidden"
      }}>
        {/* Background gradient */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(212,160,23,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 60%, rgba(255,92,53,0.03) 0%, transparent 50%)
          `
        }} />

        {/* Decorative ring */}
        <div style={{
          position: "absolute", right: "5vw", top: "15%", width: 350, height: 350,
          borderRadius: "50%", border: "1px solid rgba(212,160,23,0.08)",
          animation: "rotateSlow 30s linear infinite", pointerEvents: "none", zIndex: 0
        }}>
          <div style={{
            position: "absolute", top: -4, left: "50%", width: 8, height: 8,
            borderRadius: "50%", background: "#d4a017", transform: "translateX(-50%)",
            boxShadow: "0 0 12px rgba(212,160,23,0.6)"
          }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: 800, width: "100%", margin: "0 auto" }}>
          {/* Badge */}
          <div className="hero-fade hero-fade-d1" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,92,53,0.06)", border: "1px solid rgba(255,92,53,0.15)",
            borderRadius: 99, padding: "6px 16px", fontSize: 11, fontWeight: 600,
            color: "#ff5c35", letterSpacing: ".04em", marginBottom: 32,
          }}>
            <span style={{ width: 6, height: 6, background: "#ff5c35", borderRadius: "50%", animation: "pulseAnim 2s infinite" }} />
            Specialized for E-commerce Stores
          </div>

          {/* H1 */}
          <h1 className="hero-fade hero-fade-d2" style={{
            fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(48px, 8vw, 90px)",
            lineHeight: 0.95, letterSpacing: ".01em", color: "#f5f0e8", marginBottom: 8,
          }}>
            SCALE YOUR STORE TO
            <br /><span style={{ color: "#d4a017", textShadow: "0 0 40px rgba(212,160,23,0.2)" }}>5× ROAS</span> WITH
            <br /><span style={{ WebkitTextStroke: "2px rgba(245,240,232,0.8)", color: "transparent" }}>META ADS.</span>
          </h1>

          <p className="hero-fade hero-fade-d3" style={{
            fontSize: "clamp(15px, 1.6vw, 18px)", color: "#9a9a9a", fontWeight: 300,
            maxWidth: 520, margin: "24px 0 40px", lineHeight: 1.7,
          }}>
            <strong style={{ color: "#f5f0e8", fontWeight: 500 }}>Full-funnel campaigns</strong>
            {" "}— audience research, scroll-stopping creatives, and conversion-optimized landing pages. All by one expert.
          </p>

          {/* CTAs */}
          <div className="hero-fade hero-fade-d4" style={{
            display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 60,
          }}>
            <a
              href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20have%20an%20e-commerce%20store%20and%20want%20to%20scale%20with%20Meta%20Ads."
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15,
                padding: "15px 32px", borderRadius: 99, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 10,
                boxShadow: "0 0 20px rgba(212,160,23,0.2)",
              }}
            >
              <svg width="18" height="18" fill="#080808" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Get Free E-commerce Ads Audit
            </a>
            <a href="/" style={{
              background: "rgba(255,255,255,0.03)", color: "#d4a017", fontWeight: 500, fontSize: 15,
              padding: "14px 32px", borderRadius: 99, textDecoration: "none",
              border: "1px solid rgba(212,160,23,0.3)", display: "inline-flex",
              alignItems: "center", gap: 10, backdropFilter: "blur(10px)",
            }}>
              View All Services →
            </a>
          </div>

          {/* Stats bar */}
          <div className="ecom-stats hero-fade hero-fade-d5" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid rgba(212,160,23,0.15)", borderRadius: 16,
            overflow: "hidden", background: "rgba(212,160,23,0.02)",
            backdropFilter: "blur(10px)",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: "20px 16px", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}>
                <div style={{ fontSize: 11, marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: "#d4a017", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 10, color: "#6b6b6b", marginTop: 4, letterSpacing: ".03em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ padding: "100px 4vw", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: ".2em", color: "#d4a017", textTransform: "uppercase", fontWeight: 600 }}>
              WHAT IS INCLUDED
            </span>
            <h2 style={{
              fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1, marginTop: 12, color: "#f5f0e8"
            }}>
              A COMPLETE <span style={{ color: "#d4a017" }}>ADS SYSTEM</span> FOR YOUR STORE
            </h2>
            <p style={{ fontSize: 15, color: "#9a9a9a", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
              Not just ads — a full conversion engine designed to scale your revenue predictably.
            </p>
          </div>

          <div className="ecom-services" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 20 }}>
            {services.slice(0, 3).map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  background: hoveredService === i ? "rgba(212,160,23,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${hoveredService === i ? "rgba(212,160,23,0.25)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 16, padding: 32, transition: "all .3s ease",
                  position: "relative", overflow: "hidden"
                }}
              >
                <div style={{
                  position: "absolute", top: -20, right: -10,
                  fontFamily: "'Bebas Neue',sans-serif", fontSize: 120,
                  color: "rgba(212,160,23,0.04)", lineHeight: 1, pointerEvents: "none"
                }}>{s.num}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: 20 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, color: "#d4a017", letterSpacing: ".15em", marginBottom: 8, fontWeight: 600 }}>
                    STEP {s.num}
                  </div>
                  <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, color: "#f5f0e8", marginBottom: 12, lineHeight: 1.1 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#9a9a9a", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ecom-services" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {services.slice(3).map((s, i) => (
              <div
                key={i + 3}
                onMouseEnter={() => setHoveredService(i + 3)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  background: hoveredService === i + 3 ? "rgba(212,160,23,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${hoveredService === i + 3 ? "rgba(212,160,23,0.25)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 16, padding: 32, transition: "all .3s ease",
                  position: "relative", overflow: "hidden"
                }}
              >
                <div style={{
                  position: "absolute", top: -20, right: -10,
                  fontFamily: "'Bebas Neue',sans-serif", fontSize: 120,
                  color: "rgba(212,160,23,0.04)", lineHeight: 1, pointerEvents: "none"
                }}>{s.num}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: 20 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, color: "#d4a017", letterSpacing: ".15em", marginBottom: 8, fontWeight: 600 }}>
                    STEP {s.num}
                  </div>
                  <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, color: "#f5f0e8", marginBottom: 12, lineHeight: 1.1 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#9a9a9a", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section style={{
        padding: "100px 4vw",
        background: "linear-gradient(180deg, rgba(212,160,23,0.03) 0%, transparent 100%)",
        borderTop: "1px solid rgba(255,255,255,.05)"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontSize: 11, letterSpacing: ".2em", color: "#d4a017", textTransform: "uppercase", fontWeight: 600 }}>
              REAL CASE STUDIES
            </span>
            <h2 style={{
              fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.05, marginTop: 12, color: "#f5f0e8"
            }}>
              E-COMMERCE <span style={{ color: "#d4a017" }}>RESULTS THAT SPEAK</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {caseStudies.map((cs) => (
              <div key={cs.name} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20, padding: "40px 36px", position: "relative", overflow: "hidden"
              }}>
                {/* Glow accent */}
                <div style={{
                  position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                  width: 200, height: 2, background: "linear-gradient(90deg, transparent, #d4a017, transparent)"
                }} />

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <span style={{
                      fontSize: 10, color: "#d4a017", fontWeight: 600,
                      background: "rgba(212,160,23,0.08)", border: "1px solid rgba(212,160,23,0.15)",
                      borderRadius: 4, padding: "3px 10px", letterSpacing: ".03em"
                    }}>{cs.tag}</span>
                    <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: "#f5f0e8", marginTop: 10, lineHeight: 1 }}>
                      {cs.name}
                    </h3>
                  </div>
                  <span style={{
                    fontSize: 10, color: "#6db88a", fontWeight: 600,
                    background: "rgba(34,139,34,0.08)", border: "1px solid rgba(34,139,34,0.15)",
                    borderRadius: 99, padding: "4px 12px", letterSpacing: ".03em"
                  }}>✓ Verified Client</span>
                </div>

                {/* Metrics */}
                <div className="ecom-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
                  {cs.metrics.map((m) => (
                    <div key={m.label} style={{
                      background: "rgba(212,160,23,0.04)", border: "1px solid rgba(212,160,23,0.1)",
                      borderRadius: 12, padding: "18px 16px", textAlign: "center"
                    }}>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, color: "#d4a017", lineHeight: 1 }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: 10, color: "#6b6b6b", marginTop: 6, letterSpacing: ".05em", textTransform: "uppercase" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Story */}
                <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.8 }}>{cs.story}</p>

                {/* Client badge */}
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Bebas Neue',sans-serif", fontSize: 14, color: "#d4a017"
                  }}>{cs.initials}</div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "#f5f0e8" }}>{cs.name}</p>
                    <p style={{ fontSize: 11, color: "#6b6b6b" }}>{cs.url}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why One Expert ── */}
      <section style={{ padding: "100px 4vw", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            background: "rgba(212,160,23,0.03)", border: "1px solid rgba(212,160,23,0.15)",
            borderRadius: 20, padding: "40px 36px", position: "relative", overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, transparent, #d4a017 50%, transparent)"
            }} />
            <span style={{
              fontSize: 10, color: "#080808", background: "#d4a017",
              padding: "4px 12px", borderRadius: 4, fontWeight: 700, letterSpacing: ".05em"
            }}>ONE PERSON. ONE SYSTEM.</span>
            <h3 style={{
              fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(24px, 3vw, 32px)",
              color: "#f5f0e8", marginTop: 16, marginBottom: 16, lineHeight: 1.1
            }}>
              WHY ONE EXPERT BEATS AN AGENCY FOR E-COMMERCE
            </h3>
            <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.8, marginBottom: 16 }}>
              Agencies assign your store to a junior media buyer who has never designed an ad creative or built a landing page. Your ad says one thing, the page says another, and the creative does not match either.
            </p>
            <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.8 }}>
              I personally handle every element — product research, ad creative design, landing page development, and campaign optimization. <strong style={{ color: "#d4a017" }}>One person, one vision, zero handoff gaps.</strong> That is why my clients achieve 5×+ ROAS consistently.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "100px 4vw", textAlign: "center",
        background: "linear-gradient(180deg, transparent, rgba(212,160,23,0.04) 50%, transparent)",
        borderTop: "1px solid rgba(255,255,255,.05)"
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: ".2em", color: "#d4a017", textTransform: "uppercase", fontWeight: 600 }}>
            READY TO SCALE?
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1, marginTop: 12, marginBottom: 20, color: "#f5f0e8"
          }}>
            GET YOUR <span style={{ color: "#d4a017" }}>FREE ADS AUDIT</span>
            <br />FOR YOUR STORE
          </h2>
          <p style={{ fontSize: 15, color: "#9a9a9a", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 40px" }}>
            I will analyze your current ads, find where you are losing money, and give you a custom scaling strategy — free, no strings attached.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20have%20an%20e-commerce%20store%20and%20want%20to%20scale%20with%20Meta%20Ads."
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15,
                padding: "16px 36px", borderRadius: 99, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 10,
                boxShadow: "0 0 30px rgba(212,160,23,0.25)",
              }}
            >
              <svg width="18" height="18" fill="#080808" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Get Free Ads Audit on WhatsApp
            </a>
            <a
              href="https://calendly.com/meetsohaib/30min"
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.03)", color: "#f5f0e8", fontWeight: 500, fontSize: 15,
                padding: "15px 32px", borderRadius: 99, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)", display: "inline-flex",
                alignItems: "center", gap: 8,
              }}
            >
              Or Book a Zoom Call
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24 }}>
            {["No commitment", "Free consultation", "Reply within 1 hour"].map((t) => (
              <span key={t} style={{ fontSize: 11, color: "#6b6b6b", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#6db88a", fontSize: 10 }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: "24px 4vw", borderTop: "1px solid rgba(255,255,255,.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: "#6b6b6b" }}>
          © 2026 Sohaib Mehmood — Meta Ads Expert for E-commerce
        </span>
        <a href="/" style={{ fontSize: 11, color: "#6b6b6b", textDecoration: "none" }}>
          ← Back to Main Site
        </a>
      </footer>
    </main>
  );
}
