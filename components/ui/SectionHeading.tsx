"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className="prompt font-mono-label text-sm font-medium uppercase tracking-wider text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            "mt-4 text-lg text-muted-foreground " +
            (align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")
          }
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
