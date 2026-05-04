import { Hero } from "@/components/Hero";
import { MainWork } from "@/components/MainWork";
import { Philosophy } from "@/components/Philosophy";
import { Portfolio } from "@/components/Portfolio";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <MainWork />
        <Ventures />
        <Philosophy />
        <Portfolio />
      </main>
      <SiteFooter />
    </>
  );
}
