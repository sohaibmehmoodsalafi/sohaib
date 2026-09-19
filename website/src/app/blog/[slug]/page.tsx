import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getPost, allSlugs, type Block } from "@/lib/posts";

const SITE = "https://meetsohaib.com";
const OG_IMAGE = `${SITE}/images/sohaib-og.jpg`;

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found — Sohaib Mehmood" };
  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: `${post.title} | Sohaib Mehmood`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: ["Sohaib Mehmood"],
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [OG_IMAGE],
    },
  };
}

// Minimal inline formatting: **bold** and [label](/url)
function renderInline(text: string, kp: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) nodes.push(<a key={kp + i} href={m[2]} style={{ color: "#d4a017", textDecoration: "underline" }}>{m[1]}</a>);
    else if (m[3]) nodes.push(<strong key={kp + i} style={{ color: "#f5f0e8", fontWeight: 600 }}>{m[3]}</strong>);
    last = m.index + m[0].length; i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderBlock(b: Block, i: number) {
  if ("h2" in b) return <h2 key={i} style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,32px)", lineHeight: 1.2, letterSpacing: "-.01em", color: "#f5f0e8", margin: "44px 0 14px" }}>{b.h2}</h2>;
  if ("h3" in b) return <h3 key={i} style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(18px,2.2vw,22px)", color: "#f5f0e8", margin: "28px 0 10px" }}>{b.h3}</h3>;
  if ("ul" in b) return <ul key={i} style={{ margin: "0 0 18px", paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>{b.ul.map((li, j) => <li key={j} style={{ fontSize: 16, color: "#c9c3b8", lineHeight: 1.7 }}>{renderInline(li, `${i}-${j}-`)}</li>)}</ul>;
  return <p key={i} style={{ fontSize: 16, color: "#c9c3b8", lineHeight: 1.85, margin: "0 0 18px" }}>{renderInline(b.p, `${i}-`)}</p>;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@id": `${SITE}/#person` },
        publisher: { "@id": `${SITE}/#business` },
        image: OG_IMAGE,
        mainEntityOfPage: url,
        keywords: post.tags.join(", "),
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const dateLabel = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: "#080808", paddingTop: 96 }}>
        <article style={{ maxWidth: 760, margin: "0 auto", padding: "40px 4vw 80px" }}>
          <a href="/blog" style={{ fontSize: 13, color: "#d4a017", textDecoration: "none", fontWeight: 600 }}>← All articles</a>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "24px 0 16px" }}>
            {post.tags.map((t) => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#d4a017", background: "rgba(212,160,23,.1)", border: "1px solid rgba(212,160,23,.25)", borderRadius: 99, padding: "5px 12px" }}>{t}</span>
            ))}
          </div>

          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(30px,4.4vw,48px)", lineHeight: 1.08, letterSpacing: "-.02em", color: "#f5f0e8", marginBottom: 16 }}>{post.title}</h1>
          <div style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 40, borderBottom: "1px solid rgba(255,255,255,.08)", paddingBottom: 24 }}>
            By Sohaib Mehmood · {dateLabel} · {post.readMins} min read
          </div>

          {post.body.map(renderBlock)}

          {/* FAQ block */}
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,32px)", color: "#f5f0e8", margin: "52px 0 20px" }}>Frequently asked questions</h2>
          <div>
            {post.faqs.map((f, i) => (
              <details key={i} className="sys-acc" name="blog-faq" open={i === 0} style={{ background: "#161616", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, marginBottom: 10 }}>
                <summary className="sys-sum" style={{ padding: "18px 20px", gap: 12 }}>
                  <span className="sys-title" style={{ fontSize: 16, color: "#f5f0e8" }}>{f.q}</span>
                  <span className="sys-chev" aria-hidden="true">⌄</span>
                </summary>
                <div style={{ padding: "0 20px 20px", fontSize: 15, color: "#c9c3b8", lineHeight: 1.7 }}>{f.a}</div>
              </details>
            ))}
          </div>

          {/* CTA — internal links */}
          <div style={{ marginTop: 52, background: "linear-gradient(160deg, #161310 0%, #12100c 100%)", border: "1px solid rgba(212,160,23,.3)", borderRadius: 20, padding: "clamp(28px,4vw,40px)" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 24, color: "#f5f0e8", marginBottom: 10 }}>Want this done for your academy?</h2>
            <p style={{ fontSize: 15, color: "#b8b2a6", lineHeight: 1.7, marginBottom: 22 }}>
              See <a href="/services" style={{ color: "#d4a017", textDecoration: "underline" }}>how I help academies grow</a>, or start with a free review of your marketing.
            </p>
            <a href="/free-audit" style={{ display: "inline-block", background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 99, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Get a free growth audit →</a>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
