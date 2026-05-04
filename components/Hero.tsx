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
      className="relative min-h-[100dvh] overflow-hidden border-b border-white/[0.06]"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429f8d83225?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.32] saturate-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/[0.94] to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(198,163,90,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_90%,rgba(198,163,90,0.06),transparent)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-gold sm:text-xs"
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
          <span className="font-medium text-gold-bright">Deen and digital</span>: systems
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
            className="inline-flex items-center justify-center bg-gradient-to-r from-gold via-[#b89247] to-[#9a7a38] px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_40px_-8px_rgba(198,163,90,0.55)] transition hover:brightness-110"
          >
            Explore ventures
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center border border-gold/35 bg-transparent px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold-bright transition hover:border-gold/60 hover:bg-gold-dim"
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
        className="pointer-events-none absolute bottom-8 left-1/2 hidden h-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:block"
      />
    </section>
  );
}
