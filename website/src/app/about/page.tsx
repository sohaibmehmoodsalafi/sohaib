import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "About Sohaib Mehmood — Growth Partner for Quran Academies & Islamic Organizations",
  description:
    "Meet Sohaib Mehmood — a marketing growth partner helping Quran academies, Islamic NGOs, and education/EdTech brands get consistent students, leads, and donations through Meta Ads, Google Ads, and full growth funnels.",
  alternates: { canonical: "https://meetsohaib.com/about" },
  openGraph: {
    title: "About Sohaib Mehmood — Growth Partner for Quran Academies & Islamic Organizations",
    description: "Sohaib Mehmood helps Quran academies, Islamic institutes, and Muslim non-profits grow with honest, halal marketing — and runs his own institute, Peace Institute.",
    url: "https://meetsohaib.com/about",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sohaib Mehmood — Quran Academy & Islamic Marketing",
    description: "Halal, mission-first marketing for academies and Islamic organizations — by one expert who runs his own institute.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <AboutSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
