import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const SITE = "https://meetsohaib.com";
const OG_IMAGE = `${SITE}/images/sohaib-og.jpg`;

const TITLE = "Products — Tools to Grow Your Quran Academy | Sohaib Mehmood";
const DESC =
  "Digital products to fill your Quran academy with students: the monthly Enrollment Kit (ad system) and the one-time Islamic Academy Social Media Design Pack.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "Quran academy products",
    "Islamic academy design pack",
    "Quran academy enrollment kit",
    "Islamic social media designs",
    "Sohaib Mehmood",
  ],
  alternates: { canonical: `${SITE}/products` },
  openGraph: {
    type: "website",
    title: "Products — Tools to Grow Your Quran Academy",
    description: DESC,
    url: `${SITE}/products`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Products by Sohaib Mehmood — tools to grow your Quran academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Tools to Grow Your Quran Academy",
    description: DESC,
    images: [OG_IMAGE],
  },
};

type Product = {
  badge: string;
  title: string;
  line: string;
  price: string;
  cta: string;
  href: string;
  featured: boolean;
};

const PRODUCTS: Product[] = [
  {
    badge: "Monthly membership",
    title: "The Quran Academy Enrollment Kit",
    line: "My complete ad system to fill your academy with students — ready creatives, copy, targeting, WhatsApp scripts and a launch checklist, refreshed every month.",
    price: "From $19/month",
    cta: "Get the Kit",
    href: "https://meetsohaib.gumroad.com/l/ouajlr",
    featured: true,
  },
  {
    badge: "One-time",
    title: "Islamic Academy Social Media Design Pack",
    line: "Beautiful, editable Islamic post designs (Tafseer, Hadith, seasonal and more). Just add your logo and post.",
    price: "$15 one-time",
    cta: "Get the Pack",
    href: "https://meetsohaib.gumroad.com/l/ybggph",
    featured: false,
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": PRODUCTS.map((p) => ({
      "@type": "Product",
      name: p.title,
      description: p.line,
      brand: { "@id": `${SITE}/#business` },
      image: OG_IMAGE,
      offers: {
        "@type": "Offer",
        price: p.price.replace(/[^0-9]/g, ""),
        priceCurrency: "USD",
        url: p.href,
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: "#080808", overflow: "hidden" }}>
        <section
          id="products"
          className="section-pad"
          style={{
            padding: "150px 4vw 110px",
            position: "relative",
            background: `
              radial-gradient(ellipse 70% 55% at 50% 0%, rgba(212,160,23,0.09) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 85% 15%, rgba(255,92,53,0.04) 0%, transparent 55%)
            `,
          }}
        >
          <div style={{ maxWidth: 980, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {/* Heading block — centered */}
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 60px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(212,160,23,.1)", border: "1px solid rgba(212,160,23,.3)",
                borderRadius: 99, padding: "8px 18px", fontSize: 13, fontWeight: 600,
                color: "#f5f0e8", letterSpacing: ".02em", marginBottom: 26,
              }}>
                <span style={{ color: "#d4a017" }}>✦</span>Shop
              </div>
              <h1 style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
                fontSize: "clamp(34px,5.2vw,60px)", lineHeight: 1.04, letterSpacing: "-.02em",
                color: "#f5f0e8", marginBottom: 18,
              }}>
                Tools to grow your academy<span style={{ color: "#d4a017" }}>.</span>
              </h1>
              <p style={{ fontSize: "clamp(15px,1.5vw,18px)", color: "#9a9a9a", fontWeight: 300, lineHeight: 1.7 }}>
                Ready-made systems and designs you can put to work today — no agency required.
              </p>
            </div>

            {/* Product cards */}
            <div className="kit-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, alignItems: "stretch" }}>
              {PRODUCTS.map((p) => (
                <div key={p.title} className="kit-card" style={{
                  display: "flex", flexDirection: "column",
                  border: `1px solid ${p.featured ? "#d4a017" : "rgba(255,255,255,.08)"}`,
                  borderRadius: 22, padding: "38px 34px",
                  background: p.featured ? "#1e1e1e" : "#161616",
                  position: "relative",
                }}>
                  {/* Badge pill */}
                  <div style={{
                    alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 7,
                    background: "rgba(212,160,23,.1)", border: "1px solid rgba(212,160,23,.3)",
                    borderRadius: 99, padding: "6px 14px", fontSize: 11, fontWeight: 700,
                    letterSpacing: ".06em", textTransform: "uppercase", color: "#d4a017", marginBottom: 22,
                  }}>
                    {p.badge}
                  </div>

                  <h2 style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
                    fontSize: "clamp(22px,2.6vw,28px)", lineHeight: 1.15, letterSpacing: "-.01em",
                    color: "#f5f0e8", marginBottom: 14,
                  }}>{p.title}</h2>

                  <p style={{ fontSize: 15, color: "#b8b2a6", lineHeight: 1.75, marginBottom: 26, flex: 1 }}>
                    {p.line}
                  </p>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,32px)", color: "#f5f0e8" }}>{p.price}</span>
                  </div>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={p.featured ? "kit-btn" : "kit-btn-ghost"}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
                      fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15,
                      padding: "15px 30px", borderRadius: 99, textDecoration: "none",
                      ...(p.featured
                        ? { background: "#d4a017", color: "#080808", border: "2px solid #d4a017", boxShadow: "0 0 20px rgba(212,160,23,0.2)" }
                        : { background: "rgba(255,255,255,0.03)", color: "#d4a017", border: "1px solid rgba(212,160,23,0.3)" }),
                    }}
                  >
                    {p.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13, color: "#6b6b6b", textAlign: "center", marginTop: 28 }}>
              Secure checkout via Gumroad · Instant access · Halal &amp; Shariah-conscious
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
