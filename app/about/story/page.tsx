"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Zap, Rocket, Target, Code2 } from "lucide-react";

export default function StoryPage() {
    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full">
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors font-mono text-sm">
                    <ArrowLeft className="w-4 h-4" />
                    BACK_TO_ABOUT
                </Link>
            </motion.div>

            {/* Hero Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">
                    MY_STORY
                </h1>
                <div className="h-1 w-32 bg-[var(--color-accent-primary)]"></div>
            </motion.div>

            {/* The Journey Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)] flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-[var(--color-accent-primary)]" />
                    THE_JOURNEY
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                    <p className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)] leading-relaxed">
                        My path into tech wasn't traditional. While most students were still figuring out "Hello World," I was already building production systems.
                    </p>
                    <p>
                        I started with a problem: <span className="text-[var(--color-accent-primary)] font-semibold">how do you make money move faster in financial markets?</span>
                    </p>
                    <p>
                        That question led me to build <span className="font-bold text-[var(--color-text-primary)]">Eden</span> — a full-stack algorithmic trading ecosystem. Not a tutorial project. Not a school assignment. A real system processing real trades with real money, running on AWS, using ML models I trained myself.
                    </p>
                    <p>
                        From there, I didn't stop. I saw schools in Zambia struggling with manual processes, so I built <span className="font-bold text-[var(--color-text-primary)]">ZEDU</span> — an AI-powered education platform. I saw students paying for expensive AI tools, so I built <span className="font-bold text-[var(--color-text-primary)]">NeuraNote</span> — completely free, completely open-source.
                    </p>
                    <p className="text-xl font-semibold text-[var(--color-text-primary)] border-l-4 border-[var(--color-accent-primary)] pl-6">
                        Every project I build solves a real problem. Every line of code I write has a purpose. I'm not here to collect certificates — I'm here to ship.
                    </p>
                </div>
            </motion.section>

            {/* What Drives Me Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)] flex items-center gap-3">
                    <Zap className="w-8 h-8 text-[var(--color-accent-primary)]" />
                    WHAT_DRIVES_ME
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="border-l-4 border-[var(--color-accent-primary)] pl-6 py-2"
                    >
                        <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Impact Over Credentials</h3>
                        <p className="text-[var(--color-text-secondary)]">
                            I measure success by systems shipped, not degrees earned. A working product deployed to production is worth more than any certificate on a wall.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="border-l-4 border-[var(--color-accent-secondary)] pl-6 py-2"
                    >
                        <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Speed of Execution</h3>
                        <p className="text-[var(--color-text-secondary)]">
                            While others are still planning, I'm already building. I prototype fast, iterate faster, and ship before the competition even starts.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="border-l-4 border-[var(--color-accent-primary)] pl-6 py-2"
                    >
                        <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Engineering Excellence</h3>
                        <p className="text-[var(--color-text-secondary)]">
                            I don't build MVPs that break under load. I build systems that scale, self-heal, and run with minimal intervention. Production-grade from day one.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="border-l-4 border-[var(--color-accent-secondary)] pl-6 py-2"
                    >
                        <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Solving Real Problems</h3>
                        <p className="text-[var(--color-text-secondary)]">
                            Every project addresses a genuine need — whether it's financial automation, education transformation, or road safety. No vanity projects. Just solutions.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* The Manifesto Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 bg-[var(--color-surface)] border-l-4 border-[var(--color-accent-primary)] p-8 md:p-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)] flex items-center gap-3">
                    <Target className="w-8 h-8 text-[var(--color-accent-primary)]" />
                    THE_MANIFESTO
                </h2>
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex gap-4 items-start"
                    >
                        <span className="text-4xl font-bold text-[var(--color-accent-primary)] font-mono">01.</span>
                        <p className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] pt-2">
                            Automation is not optional. It is the standard.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-4 items-start"
                    >
                        <span className="text-4xl font-bold text-[var(--color-accent-primary)] font-mono">02.</span>
                        <p className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] pt-2">
                            If it breaks, fix it. If it works, scale it.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex gap-4 items-start"
                    >
                        <span className="text-4xl font-bold text-[var(--color-accent-primary)] font-mono">03.</span>
                        <p className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] pt-2">
                            Latency is the enemy. Efficiency is the goal.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Beyond The Code Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)] flex items-center gap-3">
                    <Code2 className="w-8 h-8 text-[var(--color-accent-primary)]" />
                    BEYOND_THE_CODE
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                    <p>
                        I'm not just a developer who writes code. I'm a systems thinker who understands how technology intersects with business, finance, education, and infrastructure.
                    </p>
                    <p>
                        I've worked across the entire stack — from embedded C++ in IoT devices to cloud-native architectures on AWS. From ML model training to production deployment. From database design to API optimization. I don't specialize in one thing because real problems don't fit in neat boxes.
                    </p>
                    <p className="text-xl font-bold text-[var(--color-text-primary)]">
                        What sets me apart? I ship.
                    </p>
                    <p>
                        While others are still learning the theory, I'm deploying to production. While others are building toy projects, I'm solving real-world problems at scale.
                    </p>
                </div>
            </motion.section>

            {/* Looking Forward Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)]">
                    LOOKING_FORWARD
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                    <p>
                        I'm looking to join high-performance teams that value execution over credentials, results over resumes. Teams that ship fast, iterate faster, and aren't afraid to tackle complex infrastructure challenges.
                    </p>
                    <p className="text-xl font-semibold text-[var(--color-text-primary)] border-l-4 border-[var(--color-accent-primary)] pl-6">
                        If you're building something that matters — something that scales, something that solves real problems — let's talk. I don't just want to contribute. I want to build engines that run businesses.
                    </p>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12"
                >
                    <Link href="/contact" className="group relative inline-flex px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-background)] font-mono text-sm font-bold uppercase tracking-wider hover:bg-[var(--color-accent-primary)] transition-all duration-300 items-center gap-2">
                        LET'S BUILD TOGETHER
                        <span className="absolute inset-0 border border-[var(--color-background)] group-hover:border-[var(--color-text-primary)] translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
                    </Link>
                </motion.div>
            </motion.section>
        </div>
    );
}
