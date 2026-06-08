import type { Metadata } from "next";
import EcommercePage from "./EcommercePage";

export const metadata: Metadata = {
  title: "Scale Your E-commerce Store to 5x ROAS | Meta Ads Expert — Sohaib Mehmood",
  description:
    "Full-funnel Meta Ads campaigns for e-commerce stores. Audience research, scroll-stopping creatives, and conversion-optimized landing pages — all by one expert. 5.6x ROAS, 500+ SKU stores managed.",
  keywords: [
    "e-commerce Meta Ads",
    "Facebook Ads for e-commerce",
    "e-commerce ROAS optimization",
    "e-commerce scaling",
    "Facebook Ads specialist e-commerce",
    "Instagram Ads e-commerce",
    "Sohaib Mehmood",
  ],
  openGraph: {
    title: "Scale Your E-commerce Store to 5x ROAS | Meta Ads Expert",
    description:
      "Full-funnel campaigns — audience research, scroll-stopping creatives, and conversion-optimized landing pages. 5.6x average ROAS.",
    url: "https://meetsohaib.com/ecommerce",
  },
};

export default function Page() {
  return <EcommercePage />;
}
