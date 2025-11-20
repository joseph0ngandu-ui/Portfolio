"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const navItems = [
    { name: "/home", path: "/" },
    { name: "/projects", path: "/projects" },
    { name: "/services", path: "/services" },
    { name: "/about", path: "/about" },
    { name: "/contact", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-1 px-2 py-2 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/50"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={clsx(
                                "relative px-4 py-2 text-sm font-mono transition-colors duration-200 rounded-full",
                                isActive
                                    ? "text-white"
                                    : "text-neutral-400 hover:text-white"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full"
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
