export default function Hero() {
  return (
    <section className="pt-24 md:pt-28 pb-12 px-6 md:px-8" data-animate>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#6db88a] animate-pulse" />
            <span className="text-[12px] text-[#888]">Only 3 slots open this month</span>
          </div>

          <h1 className="font-playfair text-[28px] md:text-[42px] leading-[1.15] mb-5 text-[#f0ede6]">
            I help businesses consistently acquire <span className="text-[#c8a96e]">real clients</span> through <span className="text-[#c8a96e]">Meta Ads</span> & SMM.
          </h1>

          <p className="text-[15px] text-[#888] leading-[1.8] mb-4 max-w-md">
            Digital marketing expert — I run your Facebook Ads, build your website, and design your brand.
            Everything stays under one vision so your marketing actually works.
          </p>

          {/* Why one person */}
          <div className="flex items-start gap-2 mb-7 px-3 py-2.5 bg-[#111] border border-[#1e1e1e] rounded-lg">
            <span className="text-[13px] mt-0.5">💡</span>
            <p className="text-[13px] text-[#999] leading-[1.6]">
              <strong className="text-[#f0ede6]">Why one person?</strong> When the same person who runs your ads also designs your creatives and builds your landing page — everything converts better. No miscommunication, no delays.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/923363710499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#c8a96e] text-[#0a0a0a] text-[14px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.768-6.258-2.066l-.438-.34-2.65.887.887-2.648-.34-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Get Free Strategy Call →
            </a>
            <a
              href="https://calendly.com/meetsohaib/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-[#333] text-[14px] text-[#f0ede6] rounded-md hover:border-[#555] transition-colors"
            >
              📅 Book a Meeting
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6" style={{ borderTop: "1px solid #1a1a1a" }}>
            {[
              { val: "120+", label: "Businesses Grown" },
              { val: "85%", label: "Come Back Again" },
              { val: "5+", label: "Years in Marketing" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <span className="text-[24px] font-playfair text-[#c8a96e]">{s.val}</span>
                <p className="text-[10px] text-[#666] mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — testimonials */}
        <div>
          <div className="bg-[#111] rounded-xl p-5" style={{ border: "0.5px solid #1e1e1e" }}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[12px] text-[#666] uppercase tracking-wider">Client Results</p>
              <span className="text-[11px] text-[#0a0a0a] bg-[#c8a96e] px-2.5 py-1 rounded-md font-medium">
                ★ 5.0 Rating
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="bg-[#0a0a0a] rounded-lg p-4" style={{ border: "0.5px solid #1a1a1a" }}>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#c8a96e] text-[12px]">★</span>
                  ))}
                </div>
                <p className="text-[13px] text-[#bbb] leading-[1.7] mb-3">
                  &ldquo;Sohaib ran our Facebook Ads and also built the landing page for it.
                  Because everything was designed by one person, our
                  <strong className="text-[#f0ede6]"> conversion rate hit 12% — revenue doubled in 3 months.</strong>&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[10px] text-[#c8a96e] font-semibold">MK</div>
                  <div>
                    <p className="text-[12px] text-[#999]">Founder</p>
                    <p className="text-[11px] text-[#555]">E-commerce Brand, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0a0a] rounded-lg p-4" style={{ border: "0.5px solid #1a1a1a" }}>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#c8a96e] text-[12px]">★</span>
                  ))}
                </div>
                <p className="text-[13px] text-[#bbb] leading-[1.7] mb-3">
                  &ldquo;We hired agencies before but nothing worked. Sohaib handled our
                  ads, social media, and website all together.
                  <strong className="text-[#f0ede6]"> Admissions went up 3x. Best investment we made.</strong>&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[10px] text-[#c8a96e] font-semibold">DA</div>
                  <div>
                    <p className="text-[12px] text-[#999]">Director</p>
                    <p className="text-[11px] text-[#555]">Quran Academy, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-4 py-3 bg-[#111] rounded-lg" style={{ border: "0.5px solid #1a1a1a" }}>
            <div className="flex items-center gap-1.5">
              <span className="text-[#6db88a] text-[11px]">✓</span>
              <span className="text-[11px] text-[#666]">Verified Reviews</span>
            </div>
            <div className="w-px h-3 bg-[#222]" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#6db88a] text-[11px]">✓</span>
              <span className="text-[11px] text-[#666]">Real Clients</span>
            </div>
            <div className="w-px h-3 bg-[#222]" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#6db88a] text-[11px]">✓</span>
              <span className="text-[11px] text-[#666]">Real Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
