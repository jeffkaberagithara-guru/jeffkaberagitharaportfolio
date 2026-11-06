import type { Metadata } from "next";
import { Folio } from "@/components/folio";
import { WorkExplorer } from "@/components/work-explorer";
import { allProjects, categories, categoryLabels } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product, client, systems and experimental work by Jeff Kabera Githara — with honest notes on what is live, what is a prototype and what is still in development.",
  alternates: { canonical: "/work" },
};

const liveCount = allProjects.filter((project) =>
  project.links.some((link) => link.kind === "live"),
).length;

export default function WorkPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <Folio>Index / Work</Folio>
          <div className="page-hero__grid">
            <div>
              <h1 className="display page-hero__title">
                The work, <em>in full.</em>
              </h1>
            </div>
            <div>
              <p className="page-hero__lede">
                Product interfaces, brand sites, systems and early experiments.
                Filter by discipline or search the stack. Each entry leads to a
                case study that describes the work and its real state.
              </p>
            </div>
          </div>
          <div className="page-hero__meta mono">
            <span>
              <strong>{allProjects.length}</strong> projects
            </span>
            <span>
              <strong>{categories.length}</strong> disciplines
            </span>
            <span>
              <strong>{liveCount}</strong> live links
            </span>
            <span>
              <strong>{categoryLabels.product}</strong> through{" "}
              <strong>{categoryLabels.experiments}</strong>
            </span>
          </div>
        </div>
      </header>

      <div className="shell">
        <WorkExplorer categories={[...categories]} projects={allProjects} />
      </div>
    </>
  );
}
