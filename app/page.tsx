"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Cpu, Globe, Database } from "lucide-react";
import Link from "next/link";
import TerminalHero from "@/components/TerminalHero";
import BentoCard from "@/components/BentoCard";
import SkillTicker from "@/components/SkillTicker";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 max-w-5xl mx-auto w-full">
        <TerminalHero />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)] break-words">
            AUTOMATION FIRST.
            <br />
            EXCUSES LAST.
          </h1>
          <p className="text-base md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed font-light">
            I remove bottlenecks. I automate everything that slows down delivery,
            scale everything that works, and keep shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/projects" className="w-full sm:w-auto group relative px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-background)] font-mono text-sm font-bold uppercase tracking-wider hover:bg-[var(--color-accent-primary)] transition-all duration-300 inline-flex items-center justify-center">
              View Projects
              <span className="absolute inset-0 border border-[var(--color-background)] group-hover:border-[var(--color-text-primary)] translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-6 py-3 border border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-sm font-bold uppercase tracking-wider hover:bg-[var(--color-surface)] transition-colors inline-flex items-center justify-center">
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      <SkillTicker />

      {/* Services Summary */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="px-4 md:px-8 max-w-5xl mx-auto w-full"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-mono tracking-tight text-[var(--color-text-primary)] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[var(--color-accent-primary)]" />
            SERVICES
          </h2>
          <Link href="/services" className="text-xs md:text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors font-mono flex items-center gap-1">
            VIEW_ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard className="p-6">
            <div className="h-full flex flex-col">
              <div className="mb-4 p-3 rounded-lg bg-[var(--color-background)] w-fit text-[var(--color-accent-primary)]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] mb-2">AI & Automation</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Custom AI agents and automated workflows to streamline operations.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="p-6">
            <div className="h-full flex flex-col">
              <div className="mb-4 p-3 rounded-lg bg-[var(--color-background)] w-fit text-[var(--color-accent-secondary)]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] mb-2">Web Development</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                High-performance websites and web apps built with modern tech.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="p-6">
            <div className="h-full flex flex-col">
              <div className="mb-4 p-3 rounded-lg bg-[var(--color-background)] w-fit text-[var(--color-text-primary)]">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] mb-2">Backend Systems</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Scalable APIs and database architectures for data-heavy apps.
              </p>
            </div>
          </BentoCard>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-8 max-w-5xl mx-auto w-full border-t border-[var(--color-border)] mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-secondary)] font-mono">
            © {new Date().getFullYear()} Joseph Ngandu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/joseph0ngandu" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              GITHUB
            </a>
            <a href="https://linkedin.com/in/josephngandu" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
