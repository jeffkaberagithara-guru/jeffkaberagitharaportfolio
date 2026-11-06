import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { ApertureImage } from "@/components/aperture-image";
import { ConstructionLines } from "@/components/construction-lines";
import { Folio } from "@/components/folio";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { milestones } from "@/content/journey";
import { capabilities, principles } from "@/content/practice";
import { homeProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <ConstructionLines className="hero__lines" variant="hero" />
        <div className="shell hero__inner">
          <div className="hero__topline">
            <Folio>Portfolio / 2026 — Nairobi</Folio>
            <p className="mono hero__availability">
              <span className="hero__dot" /> Available for selected work
            </p>
          </div>

          <div className="hero__grid">
            <div>
              <h1 className="display hero__title">
                <span className="hero__title-line">Interfaces</span>
                <span className="hero__title-line">that hold up</span>
                <span className="hero__title-line">
                  under <em>real use.</em>
                </span>
              </h1>
              <p className="mono hero__tagline">{siteConfig.brand.tagline}</p>
              <p className="hero__lede">
                I&rsquo;m <strong>Jeff Kabera Githara</strong>, a web developer
                and software engineer in Nairobi. I design and build product
                interfaces and the systems behind them — for teams that care how
                the work holds up after launch.
              </p>
              <div className="hero__actions">
                <ArrowLink className="button button--solid" href="/work">
                  Selected work
                </ArrowLink>
                <ArrowLink href="/about">More about the practice</ArrowLink>
              </div>
            </div>

            <Reveal className="hero__portrait" delay={0.2}>
              <ApertureImage
                alt="Portrait of Jeff Kabera Githara"
                height={960}
                priority
                src="/4.webp"
                width={640}
              />
              <div className="hero__caption mono">
                <span>Jeff Kabera Githara</span>
                <span>
                  Web developer
                  <br />
                  &amp; software engineer
                </span>
              </div>
            </Reveal>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="mono">Based in</span>
              <strong>Nairobi, Kenya</strong>
            </div>
            <div className="hero__meta-item">
              <span className="mono">Practice</span>
              <strong>Product, brand &amp; systems</strong>
            </div>
            <div className="hero__meta-item hero__meta-item--end">
              <span className="mono">Selected</span>
              <strong>2025 — 2026</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            action={<ArrowLink href="/work">Full index</ArrowLink>}
            folio="01 / Selected work"
            intro="A selection of product, client and systems work. Each case study describes the problem, the approach and the honest state of the build."
            title={
              <>
                Work made to be <em>used.</em>
              </>
            }
          />
          <div className="home-work__grid">
            {homeProjects.map((project, index) => (
              <Reveal delay={(index % 2) * 0.08} key={project.slug} y={30}>
                <ProjectCard index={index} project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            action={<ArrowLink href="/about">The full practice</ArrowLink>}
            folio="02 / Practice"
            intro="One practice, three connected layers: the interface, the system underneath and the vocabulary that keeps them consistent."
            title={
              <>
                Interface, system, <em>system of systems.</em>
              </>
            }
          />
          <Reveal>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability" key={capability.number}>
                  <p className="mono capability__number">{capability.number}</p>
                  <h3 className="capability__title">{capability.title}</h3>
                  <p className="capability__body">{capability.description}</p>
                  <ul className="capability__details">
                    {capability.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush statement">
        <ConstructionLines className="construction-lines statement__lines" />
        <div className="shell statement__inner">
          <Folio className="statement__folio">03 / Working principles</Folio>
          <blockquote className="statement__quote">
            A screen should explain itself before it <em>impresses</em> anyone.
          </blockquote>
          <p className="statement__body">
            That principle runs through the work: clear hierarchy, honest states
            and interfaces that do not pretend to be further along than they
            are. The visual system is strong because the thinking underneath it
            is explicit.
          </p>
          <div className="statement__grid">
            {principles.slice(0, 3).map((principle) => (
              <div className="statement__principle" key={principle.number}>
                <p className="mono">{principle.number}</p>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <ArrowLink href="/about">Read all five principles</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            action={<ArrowLink href="/journey">The full journey</ArrowLink>}
            folio="04 / Journey"
            intro="A record of study and practice rather than a list of employers. Each phase marks a shift in what the work could carry."
            title={
              <>
                A practice, <em>in progress.</em>
              </>
            }
          />
          <Reveal>
            <div className="journey-preview">
              {milestones.slice(0, 4).map((milestone) => (
                <article className="journey-preview__item" key={milestone.id}>
                  <p className="mono journey-preview__year">
                    {milestone.period}
                  </p>
                  <h3 className="journey-preview__title">{milestone.title}</h3>
                  <p className="journey-preview__summary">
                    {milestone.summary}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-cta">
        <div className="shell contact-cta__grid">
          <div>
            <Folio>05 / Contact</Folio>
            <h2 className="display contact-cta__title">
              Have work that deserves <em>care?</em>
            </h2>
          </div>
          <div className="contact-cta__side">
            <p>
              Open to employment, focused freelance engagements and
              collaborations where the interface and the system both matter.
            </p>
            <div>
              <ArrowLink className="button button--solid" href="/contact">
                Start a conversation
              </ArrowLink>
            </div>
            <ArrowLink external href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
