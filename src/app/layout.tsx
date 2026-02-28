import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavbarClient from "./navbar-client";
import { ThemeProvider } from "./theme-provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jetbrains.variable} font-mono antialiased bg-white dark:bg-[#0a0e0f] text-slate-900 dark:text-slate-300 transition-colors duration-300`}
      >
        <ThemeProvider />
        <NavbarClient />
        {children}
      </body>
    </html>
  );
}