export const siteConfig = {
  name: "Jeff Kabera Githara",
  shortName: "Jeff Kabera",
  wordmark: "Jeff Kabera Githara",
  role: "Web Developer & Software Engineer",
  location: "Nairobi, Kenya",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "jeffkaberagithara@gmail.com",
  cvPath: "/jeff-kabera-githara-cv.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kabera-portfolio.onrender.com",
  description:
    "Jeff Kabera Githara is a web developer and software engineer in Nairobi, Kenya, building thoughtful interfaces and well-engineered systems.",
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
