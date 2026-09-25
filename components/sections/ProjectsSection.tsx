"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";
import { portfolioConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const PLATFORM_ICONS: Record<string, typeof Globe> = {
  Web: Globe,
  Android: Smartphone,
  iOS: Smartphone,
};

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

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Products I've built and shipped end to end."
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

        {featuredProjects.length > 0 && (
          <div className="mt-12 space-y-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <TiltCard className="overflow-hidden rounded-3xl border border-border glow-on-hover">
                  <div className="grid lg:grid-cols-2">
                    <div
                      className={cn(
                        "relative flex min-h-[220px] items-center justify-center bg-gradient-to-br p-10",
                        project.gradient
                      )}
                    >
                      {project.image ? (
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <span
                          className="font-display text-4xl font-bold tracking-tight"
                          style={{ color: project.accentColor }}
                        >
                          {project.title}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col justify-center p-8 sm:p-10">
                      <span className="font-mono-label text-xs font-medium uppercase tracking-wider text-accent">
                        Featured Project
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => {
                          const Icon = PLATFORM_ICONS[tag];
                          return (
                            <span
                              key={tag}
                              className="font-mono-label inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                            >
                              {Icon && <Icon size={12} />}
                              {tag}
                            </span>
                          );
                        })}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-on-hover inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                          >
                            Live Demo
                            <ExternalLink size={15} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                          >
                            <Github size={15} />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <motion.div
            layout
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-xl">
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
                          className="font-display text-2xl font-semibold tracking-tight"
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
                          <Tag key={tag} className="font-mono-label">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
