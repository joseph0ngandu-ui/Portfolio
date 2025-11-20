"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
    "> INITIALIZING SYSTEM...",
    "> LOADING PROFILE: JOSEPH NGANDU",
    "> ROLE: DEVOPS ENGINEER",
    "> STATUS: ONLINE",
];

export default function TerminalHero() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex >= lines.length) return;

        const currentLine = lines[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines((prev) => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = "";
                    }
                    newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
                    return newLines;
                });
                setCurrentCharIndex((prev) => prev + 1);
            }, 30 + Math.random() * 30); // Random typing speed

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }, 400); // Pause between lines

            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex]);

    return (
        <div className="font-mono text-sm md:text-base leading-relaxed text-neutral-400 min-h-[120px]">
            {displayedLines.map((line, index) => (
                <div key={index} className="flex items-center">
                    <span className="mr-2 text-blue-500">$</span>
                    <span className={index === lines.length - 1 ? "text-white" : ""}>
                        {line}
                    </span>
                </div>
            ))}
            {currentLineIndex < lines.length && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-blue-500 ml-1 align-middle"
                />
            )}
        </div>
    );
}
