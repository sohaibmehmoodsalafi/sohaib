"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { FORM_ENDPOINT } from "@/lib/forms";

const WA = "https://wa.me/923048885206?text=Assalamu%20Alaikum%20Sohaib!%20I%20want%20my%20free%205-minute%20video%20audit%20for%20my%20academy.";

const CHECKS = [
  "A 5-minute video, made just for you",
  "2–3 specific fixes to get more students",
  "Free — no call needed, no obligation",
];

const inputStyle: React.CSSProperties = {
  width: "100%", background: "var(--bg-card2)", border: "1px solid var(--hairline-2)",
  borderRadius: 10, color: "var(--text)", fontFamily: "'Plus Jakarta Sans',sans-serif",
  fontSize: 15, padding: "14px 16px", outline: "none",
};

export default function OfferSection() {
  const ref = useFadeIn();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="audit"
      className="section-pad"
      style={{ padding: "120px 4vw", background: "var(--bg-dark)", borderTop: "1px solid var(--hairline)" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(160deg, var(--bg-card) 0%, var(--bg-card) 100%)",
            border: "1px solid rgba(212,160,23,.25)",
            borderRadius: 24,
            padding: "clamp(28px,5vw,52px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,.14), transparent 70%)", pointerEvents: "none" }} />

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: "#d4a017", textTransform: "uppercase", marginBottom: 18 }}>
            <span style={{ width: 24, height: 1, background: "#d4a017", display: "block" }} />Free Growth Audit
          </div>

          {/* One-line benefit */}
          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.12, letterSpacing: "-.01em", marginBottom: 14 }}>
            Get a free 5-minute video audit showing <span style={{ color: "#d4a017" }}>2–3 fixes to get your academy more students.</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-muted2)", lineHeight: 1.7, marginBottom: 24 }}>
            Send me your academy&apos;s website or Facebook page. I&apos;ll record a short screen-share showing exactly what to fix — no cost, no call required.
          </p>

          {/* Prominent WhatsApp button — above the fold, works without JS */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#25d366", color: "#052e16", fontWeight: 800, fontSize: 16, padding: "17px 28px", borderRadius: 99, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 12 }}
          >
            <span style={{ fontSize: 20 }}>💬</span> Get my free audit on WhatsApp
          </a>
          <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginBottom: 26 }}>Fastest — reply within 1 hour</p>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
            <span style={{ flex: 1, height: 1, background: "var(--hairline)" }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>or fill this 30-second form</span>
            <span style={{ flex: 1, height: 1, background: "var(--hairline)" }} />
          </div>

          {/* Simplified native form (name, website, one of email/WhatsApp) — no JS needed */}
          <form action={FORM_ENDPOINT} method="POST">
            <input type="hidden" name="_subject" value="New Free Audit Request — meetsohaib.com" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Honeypot spam trap */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
              <input name="Name" required placeholder="Your name" style={inputStyle} />
              <input name="Website" required placeholder="Academy website or Facebook page" style={inputStyle} />
              <input name="Email or WhatsApp" required placeholder="Email or WhatsApp number" style={inputStyle} />
            </div>

            <button type="submit"
              style={{ width: "100%", background: "#d4a017", color: "#080808", fontWeight: 700, fontSize: 15, padding: 16, borderRadius: 99, border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: ".02em" }}>
              Send me my free audit →
            </button>
          </form>

          {/* Reassurance */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 24 }}>
            {CHECKS.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "var(--text-muted2)" }}>
                <span style={{ color: "#d4a017", fontWeight: 700 }}>✓</span>{c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
