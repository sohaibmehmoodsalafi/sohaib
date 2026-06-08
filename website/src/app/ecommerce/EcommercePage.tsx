"use client";

const stats = [
  { value: "5.6x", label: "Average ROAS" },
  { value: "500+", label: "SKU Stores Managed" },
  { value: "PKR 156", label: "Average Cost Per Lead" },
];

const services = [
  {
    num: "01",
    title: "Product Audience Research",
    desc: "Deep-dive into your ideal buyer — demographics, interests, purchase behavior. We find who is most likely to buy and build campaigns around them.",
  },
  {
    num: "02",
    title: "Ad Creative Design (In-House)",
    desc: "Scroll-stopping visuals and copy designed by the same person running your ads. No disconnect between what the ad promises and what the page delivers.",
  },
  {
    num: "03",
    title: "A/B Testing",
    desc: "Every headline, image, and CTA is tested. We run structured experiments to find what converts best — then scale the winners.",
  },
  {
    num: "04",
    title: "Retargeting Sequences",
    desc: "Most people do not buy on the first visit. Smart retargeting ads bring warm leads back with urgency-driven offers to close the sale.",
  },
  {
    num: "05",
    title: "Landing Page Optimization",
    desc: "Conversion-optimized pages built for speed and sales. Every element tested — headline, product layout, CTA placement, mobile experience.",
  },
];

const caseStudies = [
  {
    name: "VeeTrends Fashion",
    tag: "E-commerce · Scaling",
    url: "veetrends.com",
    metrics: [
      { label: "SKUs Managed", value: "500+" },
      { label: "Revenue Growth", value: "3.2x" },
      { label: "Ad Spend", value: "PKR 80K/mo" },
      { label: "ROAS", value: "5.6x" },
    ],
    story:
      "VeeTrends had a large catalog but no structured ad strategy. I built a full-funnel system: audience segmentation by product category, custom ad creatives for each collection, and retargeting sequences for cart abandoners. Revenue scaled 3.2x within 90 days with a consistent 5.6x ROAS.",
  },
  {
    name: "Luxurious.pk",
    tag: "E-commerce · Brand Launch",
    url: "luxurious.pk",
    metrics: [
      { label: "Starting Point", value: "Zero" },
      { label: "Orders", value: "1,000+" },
      { label: "Cost Per Order", value: "PKR 280" },
      { label: "Timeline", value: "4 Months" },
    ],
    story:
      "Luxurious.pk was a brand new store with no sales history and no audience. I designed the ad creatives, built a conversion-focused landing page, and launched Meta Ads campaigns from scratch. The brand went from zero to 1,000+ orders in 4 months — proving the system works even without an existing customer base.",
  },
];

