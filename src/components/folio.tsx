import type { ReactNode } from "react";

export function Folio({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={["folio mono", className].filter(Boolean).join(" ")}>
      <span aria-hidden="true" className="folio__line" />
      <span>{children}</span>
    </p>
  );
}
