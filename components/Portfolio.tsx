"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useSiteContent } from "@/components/SiteContentProvider";
import { portfolioImageAttrs } from "@/lib/portfolio-image";
import type { PortfolioPiece } from "@/lib/site-content";

function PortfolioCard({
  piece,
  index,
}: {
  piece: PortfolioPiece;
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  const attrs = useMemo(
    () => portfolioImageAttrs(piece.src),
    [piece.src],
  );
  const showImg = Boolean(attrs.src) && !failed;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: 0.06 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group/card mb-4 break-inside-avoid overflow-hidden border border-white/[0.08] bg-bg shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-500 hover:border-gold/25 sm:mb-5 ${
        piece.span === "tall" ? "sm:min-h-[420px]" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-elevated ${
          piece.span === "tall"
            ? "aspect-[3/4] sm:aspect-[4/5]"
            : piece.span === "wide"
              ? "aspect-[16/10]"
              : "aspect-[4/3]"
        }`}
      >
        {showImg ? (
          <img
            src={attrs.src}
            srcSet={attrs.srcSet}
            sizes={attrs.sizes}
            alt={piece.title}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover contrast-[1.05] saturate-[0.85]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-elevated via-bg to-black px-4 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              {failed ? "Could not load image · check URL in admin" : "Add image URL in admin"}
            </p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06] transition group-hover/card:ring-gold/20" />
      </div>
      <figcaption className="p-5 sm:p-6">
        <h3 className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
          {piece.title}
        </h3>
        <p className="mt-2 text-xs font-light leading-relaxed text-muted sm:text-sm">
          {piece.subtitle}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export function Portfolio() {
  const { content } = useSiteContent();
  const pf = content.portfolio;

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
            {pf.kicker}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {pf.title}
          </h2>
          <p className="mt-4 text-sm font-light text-muted sm:text-base">{pf.intro}</p>
        </motion.div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          {pf.pieces.map((p, i) => (
            <PortfolioCard key={p.id} piece={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
