import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Keiner Arias | Full Stack Developer",
  description:
    "Full Stack Developer specializing in ASP.NET Core, React/Angular, AWS, and secure AI integration via MCP. Building enterprise-grade applications with hexagonal architecture, DDD, and SOLID principles.",
  keywords: [
    "Full Stack Developer",
    "ASP.NET Core",
    "React",
    "Angular",
    "AWS",
    "MCP",
    "C#",
    ".NET",
    "TypeScript",
    "Docker",
    "DDD",
    "SOLID",
  ],
  authors: [{ name: "Keiner David Arias Morales" }],
  creator: "Keiner David Arias Morales",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Keiner Arias | Full Stack Developer",
    description:
      "Full Stack Developer specializing in enterprise applications with ASP.NET Core, React/Angular, AWS, and secure AI via MCP.",
    siteName: "Keiner Arias Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keiner Arias | Full Stack Developer",
    description:
      "Full Stack Developer specializing in enterprise applications with ASP.NET Core, React/Angular, AWS, and secure AI via MCP.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
