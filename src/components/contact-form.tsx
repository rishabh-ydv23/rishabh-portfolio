"use client";

import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d0f9f3af-199c-4686-9264-40e3f81429aa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="border border-emerald-500/10 hover:border-emerald-500/40 bg-slate-100/40 dark:bg-slate-900/40 hover:bg-slate-100/80 dark:hover:bg-slate-900/80 transition-all duration-300 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.05)] flex flex-col gap-6 w-full relative overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Name</label>
          <input 
            type="text" 
            name="name"
            id="name"
            required
            placeholder="Your Name"
            className="w-full bg-white dark:bg-[#0a0e0f] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</label>
          <input 
            type="email" 
            name="email"
            id="email"
            required
            placeholder="Your Email"
            className="w-full bg-white dark:bg-[#0a0e0f] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</label>
        <textarea 
          name="message"
          id="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full bg-white dark:bg-[#0a0e0f] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm resize-none"
        />
      </div>

      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <motion.button 
        type="submit"
        disabled={isSubmitting || isSuccess}
        whileHover={{ scale: (isSubmitting || isSuccess) ? 1 : 1.02 }}
        whileTap={{ scale: (isSubmitting || isSuccess) ? 1 : 0.98 }}
        className={`mt-2 w-full font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] flex items-center justify-center gap-2 text-base ${
          isSuccess 
            ? "bg-emerald-500 text-white" 
            : "bg-gradient-to-r from-emerald-500 to-teal-400 text-white"
        } disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            Sending...
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </span>
        ) : isSuccess ? (
          <span className="flex items-center gap-2">
             Message Sent <CheckCircle2 size={18} />
          </span>
        ) : (
          <>Send Message <Send size={18} fill="currentColor" /></>
        )}
      </motion.button>
    </motion.form>
  );
}
