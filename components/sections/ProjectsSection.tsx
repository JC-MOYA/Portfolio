"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { portfolioConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(portfolioConfig.projects.map((project) => project.category))
      ),
    ],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioConfig.projects
        : portfolioConfig.projects.filter(
            (project) => project.category === activeCategory
          ),
    [activeCategory]
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of products, tools, and open-source work I've shipped."
        />

        {categories.length > 2 && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:bg-muted"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {project.image ? (
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      "flex h-44 items-center justify-center bg-gradient-to-br",
                      project.gradient
                    )}
                  >
                    <span
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: project.accentColor }}
                    >
                      {project.title}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <div className="flex shrink-0 gap-3 pt-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repo`}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live site`}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
