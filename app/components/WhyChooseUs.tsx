import React from 'react'
import {
  Sparkles,
  ShieldCheck,
  Rocket,
  Users,
  Layers,
  TrendingUp,
} from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Trusted expertise',
    description: 'Built by a team with deep experience in web, AI, and product design.',
  },
  {
    icon: Rocket,
    title: 'Fast delivery',
    description: 'We ship polished solutions quickly without compromising quality.',
  },
  {
    icon: Sparkles,
    title: 'Clean interfaces',
    description: 'Designs that look premium and make every interaction feel effortless.',
  },
  {
    icon: Users,
    title: 'User-first approach',
    description: 'We build products that are intuitive, accessible, and easy to adopt.',
  },
  {
    icon: Layers,
    title: 'Flexible architecture',
    description: 'Scalable systems designed to grow with your business and future needs.',
  },
  {
    icon: TrendingUp,
    title: 'Business outcomes',
    description: 'Focused on measurable results, not just pretty interfaces.',
  },
]

function WhyChooseUs() {
  return (
    <section className="relative z-20 w-full py-32 bg-background overflow-hidden rounded-[3rem] -mt-10 dark:shadow-[0_-40px_70px_rgba(0,0,0,0.8)] shadow-[0_-40px_70px_rgba(0,0,0,0.05)] transition-colors duration-300">
      {/* Background Depth & Glows */}
      <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] dark:bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] dark:bg-purple-900/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-foreground premium-text-gradient dark:from-white dark:to-white/40 dark:bg-clip-text dark:text-transparent">
            Why Businesses Choose Us
          </h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>
          <p className="text-lg text-muted-foreground dark:text-gray-400 font-light leading-relaxed">
            We deliver comprehensive digital solutions that drive real business growth and transformation. Experience the evolution of web technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <article
                key={benefit.title}
                className="group relative rounded-[2rem] bg-transparent p-px shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_-20px_rgba(168,85,247,0.15)] border border-border/50 dark:border-white/5 hover:border-primary/30"
              >
                <div className="relative h-full flex flex-col overflow-hidden rounded-[1.9rem] bg-card dark:bg-black text-card-foreground dark:text-white p-8 lg:p-10 glass-card dark:backdrop-filter-none dark:bg-black dark:border-white/5">
                  {/* Subtle hover gradient inside card */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
                  </div>

                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-border dark:border-white/5 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(109,40,217,0.15)] group-hover:scale-110">
                    <Icon className="h-8 w-8 text-foreground/40 dark:text-white/50 transition-colors duration-500 group-hover:text-primary dark:group-hover:text-purple-400" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground/90 dark:text-white/90 mb-4 tracking-tight transition-colors duration-500 group-hover:text-primary dark:group-hover:text-white">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground dark:text-white/50 font-light leading-relaxed group-hover:text-foreground dark:group-hover:text-white/70 transition-colors duration-500">
                    {benefit.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
