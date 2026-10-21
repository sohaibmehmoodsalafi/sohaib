import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Academies & Islamic Brands | Sohaib Mehmood",
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
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
