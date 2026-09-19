import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MarkenExusSystem from "@/components/MarkenExusSystem";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "The MarkenExus Growth System — 5-Step Framework | Sohaib Mehmood",
  description:
    "The MarkenExus Growth System™ — a proprietary 5-step framework (research, funnels, ads, optimization, scaling) that turns ad spend into predictable students, leads, and donations for academies and Islamic organizations.",
  alternates: { canonical: "https://meetsohaib.com/system" },
  openGraph: {
    title: "The MarkenExus Growth System — a 5-step framework for academies & Islamic organizations",
    description: "A simple 5-step system — audience research, funnels, ads, optimization, and scaling — that turns ad spend into predictable students, leads, and donations.",
    url: "https://meetsohaib.com/system",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The MarkenExus Growth System — 5 steps to more students & donations",
    description: "Audience research → funnels → ads → optimization → scaling. Predictable growth for Quran academies and Islamic organizations.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <MarkenExusSystem />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
