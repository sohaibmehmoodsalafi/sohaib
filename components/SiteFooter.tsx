"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { BrandLogoLockup } from "@/components/BrandLogoLockup";
import {
  IconBookOpen,
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconLaptop,
} from "@/components/FooterIcons";
import { CONTACT_EMAIL, SOCIAL } from "@/lib/social";

const quickLinks = [
  { href: "/#ventures", label: "Ventures" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#work", label: "Work" },
  { href: "/#connect", label: "Connect" },
] as const;

const iconLinks = [
  {
    href: SOCIAL.linkedin,
    label: "LinkedIn",
    Icon: IconLinkedIn,
  },
  {
    href: SOCIAL.facebook,
    label: "Facebook",
    Icon: IconFacebook,
  },
  {
    href: SOCIAL.instagram,
    label: "Instagram",
    Icon: IconInstagram,
  },
  {
    href: "https://softdesksolution.com",
    label: "Soft Desk Solution website",
    Icon: IconLaptop,
  },
  {
    href: "https://peace.org.pk",
    label: "Peace Institute — Islamic trust & academy",
    Icon: IconBookOpen,
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SiteFooter() {
  return (
    <footer
      id="connect"
      className="scroll-mt-24 relative overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-surface via-bg to-bg"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/5 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gold/5 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between"
        >
          <motion.div variants={fade} className="max-w-lg">
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
              Get in touch
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-[2rem]">
              Let&apos;s build something{" "}
              <span className="text-gold-bright">remarkable</span>.
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted sm:text-base">
              Partnerships in growth, creative direction, and faith-forward
              digital programs — introductions via LinkedIn work best.
            </p>
            <p className="mt-3 text-sm font-light text-muted">
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold-bright underline decoration-gold/40 underline-offset-4 hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <div className="mt-8 hidden sm:block">
              <BrandLogoLockup />
            </div>
          </motion.div>

          <motion.div
            variants={fade}
            className="flex flex-col gap-8 lg:items-end"
          >
            <div>
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-faint">
                Explore
              </p>
              <nav
                className="mt-4 flex flex-wrap gap-x-6 gap-y-2 sm:justify-end"
                aria-label="Footer sections"
              >
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold-bright"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-faint">
                Social &amp; web
              </p>
              <div className="mt-4 flex flex-wrap gap-3 sm:justify-end">
                {iconLinks.map(({ href, label, Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-muted transition-all hover:border-gold/45 hover:bg-gold-dim hover:text-gold-bright"
                  >
                    <Icon className="h-[18px] w-[18px] transition-transform group-hover:scale-105" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-10 sm:flex-row"
        >
          <BrandLogo className="sm:hidden" />
          <p className="text-center text-[10px] font-light uppercase tracking-[0.28em] text-faint sm:text-left">
            © {new Date().getFullYear()} Sohaib Mehmood. Scaling Brands.
            Empowering Souls.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
