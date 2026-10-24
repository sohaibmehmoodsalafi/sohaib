import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MarkenExusSystem from "@/components/MarkenExusSystem";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "The Markenexus Growth System | Sohaib Mehmood",
  description:
    "The Markenexus Growth System: a 5-step framework that turns ad spend into predictable students, leads, and donations for Quran academies & Islamic orgs.",
  alternates: { canonical: "https://meetsohaib.com/system" },
  openGraph: {
    title: "The Markenexus Growth System — a 5-step framework for academies & Islamic organizations",
    description: "A simple 5-step system — audience research, funnels, ads, optimization, and scaling — that turns ad spend into predictable students, leads, and donations.",
    url: "https://meetsohaib.com/system",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Markenexus Growth System — 5 steps to more students & donations",
    description: "Audience research → funnels → ads → optimization → scaling. Predictable growth for Quran academies and Islamic organizations.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <h1 style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>The Markenexus Growth System — Marketing Framework for Quran Academies &amp; Islamic Organizations</h1>
        <MarkenExusSystem />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
