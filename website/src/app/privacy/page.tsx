import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Sohaib Mehmood",
  description: "How meetsohaib.com handles the information you share through the contact and audit forms.",
  alternates: { canonical: "https://meetsohaib.com/privacy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", paddingTop: 96 }}>
        <section className="section-pad" style={{ padding: "60px 4vw 100px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.05, letterSpacing: "-.02em", color: "var(--text)", marginBottom: 14 }}>Privacy Policy</h1>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 40 }}>Last updated: October 2026</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 26, fontSize: 16, color: "var(--text-soft)", lineHeight: 1.8 }}>
              <p>This site is run by Sohaib Mehmood. This policy explains what information the site collects and how it is used. It is kept deliberately short and plain.</p>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>What I collect</h2>
                <p>When you use the contact or free-audit form, you may share your <strong style={{ color: "var(--text)" }}>name, email address or WhatsApp number, your website, and your message</strong>. That is all the form collects. I do not ask for payment details or sensitive personal data on this site.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>How I use it</h2>
                <p>Your information is used only to reply to you and to discuss the help you asked for. I do not sell, rent, or share it with third parties for marketing. Messages may be delivered through WhatsApp or a form service (FormSubmit) purely to reach my inbox.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>Analytics</h2>
                <p>The site uses Google Analytics to understand general, anonymous visitor trends (such as which pages are viewed). This does not identify you personally.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 10 }}>Your choice</h2>
                <p>You can ask me to delete the information you sent at any time. Just message me and I will remove it.</p>
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
