"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  size = 96,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className={cn(
        "rounded-full object-cover ring-2 ring-accent/30",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}
