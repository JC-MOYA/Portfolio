"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsDark(!document.documentElement.classList.contains("light"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("light", !next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable, theme just won't persist
    }
  };

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
