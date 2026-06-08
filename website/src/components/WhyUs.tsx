const rows = [
  { agency: "3-5 people on your account", us: "One expert handles everything" },
  { agency: "Junior media buyer runs ads", us: "Ads, creatives, pages — one vision" },
  { agency: "Generic templates and copy", us: "Custom-designed for your brand" },
  { agency: "Monthly PDF reports you never read", us: "Weekly WhatsApp updates + call" },
  { agency: "6-month lock-in contracts", us: "Month-to-month — results keep you" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-6" data-animate>
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Comparison</span>
          <h2 className="font-bebas text-[26px] md:text-[34px] leading-[1.12] tracking-[-0.01em]">
            Agency vs Our System
          </h2>
        </div>

        <div className="rounded-[2px] overflow-hidden" style={{ border: "0.5px solid rgba(255,255,255,0.06)" }}>
          <div className="grid grid-cols-2 px-6 py-4" style={{ background: "#111111" }}>
            <span className="text-[11px] text-[#666] uppercase tracking-[0.15em] font-medium">Typical Agency</span>
            <span className="text-[11px] text-[#D4A843] uppercase tracking-[0.15em] font-medium">Our System</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-2 px-6 py-4" style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)", borderTop: "0.5px solid rgba(255,255,255,0.04)" }}>
              <div className="flex items-center gap-2.5">
                <span className="text-red-400/50 text-[10px]">✕</span>
                <span className="text-[13px] text-[#777] font-light">{r.agency}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#D4A843] text-[10px]">&#10003;</span>
                <span className="text-[13px] text-[#ddd] font-light">{r.us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
