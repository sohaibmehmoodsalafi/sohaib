"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroBackground } from "@/components/HeroBackground";
import { PORTRAIT_IMAGE } from "@/lib/portrait";

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
      className="relative min-h-[100dvh] overflow-hidden border-b border-gold/10"
    >
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_min(320px,36vw)] lg:items-end lg:gap-14">
          {/* Portrait — mobile first for personal presence */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:col-start-2 lg:row-start-1 lg:justify-end"
          >
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-3 rounded-3xl bg-[conic-gradient(from_140deg,rgba(232,213,163,0.35),rgba(198,163,90,0.08),rgba(80,60,24,0.45),rgba(232,213,163,0.2))] opacity-90 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/25 via-gold/[0.08] to-amber-950/40 p-[3px] shadow-[0_0_0_1px_rgba(232,213,163,0.15),0_25px_60px_-15px_rgba(198,163,90,0.35)]">
                <div className="relative aspect-square w-[min(260px,72vw)] overflow-hidden rounded-[13px] bg-black sm:w-[280px] lg:w-[300px]">
                  <Image
                    src={PORTRAIT_IMAGE}
                    alt="Sohaib Mehmood"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width:1024px) 72vw, 300px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-start-1 lg:row-start-1">
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-gold sm:text-xs"
            >
              Founder · Growth · Impact
            </motion.p>
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-4xl bg-gradient-to-br from-white via-white to-gold-bright/80 bg-clip-text font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.05]"
            >
              Sohaib Mehmood — Architect of Digital Ecosystems & Ethical Growth.
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-2xl text-base font-light leading-relaxed text-muted sm:text-lg"
            >
              I build bridges between{" "}
              <span className="font-medium text-gold-bright">Deen and digital</span>:
              systems that respect sacred values while delivering measurable
              outcomes for businesses, academies, and the next generation
              entering the workforce.
            </motion.p>
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#ventures"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#f3e6c8] via-gold to-[#8a6f35] px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_50px_-10px_rgba(232,213,163,0.55)] transition hover:brightness-110"
              >
                Explore ventures
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center border border-gold/45 bg-black/20 px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold-bright backdrop-blur-sm transition hover:border-gold/70 hover:bg-gold/10"
              >
                Selected work
              </a>
            </motion.div>
          </div>
        </div>
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
