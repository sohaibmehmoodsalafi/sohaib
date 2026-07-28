// Predefined service packages (kept in sync with the website Pricing section)

export interface ServicePackage {
  id: string;
  tier: string;
  name: string;
  description: string;
  rate: number; // monthly rate in PKR
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "starter",
    tier: "Starter",
    name: "Single Platform",
    description:
      "Single Platform (Meta OR Google Ads) — Campaign setup & optimization, 5 ad creatives/mo, landing page setup, monthly report",
    rate: 25000,
  },
  {
    id: "growth",
    tier: "Growth",
    name: "Full Funnel",
    description:
      "Full Funnel (Meta + Google Ads) — Complete funnel, 15 creatives/mo, landing pages & lead forms, SMM (15 posts), retargeting, weekly reports",
    rate: 55000,
  },
  {
    id: "scale",
    tier: "Scale",
    name: "Ecosystem Package",
    description:
      "Ecosystem Package — Everything in Growth + full SMM (30 posts + reels), WhatsApp automation, multi-funnel strategy, dedicated account management",
    rate: 90000,
  },
];
