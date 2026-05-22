"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Peace Institute", href: "#peace-institute" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm" style={{ borderBottom: "0.5px solid #1e1e1e" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#">
          <Image
            src="https://meetsohaib.com/sohaib-logo.png"
            alt="Sohaib Mehmood"
            width={280}
            height={80}
            className="h-12 md:h-20 w-auto"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#777] hover:text-[#f0ede6] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/meetsohaib/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] px-4 py-2 border border-[#333] text-[#f0ede6] rounded-md hover:border-[#555] transition-colors"
          >
            Book a Meeting
          </a>
          <a
            href="#contact"
            className="text-[13px] px-5 py-2 bg-[#c8a96e] text-[#0a0a0a] rounded-md font-medium hover:bg-[#b8974e] transition-colors"
          >
            Free Strategy Call →
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#f0ede6] transition-transform duration-300 ${open ? "rotate-45 translate-y-[4.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#f0ede6] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#f0ede6] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0a0a0a] ${open ? "max-h-80" : "max-h-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-4" style={{ borderTop: "0.5px solid #1e1e1e" }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-[14px] text-[#777] hover:text-[#f0ede6] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="https://calendly.com/meetsohaib/30min" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-[13px] px-4 py-2 border border-[#333] text-[#f0ede6] rounded-md text-center">
            Book a Meeting
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-[13px] px-4 py-2 bg-[#c8a96e] text-[#0a0a0a] rounded-md font-medium text-center">
            Free Strategy Call →
          </a>
        </div>
      </div>
    </nav>
  );
}
