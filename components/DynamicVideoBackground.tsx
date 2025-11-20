"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function DynamicVideoBackground() {
    const pathname = usePathname();
    const [videoSrc, setVideoSrc] = useState("/bg-home.mp4");

    useEffect(() => {
        if (pathname === "/") {
            setVideoSrc("/bg-home.mp4");
        } else if (pathname.startsWith("/about")) {
            setVideoSrc("/bg-about.mp4");
        } else if (pathname.startsWith("/skills")) {
            setVideoSrc("/bg-skills.mp4");
        } else if (pathname.startsWith("/projects")) {
            setVideoSrc("/bg-projects.mp4");
        } else if (pathname.startsWith("/contact")) {
            setVideoSrc("/bg-contact.mp4");
        } else {
            // Default fallback
            setVideoSrc("/bg-home.mp4");
        }
    }, [pathname]);

    return (
        <>
            {/* Video Layer (z-index: -2) */}
            <div className="fixed inset-0 w-screen h-screen overflow-hidden z-[-2]">
                <AnimatePresence mode="wait">
                    <motion.video
                        key={videoSrc}
                        src={videoSrc}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.0, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </AnimatePresence>
            </div>

            {/* Black Overlay Layer (z-index: -1) */}
            <div className="fixed inset-0 w-screen h-screen bg-black z-[-1] opacity-70 pointer-events-none" />
        </>
    );
}
