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
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-[var(--color-text-primary)]">PROJECT_INDEX</h1>
                <p className="text-[var(--color-text-secondary)] font-mono text-sm mb-12">
                    &gt; ACCESSING ARCHIVES... FOUND {projects.length} ENTRIES
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={project.link} className="block h-full">
                                <BentoCard className="h-full group cursor-pointer hover:border-[var(--color-accent-primary)]/50">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="p-3 rounded-lg bg-[var(--color-background)] text-[var(--color-accent-primary)]">
                                                <project.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${project.status === "LIVE" ? "bg-green-500 animate-pulse" : project.status === "PROTOTYPE" ? "bg-yellow-500" : project.status === "PRODUCTION" ? "bg-blue-500" : "bg-orange-500"}`} />
                                                <span className="text-xs font-mono text-[var(--color-text-secondary)] uppercase">{project.status}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-primary)] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.stack.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 text-xs font-mono rounded bg-[var(--color-background)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </BentoCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
