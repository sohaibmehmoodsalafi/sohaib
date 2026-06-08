"use client";

import { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button")) setBig(true);
    };
    const out = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button")) setBig(false);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-dot"
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        width: 8,
        height: 8,
        background: "#d4a017",
        borderRadius: "50%",
        transform: `translate(-50%,-50%) scale(${big ? 3 : 1})`,
        transition: "transform .15s",
        mixBlendMode: "difference",
      }}
    />
  );
}
