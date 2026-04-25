import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LottieAnimation from '../../components/ui/Lottiefiles';

export default function About() {
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      slug: "web-development",
      description: "High-performance websites and applications using modern frameworks and best practices.",
      video: "/videos/abstract-cyan-loop-1.mp4",
      poster: "/videos/about_cyan_1.png",
      lottieSrc: "https://lottie.host/0720ec64-6eb5-46f2-bd10-ba266a2efa5a/Hehr4ETsVQ.lottie"
    },
    {
      id: 2,
      icon: "🤖",
      title: "App Development",
      slug: "app-development",
      description: "Intelligent systems that automate and enhance business workflows with cutting-edge technology.",
      video: "/videos/abstract-cyan-loop-2.mp4",
      poster: "/videos/about_cyan_2.png",
      lottieSrc: null
    },
    {
      id: 3,
      icon: "🎨",
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      description: "Clean, user-focused interfaces that deliver exceptional experiences and drive engagement.",
      video: "/videos/abstract-cyan-loop-3.mp4",
      poster: "/videos/about_cyan_3.png",
      lottieSrc: "https://lottie.host/26eae896-f94f-4e43-b7ff-d6ad5d9ce4b9/BDNL1RZHds.lottie"
    },
    {
      id: 4,
      icon: "💻",
      title: "AI Chatbot Platform",
      slug: "ai-chatbot",
      description: "High-performance websites and applications using modern frameworks and best practices.",
      video: "/videos/abstract-cyan-loop-4.mp4",
      poster: "/videos/about_cyan_4.png",
      lottieSrc: "https://lottie.host/78c243b8-411f-480b-a19c-910945ff16ea/2p6s3dYyue.lottie"
    },
    {
      id: 5,
      icon: "🤖",
      title: "SaaS Development",
      slug: "saas-development",
      description: "Intelligent systems that automate and enhance business workflows with cutting-edge technology.",
      video: "/videos/abstract-cyan-loop-1.mp4",
      poster: "/videos/about_cyan_1.png",
      lottieSrc: "https://lottie.host/017797d2-3bae-4a47-899a-4b036e425481/CneBPF9W6t.lottie"
    },
    {
      id: 6,
      icon: "🎨",
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Clean, user-focused interfaces that deliver exceptional experiences and drive engagement.",
      video: "/videos/abstract-cyan-loop-2.mp4",
      poster: "/videos/about_cyan_2.png",
      lottieSrc: "https://lottie.host/0e836a88-726d-4402-8295-226d28f3f9c4/vGeCWuvkQ1.lottie"
    },
    {
      id: 7,
      icon: "🎨",
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Clean, user-focused interfaces that deliver exceptional experiences and drive engagement.",
      video: "/videos/abstract-cyan-loop-3.mp4",
      poster: "/videos/about_cyan_3.png",
      lottieSrc: "https://lottie.host/dd04a975-b7a5-400b-a5fd-5a6b51e0a830/I3gycnioEA.lottie"
    }
  ]

  return (
    <section className="relative w-full pt-24 pb-24 bg-background text-foreground transition-colors duration-300 overflow-hidden">

      {/* Subtle Background Grid (Dark Only) */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] dark:bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] dark:bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-28">
        {/* Header */}
        <div style={{ paddingBottom: "30px" }} className=" text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground premium-text-gradient dark:from-white dark:to-gray-400 dark:bg-clip-text dark:text-transparent">
            What We Do
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>
          <p className=" text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            We build modern, scalable digital solutions using cutting-edge technologies.
            From web applications to AI-powered systems, we help businesses scale faster.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-3xl bg-transparent p-px shadow-sm dark:shadow-none transition-transform duration-500 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none border border-border/50 dark:border-white/5 hover:border-primary/30"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-card dark:bg-black text-card-foreground dark:text-white transition-colors duration-300 glass-card dark:backdrop-filter-none dark:bg-black dark:border-white/5">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
                  <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
                </div>

                <div className="relative aspect-[16/9] overflow-hidden bg-muted/20 dark:bg-black/40">
                  {service.lottieSrc ? (
                    <div className="absolute inset-0 h-full w-full transition duration-700 ease-out group-hover:scale-[1.05] dark:opacity-80 dark:mix-blend-screen dark:bg-white">
                        <LottieAnimation src={service.lottieSrc} bgInfo="transparent" />
                    </div>
                  ) : service.slug === "app-development" ? (
                    <div className="absolute inset-0 h-full w-full transition duration-700 ease-out group-hover:scale-[1.05] opacity-80 dark:mix-blend-screen">
                        <LottieAnimation />
                    </div>
                  ) : (
                    <video
                      src={service.video}
                      poster={service.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover opacity-55 dark:mix-blend-screen transition duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-95 motion-reduce:transition-none"
                    />
                  )}
                  <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.1),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20 dark:from-black dark:via-black/40 dark:to-black/20" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border dark:border-white/10 bg-background/5 dark:bg-white/5 text-lg transition-colors duration-500 group-hover:border-primary/40 group-hover:bg-primary/20 group-hover:text-primary dark:group-hover:text-purple-100">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground dark:text-white transition-colors duration-500 group-hover:text-primary dark:group-hover:text-purple-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-light leading-relaxed text-muted-foreground dark:text-white/65 transition-colors duration-500 group-hover:text-foreground dark:group-hover:text-white/75">
                    {service.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/5 bg-transparent px-3 py-2 text-xs font-semibold text-muted-foreground dark:text-white/50 transition-all duration-500 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-200 group-hover:text-foreground dark:group-hover:text-white/80"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
