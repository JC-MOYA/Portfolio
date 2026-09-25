"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { portfolioConfig } from "@/lib/config";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-muted/40">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {portfolioConfig.skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold">{group.category}</h3>

              <div className="mt-6 space-y-5">
                {group.items.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 + i * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-2.5"
        >
          {portfolioConfig.techStack.map((tech) => (
            <Tag key={tech} className="text-sm">
              {tech}
            </Tag>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
