import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavbarClient from "./navbar-client";

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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jetbrains.variable} font-mono antialiased bg-[#0a0e0f] dark:bg-[#0a0e0f] text-slate-300 dark:text-slate-300`}
      >
        <NavbarClient />
        {children}
      </body>
    </html>
  );
}