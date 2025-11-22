"use client";

import { motion } from "framer-motion";

const skills = [
    "Linux", "AWS IAM", "Docker", "CI/CD", "Serverless",
    "Python", "MQL5", "Swift", "SQL", "FastAPI",
    "Next.js", "TypeScript", "Kubernetes", "Terraform"
];

export default function SkillTicker() {
    return (
        <div className="w-full overflow-hidden bg-[var(--color-surface)] border-y border-[var(--color-border)] py-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-2 mx-8 text-[var(--color-text-secondary)] font-mono text-sm uppercase tracking-wider"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)]" />
                        {skill}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
