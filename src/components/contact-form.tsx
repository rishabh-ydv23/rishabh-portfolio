"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="border border-emerald-500/10 hover:border-emerald-500/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/80 dark:hover:bg-slate-900/80 transition-all duration-300 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.05)] flex flex-col gap-6 w-full"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Name</label>
          <input 
            type="text" 
            id="name"
            placeholder="Your Name"
            className="w-full bg-white dark:bg-[#0a0e0f] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</label>
          <input 
            type="email" 
            id="email"
            placeholder="Your Email"
            className="w-full bg-white dark:bg-[#0a0e0f] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</label>
        <textarea 
          id="message"
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full bg-white dark:bg-[#0a0e0f] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm resize-none"
        />
      </div>
      <motion.button 
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 w-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] flex items-center justify-center gap-2 text-base"
        onClick={(e) => {
          e.preventDefault();
          alert("Your message functionality here!");
        }}
      >
        Send Message <Send size={18} fill="currentColor" />
      </motion.button>
    </motion.form>
  );
}
