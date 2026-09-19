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
  openGraph: {
    title: "Free Growth Audit for Your Quran Academy or Islamic Organization",
    description: "A free review of your marketing — I'll show exactly where students and donations are leaking and hand you a clear plan. No cost, no obligation.",
    url: "https://meetsohaib.com/free-audit",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Growth Audit — academies & Islamic organizations",
    description: "Find where students and donations are leaking, and get a clear plan to fix it. Free, no obligation.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
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
