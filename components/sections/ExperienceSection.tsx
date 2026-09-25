"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { portfolioConfig } from "@/lib/config";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/40">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[7px]" />

          <ol className="space-y-12">
            {portfolioConfig.experience.map((job, i) => (
              <motion.li
                key={job.company + job.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {job.company}
                </p>
                <p className="mt-3 text-muted-foreground">
                  {job.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
