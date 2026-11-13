"use client";

import { useEffect, useRef } from "react";

/**
 * Arms CSS-driven reveal transitions without React state. Content renders
 * visible by default, so it is never hidden when JavaScript is unavailable.
 * Elements already on screen are left alone; only below-the-fold elements
 * are armed and then revealed by an IntersectionObserver.
 */
export function useReveal<T extends HTMLElement>(
  rootMargin = "0px 0px -12% 0px",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => element.setAttribute("data-reveal", "visible");

    if (
      typeof window.IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveal();
      return;
    }

    if (element.getBoundingClientRect().top < window.innerHeight) {
      reveal();
      return;
    }

    element.setAttribute("data-reveal", "armed");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
