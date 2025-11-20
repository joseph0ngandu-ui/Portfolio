"use client";

import { motion } from "framer-motion";
import {
    Brain, BookOpen, Zap, Database, Shield, Cloud,
    FileText, MessageSquare, Layers, CheckCircle2,
    Github, ExternalLink, ArrowLeft
} from "lucide-react";
import BentoCard from "@/components/BentoCard";
import Link from "next/link";

export default function NeuraNotePage() {
    const features = [
        { icon: FileText, title: "Multi-Format Upload", desc: "PDF, DOCX, PPTX, and image support with OCR" },
        { icon: Brain, title: "AI Summarization", desc: "Local HuggingFace models (facebook/bart-large-cnn)" },
        { icon: MessageSquare, title: "Quiz Generation", desc: "Auto-generate questions with T5-based models" },
        { icon: BookOpen, title: "Flashcard Creation", desc: "Interactive study cards from any content" },
        { icon: Database, title: "Save & Sync", desc: "Supabase auth and database with RLS" },
        { icon: Cloud, title: "PWA Ready", desc: "Offline-capable Progressive Web App" }
    ];

    const techStack = [
        {
            category: "Frontend",
            items: ["Next.js 14 (App Router)", "TypeScript", "TailwindCSS", "shadcn/ui", "Zustand", "Tesseract.js", "next-pwa"]
        },
        {
            category: "Backend",
            items: ["FastAPI", "Python 3.11", "HuggingFace Transformers", "pdfminer.six", "slowapi", "Pydantic"]
        },
        {
            category: "Database & Auth",
            items: ["Supabase PostgreSQL", "Supabase Authentication", "Row Level Security"]
        },
        {
            category: "Deployment",
            items: ["Vercel (Frontend)", "Render (Backend)", "Supabase (Database)", "GitHub Actions CI/CD"]
        }
    ];

    const contributions = [
        "Architected full-stack monorepo structure with frontend and backend separation",
        "Implemented client-side OCR using Tesseract.js for image-to-text extraction",
        "Integrated local HuggingFace models for cost-free AI summarization and quiz generation",
        "Designed Supabase schema with Row Level Security for multi-user data isolation",
        "Built PWA capabilities for offline study sessions",
        "Configured CI/CD pipelines for automated testing and deployment",
        "Optimized for 100% free-tier deployment across all services"
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
                        <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                            <Brain className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">NeuraNote</h1>
                            <p className="text-neutral-500 font-mono text-sm mt-1">AI / FULL-STACK</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-sm font-mono text-orange-500">IN PRODUCTION</span>
                        </div>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                            <Github className="w-4 h-4" />
                            View Source
                        </a>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-green-500">01.</span> Overview
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-neutral-300 leading-relaxed mb-4">
                            NeuraNote is an <span className="text-white font-semibold">open-source, AI-powered study assistant</span> that
                            helps students learn more efficiently by automatically summarizing notes, generating practice quizzes,
                            and creating flashcards from any uploaded content.
                        </p>
                        <p className="text-neutral-300 leading-relaxed">
                            Built as a complete full-stack application, NeuraNote demonstrates how modern AI capabilities can be
                            deployed entirely on <span className="text-white font-semibold">free-tier infrastructure</span>, making
                            powerful study tools accessible to everyone without subscription costs.
                        </p>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-green-500">02.</span> The Problem
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20">
                        <div className="space-y-4">
                            <p className="text-neutral-300 leading-relaxed">
                                Students spend countless hours manually creating study materials from lecture notes, textbooks,
                                and presentations. Existing AI study tools are either expensive, require subscriptions, or lack
                                essential features like offline support and privacy.
                            </p>
                            <p className="text-white font-semibold">
                                NeuraNote solves this by providing a free, open-source platform that runs AI models locally
                                or on free cloud tiers, ensuring both cost-effectiveness and data privacy.
                            </p>
                        </div>
                    </BentoCard>
                </section>

                {/* Features */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-green-500">03.</span> Key Features
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
                                        <div className="p-2 rounded-lg bg-white/5 text-green-500 flex-shrink-0">
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
                        <span className="text-green-500">04.</span> Technology Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {techStack.map((category, index) => (
                            <BentoCard key={index}>
                                <h3 className="font-mono text-xs text-green-500 mb-3 uppercase">{category.category}</h3>
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

                {/* Architecture */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-green-500">05.</span> Architecture
                    </h2>
                    <BentoCard>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-green-500" />
                                    Monorepo Structure
                                </h3>
                                <p className="text-sm text-neutral-400 mb-3">
                                    Organized as a monorepo with separate frontend and backend directories, shared documentation,
                                    and unified CI/CD pipelines for streamlined development.
                                </p>
                                <div className="bg-black/50 border border-white/10 rounded p-4 font-mono text-xs text-neutral-300">
                                    <div>NeuraNote/</div>
                                    <div className="ml-4">├── frontend/ <span className="text-neutral-500"># Next.js app</span></div>
                                    <div className="ml-4">├── backend/ <span className="text-neutral-500"># FastAPI + ML models</span></div>
                                    <div className="ml-4">├── docs/ <span className="text-neutral-500"># Documentation</span></div>
                                    <div className="ml-4">├── .github/workflows/ <span className="text-neutral-500"># CI/CD</span></div>
                                    <div className="ml-4">└── docker-compose.yml <span className="text-neutral-500"># Local dev</span></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">Free-Tier Deployment Strategy</h3>
                                <p className="text-sm text-neutral-400">
                                    Frontend hosted on Vercel, backend on Render, database and auth on Supabase — all using
                                    free tiers with automatic scaling and zero infrastructure costs.
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </section>

                {/* My Contributions */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-green-500">06.</span> My Role & Contributions
                    </h2>
                    <BentoCard>
                        <div className="space-y-3">
                            {contributions.map((contribution, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-neutral-300">{contribution}</p>
                                </div>
                            ))}
                        </div>
                    </BentoCard>
                </section>

                {/* Innovation Highlights */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-green-500">07.</span> Innovation & Key Wins
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <BentoCard>
                            <Zap className="w-6 h-6 text-yellow-500 mb-3" />
                            <h3 className="font-bold text-white mb-2">Zero-Cost AI</h3>
                            <p className="text-sm text-neutral-400">
                                Leveraged local HuggingFace models instead of expensive API calls, making AI features
                                completely free to run at scale.
                            </p>
                        </BentoCard>
                        <BentoCard>
                            <Shield className="w-6 h-6 text-blue-500 mb-3" />
                            <h3 className="font-bold text-white mb-2">Privacy-First Design</h3>
                            <p className="text-sm text-neutral-400">
                                Client-side OCR and local model inference mean sensitive study materials never leave
                                the user's device unnecessarily.
                            </p>
                        </BentoCard>
                        <BentoCard>
                            <Cloud className="w-6 h-6 text-green-500 mb-3" />
                            <h3 className="font-bold text-white mb-2">Offline Capability</h3>
                            <p className="text-sm text-neutral-400">
                                PWA implementation allows students to access saved materials and study offline,
                                perfect for low-connectivity environments.
                            </p>
                        </BentoCard>
                        <BentoCard>
                            <Database className="w-6 h-6 text-violet-500 mb-3" />
                            <h3 className="font-bold text-white mb-2">Scalable Architecture</h3>
                            <p className="text-sm text-neutral-400">
                                Row-level security and efficient database design ensure the platform can scale
                                to thousands of users while maintaining data isolation.
                            </p>
                        </BentoCard>
                    </div>
                </section>

                {/* Future Roadmap */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-green-500">08.</span> Future Roadmap
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-green-500/10 to-violet-500/10 border-green-500/20">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-white mb-2">📱 Mobile Apps</h3>
                                <p className="text-sm text-neutral-400">Native iOS and Android apps for enhanced mobile experience</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">🤝 Collaborative Study</h3>
                                <p className="text-sm text-neutral-400">Shared study sets and real-time collaboration features</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">📊 Advanced Analytics</h3>
                                <p className="text-sm text-neutral-400">Learning progress tracking and personalized recommendations</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">🎯 Spaced Repetition</h3>
                                <p className="text-sm text-neutral-400">AI-optimized flashcard scheduling for better retention</p>
                            </div>
                        </div>
                    </BentoCard>
                </section>
            </motion.div>
        </div>
    );
}
