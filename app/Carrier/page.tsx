"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  HeartHandshake,
  Layers3,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

import Footer from "../components/Footer";

const openings = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Kerala / Remote",
    description:
      "Build polished, high-performance interfaces with React, Next.js, and strong product thinking.",
    responsibilities: [
      "Develop and maintain responsive web UIs using React and Next.js.",
      "Collaborate with designers to translate Figma designs into pixel-perfect interfaces.",
      "Write clean, reusable, and well-documented component code.",
      "Optimize applications for speed, SEO and core web vitals.",
      "Participate in code reviews and contribute to technical decisions.",
    ],
    requirements: [
      "1+ years of hands-on experience with React / Next.js.",
      "Solid understanding of HTML, CSS (Tailwind preferred), and JavaScript/TypeScript.",
      "Familiarity with RESTful APIs and state management patterns.",
      "Ability to work independently and communicate progress clearly.",
    ],
    niceToHave: [
      "Experience with animations (Framer Motion, GSAP).",
      "Familiarity with CMS tools (Sanity, Contentful).",
      "Portfolio or GitHub with live projects.",
    ],
  },
  {
    title: "UI / UX Designer",
    type: "Full-time",
    location: "Remote Friendly",
    description:
      "Shape flows, wireframes, and visual systems that turn complex ideas into clear experiences.",
    responsibilities: [
      "Design end-to-end user flows, wireframes, and high-fidelity prototypes in Figma.",
      "Define and maintain a consistent design system across multiple products.",
      "Conduct feedback sessions and iterate based on real user insights.",
      "Collaborate closely with developers to ensure design integrity during implementation.",
      "Contribute to brand direction and visual language decisions.",
    ],
    requirements: [
      "Strong portfolio demonstrating UI/UX work across web or mobile products.",
      "Proficiency in Figma and component-based design systems.",
      "Understanding of accessibility standards and responsive design.",
      "Clear communication skills and ability to articulate design rationale.",
    ],
    niceToHave: [
      "Experience working with development teams in an Agile environment.",
      "Knowledge of micro-interactions and motion design.",
      "Familiarity with user testing tools (Maze, Hotjar).",
    ],
  },
  {
    title: "Digital Marketing Strategist",
    type: "Full-time",
    location: "Kerala",
    description:
      "Plan campaigns, grow visibility, and help brands convert attention into measurable business results.",
    responsibilities: [
      "Plan and execute multi-channel digital marketing campaigns (SEO, SEM, social, email).",
      "Analyse performance data and produce actionable insights and reports.",
      "Manage and grow clients' social media presence and content calendars.",
      "Coordinate with design and content teams to produce campaign assets.",
      "Identify growth opportunities and run structured A/B experiments.",
    ],
    requirements: [
      "2+ years in digital marketing with proven campaign results.",
      "Hands-on experience with Google Ads, Meta Ads, and SEO tools.",
      "Strong analytical mindset with comfort reading data in GA4 or similar.",
      "Excellent written communication skills in English.",
    ],
    niceToHave: [
      "Experience with marketing automation platforms.",
      "Knowledge of personal branding and LinkedIn growth strategies.",
      "Certification in Google Analytics or similar.",
    ],
  },
  {
    title: "Product Intern",
    type: "Internship",
    location: "Hybrid",
    description:
      "Work across design, delivery, and research while learning how digital products are built end to end.",
    responsibilities: [
      "Assist in defining product requirements and user stories.",
      "Support the team with research, competitor benchmarking, and user feedback analysis.",
      "Participate in sprint planning, standups, and retrospectives.",
      "Help maintain project documentation, roadmaps, and task tracking.",
      "Contribute ideas and flag risks or observations proactively.",
    ],
    requirements: [
      "Currently enrolled in or recently graduated from a relevant program.",
      "Genuine curiosity about how digital products are built.",
      "Good written and verbal communication skills.",
      "Organized and self-driven with an ability to manage your own tasks.",
    ],
    niceToHave: [
      "Prior exposure to product, design, or tech through coursework or side projects.",
      "Familiarity with tools like Notion, Linear, or Figma.",
      "A personal project or case study you can walk us through.",
    ],
  },
];

