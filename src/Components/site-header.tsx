"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Monogram } from "@/components/monogram";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link
          aria-label={`${siteConfig.name} — home`}
          className="site-header__brand"
          href="/"
          onClick={() => setOpen(false)}
        >
          <Monogram className="site-header__mark" />
          <span className="site-header__name">
            <span>Jeff Kabera</span>
            <span className="site-header__surname">Githara</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="site-header__nav">
          {siteConfig.nav.map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className="site-header__link"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="site-header__cta" href="/contact">
            <span>Let&rsquo;s talk</span>
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.5} />
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="site-header__toggle"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? (
              <X aria-hidden="true" size={22} strokeWidth={1.4} />
            ) : (
              <Menu aria-hidden="true" size={22} strokeWidth={1.4} />
            )}
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className="mobile-nav"
        data-open={open}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile" className="mobile-nav__inner">
          <p className="mobile-nav__folio mono">Index / Navigation</p>
          {siteConfig.nav.map((item, index) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className="mobile-nav__link display"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span className="mono mobile-nav__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
              <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.3} />
            </Link>
          ))}
          <div className="mobile-nav__footer">
            <a className="mono" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <p className="mono">{siteConfig.location}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
