"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioConfig } from "@/lib/config";

const SOCIAL_LINKS = [
  { label: "GitHub", href: portfolioConfig.social.github, icon: Github },
  { label: "LinkedIn", href: portfolioConfig.social.linkedin, icon: Linkedin },
  { label: "Twitter", href: portfolioConfig.social.twitter, icon: Twitter },
].filter((link) => link.href);

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"), // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-8"
        >
          <a
            href={`mailto:${portfolioConfig.email}`}
            className="gradient-text-accent text-2xl font-semibold tracking-tight transition-opacity hover:opacity-80 sm:text-3xl"
          >
            {portfolioConfig.email}
          </a>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} />
            {portfolioConfig.location}
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass w-full rounded-2xl p-6 text-left sm:p-8"
          >
            {/* Honeypot field — hidden from real users, bots tend to fill every input */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent disabled:opacity-60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent disabled:opacity-60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={5}
                disabled={status === "loading"}
                className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent disabled:opacity-60"
                placeholder="Tell me a bit about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail size={16} />
                  Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-500">
                <CheckCircle2 size={16} />
                Thanks! Your message has been sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle size={16} />
                {errorMessage}
              </p>
            )}
          </form>

          <div className="flex items-center gap-5 pt-2">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
