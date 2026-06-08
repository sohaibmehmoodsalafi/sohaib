import type { Metadata } from "next";
import EcommercePage from "./EcommercePage";

export const metadata: Metadata = {
  title: "Scale Your E-commerce Store to 5× ROAS | Digital Marketing Expert — Sohaib Mehmood",
  description:
    "Full-funnel Meta Ads & Google Ads campaigns for e-commerce stores. Audience research, scroll-stopping creatives, and conversion-optimized landing pages — all by one expert. 5.6× ROAS, 500+ SKU stores managed.",
  keywords: [
    "e-commerce Meta Ads",
    "e-commerce Google Ads",
    "Facebook Ads for e-commerce",
    "Google Shopping Ads",
    "e-commerce ROAS optimization",
    "e-commerce scaling",
    "Facebook Ads specialist e-commerce",
    "Instagram Ads e-commerce",
    "digital marketing for e-commerce",
    "Sohaib Mehmood",
  ],
  openGraph: {
    title: "Scale Your E-commerce Store to 5× ROAS | Digital Marketing Expert",
    description:
      "Full-funnel Meta Ads & Google Ads campaigns — audience research, scroll-stopping creatives, and conversion-optimized landing pages. 5.6× average ROAS.",
    url: "https://meetsohaib.com/ecommerce",
  },
};

export default function Page() {
  return <EcommercePage />;
}