const reasonsToJoin = [
  {
    title: "Meaningful Work",
    description: "We build products and services that solve real business problems, not filler work.",
    icon: Rocket,
  },
  {
    title: "Growth Mindset",
    description: "You get room to learn, ship, experiment, and keep leveling up with supportive teammates.",
    icon: Sparkles,
  },
  {
    title: "Collaborative Culture",
    description: "Designers, developers, and strategists work closely together with clarity and mutual respect.",
    icon: Users,
  },
  {
    title: "Flexible Rhythm",
    description: "We value focus, ownership, and sustainable pace over performative hustle.",
    icon: Clock3,
  },
];

const values = [
  {
    title: "Build With Care",
    description: "We sweat the details and care about the experience behind every interaction.",
    icon: HeartHandshake,
  },
  {
    title: "Think Beyond Tasks",
    description: "We value people who connect execution to product impact and business outcomes.",
    icon: Compass,
  },
  {
    title: "Learn in Public",
    description: "Questions, feedback, and iteration are part of how we get better together.",
    icon: Layers3,
  },
  {
    title: "Ship Modern Work",
    description: "We embrace current tools, thoughtful systems, and strong engineering fundamentals.",
    icon: Code2,
  },
];

const hiringSteps = [
  "Share your resume, portfolio, or relevant work samples.",
  "Have a short intro conversation with our team.",
  "Complete a practical discussion or lightweight task if needed.",
  "Move into a final alignment round and onboarding.",
];

