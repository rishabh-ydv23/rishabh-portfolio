import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishabh Yadav | Portfolio",
  description: "Third year B.Tech CSE student showcasing projects, skills, and certifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 bg-white/80 backdrop-blur z-10 py-4">
          <nav className="container mx-auto flex justify-center space-x-6">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#certifications" className="hover:underline">
              Certifications
            </a>
            <a href="#education" className="hover:underline">
              Education
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
