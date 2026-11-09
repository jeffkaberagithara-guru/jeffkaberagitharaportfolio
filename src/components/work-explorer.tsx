"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectCategory } from "@/content/projects";

type Filter = ProjectCategory | "all";

type WorkExplorerProps = {
  projects: Project[];
  categories: { key: ProjectCategory; label: string; count: number }[];
};

export function WorkExplorer({ projects, categories }: WorkExplorerProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [liveOnly, setLiveOnly] = useState(false);

  const liveCount = useMemo(
    () =>
      projects.filter((project) =>
        project.links.some((link) => link.kind === "live"),
      ).length,
    [projects],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      if (liveOnly && !project.links.some((link) => link.kind === "live")) {
        return false;
      }
      const matchesCategory = filter === "all" || project.category === filter;
      if (!matchesCategory) return false;
      if (!needle) return true;
      return [
        project.title,
        project.tagline,
        project.description,
        project.stack.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [filter, liveOnly, projects, query]);

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "Everything", count: projects.length },
    ...categories,
  ];

  const hasFilters = filter !== "all" || liveOnly || query.trim().length > 0;

  const reset = () => {
    setFilter("all");
    setQuery("");
    setLiveOnly(false);
  };

  return (
    <div className="work-explorer">
      <div className="work-explorer__controls">
        <div
          aria-label="Filter by discipline"
          className="work-explorer__filters"
          role="group"
        >
          {filters.map((item) => (
            <button
              aria-pressed={filter === item.key}
              className="filter-chip"
              key={item.key}
              onClick={() => setFilter(item.key)}
              type="button"
            >
              <span>{item.label}</span>
              <span className="filter-chip__count mono">{item.count}</span>
            </button>
          ))}
          <button
            aria-pressed={liveOnly}
            className="filter-chip filter-chip--live"
            onClick={() => setLiveOnly((value) => !value)}
            type="button"
          >
            <span aria-hidden="true" className="filter-chip__dot" />
            <span>Live</span>
            <span className="filter-chip__count mono">{liveCount}</span>
          </button>
        </div>

        <label className="work-explorer__search">
          <span className="visually-hidden">Search projects</span>
          <Search aria-hidden="true" size={15} strokeWidth={1.5} />
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search work, stack, problem"
            type="search"
            value={query}
          />
          {query ? (
            <button
              aria-label="Clear search"
              onClick={() => setQuery("")}
              type="button"
            >
              <X aria-hidden="true" size={14} strokeWidth={1.5} />
            </button>
          ) : null}
        </label>
      </div>

      <div aria-live="polite" className="work-explorer__summary mono">
        <span>
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
        <span>
          {liveOnly
            ? "Live now"
            : filter === "all"
              ? "Complete index"
              : filters.find((item) => item.key === filter)?.label}
          {query ? ` / “${query}”` : ""}
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="work-grid">
          {filtered.map((project, index) => (
            <ProjectCard
              className="work-grid__item"
              index={index}
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="work-explorer__empty">
          <p className="display">No work matches that combination.</p>
          <p>Try a broader term, or return to the complete index.</p>
          <button
            className="button button--outline"
            onClick={reset}
            type="button"
          >
            Reset filters
          </button>
        </div>
      )}

      {hasFilters && filtered.length > 0 ? (
        <button
          className="work-explorer__reset mono"
          onClick={reset}
          type="button"
        >
          <X aria-hidden="true" size={13} strokeWidth={1.5} /> Reset view
        </button>
      ) : null}
    </div>
  );
}
