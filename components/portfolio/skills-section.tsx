"use client"

import { useEffect, useRef, useState } from "react"

interface SkillCategory {
  title: string
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "C#", level: 90 },
      { name: ".NET 9", level: 88 },
      { name: "ASP.NET Core", level: 90 },
      { name: "EF Core", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "JWT / OAuth", level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React (Vite)", level: 85 },
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML5/CSS3", level: 92 },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { name: "Hex Architecture", level: 85 },
      { name: "DDD", level: 82 },
      { name: "SOLID", level: 90 },
      { name: "MCP Protocol", level: 80 },
      { name: "Microservices", level: 78 },
      { name: "Clean Code", level: 90 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS S3", level: 78 },
      { name: "Docker", level: 75 },
      { name: "Git / GitHub", level: 92 },
      { name: "SQL Server", level: 88 },
      { name: "Oracle", level: 82 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
]

function SkillBar({
  name,
  level,
  isVisible,
  delay,
}: {
  name: string
  level: number
  isVisible: boolean
  delay: number
}) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-xs text-foreground transition-colors group-hover:text-primary">
          {name}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 font-mono text-sm text-primary">03. Skills</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Technical Arsenal</h2>
          <div className="mt-4 h-px w-16 bg-primary" />
        </div>

        {/* Skills grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                    delay={catIndex * 150 + skillIndex * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Tools & Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Docker", "GitHub", "Postman", "VS Code", "Azure DevOps", "Figma", "Jira"].map(
              (tool) => (
                <span
                  key={tool}
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
