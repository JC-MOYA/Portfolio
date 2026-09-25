import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sf)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sf)"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-foreground": "var(--accent-foreground)",
        card: "var(--card)",
        "card-border": "var(--card-border)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
