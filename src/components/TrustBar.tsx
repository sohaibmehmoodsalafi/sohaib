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
    <section className="py-10 px-6 md:px-8" style={{ borderTop: "0.5px solid #1a1a1a", borderBottom: "0.5px solid #1a1a1a" }} data-animate>
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] text-center mb-6">
          TRUSTED BY 120+ BUSINESSES ACROSS PAKISTAN, UAE, UK & USA
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-4 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-10 opacity-50 hover:opacity-100 transition-opacity duration-300" title={logo.name}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={40}
                className="max-h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Countries row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-5" style={{ borderTop: "0.5px solid #1a1a1a" }}>
          {[
            { flag: "🇵🇰", name: "Pakistan" },
            { flag: "🇦🇪", name: "UAE" },
            { flag: "🇬🇧", name: "United Kingdom" },
            { flag: "🇺🇸", name: "United States" },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-1.5">
              <span className="text-[14px]">{c.flag}</span>
              <span className="text-[12px] text-[#666]">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
