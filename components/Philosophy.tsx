"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-muted">
            About / Philosophy
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Grounded in academies. Built for scale.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-sm font-light leading-relaxed text-muted sm:text-base lg:col-span-7"
        >
          <p>
            For the past two years I have lived inside{" "}
            <span className="text-foreground/90">Quran academy marketing</span>
            — not as a distant consultant, but as someone shaping enrollment
            narratives, parent trust, and digital touchpoints that carry sacred
            responsibility. That work taught me a non-negotiable lesson: impact
            and aesthetics must align with adab, transparency, and long-term
            barakah over vanity metrics.
          </p>
          <p>
            My vision is straightforward:{" "}
            <span className="text-foreground/90">
              dignified jobs for youth
            </span>{" "}
            where technical fluency (automation, creative production, growth
            systems) is taught alongside adab, financial ethics, and clarity of
            intention. I want young Muslims to earn with skill — without
            compromising the values that define who we are online and offline.
          </p>
          <p className="border-l border-white/15 pl-6 text-foreground/85">
            If the digital economy is the new marketplace of ideas, then our
            presence there should be as disciplined as our presence in the
            masjid: composed, useful, and uncompromising on the red lines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
