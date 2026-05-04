"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Piece = {
  title: string;
  subtitle: string;
  src: string;
  span?: "tall" | "wide";
};

const pieces: Piece[] = [
  {
    title: "Ozone Ltd",
    subtitle: "Identity system · high-contrast product storytelling",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    span: "tall",
  },
  {
    title: "Pulse — Launch narrative",
    subtitle: "Campaign architecture · motion-ready key art",
    src: "https://images.unsplash.com/photo-1518005055574-5f84337a6701?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pulse — Product suite",
    subtitle: "UI rhythm · cinematic stills for paid social",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    span: "wide",
  },
  {
    title: "Soft Desk — Web presence",
    subtitle: "Lead-gen landing · executive typography",
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Peace Institute — Trust & academy",
    subtitle: "Foundation + academy admissions · parent-student journeys",
    src: "https://images.unsplash.com/photo-1511818966892-d7d67189bc04?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-b border-white/[0.06] bg-gradient-to-b from-bg to-surface/50 py-20 sm:py-28"
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
            Portfolio
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Cinematic stills, disciplined grids.
          </h2>
          <p className="mt-4 text-sm font-light text-muted sm:text-base">
            A sampling of brand and digital work — lighting-forward, typographic,
            and built for conversion in competitive categories.
          </p>
        </motion.div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          {pieces.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: 0.06 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group/card mb-4 break-inside-avoid overflow-hidden border border-white/[0.08] bg-bg shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-500 hover:border-gold/25 sm:mb-5 ${
                p.span === "tall" ? "sm:min-h-[420px]" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden bg-elevated ${
                  p.span === "tall"
                    ? "aspect-[3/4] sm:aspect-[4/5]"
                    : p.span === "wide"
                      ? "aspect-[16/10]"
                      : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.src}
                  alt=""
                  fill
                  className="object-cover contrast-[1.05] saturate-[0.85]"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] transition group-hover/card:ring-gold/20" />
              </div>
              <figcaption className="p-5 sm:p-6">
                <h3 className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-muted sm:text-sm">
                  {p.subtitle}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
