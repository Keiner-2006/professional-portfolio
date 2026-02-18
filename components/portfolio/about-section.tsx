"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

const techBadges = [
  "C#", ".NET 9", "ASP.NET Core", "React", "Angular", "TypeScript",
  "AWS S3", "Docker", "SQL Server", "Oracle", "JWT", "MCP",
  "Entity Framework", "Tailwind CSS", "DDD", "SOLID",
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-2 font-mono text-sm text-primary">01. About</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left column - Photo + quick stats */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >

            {/* Quick info cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm text-foreground">Valledupar, Colombia</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <GraduationCap size={16} className="text-primary" />
                <span className="text-sm text-foreground">
                  Systems Engineering - UPC
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <Briefcase size={16} className="text-primary" />
                <span className="text-sm text-foreground">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Bio + badges */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Full Stack Developer specializing in enterprise-grade applications
                with <span className="text-foreground font-medium">ASP.NET Core</span> and{" "}
                <span className="text-foreground font-medium">React/Angular</span>. I apply{" "}
                <span className="text-foreground font-medium">hexagonal architecture</span>,{" "}
                <span className="text-foreground font-medium">Domain-Driven Design (DDD)</span>,
                and <span className="text-foreground font-medium">SOLID principles</span> to
                build scalable, maintainable systems.
              </p>
              <p>
                Currently pioneering secure AI integration through the{" "}
                <span className="text-foreground font-medium">Model Context Protocol (MCP)</span>,
                enabling safe connections between Large Language Models and production APIs.
                My recent work with <span className="text-foreground font-medium">AWS S3</span>{" "}
                has expanded my cloud architecture capabilities.
              </p>
              <p>
                Pursuing my Systems Engineering degree at{" "}
                <span className="text-foreground font-medium">Universidad Popular del Cesar</span>{" "}
                (2022-2027), where I complement academic foundations with real-world project
                delivery using agile methodologies.
              </p>
            </div>

            {/* Tech badges */}
            <div className="mt-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, index) => (
                  <span
                    key={badge}
                    className={`inline-flex items-center rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${400 + index * 50}ms` : "0ms",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="mt-1 text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="text-2xl font-bold text-primary">4</p>
                <p className="mt-1 text-xs text-muted-foreground">Certifications</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="mt-1 text-xs text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
