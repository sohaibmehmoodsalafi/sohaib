"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Pexels royalty-free Islamic architecture — auto-rotates like a soft “slider” */
const HERO_CLIPS = [
  "https://videos.pexels.com/video-files/7311797/7311797-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/19163087/19163087-hd_1920_1080_25fps.mp4",
] as const;

const STATIC_FALLBACK =
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=75";

const SLIDE_MS = 14_000;

export function HeroBackground() {
  const [useVideo, setUseVideo] = useState(false);
  const [clipIndex, setClipIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setUseVideo(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!useVideo) return;
    const id = window.setInterval(
      () => setClipIndex((i) => (i + 1) % HERO_CLIPS.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, [useVideo]);

  return (
    <div className="absolute inset-0">
      {useVideo ? (
        <div className="absolute inset-0">
          {HERO_CLIPS.map((src, i) => (
            <video
              key={src}
              className={`absolute inset-0 h-full w-full scale-105 object-cover saturate-[0.8] transition-opacity duration-[1.6s] ease-in-out ${
                i === clipIndex ? "z-[1] opacity-[0.44]" : "z-0 opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "metadata"}
              poster={STATIC_FALLBACK}
              aria-hidden
            >
              <source src={src} type="video/mp4" />
            </video>
          ))}
        </div>
      ) : (
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429f8d83225?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.32] saturate-[0.85]"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/[0.94] to-bg" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(198,163,90,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_90%,rgba(198,163,90,0.06),transparent)]" />
    </div>
  );
}
