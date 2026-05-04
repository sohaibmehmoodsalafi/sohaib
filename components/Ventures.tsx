"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSiteContent } from "@/components/SiteContentProvider";

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
  const { content } = useSiteContent();
  const v = content.ventures;

  return (
    <section
      id="ventures"
      className="scroll-mt-24 border-b border-white/[0.06] bg-gradient-to-b from-surface/80 to-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
            {v.kicker}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {v.title}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted sm:text-base">
            {v.intro}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {v.cards.map((card, index) => (
            <motion.article
              key={card.id}
              variants={item}
              className="group relative overflow-hidden border border-white/[0.08] bg-bg/90 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm transition duration-500 hover:border-gold/35 hover:shadow-[0_0_60px_-20px_rgba(198,163,90,0.18)] sm:p-10"
            >
              <div
                className={
                  index === 0
                    ? "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/[0.06] blur-3xl transition group-hover:bg-gold/[0.1]"
                    : "pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-gold/[0.05] blur-3xl transition group-hover:bg-gold/[0.09]"
                }
              />
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-gold/80">
                {card.badge}
              </p>
              <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                {card.body}
              </p>
              <ul className="mt-6 space-y-2 text-sm font-light text-muted">
                {card.bullets.map((b, bi) => (
                  <li key={`${card.id}-b-${bi}`} className="flex gap-2">
                    <span className="text-gold/50">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={card.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold-bright underline-offset-4 transition hover:text-gold hover:underline"
              >
                {card.ctaLabel}
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
