"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🚨 CRITICAL: wait until theme is ready
  if (!mounted || !resolvedTheme) return null;

  const sceneUrl =
    resolvedTheme === "dark"
      ? "https://prod.spline.design/7xtgS97MudeIx3Vs/scene.splinecode"
      : "https://prod.spline.design/OAWq1X6z8QgDIJAj/scene.splinecode";

  return <Spline key={resolvedTheme} scene={sceneUrl} />;
}