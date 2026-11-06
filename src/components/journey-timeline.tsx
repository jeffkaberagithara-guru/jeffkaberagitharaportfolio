import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Milestone } from "@/content/journey";
import { getProject } from "@/content/projects";

export function JourneyTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="timeline">
      {milestones.map((milestone, index) => (
        <li className="timeline__item" id={milestone.id} key={milestone.id}>
          <div className="timeline__marker" aria-hidden="true">
            <span className="mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="timeline__meta">
            <p className="mono timeline__period">{milestone.period}</p>
            <p className="mono timeline__discipline">{milestone.discipline}</p>
          </div>
          <div className="timeline__content">
            <h2 className="display timeline__title">{milestone.title}</h2>
            <p className="timeline__summary">{milestone.summary}</p>
            <ul className="timeline__points">
              {milestone.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {milestone.projectSlugs.length > 0 ? (
              <div className="timeline__projects">
                <span className="mono">Related work</span>
                <div className="chip-row">
                  {milestone.projectSlugs.map((slug) => {
                    const project = getProject(slug);
                    if (!project) return null;
                    return (
                      <Link
                        className="chip"
                        href={`/work/${project.slug}`}
                        key={slug}
                      >
                        {project.title}
                        <ArrowUpRight
                          aria-hidden="true"
                          size={12}
                          strokeWidth={1.4}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
