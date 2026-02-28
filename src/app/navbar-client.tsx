"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certs" },
  { href: "#achievements", label: "achieve" },
  { href: "#education", label: "edu" },
  { href: "#contact", label: "contact" },
];

export default function NavbarClient() {
  const activeId = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0a0e0f]/90 dark:bg-[#0a0e0f]/90 backdrop-blur-md">
      <nav className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* Logo / brand */}
        <a
          href="#"
          className="text-emerald-400 font-bold text-sm tracking-widest hover:text-emerald-300 transition-colors flex items-center gap-2"
        >
          <span className="text-slate-600">&gt;</span> ry
          <span className="animate-pulse text-emerald-400">_</span>
        </a>

        {/* Links - Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((l) => {
            const sectionId = l.href.slice(1);
            const isActive = activeId === sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? "text-emerald-400 border-b-2 border-emerald-400 pb-0.5"
                    : "text-slate-500 hover:text-emerald-400"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile: compact pill links */}
        <div className="flex sm:hidden items-center gap-2 overflow-x-auto">
          {navLinks.map((l) => {
            const sectionId = l.href.slice(1);
            const isActive = activeId === sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-[10px] font-mono uppercase tracking-wider transition-colors whitespace-nowrap px-2 py-1 rounded-sm ${
                  isActive
                    ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/30"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
