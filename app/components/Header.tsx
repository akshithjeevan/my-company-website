'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import StarBorder from '../components/StarBorder';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header-background backdrop-blur-xl px-6 py-4 text-foreground transition-colors duration-300 shadow-[0_1px_24px_rgba(139,92,246,0.08)] dark:shadow-[0_1px_40px_rgba(109,40,217,0.22),0_1px_0_rgba(139,92,246,0.28)]">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6">
        <div className="justify-self-start">
          <h1 className="text-lg font-semibold uppercase tracking-[0.18em]">
            Zyntrix Labs
          </h1>
        </div>

        <nav className="flex items-center justify-center gap-6 text-sm">
          <Link
            href="/"
            className="px-3 py-2 font-medium hover:text-purple-600"
          >
            Home
          </Link>

          <Link
            href="/WhoWeAre"
            className="px-3 py-2 font-medium hover:text-purple-600"
          >
            Who We Are
          </Link>

          <Link
            href="/services"
            className="px-3 py-2 font-medium hover:text-purple-600"
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className="px-3 py-2 font-medium hover:text-purple-600"
          >
            Portfolio
          </Link>

          <Link
            href="/Carrier"
            className="px-3 py-2 font-medium hover:text-purple-600"
          >
            Carrier
          </Link>
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <StarBorder
            as={Link}
            className="shrink-0"
            color="magenta"
            href="/ContactUs"
            speed="5s"
          >
            <Rocket size={16} strokeWidth={1.25} /> Contact Us
          </StarBorder>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
