"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg("Please enter your name (at least 2 characters).");
      setState("error");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      setState("error");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg("Please enter a message (at least 10 characters).")
      setState("error");
      return;
    }

    setState("loading");
    setErrorMsg(null);

    try {
      // POST to local API route which forwards to SendGrid
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setState("idle"), 3000);
      } else {
        // attempt to get details from the API
        let details: any = null;
        try {
          details = await response.json();
        } catch (e) {
          details = { error: "Unknown error" };
        }
        setErrorMsg(details?.error || details?.details || "Failed to send message.");
        setState("error");
        setTimeout(() => setState("idle"), 4000);
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Network error");
      setState("error");
      setTimeout(() => setState("idle"), 4000);
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
      {/* success banner removed as requested */}
      {state === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-2 text-red-400 text-sm p-3 bg-red-400/5 border border-red-400/20 rounded-sm"
        >
          <AlertCircle size={16} />
          <div>
            <div>Something went wrong.</div>
            {errorMsg && <div className="mt-1 text-xs text-red-300">{errorMsg}</div>}
          </div>
        </motion.div>
      )}

      {/* Submit button removed */}
    </form>
  );
}
