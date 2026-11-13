"use client";

import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      className={["reveal", className].filter(Boolean).join(" ")}
      ref={ref}
      style={
        {
          "--reveal-delay": `${Math.round(delay * 1000)}ms`,
          "--reveal-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
