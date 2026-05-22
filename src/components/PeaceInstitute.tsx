const bullets = [
  "Quran hifz and tajweed with expert teachers",
  "Digital skills for youth — Shariah-conscious",
  "Character building and Islamic tarbiyah",
  "Regular parent progress updates",
];

export default function PeaceInstitute() {
  return (
    <section id="peace-institute" className="py-12 px-6 md:px-8 bg-[#0c0e0d]" data-animate>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div>
          <span className="inline-block text-[11px] text-[#6db88a] bg-[#6db88a]/8 border border-[#6db88a]/15 rounded-md px-3 py-1 mb-4">
            Peace Institute
          </span>
          <h2 className="font-playfair text-[26px] md:text-[30px] leading-snug mb-4">
            Deen and digital — together.
          </h2>
          <p className="text-[14px] text-[#777] leading-[1.7] mb-6">
            Structured Quran teaching, tarbiyah, and Shariah-conscious digital
            skills — all under one roof. Your family&apos;s deen and duniya secured.
          </p>

          <ul className="space-y-3 mb-6">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[13px] text-[#ccc]">
                <span className="text-[#6db88a] text-[10px] mt-1">✦</span>
                {b}
              </li>
            ))}
          </ul>

          <a
            href="https://peace.org.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-[#1a2e22] text-[#6db88a] border border-[#2d4a36] text-[13px] font-medium rounded-md hover:bg-[#1f3628] transition-colors"
          >
            Visit peace.org.pk →
          </a>
        </div>

        {/* Right */}
        <div className="bg-[#111] border border-[#2d4a36] rounded-xl p-6">
          <p className="text-[11px] text-[#6db88a] uppercase tracking-wider mb-2">Enroll now</p>
          <h3 className="font-playfair text-[20px] mb-3">Free trial class available</h3>
          <p className="text-[13px] text-[#777] leading-[1.7] mb-5">
            Try the first class before committing. No pressure — you decide if it is right for your family.
          </p>
          <a
            href="https://wa.me/923363710499"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-[#1a2e22] text-[#6db88a] border border-[#2d4a36] text-[13px] font-medium rounded-md hover:bg-[#1f3628] transition-colors"
          >
            Book a Trial Class →
          </a>
        </div>
      </div>
    </section>
  );
}
