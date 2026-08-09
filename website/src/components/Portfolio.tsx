"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

type Project = { type: string; title: string; result: string; url: string; img?: string; placeholder?: string; icon?: string; linkLabel?: string };

const PORTFOLIO: Project[] = [
  { type: "Quran Academy · Student Acquisition", title: "Learn Quran Institute", result: "3× admissions from USA, UK & Canada after launch", url: "https://learnquraninstitute.org/", img: "https://meetsohaib.com/portfolio/learn-quran-institute.jpg", placeholder: "Learn Quran Institute", icon: "📖" },
  { type: "Quran Academy · Enrollment Funnels", title: "Quran Tongue", result: "Online Quran academy — enrollment funnels & Meta Ads campaigns", url: "https://www.qurantongue.com/", placeholder: "Quran Tongue", icon: "📖" },
  { type: "Islamic Education · Lead Generation", title: "Virtual Islamic University (VIU)", result: "Student lead generation for online Islamic courses & programs", url: "https://viuedu.com/", placeholder: "Virtual Islamic University", icon: "🎓" },
  { type: "Islamic NGO · Awareness & Donations", title: "Jamat-e-Ahle Hadis", result: "Awareness and donation campaigns for an Islamic organization", url: "https://jahofficial.org/", placeholder: "Jamat-e-Ahle Hadis", icon: "🕌" },
  { type: "Islamic Institute · Growth (my own)", title: "Peace Institute", result: "My own institute — education, dawah, media & welfare growth", url: "https://peace.org.pk/", placeholder: "Peace Institute", icon: "🕌" },
  { type: "Islamic Platform · Full Build", title: "Hijra Online", result: "Complete platform with an integrated lead-capture system", url: "https://hijraonline.com/", img: "https://meetsohaib.com/portfolio/hijra-online.jpg", placeholder: "Hijra Online", icon: "🌙" },
];

function PortCard({ type, title, result, url, img, placeholder, icon, linkLabel }: Project) {
  const [hov, setHov] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const showPlaceholder = !img || imgErr;
  return (
    <div style={{
      border: `1px solid ${hov ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.07)"}`,
      borderRadius: 16, overflow: "hidden", background: "#161616",
      transform: hov ? "translateY(-4px)" : "none",
      transition: "transform .25s, border-color .25s",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ width: "100%", aspectRatio: "16/9", background: "#1e1e1e", overflow: "hidden", position: "relative" }}>
        {showPlaceholder ? (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12, background: "radial-gradient(circle at 50% 40%, rgba(212,160,23,.08), transparent 70%)" }}>
            <span style={{ fontSize: 40 }}>{icon || "🕌"}</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#f5f0e8", padding: "0 20px", textAlign: "center", letterSpacing: ".01em" }}>{placeholder || title}</span>
          </div>
        ) : (
          <img src={img} alt={title} onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: hov ? "scale(1.04)" : "none", transition: "transform .4s" }} />
        )}
      </div>
      <div style={{ padding: 24 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{type}</span>
        <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: 13, color: "#9a9a9a", display: "flex", alignItems: "flex-start", gap: 6 }}>
          <span style={{ color: "#d4a017", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{result}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, fontSize: 13, fontWeight: 600, color: "#d4a017", transition: "gap .2s", textDecoration: "none" }}
          onMouseEnter={(e) => e.currentTarget.style.gap = "10px"}
          onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
        >{linkLabel || "Visit live site →"}</a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const ref = useFadeIn();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="work" className="section-pad" style={{ padding: "120px 4vw", background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Case Studies
        </div>
        <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(38px,5.4vw,66px)", lineHeight: 1.0, letterSpacing: "-.01em", marginBottom: 16 }}>Academies &amp; organizations<br /><span style={{ color: "#d4a017" }}>I&apos;ve grown.</span></h2>
        <p style={{ fontSize: 16, color: "#9a9a9a", maxWidth: 520, lineHeight: 1.7, marginBottom: 64 }}>Quran academies, Islamic universities, and non-profits — every funnel, ad, and landing page handled by one person.</p>
        <div className="port-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {PORTFOLIO.map((p, i) => <PortCard key={i} {...p} />)}
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems: "center", textAlign: "center", padding: 40,
            border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, background: "#161616",
          }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>📂</div>
            <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>More academies &amp; organizations</p>
            <p style={{ fontSize: 13, color: "#9a9a9a", marginBottom: 20 }}>Full case studies with enrollments, leads, and donation results.</p>
            <a href="https://wa.me/923048885206?text=Hi%20Sohaib!%20Please%20share%20your%20full%20client%20list%20for%20academies%20and%20Islamic%20organizations." target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: "#f5f0e8", fontWeight: 500, fontSize: 13, padding: "10px 22px", borderRadius: 99, border: "1px solid rgba(255,255,255,.12)", textDecoration: "none" }}
            >Request Full Portfolio →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
