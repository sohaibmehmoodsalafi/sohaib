"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import MarkenExusSystem from "@/components/MarkenExusSystem";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
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
        <Hero />
        <MarqueeBar />
        <AboutSection />
        <Services />
        <MarkenExusSystem />
        <Results />
        <Testimonials />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Contact />
        <PeaceInstitute />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
