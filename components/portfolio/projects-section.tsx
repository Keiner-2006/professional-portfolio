"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, TrendingDown, TrendingUp, Zap, Shield } from "lucide-react"

interface Project {
  title: string
  subtitle: string
  year: string
  description: string
  image: string
  tech: string[]
  metrics: { label: string; value: string; icon: typeof TrendingUp }[]
  highlights: string[]
  github?: string
}

const projects: Project[] = [
  {
    title: "Ferreteria E-commerce",
    subtitle: "AI-Powered Hardware Store Platform",
    year: "2026",
    description:
      "Full-stack e-commerce platform with ASP.NET Core (DDD, SOLID) and React/Angular under hexagonal architecture. Integrated Gemini 2.5 AI via MCP for real-time inventory recommendations.",
    image: "/images/mockup-ferreteria.svg",
    tech: ["ASP.NET Core", "React", "Angular", "MCP", "Gemini 2.5", "JWT", "DDD"],
    metrics: [
      { label: "Error Reduction", value: "-30%", icon: TrendingDown },
      { label: "AI Accuracy", value: "95%", icon: Zap },
    ],
    highlights: [
      "RESTful APIs with JWT authentication",
      "AI-powered inventory recommendations via MCP",
      "Hexagonal architecture with DDD patterns",
    ],
  },
  {
    title: "FisioTrack SaaS",
    subtitle: "Clinical Management Platform",
    year: "Oct 2025",
    description:
      "Multi-tenant SaaS platform for physiotherapy clinics. ASP.NET Core + React with JWT multi-role auth and Oracle optimized with triggers/stored procedures.",
    image: "/images/mockup-fisiotrack.svg",
    tech: ["ASP.NET Core", "React", "Oracle", "JWT", "T-SQL", "Multi-tenant"],
    metrics: [
      { label: "Query Performance", value: "+40%", icon: TrendingUp },
      { label: "Multi-tenant", value: "Yes", icon: Shield },
    ],
    highlights: [
      "JWT multi-role authentication system",
      "Oracle optimized with triggers and procedures",
      "Service-oriented scalable architecture",
    ],
  },
  {
    title: "MCP Development",
    subtitle: "Secure AI Protocol Bridge",
    year: "2026",
    description:
      "Custom MCP (Model Context Protocol) implementations in TypeScript enabling secure connections between LLMs (Antigravity/Open Claude) and .NET APIs with standardized interfaces.",
    image: "/images/mockup-mcp.svg",
    tech: ["TypeScript", "MCP", "LLMs", ".NET APIs", "Security"],
    metrics: [
      { label: "Security", value: "E2E", icon: Shield },
      { label: "Interoperability", value: "100%", icon: Zap },
    ],
    highlights: [
      "Standardized interfaces for LLM-to-API communication",
      "End-to-end security for distributed systems",
      "Interoperable across multiple AI providers",
    ],
  },
  {
    title: "ToolTime",
    subtitle: "Inventory Management System",
    year: "May 2025",
    description:
      "Desktop inventory management application built with C# .NET Windows Forms. Features real-world validations, dynamic rate calculations, and version control with Git.",
    image: "/images/mockup-tooltime.svg",
    tech: ["C#", ".NET", "Windows Forms", "Git", "SQL Server"],
    metrics: [
      { label: "Validation", value: "Real-time", icon: Zap },
      { label: "Rate Calc", value: "Dynamic", icon: TrendingUp },
    ],
    highlights: [
      "Real-world business validations",
      "Dynamic rate and tariff calculations",
      "Git version control workflow",
    ],
  },
]

function MockupFrame({ image, title }: { image: string; title: string }) {
  return (
    <div className="mockup-frame group relative overflow-hidden rounded-xl border border-border bg-card">
      {/* Figma-style browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/40" />
          <div className="h-2.5 w-2.5 rounded-full bg-chart-4/40" />
          <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        </div>
        <div className="flex-1 rounded-md bg-background/50 px-3 py-1 text-center">
          <span className="font-mono text-[10px] text-muted-foreground">
            {title.toLowerCase().replace(/\s+/g, "-")}.app
          </span>
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`${title} mockup screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className={`grid gap-8 lg:grid-cols-2 lg:gap-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Mockup - alternates left/right */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <MockupFrame image={project.image} title={project.title} />
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
        {/* Year tag */}
        <div className="mb-3 inline-flex w-fit items-center gap-2">
          <span className="font-mono text-xs text-primary">{project.year}</span>
          <span className="h-px w-8 bg-border" />
        </div>

        <h3 className="mb-1 text-2xl font-bold text-foreground">{project.title}</h3>
        <p className="mb-4 text-sm text-primary">{project.subtitle}</p>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mb-6 flex gap-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2"
            >
              <metric.icon size={14} className="text-primary" />
              <div>
                <p className="font-mono text-sm font-bold text-foreground">{metric.value}</p>
                <p className="text-[10px] text-muted-foreground">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <ul className="mb-6 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-secondary/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        {project.github && (
          <div className="mt-6 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={14} />
              Source
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-20 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-2 font-mono text-sm text-primary">02. Projects</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Work</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
