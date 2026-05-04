"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HeroBackground } from "@/components/HeroBackground";
import { PORTRAIT_FALLBACK, PORTRAIT_LOCAL } from "@/lib/portrait";

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
  const [portraitSrc, setPortraitSrc] = useState(PORTRAIT_LOCAL);

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden border-b border-gold/10"
    >
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-end px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28 md:px-8 md:pb-32 lg:pt-28">
        <div className="grid w-full min-w-0 grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:items-end lg:gap-14">
          <div className="min-w-0 lg:order-1">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-3 font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-gold sm:mb-4 sm:text-xs"
            >
              Founder · Growth · Impact
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-[100%] bg-gradient-to-br from-white via-white to-gold-bright/80 bg-clip-text font-heading text-[1.65rem] font-extrabold leading-[1.1] tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-[3.1rem] lg:leading-[1.05]"
            >
              Sohaib Mehmood — Architect of Digital Ecosystems & Ethical Growth.
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-2xl text-[0.95rem] font-light leading-relaxed text-muted sm:mt-6 sm:text-lg"
            >
              I build bridges between{" "}
              <span className="font-medium text-gold-bright">Deen and digital</span>:
              systems that respect sacred values while delivering measurable
              outcomes for businesses, academies, and the next generation
              entering the workforce.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <a
                href="#ventures"
                className="inline-flex w-full min-h-[48px] items-center justify-center bg-gradient-to-r from-[#f3e6c8] via-gold to-[#8a6f35] px-6 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_50px_-10px_rgba(232,213,163,0.55)] transition hover:brightness-110 sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em]"
              >
                Explore ventures
              </a>
              <a
                href="#work"
                className="inline-flex w-full min-h-[48px] items-center justify-center border border-gold/45 bg-black/40 px-6 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-gold-bright backdrop-blur-sm transition hover:border-gold/70 hover:bg-gold/10 sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em]"
              >
                Selected work
              </a>
            </motion.div>
          </div>

          {/* Portrait: transparent-friendly — no fill behind photo; ring only */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="isolate flex w-full justify-center lg:order-2 lg:justify-end"
          >
            <div className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px]">
              <div className="rounded-2xl p-[2px] shadow-[0_24px_64px_rgba(0,0,0,0.55)] [background:linear-gradient(135deg,rgba(243,230,200,0.55),rgba(198,163,90,0.35)_40%,rgba(90,70,35,0.5))]">
                <div className="relative aspect-square w-full overflow-hidden rounded-[14px] bg-transparent">
                  <Image
                    src={portraitSrc}
                    alt="Sohaib Mehmood"
                    fill
                    priority
                    onError={() => setPortraitSrc(PORTRAIT_FALLBACK)}
                    className={
                      portraitSrc === PORTRAIT_LOCAL
                        ? "object-contain object-center"
                        : "object-cover object-top"
                    }
                    sizes="(max-width:640px) 260px, (max-width:1024px) 280px, 300px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
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
