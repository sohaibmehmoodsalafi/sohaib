export default function Services() {
  return (
    <section id="services" className="py-12 px-6 md:px-8" data-animate>
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">HOW I GROW YOUR BUSINESS</p>
        <h2 className="font-playfair text-[28px] md:text-[32px] leading-snug mb-3 max-w-lg">
          One person. One vision.
          <br />
          Complete marketing system.
        </h2>
        <p className="text-[14px] text-[#777] mb-10 max-w-lg">
          I do not just run ads — I build the full system that makes ads work: the brand, the website, the creatives, and the campaigns.
        </p>

        {/* Primary: Marketing */}
        <p className="text-[10px] uppercase tracking-wider text-[#c8a96e] mb-3">⚡ CORE — DIGITAL MARKETING</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-[#13110d] rounded-xl p-6" style={{ border: "0.5px solid #c8a96e33" }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] text-[#0a0a0a] bg-[#c8a96e] px-2 py-0.5 rounded font-medium">Primary</span>
              <span className="text-[11px] text-[#555]">01</span>
            </div>
            <h3 className="text-[16px] font-medium text-[#f0ede6] mb-2">Facebook & Instagram Ads</h3>
            <p className="text-[13px] text-[#777] leading-[1.7] mb-3">
              Targeted ad campaigns that bring the right people to your business — full setup, audience research, creative design, A/B testing, and monthly reporting.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {["Audience Research", "Ad Creative Design", "A/B Testing", "Monthly Reports", "Retargeting"].map((t) => (
                <span key={t} className="text-[10px] text-[#888] bg-[#0a0a0a] border border-[#1a1a1a] rounded px-2 py-0.5">{t}</span>
              ))}
            </div>
            <p className="text-[11px] text-[#6db88a] flex items-center gap-1.5">
              <span>✓</span> Get leads while you sleep
            </p>
          </div>

          <div className="bg-[#13110d] rounded-xl p-6" style={{ border: "0.5px solid #c8a96e33" }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] text-[#0a0a0a] bg-[#c8a96e] px-2 py-0.5 rounded font-medium">Primary</span>
              <span className="text-[11px] text-[#555]">02</span>
            </div>
            <h3 className="text-[16px] font-medium text-[#f0ede6] mb-2">Social Media Management</h3>
            <p className="text-[13px] text-[#777] leading-[1.7] mb-3">
              Consistent posts, stories, and reels that build your audience and keep your brand active — content calendar, copywriting, graphics — in Urdu and English.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {["Content Calendar", "Post Design", "Copywriting", "Reels & Stories", "Community Mgmt"].map((t) => (
                <span key={t} className="text-[10px] text-[#888] bg-[#0a0a0a] border border-[#1a1a1a] rounded px-2 py-0.5">{t}</span>
              ))}
            </div>
            <p className="text-[11px] text-[#6db88a] flex items-center gap-1.5">
              <span>✓</span> Stay visible, stay top of mind
            </p>
          </div>
        </div>

        {/* Supporting services */}
        <p className="text-[10px] uppercase tracking-wider text-[#555] mb-3 mt-8">🔧 SUPPORTING — SO YOUR MARKETING ACTUALLY WORKS</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {[
            {
              num: "03",
              title: "Website & Landing Pages",
              desc: "I build the pages your ads send traffic to — fast, mobile-optimized, designed to convert. Because a great ad with a bad landing page = wasted money.",
              result: "Higher conversion rate on every campaign",
            },
            {
              num: "04",
              title: "Logo & Brand Identity",
              desc: "Professional logo, brand colors, and visual identity — so every touchpoint looks consistent. Your ads, website, and social media all feel like one brand.",
              result: "Clients trust you from first impression",
            },
            {
              num: "05",
              title: "Graphic Design & Creatives",
              desc: "Ad creatives, social media posts, banners, flyers — all designed by the same person running your campaigns, so everything is on-brand and on-message.",
              result: "Better creatives = better ad performance",
            },
          ].map((s) => (
            <div
              key={s.num}
              className="bg-[#111] rounded-xl p-5 flex flex-col hover:bg-[#141414] transition-colors"
              style={{ border: "0.5px solid #1e1e1e" }}
            >
              <span className="text-[11px] text-[#555] mb-3">{s.num}</span>
              <h3 className="text-[15px] font-medium text-[#f0ede6] mb-2">{s.title}</h3>
              <p className="text-[13px] text-[#777] leading-[1.7] flex-1">{s.desc}</p>
              <p className="text-[11px] text-[#6db88a] flex items-center gap-1.5 mt-3">
                <span>✓</span> {s.result}
              </p>
            </div>
          ))}
        </div>

        {/* Full package CTA */}
        <div className="bg-[#13110d] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ border: "0.5px solid #c8a96e33" }}>
          <div>
            <span className="text-[10px] text-[#0a0a0a] bg-[#c8a96e] px-2 py-0.5 rounded font-medium">✦ Best Value — Save 30%</span>
            <h3 className="text-[16px] font-medium text-[#f0ede6] mt-2 mb-1">
              Complete Growth Package
            </h3>
            <p className="text-[13px] text-[#777]">
              Ads + website + brand + social media — one team, one invoice, maximum results.
            </p>
          </div>
          <a
            href="https://wa.me/923363710499"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-[#c8a96e] text-[#0a0a0a] text-[14px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors"
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
