"use client";

import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { portfolioConfig } from "@/lib/config";

const SOCIAL_LINKS = [
  { label: "GitHub", href: portfolioConfig.social.github, icon: Github },
  { label: "LinkedIn", href: portfolioConfig.social.linkedin, icon: Linkedin },
  { label: "Twitter", href: portfolioConfig.social.twitter, icon: Twitter },
].filter((link) => link.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {portfolioConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <a
          href="#"
          aria-label="Back to top"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
