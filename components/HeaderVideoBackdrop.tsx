"use client";

import { useEffect, useState } from "react";

/** Pexels royalty-free · aerial / Islamic landmark — swap with `/videos/header.mp4` if self-hosting */
const HEADER_LOOP =
  "https://videos.pexels.com/video-files/19163087/19163087-hd_1920_1080_25fps.mp4";

export function HeaderVideoBackdrop() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPlayVideo(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!playVideo) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <video
        className="absolute left-1/2 top-1/2 min-h-[160%] w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.42] saturate-[0.85]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={HEADER_LOOP} type="video/mp4" />
      </video>
      {/* soft vignette so logo + menu stay readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65" />
    </div>
  );
}
