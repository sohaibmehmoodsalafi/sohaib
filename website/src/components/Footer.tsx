"use client";

import { useState } from "react";
import { AVATAR } from "@/lib/brand";

function FooterCol({ title, links }: { title: string; links: Array<{ label?: string; href?: string; ext?: boolean; onClick?: () => void; heading?: string }> }) {
  return (
    <div>
      <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 20 }}>{title}</h4>
      {links.map((l, i) =>
        l.heading ? (
          <div key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", color: "var(--text-muted)", textTransform: "uppercase", margin: "16px 0 10px", opacity: .75 }}>{l.heading}</div>
        ) : l.onClick ? (
          <button key={i} onClick={l.onClick} style={{ display: "block", fontSize: 14, color: "var(--text-muted2)", marginBottom: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", padding: 0, textAlign: "left", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted2)")}>{l.label}</button>
        ) : (
          <a key={i} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined} data-loc="footer"
            style={{ display: "block", fontSize: 14, color: "var(--text-muted2)", marginBottom: 12, transition: "color .2s", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted2)")}>{l.label}</a>
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
        border: `1px solid ${hov ? "#d4a017" : "var(--hairline)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 700, color: hov ? "#d4a017" : "var(--text-muted)",
        background: hov ? "rgba(212,160,23,.05)" : "transparent",
        transition: "all .2s", textDecoration: "none",
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{label}</a>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="footer-section" style={{ borderTop: "1px solid var(--hairline)", padding: "72px 4vw 40px" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src={AVATAR} alt="Sohaib Mehmood" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--hairline-2)", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: ".08em", color: "var(--text)", lineHeight: 1.1 }}>SOHAIB MEHMOOD</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: ".06em" }}>SCALING BRANDS. EMPOWERING SOULS</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 300, marginBottom: 24 }}>Founder-led marketing for Quran academies and Islamic organizations. 120+ businesses grown across Pakistan, UAE, UK & USA.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["🇵🇰 Pakistan", "🇦🇪 UAE", "🇬🇧 UK", "🇺🇸 USA"].map((f) => (
                <span key={f} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>{f}</span>
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
            { label: "Peace Institute", href: "https://peace.org.pk", ext: true },
            { heading: "Other industries" },
            { label: "VeeTrends", href: "https://veetrends.com/", ext: true },
            { label: "Skycon Travel", href: "https://skycontravel.com/", ext: true },
          ]} />
          <FooterCol title="Legal" links={[
            { label: "WhatsApp", href: "https://wa.me/923048885206", ext: true },
            { label: "Book a Call", href: "https://calendly.com/meetsohaib/30min", ext: true },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
          ]} />
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", borderTop: "1px solid var(--hairline)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>&copy; 2026 Sohaib Mehmood. All rights reserved. · Based in Karachi, Pakistan</p>
          <div style={{ display: "flex", gap: 10 }}>
            <SocialBtn label="in" href="https://www.linkedin.com/in/sohaibmehmoodsalafi/" />
            <SocialBtn label="f" href="https://www.facebook.com/sohaibmehmoodsalafi" />
            <SocialBtn label="ig" href="https://www.instagram.com/sohaibsalafi1996/" />
          </div>
        </div>
      </footer>
    </>
  );
}
