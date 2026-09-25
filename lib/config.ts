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
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const portfolioConfig = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Jay Cobb Andrew Moya",
  title: "Full-Stack Web & Mobile Developer",
  avatar: "/avatar.jpeg",
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
      { label: "Projects Shipped", value: "1" },
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
        { name: "Angular", level: 80 },
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
        { name: "PHP", level: 70 },
        { name: "Laravel", level: 60 },
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
        { name: "Claude Code (AI-assisted dev)", level: 90 },
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
    "Claude Code",
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      company: "Prominent Outsource",
      role: "Front-end Developer",
      period: "Present",
      description:
        "Working as a Front-end Developer, building and maintaining user-facing interfaces across web and native mobile apps for Android and iOS. Using AI-assisted tools like Claude Code to automate repetitive tasks, speed up development, and debug issues through prompt-driven workflows.",
      technologies: ["Web", "Android", "iOS", "Claude Code"] as string[],
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "MyTaskOwl",
      description:
        "A task management web app for organizing and tracking day-to-day work, built end to end.",
      longDescription:
        "MyTaskOwl's web app helps people organize and track their day-to-day tasks — built responsive, from backend APIs to a polished front-end experience.",
      tags: ["Web"],
      category: "Web",
      github: "",
      live: "https://app.mytaskowl.com/",
      featured: true,
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "#0071e3",
      image: "/mytaskowl-preview.png",
    },
    {
      title: "MyTaskOwl Mobile",
      description:
        "The native mobile companion app for MyTaskOwl — task management, time tracking, and team collaboration on the go.",
      longDescription:
        "MyTaskOwl Mobile is the mobile extension of the MyTaskOwl platform, built natively for iOS (with an Android app too) with time tracking, project boards, and team collaboration features.",
      tags: ["iOS", "Android"],
      category: "Mobile",
      github: "",
      live: "",
      featured: true,
      gradient: "from-violet-500/20 to-indigo-500/20",
      accentColor: "#8b5cf6",
      image: "/mytaskowl-mobile-preview.png",
      appStoreUrl:
        "https://apps.apple.com/ph/app/mytaskowl-mobile/id6762628862",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.mytaskowl.mytaskowl",
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
