import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay Cobb Andrew Moya — Portfolio",
  description:
    "Full-stack web & mobile developer crafting elegant digital experiences. Explore my projects, skills, and journey.",
  keywords: ["portfolio", "developer", "full-stack", "react", "next.js"],
  authors: [{ name: "Jay Cobb Andrew Moya" }],
  openGraph: {
    title: "Jay Cobb Andrew Moya — Portfolio",
    description: "Full-stack web & mobile developer crafting elegant digital experiences.",
    type: "website",
  },
};

const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
