"use client";

import { useState } from "react";

// Header avatar inlined as a data URI so it ships inside the HTML
// (the FTP deploy excludes image files). ~2KB, 96x96.
const AVATAR = "data:image/jpeg;base64,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";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "System", href: "/system" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Free Audit", href: "/free-audit" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      className="nav-link-item"
      style={{
        fontSize: 13, fontWeight: 500, color: hov ? "var(--text)" : "var(--text-muted2)",
        letterSpacing: ".03em", transition: "color .2s", textDecoration: "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
}

// Closes the CSS-only mobile menu when JS is available (progressive enhancement).
// On the static no-JS deploy the menu still toggles via the checkbox + label.
function closeMenu() {
  if (typeof document === "undefined") return;
  const cb = document.getElementById("nav-toggle") as HTMLInputElement | null;
  if (cb) cb.checked = false;
}

export default function Navbar() {
  return (
    <>
      {/* CSS-only toggle — works without JavaScript (live site strips all JS) */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" tabIndex={-1} />
      {/* CSS-only light/dark theme switch — flips the whole site via :has(), no JS */}
      <input type="checkbox" id="theme-switch" className="theme-switch-input" aria-label="Switch light or dark theme" />
      <nav aria-label="Main navigation" className="main-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 4vw", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "var(--nav-bg)",
        backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--hairline)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={AVATAR} alt="Sohaib Mehmood" className="nav-logo" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--hairline-2)" }} />
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: ".01em", color: "var(--text)", lineHeight: 1 }}>Sohaib Mehmood</div>
        </a>

        {/* Centered nav links */}
        <div className="desktop-nav-links" style={{ position: "absolute", left: "50%", top: 0, height: "100%", transform: "translateX(-50%)", display: "flex", gap: 30, alignItems: "center" }}>
          {links.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
        </div>

        {/* Right cluster: theme toggle + Free Audit button */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <label htmlFor="theme-switch" className="theme-toggle" title="Toggle light / dark">
          <span className="t-ico" aria-hidden="true">🌙</span>
          <span className="t-ico" aria-hidden="true">☀️</span>
          <span className="t-knob" aria-hidden="true" />
        </label>
        <a href="/free-audit"
          className="nav-cta"
          style={{
            background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 13,
            padding: "10px 22px", borderRadius: 99, border: "2px solid #d4a017",
            letterSpacing: ".02em", display: "inline-flex", alignItems: "center", gap: 6,
            textDecoration: "none", transition: "all .2s", fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#d4a017"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#d4a017"; e.currentTarget.style.color = "#080808"; }}
        >Free Audit</a>
        </div>

        <label htmlFor="nav-toggle" className="hamburger-btn" aria-label="Toggle menu"
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", padding: 4, cursor: "pointer" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`ham-bar ham-bar-${i}`} style={{
              display: "block", width: 22, height: 1.5, background: "var(--text)", transition: "all .3s",
            }} />
          ))}
        </label>
      </nav>

      <div className="mobile-menu" style={{
        position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
        background: "var(--bg)", zIndex: 99, padding: "40px 4vw",
        flexDirection: "column", gap: 28, display: "none",
      }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={closeMenu}
            style={{ fontSize: 22, fontWeight: 600, color: "var(--text-muted2)", textDecoration: "none" }}>{l.label}</a>
        ))}
        <a href="https://wa.me/923048885206" target="_blank" rel="noopener noreferrer" onClick={closeMenu}
          style={{
            background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15,
            padding: "15px 32px", borderRadius: 99, textAlign: "center", textDecoration: "none",
          }}>WhatsApp Now</a>
      </div>
    </>
  );
}
