const results = [
  { metric: "3x", label: "Average lead increase", desc: "Within first 60 days of ad campaigns" },
  { metric: "12%", label: "Average conversion rate", desc: "Because I build the landing page too" },
  { metric: "85%", label: "Clients renew monthly", desc: "Results speak, they stay" },
  { metric: "5.6x", label: "Average ROAS", desc: "Every ₹1 spent brings ₹5.6 back" },
];

export default function Results() {
  return (
    <section className="py-12 px-6 md:px-8 bg-[#0e0e0e]" style={{ borderTop: "0.5px solid #1a1a1a", borderBottom: "0.5px solid #1a1a1a" }} data-animate>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">CAMPAIGN RESULTS</p>
          <h2 className="font-playfair text-[28px] md:text-[32px] leading-snug mb-2">
            Numbers do not lie.
          </h2>
          <p className="text-[14px] text-[#777]">Average results across 120+ client campaigns.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {results.map((r) => (
            <div key={r.label} className="bg-[#0a0a0a] rounded-xl p-5 text-center" style={{ border: "0.5px solid #1a1a1a" }}>
              <span className="text-[28px] md:text-[32px] font-playfair text-[#c8a96e] block mb-2">{r.metric}</span>
              <p className="text-[13px] text-[#f0ede6] font-medium mb-1">{r.label}</p>
              <p className="text-[11px] text-[#555]">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/923363710499"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] text-[#c8a96e] hover:underline"
          >
            Want these numbers for your business? Let&apos;s talk →
          </a>
        </div>
      </div>
    </section>
  );
}
