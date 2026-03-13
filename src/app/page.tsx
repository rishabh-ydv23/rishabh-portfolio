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
    <div className="mb-14 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight mb-4 relative inline-block">
        {title}
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60%", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"
        />
      </h2>
      <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400/80 tracking-[0.2em] uppercase mt-2">
        {label}
      </p>
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
    category: "personal",
    label: "Personal",
    title: "VaxCare Portal",
    description: "An online system to manage vaccine appointments, track availability, and send reminders. JWT-based role authentication with admin dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Leaflet", "SendGrid"],
    live: "https://vaxcare-portal-frontend.onrender.com/",
    github: "https://github.com/rishabh-ydv23/Smart-Vaccine-System",
  },
  {
    category: "client-work",
    label: "Client Work",
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
    category: "experiments",
    label: "Experiments",
    title: "Param Portfolio",
    description: "A personal portfolio website built for a friend, showcasing their work and skills with a clean modern design.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://param-portfolio-one.vercel.app/",
    github: "https://github.com/rishabh-ydv23/paramPortfolio",
  },
];

const PROJECT_CATS = [
  { key: "all", label: "All" },
  { key: "personal", label: "Personal" },
  { key: "client-work", label: "Client Work" },
  { key: "experiments", label: "Experiments" },
];

const certifications = [
  { org: "Oracle", name: "OCI 2025 Certified Generative AI Professional", link: "https://1drv.ms/b/c/840bef1d2d63f0b9/IQC-ym04dwasSLS7Z1xaDIigARg8wZuI1LYUPmfX35vvlh8?e=Z8peEX" },
  { org: "Apna College", name: "Delta Batch – Full Stack Development", link: "https://1drv.ms/b/c/840bef1d2d63f0b9/IQDihJtUO_XBQ5Var_kuM2vuAT73Hlvmv1z25QKg3nSq13A?e=heJcBy" },
  { org: "Oracle", name: "OCI 2025 Certified AI Foundation Associate", link: "https://1drv.ms/b/c/840bef1d2d63f0b9/IQCAbrv2mOBiQ4wc72IfxpD5ATtO--BkO-hy-hojEiP3DWI?e=txibuU" },
  { org: "NPTEL / IIT KGP", name: "Cloud Computing (8-week course)", link: "https://1drv.ms/b/c/840bef1d2d63f0b9/IQA__zyyh1JCSK1009BchXPeAb1yGbbqjAHjmYVSS97F_z0?e=bkvfvd" },
  { org: "IBM", name: "Introduction to Hardware and Operating Systems", link: "https://1drv.ms/b/c/840bef1d2d63f0b9/IQBHdA0hoeyNSJjvb7TjwznSARhkNOE7JkN6xf9Xoo78UNw?e=98IMVd" },
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
        <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-emerald-400" />
          03 / projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-mono mb-3">Projects</h2>
        <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">Things I&apos;ve built across different domains.</p>

        {/* ── Pill filters ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PROJECT_CATS.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`px-5 py-2 text-[12px] font-semibold rounded-full transition-all duration-200 ${activeCat === cat.key
                  ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/20"
                  : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-500 hover:text-slate-800 dark:text-slate-200 bg-transparent"
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
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="group h-full border border-slate-200 dark:border-slate-800 hover:border-emerald-400/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/80 dark:bg-slate-900/80 transition-all duration-300 p-6 rounded-2xl backdrop-blur-md flex flex-col shadow-sm hover:shadow-emerald-400/10"
            >

              <div className="h-32 rounded-t-2xl w-full bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden -mt-6 -mx-6 mb-5 border-b border-slate-200 dark:border-slate-800/80">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e0f] to-transparent"></div>
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <Code2 size={16} />
                </motion.div>
              </div>

              {/* Title + Cat */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl leading-snug tracking-wide group-hover:text-emerald-600 dark:text-emerald-400 transition-colors">{p.title}</h3>
                  <span className="inline-block mt-1 text-[10px] text-emerald-600 dark:text-emerald-400/80 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20 dark:border-emerald-400/20">{p.label}</span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0 pt-0.5 mt-5">
                {p.live && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 text-white dark:text-[#0a0e0f] font-bold py-2 rounded-lg transition-all glow-emerald hover-glow-emerald text-sm"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </motion.a>
                )}
                {p.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:bg-emerald-500/10 font-bold py-2 rounded-lg transition-all text-sm"
                  >
                    <Github size={16} /> Code
                  </motion.a>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">{p.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.slice(0, 4).map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                    viewport={{ once: false }}
                    className="text-[10px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400/80 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-500/20 dark:border-emerald-400/20 px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </motion.span>
                ))}
                {p.tech.length > 4 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="text-[10px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md"
                  >
                    +{p.tech.length - 4}
                  </motion.span>
                )}
              </div>
            </motion.div>
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
    <main className="min-h-screen bg-white dark:bg-[#0a0e0f] dark:bg-[#0a0e0f] text-slate-700 dark:text-slate-300 font-mono selection:bg-emerald-400/30">
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
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 dark:border-emerald-400/30 bg-emerald-50 dark:bg-emerald-400/5 text-[12px] text-emerald-600 dark:text-emerald-400 font-mono tracking-widest"
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
                <p className="text-emerald-600 dark:text-emerald-400 text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-emerald-400" />
                  Hello, World
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-none tracking-tight mb-4 drop-shadow-lg"
              >
                Rishabh
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-3 mb-10"
              >
                <span className="text-slate-500 dark:text-slate-500 text-lg sm:text-xl">//</span>
                <span className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 min-w-[240px]">
                  {typed}
                  <span className="animate-pulse text-emerald-600 dark:text-emerald-400">_</span>
                </span>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.45 },
                  },
                }}
                className="flex flex-wrap gap-3"
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-emerald-500 text-black hover:bg-emerald-400 font-bold rounded-full px-8 h-12 text-sm tracking-wide transition-all glow-emerald hover-glow-emerald"
                  >
                    <a href="#projects">
                      View My Work <ChevronRight size={16} />
                    </a>
                  </Button>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-50 dark:bg-emerald-500/10 backdrop-blur-sm rounded-full px-8 h-12 text-sm tracking-wide transition-all glow-emerald hover-glow-emerald"
                  >
                    <a href="#contact">Contact Me</a>
                  </Button>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-slate-600 text-slate-700 dark:text-slate-300 hover:border-emerald-400 hover:text-emerald-600 dark:text-emerald-400 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl px-6 h-11 text-sm tracking-wide transition-all gap-2"
                  >
                    <a href="https://docs.google.com/document/d/1FiwIMMx5VnvLdUpMgC-XZovc_bzwvXkL/edit" target="_blank">
                      <FileText size={16} /> Resume
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* ── Right: photo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                delay: 0.2,
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              }}
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
                <div className="absolute -inset-4 bg-emerald-50 dark:bg-emerald-400/10 blur-3xl rounded-full -z-10" />
                {/* Image wrapper with dark bg to kill white background */}
                <div
                  className="relative overflow-hidden border border-slate-200 dark:border-slate-700/50 rounded-xl"
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
                <div className="border border-slate-700/60 border-t-0 bg-white/90 dark:bg-[#0a0e0f]/90 backdrop-blur-md px-3 py-2 flex items-center gap-2 rounded-b-xl shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 tracking-widest">rishabh</span>
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
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            {[
              { n: "5+", label: "Projects Shipped" },
              { n: "5+", label: "Certifications" },
              { n: "6+", label: "Languages" },
              { n: "3rd", label: "Year BTech CSE" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{s.n}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 tracking-wider uppercase mt-1">
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
              <div className="sm:col-span-3 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                <p>
                  I&apos;m a 3rd-year Computer Science student at{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Lovely Professional University</span>,
                  passionate about building full-stack products that solve real problems.
                </p>
                <p>
                  I have strong foundations in{" "}
                  <span className="text-slate-900 dark:text-white">data structures & algorithms</span>,
                  object-oriented programming, and core CS subjects like DBMS and
                  operating systems. I enjoy the intersection of clean code, great UX,
                  and scalable architecture.
                </p>
                <p>
                  Currently deepening my expertise in{" "}
                  <span className="text-slate-900 dark:text-white">cloud platforms</span> and exploring
                  generative AI integrations — certified by Oracle in both GenAI and AI
                  Foundations.
                </p>
              </div>
              <div className="sm:col-span-2">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="border border-slate-700/60 hover:border-emerald-400/40 bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl p-6 backdrop-blur-md shadow-lg"
                >
                  <p className="text-emerald-600 dark:text-emerald-400 text-xs tracking-widest mb-5 uppercase font-bold">
                    quick.info
                  </p>
                  {[
                    { k: "location", v: "Punjab, India" },
                    { k: "university", v: "LPU" },
                    { k: "degree", v: "B.Tech CSE" },
                    { k: "cgpa", v: "7.23" },
                    { k: "status", v: "Open to opportunities" },
                  ].map(({ k, v }) => (
                    <div key={k} className="flex justify-between text-sm py-2.5 border-b border-slate-200 dark:border-slate-800 last:border-0 hover:bg-slate-800/30 px-2 rounded-md transition-colors">
                      <span className="text-slate-500 dark:text-slate-500 font-medium">{k}</span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">{v}</span>
                    </div>
                  ))}
                </motion.div>
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
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group border border-emerald-500/10 bg-slate-100/40 dark:bg-slate-900/40 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 p-6 rounded-2xl backdrop-blur-md h-full shadow-[inset_0_0_20px_rgba(16,185,129,0.02)] hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <span className="text-emerald-600 dark:text-emerald-400 p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl transition-transform group-hover:scale-110 duration-300 border border-emerald-200 dark:border-emerald-500/20">{cat.icon}</span>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {cat.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                        viewport={{ once: false }}
                        className="text-[13px] font-medium text-emerald-900 dark:text-emerald-100/80 border border-emerald-200 dark:border-emerald-500/20 bg-white/80 dark:bg-[#0a0e0f]/80 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
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
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  whileHover={{ scale: 1.01, x: 5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                  transition={{ delay: idx * 0.08, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="border border-emerald-500/10 hover:border-emerald-500/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/80 dark:bg-slate-900/80 transition-all p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                    viewport={{ once: false }}
                    className="shrink-0 w-1.5 h-12 bg-emerald-500 rounded-full hidden sm:block shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                  />
                  <div className="flex-1 relative z-10">
                    <h3 className="text-emerald-900 dark:text-emerald-50 font-bold text-lg">{cert.name}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400/80 text-sm mt-1">{cert.org}</p>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-50 dark:bg-emerald-500/10 bg-white dark:bg-[#0a0e0f] rounded-lg text-slate-700 dark:text-slate-300 text-xs gap-1.5 shrink-0 transition-all font-semibold"
                    >
                      <Link href={cert.link} target="_blank">
                        <FileText size={14} /> Verified Credential
                      </Link>
                    </Button>
                  </motion.div>
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
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4 }}
                className="border border-slate-200 dark:border-slate-800 hover:border-emerald-400/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/70 dark:bg-slate-900/70 transition-all duration-300 p-6 rounded-2xl backdrop-blur-md shadow-sm hover:shadow-emerald-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 border border-emerald-500/30 dark:border-emerald-400/30 bg-emerald-50 dark:bg-emerald-400/10 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm">
                    200+
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">DSA Problems Solved</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-3">
                      Solved 200+ DSA problems across multiple platforms since March 2025.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["LeetCode", "GeeksforGeeks", "HackerRank"].map((p) => (
                        <span key={p} className="text-[10px] font-mono text-emerald-400/70 bg-emerald-50 dark:bg-emerald-400/5 border border-emerald-400/15 px-2 py-0.5 rounded-sm">
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
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="border border-slate-200 dark:border-slate-800 hover:border-amber-400/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/70 dark:bg-slate-900/70 transition-all duration-300 p-6 rounded-2xl backdrop-blur-md shadow-sm hover:shadow-amber-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 border border-amber-400/30 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 font-bold text-xl drop-shadow-sm">
                    ★
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">HackerRank Ratings</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-3">
                      Earned top star ratings across multiple languages on HackerRank.
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { lang: "C++", stars: 5 },
                        { lang: "SQL", stars: 4 },
                        { lang: "Python", stars: 4 },
                      ].map(({ lang, stars }) => (
                        <div key={lang} className="flex items-center gap-3">
                          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-mono w-12">{lang}</span>
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
                  <motion.div
                    whileHover={{ scale: 1.01, x: 5, backgroundColor: "rgba(15, 23, 42, 0.6)" }}
                    className="border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:border-emerald-400/30 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/60 dark:bg-slate-900/60 transition-all duration-300 p-6 rounded-xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 shadow-sm hover:shadow-emerald-400/10"
                  >
                    <motion.div
                      initial={{ height: "0%" }}
                      whileInView={{ height: "100%" }}
                      transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                      viewport={{ once: false }}
                      className="shrink-0 w-1.5 h-10 bg-emerald-400 rounded-full hidden sm:block"
                    />
                    <div className="flex-1">
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg">{edu.school}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">{edu.degree}</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm font-mono">{edu.info}</p>
                      <p className="text-slate-500 dark:text-slate-500 text-xs mt-0.5">{edu.location}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── TRAINING ── */}
        <section id="training" className="mb-28">
          <FadeIn>
            <SectionHeading label="07 / training" title="Summer Training" />
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:border-emerald-400/30 bg-slate-100/40 dark:bg-slate-900/40 rounded-2xl p-8 backdrop-blur-md transition-all shadow-sm hover:shadow-emerald-400/10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl tracking-wide">
                    Full Stack Development in React & Node
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400/80 font-medium text-sm mt-1.5">
                    Centre for Professional Enhancement, LPU · June – July 2025
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-slate-600 hover:border-emerald-400 hover:text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:bg-emerald-400/10 bg-transparent rounded-lg text-slate-700 dark:text-slate-300 text-xs gap-1.5 font-semibold transition-all"
                  >
                    <Link
                      href="https://onedrive.live.com/?cid=840bef1d2d63f0b9&id=840BEF1D2D63F0B9%21s27c69c51e5874d33b8a1f13b38d6372b&resid=840BEF1D2D63F0B9%21s27c69c51e5874d33b8a1f13b38d6372b&ithint=file%2Cpdf&e=OM7KQP&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy84NDBiZWYxZDJkNjNmMGI5L0lRQlJuTVluaC1VelRiaWg4VHM0MWpjckFRNFd5SXlEWTNqUVg5RmhaS2NjZng4P2U9T003S1FQ&v=validatepermission"
                      target="_blank"
                    >
                      <FileText size={14} /> Certificate
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Instructor-led course covering web development with React.js and Node.js.",
                  "Built dynamic front-end interfaces and implemented RESTful APIs using Express.",
                  "Gained exposure to databases, API integration, version control, and deployment fundamentals.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <ChevronRight size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>
        </section>

        {/* ── CURRENTLY LEARNING ── */}
        <section id="learning" className="mb-28">
          <FadeIn>
            <SectionHeading label="08 / learning" title="Currently Learning" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {currentlyLearning.map((item, idx) => (
                <FadeIn key={item.title} delay={idx * 0.07}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="border border-slate-200 dark:border-slate-800 hover:border-emerald-400/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/70 dark:bg-slate-900/70 transition-all p-5 rounded-2xl flex flex-col h-full shadow-sm hover:shadow-emerald-400/10"
                  >
                    <div className="text-emerald-600 dark:text-emerald-400 mb-4 bg-emerald-50 dark:bg-emerald-400/10 w-10 h-10 flex items-center justify-center rounded-xl">{item.icon}</div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed flex-1">{item.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── TIMELINE ── */}
        <section id="timeline" className="mb-28">
          <FadeIn>
            <SectionHeading label="09 / timeline" title="Academic & Professional Journey" />
            <div className="space-y-0">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: false }}
                  className="flex gap-6 pb-8 border-l-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 pl-6 ml-3 last:pb-0 transition-all rounded-r-xl relative group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1 + (idx * 0.1), type: "spring" }}
                    viewport={{ once: false }}
                    className="absolute -left-[13px] w-6 h-6 rounded-full bg-white dark:bg-[#0a0e0f] border-2 border-slate-200 dark:border-slate-700 group-hover:border-emerald-400 flex items-center justify-center top-0 transition-all group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors" />
                  </motion.div>
                  <div className="flex-1 pt-0">
                    <p className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800/80 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-mono font-bold text-xs rounded-md mb-2 transition-colors">{item.year}</p>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg tracking-wide group-hover:text-emerald-800 dark:text-emerald-100 transition-colors">{item.event}</h3>
                    <p className="text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed transition-colors">{item.detail}</p>
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
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="border border-emerald-500/10 hover:border-emerald-500/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/80 dark:bg-slate-900/80 transition-all duration-300 p-8 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]"
              >
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-8">
                  I&apos;m currently open to internship and entry-level software
                  engineering roles. If you have an opportunity or just want to
                  connect, my inbox is always open.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail size={18} />,
                      text: "rishabhyadavunnao@gmail.com",
                      href: "mailto:rishabhyadavunnao@gmail.com",
                    },
                    {
                      icon: <Linkedin size={18} />,
                      text: "linkedin.com/in/rishabhydv23",
                      href: "https://www.linkedin.com/in/rishabhydv23/",
                    },
                    {
                      icon: <Github size={18} />,
                      text: "github.com/rishabh-ydv23",
                      href: "https://github.com/rishabh-ydv23",
                    },
                  ].map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      target="_blank"
                      className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:text-emerald-400 transition-colors group p-3 hover:bg-emerald-500/5 rounded-xl border border-transparent hover:border-emerald-200 dark:border-emerald-500/20"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg group-hover:scale-110 transition-transform">{c.icon}</span>
                      <span className="font-medium tracking-wide">{c.text}</span>
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto text-emerald-500"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>

              <ContactForm />
            </div>
          </FadeIn>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 pb-4 text-center">
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} Rishabh · Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
}