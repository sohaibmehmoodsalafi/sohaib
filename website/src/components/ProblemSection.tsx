const left = [
  "Boosting random posts instead of running a real strategy",
  "No proper funnel — ads go to a homepage or dead link",
  "No retargeting system to follow up warm leads",
];
const right = [
  "Landing page not optimized for mobile or conversions",
  "No tracking setup — no pixel, no events, no data",
  "Different people handling ads, creatives, and pages",
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-6" data-animate>
      <div className="max-w-[1140px] mx-auto">
        <span className="section-label">The Problem</span>
        <h2 className="font-playfair text-[26px] md:text-[36px] leading-[1.12] tracking-[-0.01em] mb-10 max-w-2xl">
          Most businesses waste money on ads because nobody set up the system right.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 mb-10">
          {[left, right].map((col, ci) => (
            <div key={ci}>
              {col.map((p, i) => (
                <div key={i} className="flex items-start gap-3 py-4" style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-red-400/50 text-[11px] mt-1 shrink-0">✕</span>
                  <p className="text-[14px] text-[#999] leading-[1.6] font-light">{p}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-[15px] text-[#F0EDE8]">We fix all of this with <span className="text-[#D4A843]">one streamlined system</span>.</p>
      </div>
    </section>
  );
}
