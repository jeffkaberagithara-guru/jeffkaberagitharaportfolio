export const capabilities = [
  {
    number: "01",
    title: "Product interfaces",
    description:
      "Interfaces that make a product's states legible: clear hierarchy, calm interaction, useful empty states and a visual language that holds together across screens.",
    details: [
      "Product discovery and interface structure",
      "Responsive layouts and interaction design",
      "Accessible forms and status messaging",
    ],
  },
  {
    number: "02",
    title: "Software engineering",
    description:
      "The application behind the interface: typed data contracts, server-side permissions, validation, persistence and the unglamorous work that makes a product trustworthy.",
    details: [
      "Next.js, React and TypeScript",
      "Node, NestJS and PostgreSQL",
      "Authentication, authorization and audit trails",
    ],
  },
  {
    number: "03",
    title: "Design systems",
    description:
      "A shared visual and technical vocabulary — tokens, typography, spacing, components and documentation — so a product can grow without drifting.",
    details: [
      "Token-led colour and type systems",
      "Reusable components and layout primitives",
      "Editorial art direction for content-led sites",
    ],
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Clarity before decoration",
    body: "A screen should explain itself before it impresses anyone. Hierarchy, naming and state come first; visual flourish earns its place afterwards.",
  },
  {
    number: "02",
    title: "The interface is the argument",
    body: "A product's claims are tested by its empty states, error messages, loading behaviour and what it refuses to pretend. Those details are the design.",
  },
  {
    number: "03",
    title: "Make the system visible",
    body: "Tokens, components and data models should be legible to the next person. Good systems reduce the number of things that can quietly disagree.",
  },
  {
    number: "04",
    title: "Build for the actual context",
    body: "Phone-first, low-bandwidth, mixed cash-and-digital, shared devices: the context is part of the brief, not an afterthought.",
  },
  {
    number: "05",
    title: "Say what is true",
    body: "A prototype is a prototype. A demo is a demo. A missing integration should be named. Trust is built by the boundaries a product is willing to show.",
  },
] as const;

export const toolkit = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Semantic HTML",
      "Accessibility",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
      "Supabase",
      "Zod",
    ],
  },
  {
    label: "Design",
    items: [
      "Interface design",
      "Design systems",
      "Editorial layout",
      "Typography",
      "Figma",
      "Prototyping",
    ],
  },
  {
    label: "Practice",
    items: [
      "Discovery",
      "Information architecture",
      "Testing",
      "Performance",
      "Documentation",
      "Code review",
    ],
  },
] as const;
