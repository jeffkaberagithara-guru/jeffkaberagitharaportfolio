import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { Folio } from "@/components/folio";
import { BrandLogo } from "@/components/brand-logo";
import { milestones } from "@/content/journey";
import { capabilities, toolkit } from "@/content/practice";
import { featuredProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Curriculum vitae",
  description:
    "Jeff Kabera Githara — web developer and software engineer in Nairobi. A practice profile of selected work, capabilities and tools.",
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return (
    <div className="shell cv-page">
      <div className="cv-toolbar">
        <Folio>Curriculum vitae / 2026</Folio>
        <div className="cv-toolbar__actions">
          <a
            className="button button--outline"
            href={siteConfig.cvPath}
            download
          >
            Download PDF
          </a>
          <ArrowLink href="/contact">Contact</ArrowLink>
        </div>
      </div>

      <div className="cv">
        <aside className="cv__side">
          <BrandLogo alt="" className="cv__mark" sizes="96px" />
          <h1 className="cv__name">{siteConfig.name}</h1>
          <p className="cv__role">{siteConfig.role}</p>
          <p className="mono cv__tagline">{siteConfig.brand.tagline}</p>
          <div className="cv__contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.location}</span>
            {siteConfig.socials.map((social) => (
              <a
                href={social.href}
                key={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </aside>

        <div className="cv__main">
          <section className="cv-block">
            <p className="mono cv-block__title">Profile</p>
            <p>
              Web developer and software engineer working between product design
              and engineering. I build considered interfaces and the typed,
              permission-aware systems behind them, with a focus on products
              used in real operational contexts in Kenya.
            </p>
            <p>
              Recent work spans clinical records, logistics, matatu finance,
              construction procurement, import compliance and architectural
              practice, alongside brand and client sites.
            </p>
          </section>

          <section className="cv-block">
            <p className="mono cv-block__title">Selected work</p>
            {featuredProjects.map((project) => (
              <article className="cv-role" key={project.slug}>
                <div className="cv-role__head">
                  <h2 className="cv-role__title">{project.title}</h2>
                  <span className="mono cv-role__period">
                    {project.year} / {project.status}
                  </span>
                </div>
                <p className="cv-role__org">{project.role}</p>
                <ul>
                  <li>{project.tagline}</li>
                  <li>{project.stack.slice(0, 5).join(", ")}</li>
                </ul>
              </article>
            ))}
          </section>

          <section className="cv-block">
            <p className="mono cv-block__title">Capabilities</p>
            {capabilities.map((capability) => (
              <article className="cv-role" key={capability.number}>
                <div className="cv-role__head">
                  <h2 className="cv-role__title">{capability.title}</h2>
                  <span className="mono cv-role__period">
                    {capability.number}
                  </span>
                </div>
                <p>{capability.description}</p>
              </article>
            ))}
          </section>

          <section className="cv-block">
            <p className="mono cv-block__title">Practice record</p>
            {milestones.map((milestone) => (
              <article className="cv-role" key={milestone.id}>
                <div className="cv-role__head">
                  <h2 className="cv-role__title">{milestone.title}</h2>
                  <span className="mono cv-role__period">
                    {milestone.period}
                  </span>
                </div>
                <p>{milestone.summary}</p>
              </article>
            ))}
          </section>

          <section className="cv-block">
            <p className="mono cv-block__title">Toolkit</p>
            {toolkit.map((group) => (
              <div className="cv-role" key={group.label}>
                <p className="cv-role__org">{group.label}</p>
                <div className="cv-skills" style={{ marginTop: "0.75rem" }}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-block">
            <p className="mono cv-block__title">Note</p>
            <p>
              This is a practice profile. It lists project work and capabilities
              rather than employers or qualifications. The PDF version is the
              canonical document for applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
