"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe, Layers, Terminal, Wrench } from "lucide-react";
import BentoCard from "@/components/BentoCard";

export default function SkillsPage() {
    const skillCategories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["TypeScript", "JavaScript (ES6+)", "Python", "C++", "SQL", "HTML5/CSS3"]
        },
        {
            title: "Frontend",
            icon: Layers,
            skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"]
        },
        {
            title: "Backend",
            icon: Server,
            skills: ["Node.js", "FastAPI", "Express", "PostgreSQL", "Supabase", "GraphQL"]
        },
        {
            title: "DevOps & Cloud",
            icon: Globe,
            skills: ["AWS", "Docker", "CI/CD (GitHub Actions)", "Vercel", "Linux Administration"]
        },
        {
            title: "Tools & Workflow",
            icon: Wrench,
            skills: ["Git", "VS Code", "Figma", "Postman", "Jira", "Agile/Scrum"]
        },
        {
            title: "Specialized",
            icon: Cpu,
            skills: ["IoT Protocols", "Machine Learning Basics", "WebSockets", "Real-time Systems"]
        }
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
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500">
                            <Terminal className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">The Arsenal</h1>
                            <p className="text-neutral-500 font-mono text-sm mt-1">SKILLS & TECHNOLOGY STACK</p>
                        </div>
                    </div>
                    <p className="text-lg text-neutral-300 max-w-3xl">
                        A comprehensive overview of the technologies, tools, and methodologies I use to build
                        scalable, high-performance systems.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <BentoCard className="h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <category.icon className="w-6 h-6 text-cyan-500" />
                                    <h2 className="text-xl font-bold text-white">{category.title}</h2>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm rounded-md bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </BentoCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

function Server(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    )
}
