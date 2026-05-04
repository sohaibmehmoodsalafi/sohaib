import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Portfolio } from "@/components/Portfolio";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ventures />
        <Philosophy />
        <Portfolio />
      </main>
      <SiteFooter />
    </>
  );
}
