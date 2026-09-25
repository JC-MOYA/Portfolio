"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Marquee } from "@/components/ui/Marquee";
import { portfolioConfig } from "@/lib/config";

const midpoint = Math.ceil(portfolioConfig.techStack.length / 2);
const techRowOne = portfolioConfig.techStack.slice(0, midpoint);
const techRowTwo = portfolioConfig.techStack.slice(midpoint);

function SkillCard({
  group,
  groupIndex,
}: {
  group: (typeof portfolioConfig.skills)[number];
  groupIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
    >
      <TiltCard className="glass h-full rounded-2xl p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
        <h3 className="text-base font-semibold">{group.category}</h3>

        <div className="mt-6 space-y-5">
          {group.items.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <AnimatedCounter
                  value={skill.level}
                  trigger={isInView}
                  duration={0.9 + i * 0.05}
                  className="font-mono-label text-muted-foreground"
                />
              </div>
              <div className="relative h-1.5 overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: skill.level / 100 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="relative h-full w-full origin-left rounded-full bg-gradient-to-r from-accent to-accent-2"
                >
                  <span className="glow-dot absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-2" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-muted/40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-2/10 blur-[120px]"
      />

      <div className="container relative">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {portfolioConfig.skills.map((group, groupIndex) => (
            <SkillCard key={group.category} group={group} groupIndex={groupIndex} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 space-y-3"
        >
          <Marquee items={techRowOne} />
          <Marquee items={techRowTwo} reverse />
        </motion.div>
      </div>
    </section>
  );
}
