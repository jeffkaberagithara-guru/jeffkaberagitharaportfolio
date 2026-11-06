import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { Folio } from "@/components/folio";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this portfolio was designed and built: typography, palette, structure and the honest boundaries of the build.",
  alternates: { canonical: "/colophon" },
};

const palette = [
  { name: "Paper", value: "#FAF9F5" },
  { name: "Paper soft", value: "#F0EFEA" },
  { name: "Ink", value: "#1B1C1A" },
  { name: "Ink secondary", value: "#5B5E67" },
  { name: "Cobalt", value: "#3850AF" },
  { name: "Cobalt highlight", value: "#5269C9" },
  { name: "Line", value: "#DFDED7" },
  { name: "Muted", value: "#898A87" },
  { name: "Gallery white", value: "#FFFFFF" },
];

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
                system: one paper palette, three typefaces, a cobalt accent and a
                deliberate grid.
              </p>
            </div>
          </div>
        </div>
      </header>

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
            Warm paper, near-black ink and a single cobalt accent. Project covers
            extend the palette by discipline so the index reads as a collection
            rather than a list.
          </p>
          <div className="swatches">
            {palette.map((colour) => (
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
