import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Academies & Islamic Brands | Sohaib Mehmood",
  description:
    "Real marketing results: Quran academy student growth, e-commerce ROAS, and lead-generation campaigns for Islamic organizations and education brands — handled end to end by one expert.",
  alternates: { canonical: "https://meetsohaib.com/case-studies" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <Portfolio />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
