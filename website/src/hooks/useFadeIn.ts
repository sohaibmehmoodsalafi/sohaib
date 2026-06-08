"use client";

import { useEffect, useRef } from "react";

export function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Step 1: Add base class + hide (only when JS is running)
    el.classList.add("fade-in-up", "will-animate");
    // Step 2: Reveal on scroll
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}
