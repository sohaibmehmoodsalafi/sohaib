"use client";

import { useState } from "react";

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
          <img src="/images/sohaib-avatar.jpg" alt="Sohaib Mehmood" className="nav-logo" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--hairline-2)" }} />
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
