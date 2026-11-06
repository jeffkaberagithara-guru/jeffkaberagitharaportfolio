"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

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
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={["aperture", className].filter(Boolean).join(" ")}
      initial={
        reduceMotion
          ? false
          : { clipPath: "inset(0 0 100% 0)", scale: 1.04 }
      }
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
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
      <span aria-hidden="true" className="aperture__corner aperture__corner--tl" />
      <span aria-hidden="true" className="aperture__corner aperture__corner--br" />
    </motion.div>
  );
}
