"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  FileText,
  Terminal,
  ChevronRight,
  Code2,
  Database,
  Layers,
  Wrench,
  Cpu,
  ArrowUpRight,
  Zap,
  BookOpen,
  Award,
} from "lucide-react";

/* ─── Typing animation hook ─── */
function useTyping(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplayed(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setCharIdx(0);
            setWordIdx((i) => (i + 1) % words.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

/* ─── Fade-in section wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section heading ─── */
function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs font-mono text-emerald-400 tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
        <span className="inline-block w-4 h-px bg-emerald-400" />
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
        {title}
      </h2>
    </div>
  );
}

const skills = [
  {
    icon: <Code2 size={20} />,
    title: "Languages",
    items: ["C++", "JavaScript", "Java", "Python", "C", "PHP"],
  },
  {
    icon: <Layers size={20} />,
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    icon: <Terminal size={20} />,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
  },
  {
    icon: <Database size={20} />,
    title: "Databases",
    items: ["MongoDB", "MySQL / SQL", "phpMyAdmin"],
  },
  {
    icon: <Wrench size={20} />,
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Postman", "Figma"],
  },
  {
    icon: <Cpu size={20} />,
    title: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

const allProjectsData = [
  {
    category: "academic",
    label: "Academic",
    title: "VaxCare Portal",
    description: "An online system to manage vaccine appointments, track availability, and send reminders. JWT-based role authentication with admin dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Leaflet", "SendGrid"],
    live: "https://vaxcare-portal-frontend.onrender.com/",
    github: "https://github.com/rishabh-ydv23/Smart-Vaccine-System",
  },
  {
    category: "freelance",
    label: "Freelance",
    title: "Ex-Servicemen Association",
    description: "A responsive web platform for Indian Army, Navy, and Air Force veterans. Provides updates, events, and resources for ex-servicemen and their families.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://ex-servicemen-frontend.onrender.com/",
    github: "https://github.com/rishabh-ydv23/Ex-Servicemen-Association",
  },
  {
    category: "personal",
    label: "Personal",
    title: "Rishabh Portfolio",
    description: "Personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion showcasing projects, freelance work, and technical skills.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    live: "",
    github: "https://github.com/rishabh-ydv23/rishabh-portfolio",
  },
  {
    category: "personal",
    label: "Personal",
    title: "Forever E-Commerce",
    description: "A responsive clothing e-commerce website featuring product collections, detail pages, shopping cart functionality, and a modern UI.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://ecommerce-website-green-six.vercel.app/",
    github: "https://github.com/rishabh-ydv23/Forever-Ecommerce-website",
  },
  {
    category: "other",
    label: "Other",
    title: "Param Portfolio",
    description: "A personal portfolio website built for a friend, showcasing their work and skills with a clean modern design.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://param-portfolio-one.vercel.app/",
    github: "https://github.com/rishabh-ydv23/paramPortfolio",
  },
];

const PROJECT_CATS = [
  { key: "all",       label: "All" },
  { key: "academic",  label: "Academic" },
  { key: "freelance", label: "Freelance" },
  { key: "personal",  label: "Personal" },
  { key: "other",     label: "Other" },
];

const certifications = [
  { org: "Oracle", name: "OCI 2025 Certified Generative AI Professional" },
  { org: "Apna College", name: "Delta Batch – Full Stack Development" },
  { org: "Oracle", name: "OCI 2025 Certified AI Foundation Associate" },
  { org: "NPTEL / IIT KGP", name: "Cloud Computing (8-week course)" },
  { org: "IBM", name: "Introduction to Hardware and Operating Systems" },
];

const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech — Computer Science & Engineering",
    info: "2023 – Present",
    location: "Punjab, India",
  },
  {
    school: "U.S International School",
    degree: "Intermediate (Class XII)",
    info: "2021 – 2022",
    location: "Bhagwant Nagar, Unnao",
  },
  {
    school: "U.S International School",
    degree: "Matriculation (Class X)",
    info: "2019 – 2020",
    location: "Bhagwant Nagar, Unnao",
  },
];

const currentlyLearning = [
  { icon: <BookOpen size={18} />, title: "Next.js Optimization", desc: "Advanced patterns & performance tuning" },
  { icon: <Code2 size={18} />, title: "System Design", desc: "Scalable architecture & database design" },
  { icon: <Zap size={18} />, title: "Cloud Deployment", desc: "AWS, Docker & CI/CD pipelines" },
  { icon: <Award size={18} />, title: "Advanced DSA", desc: "Graph algorithms & DP optimization" },
];

