export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/sohaibmehmoodsalafi/",
  facebook: "https://www.facebook.com/sohaibmehmoodsalafi",
  instagram: "https://www.instagram.com/sohaibsalafi1996/",
} as const;

export const CONTACT_EMAIL = "sohaib@meetsohaib.com";
export const CONTACT_WHATSAPP = "+923363710499";

/** Digits only, country code (e.g. 923001234567). Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local */
export function getWhatsAppHref(): string | null {
  const raw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ??
    CONTACT_WHATSAPP.replace(/\D/g, "");
  if (raw.length < 10) return null;
  const text = encodeURIComponent(
    "Assalamu alaikum — I visited your website and would like to connect.",
  );
  return `https://wa.me/${raw}?text=${text}`;
}
