const steps = [
  {
    num: "01",
    title: "You reach out",
    desc: "WhatsApp or email — tell me about your business and what you need.",
    time: "Takes 2 min",
  },
  {
    num: "02",
    title: "We plan together",
    desc: "Free call to understand your goals, audience, and budget. No pressure.",
    time: "30 min call",
  },
  {
    num: "03",
    title: "I build & launch",
    desc: "Design, website, ads — everything delivered on time with regular updates.",
    time: "7-14 days",
  },
  {
    num: "04",
    title: "Results come in",
    desc: "Leads, clients, and growth — you focus on your business, I handle the rest.",
    time: "Ongoing",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 px-6 md:px-8" data-animate>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">THE PROCESS</p>
          <h2 className="font-playfair text-[28px] md:text-[32px] leading-snug mb-3">
            From zero to clients in 4 steps.
          </h2>
          <p className="text-[14px] text-[#777]">Simple, clear, and fast — no confusion, no delays.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {steps.map((step) => (
            <div key={step.num} className="bg-[#111] rounded-xl p-5 text-center relative" style={{ border: "0.5px solid #1e1e1e" }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ border: "1px solid #c8a96e44" }}
                data-animate
                data-pulse
              >
                <span className="text-[13px] text-[#c8a96e] font-medium">{step.num}</span>
              </div>
              <h3 className="text-[14px] font-medium text-[#f0ede6] mb-2">{step.title}</h3>
              <p className="text-[12px] text-[#777] leading-[1.7] mb-3">{step.desc}</p>
              <span className="text-[10px] text-[#555] bg-[#1a1a1a] px-2 py-0.5 rounded">{step.time}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href="https://calendly.com/meetsohaib/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8a96e] text-[#0a0a0a] text-[14px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors"
          >
            📅 Book a Free Meeting →
          </a>
          <a
            href="https://wa.me/923363710499"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-[14px] text-[#f0ede6] rounded-md hover:border-[#555] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.768-6.258-2.066l-.438-.34-2.65.887.887-2.648-.34-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            Or WhatsApp Directly
          </a>
        </div>
      </div>
    </section>
  );
}
