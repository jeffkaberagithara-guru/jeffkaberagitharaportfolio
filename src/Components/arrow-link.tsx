import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  arrow?: "right" | "up-right" | "none";
  download?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "download">;

export function ArrowLink({
  href,
  children,
  className,
  external = false,
  arrow = "right",
  download = false,
  ...rest
}: ArrowLinkProps) {
  const classes = ["arrow-link", className].filter(Boolean).join(" ");
  const glyph =
    arrow === "none" ? null : arrow === "up-right" ? (
      <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.5} />
    ) : (
      <ArrowRight aria-hidden="true" size={15} strokeWidth={1.5} />
    );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        <span>{children}</span>
        {glyph}
      </a>
    );
  }

  return (
    <Link className={classes} download={download} href={href} {...rest}>
      <span>{children}</span>
      {glyph}
    </Link>
  );
}
