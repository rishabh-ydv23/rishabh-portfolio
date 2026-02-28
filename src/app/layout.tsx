import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rishabh | Software Developer",
  description:
    "Portfolio of Rishabh — 3rd year B.Tech CSE student, full-stack developer, and problem solver.",
};

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certs" },
  { href: "#education", label: "edu" },
  { href: "#contact", label: "contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jetbrains.variable} font-mono antialiased bg-[#0a0e0f] text-slate-300`}
      >
        {/* ── Navbar ── */}
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0a0e0f]/90 backdrop-blur-md">
          <nav className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
            {/* Logo / brand */}
            <a
              href="#"
              className="text-emerald-400 font-bold text-sm tracking-widest hover:text-emerald-300 transition-colors flex items-center gap-2"
            >
              <span className="text-slate-600">&gt;</span> ry
              <span className="animate-pulse text-emerald-400">_</span>
            </a>

            {/* Links */}
            <div className="hidden sm:flex items-center gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs text-slate-500 hover:text-emerald-400 tracking-widest uppercase transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Mobile: compact pill links */}
            <div className="flex sm:hidden items-center gap-3 overflow-x-auto">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[10px] text-slate-500 hover:text-emerald-400 uppercase tracking-wider transition-colors whitespace-nowrap"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}