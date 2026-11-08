import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { Folio } from "@/components/folio";
import { Monogram } from "@/components/monogram";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this portfolio was designed and built: brand identity, typography, palette, structure and the honest boundaries of the build.",
  alternates: { canonical: "/colophon" },
};

export default function ColophonPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <Folio>Reference / Colophon</Folio>
          <div className="page-hero__grid">
            <div>
              <h1 className="display page-hero__title">
                The system behind the <em>surface.</em>
              </h1>
            </div>
            <div>
              <p className="page-hero__lede">
                This edition is an editorial portfolio built as a small design
                system: a bone paper palette, three typefaces, slate and copper
                accents, and a deliberate grid.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="brand-identity">
        <div className="shell">
          <div className="brand-identity__intro">
            <div>
              <Folio>00 / Identity</Folio>
              <h2 className="display brand-identity__title">
                A brand for <em>thoughtful systems.</em>
              </h2>
            </div>
            <div>
              <p className="brand-identity__lede">
                The identity is built around the JKG monogram: a compact,
                engineered mark that carries the same logic as the work —
                structure first, expression second. The system pairs warm bone
                paper with charcoal ink, slate structure and a copper signal.
              </p>
              <p className="mono brand-identity__tagline">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </div>

          <div className="brand-board-grid">
            <figure className="brand-board brand-board--wide">
              <Image
                alt="Brand strategy board with the JKG monogram, vision, goals and positioning"
                height={768}
                sizes="(max-width: 820px) 100vw, 92rem"
                src={siteConfig.brand.assets.strategy}
                width={1408}
              />
              <figcaption>
                <span>Brand strategy</span>
                <span>Vision / goals / positioning</span>
              </figcaption>
            </figure>
            <figure className="brand-board">
              <Image
                alt="Brand application board showing the wordmark, tagline and palette"
                height={768}
                sizes="(max-width: 820px) 100vw, 46rem"
                src={siteConfig.brand.assets.applications}
                width={1408}
              />
              <figcaption>
                <span>Applications</span>
                <span>Wordmark / tagline / palette</span>
              </figcaption>
            </figure>
            <figure className="brand-board">
              <Image
                alt="Monogram exploration board showing the JKG mark in use"
                height={768}
                sizes="(max-width: 820px) 100vw, 46rem"
                src={siteConfig.brand.assets.explorations}
                width={1408}
              />
              <figcaption>
                <span>Monogram</span>
                <span>JKG / construction / usage</span>
              </figcaption>
            </figure>
          </div>

          <div className="brand-lockup">
            <Monogram className="brand-lockup__mark" title="JKG monogram" />
            <div>
              <p className="mono brand-about__label">Primary mark</p>
              <p className="brand-lockup__initials">{siteConfig.shortName}</p>
              <p className="brand-lockup__name">Jeff Kabera Githara</p>
              <p className="brand-lockup__tagline">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="shell colophon-grid">
        <section className="colophon-block">
          <h2 className="colophon-block__title">Typography</h2>
          <p>
            Newsreader carries the display voice: large, quiet and editorial.
            Instrument Sans handles body copy and interface labels. Spline Sans
            Mono marks technical metadata, indices and folios.
          </p>
          <div className="colophon-type">
            <p className="display" style={{ fontSize: "2.4rem" }}>
              Newsreader / Display
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Instrument Sans / Body and interface
            </p>
            <p className="mono" style={{ marginTop: "0.5rem" }}>
              Spline Sans Mono / Metadata
            </p>
          </div>
        </section>

        <section className="colophon-block">
          <h2 className="colophon-block__title">Palette</h2>
          <p>
            Bone paper, charcoal ink, slate structure and a copper signal.
            Project covers extend the palette by discipline so the index reads
            as a collection rather than a list.
          </p>
          <div className="swatches">
            {siteConfig.brand.palette.map((colour) => (
              <div
                className="swatch"
                key={colour.name}
                style={{ background: colour.value }}
              >
                <span>
                  {colour.name}
                  <br />
                  {colour.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="colophon-block">
          <h2 className="colophon-block__title">Build</h2>
          <ul>
            <li>Next.js App Router with strict TypeScript</li>
            <li>Tailwind CSS v4 with a custom token layer</li>
            <li>Motion for restrained reveals, with reduced-motion support</li>
            <li>Lucide for interface icons</li>
            <li>Zod validation on the contact endpoint</li>
            <li>Static case-study routes generated from project content</li>
          </ul>
        </section>

        <section className="colophon-block">
          <h2 className="colophon-block__title">Boundaries</h2>
          <p>
            Project covers are original typographic and geometric plates, not
            screenshots. The contact form only sends when a mail provider is
            configured; otherwise it says so and offers a direct email. No
            metric, credential, testimonial or client outcome is invented.
          </p>
        </section>

        <section className="colophon-block">
          <h2 className="colophon-block__title">Access</h2>
          <p>
            Semantic landmarks, a skip link, visible focus states, labelled
            controls, live status messages and reduced-motion handling are built
            in. The layout is checked from small phones through wide desktops.
          </p>
        </section>

        <section className="colophon-block">
          <h2 className="colophon-block__title">Contact</h2>
          <p>
            This site is designed and built by {siteConfig.name} in{" "}
            {siteConfig.location}. Corrections and thoughtful critique are
            welcome.
          </p>
          <div style={{ marginTop: "1.25rem" }}>
            <ArrowLink external href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </ArrowLink>
          </div>
        </section>
      </div>
    </>
  );
}
