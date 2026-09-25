// ============================================================
// PORTFOLIO CONFIGURATION
// Update this file to personalize your portfolio
// ============================================================

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
  featured: boolean;
  gradient: string;
  accentColor: string;
  image?: string;
}

export const portfolioConfig = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Jay Cobb Andrew Moya",
  title: "Full-Stack Web & Mobile Developer",
  tagline: "I build products that\nlive at the intersection of\ndesign and engineering.",
  shortBio:
    "Full-stack developer with 2 years of experience building web and mobile applications. Currently open to exciting opportunities.",
  email: "jaycobb1901@gmail.com",
  location: "Negros Occidental, Philippines",
  availability: "Open to opportunities",

  // ── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/JC-MOYA",
    linkedin: "https://www.linkedin.com/in/jay-cobb-andrew-moya-30a689368/",
    twitter: "",
    resume: "/resume.pdf",
  },

  // ── About ──────────────────────────────────────────────────
  about: {
    paragraphs: [
      "I'm a full-stack developer with 2 years of experience building web and mobile applications. I care deeply about the craft — from clean architecture to pixel-perfect interfaces.",
      "When I'm not coding, I'm exploring design systems, contributing to open-source, or experimenting with new technologies. I believe great software is a blend of technical excellence and thoughtful design.",
      "I've worked across web and mobile platforms, shipping products end to end from backend APIs to polished front-end and app experiences.",
    ],
    highlights: [
      { label: "Years of Experience", value: "2+" },
      { label: "Projects Shipped", value: "10+" },
      { label: "Platforms", value: "Web & Mobile" },
      { label: "Coffee per Day", value: "3☕" },
    ],
  },

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Framer Motion", level: 80 },
        { name: "Vue.js", level: 70 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js / Express", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Python / FastAPI", level: 78 },
        { name: "Redis", level: 72 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Docker / Kubernetes", level: 80 },
        { name: "AWS / GCP", level: 75 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 70 },
      ],
    },
  ],

  // ── Tech Stack (icon cloud) ────────────────────────────────
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "GraphQL",
    "Tailwind",
    "Git",
    "Figma",
    "Vercel",
    "Linux",
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      company: "Prominent Outsource",
      role: "Front-end Developer",
      period: "Present",
      description:
        "Working as a Front-end Developer, building and maintaining user-facing web interfaces.",
      technologies: [] as string[],
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "MyTaskOwl",
      description:
        "A task management app available as a web app and native mobile apps for Android and iOS.",
      longDescription:
        "MyTaskOwl helps people organize and track their day-to-day tasks, built as a responsive web app alongside native Android and iOS apps for task management on the go.",
      tags: ["Web", "Android", "iOS"],
      category: "Full-Stack",
      github: "",
      live: "https://app.mytaskowl.com/",
      featured: true,
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "#0071e3",
    },
  ] as Project[],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      institution: "University of Negros Occidental - Recoletos",
      degree: "",
      period: "",
      description: "",
    },
  ],

  // ── Certifications ─────────────────────────────────────────
  certifications: [] as { name: string; year: string }[],
};
