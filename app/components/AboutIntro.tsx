
import { Badge } from "@/components/ui/badge"

function AboutIntro() {
    return (
        <section className="relative w-full pt-24 md:pt-32 pb-20 bg-background overflow-hidden flex items-center justify-center transition-colors duration-300">
            {/* Subtle Purple Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] dark:bg-purple-600/5 blur-[150px] rounded-[100%] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <Badge
                    variant="outline"
                    className="mb-8 border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 hover:bg-purple-500/20 transition-colors px-4 py-1.5 text-sm uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                >
                    Discover Zyntrix
                </Badge>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground dark:text-white mb-8 leading-tight">
                    Pioneering the Future of <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                        Digital Experiences
                    </span>
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 mb-10"></div>

                <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 font-light leading-relaxed max-w-3xl">
                    At Zyntrix, we bring ideas to life through smart digital solutions that drive real results. Whether you're a startup, SME, or enterprise, our expertise in design, technology, and innovation keeps you ahead in a fast-changing world.
                </p>
            </div>
        </section>
    )
}

export default AboutIntro