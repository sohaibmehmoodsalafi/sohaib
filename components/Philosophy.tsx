"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/components/SiteContentProvider";

function BodyWithHighlight({
  text,
  highlight,
}: {
  text: string;
  highlight: string | undefined;
}) {
  const h = highlight?.trim();
  if (!h || !text.includes(h)) {
    return <>{text}</>;
  }
  const parts = text.split(h);
  return (
    <>
      {parts[0]}
      <span className="font-medium text-gold-bright">{h}</span>
      {parts.slice(1).join(h)}
    </>
  );
}

export function Philosophy() {
  const { content } = useSiteContent();
  const p = content.philosophy;
  return (
    <section
      id="philosophy"
      className="scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-5"
        >
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
            {p.kicker}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {p.title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="space-y-6 text-sm font-light leading-relaxed text-muted sm:text-base lg:col-span-7"
        >
          {p.blocks.map((block, i) =>
            block.variant === "quote" ? (
              <p
                key={`ph-${i}`}
                className="border-l border-gold/35 pl-6 text-foreground/90"
              >
                {block.text}
              </p>
            ) : (
              <p key={`ph-${i}`}>
                <BodyWithHighlight
                  text={block.text}
                  highlight={block.highlight}
                />
              </p>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