const timeline = [
  { year: "2022", event: "Class 12 Foundation", detail: "Basic foundation in Computer Science" },
  { year: "2023", event: "BTech CSE @ LPU", detail: "Deep dive into CS core subjects" },
  { year: "2024", event: "Full-Stack Development", detail: "React, Node.js, MongoDB projects" },
  { year: "2025", event: "Freelance Work & Cloud", detail: "Real-world projects, Oracle Certified" },
];

function ProjectsSection() {
  const [activeCat, setActiveCat] = useState("all");

  const filtered = activeCat === "all"
    ? allProjectsData
    : allProjectsData.filter((p) => p.category === activeCat);

  return (
    <section id="projects" className="mb-28">
      <FadeIn>
        <p className="text-xs font-mono text-emerald-400 tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-emerald-400" />
          03 / projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono mb-3">Projects</h2>
        <p className="text-slate-500 text-sm mb-8">Things I&apos;ve built across different domains.</p>

        {/* ── Pill filters ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PROJECT_CATS.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`px-5 py-2 text-[12px] font-semibold rounded-full transition-all duration-200 ${
                activeCat === cat.key
                  ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/20"
                  : "border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 bg-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* ── Cards grid ── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => (
          <FadeIn key={p.title} delay={idx * 0.07}>
            <div className="group h-full border border-slate-800 hover:border-emerald-400/40 bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300 p-5 rounded-xl backdrop-blur-sm flex flex-col">

              {/* Top: icon placeholder + title + links */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  {/* Icon box */}
                  <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0 text-emerald-400">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm leading-snug">{p.title}</h3>
                    <span className="text-[10px] text-emerald-400/70 uppercase tracking-widest">{p.label}</span>
                  </div>
                </div>
                <div className="flex gap-1.5 shrink-0 pt-0.5">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="text-slate-600 hover:text-emerald-400 transition-colors">
                      <Github size={15} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="text-slate-600 hover:text-emerald-400 transition-colors">
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Divider line (like progress bar in screenshot) */}
              <div className="w-full h-px bg-slate-800 mb-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-400/0 w-3/4" />
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">{p.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="text-[10px] font-mono text-emerald-400/70 bg-emerald-400/5 border border-emerald-400/15 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const typed = useTyping([
    "Full-Stack Developer",
    "Problem Solver",
    "CS Student @ LPU",
    "Open Source Enthusiast",
  ]);

  return (
    <main className="min-h-screen bg-[#0a0e0f] dark:bg-[#0a0e0f] text-slate-300 font-mono selection:bg-emerald-400/30">
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 py-8">
        {/* ── AVAILABILITY BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-[12px] text-emerald-400 font-mono tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          OPEN TO INTERNSHIPS
        </motion.div>
        {/* ── HERO ── */}
        <section className="min-h-[88vh] flex flex-col justify-center pb-12">
          {/* Two-column: text left, photo right */}
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10 sm:gap-16">

            {/* ── Left: text content ── */}
            <div className="flex-1 flex flex-col">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-emerald-400 text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-emerald-400" />
                  Hello, World
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight mb-4"
              >
                Rishabh
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-3 mb-10"
              >
                <span className="text-slate-500 text-lg sm:text-xl">//</span>
                <span className="text-lg sm:text-xl text-slate-300 min-w-[240px]">
                  {typed}
                  <span className="animate-pulse text-emerald-400">_</span>
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <Button
                  asChild
                  className="bg-emerald-400 text-black hover:bg-emerald-300 font-bold rounded-none px-6 h-11 text-sm tracking-wide transition-all"
                >
                  <a href="#projects">
                    View Projects <ChevronRight size={16} />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:border-emerald-400 hover:text-emerald-400 bg-transparent rounded-none px-6 h-11 text-sm tracking-wide transition-all"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>
            </div>

            {/* ── Right: photo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 relative"
            >
              {/* Photo card */}
              <div className="relative w-[200px] sm:w-[240px] lg:w-[270px]">
                {/* Corner brackets */}
                <span className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-emerald-400 z-20" />
                <span className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-emerald-400 z-20" />
                <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-emerald-400 rounded-full z-20" />
                <span className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-emerald-400/40 rounded-full z-20" />
                {/* Glow */}
                <div className="absolute -inset-4 bg-emerald-400/8 blur-3xl rounded-full -z-10" />
                {/* Image wrapper with dark bg to kill white background */}
                <div
                  className="relative overflow-hidden border border-slate-700/50"
                  style={{ background: "linear-gradient(160deg,#0f1a18 0%,#0a1512 60%,#091110 100%)" }}
                >
                  {/* Bottom fade overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#091110]/80 to-transparent z-10 pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ris-removebg-preview.png"
                    alt="Rishabh"
                    className="w-full object-cover object-top"
                    style={{
                      mixBlendMode: "luminosity",
                      filter: "contrast(1.1) brightness(0.88) saturate(0.6)",
                    }}
                  />
                </div>
                {/* Terminal status bar */}
                <div className="border border-slate-700/60 border-t-0 bg-[#0a0e0f]/90 px-3 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[11px] text-emerald-400 tracking-widest">rishabh</span>
                  <span className="ml-auto text-[10px] text-slate-600">LPU · CSE</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-slate-800"
          >
            {[
              { n: "5+", label: "Projects Shipped" },
              { n: "5+", label: "Certifications" },
              { n: "6+", label: "Languages" },
              { n: "3rd", label: "Year BTech CSE" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.n}</p>
                <p className="text-xs text-slate-500 tracking-wider uppercase mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="mb-28">
          <FadeIn>
            <SectionHeading label="01 / about" title="About Me" />
            <div className="grid sm:grid-cols-5 gap-10 items-start">
              <div className="sm:col-span-3 space-y-4 text-slate-400 leading-relaxed text-[15px]">
                <p>
                  I&apos;m a 3rd-year Computer Science student at{" "}
                  <span className="text-emerald-400 font-semibold">Lovely Professional University</span>,
                  passionate about building full-stack products that solve real problems.
                </p>
                <p>
                  I have strong foundations in{" "}
                  <span className="text-white">data structures & algorithms</span>,
                  object-oriented programming, and core CS subjects like DBMS and
                  operating systems. I enjoy the intersection of clean code, great UX,
                  and scalable architecture.
                </p>
                <p>
                  Currently deepening my expertise in{" "}
                  <span className="text-white">cloud platforms</span> and exploring
                  generative AI integrations — certified by Oracle in both GenAI and AI
                  Foundations.
                </p>
              </div>
              <div className="sm:col-span-2">
                <div className="border border-slate-700/60 bg-slate-900/50 rounded-sm p-5 backdrop-blur-sm">
                  <p className="text-emerald-400 text-xs tracking-widest mb-4 uppercase">
                    quick.info
                  </p>
                  {[
                    { k: "location", v: "Punjab, India" },
                    { k: "university", v: "LPU" },
                    { k: "degree", v: "B.Tech CSE" },
                    { k: "cgpa", v: "7.23" },
                    { k: "status", v: "Open to opportunities" },
                  ].map(({ k, v }) => (
                    <div key={k} className="flex justify-between text-sm py-2 border-b border-slate-800 last:border-0">
                      <span className="text-slate-500">{k}</span>
                      <span className="text-slate-200">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="mb-28">
          <FadeIn>
            <SectionHeading label="02 / skills" title="Technical Skills" />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((cat, idx) => (
              <FadeIn key={cat.title} delay={idx * 0.07}>
                <div className="group border border-slate-800 bg-slate-900/40 hover:border-emerald-400/50 hover:bg-slate-900/70 transition-all duration-300 p-5 rounded-sm backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-emerald-400">{cat.icon}</span>
                    <h3 className="text-white font-bold text-sm tracking-wide uppercase">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-slate-400 border border-slate-700 group-hover:border-slate-600 px-2.5 py-1 rounded-sm transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <ProjectsSection />

        {/* ── CERTIFICATIONS ── */}
        <section id="certifications" className="mb-28">
          <FadeIn>
            <SectionHeading label="04 / certifications" title="Certifications" />
            <div className="border border-slate-800 bg-slate-900/40 rounded-sm divide-y divide-slate-800 backdrop-blur-sm">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: false }}
                  className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <ChevronRight size={14} className="text-emerald-400 shrink-0" />
                    <span className="text-slate-200 text-sm">{cert.name}</span>
                  </div>
                  <span className="text-xs text-slate-500 shrink-0 border border-slate-700 px-2.5 py-0.5 rounded-sm">
                    {cert.org}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section id="achievements" className="mb-28">
          <FadeIn>
            <SectionHeading label="05 / achievements" title="Achievements" />
            <div className="grid gap-4 sm:grid-cols-2">
              {/* DSA Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4 }}
                className="border border-slate-800 hover:border-emerald-400/40 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300 p-6 rounded-sm backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 border border-emerald-400/30 bg-emerald-400/5 rounded-sm flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    200+
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">DSA Problems Solved</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-3">
                      Solved 200+ DSA problems across multiple platforms since March 2025.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["LeetCode", "GeeksforGeeks", "HackerRank"].map((p) => (
                        <span key={p} className="text-[10px] font-mono text-emerald-400/70 bg-emerald-400/5 border border-emerald-400/15 px-2 py-0.5 rounded-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* HackerRank Stars Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="border border-slate-800 hover:border-emerald-400/40 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300 p-6 rounded-sm backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 border border-amber-400/30 bg-amber-400/5 rounded-sm flex items-center justify-center text-amber-400 font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">HackerRank Ratings</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-3">
                      Earned top star ratings across multiple languages on HackerRank.
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { lang: "C++",    stars: 5 },
                        { lang: "SQL",    stars: 4 },
                        { lang: "Python", stars: 4 },
                      ].map(({ lang, stars }) => (
                        <div key={lang} className="flex items-center gap-3">
                          <span className="text-[11px] text-slate-400 font-mono w-12">{lang}</span>
                          <span className="text-xs tracking-widest text-amber-400">
                            {"★".repeat(stars)}{"☆".repeat(5 - stars)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="mb-28">
          <FadeIn>
            <SectionHeading label="06 / education" title="Education" />
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 transition-all p-6 rounded-sm flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="shrink-0 w-1 h-10 bg-emerald-400 rounded-full hidden sm:block" />
                    <div className="flex-1">
                      <h3 className="text-white font-bold">{edu.school}</h3>
                      <p className="text-slate-400 text-sm mt-0.5">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 text-sm font-mono">{edu.info}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{edu.location}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── TRAINING ── */}
        <section id="training" className="mb-28">
          <FadeIn>
            <SectionHeading label="07 / training" title="Summer Training" />
            <div className="border border-slate-800 bg-slate-900/40 rounded-sm p-7 backdrop-blur-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg">
                    Full Stack Development in React & Node
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Centre for Professional Enhancement, LPU · June – July 2025
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-slate-600 hover:border-emerald-400 hover:text-emerald-400 bg-transparent rounded-none text-slate-400 text-xs gap-1.5"
                >
                  <Link
                    href="https://onedrive.live.com/?cid=840bef1d2d63f0b9&id=840BEF1D2D63F0B9%21s27c69c51e5874d33b8a1f13b38d6372b&resid=840BEF1D2D63F0B9%21s27c69c51e5874d33b8a1f13b38d6372b&ithint=file%2Cpdf&e=OM7KQP&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy84NDBiZWYxZDJkNjNmMGI5L0lRQlJuTVluaC1VelRiaWg4VHM0MWpjckFRNFd5SXlEWTNqUVg5RmhaS2NjZng4P2U9T003S1FQ&v=validatepermission"
                    target="_blank"
                  >
                    <FileText size={13} /> Certificate
                  </Link>
                </Button>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Instructor-led course covering web development with React.js and Node.js.",
                  "Built dynamic front-end interfaces and implemented RESTful APIs using Express.",
                  "Gained exposure to databases, API integration, version control, and deployment fundamentals.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <ChevronRight size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* ── CURRENTLY LEARNING ── */}
        <section id="learning" className="mb-28">
          <FadeIn>
            <SectionHeading label="08 / learning" title="Currently Learning" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {currentlyLearning.map((item, idx) => (
                <FadeIn key={item.title} delay={idx * 0.07}>
                  <div className="border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 transition-all p-4 rounded-sm flex flex-col h-full">
                    <div className="text-emerald-400 mb-3">{item.icon}</div>
                    <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── TIMELINE ── */}
        <section id="timeline" className="mb-28">
          <FadeIn>
            <SectionHeading label="09 / timeline" title="My Journey" />
            <div className="space-y-0">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: false }}
                  className="flex gap-6 pb-8 border-l-2 border-emerald-400/20 hover:border-emerald-400/50 pl-6 ml-3 last:pb-0 transition-colors"
                >
                  <div className="absolute -left-3 w-6 h-6 rounded-full bg-emerald-400/20 border-2 border-emerald-400 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-emerald-400 font-bold text-sm">{item.year}</p>
                    <h3 className="text-white font-bold mt-1">{item.event}</h3>
                    <p className="text-slate-500 text-sm mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="mb-16">
          <FadeIn>
            <SectionHeading label="10 / contact" title="Get In Touch" />
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-slate-800 bg-slate-900/40 rounded-sm p-7 backdrop-blur-sm">
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  I&apos;m currently open to internship and entry-level software
                  engineering roles. If you have an opportunity or just want to
                  connect, my inbox is always open.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail size={16} />,
                      text: "rishabhyadavunnao@gmail.com",
                      href: "mailto:rishabhyadavunnao@gmail.com",
                    },
                    {
                      icon: <Linkedin size={16} />,
                      text: "linkedin.com/in/rishabhydv23",
                      href: "https://www.linkedin.com/in/rishabhydv23/",
                    },
                    {
                      icon: <Github size={16} />,
                      text: "github.com/rishabh-ydv23",
                      href: "https://github.com/rishabh-ydv23",
                    },
                  ].map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-400 transition-colors group"
                    >
                      <span className="text-emerald-400">{c.icon}</span>
                      {c.text}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <ContactForm />
            </div>
          </FadeIn>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-slate-800 pt-8 pb-4 text-center">
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} Rishabh · Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
}