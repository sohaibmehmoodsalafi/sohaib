"use client";
import { useEffect, useRef, useState } from "react";

const milestones = [
  { year: "2014", title: "The Spark", desc: "Discovered MIRC's creative work — instantly inspired. Started learning graphic design out of pure passion." },
  { year: "2015", title: "Web Development", desc: "Expanded into web development, combining design skills with technical knowledge to build complete digital experiences." },
  { year: "2016", title: "Digital Marketing", desc: "Entered the world of digital marketing — learning how to grow businesses through data-driven strategies and creative campaigns." },
  { year: "2017", title: "Soft Desk Solution Founded", desc: "Launched Soft Desk Solution — a complete digital solutions platform covering branding, web development, social media, and lead generation." },
  { year: "2017", title: "Peace Institute Launched", desc: "Founded Peace Institute — an organization and academy focused on education, awareness, creativity, and community development." },
  { year: "Today", title: "Still Building", desc: "Working with multiple organizations across Pakistan and beyond — and building a platform to empower youth through digital skills, education, and creativity." },
];

const skills = [
  "SEO & Search Marketing",
  "Google Ads & SEM",
  "Facebook & Instagram Ads",
  "Shopify & E-commerce",
  "Go High Level CRM",
  "WordPress Development",
  "Graphic Design",
  "Brand Identity",
  "Lead Generation",
  "AI & Automation",
  "Dars-e-Nizami",
  "Youth Empowerment",
];

const stats = [
  { num: "10+", label: "Years of Journey" },
  { num: "50+", label: "Projects Delivered" },
  { num: "30+", label: "Happy Clients" },
  { num: "2", label: "Ventures Running" },
];

