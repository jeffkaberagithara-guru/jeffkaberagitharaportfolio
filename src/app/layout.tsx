import type { Metadata, Viewport } from "next";
import {
  Instrument_Sans,
  Newsreader,
  Spline_Sans_Mono,
} from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Jeff Kabera Githara",
    "JKG brand mark",
    "brand identity Nairobi",
    "web developer Nairobi",
    "software engineer Kenya",
    "product engineer",
    "Next.js developer",
    "interface design",
    "full-stack developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.role} in ${siteConfig.location}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
    creator: "@JeffKaberaDev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  slogan: siteConfig.brand.tagline,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.brand.assets.logo}`,
  image: `${siteConfig.url}${siteConfig.brand.assets.logo}`,
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: siteConfig.socials.map((social) => social.href),
  knowsAbout: [
    "Web development",
    "Software engineering",
    "Product design",
    "Design systems",
    "Brand identity",
    "Design engineering",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${newsreader.variable} ${instrument.variable} ${spline.variable}`}
      lang="en"
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollToTop />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
