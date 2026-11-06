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
  return (
    <Link
      aria-label={`${project.title} — ${categoryLabels[project.category]} case study`}
      className={["project-card", className].filter(Boolean).join(" ")}
      href={`/work/${project.slug}`}
    >
      <ProjectCover index={index} project={project} size={size} />
      <div className="project-card__body">
        <div>
          <p className="project-card__tagline">{project.tagline}</p>
          <p className="project-card__stack mono">
            {project.stack.slice(0, 3).join(" / ")}
          </p>
        </div>
        <span aria-hidden="true" className="project-card__arrow">
          <ArrowUpRight size={18} strokeWidth={1.4} />
        </span>
      </div>
    </Link>
  );
}
