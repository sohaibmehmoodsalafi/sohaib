import type { Metadata } from "next";
import QuranAcademyPage from "./QuranAcademyPage";

export const metadata: Metadata = {
  title: "Get 80+ Students/Month for Your Quran Academy | Meta Ads Expert — Sohaib Mehmood",
  description:
    "I run targeted Meta Ads campaigns in USA, UK & Canada to get international students for your online Quran Academy. 85+ students/month, PKR 352 cost per student, 12.6% landing page conversion rate.",
  keywords: [
    "Quran Academy marketing",
    "online Quran Academy leads",
    "Meta Ads for Quran Academy",
    "Facebook Ads for Quran Academy",
    "international student lead generation",
    "Quran Academy students USA UK Canada",
    "Sohaib Mehmood",
  ],
  openGraph: {
    title: "Get 80+ Students/Month for Your Quran Academy | Meta Ads Expert",
    description:
      "Targeted Meta Ads in USA, UK & Canada reaching parents who want online Quran classes. 85+ students/month. 12.6% conversion rate.",
    url: "https://meetsohaib.com/quran-academy",
  },
};

export default function Page() {
  return <QuranAcademyPage />;
}
