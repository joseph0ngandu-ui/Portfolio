"use client";

import { motion } from "framer-motion";
import { Terminal, Code, BookOpen, Server, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StoryPage() {
    return (
        <div className="pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Back Button */}
                <Link href="/about" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-mono">Back to About</span>
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-12">MY_STORY</h1>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-xl font-mono text-green-500 mb-4 flex items-center gap-2">
                            <Terminal className="w-5 h-5" />
                            THE_JOURNEY
                        </h2>
                        <div className="prose prose-invert prose-lg text-neutral-300">
                            <p className="leading-relaxed mb-4">
                                My path into tech wasn't traditional. While most students were still figuring out
                                "Hello World," I was already building production systems. I started with a problem:
                                <span className="text-white font-semibold"> how do you make money move faster in financial markets?</span>
                            </p>
                            <p className="leading-relaxed mb-4">
                                That question led me to build <span className="text-white font-semibold">Eden</span> —
                                a full-stack algorithmic trading ecosystem. Not a tutorial project. Not a school assignment.
                                A real system processing real trades with real money, running on AWS, using ML models I trained myself.
                            </p>
                            <p className="leading-relaxed mb-4">
                                From there, I didn't stop. I saw schools in Zambia struggling with manual processes, so I built
                                <span className="text-white font-semibold"> ZEDU</span> — an AI-powered education platform.
                                I saw students paying for expensive AI tools, so I built <span className="text-white font-semibold">NeuraNote</span> —
                                completely free, completely open-source.
                            </p>
                            <p className="leading-relaxed">
                                Every project I build solves a real problem. Every line of code I write has a purpose.
                                I'm not here to collect certificates — <span className="text-white font-semibold">I'm here to ship.</span>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-mono text-orange-500 mb-4 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            WHAT_DRIVES_ME
                        </h2>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-white font-bold mb-2">🎯 Impact Over Credentials</h3>
                                    <p className="text-sm text-neutral-400">
                                        I measure success by systems shipped, not degrees earned. A working product
                                        deployed to production is worth more than any certificate on a wall.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">⚡ Speed of Execution</h3>
                                    <p className="text-sm text-neutral-400">
                                        While others are still planning, I'm already building. I prototype fast,
                                        iterate faster, and ship before the competition even starts.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">🔧 Engineering Excellence</h3>
                                    <p className="text-sm text-neutral-400">
                                        I don't build MVPs that break under load. I build systems that scale,
                                        self-heal, and run with minimal intervention. Production-grade from day one.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">🌍 Solving Real Problems</h3>
                                    <p className="text-sm text-neutral-400">
                                        Every project addresses a genuine need — whether it's financial automation,
                                        education transformation, or road safety. No vanity projects. Just solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-mono text-white mb-4 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            THE_MANIFESTO
                        </h2>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg font-mono text-sm text-neutral-300">
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <span className="text-blue-500">01.</span>
                                    <span>Automation is not optional. It is the standard.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">02.</span>
                                    <span>If it breaks, fix it. If it works, scale it.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">03.</span>
                                    <span>Latency is the enemy. Efficiency is the goal.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-mono text-violet-500 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            BEYOND_THE_CODE
                        </h2>
                        <div className="prose prose-invert prose-lg text-neutral-300">
                            <p className="leading-relaxed mb-4">
                                I'm not just a developer who writes code. I'm a <span className="text-white font-semibold">systems thinker</span> who
                                understands how technology intersects with business, finance, education, and infrastructure.
                            </p>
                            <p className="leading-relaxed mb-4">
                                I've worked across the entire stack — from embedded C++ in IoT devices to cloud-native
                                architectures on AWS. From ML model training to production deployment. From database design
                                to API optimization. I don't specialize in one thing because <span className="text-white font-semibold">real
                                    problems don't fit in neat boxes.</span>
                            </p>
                            <p className="leading-relaxed">
                                What sets me apart? I ship. While others are still learning the theory, I'm deploying to production.
                                While others are building toy projects, I'm solving real-world problems at scale.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-mono text-blue-500 mb-4 flex items-center gap-2">
                            <Server className="w-5 h-5" />
                            LOOKING_FORWARD
                        </h2>
                        <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 p-6 rounded-lg">
                            <p className="text-neutral-300 leading-relaxed mb-4">
                                I'm looking to join <span className="text-white font-semibold">high-performance teams</span> that
                                value execution over credentials, results over resumes. Teams that ship fast, iterate faster,
                                and aren't afraid to tackle complex infrastructure challenges.
                            </p>
                            <p className="text-white font-semibold">
                                If you're building something that matters — something that scales, something that solves real problems —
                                let's talk. I don't just want to contribute. I want to build engines that run businesses.
                            </p>
                        </div>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
