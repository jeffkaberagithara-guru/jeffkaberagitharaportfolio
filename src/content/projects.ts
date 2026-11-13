import legacyData from "./legacy-projects.json";

export type ProjectCategory =
  "product" | "client" | "systems" | "mobile" | "experiments";

export type ProjectStatus =
  | "Live"
  | "Application"
  | "Site build"
  | "Catalogue build"
  | "Prototype"
  | "In development"
  | "Source"
  | "Private"
  | "Archive";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "code";
};

export type CaseStudy = {
  overview: string;
  context: string;
  approach: string;
  built: string[];
  technical: string[];
  outcome: string;
  reflection: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  year: number;
  status: ProjectStatus;
  role: string;
  featured: boolean;
  links: ProjectLink[];
  caseStudy: CaseStudy;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  product: "Product & SaaS",
  client: "Client & brand",
  systems: "Systems & infrastructure",
  mobile: "Mobile",
  experiments: "Experiments",
};

export const categoryOrder: ProjectCategory[] = [
  "product",
  "client",
  "systems",
  "mobile",
  "experiments",
];

const owner = "jeffkaberagithara-guru";
const github = (name: string) => `https://github.com/${owner}/${name}`;

const newProjects: Project[] = [
  {
    slug: "githara-works",
    title: "Githara Works",
    tagline: "A calmer operating system for architectural practice.",
    description:
      "A design-first prototype for an architectural practice workspace, with a Kenya-first product context. It brings a public product site and a local interactive workspace together around projects, drawings, decisions and fees.",
    category: "systems",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Lucide"],
    year: 2026,
    status: "Prototype",
    role: "Product design and frontend engineering",
    featured: true,
    links: [
      {
        label: "Live site",
        href: "https://githara-works.vercel.app",
        kind: "live",
      },
      { label: "Source", href: github("githara-works"), kind: "code" },
    ],
    caseStudy: {
      overview:
        "Githara Works is a frontend prototype for a small architecture practice. It explores how briefs, drawing revisions, client decisions, fees and approval records could live in one calm, connected workspace instead of five disconnected tools.",
      context:
        "Small practices coordinate a great deal of context: which drawing is current, which client decision was recorded, what a scope change costs and which statutory items are ready. The prototype treats those records as the product, not as secondary admin.",
      approach:
        "I treated the workspace as an editorial system rather than a dashboard. A public marketing site establishes the tone; the local workspace carries the operational detail. Projects, drawings and decisions share one visual language so the same information reads consistently across surfaces.",
      built: [
        "A project register with stages, owners and next milestones",
        "A drawing register with revisions, issue states and client review packages",
        "Scope change records with fee and schedule impact",
        "Fee proposals, invoice tracking and payment records",
        "An approval-readiness checklist and submission log",
        "A mobile-ready site diary and snag list",
        "Settings, team and practice administration surfaces",
      ],
      technical: [
        "Next.js 15 App Router with a public site and workspace routes",
        "React 19 and strict TypeScript",
        "Tailwind CSS with a token-led light interface",
        "Local sample interactions for creating, filtering and updating records",
        "Route-specific metadata, noindex rules for workspace surfaces and a branded 404",
        "Responsive checks across 360, 390, 768, 1024, 1280 and 1440 px",
      ],
      outcome:
        "A working frontend prototype with more than twenty public and workspace surfaces. Authentication, database persistence, email delivery, payments and statutory submissions are deliberately not connected, and the interface says so.",
      reflection:
        "The interesting problem was making a dense operational tool feel as considered as the public site. The next step is a real backend and a tighter data model, not more screens.",
    },
  },
  {
    slug: "kabera-kin",
    title: "Kabera Kin",
    tagline: "An animal welfare sanctuary and civic registry.",
    description:
      "A Kenyan animal welfare sanctuary site covering adoption, fostering, rescue reporting, field notes and a medical fund. Editorial photography and a warm, practical interface carry the organisation's work.",
    category: "client",
    stack: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS"],
    year: 2026,
    status: "Site build",
    role: "Design and full-stack web development",
    featured: true,
    links: [
      {
        label: "Live site",
        href: "https://kabera-kin.vercel.app",
        kind: "live",
      },
      { label: "Source", href: github("kabera-kin"), kind: "code" },
    ],
    caseStudy: {
      overview:
        "Kabera Kin is a multi-page site for a Kenyan animal welfare sanctuary and civic registry. It covers adoption, fostering, rescue reporting, field notes and a medical fund in one coherent public experience.",
      context:
        "Sanctuary work is part case management and part public trust. The site had to make each animal legible, explain the organisation's process clearly and offer practical routes to help without inventing outcomes or credentials.",
      approach:
        "I built an editorial, warm interface around animal dossiers and clear paths to action. Content is separated from presentation so records and stories can be updated without redesigning the page. Motion and photography are used to support the work, not decorate over it.",
      built: [
        "Adoption listings and individual animal dossiers",
        "Foster, volunteer, donate and partner journeys",
        "Rescue reporting and help-an-animal routes",
        "Field notes and long-form stories",
        "Enquiry, welfare report and newsletter forms",
        "Accessible FAQ, legal pages, loading and error states",
      ],
      technical: [
        "Next.js 15 App Router and React 18",
        "Strict TypeScript and Tailwind CSS with custom sanctuary tokens",
        "Local editorial photography and click-to-play Coverr films",
        "Metadata, sitemap, robots and a branded 404",
        "Front-end form handling with clear demonstration boundaries",
      ],
      outcome:
        "A complete multi-page site build with locally stored sample interactions. The forms are front-end demonstrations until a production endpoint, content management and real animal records are connected.",
      reflection:
        "Designing for a cause requires restraint. The animals and the work should lead, not the interface.",
    },
  },
  {
    slug: "tradebridge",
    title: "TradeBridge",
    tagline: "Global sourcing. Local confidence.",
    description:
      "A Kenya-focused international sourcing platform connecting businesses to suppliers in China, UAE, Turkey and India, with a landed-cost calculator, import request workflow and optional account tracking.",
    category: "product",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Lucide"],
    year: 2026,
    status: "Application",
    role: "Product design and full-stack development",
    featured: true,
    links: [
      {
        label: "Live site",
        href: "https://tradebridge-gamma.vercel.app",
        kind: "live",
      },
      { label: "Source", href: github("tradebridge"), kind: "code" },
    ],
    caseStudy: {
      overview:
        "TradeBridge is a Kenya-focused importation and sourcing platform. It helps a business understand landed cost, prepare an import request and follow the work through a clear account surface.",
      context:
        "Importers need clarity before committing money: what will the total landed cost be, which documents are required and who is responsible at each stage. Vague reassurance is not useful.",
      approach:
        "I built the product around a transparent landed-cost calculator and a guided import request. Sourcing-market context and compliance guidance sit beside the workflow, while an optional Supabase layer adds accounts and request tracking.",
      built: [
        "A premium public landing page",
        "A landed-cost calculator with visible assumptions",
        "A guided import request workflow",
        "Sourcing-market guidance for China, UAE, Turkey and India",
        "Compliance and import-requirement context",
        "Optional account and dashboard tracking",
      ],
      technical: [
        "Next.js 15 App Router with strict TypeScript",
        "Tailwind CSS and Lucide icons",
        "Supabase authentication and persistence, optional at runtime",
        "A labelled demo mode with a shared server-side request store",
        "Node's test runner via tsx",
      ],
      outcome:
        "A working application with an optional Supabase-backed account layer. The demo mode is intentionally shared and is labelled as such; it is not private storage.",
      reflection:
        "The calculator forced the copy to be honest about assumptions. That transparency became the product's strongest trust signal.",
    },
  },
  {
    slug: "kinga-pest-care",
    title: "Kinga Pest Care",
    tagline: "A living shield for homes and businesses.",
    description:
      "A production-minded marketing site for a Kenyan fumigation and pest-management business, with editorial art direction, an accessible inspection-request form and real server-side handling.",
    category: "client",
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "Motion", "Zod"],
    year: 2026,
    status: "Site build",
    role: "Art direction and full-stack development",
    featured: false,
    links: [{ label: "Source", href: github("kinga-pest-care"), kind: "code" }],
    caseStudy: {
      overview:
        "Kinga Pest Care is a marketing site for a professional fumigation and pest-management business. It pairs an editorial 'Living Shield' art direction with an inspection-request flow that actually reaches a server.",
      context:
        "The business needed to look credible without inventing credentials, testimonials or regulatory claims. The site had to make services legible, handle enquiries properly and stay honest about what was configured and what was placeholder.",
      approach:
        "I separated configuration from presentation so business details can be supplied without rewriting pages. The inspection form was treated as a real product surface: validation, server handling, accessible errors and clear status messages.",
      built: [
        "Home, services, about, contact, help and legal pages",
        "An accessible inspection-request form with server-side handling",
        "Service-area, treatment and safety content",
        "A configuration layer for contact, hours and registration details",
        "SEO metadata, security headers, OG imagery and contrast checks",
      ],
      technical: [
        "Next.js 16 App Router and React 19",
        "Strict TypeScript with a Tailwind v4 token system",
        "Motion for restrained interface transitions",
        "Zod validation and Vitest coverage",
        "Sharp-generated Open Graph artwork and a documented contrast audit",
      ],
      outcome:
        "A production-minded site build with a real form handler and strong defaults. Business details remain configuration, and no credential or testimonial is fabricated.",
      reflection:
        "The brief was a lesson in honest marketing: a strong visual system can carry a business without overstating what it does.",
    },
  },
  {
    slug: "uhaibora",
    title: "UhaiBora",
    tagline: "A patient-centric hospital information system.",
    description:
      "A hospital information system and electronic medical record platform for Kenya, structured as a monorepo with a staff console, patient portal, API and shared clinical packages.",
    category: "systems",
    stack: [
      "Next.js 16",
      "React 19",
      "NestJS",
      "PostgreSQL",
      "Drizzle",
      "TypeScript",
    ],
    year: 2026,
    status: "In development",
    role: "Architecture and full-stack engineering",
    featured: false,
    links: [
      {
        label: "Patient portal",
        href: "https://uhaibora-patient-portal.vercel.app",
        kind: "live",
      },
      {
        label: "Staff console",
        href: "https://uhaibora-web.vercel.app/app",
        kind: "live",
      },
    ],
    caseStudy: {
      overview:
        "UhaiBora is a patient-centric hospital information system and electronic medical record platform for Kenya. It is structured as a digital hospital operating platform rather than a marketing site or a generic admin panel.",
      context:
        "Clinical software has to connect every surface to a real workflow. Sensitive actions need authorization, audit trails and language that clinical staff can trust. A dashboard that merely looks tidy is not enough.",
      approach:
        "I structured the platform as a monorepo: a Next.js staff console, a separate patient portal, a NestJS API and shared packages for UI, database, authentication, validation, healthcare constants and environment configuration.",
      built: [
        "A staff console for EHR, appointments and operations",
        "A patient-facing portal",
        "A role-based access control and permission engine",
        "Audit helpers and authorization checks",
        "FHIR-aligned healthcare domain constants",
        "Drizzle schema and migrations for PostgreSQL",
        "Shared Zod contracts between API and interfaces",
      ],
      technical: [
        "Next.js 16, React 19 and Tailwind v4 in the frontends",
        "NestJS 11 modular-monolith API",
        "TypeScript across the workspace with npm workspaces",
        "Drizzle ORM and PostgreSQL",
        "Vitest and Playwright test coverage",
        "Documented compliance and clinical-workflow baseline",
      ],
      outcome:
        "A large in-development platform with a documented architecture and a deliberate compliance baseline. It is not presented as a deployed clinical service.",
      reflection:
        "The hardest part is not the screens. It is keeping permissions, audit trails and clinical language consistent across every surface.",
    },
  },
  {
    slug: "letava",
    title: "LETAVA",
    tagline: "Logistics, quoted and tracked.",
    description:
      "A logistics and booking platform for Kenya covering parcel, goods and materials movements, with server-calculated pricing, role-specific surfaces and a recorded status history.",
    category: "systems",
    stack: [
      "Next.js 16",
      "PostgreSQL",
      "Zod",
      "M-PESA",
      "TypeScript",
      "Vitest",
    ],
    year: 2026,
    status: "In development",
    role: "Product architecture and full-stack engineering",
    featured: true,
    links: [
      { label: "Live site", href: "https://letava.vercel.app", kind: "live" },
    ],
    caseStudy: {
      overview:
        "LETAVA is a logistics and booking platform for Kenya. It quotes, books, dispatches and tracks parcel, goods and materials movements, with pricing calculated on the server and every status change recorded against a reference.",
      context:
        "A quote is only useful if it survives contact with the real operation. LETAVA needed one record that customers, dispatchers, drivers and administrators could all read at their own level.",
      approach:
        "I designed the system around a quote-to-booking-to-dispatch flow, with role-specific surfaces and an explicit state machine. Financial and operational states are visible rather than implied.",
      built: [
        "Marketing site, services, pricing and business pages",
        "A server-calculated quote and booking flow",
        "Public tracking and account pages",
        "An operations console for dispatchers and administrators",
        "Driver job surfaces and status transitions",
        "M-PESA initiation and callback routes",
        "Help, terms and privacy pages",
      ],
      technical: [
        "Next.js 16 App Router and React 19",
        "Tailwind CSS v4 design system",
        "PostgreSQL via pg, optional at runtime",
        "Zod v4 validation and Vitest integration tests",
        "scrypt password hashing and cookie sessions",
        "Safaricom Daraja M-PESA integration points",
      ],
      outcome:
        "A working platform build that degrades gracefully without a database. Payment settlement and production operations still require configuration and review.",
      reflection:
        "A logistics product is mostly a state machine. Making the states visible to every role was the core design problem.",
    },
  },
  {
    slug: "songaops",
    title: "SongaOps",
    tagline: "One operational picture for a matatu SACCO.",
    description:
      "Operations, fleet management and investor finance for Kenyan matatu SACCOs, built around role-aware surfaces, cash-and-M-PESA reconciliation and an auditable closeout process.",
    category: "systems",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    year: 2026,
    status: "In development",
    role: "Product design and full-stack engineering",
    featured: true,
    links: [
      { label: "Live site", href: "https://songaops.vercel.app", kind: "live" },
    ],
    caseStudy: {
      overview:
        "SongaOps gives a matatu SACCO a single operational picture: which vehicles are ready to dispatch, how the stage queue is moving, what each shift collected and spent, and what each vehicle owner is owed.",
      context:
        "SACCO operations run on patchy connectivity, cash alongside M-PESA, shared ownership of vehicles and a hard requirement that the money adds up exactly. The interface cannot pretend an integration exists when it does not.",
      approach:
        "I built role-aware surfaces for fleet readiness, stage dispatch, conductor shift entry, financial closeout, investor and owner earnings, and administration. Roles are resolved server-side from the membership row, not from a client-side switcher.",
      built: [
        "Fleet command with readiness and exceptions",
        "Stage dispatch with load, hold, block and release actions",
        "Conductor shift entry for collections and expenses",
        "A closeout desk with approvals, adjustments and disputes",
        "An investor and owner earnings view",
        "Administration for invites and versioned closeout rules",
      ],
      technical: [
        "Next.js App Router and TypeScript",
        "Supabase Postgres with Row Level Security",
        "Email and password authentication",
        "Role-aware navigation and server-side access checks",
        "A labelled demo seed when Supabase is not configured",
      ],
      outcome:
        "A Phase 2 build with live data, authentication and write workflows. M-PESA reconciliation, GPS feeds and owner statements are explicitly not built.",
      reflection:
        "The design had to make missing integrations obvious. A financial surface that implies more certainty than it has is worse than no surface.",
    },
  },
  {
    slug: "sokobuild",
    title: "SokoBuild",
    tagline: "Build. Source. Deliver.",
    description:
      "A Kenya-first construction marketplace and procurement platform. The browsing half is built against a real PostgreSQL catalogue; the transacting half is deliberately labelled as not built.",
    category: "systems",
    stack: [
      "Next.js 16",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS v4",
      "TypeScript",
    ],
    year: 2026,
    status: "Prototype",
    role: "Product architecture and full-stack engineering",
    featured: false,
    links: [],
    caseStudy: {
      overview:
        "SokoBuild is a construction commerce platform for Kenya, connecting homeowners, contractors, fundis, developers, suppliers and delivery operators. It explores search, comparison, quoting and delivery in one phone-first experience.",
      context:
        "Buying construction materials often means visiting several hardware shops and comparing prices without a shared unit. SokoBuild starts from a category-agnostic product model and a price per unit, not a ticket price.",
      approach:
        "I focused on the catalogue-reading half first: a real PostgreSQL catalogue, multi-supplier offers, transparent prices and cart states that are honest about what is not built. Trust in a marketplace starts with not pretending.",
      built: [
        "Marketplace grid and category pages with recursive descent",
        "Search results and product detail with multi-supplier comparison",
        "Phone-first SMS OTP authentication",
        "Server-authoritative roles and a supplier workspace",
        "Cart states that name the missing transacting half",
        "A generic product, supplier, price, inventory and order schema",
      ],
      technical: [
        "Next.js 16, TypeScript and Tailwind v4",
        "Drizzle ORM and PostgreSQL 18",
        "better-auth with SMS OTP and no password requirement",
        "A modular monolith with service-extraction boundaries",
        "338 unit tests, database integration tests and CI against PostgreSQL",
      ],
      outcome:
        "A working marketplace browsing experience against a real catalogue. Selling, ordering and paying are not built, and the interface says so.",
      reflection:
        "The most important design decision was to label the missing half clearly. A marketplace that overstates its readiness is not trustworthy.",
    },
  },
  {
    slug: "jengapact",
    title: "JengaPact",
    tagline: "Build without the uncertainty.",
    description:
      "A Kenya-first construction agreement and transparency platform. It turns the agreement, variations, valuations, certificates and payments into one attributable record across every project stage.",
    category: "systems",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Drizzle ORM",
      "PostgreSQL",
      "better-auth",
      "Zod",
    ],
    year: 2026,
    status: "Application",
    role: "Product design and full-stack engineering",
    featured: true,
    links: [
      {
        label: "Live site",
        href: "https://jengapact.vercel.app",
        kind: "live",
      },
      { label: "Source", href: github("jengapact"), kind: "code" },
    ],
    caseStudy: {
      overview:
        "JengaPact is a construction transparency platform for Kenya. It keeps the agreement, variations, valuations, certificates and payments in one attributable record, so a project does not depend on who remembers what was said.",
      context:
        "Construction projects accumulate decisions across clients, contractors, consultants and suppliers. When variations and payments live in separate documents and conversations, the record becomes disputed. The product needed one spine from negotiation to final payment.",
      approach:
        "I designed the system around eight project stages and four money records, with an append-only ledger and integer money handling. Every decision is attributed to a person and a point in time. The public site explains the trust model; the authenticated application carries the operational detail.",
      built: [
        "A project record spanning eight stages from negotiation to final payment",
        "Variation, valuation, certificate and payment records",
        "An append-only ledger with attributable decisions",
        "Role-aware authentication and protected application routes",
        "A public explanation of the trust and transparency model",
        "PostgreSQL persistence and server-validated inputs",
      ],
      technical: [
        "Next.js 16 App Router and React 19",
        "Strict TypeScript and Tailwind CSS v4",
        "Drizzle ORM with PostgreSQL",
        "better-auth for authentication and sessions",
        "Zod validation at the server boundary",
        "Vitest and Playwright test coverage",
      ],
      outcome:
        "A live application build at jengapact.vercel.app with authentication and database-backed records. It is presented as a working product, not as a claim about completed commercial projects.",
      reflection:
        "Trust in construction software is a data-model decision before it is a visual one. If a record cannot be attributed, the interface cannot make it trustworthy.",
    },
  },
  {
    slug: "bora-hardware",
    title: "Bora Hardware",
    tagline: "Genuine gear. Honest prices.",
    description:
      "A catalogue-first storefront for a Nairobi hardware counter. Power tools, hand tools, electrical, plumbing and building materials are priced per unit, with search, department browsing and a WhatsApp order handoff.",
    category: "client",
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "Motion", "Lucide"],
    year: 2026,
    status: "Catalogue build",
    role: "Design and frontend engineering",
    featured: true,
    links: [
      {
        label: "Live site",
        href: "https://bora-hardware.vercel.app",
        kind: "live",
      },
      { label: "Source", href: github("bora-hardware"), kind: "code" },
    ],
    caseStudy: {
      overview:
        "Bora Hardware is a catalogue-first storefront for a Nairobi hardware counter. It covers power tools, hand tools, electrical, plumbing, building materials, safety and workwear, with the unit price shown on every line.",
      context:
        "Hardware cannot be compared on ticket price alone. A bag of cement, a metre of cable and a box of screws are bought in different units, and a customer needs to see the unit price before deciding. The site had to make that comparison legible on a phone.",
      approach:
        "I started from the catalogue rather than the homepage. Departments, search and product detail share one product model with unit pricing, specifications and stock context. Checkout is an order summary that hands off to WhatsApp, which matches how the counter already works.",
      built: [
        "A home page with featured lines, departments and delivery context",
        "A full catalogue with a department rail and sort controls",
        "Department, search and product-detail routes",
        "Unit pricing on every line, with specification tables",
        "A sticky mobile buy bar on product pages",
        "An order summary that hands off to WhatsApp",
        "Contact, delivery and payment guidance",
      ],
      technical: [
        "Next.js 16 App Router and React 19",
        "Tailwind CSS v4 with a token-led retail system",
        "Motion and Lucide for restrained interaction and iconography",
        "Static generation for every catalogue route except search",
        "Product and HardwareStore JSON-LD, sitemap and robots",
        "Puppeteer and Sharp for social and product imagery",
      ],
      outcome:
        "A live catalogue storefront at bora-hardware.vercel.app. The catalogue uses sample stock and pricing; ordering hands off to WhatsApp and no online payment is claimed.",
      reflection:
        "The unit price is the trust primitive in hardware retail. Once that is clear, the rest of the storefront has something honest to organise around.",
    },
  },
  {
    slug: "mashinika",
    title: "Mashinika",
    tagline: "Press once. Help is minutes away.",
    description:
      "Kenya's roadside assistance and vehicle care platform. Request a rescue, get dispatched to a vetted technician and follow the job through a live service dashboard.",
    category: "systems",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Supabase",
      "Drizzle ORM",
      "Mapbox GL",
      "Zustand",
      "TanStack Query",
    ],
    year: 2026,
    status: "Application",
    role: "Product design and full-stack engineering",
    featured: true,
    links: [
      {
        label: "Live site",
        href: "https://mashinika.vercel.app",
        kind: "live",
      },
      { label: "Source", href: github("mashinika"), kind: "code" },
    ],
    caseStudy: {
      overview:
        "Mashinika is a roadside assistance and vehicle care platform for Kenyan motorists. It connects a rescue request to a vetted technician and carries the job through dispatch, service and completion in one dashboard.",
      context:
        "A breakdown is a high-stress moment. The motorist needs to know who is coming, when they will arrive and what the job will cost. The operator needs enough context to dispatch the right technician without asking the same questions twice.",
      approach:
        "I built the product around a service-first public site and an authenticated dashboard. Rescue, care, inspection, fleet and academy surfaces share one account and notification model. Map and job state are treated as operational data, not decoration.",
      built: [
        "A public service site covering rescue, care, inspection, buy, trade, fleet and academy",
        "A rescue request flow with technician dispatch",
        "An authenticated dashboard with job and notification surfaces",
        "Vehicle care, inspection and fleet service routes",
        "Map-based location context for dispatch",
        "Role-aware navigation and account surfaces",
      ],
      technical: [
        "Next.js 16 App Router and React 19",
        "Tailwind CSS v4 with base-ui and shadcn-style components",
        "Zustand for client state and TanStack Query for server state",
        "Drizzle ORM and Supabase for persistence and authentication",
        "Mapbox GL for location context",
        "Zod contracts and Vitest/Playwright coverage",
      ],
      outcome:
        "A live application build at mashinika.vercel.app with authentication, dashboard surfaces and a rescue request flow. Production dispatch, payments and live fleet integrations still require configuration and operational review.",
      reflection:
        "In a rescue product, trust is a function of state clarity. The interface has to say what is happening, who is responsible and what happens next.",
    },
  },
];

