"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "%",
  duration = 1,
  trigger,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  /** Optional external trigger (e.g. from a parent's useInView). Falls back to tracking its own visibility if omitted. */
  trigger?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewInternal = useInView(ref, { once: true, margin: "-80px" });
  const isInView = trigger !== undefined ? trigger : inViewInternal;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
