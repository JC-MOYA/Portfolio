"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  size = 96,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn(
        "rounded-full object-cover ring-2 ring-accent/30",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}
