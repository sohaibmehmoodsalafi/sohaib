/** Editable homepage copy + portfolio. Runtime source: `/data/site.json` (optional). */

export const SITE_CONTENT_VERSION = 1;

export type PortfolioSpan = "default" | "tall" | "wide";

export type PortfolioPiece = {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  span: PortfolioSpan;
};

export type VentureCard = {
  id: string;
  badge: string;
  title: string;
  body: string;
  bullets: string[];
  ctaUrl: string;
  ctaLabel: string;
};

export type PhilosophyBlock = {
  text: string;
  variant: "body" | "quote";
  /** If present and substring of `text`, wrapped in gold (body only). */
  highlight?: string;
};

export type MainWorkService = {
  title: string;
  description: string;
  detail: string;
};

export type MainWorkStat = {
  value: string;
  label: string;
};

export type SiteContent = {
  version: number;
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
    /** First match in `subtitle` is wrapped with gold emphasis; optional. */
    subtitleHighlight: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  mainWork: {
    kicker: string;
    title: string;
    intro: string;
    services: MainWorkService[];
    stats: MainWorkStat[];
    asideKicker: string;
    asideNote: string;
  };
  ventures: {
    kicker: string;
    title: string;
    intro: string;
    cards: VentureCard[];
  };
  philosophy: {
    kicker: string;
    title: string;
    blocks: PhilosophyBlock[];
  };
  portfolio: {
    kicker: string;
    title: string;
    intro: string;
    pieces: PortfolioPiece[];
  };
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function str(v: unknown, fallback: string): string {
  return typeof v === "string" ? v : fallback;
}

function strArr(v: unknown, fallback: string[]): string[] {
  if (!Array.isArray(v)) return fallback;
  return v.filter((x) => typeof x === "string") as string[];
}

function portfolioSpan(v: unknown, fallback: PortfolioSpan): PortfolioSpan {
  if (v === "tall" || v === "wide" || v === "default") return v;
  return fallback;
}

function mergePiece(v: unknown, fallback: PortfolioPiece): PortfolioPiece {
  if (!isRecord(v)) return fallback;
  return {
    id: str(v.id, fallback.id),
    title: str(v.title, fallback.title),
    subtitle: str(v.subtitle, fallback.subtitle),
    src: str(v.src, fallback.src),
    span: portfolioSpan(v.span, fallback.span),
  };
}

function mergeVentureCard(v: unknown, fallback: VentureCard): VentureCard {
  if (!isRecord(v)) return fallback;
  return {
    id: str(v.id, fallback.id),
    badge: str(v.badge, fallback.badge),
    title: str(v.title, fallback.title),
    body: str(v.body, fallback.body),
    bullets: strArr(v.bullets, fallback.bullets),
    ctaUrl: str(v.ctaUrl, fallback.ctaUrl),
    ctaLabel: str(v.ctaLabel, fallback.ctaLabel),
  };
}

function mergePhilosophyBlock(v: unknown, fallback: PhilosophyBlock): PhilosophyBlock {
  if (!isRecord(v)) return fallback;
  const variant = v.variant === "quote" ? "quote" : "body";

  let highlight: string | undefined;
  if (typeof v.highlight === "string") {
    const t = v.highlight.trim();
    highlight = t || undefined;
  } else if (fallback.highlight?.trim()) {
    highlight = fallback.highlight.trim();
  }

  const block: PhilosophyBlock = {
    text: str(v.text, fallback.text),
    variant,
  };
  if (highlight) block.highlight = highlight;
  return block;
}

function mergeService(v: unknown, fallback: MainWorkService): MainWorkService {
  if (!isRecord(v)) return fallback;
  return {
    title: str(v.title, fallback.title),
    description: str(v.description, fallback.description),
    detail: str(v.detail, fallback.detail),
  };
}

function mergeStat(v: unknown, fallback: MainWorkStat): MainWorkStat {
  if (!isRecord(v)) return fallback;
  return {
    value: str(v.value, fallback.value),
    label: str(v.label, fallback.label),
  };
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  version: SITE_CONTENT_VERSION,
  hero: {
    kicker: "Founder · Growth · Impact",
    headline:
      "Sohaib Mehmood — Architect of Digital Ecosystems & Ethical Growth.",
    subtitle:
      "I build bridges between Deen and digital: systems that respect sacred values while delivering measurable outcomes for businesses, academies, and the next generation entering the workforce.",
    subtitleHighlight: "Deen and digital",
    primaryCtaLabel: "Explore ventures",
    primaryCtaHref: "#ventures",
    secondaryCtaLabel: "Selected work",
    secondaryCtaHref: "#work",
  },
  mainWork: {
    kicker: "Main work",
    title: "The work now has more surface area.",
    intro:
      "A fuller presentation of the kind of work this site is meant to support: sharper positioning, cleaner storytelling, and a more obvious path from attention to action.",
    services: [
      {
        title: "Brand and growth systems",
        description:
          "Clear positioning, premium messaging, and repeatable lead flows for teams that need sharper market fit.",
        detail: "Strategy, copy direction, conversion path, and launch planning.",
      },
      {
        title: "Trust-first websites",
        description:
          "Editorial layouts and conversion-led structure for organizations that need to look credible at first glance.",
        detail: "Hero direction, content hierarchy, proof blocks, and CTA design.",
      },
      {
        title: "Education and community funnels",
        description:
          "Digital journeys for Islamic trust foundations, in-house academies, and community programs that need trust, clarity, and continuity.",
        detail: "Admissions, nurture flows, and parent–student touchpoints.",
      },
    ],
    stats: [
      { value: "03", label: "focus areas" },
      { value: "12+", label: "core deliverables" },
      { value: "01", label: "consistent theme" },
    ],
    asideKicker: "Work snapshot",
    asideNote:
      "The visual language stays the same, but the homepage now carries more of the actual work: service framing, clearer hierarchy, and a stronger sense of what gets built here.",
  },
  ventures: {
    kicker: "Dual ventures",
    title: "One mission. Two expressions.",
    intro:
      "Commercial excellence funds purpose-led education — so growth in dunya never comes at the cost of akhirah-aligned practice.",
    cards: [
      {
        id: "soft-desk",
        badge: "Venture 01",
        title: "Soft Desk Solution",
        body:
          "B2B growth with restraint: high-intent lead systems, conversion architecture, and premium digital experiences for brands that refuse to look generic.",
        bullets: [
          "Pipeline-focused lead generation",
          "Executive-grade web & brand design",
          "Messaging that closes without hype",
        ],
        ctaUrl: "https://softdesksolution.com",
        ctaLabel: "softdesksolution.com",
      },
      {
        id: "peace",
        badge: "Venture 02",
        title: "Peace Institute",
        body:
          "An Islamic trust foundation with a dedicated academy inside — structured Quran teaching and tarbiyah in one institution, plus Shariah-conscious digital skills for youth and families.",
        bullets: [
          "Academy programs under the trust umbrella",
          "Quran literacy, retention & character-led learning",
          "Community impact & faith-aligned digital outreach",
        ],
        ctaUrl: "https://peace.org.pk",
        ctaLabel: "peace.org.pk",
      },
    ],
  },
  philosophy: {
    kicker: "About / Philosophy",
    title: "Grounded in academies. Built for scale.",
    blocks: [
      {
        variant: "body",
        highlight: "Quran academy marketing",
        text:
          "For the past two years I have lived inside Quran academy marketing — not as a distant consultant, but as someone shaping enrollment narratives, parent trust, and digital touchpoints that carry sacred responsibility. That work taught me a non-negotiable lesson: impact and aesthetics must align with adab, transparency, and long-term barakah over vanity metrics.",
      },
      {
        variant: "body",
        highlight: "dignified jobs for youth",
        text:
          "My vision is straightforward: dignified jobs for youth where technical fluency (automation, creative production, growth systems) is taught alongside adab, financial ethics, and clarity of intention. I want young Muslims to earn with skill — without compromising the values that define who we are online and offline.",
      },
      {
        variant: "quote",
        text:
          "If the digital economy is the new marketplace of ideas, then our presence there should be as disciplined as our presence in the masjid: composed, useful, and uncompromising on the red lines.",
      },
    ],
  },
  portfolio: {
    kicker: "Portfolio",
    title: "Cinematic stills, disciplined grids.",
    intro:
      "A sampling of brand and digital work — lighting-forward, typographic, and built for conversion in competitive categories.",
    pieces: [
      {
        id: "ozone",
        title: "Ozone Ltd",
        subtitle: "Identity system · high-contrast product storytelling",
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        span: "tall",
      },
      {
        id: "pulse-launch",
        title: "Pulse — Launch narrative",
        subtitle: "Campaign architecture · motion-ready key art",
        src: "https://images.unsplash.com/photo-1518005055574-5f84337a6701?auto=format&fit=crop&w=1200&q=80",
        span: "default",
      },
      {
        id: "pulse-suite",
        title: "Pulse — Product suite",
        subtitle: "UI rhythm · cinematic stills for paid social",
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        span: "wide",
      },
      {
        id: "sds-web",
        title: "Soft Desk — Web presence",
        subtitle: "Lead-gen landing · executive typography",
        src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80",
        span: "default",
      },
      {
        id: "peace-inst",
        title: "Peace Institute — Trust & academy",
        subtitle: "Foundation + academy admissions · parent-student journeys",
        src: "https://images.unsplash.com/photo-1511818966892-d7d67189bc04?auto=format&fit=crop&w=1200&q=80",
        span: "default",
      },
    ],
  },
};

export function mergeSiteContent(raw: unknown): SiteContent {
  const d = DEFAULT_SITE_CONTENT;
  if (!isRecord(raw)) return d;

  const heroRaw = isRecord(raw.hero) ? raw.hero : {};
  const mwRaw = isRecord(raw.mainWork) ? raw.mainWork : {};
  const venRaw = isRecord(raw.ventures) ? raw.ventures : {};
  const philRaw = isRecord(raw.philosophy) ? raw.philosophy : {};
  const portRaw = isRecord(raw.portfolio) ? raw.portfolio : {};

  const hero = {
    kicker: str(heroRaw.kicker, d.hero.kicker),
    headline: str(heroRaw.headline, d.hero.headline),
    subtitle: str(heroRaw.subtitle, d.hero.subtitle),
    subtitleHighlight: str(
      heroRaw.subtitleHighlight,
      d.hero.subtitleHighlight,
    ),
    primaryCtaLabel: str(heroRaw.primaryCtaLabel, d.hero.primaryCtaLabel),
    primaryCtaHref: str(heroRaw.primaryCtaHref, d.hero.primaryCtaHref),
    secondaryCtaLabel: str(heroRaw.secondaryCtaLabel, d.hero.secondaryCtaLabel),
    secondaryCtaHref: str(heroRaw.secondaryCtaHref, d.hero.secondaryCtaHref),
  };

  const servicesIn = Array.isArray(mwRaw.services) ? mwRaw.services : [];
  const fbService = (): MainWorkService => ({
    title: "",
    description: "",
    detail: "",
  });
  const services =
    servicesIn.length === 0
      ? d.mainWork.services
      : servicesIn.map((s, i) => mergeService(s, d.mainWork.services[i] ?? fbService()));

  const statsIn = Array.isArray(mwRaw.stats) ? mwRaw.stats : [];
  const fbStat = (): MainWorkStat => ({ value: "", label: "" });
  const stats =
    statsIn.length === 0
      ? d.mainWork.stats
      : statsIn.map((st, i) => mergeStat(st, d.mainWork.stats[i] ?? fbStat()));

  const mainWork = {
    kicker: str(mwRaw.kicker, d.mainWork.kicker),
    title: str(mwRaw.title, d.mainWork.title),
    intro: str(mwRaw.intro, d.mainWork.intro),
    services,
    stats,
    asideKicker: str(mwRaw.asideKicker, d.mainWork.asideKicker),
    asideNote: str(mwRaw.asideNote, d.mainWork.asideNote),
  };

  const cardsIn = Array.isArray(venRaw.cards) ? venRaw.cards : [];
  const fbCard = (i: number): VentureCard => ({
    id: `venture-${i}`,
    badge: "",
    title: "",
    body: "",
    bullets: [],
    ctaUrl: "",
    ctaLabel: "",
  });
  const cards =
    cardsIn.length === 0
      ? d.ventures.cards
      : cardsIn.map((c, i) =>
          mergeVentureCard(c, d.ventures.cards[i] ?? fbCard(i)),
        );

  const ventures = {
    kicker: str(venRaw.kicker, d.ventures.kicker),
    title: str(venRaw.title, d.ventures.title),
    intro: str(venRaw.intro, d.ventures.intro),
    cards,
  };

  const blocksIn = Array.isArray(philRaw.blocks) ? philRaw.blocks : [];
  const fbBlock = (): PhilosophyBlock => ({ text: "", variant: "body" });
  const blocks =
    blocksIn.length === 0
      ? d.philosophy.blocks
      : blocksIn.map((b, i) =>
          mergePhilosophyBlock(b, d.philosophy.blocks[i] ?? fbBlock()),
        );

  const philosophy = {
    kicker: str(philRaw.kicker, d.philosophy.kicker),
    title: str(philRaw.title, d.philosophy.title),
    blocks,
  };

  const piecesIn = Array.isArray(portRaw.pieces) ? portRaw.pieces : [];
  let pieces: PortfolioPiece[];
  if (piecesIn.length === 0) {
    pieces = d.portfolio.pieces;
  } else {
    pieces = piecesIn.map((p, i) =>
      mergePiece(
        p,
        d.portfolio.pieces[i] ?? {
          id: `piece-${i}`,
          title: "",
          subtitle: "",
          src: "",
          span: "default",
        },
      ),
    );
  }

  const portfolio = {
    kicker: str(portRaw.kicker, d.portfolio.kicker),
    title: str(portRaw.title, d.portfolio.title),
    intro: str(portRaw.intro, d.portfolio.intro),
    pieces,
  };

  return {
    version: SITE_CONTENT_VERSION,
    hero,
    mainWork,
    ventures,
    philosophy,
    portfolio,
  };
}
