// Reusable "Get Your Free Growth Audit" call-to-action band.
// Matches the site style (near-black, gold, white). Links to the audit page.
export default function AuditCTA({
  heading = "Ready for more students?",
  sub = "Get a free growth audit — I'll review your academy's website and ads and show you 2–3 fixes to get more students. No cost, no obligation.",
}: { heading?: string; sub?: string }) {
  return (
    <section className="section-pad" style={{ padding: "80px 4vw", borderTop: "1px solid var(--hairline)" }}>
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
          background: "linear-gradient(160deg, var(--surface-gold) 0%, var(--bg-card) 100%)",
          border: "1px solid rgba(212,160,23,.3)",
          borderRadius: 22,
          padding: "clamp(32px,5vw,52px)",
        }}
      >
        <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.1, letterSpacing: "-.01em", color: "var(--text)", marginBottom: 14 }}>
          {heading}
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-soft)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 28px" }}>
          {sub}
        </p>
        <a
          href="/free-audit"
          style={{
            display: "inline-flex", alignItems: "center", gap: 9,
            background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 16,
            padding: "16px 36px", borderRadius: 99, textDecoration: "none",
            fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 0 20px rgba(212,160,23,0.2)",
          }}
        >
          Get Your Free Growth Audit →
        </a>
      </div>
    </section>
  );
}
