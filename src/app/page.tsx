"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Linkedin, FileText } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        {/* Hero Section */}
        <section className="mb-32 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Rishabh Yadav
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-200 mb-4">
              3rd year B.Tech <span className="font-bold text-blue-600 dark:text-blue-400">CSE</span> Student
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Full-Stack Developer | Problem Solver | Continuous Learner
            </p>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="mb-24 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 sm:p-10 shadow-md hover:shadow-lg transition-shadow"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I am a passionate computer science student with strong foundations in
            data structures, algorithms, object-oriented programming, and core
            CS subjects such as DBMS, operating systems, and process management.
            I enjoy building full‑stack applications, solving problems, and
            continuously learning new technologies.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mb-24"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Programming Languages",
                items: ["C++", "JavaScript", "C", "PHP", "Java", "Python"],
              },
              {
                title: "Core Strengths",
                items: [
                  "Data Structures & Algorithms",
                  "OOP",
                  "DBMS",
                  "Operating Systems & Process Management",
                ],
              },
              {
                title: "Backend Technologies",
                items: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
              },
              {
                title: "Frontend Technologies",
                items: ["React.js", "Tailwind CSS", "HTML5", "CSS"],
              },
              {
                title: "Databases",
                items: ["MySQL / SQL / phpMyAdmin", "MongoDB"],
              },
              {
                title: "Tools & Platforms",
                items: ["Git, GitHub, VS Code", "Figma, Postman"],
              },
              {
                title: "Operating Systems",
                items: ["Windows", "Ubuntu"],
              },
              {
                title: "Soft Skills",
                items: [
                  "Problem Solving",
                  "Adaptability",
                  "Self-Learning",
                  "Logical Reasoning",
                ],
              },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mb-24"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Projects
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "VaxCare Portal",
                desc: "Full-stack vaccine management system with appointment booking, vaccination tracking, and certificate generation. JWT-based role authentication and admin dashboard with automated CRUD flow.",
                tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, Leaflet, SendGrid",
                live: "https://vaxcare-portal-frontend.onrender.com/",
                github: "https://github.com/rishabh-ydv23/Smart-Vaccine-System",
              },
              {
                title: "Forever E-Commerce Website",
                desc: "Responsive e-commerce app with cart, wishlist, category browsing, and an admin dashboard for product/order management.",
                tech: "React.js, Node.js, Express.js, MongoDB, JWT, Multer",
                live: "https://ecommerce-website-green-six.vercel.app/",
                github: "https://github.com/rishabh-ydv23/Forever-Ecommerce-website",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <span className="font-semibold">Tech Stack:</span> {project.tech}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm" className="gap-2">
                    <Link href={project.live} target="_blank">
                      <ExternalLink size={16} /> Live Preview
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href={project.github} target="_blank">
                      <Github size={16} /> GitHub
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="mb-24"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
            <ul className="space-y-3">
              {[
                "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional | Oracle",
                "Delta Batch – Full Stack Development | Apna College",
                "Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate | Oracle",
                "Cloud Computing by IIT Kharagpur (8-week course) | NPTEL",
                "Introduction to Hardware and Operating Systems | IBM",
              ].map((cert, idx) => (
                <motion.li
                  key={idx}
                  className="text-slate-700 dark:text-slate-300 flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                    ✓
                  </span>
                  {cert}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="mb-24"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="space-y-4">
            {[
              {
                school: "Lovely Professional University",
                degree: "Bachelor of Technology in Computer Science and Engineering",
                info: "CGPA: 7.23 (2023 – Present)",
                location: "Punjab, India",
              },
              {
                school: "U.S International School",
                degree: "Intermediate",
                info: "Percentage: 72.8 (April 2021 – March 2022)",
                location: "Bhagwant Nagar, Unnao",
              },
              {
                school: "U.S International School",
                degree: "Matriculation",
                info: "Percentage: 75.8 (April 2019 – March 2020)",
                location: "Bhagwant Nagar, Unnao",
              },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                  {edu.school}
                </h3>
                <p className="text-slate-900 dark:text-white font-semibold mt-1">
                  {edu.degree}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {edu.info}
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm">
                  📍 {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Training Section */}
        <motion.section
          id="training"
          className="mb-24"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Summer Training
          </h2>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
            <h3 className="font-bold text-blue-600 dark:text-blue-400 text-lg mb-2">
              Full Stack Development in React & Node
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Centre for Professional Enhancement, LPU (June 2025 – July 2025)
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Instructor-led course covering web development with React.js and Node.js.",
                "Built dynamic front-end interfaces and implemented RESTful APIs using Express.",
                "Gained exposure to databases, API integration, version control, and deployment fundamentals.",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="text-slate-700 dark:text-slate-300 flex items-start gap-3"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild size="sm" variant="outline" className="gap-2">
              <Link
                href="https://onedrive.live.com/?cid=840bef1d2d63f0b9&id=840BEF1D2D63F0B9%21s27c69c51e5874d33b8a1f13b38d6372b&resid=840BEF1D2D63F0B9%21s27c69c51e5874d33b8a1f13b38d6372b&ithint=file%2Cpdf&e=OM7KQP&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy84NDBiZWYxZDJkNjNmMGI5L0lRQlJuTVluaC1VelRiaWg4VHM0MWpjckFRNFd5SXlEWTNqUVg5RmhaS2NjZng4P2U9T003S1FQ&v=validatepermission"
                target="_blank"
              >
                <FileText size={16} /> Training Certificate
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mb-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 sm:p-10"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="space-y-4 mb-6">
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                href: "mailto:rishabhyadavunnao@gmail.com",
                text: "rishabhyadavunnao@gmail.com",
              },
              {
                icon: <Linkedin size={20} />,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/rishabhydv23/",
                text: "linkedin.com/in/rishabhydv23",
              },
              {
                icon: <Github size={20} />,
                label: "GitHub",
                href: "https://github.com/rishabh-ydv23",
                text: "github.com/rishabh-ydv23",
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href}
                target="_blank"
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 dark:text-blue-400">
                  {contact.icon}
                </span>
                {contact.text}
              </motion.a>
            ))}
          </div>
          <Button asChild className="gap-2">
            <Link
              href="https://docs.google.com/document/d/1FiwIMMx5VnvLdUpMgC-XZovc_bzwvXkL/edit?usp=sharing&ouid=102825018389697368109&rtpof=true&sd=true"
              target="_blank"
            >
              <FileText size={16} /> View Full Resume
            </Link>
          </Button>
        </motion.section>
      </div>
    </main>
  );
}
