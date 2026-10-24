import type { Metadata } from "next";
import "./globals.css";
import { AVATAR, ICON_180 } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Quran Academy Marketing & Meta Ads | Sohaib Mehmood",
  description:
    "Digital marketing for Quran academies & Islamic education — Meta Ads, Google Ads, lead generation & funnels that bring steady students and leads.",
  keywords: [
    "Quran academy marketing",
    "digital marketing for Quran academy",
    "Meta Ads for Quran academy",
    "Google Ads for Quran academy",
    "lead generation",
    "AI automation",
    "Islamic education marketing",
    "Markenexus",
    "Sohaib Mehmood",
  ],
  authors: [{ name: "Sohaib Mehmood", url: "https://meetsohaib.com" }],
  creator: "Sohaib Mehmood",
  publisher: "Sohaib Mehmood",
  metadataBase: new URL("https://meetsohaib.com"),
  alternates: {
    canonical: "https://meetsohaib.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meetsohaib.com",
    siteName: "Sohaib Mehmood",
    title: "Quran Academy Marketing & Meta Ads — Sohaib Mehmood",
    description:
      "Digital marketing for Quran academies and Islamic education — Meta Ads, Google Ads, lead generation, and funnels that bring steady students and leads.",
    images: [
      {
        url: "https://meetsohaib.com/images/sohaib-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sohaib Mehmood — Growth Partner for Quran Academies & Islamic Organizations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Academy Marketing & Meta Ads — Sohaib Mehmood",
    description:
      "Digital marketing for Quran academies — Meta Ads, Google Ads, lead generation, and funnels that bring steady students and leads.",
    images: ["https://meetsohaib.com/images/sohaib-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "0geIT-NKRqCWCBixhGNsipKj7kJocVBKZlP49IOTWYQ",
  },
  category: "Digital Marketing",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://meetsohaib.com/#person",
      name: "Sohaib Mehmood",
      url: "https://meetsohaib.com",
      image: "https://meetsohaib.com/images/sohaib-office.webp",
      jobTitle: "Digital Marketing Strategist & Founder of Markenexus",
      worksFor: { "@id": "https://meetsohaib.com/#business" },
      description:
        "Digital marketing strategist based in Karachi, Pakistan. Founder of Markenexus (digital marketing and AI automation agency) and Peace Institute (online Quran and Islamic education). Helps Quran academies and Islamic education businesses get more students with Meta Ads, Google Ads, lead generation, and funnels.",
      sameAs: [
        "https://www.linkedin.com/in/sohaibmehmoodsalafi/",
        "https://www.facebook.com/sohaibmehmoodsalafi",
        "https://www.instagram.com/sohaibsalafi1996/",
      ],
      knowsAbout: [
        "Quran Academy Marketing", "Islamic Organization Marketing", "Islamic NGO Fundraising",
        "Online Quran Class Advertising", "Meta Ads for Quran Academies", "Google Ads for Islamic Institutes",
        "Student Enrollment Funnels", "Donation Campaigns", "Facebook Advertising", "Instagram Advertising",
        "Landing Page Optimization", "Ad Creative Design", "Retargeting Funnels", "Lead Generation",
        "Islamic Education Marketing", "EdTech Marketing", "WhatsApp Automation", "Marketing Funnel Strategy",
        "Digital Marketing Strategy", "AI Automation",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://meetsohaib.com/#business",
      name: "Markenexus — Digital Marketing & AI Automation",
      alternateName: "Sohaib Mehmood",
      url: "https://meetsohaib.com",
      image: "https://meetsohaib.com/images/sohaib-logo.png",
      description:
        "Digital marketing and AI automation agency founded by Sohaib Mehmood. Meta Ads, Google Ads, lead generation, landing pages, and funnels — focused on Quran academies and Islamic education businesses in the UK, USA, Canada, and Australia.",
      founder: { "@id": "https://meetsohaib.com/#person" },
      sameAs: [
        "https://markenexus.com",
        "https://www.linkedin.com/in/sohaibmehmoodsalafi/",
        "https://www.facebook.com/sohaibmehmoodsalafi",
        "https://www.instagram.com/sohaibsalafi1996/",
      ],
      telephone: "+923048885206",
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Pakistan" },
      ],
      serviceType: [
        "Quran Academy Marketing",
        "Islamic Organization Marketing",
        "Islamic NGO Fundraising Campaigns",
        "Online Quran Class Advertising",
        "Meta Ads Management",
        "Google Ads Management",
        "Student Enrollment Funnels",
        "Donation Campaigns",
        "Landing Page Design",
        "Ad Creative Design",
        "Retargeting Campaigns",
        "WhatsApp Automation",
      ],
      priceRange: "$$",
    },
    {
      "@type": "FAQPage",
      "@id": "https://meetsohaib.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you get international students for my Quran academy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I run targeted Meta Ads and Google Ads across the USA, UK, and Canada, reaching Muslim parents actively looking for online Quran classes. I build a trust-focused landing page with a free trial offer and testimonials, then send qualified traffic to it.",
          },
        },
        {
          "@type": "Question",
          name: "Why work with you instead of a marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agencies hand your account to junior staff who have never run an academy or built an enrollment funnel. I handle everything myself — strategy, creatives, landing page, and campaigns — and I also run my own institute, Peace Institute. So you get someone who understands both the deen and the numbers, not just ads.",
          },
        },
        {
          "@type": "Question",
          name: "What results can a Quran academy or Islamic organization expect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your fees, program, and location, but academies typically see a steady, predictable flow of new enrollments each month, and non-profits see stronger, more consistent donation campaigns. I focus on real, sustainable growth — predictable students and support, not vanity metrics.",
          },
        },
        {
          "@type": "Question",
          name: "How soon will I start seeing enrollments or donations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients get their first qualified inquiries within 48-72 hours of launch. Real optimization happens over the first 2-4 weeks as I refine creatives, audiences, and the landing page, and results usually settle into a predictable monthly flow by day 30-60.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with academies and organizations outside Pakistan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many of my clients are based in the USA, UK, Canada, and UAE. I manage everything remotely over WhatsApp, Zoom, and screen-share, with clear weekly reports — timezones are never a problem.",
          },
        },
        {
          "@type": "Question",
          name: "Is your marketing halal and Shariah-conscious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I keep the messaging honest, avoid misleading claims, and respect Islamic values in the creatives and copy. As someone who runs an Islamic institute myself, marketing your mission with integrity matters to me as much as it does to you.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Speed up Google Fonts (the font CSS is @import'd in globals; preconnect cuts mobile LCP) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#faf7f1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Favicon = header avatar. Data URIs ship inside the HTML so they update
            on the static deploy (which excludes image files); .ico is a fallback. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/jpeg" href={AVATAR} />
        <link rel="apple-touch-icon" href={ICON_180} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sohaib Mehmood — Growth Partner for Quran Academies & Islamic Organizations",
              url: "https://meetsohaib.com",
              description: "Meta Ads, Google Ads, and complete funnels that bring Quran academies and Islamic organizations consistent students, leads, and donations — by one expert.",
              publisher: { "@id": "https://meetsohaib.com/#person" },
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
