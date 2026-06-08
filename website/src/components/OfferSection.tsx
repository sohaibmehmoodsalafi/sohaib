const items = [
  "Analyze your current ads (or your competitors if you are not running ads yet)",
  "Find exactly where you are losing money and leads",
  "Show specific growth opportunities for your business",
  "Give you a custom Meta Ads strategy — free, no strings attached",
];

export default function OfferSection() {
  return (
    <section className="py-20 px-6" data-animate>
      <div className="max-w-[700px] mx-auto">
        <div className="rounded-[2px] p-8 md:p-10" style={{ background: "#111111", border: "0.5px solid rgba(255,255,255,0.06)" }}>
          <span className="section-label">Free Audit</span>
          <h2 className="font-bebas text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.01em] mb-6">
            Start With a Free Growth Audit
          </h2>
          <div className="space-y-3 mb-8">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-[#D4A843] text-[11px] mt-1 shrink-0">&#10003;</span>
                <span className="text-[14px] text-[#999] leading-[1.6] font-light">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="flex-1 text-center px-6 py-3 bg-[#D4A843] text-[#0a0a0a] text-[14px] font-semibold rounded-[2px] hover:bg-[#E8B84B] transition-colors">
              Book a Growth Meeting
            </a>
            <a href="#work" className="flex-1 text-center px-6 py-3 text-[14px] text-[#F0EDE8] font-light rounded-[2px] hover:bg-white/[0.03] transition-colors" style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}>
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
