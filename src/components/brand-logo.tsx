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
  variant = "dark",
}: BrandLogoProps) {
  const { assets } = siteConfig.brand;

  return (
    <img
      alt={alt ?? assets.logoAlt}
      className={className ? `brand-logo ${className}` : "brand-logo"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      height={assets.logoHeight}
      loading={priority ? "eager" : "lazy"}
      src={variant === "light" ? assets.markLight : assets.mark}
      width={assets.logoWidth}
    />
  );
}
