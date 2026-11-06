import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { Folio } from "@/components/folio";
import { JourneyTimeline } from "@/components/journey-timeline";
import { journeyNote, milestones } from "@/content/journey";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "A record of Jeff Kabera Githara's project work, study and practice — from foundational web exercises to product, client and systems work.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <Folio>Index / Journey</Folio>
          <div className="page-hero__grid">
            <div>
              <h1 className="display page-hero__title">
                A record of the <em>work.</em>
              </h1>
            </div>
            <div>
              <p className="page-hero__lede">
                Six phases, each marking a shift in what the work could carry:
                from semantic foundations to products, client sites and systems
                with operational consequences.
              </p>
            </div>
          </div>
          <div className="page-hero__meta mono">
            <span>
              <strong>{milestones.length}</strong> phases
            </span>
            <span>
              <strong>2025 — 2026</strong> practice
            </span>
            <span>
              <strong>Nairobi</strong> Kenya
            </span>
          </div>
        </div>
      </header>

      <div className="shell" style={{ paddingBlock: "clamp(2rem, 4vw, 3.5rem)" }}>
        <JourneyTimeline milestones={milestones} />
        <p
          className="mono"
          style={{
            color: "var(--muted)",
            marginTop: "2rem",
            maxWidth: "44rem",
            lineHeight: 1.7,
            textTransform: "none",
            letterSpacing: "0.04em",
          }}
        >
          {journeyNote}
        </p>
      </div>

      <section className="contact-cta">
        <div className="shell contact-cta__grid">
          <div>
            <Folio>Next / Contact</Folio>
            <h2 className="display contact-cta__title">
              The next phase is <em>open.</em>
            </h2>
          </div>
          <div className="contact-cta__side">
            <p>
              I am looking for the next body of work: a team, a product or a
              problem where the interface and the system both deserve care.
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
