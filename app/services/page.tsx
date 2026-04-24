"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"
import About from "../components/About"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Web Development",
    id: "web-development",
    tag: "01",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "We build high-performance websites and web applications using modern technologies like Next.js, React and scalable cloud infrastructure.",
    highlights: ["Next.js & React", "Cloud Infrastructure", "SEO Optimized"],
  },
  {
    title: "App Development",
    id: "app-development",
    tag: "02",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    description:
      "Custom mobile and web applications designed for performance, scalability and seamless user experiences.",
    highlights: ["Cross-Platform", "Scalable Architecture", "Seamless UX"],
  },
  {
    title: "E-Commerce Platform",
    id: "ecommerce-platform",
    tag: "03",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    description:
      "Powerful e-commerce platforms with secure payment systems, inventory management and beautiful modern UI.",
    highlights: ["Secure Payments", "Inventory Management", "Modern UI"],
  },
  {
    title: "AI Chatbot Platform",
    id: "ai-chatbot",
    tag: "04",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description:
      "AI-powered chatbots that automate customer support, improve engagement and reduce operational costs.",
    highlights: ["LLM Powered", "24/7 Automation", "Cost Reduction"],
  },
  {
    title: "SaaS Development",
    id: "saas-development",
    tag: "05",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description:
      "We build scalable SaaS platforms with authentication systems, dashboards and modern architecture.",
    highlights: ["Auth Systems", "Analytics Dashboards", "Subscription Ready"],
  },
  {
    title: "UI / UX Design",
    id: "ui-ux-design",
    tag: "06",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    description:
      "Beautiful user-centered design systems that create seamless digital experiences.",
    highlights: ["Design Systems", "User Research", "Prototyping"],
  },
  {
    title: "Digital Marketing",
    id: "digital-marketing",
    tag: "07",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description:
      "SEO, social media and marketing strategies that grow traffic, leads and revenue.",
    highlights: ["SEO & SEM", "Social Media", "Growth Strategy"],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-24 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-400/20 dark:bg-purple-700/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="animate-hero-badge text-sm uppercase tracking-[0.4em] text-purple-500 font-bold mb-5">
            What We Offer
          </p>
          <h1 className="animate-hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            Digital Solutions{" "}
            <span className="bg-gradient-to-br from-foreground to-foreground/60 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Built for the
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Modern World
            </span>
          </h1>
          <div className="animate-hero-divider w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <p className="animate-hero-body text-muted-foreground dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            At Zyntrix, we craft technology-powered solutions that help businesses,
            startups, and entrepreneurs grow, scale, and thrive in today&apos;s
            fast-moving digital landscape.
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO GRID (About component) ── */}
      <About />

      {/* ── DETAILED SERVICE SECTIONS ── */}
      <section className="max-w-6xl mx-auto px-6 pb-32 space-y-36 pt-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-32 grid md:grid-cols-2 gap-16 items-center group`}
            >
              {/* TEXT — alternates sides */}
              <div className={isEven ? "md:order-1" : "md:order-2"}>
                {/* Number tag */}
                <span className="text-xs font-bold tracking-[0.3em] text-purple-500/60 uppercase mb-4 block">
                  {service.tag} / {String(services.length).padStart(2, "0")}
                </span>

                <h2 className="text-4xl font-extrabold tracking-tight mb-5 bg-gradient-to-br from-foreground to-foreground/60 dark:from-white dark:to-gray-400 group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-white dark:group-hover:to-gray-400 bg-clip-text text-transparent transition-all duration-500">
                  {service.title}
                </h2>

                {/* Animated underline */}
                <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6 group-hover:w-24 dark:h-px dark:bg-none dark:bg-purple-500/50 dark:group-hover:bg-purple-500 dark:rounded-none transition-all duration-700 ease-out" />

                <p className="text-muted-foreground dark:text-gray-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 text-muted-foreground dark:text-gray-300 bg-white dark:bg-white/[0.03] shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:shadow-[0_5px_15px_rgba(168,85,247,0.15)] dark:group-hover:shadow-none transition-all duration-300 group-hover:-translate-y-1 dark:group-hover:translate-y-0"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1 dark:hover:translate-y-0"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* IMAGE */}
              <div className={`relative ${isEven ? "md:order-2" : "md:order-1"}`}>
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-purple-400/40 dark:bg-purple-600/10 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative h-80 rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/[0.07] group-hover:border-purple-500/30 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] group-hover:-translate-y-3 dark:group-hover:translate-y-0 group-hover:shadow-[0_40px_80px_rgba(168,85,247,0.15)] dark:group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-90 dark:opacity-75 group-hover:opacity-100 group-hover:scale-[1.08] dark:group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  />
                  {/* Theme-aware vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent dark:from-black/70 dark:via-black/20" />
                  {/* Purple tint on hover */}
                  <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply dark:mix-blend-color-dodge" />
                  {/* Watermark number */}
                  <span className="absolute bottom-4 right-5 text-7xl font-black text-black/5 dark:text-white/5 select-none pointer-events-none leading-none group-hover:-translate-y-2 dark:group-hover:translate-y-0 transition-transform duration-700">
                    {service.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA BANNER ── */}
      <section className="border-t border-black/5 dark:border-white/5 bg-background dark:bg-black py-24 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-purple-400/10 dark:bg-purple-700/5 blur-[120px] pointer-events-none animate-pulse dark:animate-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold mb-4">Let&apos;s Work Together</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/60 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 text-lg mb-10 leading-relaxed">
            Tell us your idea and we&apos;ll turn it into a powerful digital product that drives results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-purple-600 text-white font-bold text-lg hover:bg-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
