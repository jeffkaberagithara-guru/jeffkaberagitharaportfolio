import Image from "next/image";
import { siteConfig } from "@/content/site";

type BrandLogoProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "dark" | "light";
};

export function BrandLogo({
  alt,
  className,
  priority,
  sizes = "96px",
  variant = "dark",
}: BrandLogoProps) {
  const { assets } = siteConfig.brand;

  return (
    <Image
      alt={alt ?? assets.logoAlt}
      className={className ? `brand-logo ${className}` : "brand-logo"}
      height={assets.logoHeight}
      priority={priority}
      sizes={sizes}
      src={variant === "light" ? assets.markLight : assets.mark}
      unoptimized
      width={assets.logoWidth}
    />
  );
}
