"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import TerminalHero from "@/components/TerminalHero";
import BentoCard from "@/components/BentoCard";
import SkillTicker from "@/components/SkillTicker";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="pt-32 px-4 md:px-8 max-w-5xl mx-auto w-full">
        <TerminalHero />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            AUTOMATION FIRST.
            <br />
            EXCUSES LAST.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
            I remove bottlenecks. I automate everything that slows down delivery,
            scale everything that works, and keep shipping.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="/projects">
              <button className="group relative px-6 py-3 bg-white text-black font-mono text-sm font-bold uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Projects
                <span className="absolute inset-0 border border-white group-hover:border-blue-500 translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 border border-white/20 text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <SkillTicker />

      {/* Selected Work Preview */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-mono text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-500" />
            SELECTED_WORK
          </h2>
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-white transition-colors font-mono flex items-center gap-1">
            VIEW_ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard className="h-[300px] group cursor-pointer">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Cpu className="w-8 h-8 text-blue-500" />
                  <span className="text-xs font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded">PYTHON + ML</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Eden Trading Engine</h3>
                <p className="text-sm text-neutral-400">
                  High-frequency trading system featuring HTF bias detection and automated execution.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                OPERATIONAL
              </div>
            </div>
          </BentoCard>

          <BentoCard className="h-[300px] group cursor-pointer">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Globe className="w-8 h-8 text-violet-500" />
                  <span className="text-xs font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded">IOT + SYSTEMS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Smart Car Safety</h3>
                <p className="text-sm text-neutral-400">
                  RTSA Prototype for public transport with accident detection and speed tracking.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                PROTOTYPE
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Footer Status */}
      <footer className="border-t border-white/5 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-600">
          <div className="flex items-center gap-4">
            <span>SYSTEM: ONLINE</span>
            <span>LATENCY: 24ms</span>
            <span>LOC: ZAMBIA</span>
          </div>
          <div>
            © {new Date().getFullYear()} JOSEPH NGANDU. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
