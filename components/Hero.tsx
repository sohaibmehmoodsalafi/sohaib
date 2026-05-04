"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429f8d83225?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/90 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-muted sm:text-xs"
        >
          Founder · Growth · Impact
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.05]"
        >
          Sohaib Mehmood — Architect of Digital Ecosystems & Ethical Growth.
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-base font-light leading-relaxed text-muted sm:text-lg"
        >
          I build bridges between{" "}
          <span className="text-foreground/90">Deen and digital</span>: systems
          that respect sacred values while delivering measurable outcomes for
          businesses, academies, and the next generation entering the workforce.
        </motion.p>
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#ventures"
            className="inline-flex items-center justify-center border border-white/20 bg-foreground px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-bg transition hover:bg-white"
          >
            Explore ventures
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center border border-border bg-transparent px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground transition hover:border-white/30 hover:bg-surface"
          >
            Selected work
          </a>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden h-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent sm:block"
      />
    </section>
  );
}
