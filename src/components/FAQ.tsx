"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does it cost?",
    a: "Every project is different. I offer packages starting from affordable rates for startups. The free consultation call helps me give you an exact quote — no hidden charges, no surprises.",
  },
  {
    q: "How long does a project take?",
    a: "Logo and branding: 3-5 days. Website: 7-14 days. Full package: 2-3 weeks. I always deliver on time with regular updates so you know exactly where things stand.",
  },
  {
    q: "I already have a logo but need marketing. Can you help?",
    a: "Absolutely. Many clients come to me with an existing brand. I can work with what you have or suggest improvements — whatever gets you the best results.",
  },
  {
    q: "Do you work with businesses outside Pakistan?",
    a: "Yes! I work with clients in Pakistan, UAE, UK, and USA. Everything is done remotely via WhatsApp and Zoom — timezone is never a problem.",
  },
  {
    q: "What if I am not happy with the design?",
    a: "I offer unlimited revisions on packages until you are 100% satisfied. Your satisfaction is not negotiable — I do not stop until you love it.",
  },
  {
    q: "You do marketing, design, AND websites — are you actually good at all of them?",
    a: "Digital marketing is my core expertise — that is where I specialize. But I learned design and web development specifically because I saw how badly campaigns perform when ads, landing pages, and creatives are made by different people who do not communicate. When one person controls the full funnel, conversion rates go up dramatically. That is my edge.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-6 md:px-8" data-animate>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">COMMON QUESTIONS</p>
          <h2 className="font-playfair text-[28px] md:text-[32px] leading-snug">
            Still thinking? Read this first.
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#111] rounded-xl overflow-hidden"
              style={{ border: "0.5px solid #1e1e1e" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-[14px] font-medium text-[#f0ede6] pr-4">{faq.q}</span>
                <span className={`text-[#c8a96e] text-[18px] shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60" : "max-h-0"}`}>
                <p className="px-5 pb-5 text-[13px] text-[#888] leading-[1.8]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 bg-[#111] rounded-xl p-6" style={{ border: "0.5px solid #1e1e1e" }}>
          <p className="text-[14px] text-[#f0ede6] mb-1">Still have questions?</p>
          <p className="text-[13px] text-[#777] mb-4">No problem — just ask directly. No commitment needed.</p>
          <a
            href="https://wa.me/923363710499"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c8a96e] text-[#0a0a0a] text-[13px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors"
          >
            Ask me anything on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
