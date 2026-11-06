import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { ApertureImage } from "@/components/aperture-image";
import { Folio } from "@/components/folio";
import { SectionHeading } from "@/components/section-heading";
import { principles, toolkit } from "@/content/practice";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jeff Kabera Githara is a web developer and software engineer in Nairobi, working between product interfaces, design systems and the software behind them.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <Folio>About / Practice</Folio>
          <div className="page-hero__grid">
            <div>
              <h1 className="display page-hero__title">
                Between the interface and the <em>system.</em>
              </h1>
            </div>
            <div>
              <p className="page-hero__lede">
                A practice built around a simple question: does this hold up
                when someone actually uses it?
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="shell about-intro">
        <div className="about-portrait">
          <ApertureImage
            alt="Portrait of Jeff Kabera Githara"
            height={960}
            sizes="(max-width: 820px) 100vw, 36vw"
            src="/2.webp"
            width={640}
          />
          <div className="about-portrait__caption mono">
            <span>Jeff Kabera Githara</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        <div className="about-intro__body">
          <p className="display">
            I design and build digital products that explain themselves.
          </p>
          <div className="prose">
            <p>
              I&rsquo;m a web developer and software engineer working from
              Nairobi. My work sits between product design and engineering:
              shaping the interface, then building the data, permissions and
              operational details that make it trustworthy.
            </p>
            <p>
              Most of my recent work lives in domains where the software carries
              real weight — clinical records, logistics, matatu finance,
              construction procurement, import compliance and architectural
              practice. Those projects taught me that clarity is not a visual
              layer added at the end. It is a property of the whole system.
            </p>
            <p>
              I care about typography, restraint and the unglamorous states:
              empty screens, failed requests, permission boundaries and the
              honest label that says something is not built yet. That is usually
              where trust is won or lost.
            </p>
          </div>

          <dl className="about-aside">
            <div className="about-aside__row">
              <dt>Based</dt>
              <dd>{siteConfig.location}</dd>
            </div>
            <div className="about-aside__row">
              <dt>Focus</dt>
              <dd>
                Product interfaces, design systems and full-stack products
              </dd>
            </div>
            <div className="about-aside__row">
              <dt>Current</dt>
              <dd>
                Building and refining systems work across health, logistics and
                construction
              </dd>
            </div>
            <div className="about-aside__row">
              <dt>Open to</dt>
              <dd>
                Employment, focused freelance engagements and technical
                collaboration
              </dd>
            </div>
          </dl>

          <div className="page-hero__actions">
            <ArrowLink className="button button--solid" href="/contact">
              Start a conversation
            </ArrowLink>
            <ArrowLink href="/work">See the work</ArrowLink>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <SectionHeading
            folio="01 / Brand"
            intro="The practice has a point of view: clarity in the interface, rigour in the system, and enough restraint to let the work speak for itself."
            title={
              <>
                Thoughtful interfaces. Well-engineered <em>systems.</em>
              </>
            }
          />
          <div className="brand-about__grid">
            <article className="brand-about__card">
              <p className="mono brand-about__label">Mission</p>
              <h3>Make complex digital work legible and trustworthy.</h3>
              <p>{siteConfig.brand.mission}</p>
            </article>
            <article className="brand-about__card">
              <p className="mono brand-about__label">Vision</p>
              <h3>Digital ecosystems that elevate human experience.</h3>
              <p>{siteConfig.brand.vision}</p>
            </article>
          </div>
          <div className="brand-pillars">
            {siteConfig.brand.pillars.map((pillar) => (
              <article className="brand-pillar" key={pillar.number}>
                <p className="mono brand-pillar__number">{pillar.number}</p>
                <h3 className="brand-pillar__title">{pillar.title}</h3>
                <p className="brand-pillar__body">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            folio="02 / Principles"
            intro="Five working beliefs that shape how I frame problems, choose trade-offs and decide what a product should refuse to pretend."
            title={
              <>
                What I keep <em>coming back to.</em>
              </>
            }
          />
          <ol className="principles-list">
            {principles.map((principle) => (
              <li className="principle" key={principle.number}>
                <p className="mono principle__number">{principle.number}</p>
                <h2 className="principle__title">{principle.title}</h2>
                <p className="principle__body">{principle.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            folio="03 / Toolkit"
            intro="Tools change. The underlying concerns — structure, state, access, clarity — do not."
            title={
              <>
                The tools <em>at hand.</em>
              </>
            }
          />
          <div className="toolkit">
            {toolkit.map((group) => (
              <div className="toolkit__group" key={group.label}>
                <p className="mono toolkit__label">{group.label}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="shell contact-cta__grid">
          <div>
            <Folio>04 / Contact</Folio>
            <h2 className="display contact-cta__title">
              Let&rsquo;s make something that <em>holds.</em>
            </h2>
          </div>
          <div className="contact-cta__side">
            <p>
              If you are building a product where the interface and the system
              both matter, I would like to hear about it.
            </p>
            <div>
              <ArrowLink className="button button--solid" href="/contact">
                Get in touch
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
