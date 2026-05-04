"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

/** `/#…` so section links always target landing page sections */
const links = [
  { href: "/#main-work", label: "Main work" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#work", label: "Work" },
  { href: "/#connect", label: "Connect" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-[60] border-b border-white/[0.06] bg-bg/85 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent animate-gold-line"
        aria-hidden
      />
      <div className="mx-auto flex min-h-[5rem] max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:min-h-[5.75rem] sm:px-8 sm:py-3">
        <Link
          href="/"
          className="group flex shrink-0 items-center rounded-lg outline-none ring-gold/35 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          aria-label="Sohaib Mehmood — back to home"
        >
          <BrandLogo className="transition duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_22px_rgba(232,213,163,0.35)]" priority />
        </Link>
        <nav className="hidden items-center gap-x-1.5 sm:gap-x-2 md:flex" aria-label="Primary">
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
        <button
          type="button"
          className="md:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-bright"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/[0.08] bg-black/95 px-4 pb-4 pt-3 md:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:bg-white/[0.05] hover:text-gold-bright"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
