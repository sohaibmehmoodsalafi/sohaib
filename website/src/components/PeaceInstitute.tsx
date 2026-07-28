"use client";

export default function PeaceInstitute() {
  return (
    <section className="peace-section" style={{ padding: "80px 4vw", borderTop: "1px solid rgba(255,255,255,.07)", background: "#0f0f0f" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto",
        background: "#161616", border: "1px solid rgba(255,255,255,.07)",
        borderRadius: 20, padding: "48px 52px",
        display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap",
      }}>
        <div style={{ fontSize: 48, flexShrink: 0 }}>🕌</div>
        <div>
          <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, letterSpacing: ".03em", marginBottom: 8 }}>Peace Institute</h3>
          <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.7, marginBottom: 20, maxWidth: 440 }}>
            Structured Quran teaching, tarbiyah, and Shariah-conscious digital skills — all under one roof. Free trial class available for your family.
          </p>
          <a href="https://peace.org.pk" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1e1e1e", border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 99, padding: "10px 22px",
              fontSize: 13, fontWeight: 600, textDecoration: "none", color: "#f5f0e8",
              transition: "border-color .2s, color .2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#d4a017"; e.currentTarget.style.color = "#d4a017"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.12)"; e.currentTarget.style.color = "#f5f0e8"; }}
          >Visit peace.org.pk →</a>
        </div>
      </div>
    </section>
  );
}
