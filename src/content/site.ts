export const siteConfig = {
  name: "Jeff Kabera Githara",
  shortName: "JKG",
  wordmark: "Jeff Kabera Githara",
  role: "Web Developer & Software Engineer",
  location: "Nairobi, Kenya",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "jeffkaberagithara@gmail.com",
  cvPath: "/jeff-kabera-githara-cv.pdf",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://jeffkaberagitharaportfolio.onrender.com",
  description:
    "Jeff Kabera Githara is a web developer and software engineer in Nairobi, Kenya. Thoughtful interfaces, well-engineered systems — product work built to hold up under real use.",
  brand: {
    monogram: "JKG",
    tagline: "Thoughtful interfaces. Well-engineered systems.",
    positioning: "Architecting the future of the web.",
    promise: "Clarity in the interface. Rigour in the system.",
    mission:
      "To make complex digital work legible and trustworthy — designing interfaces people can read quickly, and engineering systems that hold up under real use.",
    vision:
      "To create meaningful digital ecosystems that elevate human experience.",
    pillars: [
      {
        number: "01",
        title: "Systemic excellence",
        body: "Engineered software solutions: durable architecture, clear data boundaries and decisions that survive contact with real use.",
      },
      {
        number: "02",
        title: "User-centric innovation",
        body: "Thoughtful, intuitive interfaces: hierarchy, language and states that help people understand what to do next.",
      },
      {
        number: "03",
        title: "Enduring impact",
        body: "Sustainable, future-proof design: systems that remain legible, maintainable and useful as the work grows.",
      },
    ],
    assets: {
      mark: "/brand/jkg-monogram.svg",
      markLight: "/brand/jkg-monogram-light.svg",
      strategy: "/brand/brand-strategy.jpg",
      applications: "/brand/brand-applications.jpg",
      explorations: "/brand/monogram-explorations.jpg",
    },
    palette: [
      { name: "Bone", value: "#F7F5EF" },
      { name: "Parchment", value: "#EFEBE2" },
      { name: "Sand", value: "#D8D2C4" },
      { name: "Warm grey", value: "#8D887E" },
      { name: "Copper", value: "#B87545" },
      { name: "Slate", value: "#2E4056" },
      { name: "Charcoal", value: "#1B1B19" },
      { name: "Gallery white", value: "#FFFFFF" },
    ],
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Journey", href: "/journey" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/jeffkaberagithara-guru",
      handle: "jeffkaberagithara-guru",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/kabera-githara-21067839b",
      handle: "kabera-githara",
    },
    {
      label: "X / Twitter",
      href: "https://twitter.com/JeffKaberaDev",
      handle: "@JeffKaberaDev",
    },
  ],
  tracks: [
    {
      id: "employment",
      number: "01",
      title: "Employment opportunities",
      description:
        "Full-time or contract roles in product engineering, frontend engineering or full-stack development, where thoughtful interfaces and solid systems both matter.",
      detail: "Roles, teams and long-term product work.",
    },
    {
      id: "freelance",
      number: "02",
      title: "Freelance product development",
      description:
        "Design and build engagements for businesses that need a considered website, product interface or internal tool — from first brief to working release.",
      detail: "Brand sites, product builds and focused delivery.",
    },
    {
      id: "collaboration",
      number: "03",
      title: "Collaboration & technical discussion",
      description:
        "Open-source contributions, design and engineering collaborations, code reviews, or a conversation about a problem worth solving.",
      detail: "Shared practice, critique and experiments.",
    },
  ],
} as const;

export type ContactTrack = (typeof siteConfig.tracks)[number]["id"];
