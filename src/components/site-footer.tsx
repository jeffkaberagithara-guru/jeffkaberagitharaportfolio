import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ConstructionLines } from "@/components/construction-lines";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ConstructionLines className="site-footer__lines" variant="footer" />
      <div className="shell">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <span className="site-footer__logo">
              <BrandLogo
                alt=""
                className="site-footer__mark"
                sizes="160px"
                variant="light"
              />
            </span>
            <p className="mono site-footer__tagline">
              {siteConfig.brand.tagline}
            </p>
            <p className="site-footer__statement display">
              Building interfaces with <em>consequence</em>.
            </p>
            <p className="site-footer__note">
              Open to employment, focused freelance work and thoughtful
              collaboration.
            </p>
            <a
              className="site-footer__email"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.4} />
            </a>
          </div>

          <div className="site-footer__columns">
            <div>
              <p className="mono site-footer__label">Index</p>
              <ul className="site-footer__list">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/cv">Curriculum vitae</Link>
                </li>
                <li>
                  <Link href="/colophon">Colophon</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mono site-footer__label">Elsewhere</p>
              <ul className="site-footer__list">
                {siteConfig.socials.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} rel="noreferrer" target="_blank">
                      {social.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={12}
                        strokeWidth={1.4}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono site-footer__label">Studio</p>
              <ul className="site-footer__list">
                <li>{siteConfig.location}</li>
                <li>Available for selected work</li>
                <li>
                  <a href={siteConfig.cvPath} download>
                    Download CV (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom mono">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>
            Designed and built in Nairobi. Set in Newsreader, Instrument Sans
            and Spline Sans Mono.
          </p>
          <Link href="/colophon">Colophon</Link>
        </div>
      </div>
    </footer>
  );
}
