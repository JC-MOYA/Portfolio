import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/lib/config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://jaycobbmoya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jay Cobb Andrew Moya — Full-Stack Web & Mobile Developer",
  description:
    "Full-stack web & mobile developer building products end to end — from backend APIs to polished web and native app experiences.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "react",
    "next.js",
    "mobile developer",
    "Jay Cobb Andrew Moya",
  ],
  authors: [{ name: "Jay Cobb Andrew Moya" }],
  openGraph: {
    title: "Jay Cobb Andrew Moya — Full-Stack Web & Mobile Developer",
    description:
      "Full-stack web & mobile developer building products end to end — from backend APIs to polished web and native app experiences.",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Cobb Andrew Moya — Full-Stack Web & Mobile Developer",
    description:
      "Full-stack web & mobile developer building products end to end.",
  },
};

const themeInitScript = `
(function() {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioConfig.name,
  jobTitle: portfolioConfig.title,
  url: SITE_URL,
  email: portfolioConfig.email,
  sameAs: [portfolioConfig.social.github, portfolioConfig.social.linkedin].filter(
    Boolean
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
