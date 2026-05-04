import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://meetsohaib.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sohaib Mehmood",
    short_name: "Sohaib",
    description:
      "Architect of Digital Ecosystems & Ethical Growth — Soft Desk Solution and Peace Institute.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/sohaib-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/sohaib-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    scope: "/",
    id: siteUrl,
  };
}
