export type Milestone = {
  id: string;
  year: string;
  period: string;
  title: string;
  summary: string;
  points: string[];
  projectSlugs: string[];
  discipline: string;
};

export const milestones: Milestone[] = [
  {
    id: "foundations",
    year: "2025",
    period: "Early 2025",
    title: "Foundations in the open",
    summary:
      "Started by publishing the fundamentals: semantic HTML, forms, layout and accessibility. The early repositories are small on purpose — each one isolates a decision and makes it reviewable.",
    points: [
      "Semantic HTML for search engines and assistive technology",
      "Accessible form patterns and structured content",
      "Layout exercises in CSS Grid and Flexbox",
    ],
    projectSlugs: [
      "semantic-html-for-seo-and-accessibility",
      "html-forms-implementation",
      "school-timetable-implementation",
      "programme101",
    ],
    discipline: "Foundations",
  },
  {
    id: "full-stack",
    year: "2025",
    period: "Late 2025",
    title: "From pages to stateful products",
    summary:
      "Moved from static pages into applications with authentication, data and real user flows. ResQAuto introduced dispatch and provider management; Firebase Authentication explored sessions and protected routes.",
    points: [
      "React interfaces backed by Express and MongoDB",
      "Authentication, sessions and protected routes",
      "First end-to-end product flows with live deployment",
    ],
    projectSlugs: ["carrecovery", "carrecovery-backend", "firebase-authentication"],
    discipline: "Full-stack",
  },
  {
    id: "product-practice",
    year: "2026",
    period: "Early 2026",
    title: "A product practice",
    summary:
      "Built a series of focused product interfaces: meal decisions, invoicing, wellbeing, budgeting and study routines. Each project paired a clear problem with a restrained interface and a real deployment.",
    points: [
      "Product design from problem framing to release",
      "Next.js, TypeScript, Supabase and Tailwind",
      "Live builds with clear, honest scopes",
    ],
    projectSlugs: ["dishcision", "invoice-saas", "mindshift", "bugdet-app"],
    discipline: "Product",
  },
  {
    id: "client-work",
    year: "2026",
    period: "Mid 2026",
    title: "Client and brand work",
    summary:
      "Designed and built sites for trades, construction, automotive and retail businesses across Kenya and Austria. The work moved between German-language corporate sites, premium brand experiences and practical service businesses.",
    points: [
      "Bilingual and localised corporate websites",
      "Brand identity translated into responsive interfaces",
      "Production-minded forms, SEO and accessibility",
    ],
    projectSlugs: [
      "one4all",
      "bo-installationen",
      "pik-bau",
      "rudolf-gmbh",
      "kinga-pest-care",
      "g-thorough-cars-ltd",
      "bora-hardware",
    ],
    discipline: "Client work",
  },
  {
    id: "systems",
    year: "2026",
    period: "Late 2026",
    title: "Systems with consequences",
    summary:
      "Moved into domains where the software carries real operational weight: clinical records, logistics, matatu finance, construction agreements, architectural practice, import compliance and roadside assistance. The interfaces became quieter; the data models became the work.",
    points: [
      "Role-based access, audit trails and server-authoritative permissions",
      "PostgreSQL, Drizzle, Supabase and NestJS",
      "Monorepos and shared validation contracts",
    ],
    projectSlugs: [
      "uhaibora",
      "letava",
      "songaops",
      "sokobuild",
      "tradebridge",
      "githara-works",
      "kabera-kin",
      "jengapact",
      "mashinika",
    ],
    discipline: "Systems",
  },
  {
    id: "now",
    year: "2026",
    period: "Now",
    title: "A clearer practice",
    summary:
      "This portfolio is the current expression of the practice: editorial typography, real project evidence and a design system built to hold work across product, brand and infrastructure.",
    points: [
      "Next.js App Router, TypeScript, Tailwind and Motion",
      "A reusable editorial design system",
      "A public record that is honest about what is live, what is a prototype and what is still in development",
    ],
    projectSlugs: ["githara-works", "kabera-kin", "tradebridge"],
    discipline: "Practice",
  },
];

export const journeyNote =
  "This is a record of projects, study and practice. It is not a list of employers or qualifications, and it does not claim outcomes that cannot be verified.";
