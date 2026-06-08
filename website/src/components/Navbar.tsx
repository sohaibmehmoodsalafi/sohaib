"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 4vw", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.99)" : "rgba(8,8,8,0.97)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid rgba(255,255,255,${scrolled ? ".1" : ".07"})`,
        transition: "all .3s",
      }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/images/sohaib-logo.png" alt="Sohaib Mehmood Logo" style={{ width: 38, height: 38, objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: ".08em", color: "#f5f0e8", lineHeight: 1.1 }}>SOHAIB MEHMOOD</div>
            <div style={{ fontSize: 9, color: "#6b6b6b", letterSpacing: ".1em" }}>DIGITAL MARKETING EXPERT</div>
          </div>
        </a>

        <div className="desktop-nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
          <a href="https://calendly.com/meetsohaib/30min" target="_blank" rel="noopener noreferrer"
            style={{
              background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 13,
              padding: "10px 22px", borderRadius: 99, border: "2px solid #d4a017",
              letterSpacing: ".02em", display: "inline-flex", alignItems: "center", gap: 6,
              textDecoration: "none", transition: "all .2s", fontFamily: "'Outfit',sans-serif",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#d4a017"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#d4a017"; e.currentTarget.style.color = "#080808"; }}
          >Book a Call</a>
        </div>

        <button className="hamburger-btn" onClick={() => setMenuOpen((v) => !v)}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", padding: 4, cursor: "pointer" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 1.5, background: "#f5f0e8", transition: "all .3s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      <div style={{
        position: "fixed", top: 68, left: 0, right: 0, bottom: 0,
        background: "#080808", zIndex: 99, padding: "40px 4vw",
        flexDirection: "column", gap: 28, display: menuOpen ? "flex" : "none",
      }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
            style={{ fontSize: 22, fontWeight: 600, color: "#9a9a9a", textDecoration: "none" }}>{l.label}</a>
        ))}
        <a href="https://wa.me/923363710499" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
          style={{
            background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15,
            padding: "15px 32px", borderRadius: 99, textAlign: "center", textDecoration: "none",
          }}>WhatsApp Now</a>
      </div>
    </>
  );
}
