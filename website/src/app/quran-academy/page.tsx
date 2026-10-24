import type { Metadata } from "next";
import QuranAcademyPage from "./QuranAcademyPage";

export const metadata: Metadata = {
  title: "Marketing for Online Quran Academies | Sohaib Mehmood",
  description:
    "Get more students for your online Quran academy with targeted Meta Ads and Google Ads reaching Muslim parents in the USA, UK, and Canada.",
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
    title: "Marketing for Online Quran Academies — Get More Students",
    description:
      "Targeted Meta Ads & Google Ads in the USA, UK & Canada reaching Muslim parents who want online Quran classes for their children.",
    url: "https://meetsohaib.com/quran-academy",
    images: [
      {
        url: "https://meetsohaib.com/images/sohaib-og.jpg",
        width: 1200,
        height: 630,
        alt: "Marketing for online Quran academies — Sohaib Mehmood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing for Online Quran Academies — Get More Students",
    description: "Targeted Meta Ads & Google Ads in the USA, UK & Canada reaching Muslim parents who want online Quran classes.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
};

export default function Page() {
  return <QuranAcademyPage />;
}
