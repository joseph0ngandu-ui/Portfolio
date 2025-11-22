"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export default function BentoCard({
    children,
    className,
    spotlightColor = "rgba(184, 134, 11, 0.15)", // Dark Goldenrod default
}: BentoCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={clsx(
                "relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[var(--color-accent-primary)]/50 group",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
