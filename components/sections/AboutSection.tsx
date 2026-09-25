"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioConfig } from "@/lib/config";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionHeading eyebrow="About" title="Getting to know me" />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {portfolioConfig.about.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {portfolioConfig.about.highlights.map((highlight, i) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl font-semibold tracking-tight">
                  {highlight.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
