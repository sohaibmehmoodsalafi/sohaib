"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animType = el.getAttribute("data-anim") || "fade-in-up";
            const delay = el.getAttribute("data-delay") || "0";

            el.style.animationDelay = `${delay}ms`;
            el.classList.add(`animate-${animType}`);

            if (el.hasAttribute("data-pulse")) {
              el.classList.add("animate-pulse-once");
            }

            const children = el.querySelectorAll("[data-stagger]");
            children.forEach((child, i) => {
              const childEl = child as HTMLElement;
              childEl.style.opacity = "0";
              childEl.style.animationDelay = `${i * 100 + 100}ms`;
              childEl.classList.add("animate-fade-in-up");
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
