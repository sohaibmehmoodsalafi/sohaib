"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sohaib-mehmood/",
  },
  { label: "Soft Desk Solution", href: "https://softdesksolution.com" },
  { label: "Peace Institute", href: "https://peace.org.pk" },
];

export function SiteFooter() {
  return (
    <footer
      id="connect"
      className="scroll-mt-24 border-t border-border bg-bg py-16 sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-muted">
            Connect
          </p>
          <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted">
            Open to aligned partnerships in growth, creative direction, and
            faith-forward digital programs. Prefer concise intros via LinkedIn.
          </p>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="flex flex-col gap-3 sm:items-end"
          aria-label="Footer links"
        >
          {social.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition hover:text-muted"
            >
              {s.label}
            </Link>
          ))}
        </motion.nav>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-14 max-w-6xl px-5 text-center text-[10px] font-light uppercase tracking-[0.25em] text-faint sm:px-8"
      >
        © {new Date().getFullYear()} Sohaib Mehmood. All rights reserved.
      </motion.p>
    </footer>
  );
}
