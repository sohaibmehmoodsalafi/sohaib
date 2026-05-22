"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemBar from "@/components/ProblemBar";
import Services from "@/components/Services";
import Results from "@/components/Results";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import PeaceInstitute from "@/components/PeaceInstitute";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemBar />
      <Services />
      <Results />
      <HowItWorks />
      <Portfolio />
      <PeaceInstitute />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
