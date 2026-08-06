"use client";

import { useState } from "react";

/* ── Data ── */
const stats = [
  { value: "85+", label: "Students / Month", icon: "🎓" },
  { value: "PKR 352", label: "Cost Per Student", icon: "💰" },
  { value: "12.6%", label: "Page Conversion", icon: "📈" },
  { value: "3×", label: "Admissions Growth", icon: "🚀" },
];

const steps = [
  {
    num: "01",
    title: "Landing Page Build",
    desc: "High-converting page with free trial class offer, parent testimonials, trust signals, and WhatsApp integration — designed to turn visitors into enrolled students.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Meta Ads Targeting Parents",
    desc: "Facebook & Instagram ads across USA, UK & Canada reaching parents actively searching for online Quran classes. Custom creatives, audience segmentation, and retargeting.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="#d4a017" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Students Enroll, You Teach",
    desc: "Qualified leads flow in daily via WhatsApp & forms. You focus on teaching Quran — I handle marketing, optimization, creative testing, and scaling.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#d4a017" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
];

const includes = [
  { title: "Landing Page Design", desc: "Custom-built page with free trial class CTA" },
  { title: "Meta Ads Campaigns", desc: "Facebook + Instagram targeting USA, UK & Canada" },
  { title: "Ad Creative Design", desc: "Scroll-stopping visuals for Quran education" },
  { title: "Retargeting Funnels", desc: "Warm leads see follow-up ads for enrollment" },
  { title: "Conversion Tracking", desc: "Pixel setup & event tracking for optimization" },
  { title: "Weekly WhatsApp Reports", desc: "Performance updates + strategy discussions" },
];

const caseStudyMetrics = [
  { label: "Monthly Budget", value: "PKR 30K" },
  { label: "New Students", value: "85+" },
  { label: "Cost/Student", value: "PKR 352" },
  { label: "Page Conversion", value: "12.6%" },
];

/* ── Component ── */
export default function QuranAcademyPage() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <main style={{ background: "#080808", color: "#f5f0e8", fontFamily: "'Plus Jakarta Sans',sans-serif", overflowX: "hidden" }}>
      {/* Responsive + animation styles */}
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
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .results-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .hero-stats { grid-template-columns: 1fr !important; }
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
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: ".08em", color: "#f5f0e8", lineHeight: 1.1 }}>SOHAIB MEHMOOD</div>
            <div style={{ fontSize: 8, color: "#6b6b6b", letterSpacing: ".12em" }}>QURAN ACADEMY MARKETING</div>
          </div>
        </a>
        <a
          href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20run%20a%20Quran%20Academy%20and%20want%20to%20get%20more%20students."
          target="_blank" rel="noopener noreferrer"
          style={{
            background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 13,
            padding: "10px 22px", borderRadius: 99, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 6,
            transition: "all .2s"
          }}
        >
          Book Free Strategy Call
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
            radial-gradient(ellipse 60% 80% at 80% 60%, rgba(34,139,34,0.04) 0%, transparent 50%)
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
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(34,139,34,0.08)", border: "1px solid rgba(34,139,34,0.2)",
            borderRadius: 99, padding: "6px 16px", fontSize: 11, fontWeight: 600,
            color: "#6db88a", letterSpacing: ".04em", marginBottom: 32,
          }} className="hero-fade hero-fade-d1">
            <span style={{ width: 6, height: 6, background: "#6db88a", borderRadius: "50%", animation: "pulseAnim 2s infinite" }} />
            Specialized for Online Quran Academies
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(48px, 8vw, 90px)",
            lineHeight: 0.95, letterSpacing: ".01em", color: "#f5f0e8", marginBottom: 8,
          }} className="hero-fade hero-fade-d2">
            GET <span style={{ color: "#d4a017", textShadow: "0 0 40px rgba(212,160,23,0.2)" }}>80+ STUDENTS</span>
            <br />EVERY MONTH FOR
            <br />YOUR <span style={{ WebkitTextStroke: "2px rgba(245,240,232,0.8)", color: "transparent" }}>QURAN ACADEMY.</span>
          </h1>

          <p style={{
            fontSize: "clamp(15px, 1.6vw, 18px)", color: "#9a9a9a", fontWeight: 300,
            maxWidth: 520, margin: "24px 0 40px", lineHeight: 1.7,
          }} className="hero-fade hero-fade-d3">
            <strong style={{ color: "#f5f0e8", fontWeight: 500 }}>Targeted Meta Ads in USA, UK & Canada</strong>
            {" "}— reaching parents who want online Quran classes for their children. One expert handles everything.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 60,
          }} className="hero-fade hero-fade-d4">
            <a
              href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20run%20a%20Quran%20Academy%20and%20want%20to%20get%20more%20students."
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15,
                padding: "15px 32px", borderRadius: 99, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 10,
                boxShadow: "0 0 20px rgba(212,160,23,0.2)", transition: "all .2s"
              }}
            >
              <svg width="18" height="18" fill="#080808" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Book Free Strategy Call
            </a>
            <a
              href="/"
              style={{
                background: "rgba(255,255,255,0.03)", color: "#d4a017", fontWeight: 500, fontSize: 15,
                padding: "14px 32px", borderRadius: 99, textDecoration: "none",
                border: "1px solid rgba(212,160,23,0.3)", display: "inline-flex",
                alignItems: "center", gap: 10, backdropFilter: "blur(10px)", transition: "all .2s"
              }}
            >
              View All Services →
            </a>
          </div>

          {/* Stats bar */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid rgba(212,160,23,0.15)", borderRadius: 16,
            overflow: "hidden", background: "rgba(212,160,23,0.02)",
            backdropFilter: "blur(10px)",
          }} className="hero-stats hero-fade hero-fade-d5">
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: "20px 16px", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}>
                <div style={{ fontSize: 11, marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 28, color: "#d4a017", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 10, color: "#6b6b6b", marginTop: 4, letterSpacing: ".03em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ padding: "100px 4vw", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: ".2em", color: "#d4a017", textTransform: "uppercase", fontWeight: 600 }}>
              HOW IT WORKS
            </span>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1, marginTop: 12, color: "#f5f0e8"
            }}>
              ZERO TO <span style={{ color: "#d4a017" }}>FULL ACADEMY</span> IN 3 STEPS
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="services-grid">
            {steps.map((step, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  background: hoveredStep === i ? "rgba(212,160,23,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${hoveredStep === i ? "rgba(212,160,23,0.25)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 16, padding: 32,
                  transition: "all .3s ease", cursor: "default",
                  position: "relative", overflow: "hidden"
                }}
              >
                {/* Step number bg */}
                <div style={{
                  position: "absolute", top: -20, right: -10,
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 120,
                  color: "rgba(212,160,23,0.04)", lineHeight: 1, pointerEvents: "none"
                }}>
                  {step.num}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: 20 }}>{step.icon}</div>
                  <div style={{ fontSize: 11, color: "#d4a017", letterSpacing: ".15em", marginBottom: 8, fontWeight: 600 }}>
                    STEP {step.num}
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 24, color: "#f5f0e8", marginBottom: 12, lineHeight: 1.1 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#9a9a9a", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section style={{
        padding: "100px 4vw",
        background: "linear-gradient(180deg, rgba(212,160,23,0.03) 0%, transparent 100%)",
        borderTop: "1px solid rgba(255,255,255,.05)"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontSize: 11, letterSpacing: ".2em", color: "#d4a017", textTransform: "uppercase", fontWeight: 600 }}>
              REAL CASE STUDY
            </span>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.05, marginTop: 12, color: "#f5f0e8"
            }}>
              LEARN QURAN INSTITUTE — <span style={{ color: "#d4a017" }}>3× ADMISSIONS</span>
            </h2>
            <p style={{ fontSize: 15, color: "#9a9a9a", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              International student enrollments from USA, UK & Canada after launching the complete Meta Ads system.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20, padding: "40px 36px", position: "relative", overflow: "hidden"
          }}>
            {/* Glow accent */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: 200, height: 2, background: "linear-gradient(90deg, transparent, #d4a017, transparent)"
            }} />

            {/* Metrics grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }} className="hero-stats">
              {caseStudyMetrics.map((m, i) => (
                <div key={i} style={{
                  background: "rgba(212,160,23,0.04)", border: "1px solid rgba(212,160,23,0.1)",
                  borderRadius: 12, padding: "20px 16px", textAlign: "center"
                }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 28, color: "#d4a017", lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: 10, color: "#6b6b6b", marginTop: 6, letterSpacing: ".05em", textTransform: "uppercase" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Story */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.8 }}>
                Learn Quran Institute was struggling to get international students. They had tried boosting posts and hiring agencies — nothing worked consistently.
              </p>
              <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.8 }}>
                I built a complete system: a high-converting landing page with free trial class offer and parent testimonials, then ran targeted Meta Ads reaching parents in USA, UK & Canada searching for online Quran classes.
              </p>
              <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.8 }}>
                <strong style={{ color: "#d4a017" }}>Result:</strong>{" "}
                Admissions went up 3×. The landing page converts at 12.6% — over 4× the industry average. One expert designed the ads, built the page, and ran the campaign — zero miscommunication.
              </p>
            </div>

            {/* Client badge */}
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 14, color: "#d4a017"
              }}>LQI</div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#f5f0e8" }}>Learn Quran Institute</p>
                <p style={{ fontSize: 11, color: "#6b6b6b" }}>learnquraninstitute.org</p>
              </div>
              <span style={{
                marginLeft: "auto", fontSize: 10, color: "#6db88a", fontWeight: 600,
                background: "rgba(34,139,34,0.08)", border: "1px solid rgba(34,139,34,0.15)",
                borderRadius: 99, padding: "4px 12px", letterSpacing: ".03em"
              }}>
                ✓ Verified Client
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section style={{ padding: "100px 4vw", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontSize: 11, letterSpacing: ".2em", color: "#d4a017", textTransform: "uppercase", fontWeight: 600 }}>
              WHAT IS INCLUDED
            </span>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.05, marginTop: 12, color: "#f5f0e8"
            }}>
              EVERYTHING YOUR <span style={{ color: "#d4a017" }}>ACADEMY NEEDS</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="results-grid">
            {includes.map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14, padding: "24px 24px", display: "flex", gap: 16,
                alignItems: "flex-start", transition: "all .3s"
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: "rgba(212,160,23,0.08)", border: "1px solid rgba(212,160,23,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#d4a017", fontSize: 14
                }}>✓</div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: "#f5f0e8", marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: "#9a9a9a", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
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
            READY TO GROW?
          </span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1, marginTop: 12, marginBottom: 20, color: "#f5f0e8"
          }}>
            GET YOUR <span style={{ color: "#d4a017" }}>FREE STRATEGY</span>
            <br />FOR YOUR ACADEMY
          </h2>
          <p style={{ fontSize: 15, color: "#9a9a9a", lineHeight: 1.7, marginBottom: 40, maxWidth: 460, margin: "0 auto 40px" }}>
            I will analyze your current setup, show you where students are being lost, and give you a custom Meta Ads strategy — free, no strings attached.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/923048885206?text=Hi%20Sohaib!%20I%20run%20a%20Quran%20Academy%20and%20want%20to%20get%20more%20students."
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15,
                padding: "16px 36px", borderRadius: 99, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 10,
                boxShadow: "0 0 30px rgba(212,160,23,0.25)", transition: "all .2s"
              }}
            >
              <svg width="18" height="18" fill="#080808" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Book Free Strategy Call
            </a>
            <a
              href="https://calendly.com/meetsohaib/30min"
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.03)", color: "#f5f0e8", fontWeight: 500, fontSize: 15,
                padding: "15px 32px", borderRadius: 99, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)", display: "inline-flex",
                alignItems: "center", gap: 8, transition: "all .2s"
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
          © 2026 Sohaib Mehmood — Digital Marketing Expert
        </span>
        <a href="/" style={{ fontSize: 11, color: "#6b6b6b", textDecoration: "none", transition: "color .2s" }}>
          ← Back to Main Site
        </a>
      </footer>
    </main>
  );
}
