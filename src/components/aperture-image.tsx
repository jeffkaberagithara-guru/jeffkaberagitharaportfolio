"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

type ApertureImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function ApertureImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 45vw",
  className,
  imageClassName,
}: ApertureImageProps) {
  const ref = useReveal<HTMLDivElement>("0px 0px -8% 0px");

  return (
    <div
      className={["aperture", className].filter(Boolean).join(" ")}
      ref={ref}
    >
      <Image
        alt={alt}
        className={["aperture__image", imageClassName]
          .filter(Boolean)
          .join(" ")}
        height={height}
        priority={priority}
        sizes={sizes}
        src={src}
        width={width}
      />
      <span
        aria-hidden="true"
        className="aperture__corner aperture__corner--tl"
      />
      <span
        aria-hidden="true"
        className="aperture__corner aperture__corner--br"
      />
    </div>
  );
}
