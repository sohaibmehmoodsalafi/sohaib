import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const host =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://meetsohaib.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
