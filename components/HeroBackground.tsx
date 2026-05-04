"use client";

/**
 * Cinematic animated backdrop — gold / depth / light drift (no video).
 * Evokes premium brand + calm “masjid light” mood without footage.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg">
      {/* Soft luminous fields */}
      <div
        className="pointer-events-none absolute -left-[18%] top-[-12%] h-[min(85vw,720px)] w-[min(85vw,720px)] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(232,213,163,0.16),rgba(198,163,90,0.06)_45%,transparent_70%)] blur-3xl hero-blob-a"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[8%] top-[18%] h-[min(70vw,560px)] w-[min(70vw,560px)] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(154,122,56,0.12),rgba(60,48,24,0.15)_50%,transparent_72%)] blur-3xl hero-blob-b"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[22%] h-[min(65vw,520px)] w-[min(90vw,640px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,163,90,0.1),transparent_65%)] blur-3xl hero-blob-c"
        aria-hidden
      />

      {/* Subtle Islamic-inspired geometry: interlaced grid drift */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55] hero-geo-drift"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(198,163,90,0.04) 0, rgba(198,163,90,0.04) 1px, transparent 1px, transparent 18px),
            repeating-linear-gradient(-45deg, rgba(250,250,250,0.025) 0, rgba(250,250,250,0.025) 1px, transparent 1px, transparent 22px)
          `,
          backgroundSize: "100% 100%, 100% 100%",
          backgroundPosition: "0 0, 0 0",
        }}
        aria-hidden
      />

      {/* Slow gold wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-gold/[0.04] via-transparent to-amber-950/20 hero-gold-shimmer"
        aria-hidden
      />

      {/* Readability: vignette + brand gold rim (same language as before) */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/[0.94] to-bg" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(198,163,90,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_90%,rgba(198,163,90,0.06),transparent)]" />
    </div>
  );
}
