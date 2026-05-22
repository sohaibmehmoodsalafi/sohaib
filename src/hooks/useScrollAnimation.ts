"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            if (entry.target.hasAttribute("data-pulse")) {
              entry.target.classList.add("animate-pulse-once");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
