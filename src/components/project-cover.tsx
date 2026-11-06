import { categoryLabels, type Project } from "@/content/projects";

type ProjectCoverProps = {
  project: Project;
  index: number;
  size?: "card" | "tall" | "hero" | "compact";
  className?: string;
};

function Motif({ category }: { category: Project["category"] }) {
  if (category === "systems") {
    return (
      <svg
        className="project-cover__art project-cover__art--systems"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 400 300"
      >
        <path
          d="M32 0v300M104 0v300M176 0v300M248 0v300M320 0v300M0 56h400M0 128h400M0 200h400M0 272h400"
          stroke="currentColor"
          strokeOpacity="0.26"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          height="86"
          stroke="currentColor"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
          width="132"
          x="140"
          y="108"
        />
        <path
          d="M140 151h132M206 108v86"
          stroke="currentColor"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="272" cy="151" fill="currentColor" r="3.2" />
        <path
          d="M32 272h72M296 56h72"
          stroke="currentColor"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  if (category === "product") {
    return (
      <svg
        className="project-cover__art project-cover__art--product"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 400 300"
      >
        <circle cx="200" cy="150" r="118" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        <circle cx="200" cy="150" r="92" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        <circle cx="200" cy="150" r="66" stroke="currentColor" strokeWidth="0.9" vectorEffect="non-scaling-stroke" />
        <path d="M200 32v236M82 150h236" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        <path d="M200 84a66 66 0 0 1 66 66" stroke="currentColor" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <circle cx="266" cy="150" fill="currentColor" r="3.2" />
      </svg>
    );
  }

  if (category === "client") {
    return (
      <svg
        className="project-cover__art project-cover__art--client"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 400 300"
      >
        <path
          d="M86 300V150a114 114 0 0 1 228 0v150"
          stroke="currentColor"
          strokeOpacity="0.26"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M120 300V160a80 80 0 0 1 160 0v140"
          stroke="currentColor"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M0 228h400M0 260h400" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        <circle cx="200" cy="160" fill="currentColor" r="3.2" />
      </svg>
    );
  }

  if (category === "mobile") {
    return (
      <svg
        className="project-cover__art project-cover__art--mobile"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 400 300"
      >
        <rect height="206" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" vectorEffect="non-scaling-stroke" width="104" x="112" y="47" />
        <rect height="206" stroke="currentColor" strokeWidth="0.9" vectorEffect="non-scaling-stroke" width="104" x="148" y="47" />
        <path d="M166 72h68M166 96h48M166 120h68M166 144h36M166 168h56" stroke="currentColor" strokeOpacity="0.7" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        <path d="M148 228h104" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        <circle cx="200" cy="215" fill="currentColor" r="3" />
      </svg>
    );
  }

  return (
    <svg
      className="project-cover__art project-cover__art--experiments"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 400 300"
    >
      <path d="M44 84h96M44 84v60M260 156h96M260 216h96M120 228h80" stroke="currentColor" strokeWidth="0.9" vectorEffect="non-scaling-stroke" />
      <circle cx="140" cy="84" fill="currentColor" r="3" />
      <circle cx="260" cy="216" fill="none" r="24" stroke="currentColor" strokeWidth="0.9" vectorEffect="non-scaling-stroke" />
      <circle cx="200" cy="156" fill="none" r="5" stroke="currentColor" strokeWidth="0.9" vectorEffect="non-scaling-stroke" />
      <path d="M44 228h40M316 84h40" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function ProjectCover({
  project,
  index,
  size = "card",
  className,
}: ProjectCoverProps) {
  return (
    <div
      className={["project-cover", `project-cover--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      data-category={project.category}
    >
      <div aria-hidden="true" className="project-cover__grid" />
      <div className="project-cover__top">
        <span className="project-cover__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mono project-cover__meta">
          {categoryLabels[project.category]} / {project.year}
        </span>
      </div>
      <Motif category={project.category} />
      <div className="project-cover__footer">
        <span className="project-cover__title">{project.title}</span>
        <span className="mono project-cover__status">{project.status}</span>
      </div>
    </div>
  );
}
