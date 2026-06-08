"use client";

import { useEffect, useRef } from "react";

export function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold }
    );
    el.classList.add("fade-in-up");
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}
