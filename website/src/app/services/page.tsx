import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const TITLE = "Services — Marketing for Quran Academies, Islamic NGOs & EdTech | Sohaib Mehmood";
const DESC = "Meta Ads, Google Ads, social media marketing, landing pages, and complete enrollment funnels for Quran academies, Islamic organizations, and education/EdTech brands. One expert, no agency markup.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://meetsohaib.com/services" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://meetsohaib.com/services",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing services for Quran academies & Islamic organizations",
    description: DESC,
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Meta Ads (Facebook & Instagram) for Quran Academies & Islamic Organizations",
      serviceType: "Meta Ads Management",
      provider: { "@id": "https://meetsohaib.com/#person" },
      areaServed: ["Pakistan", "United States", "United Kingdom", "Canada", "United Arab Emirates"],
      description: "Targeted Facebook and Instagram campaigns that reach Muslim parents and donors — audience research, ad creatives, retargeting, and daily optimization to bring consistent students, leads, and donations.",
    },
    {
      "@type": "Service",
      name: "Google Ads for Quran Academies & Islamic Organizations",
      serviceType: "Google Ads Management",
      provider: { "@id": "https://meetsohaib.com/#person" },
      areaServed: ["Pakistan", "United States", "United Kingdom", "Canada", "United Arab Emirates"],
      description: "Search and display campaigns that capture parents actively looking for online Quran classes and Islamic programs — high-intent traffic sent to a conversion-optimized landing page.",
    },
    {
      "@type": "Service",
      name: "Social Media Marketing for Islamic Brands & Academies",
      serviceType: "Social Media Marketing",
      provider: { "@id": "https://meetsohaib.com/#person" },
      areaServed: ["Pakistan", "United States", "United Kingdom", "Canada", "United Arab Emirates"],
      description: "Content strategy, reels, and community growth that build trust for academies, institutes, and Islamic organizations — keeping your mission visible and credible.",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <Services />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
