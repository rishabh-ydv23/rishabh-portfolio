"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#0a0e0f]/80 dark:bg-[#0a0e0f]/80 backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto max-w-5xl px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo / brand */}
        <a
          href="#"
          className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest hover:text-emerald-300 transition-colors flex items-center gap-2 relative group"
        >
          <span className="text-slate-600 group-hover:text-emerald-600 dark:text-emerald-400 transition-colors">&gt;</span> ry
          <span className="animate-pulse text-emerald-600 dark:text-emerald-400 group-hover:opacity-100 opacity-80">_</span>
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
                className={`relative text-xs font-mono tracking-widest uppercase transition-all duration-300 py-2 px-1 ${isActive
                    ? "text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    : "text-slate-500 dark:text-slate-500 hover:text-emerald-600 dark:text-emerald-400"
                  }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right side (Theme Toggle + Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="sm:hidden text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:text-emerald-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden bg-white/95 dark:bg-[#0a0e0f]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80"
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              {navLinks.map((l) => {
                const sectionId = l.href.slice(1);
                const isActive = activeId === sectionId;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xs font-mono uppercase tracking-wider transition-colors py-2 px-3 rounded-md ${isActive
                        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-500/30 dark:border-emerald-400/30"
                        : "text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:text-emerald-400 hover:bg-slate-800/50"
                      }`}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
