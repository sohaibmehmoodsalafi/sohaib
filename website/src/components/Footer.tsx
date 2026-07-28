"use client";

import { useState } from "react";

function FooterCol({ title, links }: { title: string; links: Array<{ label: string; href?: string; ext?: boolean; onClick?: () => void }> }) {
  return (
    <div>
      <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "#6b6b6b", textTransform: "uppercase", marginBottom: 20 }}>{title}</h4>
      {links.map((l, i) =>
        l.onClick ? (
          <button key={i} onClick={l.onClick} style={{ display: "block", fontSize: 14, color: "#9a9a9a", marginBottom: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "'Outfit',sans-serif", padding: 0, textAlign: "left", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9a9a")}>{l.label}</button>
        ) : (
          <a key={i} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined}
            style={{ display: "block", fontSize: 14, color: "#9a9a9a", marginBottom: 12, transition: "color .2s", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9a9a")}>{l.label}</a>
        )
      )}
    </div>
  );
}

function SocialBtn({ label, href }: { label: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      style={{
        width: 36, height: 36, borderRadius: 8,
        border: `1px solid ${hov ? "#d4a017" : "rgba(255,255,255,.07)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 700, color: hov ? "#d4a017" : "#6b6b6b",
        background: hov ? "rgba(212,160,23,.05)" : "transparent",
        transition: "all .2s", textDecoration: "none",
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{label}</a>
  );
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const openModal = (title: string, body: string) => { setModalContent({ title, body }); setModalOpen(true); };

  return (
    <>
      <footer className="footer-section" style={{ borderTop: "1px solid rgba(255,255,255,.07)", padding: "72px 4vw 40px" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src="/images/sohaib-logo.png" alt="Sohaib Mehmood Logo" style={{ width: 44, height: 44, objectFit: "contain", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: ".08em", color: "#f5f0e8", lineHeight: 1.1 }}>SOHAIB MEHMOOD</div>
                <div style={{ fontSize: 11, color: "#6b6b6b", letterSpacing: ".06em" }}>SCALING BRANDS. EMPOWERING SOULS</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.75, maxWidth: 300, marginBottom: 24 }}>Digital marketing consultant and PPC advertising company specializing in pay per click campaigns, Google Ads optimization, and meta advertising solutions. 120+ businesses grown across Pakistan, UAE, UK & USA.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["🇵🇰 Pakistan", "🇦🇪 UAE", "🇬🇧 UK", "🇺🇸 USA"].map((f) => (
                <span key={f} style={{ fontSize: 12, color: "#6b6b6b", display: "flex", alignItems: "center", gap: 4 }}>{f}</span>
              ))}
            </div>
          </div>

          <FooterCol title="Services" links={[
            { label: "PPC Advertising Services", href: "#services" },
            { label: "Google Ads Optimization", href: "#services" },
            { label: "Meta Advertising Solutions", href: "#services" },
            { label: "Digital Branding", href: "#services" },
            { label: "Digital Marketing Campaigns", href: "#services" },
          ]} />
          <FooterCol title="Portfolio" links={[
            { label: "Learn Quran Institute", href: "https://learnquraninstitute.org/", ext: true },
            { label: "VeeTrends", href: "https://veetrends.com/", ext: true },
            { label: "Skycon Travel", href: "https://skycontravel.com/", ext: true },
            { label: "Peace Institute", href: "https://peace.org.pk", ext: true },
          ]} />
          <FooterCol title="Legal" links={[
            { label: "WhatsApp", href: "https://wa.me/923048885206", ext: true },
            { label: "Book a Call", href: "https://calendly.com/meetsohaib/30min", ext: true },
            { label: "Privacy Policy", onClick: () => openModal("Privacy Policy", "Your data is never shared with third parties. Contact information is used solely for business communication purposes. We do not sell, rent, or share personal information with any third party.") },
            { label: "Terms of Service", onClick: () => openModal("Terms of Service", "All services are subject to a written agreement. Results may vary based on business niche, budget, and market conditions. Sohaib Mehmood reserves the right to decline any project at his discretion.") },
          ]} />
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#6b6b6b" }}>&copy; 2026 Sohaib Mehmood. All rights reserved. · Based in Karachi, Pakistan</p>
          <div style={{ display: "flex", gap: 10 }}>
            <SocialBtn label="in" href="https://www.linkedin.com/in/sohaibmehmoodsalafi/" />
            <SocialBtn label="f" href="https://www.facebook.com/sohaibmehmoodsalafi" />
            <SocialBtn label="ig" href="https://www.instagram.com/sohaibsalafi1996/" />
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,.8)",
          zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "#1e1e1e", border: "1px solid rgba(255,255,255,.12)",
            borderRadius: 20, padding: "40px 44px", maxWidth: 500, width: "100%", position: "relative",
          }}>
            <button onClick={() => setModalOpen(false)} style={{
              position: "absolute", top: 16, right: 16, background: "none",
              border: "none", color: "#6b6b6b", fontSize: 20, cursor: "pointer", lineHeight: 1,
            }}>&times;</button>
            <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, letterSpacing: ".04em", marginBottom: 16 }}>{modalContent.title}</h3>
            <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.8 }}>{modalContent.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
