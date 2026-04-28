"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "AI", "Commerce", "SaaS", "Marketing", "Web3"];

const PROJECTS = [
  {
    id: 1,
    title: "OpenAI Core",
    category: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Sonos E-Commerce",
    category: "Commerce",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Stripe Global Dashboard",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Vercel Analytics Marketing",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "Nike Composable",
    category: "Commerce",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 6,
    title: "Anthropic Claude",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 7,
    title: "Ethereum Foundation",
    category: "Web3",
    image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 8,
    title: "Linear Application",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 9,
    title: "Notion Marketing",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-20 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-400/20 dark:bg-purple-700/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="animate-hero-badge text-sm uppercase tracking-[0.4em] text-purple-500 font-bold mb-5">
            Our Work
          </p>
          <h1 className="animate-hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            <span className="bg-gradient-to-br from-foreground to-foreground/60 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Projects That
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Define Excellence
            </span>
          </h1>
          <div className="animate-hero-divider w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <p className="animate-hero-body text-muted-foreground dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            A curated selection of digital products we&apos;ve built — from AI platforms to
            global commerce experiences. Each project, a story of ambition turned into reality.
          </p>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ── */}
      <div className="sticky top-[72px] z-40 bg-background/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/[0.06] py-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-2 flex-wrap">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "bg-black/[0.04] dark:bg-white/[0.04] text-muted-foreground/60 dark:text-gray-400 border border-black/5 dark:border-white/[0.08] hover:text-purple-600 dark:hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PROJECT CARDS (original layout) ── */}
      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <a key={project.id} href={project.link} className="h-full flex outline-none">
              <Card
                className="w-full group overflow-hidden bg-white dark:bg-card/5 border border-black/5 dark:border-transparent shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 flex flex-col"
                style={{ height: "310px" }}
              >
                <CardContent className="p-0 border-b border-black/10 dark:border-white/10 flex-none" style={{ height: "220px" }}>
                  <div className="w-full overflow-hidden shrink-0" style={{ height: "220px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="block w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ height: "220px" }}
                    />
                  </div>
                </CardContent>
                <CardFooter
                  className="relative p-5 flex items-center justify-between flex-none overflow-hidden bg-muted/30 dark:bg-muted"
                  style={{ height: "90px" }}
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <h3 className="text-base font-semibold text-foreground tracking-tight line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="text-foreground transform -translate-x-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-600">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </main>

      {/* ── CTA BANNER ── */}
      <section className="border-t border-black/5 dark:border-white/5 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 dark:bg-purple-700/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-500 font-bold mb-4">
            Start Your Project
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/60 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Let&apos;s Build Your Next Big Thing
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 text-lg mb-10 leading-relaxed">
            Have an idea? We&apos;ll turn it into a powerful digital product that stands out.
          </p>
          <Link
            href="/ContactUs#connect"
            className="btn btn-outline hover-shimmer gap-2"
          >
            Start a Conversation
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
