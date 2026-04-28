'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/ui/mode-toggle';
import StarBorder from '../components/StarBorder';
import { Rocket, Home, Users, LayoutGrid, FolderKanban, Briefcase } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header-background backdrop-blur-xl px-4 md:px-6 py-3 md:py-4 text-foreground transition-colors duration-300 shadow-[0_8px_32px_rgba(109,40,217,0.05)] dark:shadow-[0_1px_40px_rgba(109,40,217,0.22),0_1px_0_rgba(139,92,246,0.28)]">
      <div className="mx-auto flex md:grid max-w-7xl md:grid-cols-[1fr_auto_1fr] items-center justify-between gap-4 md:gap-6">
        <div className="justify-self-start shrink-0">
          <h1 className="text-sm md:text-lg font-semibold uppercase tracking-[0.1em] md:tracking-[0.18em]">
            Zyntrix Labs
          </h1>
        </div>

        <nav className="flex items-center justify-center gap-2 md:gap-6 text-sm">
          {[
            { href: '/', label: 'Home', icon: Home },
            { href: '/WhoWeAre', label: 'Who We Are', icon: Users },
            { href: '/services', label: 'Services', icon: LayoutGrid },
            { href: '/portfolio', label: 'Portfolio', icon: FolderKanban },
            { href: '/Carrier', label: 'Carrier', icon: Briefcase },
          ].map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 md:px-3 py-2 font-medium transition-colors group ${
                  isActive ? 'text-purple-600 dark:text-purple-400' : 'hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                <span className="hidden md:inline">{link.label}</span>
                <span className="inline md:hidden">
                  <Icon size={20} />
                </span>
                {/* Active Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-2 md:left-3 right-2 md:right-3 h-[2px] bg-purple-600 dark:bg-purple-500 rounded-t-md" />
                )}
                {/* Hover Underline (optional, but requested active underline specifically) */}
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-purple-400 dark:bg-purple-500 opacity-0 transition-all duration-300 rounded-t-md group-hover:left-2 md:group-hover:left-3 group-hover:right-2 md:group-hover:right-3 group-hover:opacity-100" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-2 md:gap-3">
          <StarBorder
            as={Link}
            className="shrink-0"
            color="magenta"
            href="/ContactUs"
            speed="5s"
          >
            <div className="flex items-center gap-2">
              <Rocket size={16} strokeWidth={1.25} />
              <span className="hidden sm:inline">Contact Us</span>
            </div>
          </StarBorder>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
