"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

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
      className="fixed inset-x-0 top-0 z-[60] border-b border-white/[0.06] bg-bg/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent animate-gold-line"
        aria-hidden
      />
      <div className="mx-auto flex h-[5rem] max-w-6xl items-center justify-between gap-5 px-4 sm:h-[5.25rem] sm:px-8">
        <Link
          href="#top"
          className="group flex items-center gap-3 outline-none ring-gold/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <BrandLogo className="transition duration-500 group-hover:drop-shadow-[0_0_14px_rgba(198,163,90,0.4)]" priority />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
              Sohaib Mehmood
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gold/80">
              Digital growth &amp; impact
            </span>
          </span>
        </Link>
        <nav
          className="flex items-center gap-0.5 sm:gap-1"
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
    </motion.header>
  );
}
