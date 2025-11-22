"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-1 px-1.5 py-1.5 md:px-2 md:py-2 bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] rounded-full shadow-lg shadow-black/5 max-w-[95vw] overflow-x-auto no-scrollbar"
            >
                {navItems.map((item) => {
                    const isActive = item.path === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={clsx(
                                "relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-mono transition-colors duration-200 rounded-full whitespace-nowrap",
                                isActive
                                    ? "text-[var(--color-accent-primary)] font-bold"
                                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-[var(--color-accent-primary)]/10 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </motion.nav>
        </div>
    );
}
