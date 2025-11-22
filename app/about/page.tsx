"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, BookOpen, Code, Server, Globe, Cpu, Database } from "lucide-react";
import BentoCard from "@/components/BentoCard";

export default function About() {
    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)]">
                    ABOUT_ME
                </h1>

                {/* Story Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)] flex items-center gap-2">
                                <span className="text-[var(--color-accent-primary)]">01.</span> WHO_AM_I
                            </h2>
                            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                                <p>
                                    I'm a developer who thinks in systems. I don't just write code; I build engines that drive business logic forward.
                                </p>
                                <p>
                                    My background spans from high-frequency trading systems to scalable web applications. I've learned that the best code is the code that doesn't need to be written twice.
                                </p>
                                <p>
                                    When I'm not optimizing algorithms or designing database schemas, I'm likely exploring the latest in AI agents or fine-tuning my local LLM setup.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <BentoCard className="aspect-square flex items-center justify-center p-8">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-[var(--color-accent-primary)] mb-2">4+</div>
                                    <div className="text-sm font-mono text-[var(--color-text-secondary)] uppercase tracking-widest">Years Experience</div>
                                </div>
                            </BentoCard>
                        </div>
                    </div>
                </motion.section>

                {/* Education & Experience */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-2xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)] flex items-center gap-2">
                        <span className="text-[var(--color-accent-primary)]">02.</span> EDUCATION
                    </h2>
                    <div className="space-y-6">
                        <BentoCard className="p-8">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">Bachelor of Science in Computer Science</h3>
                                    <p className="text-[var(--color-accent-primary)]">Mulungushi University</p>
                                </div>
                                <div className="text-sm font-mono text-[var(--color-text-secondary)] bg-[var(--color-background)] px-3 py-1 rounded border border-[var(--color-border)] w-fit">
                                    2020 - 2024
                                </div>
                            </div>
                            <p className="text-[var(--color-text-secondary)]">
                                Focused on Algorithms, Data Structures, and Software Engineering principles.
                                Graduated with distinction.
                            </p>
                        </BentoCard>
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)] flex items-center gap-2">
                        <span className="text-[var(--color-accent-primary)]">03.</span> TECH_STACK
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BentoCard className="p-6">
                            <h3 className="font-bold tracking-tight text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                                <Code className="w-5 h-5 text-[var(--color-accent-primary)]" /> Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "TypeScript", "JavaScript", "Swift", "SQL", "C++"].map((tech) => (
                                    <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--color-background)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </BentoCard>

                        <BentoCard className="p-6">
                            <h3 className="font-bold tracking-tight text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-[var(--color-accent-secondary)]" /> Frameworks
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "React", "FastAPI", "Django", "TailwindCSS", "SwiftUI"].map((tech) => (
                                    <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--color-background)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </BentoCard>

                        <BentoCard className="p-6">
                            <h3 className="font-bold tracking-tight text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                                <Database className="w-5 h-5 text-[var(--color-text-primary)]" /> Tools & Cloud
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["AWS", "Docker", "Git", "PostgreSQL", "Redis", "Linux"].map((tech) => (
                                    <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--color-background)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </BentoCard>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
}
