"use client";

import { getWhatsAppHref } from "@/lib/social";
import { IconWhatsapp } from "@/components/FooterIcons";

export function FloatingWhatsapp() {
  const href = getWhatsAppHref();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsapp className="h-8 w-8 sm:h-9 sm:w-9" />
    </a>
  );
}
