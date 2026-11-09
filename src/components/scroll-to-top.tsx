"use client";

import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 480;

export function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) return;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const frame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previous;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SCROLL_THRESHOLD);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  const backToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      aria-label="Back to top"
      className="scroll-top"
      data-visible={visible}
      onClick={backToTop}
      tabIndex={visible ? 0 : -1}
      title="Back to top"
      type="button"
    >
      <ArrowUp aria-hidden="true" size={18} strokeWidth={1.6} />
      <span className="scroll-top__label">Top</span>
    </button>
  );
}
