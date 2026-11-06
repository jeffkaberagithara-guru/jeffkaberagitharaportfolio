import type { ReactNode } from "react";
import { Folio } from "@/components/folio";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  folio: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  folio,
  title,
  intro,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={["section-heading", className].filter(Boolean).join(" ")}>
      <div className="section-heading__lead">
        <Folio>{folio}</Folio>
        <h2 className="section-heading__title display">{title}</h2>
      </div>
      {(intro || action) && (
        <div className="section-heading__side">
          {intro && <p className="section-heading__intro">{intro}</p>}
          {action}
        </div>
      )}
    </Reveal>
  );
}
