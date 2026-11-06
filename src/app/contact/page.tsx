import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Folio } from "@/components/folio";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jeff Kabera Githara about employment, freelance product work or technical collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <Folio>Index / Contact</Folio>
          <div className="page-hero__grid">
            <div>
              <h1 className="display page-hero__title">
                Start a <em>conversation.</em>
              </h1>
            </div>
            <div>
              <p className="page-hero__lede">
                A good brief can be short. Tell me what you are building, what
                is difficult about it and what a useful outcome looks like.
              </p>
              <p className="mono brand-identity__tagline">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="shell contact-layout">
        <div className="contact-intro">
          <p className="display">Three useful ways to begin.</p>
          <p>
            I read every message directly. There is no newsletter, no CRM
            sequence and no automated sales process.
          </p>

          <div className="track-list">
            {siteConfig.tracks.map((track) => (
              <article className="track" key={track.id}>
                <div className="track__head">
                  <span className="mono track__number">{track.number}</span>
                  <h2 className="track__title">{track.title}</h2>
                </div>
                <p className="track__body">{track.description}</p>
              </article>
            ))}
          </div>

          <div className="contact-direct">
            <span className="mono">Direct email</span>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span className="mono" style={{ marginTop: "0.75rem" }}>
              Elsewhere
            </span>
            {siteConfig.socials.map((social) => (
              <a
                href={social.href}
                key={social.href}
                rel="noreferrer"
                style={{ fontSize: "0.92rem", fontFamily: "var(--font-sans)" }}
                target="_blank"
              >
                {social.label} — {social.handle}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
