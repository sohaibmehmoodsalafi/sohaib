"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#ventures", label: "Ventures" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#work", label: "Work" },
  { href: "#connect", label: "Connect" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-bg/75 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link
          href="#top"
          className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-foreground sm:text-sm"
        >
          SM
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-2 py-1.5 text-[11px] font-medium text-muted transition-colors hover:text-foreground sm:px-3 sm:text-xs"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
