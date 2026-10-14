import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Sohaib Mehmood",
  description: "The simple terms for using meetsohaib.com and working together.",
  alternates: { canonical: "https://meetsohaib.com/terms" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", paddingTop: 96 }}>
        <section className="section-pad" style={{ padding: "60px 4vw 100px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.05, letterSpacing: "-.02em", color: "var(--text)", marginBottom: 14 }}>Terms of Service</h1>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 40 }}>Last updated: October 2026</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 26, fontSize: 16, color: "var(--text-soft)", lineHeight: 1.8 }}>
              <p>These simple terms cover your use of meetsohaib.com, run by Sohaib Mehmood.</p>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>The website</h2>
                <p>The information on this site is provided in good faith for general guidance. Examples and results shown are from real work, but your own results depend on your offer, budget, audience, and market, so they are not a guarantee.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>Enquiries &amp; the audit</h2>
                <p>Contacting me or requesting a free audit does not create a contract. Any paid work is agreed separately in writing before it begins, including scope and price.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>Your information</h2>
                <p>When you use a form you share only your name, email or WhatsApp, and message. It is used only to reply to you — see the <a href="/privacy" style={{ color: "#d4a017", textDecoration: "underline" }}>Privacy Policy</a>.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>Fair use</h2>
                <p>Please do not copy the content, case studies, or branding of this site for your own use without permission. I may decline any project at my discretion.</p>
              </div>

              <p>Questions? Reach me on <a href="https://wa.me/923048885206" target="_blank" rel="noopener noreferrer" style={{ color: "#d4a017", textDecoration: "underline" }}>WhatsApp</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
