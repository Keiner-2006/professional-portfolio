"use client"

import { useEffect, useState } from "react"
import { Github, ArrowDown, FileText } from "lucide-react"

const roles = [
  "Full Stack Developer",
  "Secure AI Integration",
  "Cloud Architecture",
  ".NET Core Specialist",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const fullText = roles[currentRole]

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="grid-pattern absolute inset-0 opacity-30" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.15_200_/_0.08)_0%,transparent_70%)]" />

      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
          <span className="text-balance">Keiner David</span>
          <br />
          <span className="text-primary">Arias Morales</span>
        </h1>

        {/* Typewriter role */}
        <div className="mb-6 flex h-8 items-center justify-center font-mono text-base text-muted-foreground sm:text-lg">
          <span className="text-primary/60">{">"}</span>
          <span className="ml-2">{displayText}</span>
          <span className="typewriter-cursor ml-0.5">&nbsp;</span>
        </div>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
          Architecting enterprise applications with{" "}
          <span className="font-medium text-foreground">ASP.NET Core</span>,{" "}
          <span className="font-medium text-foreground">React/Angular</span>, and{" "}
          <span className="font-medium text-foreground">AWS</span>. Pioneering secure AI
          integration through{" "}
          <span className="font-medium text-foreground">MCP protocol</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/Keiner2006"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-cyan inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            <Github size={16} />
            View GitHub
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            <FileText size={16} />
            View Projects
          </a>

          {/* Deploy to Netlify - Commented out as requested */}
          {/* <a
            href="https://app.netlify.com/start/deploy?repository=https://github.com/Keiner2006/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
              <path d="M170.3 131.5l-43.1 43.1-22.6-22.6 43.1-43.1 22.6 22.6z"/>
            </svg>
            Deploy to Netlify
          </a> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={20} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
