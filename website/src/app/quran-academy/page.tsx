import type { Metadata } from "next";
import QuranAcademyPage from "./QuranAcademyPage";

export const metadata: Metadata = {
  title: "Get 80+ Students/Month for Your Quran Academy | Digital Marketing Expert — Sohaib Mehmood",
  description:
    "Targeted Meta Ads & Google Ads campaigns in USA, UK & Canada to get international students for your online Quran Academy. 85+ students/month, PKR 352 cost per student, 12.6% landing page conversion rate.",
  keywords: [
    "Quran Academy marketing",
    "online Quran Academy leads",
    "Meta Ads for Quran Academy",
    "Google Ads for Quran Academy",
    "Facebook Ads for Quran Academy",
    "international student lead generation",
    "Quran Academy students USA UK Canada",
    "digital marketing for Quran Academy",
    "Sohaib Mehmood",
  ],
  alternates: {
    canonical: "https://meetsohaib.com/quran-academy",
  },
  openGraph: {
    title: "Get 80+ Students/Month for Your Quran Academy | Digital Marketing Expert",
    description:
      "Targeted Meta Ads & Google Ads in USA, UK & Canada reaching parents who want online Quran classes. 85+ students/month. 12.6% conversion rate.",
    url: "https://meetsohaib.com/quran-academy",
    images: [
      {
        url: "https://meetsohaib.com/images/sohaib-og.jpg",
        width: 1200,
        height: 630,
        alt: "Get 80+ Students/Month for Your Quran Academy — Sohaib Mehmood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get 80+ Students/Month for Your Quran Academy",
    description: "Targeted Meta Ads in USA, UK & Canada. 85+ students/month, PKR 352 cost per student.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

export default function Page() {
  return <QuranAcademyPage />;
}
