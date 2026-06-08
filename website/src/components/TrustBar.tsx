import Image from "next/image";

const logos = [
  { name: "VeeTrends", src: "https://meetsohaib.com/client-logos/veetrends.png" },
  { name: "Learn Quran Institute", src: "https://meetsohaib.com/client-logos/learn-quran-institute.png" },
  { name: "Peace Institute", src: "https://meetsohaib.com/client-logos/peace-institute.png" },
  { name: "Skycon Travel", src: "https://meetsohaib.com/client-logos/skycon-travel.png" },
  { name: "Virtual Islamic University", src: "https://meetsohaib.com/client-logos/virtual-islamic-university.png" },
  { name: "Soft Desk Solution", src: "https://meetsohaib.com/client-logos/soft-desk-solution.png" },
  { name: "Sea Star Engineering", src: "https://meetsohaib.com/client-logos/sea-star-engineering.png" },
  { name: "Sufix Tech", src: "https://meetsohaib.com/client-logos/sufix-tech.png" },
  { name: "Golden Snacks BBQ", src: "https://meetsohaib.com/client-logos/golden-snacks-bbq.png" },
  { name: "Chaat Pakodi", src: "https://meetsohaib.com/client-logos/chaat-pakodi.png" },
];

export default function TrustBar() {
  return (
    <section className="py-16 px-6" style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }} data-animate>
      <div className="max-w-[1140px] mx-auto">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-[#555] mb-10">Trusted by 120+ businesses across Pakistan, UAE, UK &amp; USA</p>

        {/* Top row — 5 logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-8">
          {logos.slice(0, 5).map((l) => (
            <div key={l.name} className="opacity-40 hover:opacity-80 transition-opacity duration-300" title={l.name}>
              <Image src={l.src} alt={l.name} width={120} height={50} className="h-9 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Bottom row — 5 logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-10">
          {logos.slice(5).map((l) => (
            <div key={l.name} className="opacity-40 hover:opacity-80 transition-opacity duration-300" title={l.name}>
              <Image src={l.src} alt={l.name} width={120} height={50} className="h-9 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Countries */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-6" style={{ borderTop: "0.5px solid rgba(255,255,255,0.04)" }}>
          {[
            { flag: "🇵🇰", name: "Pakistan" },
            { flag: "🇦🇪", name: "UAE" },
            { flag: "🇬🇧", name: "United Kingdom" },
            { flag: "🇺🇸", name: "United States" },
            { flag: "🇨🇦", name: "Canada" },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-2">
              <span className="text-[14px]">{c.flag}</span>
              <span className="text-[12px] text-[#666]">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
