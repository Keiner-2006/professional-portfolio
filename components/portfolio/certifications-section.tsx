"use client"

import { useEffect, useRef, useState } from "react"
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

interface Certification {
  title: string
  issuer: string
  year: string
  badge: string
  description: string
  featured?: boolean
  fileUrl: string
}

const certifications: Certification[] = [
  {
    title: "Introduction to Amazon S3",
    issuer: "AWS Training",
    year: "2026",
    badge: "aws",
    description: "Certificación en fundamentos de almacenamiento en la nube con Amazon S3.",
    featured: true,
    fileUrl: "/certificates/AWS S3 introduccion.jpeg",
  },
  {
    title: "Java Foundations",
    issuer: "Oracle Academy",
    year: "2024",
    badge: "oracle",
    description: "Dominio de conceptos fundamentales de Java, POO y estructuras de datos.",
    fileUrl: "/certificates/CertificadoJava.pdf",
  },
  {
    title: "SOLID Principles in C# and .NET",
    issuer: "Platzi",
    year: "2025",
    badge: "platzi",
    description: "Principios de diseño de software aplicados al ecosistema .NET.",
    fileUrl: "/certificates/diploma-solid-csharp-net.pdf",
  },
  {
    title: "AI Development Initiation",
    issuer: "BIG School",
    year: "2025",
    badge: "bigschool",
    description: "Iniciación en el desarrollo de soluciones integrando Inteligencia Artificial.",
    fileUrl: "/certificates/Certificado Desarrolo Con IA.pdf",
  },
  {
    title: "Desarrollo Web Responsivo",
    issuer: "Google / FreeCodeCamp",
    year: "2024",
    badge: "freecodecamp",
    description: "Diseño de interfaces web modernas y adaptables a cualquier dispositivo.",
    fileUrl: "/certificates/Certificado desarrollo web responsivo.pdf",
  },
  {
    title: "Docker Certification",
    issuer: "Docker",
    year: "2024",
    badge: "docker",
    description: "Contenerización de aplicaciones y gestión de entornos de desarrollo.",
    fileUrl: "/certificates/Docker.pdf",
  },
  {
    title: "Google Gemini AI",
    issuer: "Google",
    year: "2025",
    badge: "google",
    description: "Exploración y aplicación de modelos Gemini en el desarrollo de software.",
    fileUrl: "/certificates/Gemini.pdf",
  },
  {
    title: "Front-End Development with React",
    issuer: "Meta / Platzi",
    year: "2024",
    badge: "react",
    description: "Desarrollo de componentes modernos y gestión de estado con React.",
    fileUrl: "/certificates/Front-End (React).png",
  },
  {
    title: "Node.js Backend Development",
    issuer: "Platzi",
    year: "2024",
    badge: "node",
    description: "Construcción de APIs escalables y servicios de backend con Node.js.",
    fileUrl: "/certificates/Node.png",
  },
  {
    title: "Python Programming",
    issuer: "Python Institute",
    year: "2023",
    badge: "python",
    description: "Fundamentos de programación y automatización con Python.",
    fileUrl: "/certificates/Phyton.png",
  },
  {
    title: "Modern CSS & Layouts",
    issuer: "Frontend Masters",
    year: "2023",
    badge: "css",
    description: "Dominio de Flexbox, Grid y animaciones avanzadas con CSS.",
    fileUrl: "/certificates/Css.png",
  },
]

const badgeColors: Record<string, string> = {
  aws: "from-[#ff9900]/20 to-[#ff9900]/5 text-[#ff9900] border-[#ff9900]/20",
  oracle: "from-[#f80000]/20 to-[#f80000]/5 text-[#f80000] border-[#f80000]/20",
  platzi: "from-[#00bfd6]/20 to-[#00bfd6]/5 text-[#00bfd6] border-[#00bfd6]/20",
  bigschool: "from-[#8b5cf6]/20 to-[#8b5cf6]/5 text-[#8b5cf6] border-[#8b5cf6]/20",
  google: "from-[#4285F4]/20 to-[#4285F4]/5 text-[#4285F4] border-[#4285F4]/20",
  docker: "from-[#2496ED]/20 to-[#2496ED]/5 text-[#2496ED] border-[#2496ED]/20",
  react: "from-[#61DAFB]/20 to-[#61DAFB]/5 text-[#61DAFB] border-[#61DAFB]/20",
  node: "from-[#339933]/20 to-[#339933]/5 text-[#339933] border-[#339933]/20",
  python: "from-[#3776AB]/20 to-[#3776AB]/5 text-[#3776AB] border-[#3776AB]/20",
  css: "from-[#1572B6]/20 to-[#1572B6]/5 text-[#1572B6] border-[#1572B6]/20",
  freecodecamp: "from-[#0a0a23]/20 to-[#0a0a23]/5 text-[#0a0a23] border-[#0a0a23]/20",
}

export function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

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

  const scrollTo = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, certifications.length - 1))
    setActiveIndex(newIndex)
    if (scrollRef.current) {
      const child = scrollRef.current.children[newIndex] as HTMLElement
      if (child) {
        scrollRef.current.scrollTo({
          left: child.offsetLeft - 24,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <section id="certifications" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex items-end justify-between transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div>
            <p className="mb-2 font-mono text-sm text-primary">04. Certifications</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Credentials</h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </div>
          {/* Navigation arrows */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30"
              aria-label="Previous certification"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex === certifications.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30"
              aria-label="Next certification"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal scrolling carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group min-w-[300px] max-w-[340px] flex-shrink-0 snap-start rounded-xl border bg-card p-6 transition-all duration-500 hover:border-primary/30 ${cert.featured ? "border-primary/20" : "border-border"
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge + Featured tag */}
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border bg-gradient-to-br ${badgeColors[cert.badge]}`}
                >
                  <Award size={18} />
                </div>
                {cert.featured && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-primary">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="mb-1 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                {cert.description}
              </p>

              {/* View link */}
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink size={12} />
                Ver credencial
              </a>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
