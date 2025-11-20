"use client";

import { motion } from "framer-motion";

const skills = [
    "Linux", "AWS IAM", "Docker", "CI/CD", "Serverless",
    "Python", "MQL5", "Swift", "SQL", "FastAPI",
    "Next.js", "TypeScript", "Kubernetes", "Terraform"
];

export default function SkillTicker() {
    return (
        <div className="relative flex overflow-hidden py-4 border-y border-white/5 bg-white/5">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...skills, ...skills].map((skill, index) => (
                    <span
                        key={index}
                        className="text-sm font-mono text-neutral-400 uppercase tracking-wider"
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
