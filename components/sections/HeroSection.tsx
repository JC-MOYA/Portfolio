"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { portfolioConfig } from "@/lib/config";
import { Avatar } from "@/components/ui/Avatar";

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame: number;

    const isDark = () => !document.documentElement.classList.contains("light");

    const particleCount = 60;
    type Particle = { x: number; y: number; vx: number; vy: number };
    let particles: Particle[] = [];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      const dotColor = isDark() ? "rgba(34,211,238,0.55)" : "rgba(2,132,199,0.4)";
      const lineColor = isDark() ? "rgba(139,92,246,0.16)" : "rgba(2,132,199,0.08)";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 140) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(step);
    };

    resize();
    init();
    step();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 h-[26rem] w-[26rem] rounded-full bg-accent-2/20 blur-[110px]"
      />

      <ParticleNetwork />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Avatar
            src={portfolioConfig.avatar}
            alt={portfolioConfig.name}
            size={88}
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="prompt blink-cursor font-mono-label mb-4 text-sm font-medium text-accent"
        >
          {portfolioConfig.availability}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="whitespace-pre-line text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {portfolioConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {portfolioConfig.shortBio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="glow-on-hover rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Get in touch
          </a>

          <div className="ml-2 flex items-center gap-4">
            <a
              href={portfolioConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioConfig.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
