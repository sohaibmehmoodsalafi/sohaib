// Verified ad results from real client Meta (Facebook/Instagram) campaigns.
// Figures are aggregated from the client ad-account screenshots the owner provided
// (Aug 2026, US Quran-academy campaigns). These are messaging leads, not enrollments.
const STATS = [
  { n: "120+", title: "WhatsApp leads started", sub: "Real parents who messaged, ready to enroll" },
  { n: "~PKR 2,600", title: "Average cost per lead", sub: "Roughly $9 per qualified inquiry" },
  { n: "9", title: "US ad campaigns", sub: "Facebook & Instagram, Aug 2026" },
];

export default function AdResults() {
  return (
    <section className="section-pad" style={{ padding: "100px 4vw", background: "var(--bg)", borderTop: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Live ad results
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5.4vw,60px)", lineHeight: 1.0, letterSpacing: "-.01em", color: "var(--text)", marginBottom: 16 }}>
          Real campaigns. <span style={{ color: "#d4a017" }}>Real leads.</span>
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted2)", maxWidth: 620, lineHeight: 1.7, marginBottom: 56 }}>
          Recent Facebook &amp; Instagram ad campaigns for Quran academies in the US — click-to-WhatsApp lead generation, across <strong style={{ color: "var(--text)" }}>PKR 320,000+ in ad spend</strong>.
        </p>

        <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ border: "1px solid var(--hairline)", borderRadius: 16, padding: "36px 30px", background: "var(--bg-card)" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,52px)", color: "#d4a017", lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 28 }}>
          These are live results from real client ad accounts.{" "}
          <a href="https://whatsapp.com/channel/0029VbE3G3P1t90cv0tBXY0T/110" target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", fontWeight: 600, textDecoration: "none" }}>
            See ongoing proof on my WhatsApp channel →
          </a>
        </p>
      </div>
    </section>
  );
}
