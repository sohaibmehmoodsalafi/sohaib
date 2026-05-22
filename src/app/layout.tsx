import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sohaib Mehmood — Graphic Design & Digital Marketing",
  description:
    "Design that attracts. Marketing that converts. Logo, website, Facebook Ads, and social media. One person, full package. 120+ clients, 5+ years of proven results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body
        className="bg-[#0a0a0a] text-[#f0ede6] min-h-screen"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
