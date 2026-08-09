"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Counter from "./Counter";

/* ── Particle Canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    // particles
    const particles: Array<{
      x: number; y: number; r: number; vx: number; vy: number;
      alpha: number; color: string; pulse: number; pulseSpeed: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      const isGold = Math.random() > 0.6;
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2 - 0.1,
        alpha: Math.random() * 0.4 + 0.1,
        color: isGold ? "212,160,23" : "255,255,255",
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // connecting lines threshold
    const lineThreshold = 120;

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      // draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineThreshold) {
            const opacity = (1 - dist / lineThreshold) * 0.06;
            ctx.strokeStyle = `rgba(212,160,23,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // wrap around
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${currentAlpha})`;
        ctx.fill();

        // glow for gold particles
        if (p.color === "212,160,23" && p.r > 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
          grad.addColorStop(0, `rgba(212,160,23,${currentAlpha * 0.3})`);
          grad.addColorStop(1, "rgba(212,160,23,0)");
          ctx.fillStyle = grad;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const cleanup = draw();
    const handleResize = () => draw();
    window.addEventListener("resize", handleResize);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("resize", handleResize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
    />
  );
}

/* ── Hero Stat ── */
function HeroStat({ num, suf, lbl, last }: { num: string; suf: string; lbl: string; last: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        padding: "22px 24px",
        borderRight: last ? "none" : "1px solid rgba(255,255,255,0.07)",
        background: hov ? "rgba(255,255,255,.02)" : "transparent",
        transition: "background .2s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 36, color: "#d4a017", lineHeight: 1, letterSpacing: ".02em" }}>
        <Counter end={num} suffix={suf} />
      </div>
      <div style={{ fontSize: 11, color: "#6b6b6b", marginTop: 4, letterSpacing: ".03em" }}>{lbl}</div>
    </div>
  );
}

/* ── Main Hero ── */
export default function Hero() {

  const stats = [
    { num: "120", suf: "+", lbl: "Businesses grown" },
    { num: "5.6", suf: "×", lbl: "Average ROAS" },
    { num: "85", suf: "%", lbl: "Client retention" },
    { num: "5", suf: "+", lbl: "Years experience" },
  ];

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 4vw 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Animated gradient mesh background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 10% 40%, rgba(212,160,23,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255,92,53,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 50% 90%, rgba(212,160,23,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 90% 70%, rgba(180,130,10,0.04) 0%, transparent 50%)
          `,
          animation: "heroMeshFloat 12s ease-in-out infinite alternate",
        }}
      />

      {/* ── Grain overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* ── Particle canvas ── */}
      <ParticleCanvas />

      {/* ── Animated gradient orbs ── */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, rgba(212,160,23,0.02) 40%, transparent 70%)",
          right: "-10%",
          top: "10%",
          filter: "blur(60px)",
          animation: "orbFloat1 8s ease-in-out infinite alternate",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,92,53,0.08) 0%, transparent 60%)",
          left: "-5%",
          bottom: "5%",
          filter: "blur(80px)",
          animation: "orbFloat2 10s ease-in-out infinite alternate",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 60%)",
          left: "40%",
          top: "60%",
          filter: "blur(50px)",
          animation: "orbFloat3 14s ease-in-out infinite alternate",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Horizontal scan line ── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.15), transparent)",
          animation: "scanLine 6s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── Rotating ring ── */}
      <div
        className="hero-ring"
        style={{
          position: "absolute",
          right: "8vw",
          top: "20%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(212,160,23,0.08)",
          animation: "rotateSlow 30s linear infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -4,
            left: "50%",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#d4a017",
            transform: "translateX(-50%)",
            boxShadow: "0 0 12px rgba(212,160,23,0.6)",
          }}
        />
      </div>

      {/* ── Second smaller ring ── */}
      <div
        className="hero-ring"
        style={{
          position: "absolute",
          right: "12vw",
          top: "30%",
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "1px dashed rgba(212,160,23,0.05)",
          animation: "rotateSlow 20s linear infinite reverse",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── Grid pattern overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.015,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ══ CONTENT — Centered ══ */}
      <div className="hero-grid" style={{ position: "relative", zIndex: 2, maxWidth: 920, width: "100%", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* ── Centered Text ── */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* #1 positioning pill (centered) */}
          <div
            className="hero-fade hero-fade-d1 hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(212,160,23,.1)",
              border: "1px solid rgba(212,160,23,.3)",
              borderRadius: 99,
              padding: "8px 18px",
              fontSize: 13,
              fontWeight: 600,
              color: "#f5f0e8",
              letterSpacing: ".02em",
              marginBottom: 28,
              backdropFilter: "blur(10px)",
            }}
          >
            <span style={{ color: "#d4a017" }}>✦</span>
            Growth partner for Quran academies &amp; Islamic organizations
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
              fontSize: "clamp(38px,5.4vw,74px)",
              lineHeight: 1.02,
              letterSpacing: "-.02em",
              color: "#f5f0e8",
              marginBottom: 8,
              maxWidth: 880,
            }}
            className="hero-fade hero-fade-d2"
          >
            More students for your academy.{" "}
            <span style={{ color: "#d4a017", textShadow: "0 0 40px rgba(212,160,23,0.25)" }}>
              More donors for your cause.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px,1.5vw,18px)",
              color: "#9a9a9a",
              fontWeight: 300,
              maxWidth: 600,
              margin: "22px auto 36px",
              lineHeight: 1.7,
            }}
            className="hero-fade hero-fade-d3 hero-desc"
          >
            I help <strong style={{ color: "#f5f0e8", fontWeight: 500 }}>Quran academies, Islamic institutes, and Muslim non-profits</strong> get a steady flow of students, leads, and donations — every month. Meta Ads, Google Ads, and complete funnels, built and run by one person who understands your mission.
          </p>

          {/* CTAs */}
          <div
            className="hero-btns hero-fade hero-fade-d4"
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <a
              href="https://wa.me/923048885206"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#d4a017",
                color: "#080808",
                fontWeight: 700,
                fontSize: 15,
                padding: "15px 32px",
                borderRadius: 99,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                transition: "transform .2s, background .2s, box-shadow .2s",
                boxShadow: "0 0 20px rgba(212,160,23,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#b8860b";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(212,160,23,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#d4a017";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(212,160,23,0.2)";
              }}
            >
              Get Free Growth Audit →
            </a>
            <a
              href="https://calendly.com/meetsohaib/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "#d4a017",
                fontWeight: 500,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 99,
                border: "1px solid rgba(212,160,23,0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                transition: "border-color .2s, background .2s, box-shadow .2s",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212,160,23,0.08)";
                e.currentTarget.style.borderColor = "rgba(212,160,23,0.6)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(212,160,23,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(212,160,23,0.3)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book Strategy Call
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              border: "1px solid rgba(212,160,23,0.15)",
              borderRadius: 16,
              overflow: "hidden",
              background: "rgba(212,160,23,0.02)",
              backdropFilter: "blur(10px)",
              animation: "borderPulse 4s ease-in-out infinite",
              maxWidth: 760,
              width: "100%",
              margin: "0 auto",
            }}
          >
            {stats.map((s, i) => (
              <HeroStat key={i} num={s.num} suf={s.suf} lbl={s.lbl} last={i === stats.length - 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
