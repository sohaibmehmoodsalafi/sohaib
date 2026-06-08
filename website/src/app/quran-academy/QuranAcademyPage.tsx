"use client";

const stats = [
  { value: "85+", label: "New Students/Month" },
  { value: "PKR 352", label: "Cost Per Student" },
  { value: "12.6%", label: "Landing Page Conversion" },
];

const steps = [
  {
    num: "01",
    title: "I build your landing page",
    desc: "A high-converting page with free trial class offer, parent testimonials, and trust signals — designed to turn visitors into enrolled students.",
  },
  {
    num: "02",
    title: "I run Meta Ads targeting parents",
    desc: "Facebook & Instagram ads reaching parents in USA, UK & Canada who are actively looking for online Quran classes for their children.",
  },
  {
    num: "03",
    title: "Students enroll, you teach",
    desc: "Qualified leads come in daily. You focus on teaching — I handle the marketing, optimization, and scaling.",
  },
];

const caseStudyMetrics = [
  { label: "Monthly Budget", value: "PKR 30K" },
  { label: "New Students", value: "85+" },
  { label: "Cost Per Student", value: "PKR 352" },
  { label: "Page Conversion", value: "12.6%" },
];

export default function QuranAcademyPage() {
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
            href="https://wa.me/923363710499?text=Hi%20Sohaib!%20I%20run%20a%20Quran%20Academy%20and%20want%20to%20get%20more%20students."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] px-5 py-2 bg-[#c8a96e] text-[#0a0a0a] rounded-md font-medium hover:bg-[#b8974e] transition-colors"
          >
            Book Free Strategy Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6db88a] animate-pulse" />
            <span className="text-[11px] text-[#888]">
              Specialized for Quran Academies
            </span>
          </div>

          <h1 className="font-playfair text-[30px] md:text-[46px] leading-[1.15] mb-5 text-[#f0ede6]">
            Get <span className="text-[#c8a96e]">80+ New Students</span> Every
            Month for Your Quran Academy
          </h1>

          <p className="text-[15px] text-[#888] leading-[1.8] mb-8 max-w-xl mx-auto">
            I run targeted Meta Ads in USA, UK & Canada — reaching parents who
            want online Quran classes for their children.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/923363710499?text=Hi%20Sohaib!%20I%20run%20a%20Quran%20Academy%20and%20want%20to%20get%20more%20students."
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
              Book Free Strategy Call
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

      {/* How It Works */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">
              HOW IT WORKS
            </p>
            <h2 className="font-playfair text-[28px] md:text-[34px] leading-snug mb-3">
              From zero students to a full academy in 3 steps
            </h2>
            <p className="text-[14px] text-[#777]">
              I handle the entire marketing system — you focus on teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#111] rounded-xl p-6 text-center"
                style={{ border: "0.5px solid #1e1e1e" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ border: "1px solid #c8a96e44" }}
                >
                  <span className="text-[14px] text-[#c8a96e] font-medium">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-[15px] font-medium text-[#f0ede6] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#777] leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section
        className="py-14 px-6 bg-[#0e0e0e]"
        style={{
          borderTop: "0.5px solid #1a1a1a",
          borderBottom: "0.5px solid #1a1a1a",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">
              REAL CASE STUDY
            </p>
            <h2 className="font-playfair text-[28px] md:text-[34px] leading-snug mb-3">
              Learn Quran Institute — 3x Admissions
            </h2>
            <p className="text-[14px] text-[#777]">
              International student enrollments from USA, UK & Canada after
              launching the complete Meta Ads system.
            </p>
          </div>

          <div
            className="bg-[#111] rounded-xl p-6 md:p-8"
            style={{ border: "0.5px solid #1e1e1e" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {caseStudyMetrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-[#0a0a0a] rounded-lg p-3 text-center"
                  style={{ border: "0.5px solid #1a1a1a" }}
                >
                  <span className="text-[18px] font-playfair text-[#c8a96e] block">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-[#555]">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-[13px] text-[#bbb] leading-[1.8]">
                Learn Quran Institute was struggling to get international
                students. They had tried boosting posts and hiring agencies —
                nothing worked consistently.
              </p>
              <p className="text-[13px] text-[#bbb] leading-[1.8]">
                I built a complete system: a high-converting landing page with
                free trial class offer and parent testimonials, then ran targeted
                Meta Ads reaching parents in USA, UK & Canada searching for
                online Quran classes.
              </p>
              <p className="text-[13px] text-[#bbb] leading-[1.8]">
                <strong className="text-[#f0ede6]">Result:</strong>{" "}
                Admissions went up 3x. The landing page converts at 12.6% — over
                4x the industry average. The same person designed the ads, built
                the page, and ran the campaign — zero miscommunication, maximum
                results.
              </p>
            </div>

            <div className="mt-6 pt-5" style={{ borderTop: "0.5px solid #1a1a1a" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[11px] text-[#c8a96e] font-semibold">
                  LQI
                </div>
                <div>
                  <p className="text-[13px] text-[#f0ede6] font-medium">
                    Learn Quran Institute
                  </p>
                  <p className="text-[11px] text-[#555]">
                    learnquraninstitute.org
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1 text-[9px] text-[#6db88a] bg-[#6db88a]/8 border border-[#6db88a]/15 rounded px-2 py-0.5">
                  &#10003; Verified Client
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">
              WHAT IS INCLUDED
            </p>
            <h2 className="font-playfair text-[28px] md:text-[34px] leading-snug">
              Everything your academy needs to grow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "High-converting landing page with free trial offer",
              "Meta Ads campaigns targeting parents in USA, UK & Canada",
              "Custom ad creatives designed for Quran education",
              "Retargeting campaigns for warm leads",
              "Pixel & conversion tracking setup",
              "Weekly performance reports on WhatsApp",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-[#111] rounded-lg px-4 py-3"
                style={{ border: "0.5px solid #1e1e1e" }}
              >
                <span className="text-[#6db88a] text-[12px] shrink-0 mt-0.5">
                  &#10003;
                </span>
                <span className="text-[13px] text-[#bbb]">{item}</span>
              </div>
            ))}
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
            READY TO GROW YOUR ACADEMY?
          </p>
          <h2 className="font-playfair text-[28px] md:text-[36px] leading-snug mb-4">
            Book a Free Strategy Call
            <br />
            <span className="text-[#c8a96e]">for Your Academy</span>
          </h2>
          <p className="text-[14px] text-[#777] leading-[1.7] mb-8 max-w-lg mx-auto">
            I will analyze your current setup, show you exactly where students
            are being lost, and give you a custom Meta Ads strategy — free, no
            strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/923363710499?text=Hi%20Sohaib!%20I%20run%20a%20Quran%20Academy%20and%20want%20to%20get%20more%20students."
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
              Book Free Strategy Call on WhatsApp
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
            Sohaib Mehmood — Meta Ads Expert for Quran Academies
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
