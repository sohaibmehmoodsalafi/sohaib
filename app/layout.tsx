import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sohaib Mehmood — Architect of Digital Ecosystems & Ethical Growth",
  description:
    "Bridging Deen and digital: Soft Desk Solution for B2B lead generation and premium design; Peace Institute — an Islamic trust foundation with an academy for Quran teaching, tarbiyah, and Shariah-conscious digital skills.",
  keywords: [
    "Sohaib Mehmood",
    "Soft Desk Solution",
    "Peace Institute",
    "Islamic trust foundation",
    "Islamic academy",
    "Islamic marketing",
    "ethical growth",
    "lead generation",
    "Quran academy",
  ],
  authors: [{ name: "Sohaib Mehmood" }],
  creator: "Sohaib Mehmood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sohaib Mehmood",
    title:
      "Sohaib Mehmood — Architect of Digital Ecosystems & Ethical Growth",
    description:
      "B2B growth (Soft Desk) and Islamic trust + academy work (Peace Institute).",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sohaib Mehmood — Architect of Digital Ecosystems & Ethical Growth",
    description:
      "B2B growth (Soft Desk) and Islamic trust + academy impact (Peace Institute).",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/sohaib-logo.png",
    apple: "/sohaib-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only underline decoration-gold underline-offset-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-gold focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-black focus:outline-none"
        >
          Skip to main content
        </a>
        <FloatingWhatsapp />
        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sohaib Mehmood",
            url: siteUrl,
            jobTitle: "Founder",
            sameAs: [
              "https://softdesksolution.com",
              "https://peace.org.pk",
              "https://www.linkedin.com/in/sohaibmehmoodsalafi/",
              "https://www.facebook.com/sohaibmehmoodsalafi",
              "https://www.instagram.com/sohaibsalafi1996/",
            ],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
