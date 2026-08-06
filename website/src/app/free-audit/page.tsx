import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import OfferSection from "@/components/OfferSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Free Growth Audit for Your Academy or Organization | Sohaib Mehmood",
  description:
    "Get a free growth audit for your Quran academy, Islamic NGO, or education/EdTech brand. I'll review your marketing, find what's leaking, and show you exactly what to fix — no cost, no obligation.",
  alternates: { canonical: "https://meetsohaib.com/free-audit" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <OfferSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