export default function CarrierPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const toggle = (title: string) =>
    setExpandedRole((prev) => (prev === title ? null : title));

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-24">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-violet-400/20 dark:bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-300/15 dark:bg-indigo-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* LEFT — Headline */}
            <div className="animate-hero-slide-left">
              <div className="animate-hero-badge inline-flex items-center gap-2 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50/50 dark:bg-purple-900/20 px-4 py-2 text-sm text-purple-700 dark:text-purple-300 backdrop-blur-sm mb-6 transition-colors">
                <BriefcaseBusiness className="h-4 w-4" />
                Career Opportunities
              </div>

              <h1 className="animate-hero-title text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl tracking-tight">
                <span className="bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  Build digital products
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
                  with a team that cares.
                </span>
              </h1>

              <div className="mt-6 w-16 h-px bg-purple-500/50" />

              <p className="animate-hero-body mt-6 max-w-xl text-lg leading-8 text-muted-foreground dark:text-gray-400">
                At Zyntrix, we are looking for curious builders, designers, and strategists
                who want to create meaningful work for ambitious brands and growing businesses.
              </p>

              <div className="animate-hero-cta mt-10 flex flex-wrap gap-4">
                <Link
                  href="mailto:info@Zyntrix.co.in?subject=Career%20Application"
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-purple-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-semibold text-gray-900 dark:text-gray-300 transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500/40 hover:text-purple-800 dark:hover:text-white hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>

            {/* RIGHT — Info Card */}
            <div className="animate-hero-card rounded-[2rem] border border-purple-200/60 glass-card dark:bg-[rgba(14,9,28,0.80)] p-6 dark:backdrop-blur-md sm:p-8 shadow-xl dark:shadow-[0_8px_48px_rgba(109,40,217,0.22),inset_0_1px_0_rgba(139,92,246,0.10)] transition-all duration-500 hover:-translate-y-1 dark:hover:translate-y-0 relative overflow-hidden">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-purple-100 dark:border-purple-500/22 glass-card dark:bg-[rgba(18,11,38,0.75)] p-5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-md dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.24em] text-purple-700 dark:text-gray-500">Team Style</p>
                  <p className="mt-3 text-xl font-bold text-purple-950 dark:text-white">Small team,<br />high ownership</p>
                </div>
                <div className="rounded-[1.5rem] border border-purple-100 dark:border-purple-500/22 glass-card dark:bg-[rgba(18,11,38,0.75)] p-5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-md dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.24em] text-purple-700 dark:text-gray-500">Work Model</p>
                  <p className="mt-3 text-xl font-bold text-purple-950 dark:text-white">Flexible<br />and focused</p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-purple-200 dark:border-purple-500/20 bg-purple-50/50 dark:bg-purple-900/10 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-900 dark:text-purple-400 mb-5">Who thrives here</p>
                <div className="space-y-5">
                  {values.slice(0, 3).map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4 group/item">
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600/10 dark:bg-purple-600/20 border border-purple-500/20 dark:border-purple-500/30 text-gray-900 dark:text-purple-300 group-hover/item:bg-purple-600/20 dark:group-hover/item:bg-purple-600/40 transition-colors duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-black dark:text-white text-sm">{item.title}</p>
                          <p className="mt-1 text-xs leading-5 text-gray-800 dark:text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Open Roles</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Opportunities for people who like building with intention.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {openings.map((role) => {
              const isOpen = expandedRole === role.title;
              return (
                <article
                  key={role.title}
                  className={`group relative rounded-[2.5rem] border p-8 sm:p-10 transition-all duration-500 overflow-hidden ${isOpen
                    ? "border-purple-500/50 bg-white/95 dark:bg-[rgba(20,12,45,0.85)] shadow-[0_10px_40px_rgba(139,92,246,0.15)] dark:shadow-[0_0_50px_rgba(168,85,247,0.2)]"
                    : "border-border dark:border-purple-500/25 bg-white/80 dark:bg-[rgba(14,9,28,0.65)] hover:border-purple-500/50 hover:bg-white dark:hover:bg-[rgba(20,12,45,0.90)] hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_50px_rgba(109,40,217,0.32)] shadow-sm dark:shadow-none"
                    }`}
                >
                  {/* Dynamic Cyber-Grid & Ambient Orbs Background (Hover) */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-[2.5rem]">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] dark:bg-[linear-gradient(to_right,#a855f715_1px,transparent_1px),linear-gradient(to_bottom,#a855f715_1px,transparent_1px)]" />
                    {/* Glowing Orbs */}
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl group-hover:animate-pulse" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl group-hover:animate-[pulse_3s_ease-in-out_infinite]" />
                  </div>

                  <div className="relative flex h-full flex-col">
                    {/* Header row */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700 dark:text-gray-500 mb-6">
                      <span className={`rounded-full border px-4 py-1.5 font-bold tracking-wide transition-colors duration-300 ${isOpen ? "border-purple-500/50 text-purple-700 dark:text-purple-300 bg-purple-500/10" : "border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-gray-400 group-hover:border-purple-300 dark:group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-300"
                        }`}>
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <MapPin className="h-4 w-4 text-purple-500" />
                        {role.location}
                      </span>
                    </div>

                    <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isOpen ? "premium-text-gradient dark:text-white" : "text-gray-900 dark:text-white group-hover:premium-text-gradient"
                      }`}>{role.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-400">{role.description}</p>

                    {/* Toggle button */}
                    <button
                      onClick={() => toggle(role.title)}
                      className={`mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 w-fit ${isOpen ? "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-300" : "border-gray-200 dark:border-white/10 bg-transparent text-gray-700 dark:text-gray-400 group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:bg-purple-50 dark:group-hover:bg-purple-500/10"
                        }`}
                    >
                      {isOpen ? "Close Details" : "View Full Details"}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Expandable panel */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-purple-200 dark:border-white/[0.07]" : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent"
                        }`}
                    >
                      <div className="overflow-hidden space-y-8">
                        {/* Responsibilities */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-500 mb-4">Responsibilities</p>
                          <ul className="space-y-3">
                            {role.responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-gray-800 dark:text-gray-300">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-500 mb-4">Requirements</p>
                          <ul className="space-y-3">
                            {role.requirements.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-gray-800 dark:text-gray-300">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Nice to Have */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 mb-4">Nice to Have</p>
                          <ul className="space-y-3">
                            {role.niceToHave.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-500">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-700" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 pb-2">
                          <Link
                            href={`mailto:info@Zyntrix.co.in?subject=Application — ${encodeURIComponent(role.title)}`}
                            className="btn btn-outline hover-shimmer gap-2 w-full sm:w-auto"
                          >
                            Apply for this role
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN + HIRING PROCESS ── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Why Join */}
            <div className="rounded-[2rem] border border-violet-200/70 dark:border-purple-500/22 glass-card dark:bg-[rgba(14,9,28,0.65)] p-8 shadow-[0_8px_32px_rgba(139,92,246,0.08)] dark:shadow-none">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Why Join</p>
              <h2 className="text-3xl font-extrabold bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
                A place to do strong work and keep growing.
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasonsToJoin.map((item, index) => {
                  const Icon = item.icon;
                  const num = String(index + 1).padStart(2, "0");
                  return (
                    <div
                      key={item.title}
                      className="relative rounded-[1.5rem] border border-purple-200/60 dark:border-white/[0.07] bg-white dark:bg-black p-5 group/reason overflow-hidden hover:border-purple-400/50 dark:hover:border-purple-500/30 dark:hover:bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-lg dark:hover:shadow-none shadow-sm dark:shadow-none"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] dark:h-px bg-gradient-to-r from-transparent via-purple-500/80 dark:via-purple-500/60 to-transparent opacity-0 group-hover/reason:opacity-100 transition-opacity duration-500" />
                      <span className="absolute -top-1 -right-1 text-[4rem] font-black text-gray-900/[0.05] dark:text-white/[0.03] select-none pointer-events-none leading-none">{num}</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600/10 border border-purple-500/20 text-gray-900 dark:text-purple-400 group-hover/reason:bg-purple-600/25 transition-all duration-300 mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-black dark:text-white group-hover/reason:text-gray-900 dark:group-hover/reason:text-purple-200 transition-colors duration-300">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-800 dark:text-gray-500 group-hover/reason:text-black dark:group-hover/reason:text-gray-400 transition-colors duration-300">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hiring Process */}
            <div className="rounded-[2rem] border border-violet-200/70 dark:border-purple-500/22 glass-card dark:bg-[rgba(14,9,28,0.65)] p-8 shadow-[0_8px_32px_rgba(139,92,246,0.08)] dark:shadow-none">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Hiring Process</p>
              <h2 className="text-3xl font-extrabold bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
                Clear, simple, and respectful of your time.
              </h2>

              <div className="mt-8 space-y-4">
                {hiringSteps.map((step, index) => (
                  <div
                    key={step}
                    className="group/step flex gap-4 rounded-[1.5rem] border border-purple-200/60 dark:border-white/[0.07] bg-white/80 dark:bg-black p-5 hover:border-purple-400/50 dark:hover:border-purple-500/30 dark:hover:bg-[#0d0d0d] transition-all duration-500 items-start hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-lg dark:hover:shadow-none shadow-sm dark:shadow-none"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600/10 border border-purple-500/30 text-gray-900 dark:text-purple-300 font-bold text-sm group-hover/step:bg-purple-600/25 group-hover/step:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
                      {index + 1}
                    </div>
                    <p className="text-base leading-7 text-gray-800 dark:text-gray-400 group-hover/step:text-black dark:group-hover/step:text-gray-300 transition-colors duration-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-purple-100 dark:border-border py-24 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 hidden dark:block dark:bg-purple-700/5 blur-[120px] pointer-events-none animate-pulse dark:animate-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Let&apos;s Talk</p>
          <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent mb-6">
            Don&apos;t see your exact role?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground dark:text-gray-400 mb-10">
            If you care about modern product work, thoughtful collaboration, and building useful
            digital experiences — send us your profile and a short note about what you want to work on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:info@Zyntrix.co.in?subject=General%20Career%20Inquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-base font-bold text-white transition hover:bg-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.45)]"
            >
              Email Your Profile
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/WhoWeAre"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-8 py-4 text-base font-semibold text-gray-900 dark:text-gray-300 transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500/40 hover:text-purple-800 dark:hover:text-white hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
