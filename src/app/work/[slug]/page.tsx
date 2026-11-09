import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Folio } from "@/components/folio";
import { ProjectCover } from "@/components/project-cover";
import {
  allProjects,
  categoryLabels,
  getAdjacentProjects,
  getProject,
} from "@/content/projects";
import { siteConfig } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      locale: "en_KE",
      url: `/work/${project.slug}`,
      siteName: siteConfig.name,
      title: `${project.title} — ${categoryLabels[project.category]}`,
      description: project.description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${project.title} — ${siteConfig.name}`,
        },
      ],
    },
  };
}

const sections = [
  { key: "context", label: "Context", title: "The problem" },
  { key: "approach", label: "Approach", title: "How I approached it" },
  { key: "built", label: "Built", title: "What was built" },
  { key: "technical", label: "Technical", title: "Technical decisions" },
  { key: "outcome", label: "Outcome", title: "Where it stands" },
  { key: "reflection", label: "Reflection", title: "What I took from it" },
] as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = allProjects.findIndex((item) => item.slug === project.slug);
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <header className="case-hero">
        <div className="shell">
          <div className="case-hero__top">
            <Link className="case-hero__back" href="/work">
              <ArrowLeft aria-hidden="true" size={14} strokeWidth={1.5} />
              Work index
            </Link>
            <Folio>
              {categoryLabels[project.category]} / {project.year}
            </Folio>
          </div>

          <div className="case-hero__grid">
            <div>
              <h1 className="display case-hero__title">{project.title}</h1>
              <p className="case-hero__tagline">{project.tagline}</p>
            </div>
            <div>
              <p className="case-hero__description">{project.description}</p>
              <div className="case-hero__links">
                {project.links.map((link) => (
                  <a
                    className={
                      link.kind === "live"
                        ? "arrow-link arrow-link--live"
                        : "arrow-link"
                    }
                    href={link.href}
                    key={`${link.label}-${link.href}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      size={14}
                      strokeWidth={1.5}
                    />
                  </a>
                ))}
                <Link className="arrow-link" href="/contact">
                  Discuss similar work
                  <ArrowRight aria-hidden="true" size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>

          <div className="case-cover">
            <ProjectCover index={index} project={project} size="hero" />
          </div>
        </div>
      </header>

      <div className="shell case-body">
        <div className="case-main">
          <section className="case-section">
            <p className="mono case-section__label">Overview</p>
            <h2 className="case-section__title">About the work</h2>
            <p>{project.caseStudy.overview}</p>
          </section>

          {sections.map((section) => {
            const value = project.caseStudy[section.key];
            const isList = Array.isArray(value);

            return (
              <section className="case-section" key={section.key}>
                <p className="mono case-section__label">{section.label}</p>
                <h2 className="case-section__title">{section.title}</h2>
                {isList ? (
                  <ul className="case-list">
                    {value.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{value}</p>
                )}
              </section>
            );
          })}
        </div>

        <aside className="case-aside">
          <div className="case-aside__block">
            <p className="mono case-aside__label">Role</p>
            <p className="case-aside__value">{project.role}</p>
          </div>
          <div className="case-aside__block">
            <p className="mono case-aside__label">Year</p>
            <p className="case-aside__value">{project.year}</p>
          </div>
          <div className="case-aside__block">
            <p className="mono case-aside__label">Discipline</p>
            <p className="case-aside__value">
              {categoryLabels[project.category]}
            </p>
          </div>
          <div className="case-aside__block">
            <p className="mono case-aside__label">Status</p>
            <p className="case-aside__value">{project.status}</p>
          </div>
          <div className="case-aside__block">
            <p className="mono case-aside__label">Stack</p>
            <div className="case-aside__stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="case-aside__block">
            <p className="mono case-aside__label">Links</p>
            {project.links.length > 0 ? (
              <div className="case-aside__stack">
                {project.links.map((link) => (
                  <a
                    data-kind={link.kind}
                    href={link.href}
                    key={`${link.label}-${link.href}-aside`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="case-aside__value">
                No public link for this build.
              </p>
            )}
          </div>
        </aside>
      </div>

      <nav aria-label="Adjacent projects" className="case-nav">
        {previous ? (
          <Link className="case-nav__item" href={`/work/${previous.slug}`}>
            <span className="mono case-nav__label">Previous</span>
            <span className="case-nav__title">{previous.title}</span>
          </Link>
        ) : (
          <div className="case-nav__item">
            <span className="mono case-nav__label">Previous</span>
            <span className="case-nav__title">Start of index</span>
          </div>
        )}
        {next ? (
          <Link
            className="case-nav__item case-nav__item--next"
            href={`/work/${next.slug}`}
          >
            <span className="mono case-nav__label">Next</span>
            <span className="case-nav__title">{next.title}</span>
          </Link>
        ) : (
          <div className="case-nav__item case-nav__item--next">
            <span className="mono case-nav__label">Next</span>
            <span className="case-nav__title">Back to the index</span>
          </div>
        )}
      </nav>
    </>
  );
}
