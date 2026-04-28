"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

/* 🤖 Futuristic 3D Text Rotation */
function VerticalText() {
  const words = [
    "AI-Powered Solutions",
    "Scalable Platforms",
    "Digital Products",
    "Cloud Infrastructure",
    "Enterprise Applications",
    "Seamless Experiences",
    "Data-Driven Systems",
    "Next-Gen Applications",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-[1.2em] flex justify-center items-center w-full"
      style={{ perspective: "1000px" }}
    >
      {words.map((word, i) => {
        const isActive = i === index;
        const isPrev = i === (index - 1 + words.length) % words.length;

        // Calculate 3D transforms for a futuristic cylindrical rotation
        let transform = "translateY(80%) rotateX(-80deg) scale(0.8)";
        let opacity = 0;
        let filter = "blur(10px)";

        if (isActive) {
          transform = "translateY(0%) rotateX(0deg) scale(1)";
          opacity = 1;
          filter = "blur(0px)";
        } else if (isPrev) {
          transform = "translateY(-80%) rotateX(80deg) scale(0.8)";
          opacity = 0;
          filter = "blur(10px)";
        }

        return (
          <div
            key={i}
            className="absolute whitespace-nowrap drop-shadow-[0_0_15px_currentColor]"
            style={{
              transform,
              opacity,
              filter,
              transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
              transformOrigin: "50% 50% -30px",
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted || !resolvedTheme) return null;

  const sceneUrl =
    resolvedTheme === "dark"
      ? "https://prod.spline.design/7xtgS97MudeIx3Vs/scene.splinecode"
      : "https://prod.spline.design/OAWq1X6z8QgDIJAj/scene.splinecode";

  return (
    <main className="h-screen w-full overflow-hidden relative">

      {/* ✨ Holographic Sci-Fi Data Rings & Geometry (Complex & Decorative) */}



      {/* 🤖 Spline Background */}
      <div className="absolute inset-0 -bottom-10 -top-[50px] z-0">
        <Spline scene={sceneUrl} />
      </div>

      {/* 🌫 Fog Gradient (no blur) */}
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-to-t from-background via-background/70 via-40% to-transparent" />
      </div>

      {/* 🧠 HERO TEXT (Two-line layout) */}
      <div className="absolute bottom-[20%] left-0 w-full flex justify-center z-20 px-4">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground drop-shadow-2xl text-center leading-tight">

          {/* Line 1 */}
          <div className="drop-shadow-[0_0_14px_white] dark:drop-shadow-none translate-y-2 md:translate-y-4">We engineer</div>

          {/* Line 2 */}
          <div className="text-primary mt-0.5 md:mt-1">
            <VerticalText />
          </div>

        </h1>
      </div>

      {/* 🔽 Scroll Indicator */}
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-center z-20 gap-4">
        <p className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-foreground/70 flex items-center gap-4">
          <span className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-foreground/50"></span>
          Scroll to discover
          <span className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-foreground/50"></span>
        </p>

        {/* Animated Mouse Icon */}
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center relative backdrop-blur-sm bg-background/5 shadow-lg">
          <div className="w-1.5 h-2.5 bg-foreground/80 rounded-full animate-bounce absolute top-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
        </div>
      </div>

    </main>
  );
}