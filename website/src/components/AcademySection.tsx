import { ACADEMY_IMG } from "@/lib/academyThumb";

// Credibility section: Sohaib's own online Quran academy (academy.peace.org.pk).
// Shows academy owners he lives the world he markets to. Design matches the site.
export default function AcademySection() {
  return (
    <section className="section-pad" style={{ padding: "90px 4vw", borderTop: "1px solid var(--hairline)", background: "var(--bg-dark)" }}>
      <div className="kit-2col" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        {/* Text */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
            <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />I run my own academy
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.08, letterSpacing: "-.01em", color: "var(--text)", marginBottom: 18 }}>
            I don&apos;t just market Islamic education — <span style={{ color: "#d4a017" }}>I teach it.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-soft)", lineHeight: 1.8, marginBottom: 20 }}>
            Through <strong style={{ color: "var(--text)" }}>Peace Institute&apos;s online Quran academy</strong>, I run one-to-one, live Quran classes with certified teachers for students worldwide — from the Arabic alphabet to Tajweed, Hifz, and Dars-e-Nizami, for children and adults.
          </p>
          <p style={{ fontSize: 15, color: "var(--text-muted2)", lineHeight: 1.7, marginBottom: 28 }}>
            So when I build your academy&apos;s marketing, I understand it from the inside — your teachers, your students, and your parents.
          </p>
          <a href="https://academy.peace.org.pk/" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 99, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Visit the academy →
          </a>
        </div>

        {/* Visual */}
        <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--hairline-2)", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <a href="https://academy.peace.org.pk/" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
            <img src={ACADEMY_IMG} alt="Peace Institute online Quran academy — one-to-one live Quran classes" width={640} height={360} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
