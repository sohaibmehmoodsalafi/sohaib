"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/components/SiteContentProvider";

export function MainWork() {
  const { content } = useSiteContent();
  const mw = content.mainWork;
  return (
    <section
      id="main-work"
      className="scroll-mt-24 border-b border-white/[0.06] bg-gradient-to-b from-bg to-surface/30 py-20 sm:py-28"
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
            {mw.kicker}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {mw.title}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted sm:text-base">
            {mw.intro}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            className="grid gap-5 md:grid-cols-3 lg:col-span-1"
          >
            {mw.services.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="group relative overflow-hidden border border-white/[0.08] bg-surface/80 p-6 transition duration-500 hover:border-gold/35 hover:bg-surface sm:p-7"
              >
                <div className="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-gold/[0.06] blur-2xl transition group-hover:bg-gold/[0.12]" />
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-gold/80">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                  {service.description}
                </p>
                <p className="mt-5 border-l border-gold/30 pl-4 text-[11px] uppercase tracking-[0.2em] text-gold-bright/80">
                  {service.detail}
                </p>
              </article>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="border border-white/[0.08] bg-gradient-to-b from-elevated to-surface p-7 sm:p-8"
          >
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
              {mw.asideKicker}
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {mw.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-white/[0.08] pb-5 last:border-b-0 last:pb-0 lg:pb-6"
                >
                  <p className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-[2.4rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-light leading-relaxed text-muted">
              {mw.asideNote}
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}