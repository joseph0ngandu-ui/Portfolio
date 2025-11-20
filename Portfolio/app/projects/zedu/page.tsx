"use client";

import { motion } from "framer-motion";
import {
    GraduationCap, Users, BarChart3, Brain, Smartphone,
    CheckCircle2, Zap, Shield, TrendingUp, Clock,
    ArrowLeft, Target, Lightbulb
} from "lucide-react";
import BentoCard from "@/components/BentoCard";
import Link from "next/link";

export default function ZEDUPage() {
    const features = [
        { icon: Users, title: "Smart Attendance", desc: "Automated tracking with real-time analytics" },
        { icon: BarChart3, title: "Assessment Tools", desc: "Automated marking and grading systems" },
        { icon: Brain, title: "AI-Powered Insights", desc: "Personalized learning paths and recommendations" },
        { icon: TrendingUp, title: "Performance Analytics", desc: "Comprehensive dashboards for teachers and admins" },
        { icon: Smartphone, title: "Mobile-First Design", desc: "Optimized for students and teachers on-the-go" },
        { icon: Clock, title: "Streamlined Operations", desc: "Automated workflows for classroom management" }
    ];

    const techStack = [
        {
            category: "System Design",
            items: ["Modular Architecture", "Scalable Infrastructure", "API-First Design", "Microservices"]
        },
        {
            category: "Backend",
            items: ["RESTful APIs", "Data Modeling", "Authentication & Authorization", "Automated Pipelines"]
        },
        {
            category: "Frontend & UX",
            items: ["Mobile-First UI", "Responsive Design", "Frictionless Onboarding", "Progressive Enhancement"]
        },
        {
            category: "AI/ML",
            items: ["Automated Marking", "Learning Path Optimization", "Performance Prediction", "Smart Recommendations"]
        }
    ];

    const contributions = [
        "Designed end-to-end system architecture with modular, scalable components",
        "Structured RESTful APIs and data models for assessments, attendance, and analytics",
        "Built automation pipelines for grading, attendance tracking, and student workflows",
        "Crafted mobile-first interface optimized for low-bandwidth environments",
        "Integrated AI features for automated marking and personalized learning recommendations",
        "Positioned ZEDU as a digital transformation platform, not just another app",
        "Implemented frictionless onboarding to minimize technical barriers for schools"
    ];

    const innovations = [
        {
            icon: Target,
            title: "Gradual Adoption Model",
            desc: "Schools can start with basic features and expand as they grow, reducing upfront complexity and cost."
        },
        {
            icon: Zap,
            title: "Zero Technical Overhead",
            desc: "Designed for non-technical staff with intuitive interfaces and automated setup processes."
        },
        {
            icon: Brain,
            title: "Context-Aware AI",
            desc: "AI models trained on Zambian curriculum and educational patterns for relevant insights."
        },
        {
            icon: Shield,
            title: "Data Privacy First",
            desc: "Built-in compliance with educational data protection standards and local regulations."
        }
    ];

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Back Button */}
                <Link href="/projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-mono">Back to Projects</span>
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">ZEDU</h1>
                            <p className="text-neutral-500 font-mono text-sm mt-1">EDTECH / AI PLATFORM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-sm font-mono text-orange-500">IN PRODUCTION</span>
                    </div>
                    <p className="text-lg text-neutral-300 max-w-3xl">
                        A next-generation, AI-powered education platform modernizing how Zambian schools operate.
                        Designed and engineered end-to-end to drive digital transformation in education.
                    </p>
                </div>

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-orange-500">01.</span> Overview
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-neutral-300 leading-relaxed mb-4">
                            ZEDU is a <span className="text-white font-semibold">comprehensive education platform</span> I'm building
                            to modernize Zambian schools. I'm driving the system architecture, product direction, and technical
                            implementation from the ground up.
                        </p>
                        <p className="text-neutral-300 leading-relaxed">
                            This isn't just another school management app — it's a <span className="text-white font-semibold">digital
                                transformation lever</span> that streamlines operations, empowers teachers with AI-driven insights,
                            and provides students with personalized learning experiences.
                        </p>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-orange-500">02.</span> The Problem
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                        <div className="space-y-4">
                            <p className="text-neutral-300 leading-relaxed">
                                Zambian schools struggle with manual processes for attendance, grading, and student tracking.
                                Teachers spend hours on administrative tasks instead of teaching. Students lack personalized
                                feedback and learning support. Schools have no unified system for data-driven decision making.
                            </p>
                            <p className="text-white font-semibold">
                                ZEDU solves this by providing an integrated platform that automates operations, delivers
                                AI-powered insights, and scales with each institution — all while being accessible and
                                easy to adopt for schools with limited technical resources.
                            </p>
                        </div>
                    </BentoCard>
                </section>

                {/* What ZEDU Delivers */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-orange-500">03.</span> What ZEDU Delivers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <BentoCard className="h-full">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-white/5 text-orange-500 flex-shrink-0">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                                            <p className="text-xs text-neutral-400">{feature.desc}</p>
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
                        <span className="text-orange-500">04.</span> Technology Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {techStack.map((category, index) => (
                            <BentoCard key={index}>
                                <h3 className="font-mono text-xs text-orange-500 mb-3 uppercase">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs border border-white/10 px-2 py-1 rounded text-neutral-300 bg-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </section>

                {/* My Contributions */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-orange-500">05.</span> My Role & Contributions
                    </h2>
                    <BentoCard>
                        <p className="text-neutral-400 mb-6 text-sm">
                            As the lead engineer and architect, I'm responsible for every aspect of ZEDU's development:
                        </p>
                        <div className="space-y-3">
                            {contributions.map((contribution, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-neutral-300">{contribution}</p>
                                </div>
                            ))}
                        </div>
                    </BentoCard>
                </section>

                {/* Innovation Highlights */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-orange-500">06.</span> Innovation & Unique Value
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {innovations.map((innovation, index) => (
                            <BentoCard key={index}>
                                <innovation.icon className="w-6 h-6 text-orange-500 mb-3" />
                                <h3 className="font-bold text-white mb-2">{innovation.title}</h3>
                                <p className="text-sm text-neutral-400">{innovation.desc}</p>
                            </BentoCard>
                        ))}
                    </div>
                </section>

                {/* Key Wins */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-orange-500">07.</span> Key Wins
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BentoCard className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                            <p className="text-sm text-neutral-400">Designed & Built by Me</p>
                        </BentoCard>
                        <BentoCard className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">Scalable</div>
                            <p className="text-sm text-neutral-400">Grows with Each Institution</p>
                        </BentoCard>
                        <BentoCard className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">AI-First</div>
                            <p className="text-sm text-neutral-400">Smart Automation Built-In</p>
                        </BentoCard>
                    </div>
                </section>

                {/* Future Roadmap */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-orange-500">08.</span> Future Roadmap
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-orange-500/10 to-violet-500/10 border-orange-500/20">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    Parent Portal
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    Real-time access to student progress, attendance, and communication with teachers
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    Advanced Analytics Dashboard
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    Predictive insights for student performance and early intervention recommendations
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    Multi-School Network
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    District-level administration and cross-school benchmarking capabilities
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    Offline-First Mobile Apps
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    Native apps with full offline support for low-connectivity environments
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </section>
            </motion.div>
        </div>
    );
}
