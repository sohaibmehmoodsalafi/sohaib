"use client";

/**
 * Rich gold-on-black animated mesh — premium first impression (no video).
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Base diagonal gold wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1a1208] via-black to-[#0a0804]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(198,163,90,0.14)_0%,transparent_42%,rgba(80,60,24,0.25)_78%,transparent_100%)]"
        aria-hidden
      />

      {/* Luminous fields */}
      <div
        className="pointer-events-none absolute -left-[18%] top-[-12%] h-[min(95vw,780px)] w-[min(95vw,780px)] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(248,230,180,0.2),rgba(198,163,90,0.1)_42%,transparent_68%)] blur-3xl hero-blob-a"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[12%] top-[12%] h-[min(75vw,600px)] w-[min(75vw,600px)] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,150,0.08),rgba(120,90,40,0.18)_48%,transparent_72%)] blur-3xl hero-blob-b"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-18%] left-[18%] h-[min(70vw,560px)] w-[min(95vw,680px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,163,90,0.16),rgba(40,32,16,0.35)_55%,transparent_70%)] blur-3xl hero-blob-c"
        aria-hidden
      />

      {/* Corner accents */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_100%,rgba(198,163,90,0.12),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_100%_0%,rgba(232,213,163,0.08),transparent_60%)]"
        aria-hidden
      />

      {/* Geometric drift */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.65] hero-geo-drift"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255,220,160,0.05) 0, rgba(255,220,160,0.05) 1px, transparent 1px, transparent 18px),
            repeating-linear-gradient(-45deg, rgba(198,163,90,0.035) 0, rgba(198,163,90,0.035) 1px, transparent 1px, transparent 22px)
          `,
          backgroundSize: "100% 100%, 100% 100%",
          backgroundPosition: "0 0, 0 0",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-gold/[0.07] via-transparent to-amber-950/25 hero-gold-shimmer"
        aria-hidden
      />

      {/* Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/[0.88] to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_58%_at_50%_-18%,rgba(232,213,163,0.12),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_85%_85%,rgba(198,163,90,0.09),transparent)]" />
    </div>
  );
}
