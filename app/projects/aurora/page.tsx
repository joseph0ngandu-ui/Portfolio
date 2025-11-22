"use client";

import { motion } from "framer-motion";
import {
    Cpu, TrendingUp, Brain, Cloud, Shield, Zap,
    BarChart3, GitBranch, Database, Smartphone,
    Activity, Lock, RefreshCw, CheckCircle2
} from "lucide-react";
import BentoCard from "@/components/BentoCard";

export default function AuroraProject() {
    const features = [
        { icon: TrendingUp, title: "Multi-Timeframe Bias Engine", desc: "HTF bias modeling with synchronized analysis" },
        { icon: Brain, title: "ML-Driven Strategy Discovery", desc: "Continuous learning and low-performance pruning" },
        { icon: Zap, title: "ICT + Price Action Hybrid", desc: "Advanced concepts with statistical validation" },
        { icon: BarChart3, title: "Automated Backtesting Pipeline", desc: "Historical validation and optimization" },
        { icon: Activity, title: "Real-Time Trade Execution", desc: "Smart execution with liquidity-aware entries" },
        { icon: Database, title: "Dynamic Liquidity Detection", desc: "FVG + displacement filtering" },
        { icon: RefreshCw, title: "Kill-Zone Automation", desc: "Time-based session optimization" },
        { icon: Shield, title: "Adaptive Risk Management", desc: "Volatility modeling and position sizing" },
        { icon: GitBranch, title: "Multi-Account Management", desc: "Scaled deployment across accounts" },
        { icon: Cloud, title: "Serverless Backend", desc: "AWS Lambda, API Gateway, DynamoDB" },
        { icon: Smartphone, title: "Mobile Dashboard", desc: "Real-time monitoring and analytics" },
        { icon: Lock, title: "Error Recovery + Auto-Restart", desc: "Resilient architecture with diagnostics" }
    ];

    const techStack = [
        { category: "Core", items: ["Python", "FastAPI", "MQL5"] },
        { category: "ML/AI", items: ["TensorFlow", "scikit-learn", "Statistical Models"] },
        { category: "Cloud", items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch", "EC2"] },
        { category: "Infrastructure", items: ["Docker", "Git", "CI/CD", "WebSockets"] },
        { category: "Frontend", items: ["React Native", "Swift", "Real-time Charts"] },
        { category: "Security", items: ["Secure Key Management", "Environment Isolation", "Encrypted Storage"] }
    ];

    return (
        <div className="pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">Aurora Trading Ecosystem</h1>
                            <p className="text-[var(--color-text-secondary)] font-mono text-sm mt-1">BUILT BY EDEN | THE ORIGIN OF ORDER</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                        <span className="text-sm font-mono text-green-600">LIVE IN PRODUCTION</span>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2 text-[var(--color-text-primary)]">
                        <span className="text-[var(--color-accent-primary)]">01.</span> Overview
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                            Aurora is the flagship product of <span className="text-[var(--color-text-primary)] font-semibold">Eden</span> —
                            a next-generation trading automation ecosystem. It is not just a bot, but a fully engineered,
                            multi-layer system that combines machine learning, advanced price action strategies, and
                            cloud-native infrastructure.
                        </p>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                            Developed under the Eden philosophy — <span className="text-[var(--color-text-primary)] font-semibold">"The Origin of Order"</span> —
                            Aurora represents a breakthrough in <span className="text-[var(--color-text-primary)] font-semibold">self-optimizing
                                trading systems</span>. It brings structure to market chaos, continuously learning behavior,
                            pruning underperforming strategies, and adapting to changing conditions with minimal human intervention.
                        </p>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            Aurora integrates ICT (Inner Circle Trader) concepts with statistical models, multi-timeframe analysis,
                            dynamic strategy selection, and intelligent risk management — all orchestrated through a scalable,
                            serverless architecture designed for <span className="text-[var(--color-text-primary)] font-semibold">resilience and performance</span>.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2 text-[var(--color-text-primary)]">
                        <span className="text-[var(--color-accent-primary)]">02.</span> Core Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <BentoCard className="h-full p-5">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-[var(--color-surface)] text-[var(--color-accent-primary)] flex-shrink-0">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-1">{feature.title}</h3>
                                            <p className="text-xs text-[var(--color-text-secondary)]">{feature.desc}</p>
                                        </div>
                                    </div>
                                </BentoCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2 text-[var(--color-text-primary)]">
                        <span className="text-[var(--color-accent-primary)]">03.</span> Technology Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((category, index) => (
                            <BentoCard key={index} className="p-6">
                                <h3 className="font-mono text-xs text-[var(--color-accent-primary)] mb-3 uppercase">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs border border-[var(--color-border)] px-2 py-1 rounded text-[var(--color-text-secondary)] bg-[var(--color-surface)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </section>

                {/* Architecture Highlights */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2 text-[var(--color-text-primary)]">
                        <span className="text-[var(--color-accent-primary)]">04.</span> Engineering Excellence
                    </h2>
                    <BentoCard className="p-8">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-[var(--color-text-primary)] mb-1">Self-Optimizing Intelligence</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Continuously evaluates strategy performance, automatically prunes low-probability setups,
                                        and optimizes for high-win-rate configurations using machine learning feedback loops.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-[var(--color-text-primary)] mb-1">Cloud-Native Scalability</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Serverless architecture on AWS enables horizontal scaling, fault tolerance, and
                                        cost-efficient operation with automated deployment pipelines and infrastructure as code.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-[var(--color-text-primary)] mb-1">Institutional-Grade Risk Management</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Adaptive position sizing, volatility-adjusted stop losses, scaled take-profit ladders,
                                        and real-time exposure monitoring ensure capital preservation and consistent returns.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-[var(--color-text-primary)] mb-1">Zero-Downtime Resilience</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Automated error recovery, health monitoring, diagnostic logging, and auto-restart logic
                                        ensure the system operates 24/7 with minimal human intervention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                </section>

                {/* Impact Statement */}
                <section>
                    <BentoCard className="bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-[var(--color-accent-secondary)]/10 border-[var(--color-accent-primary)]/20 p-8">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">A Fully Engineered Trading Ecosystem</h2>
                            <p className="text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
                                Aurora demonstrates <span className="text-[var(--color-text-primary)] font-semibold">engineering maturity</span>,
                                <span className="text-[var(--color-text-primary)] font-semibold"> algorithmic discipline</span>, and
                                <span className="text-[var(--color-text-primary)] font-semibold"> innovation at scale</span>.
                                It's not just a trading bot — it's a testament to the vision of Eden: bringing order to the chaos of financial markets through superior engineering.
                            </p>
                        </div>
                    </BentoCard>
                </section>
            </motion.div>
        </div>
    );
}
