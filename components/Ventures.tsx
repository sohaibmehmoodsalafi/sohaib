"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Ventures() {
  return (
    <section
      id="ventures"
      className="scroll-mt-24 border-b border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-muted">
            Dual ventures
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            One mission. Two expressions.
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted sm:text-base">
            Commercial excellence funds purpose-led education — so growth in
            dunya never comes at the cost of akhirah-aligned practice.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          <motion.article
            variants={item}
            className="group relative overflow-hidden border border-border bg-bg p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition group-hover:bg-white/[0.07]" />
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-faint">
              Venture 01
            </p>
            <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Soft Desk Solution
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted">
              B2B growth with restraint: high-intent lead systems, conversion
              architecture, and premium digital experiences for brands that
              refuse to look generic.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-light text-muted">
              <li className="flex gap-2">
                <span className="text-foreground/50">—</span>
                Pipeline-focused lead generation
              </li>
              <li className="flex gap-2">
                <span className="text-foreground/50">—</span>
                Executive-grade web &amp; brand design
              </li>
              <li className="flex gap-2">
                <span className="text-foreground/50">—</span>
                Messaging that closes without hype
              </li>
            </ul>
            <Link
              href="https://softdesksolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground underline-offset-4 transition hover:underline"
            >
              softdesksolution.com
            </Link>
          </motion.article>

          <motion.article
            variants={item}
            className="group relative overflow-hidden border border-border bg-bg p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-white/[0.035] blur-3xl transition group-hover:bg-white/[0.06]" />
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-faint">
              Venture 02
            </p>
            <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Peace Institute
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted">
              Social impact rooted in the Book: structured Quran teaching,
              tarbiyah-forward environments, and digital skills taught within
              Shariah-conscious guardrails.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-light text-muted">
              <li className="flex gap-2">
                <span className="text-foreground/50">—</span>
                Quran literacy &amp; retention pathways
              </li>
              <li className="flex gap-2">
                <span className="text-foreground/50">—</span>
                Ethical, skills-based youth programming
              </li>
              <li className="flex gap-2">
                <span className="text-foreground/50">—</span>
                Community-first digital outreach
              </li>
            </ul>
            <Link
              href="https://peace.org.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground underline-offset-4 transition hover:underline"
            >
              peace.org.pk
            </Link>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
