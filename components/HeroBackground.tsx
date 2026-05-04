"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Pexels royalty-free · swap for `/videos/hero-islamic.mp4` in `public/` if you self-host */
const VIDEO_PRIMARY =
  "https://videos.pexels.com/video-files/7311797/7311797-hd_1920_1080_30fps.mp4";

const STATIC_FALLBACK =
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=75";

export function HeroBackground() {
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setUseVideo(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="absolute inset-0">
      {useVideo ? (
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.38] saturate-[0.8]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={STATIC_FALLBACK}
          aria-hidden
        >
          <source src={VIDEO_PRIMARY} type="video/mp4" />
        </video>
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
