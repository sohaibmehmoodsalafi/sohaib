import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Services — Marketing for Quran Academies, Islamic NGOs & EdTech | Sohaib Mehmood",
  description:
    "Meta Ads, Google Ads, social media marketing, landing pages, and full growth funnels for Quran academies, Islamic organizations, and education/EdTech brands. One expert, no agency markup.",
  alternates: { canonical: "https://meetsohaib.com/services" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <Services />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
