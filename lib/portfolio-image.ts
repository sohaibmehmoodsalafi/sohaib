/**
 * Normalize CDN URLs from admin / JSON (trim, protocol-relative → https).
 */
export function normalizeImageSrc(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  if (t.startsWith("//")) return `https:${t}`;
  return t;
}

/** Responsive src/srcSet for Unsplash; plain src for other hosts. */
export function portfolioImageAttrs(url: string): {
  src: string;
  srcSet?: string;
  sizes: string;
} {
  const normalized = normalizeImageSrc(url);
  const sizes = "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw";

  if (!normalized) {
    return { src: "", sizes };
  }

  try {
    const u = new URL(normalized);
    if (u.hostname !== "images.unsplash.com") {
      return { src: normalized, sizes };
    }

    const path = u.pathname;
    const withW = (w: number) =>
      `https://images.unsplash.com${path}?auto=format&fit=max&w=${w}&q=72`;

    return {
      src: withW(960),
      srcSet: `${withW(480)} 480w, ${withW(720)} 720w, ${withW(960)} 960w`,
      sizes,
    };
  } catch {
    return { src: normalized, sizes };
  }
}
