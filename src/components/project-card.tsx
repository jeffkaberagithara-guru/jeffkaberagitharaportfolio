import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/project-cover";
import { categoryLabels, type Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  size?: "card" | "tall" | "hero";
  className?: string;
};

export function ProjectCard({
  project,
  index,
  size = "card",
  className,
}: ProjectCardProps) {
  const liveLink = project.links.find((link) => link.kind === "live");
  const caseHref = `/work/${project.slug}`;
  const caseLabel = `${project.title} — ${categoryLabels[project.category]} case study`;

  return (
    <article className={["project-card", className].filter(Boolean).join(" ")}>
      <Link
        aria-label={caseLabel}
        className="project-card__cover"
        href={caseHref}
      >
        <ProjectCover index={index} project={project} size={size} />
      </Link>

      <div className="project-card__body">
        <Link
          aria-hidden="true"
          className="project-card__text"
          href={caseHref}
          tabIndex={-1}
        >
          <p className="project-card__tagline">{project.tagline}</p>
          <p className="project-card__stack mono">
            {project.stack.slice(0, 3).join(" / ")}
          </p>
        </Link>

        <div className="project-card__actions">
          {liveLink ? (
            <a
              aria-label={`Open the ${project.title} live site in a new tab`}
              className="project-card__live mono"
              href={liveLink.href}
              rel="noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" className="project-card__live-dot" />
              Live site
              <ArrowUpRight aria-hidden="true" size={12} strokeWidth={1.7} />
            </a>
          ) : null}

          <Link
            aria-label={`Read the ${project.title} case study`}
            className="project-card__arrow"
            href={caseHref}
          >
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.4} />
          </Link>
        </div>
      </div>
    </article>
  );
}
