"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Rocket, Layers, Coffee, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { portfolioConfig } from "@/lib/config";

const HIGHLIGHT_ICONS: Record<string, typeof Calendar> = {
  "Years of Experience": Calendar,
  "Projects Shipped": Rocket,
  Platforms: Layers,
  "Coffee per Day": Coffee,
};

function parseStatValue(value: string): { number: number | null; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: null, suffix: "" };
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

function HighlightCard({
  highlight,
  index,
}: {
  highlight: (typeof portfolioConfig.about.highlights)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = HIGHLIGHT_ICONS[highlight.label] ?? Sparkles;
  const { number, suffix } = parseStatValue(highlight.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard className="glass h-full rounded-2xl p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
        <Icon size={18} className="text-accent" />
        <div className="mt-3 text-3xl font-semibold tracking-tight">
          {number !== null ? (
            <AnimatedCounter
              value={number}
              suffix={suffix}
              trigger={isInView}
              duration={1.1}
            />
          ) : (
            highlight.value
          )}
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          {highlight.label}
        </div>
      </TiltCard>
    </motion.div>
  );
}

function ParagraphColumn({ paragraphs }: { paragraphs: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative space-y-5 pl-6">
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 top-0 w-px origin-top bg-gradient-to-b from-accent to-accent-2"
      />
      {paragraphs.map((paragraph, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="animate-glow-pulse absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-accent to-accent-2 blur-xl"
            />
            <div className="animate-float">
              <Avatar
                src={portfolioConfig.avatar}
                alt={portfolioConfig.name}
                size={128}
              />
            </div>
          </div>
        </motion.div>

        <SectionHeading eyebrow="About" title="Getting to know me" />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <ParagraphColumn paragraphs={portfolioConfig.about.paragraphs} />

          <div className="grid grid-cols-2 gap-4">
            {portfolioConfig.about.highlights.map((highlight, i) => (
              <HighlightCard key={highlight.label} highlight={highlight} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
