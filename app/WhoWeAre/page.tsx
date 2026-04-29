import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Cpu,
  Globe,
  GraduationCap,
  Handshake,
  Headphones,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import Footer from "../components/Footer";
import StarBorder from "../components/StarBorder";

const highlights = [
  { value: "25+", label: "Projects Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = ["Innovation", "Growth", "Technology"];

const storyPoints = [
  {
    title: "Based in Kerala",
    description:
      "Rooted in a region known for talent, creativity, and a strong spirit of innovation.",
    icon: Building2,
  },
  {
    title: "Trusted Partner",
    description:
      "Working closely with startups, SMEs, and enterprises as a long-term digital ally.",
    icon: Handshake,
  },
  {
    title: "Global Reach",
    description:
      "Helping businesses across industries turn local ambition into global impact.",
    icon: Globe,
  },
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description:
      "Experienced professionals with deep expertise in digital solutions and technology.",
    icon: Users,
  },
  {
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising on quality and attention to detail.",
    icon: Rocket,
  },
  {
    title: "Quality Assured",
    description:
      "Rigorous quality control processes ensure your project meets the highest standards.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    description:
      "Ongoing support and maintenance to keep your digital solutions running smoothly.",
    icon: Headphones,
  },
];

const missionVision = [
  {
    number: "01",
    title: "Our Mission",
    description:
      "To build impactful digital products by identifying real-world pain points and delivering technology-driven solutions that create measurable value for businesses and communities.",
    pillars: ["Identify Pain Points", "Deliver Solutions", "Create Value"],
    icon: Target,
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "To empower students, professionals, and entrepreneurs by providing them with sufficient skills and digital services helping them innovate, grow, and succeed while showcasing the best of Kerala to the world.",
    pillars: ["Empower Growth", "Foster Innovation", "Global Impact"],
    icon: Lightbulb,
  },
];

const founderStats = [
  { value: "100+", label: "Happy Clients" },
  { value: "25+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
];

const partnerGroups = [
  {
    title: "Academic Partners",
    description:
      "Collaborating with educational institutions for research and innovation.",
    icon: GraduationCap,
  },
  {
    title: "Industry Partners",
    description:
      "Strategic partnerships across multiple business sectors.",
    icon: Handshake,
  },
  {
    title: "Technology Partners",
    description:
      "Working with leading tech companies for cutting-edge solutions.",
    icon: Cpu,
  },
  {
    title: "Community Partners",
    description:
      "Supporting local communities and entrepreneurial ecosystems.",
    icon: Building2,
  },
];

const recognitions = [
  {
    title: "Industry Excellence",
    description:
      "Recognized for outstanding digital solutions and innovation.",
    icon: Award,
  },
  {
    title: "Quality Standards",
    description: "Maintaining high standards in all our deliverables.",
    icon: ShieldCheck,
  },
  {
    title: "Client Satisfaction",
    description: "Consistently high ratings from our valued clients.",
    icon: Users,
  },
  {
    title: "Innovation Awards",
    description: "Celebrated for breakthrough digital innovations.",
    icon: TrendingUp,
  },
];

export default function WhoWeArePage() {
  return (
    <div className="relative isolate">
      <section className="relative overflow-hidden bg-background dark:bg-background text-foreground transition-colors duration-300 isolate">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:72px_72px] bg-center [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.4),transparent_85%)] opacity-20 -z-10" />

        {/* Light Mode Specific Glow (Services style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-400/20 blur-[100px] rounded-full pointer-events-none dark:hidden" />

        {/* Dark Mode Specific Glows */}
        <div className="absolute inset-x-0 top-0 h-96 dark:bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.25),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.18),transparent_45%)] pointer-events-none" />
        <div className="absolute left-8 top-32 h-80 w-80 rounded-full dark:bg-purple-600/[0.28] blur-[140px] pointer-events-none" />
        <div className="absolute right-8 top-24 h-72 w-72 rounded-full dark:bg-indigo-500/[0.20] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start z-10 relative">
            <div className="animate-hero-slide-left">
              <div className="animate-hero-badge inline-flex items-center gap-2 rounded-full border border-border dark:border-white/10 bg-background dark:bg-black/80 px-4 py-2 text-sm text-purple-700 dark:text-gray-400 shadow-sm transition-colors duration-300">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-purple-600 dark:bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                Who We Are
              </div>

              <h1 className="animate-hero-title relative mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl pb-2 bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
                At Zyntrix, we believe innovation begins with the right foundation.
              </h1>
              <p className="animate-hero-body mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Established with a vision to empower businesses of every scale,
                we specialize in delivering technology-driven digital solutions
                that bridge creativity, innovation, and strategy.
              </p>

              <div className="animate-hero-cta mt-8 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-black/10 dark:border-white/10 bg-background dark:bg-black/50 px-4 py-2 text-sm font-medium shadow-sm transition hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-hero-card rounded-[2rem] border border-border dark:border-purple-500/30 glass-card dark:bg-[rgba(14,9,28,0.82)] p-6 shadow-xl dark:shadow-[0_8px_48px_rgba(109,40,217,0.22),inset_0_1px_0_rgba(139,92,246,0.10)] backdrop-blur-md sm:p-8 relative transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent dark:from-purple-600/12 dark:to-indigo-600/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 relative hover:cursor-default">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-border dark:border-purple-500/22 glass-card dark:bg-[rgba(18,11,38,0.75)] p-5 group hover:border-purple-500/50 dark:hover:border-purple-400/55 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] dark:hover:shadow-[0_0_32px_rgba(109,40,217,0.32)] transition-all duration-500"
                  >
                    <p className="text-3xl font-bold sm:text-4xl text-foreground dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-500">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-purple-500/10 dark:border-purple-500/20 bg-purple-600/[0.03] dark:bg-purple-900/10 p-6 relative z-10 transition hover:border-purple-500/30 duration-300">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-foreground dark:bg-white text-background dark:text-black shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-purple-600 dark:text-purple-400">
                      Our Story
                    </p>
                    <p className="mt-3 text-base leading-7 text-foreground/80 dark:text-foreground/85">
                      From creative designing, website and app development,
                      technology consulting, to product innovation, we help
                      businesses transform ideas into impactful realities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2 transition-colors duration-300">
              Our Story
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent pb-2 transition-colors duration-300">
              Building digital momentum with strategy, creativity, and care.
            </h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-muted-foreground dark:text-gray-400 sm:text-lg transition-colors duration-300">
              <p>
                Our approach is rooted in understanding your unique challenges
                and crafting solutions that enable growth, efficiency, and
                long-term success.
              </p>
              <p>
                Headquartered in Kerala, we take pride in carrying forward the
                region&apos;s spirit of innovation and talent to the global
                stage. Over the years, we&apos;ve partnered with startups, SMEs,
                and enterprises across industries such as education, food,
                fashion, sustainability, and technology.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {storyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.title}
                  className="rounded-[1.75rem] border border-border dark:border-purple-500/22 bg-white/90 dark:bg-[rgba(14,9,28,0.65)] p-6 shadow-sm group hover:border-purple-500/50 dark:hover:border-purple-400/55 hover:bg-white dark:hover:bg-[rgba(20,12,45,0.88)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(139,92,246,0.12)] dark:hover:shadow-[0_0_44px_rgba(109,40,217,0.32)] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-foreground dark:bg-white text-background dark:text-black transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">{point.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground dark:text-gray-400 sm:text-base">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2 transition-colors duration-300">
              Why Choose Zyntrix?
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent pb-2 transition-colors duration-300">
              We&apos;re not just another digital agency, we&apos;re your strategic
              partner in growth.
            </h2>
          </div>

          <div className="mt-10 grid gap-px md:grid-cols-2 xl:grid-cols-4 rounded-[2rem] overflow-hidden border border-border dark:border-purple-500/22 bg-violet-200/40 dark:bg-[rgba(25,12,55,0.50)] transition-colors duration-300">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const num = String(index + 1).padStart(2, "0");
              return (
                <article
                  key={item.title}
                  className="relative bg-white/90 dark:bg-[rgba(12,7,26,0.82)] p-8 group overflow-hidden cursor-default transition-all duration-500 hover:bg-white dark:hover:bg-[rgba(18,10,40,0.95)] dark:hover:shadow-[inset_0_0_60px_rgba(109,40,217,0.10)]"
                >
                  {/* Top edge glow bar */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Watermark number */}
                  <span
                    className="absolute -top-2 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none text-foreground/[0.03] dark:text-white/[0.03] group-hover:text-purple-600/[0.07] dark:group-hover:text-purple-500/[0.07] transition-colors duration-500"
                    aria-hidden="true"
                  >
                    {num}
                  </span>

                  {/* Icon + number badge row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground dark:text-white group-hover:border-purple-500/40 group-hover:bg-purple-600/10 dark:group-hover:bg-purple-500/10 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] dark:group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.25em] text-foreground/20 dark:text-white/20 group-hover:text-purple-600/50 dark:group-hover:text-purple-500/50 transition-colors duration-500">
                      {num}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-px bg-purple-500/30 mb-5 group-hover:w-14 group-hover:bg-purple-500/70 transition-all duration-500" />

                  <h3 className="text-lg font-bold tracking-tight text-foreground dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground dark:text-gray-500 group-hover:text-foreground/70 dark:group-hover:text-gray-400 transition-colors duration-300">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300 relative border-t border-border dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2 transition-colors duration-300">
              Our Mission &amp; Vision
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent pb-2 transition-colors duration-300">
              Driving innovation and empowering growth through technology.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground dark:text-gray-400 sm:text-lg transition-colors duration-300">
              We believe in creating digital solutions that not only solve
              today&apos;s challenges but also pave the way for tomorrow&apos;s
              innovations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {missionVision.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col rounded-[2.5rem] p-[2px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_-20px_rgba(139,92,246,0.6)]"
                >
                  {/* Animated Conic Gradient Border */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem] bg-violet-200/50 dark:bg-white/10">
                    <div className="absolute top-[50%] left-[50%] aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,1)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-[50%] left-[50%] aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_340deg,rgba(99,102,241,1)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Inner Card Background */}
                  <div className="relative z-10 flex h-full flex-col rounded-[calc(2.5rem-2px)] bg-white/95 dark:bg-[#060312]/95 p-10 overflow-hidden backdrop-blur-3xl">

                    {/* Inner Ambient Glow on Hover */}
                    <div className="absolute -inset-x-20 -bottom-20 z-0 h-[300px] bg-gradient-to-t from-purple-600/20 via-indigo-600/10 to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />

                    {/* Header / Icon section */}
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-black uppercase tracking-[0.5em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-300">
                          Chapter
                        </span>
                        <span className="text-4xl font-black text-purple-950 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-500 transition-all duration-300">
                          {item.number}
                        </span>
                      </div>

                      <div className="relative flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/40 dark:to-[#080414] border border-purple-200/50 dark:border-white/10 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />
                        <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="relative z-10 mt-10 text-3xl font-extrabold tracking-tight text-foreground dark:text-white transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="relative z-10 mt-4 text-lg leading-relaxed text-muted-foreground dark:text-gray-400 group-hover:text-foreground dark:group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                      {item.description}
                    </p>

                    {/* Pillars / Tags */}
                    <div className="relative z-10 mt-12 flex flex-wrap gap-3">
                      {item.pillars.map((pillar) => (
                        <span
                          key={pillar}
                          className="rounded-xl border border-purple-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 px-5 py-2.5 text-sm font-semibold text-purple-900 dark:text-purple-200 backdrop-blur-md transition-all duration-300 group-hover:border-purple-400/50 dark:group-hover:border-purple-500/50 group-hover:bg-purple-50/50 dark:group-hover:bg-purple-500/10 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:-translate-y-0.5"
                        >
                          {pillar}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div className="rounded-[2rem] border border-border dark:border-purple-500/28 bg-white/85 dark:bg-[rgba(12,7,26,0.90)] p-8 shadow-sm dark:shadow-[0_8px_48px_rgba(109,40,217,0.18),inset_0_1px_0_rgba(139,92,246,0.08)] transition-all duration-300 relative overflow-hidden" style={{ background: 'linear-gradient(160deg,rgba(255,255,255,0.92),rgba(237,233,254,0.6)),radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_45%)' }}>
            <div className="dark:hidden absolute inset-0 rounded-[2rem] pointer-events-none" style={{ background: 'linear-gradient(160deg,rgba(255,255,255,0.92),rgba(237,233,254,0.6)),radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_45%)' }} />
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2">
              Founder &amp; CEO
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent pb-2 transition-colors duration-300">Founder&apos;s Note</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {founderStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.02] p-5 group/stat hover:border-purple-500/50 dark:hover:bg-purple-500/[0.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.08)] transition-all duration-300 cursor-default"
                >
                  <p className="text-3xl font-bold text-foreground dark:text-white group-hover/stat:text-purple-600 dark:group-hover/stat:text-purple-200 transition-colors duration-300">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground dark:text-gray-400 group-hover/stat:text-foreground/70 dark:group-hover/stat:text-gray-300 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article className="rounded-[2rem] border border-black/5 dark:border-purple-500/22 bg-black/[0.02] dark:bg-[rgba(12,7,26,0.75)] p-8 shadow-sm dark:shadow-[0_8px_40px_rgba(109,40,217,0.16),inset_0_1px_0_rgba(139,92,246,0.08)] sm:p-10 relative overflow-hidden group/founder transition-all duration-300 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 dark:border-purple-500/30 bg-purple-600/5 dark:bg-purple-900/10 px-4 py-2 text-sm text-purple-600 dark:text-purple-300 relative z-10 transition duration-300 group-hover/founder:border-purple-500/50">
              <SparkBadge />
              Building the Future Together
            </div>
            <blockquote
              className="mt-8 leading-9 text-foreground/80 dark:text-gray-300 relative z-10 italic"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "1.2rem",
                letterSpacing: "0.01em",
                lineHeight: "1.9",
              }}
            >
              &ldquo;At Zyntrix, we believe that every idea has the potential to become something meaningful when driven by innovation and technology. Our goal is to create digital solutions that address real-world problems and help businesses grow. We are committed to empowering students, professionals, and entrepreneurs by providing them with the skills and services needed to succeed. Together, we aim to build a future where innovation from Kerala makes a global impact.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4 relative z-10">
              <div className="h-px w-8 bg-purple-500/60" />
              <div>
                <p className="text-base font-semibold tracking-wide text-foreground dark:text-white" style={{ fontFamily: "'Georgia', serif" }}>Akshith Jeevan</p>
                <p className="mt-0.5 text-sm tracking-widest uppercase text-purple-600 dark:text-purple-400" style={{ letterSpacing: "0.12em" }}>
                  Founder &amp; CEO, Zyntrix
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300 border-t border-border dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-semibold tracking-widest">
                Our Partners &amp; Supporters
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl text-foreground dark:text-white">
                We collaborate with leading organizations and institutions to
                deliver exceptional value.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {partnerGroups.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-[2rem] border border-border dark:border-purple-500/22 bg-white/80 dark:bg-[rgba(14,9,28,0.62)] p-8 group/partner transition-all duration-500 hover:border-purple-500/40 dark:hover:border-purple-400/55 hover:bg-white dark:hover:bg-[rgba(20,12,45,0.90)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.10)] dark:hover:shadow-[0_0_50px_rgba(109,40,217,0.30)]"
                  >
                    {/* Ambient glowing orb in the background */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-600/10 dark:bg-purple-500/10 blur-[50px] opacity-0 group-hover/partner:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Top Accent line */}
                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-purple-600/50 dark:via-purple-500/50 to-transparent opacity-0 group-hover/partner:opacity-100 transition-all duration-700 scale-x-0 group-hover/partner:scale-x-100 origin-left" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header: Icon + Title horizontally aligned */}
                      <div className="flex items-center gap-5 mb-6">
                        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-sm transition-all duration-500 group-hover/partner:scale-110 group-hover/partner:border-purple-500/50 group-hover/partner:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                          <Icon className="h-6 w-6 text-foreground dark:text-white transition-colors duration-500 group-hover/partner:text-purple-600 dark:group-hover/partner:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground dark:text-white group-hover/partner:text-purple-600 dark:group-hover/partner:text-purple-300 transition-colors duration-500">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-400 group-hover/partner:text-foreground/80 dark:group-hover/partner:text-gray-300 transition-colors duration-500 flex-grow">
                        {item.description}
                      </p>

                      {/* Tech Dots */}
                      <div className="mt-8 flex gap-2 opacity-30 group-hover/partner:opacity-100 transition-opacity duration-500">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-500" />
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600/60 dark:bg-purple-500/60" />
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600/30 dark:bg-purple-500/30" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.25rem] border border-black/5 dark:border-purple-500/30 bg-white dark:bg-[rgba(10,6,22,0.92)] p-8 shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[0_0_80px_rgba(109,40,217,0.28),inset_0_1px_0_rgba(139,92,246,0.10)] sm:p-10 lg:p-12 relative overflow-hidden group/cta hover:border-purple-500/50 dark:hover:border-purple-400/55 transition duration-500 isolate before:absolute before:inset-[-20%_auto_auto_-12%] before:w-[12rem] md:before:w-[22rem] before:h-[12rem] md:before:h-[22rem] before:rounded-full before:bg-[radial-gradient(circle,rgba(168,85,247,0.20),transparent_68%)] dark:before:bg-[radial-gradient(circle,rgba(168,85,247,0.40),transparent_68%)] before:blur-[10px] dark:before:blur-[24px] before:pointer-events-none before:z-0 after:absolute after:inset-[auto_-8%_-28%_auto] after:w-[12rem] md:after:w-[20rem] after:h-[12rem] md:after:h-[20rem] after:rounded-full after:bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_70%)] dark:after:bg-[radial-gradient(circle,rgba(99,102,241,0.32),transparent_70%)] after:blur-[14px] dark:after:blur-[28px] after:pointer-events-none after:z-0">
            <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none opacity-50 dark:group-hover/cta:opacity-100 transition duration-500" />
            <div className="max-w-3xl relative z-10">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-semibold tracking-widest">
                Ready to Transform Your Business?
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl text-foreground dark:text-white">
                Join the growing number of businesses that trust Zyntrix to
                deliver innovative digital solutions.
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row relative z-10">
              <Link href="/ContactUs">
                <StarBorder
                  as="div"
                  color="rgba(168,85,247,1)"
                  speed="4s"
                  thickness={2}
                >
                  <span className="flex items-center gap-2 font-bold px-2 py-0.5 text-base">
                    Get Started Today
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </StarBorder>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center">
                <StarBorder
                  as="div"
                  color="rgba(168,85,247,1)"
                  speed="3s"
                  thickness={2}
                >
                  <span className="flex items-center gap-2 font-semibold px-4 py-0.5 text-base text-foreground dark:text-gray-300">
                    Learn More
                  </span>
                </StarBorder>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SparkBadge() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground dark:bg-white text-background dark:text-black group-hover:bg-purple-600 dark:group-hover:bg-purple-600 group-hover:text-white transition duration-300">
      <Rocket className="h-3.5 w-3.5" />
    </span>
  );
}
