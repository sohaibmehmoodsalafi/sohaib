"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { HeaderVideoBackdrop } from "@/components/HeaderVideoBackdrop";

const links = [
  { href: "#main-work", label: "Main work" },
  { href: "#ventures", label: "Ventures" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#work", label: "Work" },
  { href: "#connect", label: "Connect" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-[60] overflow-hidden border-b border-white/[0.07] bg-bg shadow-[0_12px_48px_-12px_rgba(0,0,0,0.9)]"
    >
      <HeaderVideoBackdrop />

      <div className="relative z-10 bg-bg/55 backdrop-blur-md supports-[backdrop-filter]:bg-bg/45">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent animate-gold-line"
          aria-hidden
        />
        <div className="mx-auto flex min-h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:min-h-[5.5rem] sm:px-8 sm:py-2.5">
          <Link
            href="#top"
            className="group flex shrink-0 items-center outline-none ring-gold/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label="Sohaib Mehmood — home"
          >
            <BrandLogo className="relative z-[1] transition duration-500 group-hover:drop-shadow-[0_0_16px_rgba(198,163,90,0.45)]" priority />
          </Link>
          <nav
            className="relative z-[1] flex flex-wrap items-center justify-end gap-x-1.5 gap-y-1 sm:gap-x-2"
            aria-label="Primary"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-2.5 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-gold-bright sm:px-3 sm:text-[11px] sm:tracking-[0.16em]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
