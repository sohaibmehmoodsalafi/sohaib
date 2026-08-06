"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "System", href: "#system" },
  { label: "Case Studies", href: "#work" },
  { label: "Free Audit", href: "#audit" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      className="nav-link-item"
      style={{
        fontSize: 13, fontWeight: 500, color: hov ? "#f5f0e8" : "#aaa",
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* CSS-only toggle — works without JavaScript (live site strips all JS) */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" tabIndex={-1} />
      <nav aria-label="Main navigation" className="main-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 4vw", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.99)" : "rgba(8,8,8,0.97)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid rgba(255,255,255,${scrolled ? ".1" : ".07"})`,
        transition: "all .3s",
      }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
          <img src="/images/sohaib-mehmood.jpg" alt="Sohaib Mehmood" className="nav-logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(212,160,23,.5)" }} />
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: ".01em", color: "#f5f0e8", lineHeight: 1 }}>Sohaib Mehmood</div>
        </a>

        {/* Centered nav links */}
        <div className="desktop-nav-links" style={{ position: "absolute", left: "50%", top: 0, height: "100%", transform: "translateX(-50%)", display: "flex", gap: 30, alignItems: "center" }}>
          {links.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
        </div>

        {/* Right: Free Audit button */}
        <a href="#audit"
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

        <label htmlFor="nav-toggle" className="hamburger-btn" aria-label="Toggle menu"
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", padding: 4, cursor: "pointer" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`ham-bar ham-bar-${i}`} style={{
              display: "block", width: 22, height: 1.5, background: "#f5f0e8", transition: "all .3s",
            }} />
          ))}
        </label>
      </nav>

      <div className="mobile-menu" style={{
        position: "fixed", top: 68, left: 0, right: 0, bottom: 0,
        background: "#080808", zIndex: 99, padding: "40px 4vw",
        flexDirection: "column", gap: 28, display: "none",
      }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={closeMenu}
            style={{ fontSize: 22, fontWeight: 600, color: "#9a9a9a", textDecoration: "none" }}>{l.label}</a>
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