export default function AboutPage() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".observe").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id: string) => visibleItems.has(id);

  return (
    <main
      style={{
        background: "#0c0c0c",
        color: "#f0ede8",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 72px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Big watermark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(100px,18vw,240px)",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1px rgba(240,237,232,0.04)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.04em",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          ABOUT
        </div>

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: "148px",
            left: "72px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(240,237,232,0.07)",
            borderRadius: "100px",
            padding: "8px 18px",
            fontSize: "12px",
            fontWeight: 500,
            color: "#888580",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}
          />
          Karachi, Pakistan
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#888580",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            My Story
          </p>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(56px,9vw,120px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "48px",
            }}
          >
            Passion.
            <br />
            Faith.
            <br />
            <em style={{ fontStyle: "normal", color: "#888580" }}>Purpose.</em>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "28px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#888580",
                maxWidth: "480px",
                lineHeight: 1.75,
              }}
            >
              From a moment of inspiration in 2014 to building two ventures — this is the story of a journey driven by creativity, consistency, and a purpose bigger than business.
            </p>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "40px",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "#c9f542",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: "12px", color: "#888580", marginTop: "6px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY TEXT ── */}
      <section
        id="story"
        className="observe"
        style={{
          padding: "100px 72px",
          background: "#131313",
          borderTop: "1px solid rgba(240,237,232,0.07)",
          opacity: isVisible("story") ? 1 : 0,
          transform: isVisible("story") ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "80px",
            alignItems: "start",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#888580", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Syne', sans-serif", marginBottom: "16px" }}>
              In My Own Words
            </p>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(32px,4vw,52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Who is<br />
              <em style={{ fontStyle: "normal", color: "#888580" }}>Sohaib?</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              "My journey into the digital world started in 2014 when I came across the creative work of an organization called MIRC. Their designs inspired me deeply and sparked a passion inside me to learn graphic design myself.",
              "As my interest in the digital field continued to grow, I expanded my skills into web development in 2015 and later entered the world of digital marketing in 2016. At the same time, I also began studying the Dars-e-Nizami course, which played a major role in shaping my mindset and vision — teaching me discipline, purpose, and the importance of using skills for positive impact.",
              "In 2017, I founded Soft Desk Solution with a vision to provide complete digital solutions under one platform. Alongside this, I also launched Peace Institute — an organization focused on education, awareness, creativity, and community development.",
              "The early days were not easy. Finding clients and building trust in a competitive market was a real challenge. But instead of stopping, I focused on learning, experimenting, and consistently showing up with patience and dedication.",
              "Alhamdulillah, I have now worked with multiple organizations and businesses, helping them grow through complete all-in-one digital solutions. Consistency, creativity, and understanding people's needs have always been at the center of my work.",
              "But beyond projects and services, my vision has always been bigger than business alone. I strongly believe the digital world should not only build brands — it should build people, opportunities, and positive change.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: "16px",
                  color: i === 5 ? "#f0ede8" : "#888580",
                  lineHeight: 1.8,
                  fontWeight: i === 5 ? 500 : 400,
                  borderLeft: i === 5 ? "2px solid #c9f542" : "none",
                  paddingLeft: i === 5 ? "20px" : "0",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: "100px 72px", background: "#0c0c0c" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "#888580", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Syne', sans-serif", marginBottom: "16px" }}>
            The Journey
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px,4vw,52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "64px",
              lineHeight: 1.05,
            }}
          >
            Year by<br />
            <em style={{ fontStyle: "normal", color: "#888580" }}>year.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {milestones.map((m, i) => (
              <div
                key={i}
                id={`milestone-${i}`}
                className="observe"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1px 1fr",
                  gap: "0 32px",
                  alignItems: "start",
                  opacity: isVisible(`milestone-${i}`) ? 1 : 0,
                  transform: isVisible(`milestone-${i}`) ? "translateX(0)" : "translateX(-24px)",
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                }}
              >
                {/* Year */}
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: m.year === "Today" ? "#c9f542" : "#888580",
                    paddingTop: "28px",
                    textAlign: "right",
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.year}
                </div>
                {/* Line + dot */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: m.year === "Today" ? "#c9f542" : "rgba(240,237,232,0.2)",
                      border: m.year === "Today" ? "none" : "1px solid rgba(240,237,232,0.15)",
                      marginTop: "30px",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  />
                  {i < milestones.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flex: 1,
                        minHeight: "40px",
                        background: "rgba(240,237,232,0.07)",
                      }}
                    />
                  )}
                </div>
                {/* Content */}
                <div style={{ padding: "20px 0 48px" }}>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: "10px",
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#888580", lineHeight: 1.75 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        className="observe"
        style={{
          padding: "100px 72px",
          background: "#131313",
          borderTop: "1px solid rgba(240,237,232,0.07)",
          opacity: isVisible("skills") ? 1 : 0,
          transform: isVisible("skills") ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "#888580", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Syne', sans-serif", marginBottom: "16px" }}>
            What I Know
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px,4vw,52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "48px",
              lineHeight: 1.05,
            }}
          >
            Skills &<br />
            <em style={{ fontStyle: "normal", color: "#888580" }}>expertise.</em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  padding: "10px 20px",
                  border: "1px solid rgba(240,237,232,0.07)",
                  borderRadius: "100px",
                  fontSize: "14px",
                  color: "#888580",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#c9f542";
                  (e.target as HTMLElement).style.color = "#f0ede8";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(240,237,232,0.07)";
                  (e.target as HTMLElement).style.color = "#888580";
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION QUOTE ── */}
      <section
        id="vision"
        className="observe"
        style={{
          padding: "120px 72px",
          background: "#c9f542",
          position: "relative",
          overflow: "hidden",
          opacity: isVisible("vision") ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(80px,15vw,200px)",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1px rgba(12,12,12,0.06)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.04em",
            pointerEvents: "none",
          }}
        >
          PURPOSE
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(24px,3.5vw,48px)",
              fontWeight: 800,
              color: "#0c0c0c",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
            }}
          >
            "The digital world should not only build brands — it should build people, opportunities, and positive change."
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(12,12,12,0.5)",
              marginTop: "28px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            — Sohaib Mehmood
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 72px", background: "#0c0c0c", textAlign: "center" }}>
        <p style={{ fontSize: "13px", fontWeight: 500, color: "#888580", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Syne', sans-serif", marginBottom: "16px" }}>
          Let's Connect
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(36px,6vw,80px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginBottom: "24px",
          }}
        >
          Let's Build<br />
          <em style={{ fontStyle: "normal", color: "#888580" }}>Together.</em>
        </h2>
        <p style={{ fontSize: "16px", color: "#888580", marginBottom: "44px" }}>
          Ready to grow your brand or collaborate on something meaningful?
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/contact"
            style={{
              padding: "15px 40px",
              background: "#f0ede8",
              color: "#0c0c0c",
              borderRadius: "100px",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: "'Syne', sans-serif",
              textDecoration: "none",
            }}
          >
            Start a Project →
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=923363710499"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "15px 40px",
              border: "1.5px solid rgba(240,237,232,0.12)",
              borderRadius: "100px",
              fontSize: "15px",
              fontWeight: 500,
              color: "#f0ede8",
              textDecoration: "none",
            }}
          >
            WhatsApp Me
          </a>
        </div>
      </section>
    </main>
  );
}