export default function EcommercePage() {
  return (
    <main>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm"
        style={{ borderBottom: "0.5px solid #1e1e1e" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-[14px] text-[#f0ede6] font-medium">
            Sohaib Mehmood
          </a>
          <a
            href="https://wa.me/923363710499?text=Hi%20Sohaib!%20I%20have%20an%20e-commerce%20store%20and%20want%20to%20scale%20with%20Meta%20Ads."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] px-5 py-2 bg-[#c8a96e] text-[#0a0a0a] rounded-md font-medium hover:bg-[#b8974e] transition-colors"
          >
            Get Free Ads Audit
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6db88a] animate-pulse" />
            <span className="text-[11px] text-[#888]">
              Specialized for E-commerce Stores
            </span>
          </div>

          <h1 className="font-playfair text-[30px] md:text-[46px] leading-[1.15] mb-5 text-[#f0ede6]">
            Scale Your E-commerce Store to{" "}
            <span className="text-[#c8a96e]">5x ROAS</span> with Meta Ads
          </h1>

          <p className="text-[15px] text-[#888] leading-[1.8] mb-8 max-w-xl mx-auto">
            Full-funnel campaigns — audience research, scroll-stopping
            creatives, and conversion-optimized landing pages. All by one
            expert.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/923363710499?text=Hi%20Sohaib!%20I%20have%20an%20e-commerce%20store%20and%20want%20to%20scale%20with%20Meta%20Ads."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#c8a96e] text-[#0a0a0a] text-[14px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.768-6.258-2.066l-.438-.34-2.65.887.887-2.648-.34-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Get Free E-commerce Ads Audit
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#333] text-[14px] text-[#f0ede6] rounded-md hover:border-[#555] transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-10 px-6"
        style={{
          borderTop: "0.5px solid #1a1a1a",
          borderBottom: "0.5px solid #1a1a1a",
        }}
      >
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="text-[26px] md:text-[32px] font-playfair text-[#c8a96e]">
                {s.value}
              </span>
              <p className="text-[10px] text-[#666] mt-1 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Included */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">
              WHAT IS INCLUDED
            </p>
            <h2 className="font-playfair text-[28px] md:text-[34px] leading-snug mb-3">
              A complete ads system for your store
            </h2>
            <p className="text-[14px] text-[#777]">
              Not just ads — a full conversion engine designed to scale your
              revenue predictably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {services.slice(0, 3).map((s) => (
              <div
                key={s.num}
                className="bg-[#111] rounded-xl p-6"
                style={{ border: "0.5px solid #1e1e1e" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] text-[#c8a96e] font-medium"
                    style={{ border: "1px solid #c8a96e44" }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3 className="text-[15px] font-medium text-[#f0ede6] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#777] leading-[1.7]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.slice(3).map((s) => (
              <div
                key={s.num}
                className="bg-[#111] rounded-xl p-6"
                style={{ border: "0.5px solid #1e1e1e" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] text-[#c8a96e] font-medium"
                    style={{ border: "1px solid #c8a96e44" }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3 className="text-[15px] font-medium text-[#f0ede6] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#777] leading-[1.7]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        className="py-14 px-6 bg-[#0e0e0e]"
        style={{
          borderTop: "0.5px solid #1a1a1a",
          borderBottom: "0.5px solid #1a1a1a",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">
              REAL CASE STUDIES
            </p>
            <h2 className="font-playfair text-[28px] md:text-[34px] leading-snug mb-3">
              E-commerce Results That Speak
            </h2>
            <p className="text-[14px] text-[#777]">
              Ads, creatives, and landing pages — built as one system by one
              expert.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {caseStudies.map((cs) => (
              <div
                key={cs.name}
                className="bg-[#111] rounded-xl p-6 md:p-8"
                style={{ border: "0.5px solid #1e1e1e" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="inline-block text-[10px] text-[#c8a96e] bg-[#c8a96e]/8 border border-[#c8a96e]/15 rounded px-2 py-0.5 mb-2">
                      {cs.tag}
                    </span>
                    <h3 className="text-[18px] font-playfair text-[#f0ede6]">
                      {cs.name}
                    </h3>
                  </div>
                  <span className="flex items-center gap-1 text-[9px] text-[#6db88a] bg-[#6db88a]/8 border border-[#6db88a]/15 rounded px-2 py-0.5 shrink-0">
                    &#10003; Verified Client
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-[#0a0a0a] rounded-lg p-3 text-center"
                      style={{ border: "0.5px solid #1a1a1a" }}
                    >
                      <span className="text-[18px] font-playfair text-[#c8a96e] block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-[#555]">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[13px] text-[#bbb] leading-[1.8] mb-4">
                  {cs.story}
                </p>

                <div
                  className="pt-4 flex items-center gap-2"
                  style={{ borderTop: "0.5px solid #1a1a1a" }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[10px] text-[#c8a96e] font-semibold">
                    {cs.name.charAt(0)}
                  </div>
                  <span className="text-[11px] text-[#555]">{cs.url}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why One Expert */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-[#13110d] rounded-xl p-6 md:p-8"
            style={{ border: "0.5px solid #c8a96e33" }}
          >
            <span className="text-[10px] text-[#0a0a0a] bg-[#c8a96e] px-2 py-0.5 rounded font-medium">
              ONE PERSON. ONE SYSTEM.
            </span>
            <h3 className="text-[18px] font-playfair text-[#f0ede6] mt-3 mb-2">
              Why one expert beats an agency for e-commerce
            </h3>
            <p className="text-[13px] text-[#777] leading-[1.8] mb-4">
              Agencies assign your store to a junior media buyer who has never
              designed an ad creative or built a landing page. Your ad says one
              thing, the page says another, and the creative does not match
              either.
            </p>
            <p className="text-[13px] text-[#777] leading-[1.8]">
              I personally handle every element — product research, ad creative
              design, landing page development, and campaign optimization. One
              person, one vision, zero handoff gaps. That is why my clients
              achieve 5x+ ROAS consistently.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 px-6 bg-[#0e0e0e]"
        style={{ borderTop: "0.5px solid #1a1a1a" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">
            READY TO SCALE YOUR STORE?
          </p>
          <h2 className="font-playfair text-[28px] md:text-[36px] leading-snug mb-4">
            Get a Free E-commerce
            <br />
            <span className="text-[#c8a96e]">Ads Audit</span>
          </h2>
          <p className="text-[14px] text-[#777] leading-[1.7] mb-8 max-w-lg mx-auto">
            I will analyze your current ads, find where you are losing money,
            and give you a custom scaling strategy — free, no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/923363710499?text=Hi%20Sohaib!%20I%20have%20an%20e-commerce%20store%20and%20want%20to%20scale%20with%20Meta%20Ads."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#c8a96e] text-[#0a0a0a] text-[14px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.768-6.258-2.066l-.438-.34-2.65.887.887-2.648-.34-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Get Free Ads Audit on WhatsApp
            </a>
            <a
              href="https://calendly.com/meetsohaib/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#333] text-[14px] text-[#f0ede6] rounded-md hover:border-[#555] transition-colors"
            >
              Or Book a Zoom Call
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {["No commitment", "Free consultation", "Reply within 1 hour"].map(
              (t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="text-[#6db88a] text-[10px]">&#10003;</span>
                  <span className="text-[11px] text-[#555]">{t}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 px-6"
        style={{ borderTop: "0.5px solid #1a1a1a" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#444]">
            Sohaib Mehmood — Meta Ads Expert for E-commerce
          </span>
          <a
            href="/"
            className="text-[11px] text-[#444] hover:text-[#f0ede6] transition-colors"
          >
            View All Services
          </a>
        </div>
      </footer>
    </main>
  );
}
