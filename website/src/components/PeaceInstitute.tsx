"use client";

const PILLARS = ["Education", "Dawah", "Media", "Welfare"];

export default function PeaceInstitute() {
  return (
    <section className="peace-section" style={{ padding: "90px 4vw", borderTop: "1px solid rgba(255,255,255,.07)", background: "#080808", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "relative",
          maxWidth: 980,
          margin: "0 auto",
          background: "linear-gradient(155deg, #17140f 0%, #121110 100%)",
          border: "1px solid rgba(212,160,23,.28)",
          borderRadius: 26,
          padding: "clamp(32px,5vw,56px)",
          overflow: "hidden",
        }}
      >
        {/* soft gold glow */}
        <div aria-hidden="true" style={{ position: "absolute", top: -90, right: -70, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,.18), transparent 70%)", pointerEvents: "none" }} />

        {/* Founder badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,23,.12)", border: "1px solid rgba(212,160,23,.3)", borderRadius: 99, padding: "7px 16px", marginBottom: 28 }}>
          <span style={{ fontSize: 13 }}>⭐</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#f5f0e8", letterSpacing: ".02em" }}>Sohaib&apos;s own institute — I practice what I teach</span>
        </div>

        <div className="peace-row" style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          {/* Icon */}
          <div style={{ flexShrink: 0, width: 96, height: 96, borderRadius: 24, background: "rgba(212,160,23,.12)", border: "1px solid rgba(212,160,23,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 46 }}>
            🕌
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.4vw,40px)", letterSpacing: "-.01em", marginBottom: 12, color: "#f5f0e8" }}>
              Peace Institute
            </h3>
            <p style={{ fontSize: 15, color: "#b8b2a6", lineHeight: 1.75, marginBottom: 20, maxWidth: 560 }}>
              Structured Quran teaching, tarbiyah, and Shariah-conscious digital skills — all under one roof. A modern Islamic institution building faith-rooted, future-ready Muslims. <strong style={{ color: "#f5f0e8", fontWeight: 600 }}>Free trial class available for your family.</strong>
            </p>

            {/* Pillars */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
              {PILLARS.map((p) => (
                <span key={p} style={{ fontSize: 12, fontWeight: 600, color: "#d4a017", background: "rgba(212,160,23,.08)", border: "1px solid rgba(212,160,23,.22)", borderRadius: 8, padding: "6px 12px" }}>{p}</span>
              ))}
            </div>

            <a href="https://peace.org.pk" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#d4a017", color: "#080808",
                borderRadius: 99, padding: "13px 26px",
                fontSize: 14, fontWeight: 700, textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 26px rgba(212,160,23,.28)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >Visit peace.org.pk →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
