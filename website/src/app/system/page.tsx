import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MarkenExusSystem from "@/components/MarkenExusSystem";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "The MarkenExus Growth System — 5-Step Framework | Sohaib Mehmood",
  description:
    "The MarkenExus Growth System™ — a proprietary 5-step framework (research, funnels, ads, optimization, scaling) that turns ad spend into predictable students, leads, and donations for academies and Islamic organizations.",
  alternates: { canonical: "https://meetsohaib.com/system" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 40 }}>
        <MarkenExusSystem />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
