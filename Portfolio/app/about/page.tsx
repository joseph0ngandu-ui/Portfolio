"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, BookOpen, Code, Server, Globe } from "lucide-react";

export default function About() {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8">USER_PROFILE</h1>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
                    {/* Main Content */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-mono text-blue-500 mb-4 flex items-center gap-2">
                                <Terminal className="w-5 h-5" />
                                WHO_AM_I
                            </h2>
                            <div className="prose prose-invert prose-lg text-neutral-300">
                                <p className="leading-relaxed">
                                    I am a DevOps-driven IT engineer and a second-year student at ZCAS University.
                                    My expertise lies in optimizing systems end-to-end. I don't just write code;
                                    I build engines that run businesses.
                                </p>
                                <p className="leading-relaxed mt-4">
                                    <span className="text-white font-semibold">"I remove bottlenecks."</span>
                                    I automate everything that slows down delivery, scale everything that works,
                                    and keep shipping. My goal is simple: join high-performance teams and solve
                                    complex infrastructure challenges.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-mono text-violet-500 mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5" />
                                EDUCATION
                            </h2>
                            <div className="border-l-2 border-white/10 pl-6 py-2">
                                <h3 className="text-lg font-bold text-white">Bachelor of Science in IT</h3>
                                <p className="text-neutral-400">ZCAS University</p>
                                <p className="text-sm font-mono text-neutral-500 mt-1">2023 - PRESENT (YEAR 2)</p>
                            </div>
                        </section>

                        <section>
                            <Link href="/about/story" className="block group">
                                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 p-8 rounded-lg hover:border-green-500/40 transition-all cursor-pointer">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-mono text-green-500 flex items-center gap-2">
                                            <Terminal className="w-5 h-5" />
                                            READ_MY_STORY
                                        </h2>
                                        <span className="text-neutral-500 group-hover:text-white transition-colors">→</span>
                                    </div>
                                    <p className="text-neutral-300 leading-relaxed">
                                        Dive deeper into my journey, what drives me, my engineering philosophy,
                                        and what I'm looking for in my next opportunity.
                                    </p>
                                </div>
                            </Link>
                        </section>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-8">
                        <div className="p-6 border border-white/10 rounded-xl bg-[#0a0a0a]">
                            <h3 className="font-mono text-xs text-neutral-500 mb-4 uppercase">Tech Stack</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-white text-sm font-bold">
                                        <Server className="w-4 h-4 text-blue-500" />
                                        OPS & INFRA
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Linux", "AWS", "Docker", "CI/CD", "Nginx"].map(t => (
                                            <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-white text-sm font-bold">
                                        <Code className="w-4 h-4 text-violet-500" />
                                        DEVELOPMENT
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Python", "Swift", "MQL5", "SQL", "FastAPI"].map(t => (
                                            <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-white text-sm font-bold">
                                        <Globe className="w-4 h-4 text-green-500" />
                                        WEB DEVELOPMENT STACK
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"].map(t => (
                                            <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-400">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
