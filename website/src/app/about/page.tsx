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
