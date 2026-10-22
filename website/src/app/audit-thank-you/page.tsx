import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You — Your Free Growth Audit Request | Sohaib Mehmood",
  description: "Thanks for requesting your free growth audit. I'll review your academy's marketing and reply within one day.",
  alternates: { canonical: "https://meetsohaib.com/audit-thank-you" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", paddingTop: 96, minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <section className="section-pad" style={{ padding: "60px 4vw 100px", width: "100%" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(212,160,23,.12)", border: "1px solid rgba(212,160,23,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, margin: "0 auto 28px" }}>✓</div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(30px,5vw,48px)", lineHeight: 1.08, letterSpacing: "-.02em", color: "var(--text)", marginBottom: 16 }}>
              Request received <span style={{ color: "#d4a017" }}>— jazakAllah khayr.</span>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-soft)", lineHeight: 1.75, marginBottom: 32 }}>
              Thanks for requesting your <strong style={{ color: "var(--text)" }}>free growth audit</strong>. I&apos;ll review your academy&apos;s website and ads and reply within <strong style={{ color: "var(--text)" }}>one day</strong> with 2–3 specific fixes to get you more students.
            </p>
            <a
              href="https://wa.me/923048885206?text=Assalamu%20Alaikum%20Sohaib!%20I%20just%20requested%20my%20free%20growth%20audit."
              target="_blank"
              rel="noopener noreferrer"
              data-loc="thank_you"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25d366", color: "#052e16", fontWeight: 800, fontSize: 16, padding: "15px 30px", borderRadius: 99, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              <span style={{ fontSize: 20 }}>💬</span> Message me on WhatsApp
            </a>
            <div style={{ marginTop: 28 }}>
              <a href="/" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "underline" }}>← Back to home</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
