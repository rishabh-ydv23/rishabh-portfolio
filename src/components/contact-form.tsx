"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      // Using Formspree as a simple backend
      const response = await fetch("https://formspree.io/f/xyzqwert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setState("idle"), 3000);
      } else {
        setState("error");
        setTimeout(() => setState("idle"), 3000);
      }
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-sm text-slate-200 placeholder-slate-600 focus:border-emerald-400 focus:outline-none transition-colors text-sm"
          required
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-sm text-slate-200 placeholder-slate-600 focus:border-emerald-400 focus:outline-none transition-colors text-sm"
          required
        />
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-sm text-slate-200 placeholder-slate-600 focus:border-emerald-400 focus:outline-none transition-colors text-sm resize-none"
          required
        />
      </div>

      {/* Status Messages */}
      {state === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-emerald-400 text-sm p-3 bg-emerald-400/5 border border-emerald-400/20 rounded-sm"
        >
          <CheckCircle size={16} /> Message sent! I&apos;ll get back to you soon.
        </motion.div>
      )}
      {state === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-400/5 border border-red-400/20 rounded-sm"
        >
          <AlertCircle size={16} /> Something went wrong. Try emailing directly.
        </motion.div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-emerald-400 text-black hover:bg-emerald-300 font-bold rounded-none h-10 text-sm tracking-wide transition-all disabled:opacity-50"
      >
        {state === "loading" ? "Sending..." : <><Send size={14} /> Send Message</>}
      </Button>
    </form>
  );
}
