"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.16) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    element.dataset.revealReady = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealVisible = "true";
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
