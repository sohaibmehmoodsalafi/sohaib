"use client";

import { useState, useEffect, useRef } from "react";

export default function Counter({ end, suffix = "" }: { end: string; suffix?: string }) {
  const [val, setVal] = useState<string | number>(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const isFloat = String(end).includes(".");
        const endNum = parseFloat(end);
        const dur = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(isFloat ? (ease * endNum).toFixed(1) : Math.round(ease * endNum));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
