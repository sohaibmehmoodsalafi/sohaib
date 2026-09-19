import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { POSTS } from "@/lib/posts";

const TITLE = "Blog — Marketing for Quran Academies & Islamic Organizations | Sohaib Mehmood";
const DESC = "Practical guides on getting more students, leads, and donations for Quran academies, Islamic institutes, and Muslim non-profits — Meta Ads, Google Ads, funnels, and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://meetsohaib.com/blog" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESC,
    url: "https://meetsohaib.com/blog",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — growth guides for Quran academies & Islamic organizations",
    description: DESC,
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

export default function Page() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <Navbar />
      <main style={{ background: "#080808", paddingTop: 96 }}>
        <section className="section-pad" style={{ padding: "60px 4vw 100px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
              <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />The Blog
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.02, letterSpacing: "-.02em", color: "#f5f0e8", marginBottom: 16 }}>
              Growth guides for <span style={{ color: "#d4a017" }}>academies &amp; Islamic organizations.</span>
            </h1>
            <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 560, lineHeight: 1.7, marginBottom: 56 }}>
              Practical, no-fluff advice on getting more students, leads, and donations — from someone who runs an academy too.
            </p>

            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
              {posts.map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="blog-card" style={{ display: "flex", flexDirection: "column", background: "#161616", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: "30px 28px", textDecoration: "none", color: "#f5f0e8", transition: "border-color .2s, transform .2s" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#d4a017", background: "rgba(212,160,23,.1)", border: "1px solid rgba(212,160,23,.22)", borderRadius: 6, padding: "4px 9px" }}>{t}</span>
                    ))}
                  </div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 21, lineHeight: 1.25, marginBottom: 12 }}>{p.title}</h2>
                  <p style={{ fontSize: 14, color: "#9a9a9a", lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "#6b6b6b" }}>
                    <span>{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {p.readMins} min read</span>
                    <span style={{ color: "#d4a017", fontWeight: 600 }}>Read →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
