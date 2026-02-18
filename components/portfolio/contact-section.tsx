"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight, Loader2 } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("sending")
    // Simulate sending (replace with actual EmailJS / Netlify Forms integration)
    setTimeout(() => {
      setFormState("sent")
      setTimeout(() => setFormState("idle"), 3000)
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 font-mono text-sm text-primary">05. Contact</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Get In Touch</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {"I'm"} always open to discussing new projects, creative ideas, or opportunities to be
            part of your team. {"Let's"} build something great together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              // Netlify Forms (commented as requested)
              // name="contact"
              // method="POST"
              // data-netlify="true"
              // netlify-honeypot="bot-field"
            >
              {/* Honeypot for spam (Netlify) */}
              {/* <input type="hidden" name="form-name" value="contact" /> */}
              {/* <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p> */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono text-xs text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono text-xs text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block font-mono text-xs text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry"
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={formState !== "idle"}
                className="glow-cyan inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50"
              >
                {formState === "sending" && <Loader2 size={16} className="animate-spin" />}
                {formState === "sent" && "Message Sent!"}
                {formState === "idle" && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Direct Contact
              </p>

              <a
                href="mailto:keinerariasmorales@gmail.com"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    keinerariasmorales@gmail.com
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://wa.me/573206378581"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    +57 320 637 8581
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://github.com/Keiner2006"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Github size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    github.com/Keiner2006
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://linkedin.com/in/keiner-arias"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Linkedin size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/keiner-arias
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
