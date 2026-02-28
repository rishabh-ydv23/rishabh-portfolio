"use client";

import { useEffect } from "react";

export function ThemeProvider() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const preferred = saved || "dark";
    document.documentElement.classList.toggle("dark", preferred === "dark");
  }, []);

  return null;
}
