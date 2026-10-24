import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found | Sohaib Mehmood",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", paddingTop: 96, minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <section className="section-pad" style={{ padding: "60px 4vw 100px", width: "100%" }}>
          <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(64px,14vw,120px)", lineHeight: 1, color: "#d4a017", letterSpacing: "-.03em", marginBottom: 8 }}>404</div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(24px,4vw,36px)", lineHeight: 1.1, color: "var(--text)", marginBottom: 16 }}>
              This page doesn&apos;t exist.
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 32 }}>
              The link may be broken or the page may have moved. Let&apos;s get you back on track.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/" style={{ background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 99, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Back to home</a>
              <a href="/free-audit" style={{ background: "transparent", color: "var(--text)", fontWeight: 500, fontSize: 15, padding: "14px 30px", borderRadius: 99, border: "1px solid var(--hairline-2)", textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Get a free growth audit</a>
            </div>
            <div style={{ marginTop: 36, display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", fontSize: 14 }}>
              <a href="/services" style={{ color: "#d4a017", textDecoration: "none" }}>Services</a>
              <a href="/case-studies" style={{ color: "#d4a017", textDecoration: "none" }}>Case Studies</a>
              <a href="/blog" style={{ color: "#d4a017", textDecoration: "none" }}>Blog</a>
              <a href="/about" style={{ color: "#d4a017", textDecoration: "none" }}>About</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
