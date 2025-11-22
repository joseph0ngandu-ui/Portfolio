"use client";

import { motion } from "framer-motion";
import {
    Video, Wifi, Cpu, Monitor, Radio, Zap,
    CheckCircle2, TrendingUp, Shield, Clock,
    ArrowLeft, Settings, Users, Cloud, BarChart3, Bot
} from "lucide-react";
import BentoCard from "@/components/BentoCard";
import Link from "next/link";

export default function ChurchMediaPipelinePage() {
    const features = [
        { icon: Video, title: "Low-Latency Streaming", desc: "Sub-second delay for real-time engagement" },
        { icon: Cpu, title: "Hardware Encoding", desc: "GPU-accelerated processing for efficiency" },
        { icon: Wifi, title: "Network Optimization", desc: "Adaptive bitrate and connection management" },
        { icon: Monitor, title: "Multi-Platform Output", desc: "Simultaneous streaming to multiple services" },
        { icon: Settings, title: "Production Automation", desc: "Scene switching and audio mixing workflows" },
        { icon: Users, title: "High-Quality Broadcasts", desc: "Professional-grade output on consumer hardware" }
    ];

    const techStack = [
        {
            category: "Streaming Software",
            items: ["OBS Studio", "DroidCam", "Custom Plugins", "Scene Management"]
        },
        {
            category: "Networking",
            items: ["RTMP Protocol", "Adaptive Bitrate", "Network Diagnostics", "QoS Configuration"]
        },
        {
            category: "Hardware",
            items: ["GPU Encoding (NVENC/QuickSync)", "Multi-Camera Setup", "Audio Interfaces", "Network Infrastructure"]
        },
        {
            category: "Platforms",
            items: ["YouTube Live", "Facebook Live", "Custom RTMP Endpoints", "Recording Archives"]
        }
    ];

    const contributions = [
        "Designed end-to-end streaming architecture optimized for low-latency delivery",
        "Configured OBS with hardware encoding to minimize CPU usage and maximize quality",
        "Integrated DroidCam for wireless mobile camera inputs without additional hardware costs",
        "Optimized network settings and bitrate configurations for reliable streaming",
        "Built automated scene switching workflows for seamless production transitions",
        "Implemented multi-platform simultaneous streaming to reach wider audiences",
        "Trained production team on system operation and troubleshooting"
    ];

    const innovations = [
        {
            icon: Zap,
            title: "Resource Efficiency",
            desc: "Achieved professional broadcast quality using consumer-grade hardware through smart optimization and GPU acceleration."
        },
        {
            icon: Shield,
            title: "Reliability First",
            desc: "Built redundancy and failover mechanisms to ensure uninterrupted broadcasts during critical services."
        },
        {
            icon: Clock,
            title: "Real-Time Performance",
            desc: "Sub-second latency enables live interaction and engagement with remote viewers."
        },
        {
            icon: TrendingUp,
            title: "Scalable Architecture",
            desc: "System designed to grow from single-camera to multi-camera productions without major overhauls."
        }
    ];

    return (
        <div className="pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Back Button */}
                <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-mono">Back to Projects</span>
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500">
                            <Video className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Church Media Pipeline</h1>
                            <p className="text-[var(--color-text-secondary)] font-mono text-sm mt-1">MEDIA / INFRASTRUCTURE</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm font-mono text-blue-500">PRODUCTION</span>
                    </div>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
                        A low-latency, resource-efficient streaming architecture built for high-quality live broadcasts
                        using OBS, DroidCam, and optimized production engineering.
                    </p>
                </div>

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">01.</span> Overview
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                            The Church Media Pipeline is a <span className="text-[var(--color-text-primary)] font-semibold">professional-grade streaming
                                infrastructure</span> I engineered to deliver high-quality live broadcasts with minimal latency and
                            maximum reliability — all while running on consumer hardware.
                        </p>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            This project demonstrates how <span className="text-[var(--color-text-primary)] font-semibold">smart engineering and optimization</span> can
                            achieve broadcast-quality results without expensive equipment, making professional media production
                            accessible to organizations with limited budgets.
                        </p>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">02.</span> The Problem
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/20 p-8">
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Churches and community organizations need to reach remote audiences through live streaming,
                                but professional broadcast equipment is prohibitively expensive. Existing solutions either
                                compromise on quality, introduce significant latency, or require technical expertise beyond
                                what volunteer teams can provide.
                            </p>
                            <p className="text-[var(--color-text-primary)] font-semibold">
                                The Church Media Pipeline solves this by leveraging open-source tools, hardware acceleration,
                                and network optimization to deliver professional results on a minimal budget — with a system
                                simple enough for volunteers to operate.
                            </p>
                        </div>
                    </BentoCard>
                </section>

                {/* Features */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">03.</span> Key Features
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
                                        <div className="p-2 rounded-lg bg-[var(--color-surface)] text-pink-500 flex-shrink-0">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
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
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">04.</span> Technology Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {techStack.map((category, index) => (
                            <BentoCard key={index} className="p-6">
                                <h3 className="font-mono text-xs text-pink-500 mb-3 uppercase">{category.category}</h3>
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

                {/* Architecture */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">05.</span> System Architecture
                    </h2>
                    <BentoCard className="p-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Video className="w-5 h-5 text-pink-500" />
                                    Input Layer
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Multiple camera sources including DroidCam for wireless mobile inputs, HDMI capture cards
                                    for professional cameras, and screen capture for presentations — all synchronized in OBS.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Cpu className="w-5 h-5 text-pink-500" />
                                    Processing Layer
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Hardware-accelerated encoding using NVENC (NVIDIA) or QuickSync (Intel) for real-time
                                    compression with minimal CPU overhead, enabling smooth streaming even on modest hardware.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Radio className="w-5 h-5 text-pink-500" />
                                    Streaming Layer
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    RTMP protocol with adaptive bitrate streaming to multiple platforms simultaneously,
                                    with automatic quality adjustment based on network conditions.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-pink-500" />
                                    Production Layer
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Automated scene transitions, audio mixing, and graphics overlays controlled through
                                    hotkeys and macros for seamless live production.
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </section>

                {/* My Contributions */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">06.</span> My Role & Contributions
                    </h2>
                    <BentoCard className="p-8">
                        <div className="space-y-3">
                            {contributions.map((contribution, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-[var(--color-text-secondary)]">{contribution}</p>
                                </div>
                            ))}
                        </div>
                    </BentoCard>
                </section>

                {/* Innovation Highlights */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">07.</span> Innovation & Key Wins
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {innovations.map((innovation, index) => (
                            <BentoCard key={index} className="p-6">
                                <innovation.icon className="w-6 h-6 text-pink-500 mb-3" />
                                <h3 className="font-bold text-white mb-2">{innovation.title}</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">{innovation.desc}</p>
                            </BentoCard>
                        ))}
                    </div>
                </section>

                {/* Impact */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">08.</span> Impact & Results
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BentoCard className="text-center p-6">
                            <div className="text-3xl font-bold text-pink-500 mb-2">1080p</div>
                            <p className="text-sm text-[var(--color-text-secondary)]">Full HD Quality Streaming</p>
                        </BentoCard>
                        <BentoCard className="text-center p-6">
                            <div className="text-3xl font-bold text-pink-500 mb-2">&lt;1s</div>
                            <p className="text-sm text-[var(--color-text-secondary)]">Sub-Second Latency</p>
                        </BentoCard>
                        <BentoCard className="text-center p-6">
                            <div className="text-3xl font-bold text-pink-500 mb-2">99.9%</div>
                            <p className="text-sm text-[var(--color-text-secondary)]">Uptime Reliability</p>
                        </BentoCard>
                    </div>
                </section>

                {/* Future Roadmap */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-pink-500">09.</span> Future Roadmap
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-pink-500/10 to-violet-500/10 border-pink-500/20 p-8">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Video className="w-5 h-5 text-pink-500" />
                                    Multi-Camera Director Mode
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Automated camera switching based on audio levels and scene detection
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Cloud className="w-5 h-5 text-pink-500" />
                                    Cloud Recording & VOD
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Automatic upload to cloud storage with on-demand playback and archiving
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-pink-500" />
                                    Analytics Dashboard
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Real-time viewer metrics, engagement tracking, and performance monitoring
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Bot className="w-5 h-5 text-pink-500" />
                                    AI-Powered Enhancements
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Automatic captioning, highlight detection, and content optimization
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </section>
            </motion.div>
        </div>
    );
}
