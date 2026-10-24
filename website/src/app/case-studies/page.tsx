import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Case Studies — Marketing Results | Sohaib Mehmood",
  description:
    "Real marketing results: Quran academy student growth and lead-generation campaigns for Islamic organizations — handled end to end by one expert.",
  alternates: { canonical: "https://meetsohaib.com/case-studies" },
  openGraph: {
    title: "Case Studies — Real Results for Academies & Islamic Organizations",
    description: "Real marketing results for Quran academies, Islamic universities, and non-profits — student growth, lead generation, and donation campaigns handled end to end.",
    url: "https://meetsohaib.com/case-studies",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — academies & Islamic organizations grown",
    description: "3× admissions, 80+ students/month, and stronger donation campaigns — real results for real academies.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <h1 style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>Case Studies — Marketing Results for Quran Academies &amp; Islamic Organizations</h1>
        <Portfolio />
        {/* Real results — WhatsApp channel */}
        <div style={{ textAlign: "center", padding: "0 4vw 20px" }}>
          <a href="https://whatsapp.com/channel/0029VbE3G3P1t90cv0tBXY0T/110" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "#25d366", textDecoration: "none" }}>
            <span style={{ fontSize: 18 }}>💬</span> See real client results on our WhatsApp channel →
          </a>
        </div>
        {/* Audit CTA after the case studies */}
        <AuditCTA heading="Want results like these for your academy?" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
