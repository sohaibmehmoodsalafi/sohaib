"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import MarkenExusSystem from "@/components/MarkenExusSystem";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import OfferSection from "@/components/OfferSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import PeaceInstitute from "@/components/PeaceInstitute";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Order mirrors a proven conversion flow: hook → problem → solution → proof → offer */}
        <Hero />
        <MarqueeBar />
        <ProblemSection />
        <MarkenExusSystem />
        <Results />
        <Portfolio />
        <Services />
        <Pricing />
        <AboutSection />
        <Testimonials />
        <OfferSection />
        <FAQ />
        <Contact />
        <PeaceInstitute />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
