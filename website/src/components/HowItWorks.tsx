const steps = [
  { num: "01", title: "We Audit", desc: "Deep analysis of your current setup, competitors, and opportunities." },
  { num: "02", title: "We Build Together", desc: "Custom ads strategy, creatives, and landing page — built as one system." },
  { num: "03", title: "We Launch", desc: "Campaigns go live. First leads typically within 48 hours." },
  { num: "04", title: "Results & Scale", desc: "Optimize what works, scale what converts, report every week." },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 px-6" data-animate>
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Onboarding</span>
          <h2 className="font-bebas text-[26px] md:text-[34px] leading-[1.12] tracking-[-0.01em]">
            From zero to clients in 4 steps
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.num} className="rounded-[2px] p-6 text-center" style={{ background: "#111111", border: "0.5px solid rgba(255,255,255,0.06)" }}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-[13px] font-medium text-[#D4A843] mb-4" style={{ border: "0.5px solid rgba(212,168,67,0.2)" }}>{s.num}</span>
              <h3 className="text-[14px] font-medium text-[#F0EDE8] mb-2">{s.title}</h3>
              <p className="text-[12px] text-[#777] leading-[1.6] font-light">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <a href="#contact" className="px-6 py-3 bg-[#D4A843] text-[#0a0a0a] text-[14px] font-semibold rounded-[2px] hover:bg-[#E8B84B] transition-colors">Book a Free Meeting</a>
          <a href="https://wa.me/923363710499" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-[14px] text-[#F0EDE8] font-light rounded-[2px] hover:bg-white/[0.03] transition-colors flex items-center gap-2" style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.768-6.258-2.066l-.438-.34-2.65.887.887-2.648-.34-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            Or WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