type LegacyProject = {
  name: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  year: number;
  live: string | null;
  code: string;
  isPrivate: boolean;
  featured: boolean;
};

const legacyCategoryMap: Record<string, ProjectCategory> = {
  client: "client",
  webapps: "product",
  fullstack: "systems",
  mobile: "mobile",
  learning: "experiments",
  product: "product",
  systems: "systems",
  experiments: "experiments",
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const legacyCaseStudy = (project: LegacyProject): CaseStudy => ({
  overview: project.description,
  context: project.isPrivate
    ? "This is a private build. The public case study describes the problem and the approach without exposing client material or credentials."
    : "The project is part of a body of work exploring practical product interfaces, brand sites and full-stack applications.",
  approach:
    "The work was shaped around a clear primary action, a restrained visual system and an interface that stays usable on a phone. Content and presentation were kept separate so the site can evolve without a rewrite.",
  built: [
    "A responsive, accessible interface",
    "A considered content hierarchy and navigation",
    "Clear primary actions and project information",
    project.live ? "A deployed public build" : "A source-available build",
  ],
  technical: [
    ...project.technologies,
    "Responsive layout and image handling",
    "Semantic HTML and keyboard-accessible controls",
  ],
  outcome: project.live
    ? `The build is live at ${project.live}. It is presented as a working project, not as a claim about commercial outcomes.`
    : project.isPrivate
      ? "The source is private. The project is shown as part of the practice, without invented metrics or client claims."
      : "The source is public. The project is presented as working software, without invented metrics or commercial claims.",
  reflection:
    "The recurring lesson is that clarity is a technical decision as much as a visual one: fewer states, better names and an honest account of what the product does.",
});

const legacyProjects: Project[] = (legacyData.projects as LegacyProject[]).map(
  (project) => ({
    slug: slugify(project.name),
    title: project.title,
    tagline: project.technologies.slice(0, 3).join(" · "),
    description: project.description,
    category: legacyCategoryMap[project.category] ?? "experiments",
    stack: project.technologies,
    year: project.year,
    status: project.live ? "Live" : project.isPrivate ? "Private" : "Source",
    role: "Design and development",
    featured: false,
    links: [
      ...(project.live
        ? [{ label: "Live site", href: project.live, kind: "live" as const }]
        : []),
      ...(!project.isPrivate && project.code
        ? [{ label: "Source", href: project.code, kind: "code" as const }]
        : []),
    ],
    caseStudy: legacyCaseStudy(project),
  }),
);

const curatedOrder = [
  "githara-works",
  "kabera-kin",
  "tradebridge",
  "jengapact",
  "mashinika",
  "bora-hardware",
  "songaops",
  "letava",
  "uhaibora",
  "dishcision",
  "invoice-saas",
  "mindshift",
  "one4all",
  "rudolf-gmbh",
  "pik-bau",
  "gashi-installationen",
  "lc-fassadenbau-og",
  "lc-fassadenbau-og-facade-construction",
  "facade-studio",
  "bo-installationen",
  "bo-installationen-white-version",
  "dv-premium-cleaning",
  "vintagechauffeur",
  "kinga-pest-care",
  "sokobuild",
  "g-thorough-cars-ltd",
  "g-thorough-cars",
  "g-thoroughliquors",
  "trademark-aroma",
  "fastfood-app",
  "carrecovery",
  "carrecovery-backend",
  "budgetplanner",
  "tasks",
  "pcea-calendar",
  "studify-web-app",
  "firebase-authentication",
  "forms-html",
  "bugdet-app",
  "jeudy",
  "valentino",
  "valentines",
  "team-project-demo",
  "programme101",
  "next-test",
  "external-library",
  "capera",
  "semantic-html-for-seo-and-accessibility",
  "html-forms-implementation",
  "school-timetable-implementation",
  "jeffkaberagithara-guru",
  "jeffkaberagitharaportfolio",
];

const curatedRank = new Map(
  curatedOrder.map((slug, index) => [slug, index] as const),
);

const allLegacy = [...legacyProjects];

const legacyPortfolio = allLegacy.find(
  (project) => project.slug === "jeffkaberagitharaportfolio",
);
if (legacyPortfolio) {
  legacyPortfolio.status = "Archive";
  legacyPortfolio.title = "Portfolio Website — 2026 Edition";
  legacyPortfolio.tagline =
    "The previous portfolio, superseded by this edition.";
  legacyPortfolio.description =
    "The previous React and Vite portfolio for Jeff Kabera Githara. It remains available as a record of the earlier design direction; this site is the current edition.";
  legacyPortfolio.featured = false;
}

const seen = new Set<string>();
export const allProjects: Project[] = [...newProjects, ...allLegacy]
  .filter((project) => {
    if (seen.has(project.slug)) return false;
    seen.add(project.slug);
    return true;
  })
  .sort((a, b) => {
    const rankA = curatedRank.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const rankB = curatedRank.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    return rankA - rankB;
  });

export const featuredProjects = allProjects.filter(
  (project) => project.featured,
);

export const homeProjects = featuredProjects.slice(0, 4);

export const workFeaturedProjects = featuredProjects;

export const archiveProjects = allProjects.filter(
  (project) =>
    !featuredProjects.some((featured) => featured.slug === project.slug),
);

export const categories = categoryOrder.map((key) => ({
  key,
  label: categoryLabels[key],
  count: allProjects.filter((project) => project.category === key).length,
}));

export const getProject = (slug: string) =>
  allProjects.find((project) => project.slug === slug);

export const getAdjacentProjects = (slug: string) => {
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: allProjects[index - 1],
    next: allProjects[index + 1],
  };
};

export const projectYears = Array.from(
  new Set(allProjects.map((project) => project.year)),
).sort((a, b) => b - a);
