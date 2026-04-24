import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="h-screen w-full relative overflow-hidden bg-background">
      {/* Render canvas taller than the screen so the Spline watermark is pushed out of bounds and hidden */}
      <div className="absolute top-0 left-0 right-0 h-[calc(100vh+80px)] z-0 pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/7xtgS97MudeIx3Vs/scene.splinecode"
        />
      </div>

      {/* Spline Canvas Mask for Light Mode to prevent 'foggy' transitions */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)] dark:bg-none" />

      {/* Cinematic Dark Effects (Vignette & Gradient Fog) identical to evolvxlabs.com */}
      <div className="absolute inset-0 pointer-events-none z-30 dark:shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] dark:bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Animated Hero Text Overlay */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-end pb-20 pointer-events-none select-none">
        <p className="animate-hero-badge text-xs sm:text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-400/90 font-bold mb-4">
          Zyntrix Labs
        </p>
        <h1 className="animate-hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-center leading-tight">
          <span className="bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
            Innovation Starts Here
          </span>
        </h1>
        <p className="animate-hero-body mt-5 max-w-xl text-center text-base sm:text-lg text-purple-900/60 dark:text-white/40 leading-relaxed px-6">
          Empowering businesses with futuristic digital solutions.
        </p>
      </div>


    </main>
  );
}
