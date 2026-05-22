"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Facebook & Instagram Ads",
  "Social Media Management",
  "Website or Landing Page",
  "Logo & Branding",
  "Graphic Design & Creatives",
  "Complete Growth Package",
  "Peace Institute Enrollment",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/sohaib@peace.org.pk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-[#111] border border-[#1e1e1e] rounded-lg text-[14px] text-[#f0ede6] placeholder-[#444] focus:border-[#c8a96e]/40 focus:outline-none transition-colors";

  return (
    <section id="contact" className="py-14 px-6 md:px-8" data-animate>
      <div className="max-w-lg mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">FREE STRATEGY CALL</p>
        <h2 className="font-playfair text-[30px] md:text-[36px] leading-snug mb-3">
          Let me audit your marketing
          <br />
          <span className="text-[#c8a96e]">for free.</span>
        </h2>
        <p className="text-[14px] text-[#777] leading-[1.7] mb-4">
          30-minute call — I will look at your current setup, tell you what is working, what is not, and exactly what to do next. No commitment, no pressure.
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c8a96e]/8 border border-[#c8a96e]/15 rounded-lg mb-8">
          <span className="w-2 h-2 rounded-full bg-[#6db88a] animate-pulse" />
          <span className="text-[12px] text-[#c8a96e]">Only 3 slots left this month</span>
        </div>

        {submitted ? (
          <div className="bg-[#111] border border-[#2d4a36] rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#6db88a]/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-[#6db88a] text-[20px]">✓</span>
            </div>
            <p className="text-[#6db88a] text-[16px] font-medium mb-1">Message sent!</p>
            <p className="text-[13px] text-[#777]">
              I will get back to you within 24 hours. JazakAllah Khair.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            <input type="hidden" name="_captcha" value="false" />
            <input name="name" type="text" required placeholder="Full Name" className={inputClass} />
            <input name="email" type="email" required placeholder="Email Address" className={inputClass} />
            <input name="phone" type="tel" placeholder="Phone / WhatsApp Number" className={inputClass} />
            <select name="service" required defaultValue="" className={`${inputClass} appearance-none`}>
              <option value="" disabled>What do you need help with?</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <textarea name="message" rows={4} placeholder="Tell me about your business and what you are struggling with..." className={`${inputClass} resize-none`} />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 bg-[#c8a96e] text-[#0a0a0a] text-[14px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors disabled:opacity-60"
            >
              {sending ? "Sending..." : "Book Free Strategy Call →"}
            </button>
            <p className="text-[11px] text-[#555] text-center">No spam. No selling. Just honest marketing advice.</p>
          </form>
        )}

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 border-t border-[#1a1a1a]" />
          <span className="text-[11px] text-[#444]">OR CHOOSE HOW TO CONNECT</span>
          <div className="flex-1 border-t border-[#1a1a1a]" />
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://calendly.com/meetsohaib/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#111] text-[#f0ede6] text-[14px] font-semibold rounded-md border border-[#1e1e1e] hover:border-[#555] transition-colors"
          >
            📅 Book a Meeting on Calendly
          </a>
          <a
            href="https://wa.me/923363710499"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25d366] text-white text-[14px] font-semibold rounded-md hover:bg-[#20bd5a] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.768-6.258-2.066l-.438-.34-2.65.887.887-2.648-.34-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            Message on WhatsApp — Reply in 1 Hour
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {["🔒 100% Confidential", "✓ No Commitment", "⚡ Reply in 1 Hour"].map((t) => (
            <span key={t} className="text-[11px] text-[#555]">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
