"use client";

import { motion } from "framer-motion";
import BentoCard from "@/components/BentoCard";
import Link from "next/link";
import { Cpu, Globe, Video, Brain, GraduationCap, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Aurora Trading Ecosystem",
        category: "ALGORITHMIC TRADING / ML",
        description: "Next-generation trading automation ecosystem by Eden. Features ML-driven strategy discovery, ICT + price action hybrid architecture, and cloud-native infrastructure. Built on the philosophy: The Origin of Order.",
        stack: ["Python", "FastAPI", "MQL5", "ML/TensorFlow", "AWS", "Docker", "WebSockets", "React Native"],
        icon: Cpu,
        color: "text-blue-500",
        status: "LIVE",
        statusColor: "bg-green-500",
        link: "/projects/aurora"
    },
    {
        title: "Smart Car Safety",
        category: "IOT / SYSTEMS",
        description: "IoT system for public transport (RTSA Prototype). Features accident detection, speed tracking, and driver database integration.",
        stack: ["C++", "IoT Sensors", "Database Design", "Real-time Systems"],
        icon: Globe,
        color: "text-violet-500",
        status: "PROTOTYPE",
        statusColor: "bg-yellow-500",
        link: "/projects/smart-car-safety"
    },
    {
        title: "Church Media Pipeline",
        category: "MEDIA / INFRASTRUCTURE",
        description: "Low-latency streaming architecture using OBS + DroidCam. Resource-efficient production engineering for high-quality broadcasts.",
        stack: ["OBS", "Networking", "Hardware Encoding", "Streaming Protocols"],
        icon: Video,
        color: "text-pink-500",
        status: "PRODUCTION",
        statusColor: "bg-blue-500",
        link: "/projects/church-media-pipeline"
    },
    {
        title: "NeuraNote",
        category: "AI / FULL-STACK",
        description: "Open-source AI study assistant with summarization, quiz generation, and flashcards. Full-stack deployment on free tiers with Next.js, FastAPI, and HuggingFace models.",
        stack: ["Next.js", "FastAPI", "HuggingFace", "Supabase", "TypeScript", "Python"],
        icon: Brain,
        color: "text-green-500",
        status: "IN PRODUCTION",
        statusColor: "bg-orange-500",
        link: "/projects/neuranote"
    },
    {
        title: "ZEDU",
        category: "EDTECH / AI PLATFORM",
        description: "AI-powered education platform modernizing Zambian schools. Features automated marking, smart attendance, personalized learning paths, and analytics — designed for scalable digital transformation.",
        stack: ["System Architecture", "AI/ML", "Full-Stack", "Mobile-First UX", "Analytics"],
        icon: GraduationCap,
        color: "text-orange-500",
        status: "IN PRODUCTION",
        statusColor: "bg-orange-500",
        link: "/projects/zedu"
    }
];

export default function Projects() {
    return (
        <div className="pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">PROJECT_INDEX</h1>
                <p className="text-neutral-400 font-mono text-sm mb-12">
                    &gt; ACCESSING ARCHIVES... FOUND {projects.length} ENTRIES
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        >
                            {project.link ? (
                                <Link href={project.link} className="block h-full">
                                    <BentoCard className="h-full min-h-[320px] group cursor-pointer">
                                        <div className="flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`p-3 rounded-lg bg-white/5 ${project.color}`}>
                                                    <project.icon className="w-6 h-6" />
                                                </div>
                                                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                                            </div>

                                            <div className="mb-auto">
                                                <span className="text-xs font-mono text-neutral-500 mb-2 block">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-white/5">
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.stack.map((tech) => (
                                                        <span key={tech} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-neutral-300">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                                                    {project.status}
                                                </div>
                                            </div>
                                        </div>
                                    </BentoCard>
                                </Link>
                            ) : (
                                <BentoCard className="h-full min-h-[320px] group">
                                    <div className="flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-3 rounded-lg bg-white/5 ${project.color}`}>
                                                <project.icon className="w-6 h-6" />
                                            </div>
                                            <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                                        </div>

                                        <div className="mb-auto">
                                            <span className="text-xs font-mono text-neutral-500 mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-white/5">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.stack.map((tech) => (
                                                    <span key={tech} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-neutral-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                                                <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                                                {project.status}
                                            </div>
                                        </div>
                                    </div>
                                </BentoCard>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
