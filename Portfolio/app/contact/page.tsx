"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Github } from "lucide-react";
import BentoCard from "@/components/BentoCard";

export default function Contact() {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
                {/* Left Column: Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">INITIATE_UPLINK</h1>
                    <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
                        Ready to optimize your infrastructure or build high-performance systems?
                        Send a transmission.
                    </p>

                    <div className="space-y-6 font-mono text-sm">
                        <div className="flex items-center gap-4 text-neutral-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase">Base of Operations</p>
                                <p>Zambia (Open for Remote)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-neutral-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-violet-500">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase">Direct Line</p>
                                <p>joseph.0.ngandu@icloud.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-500 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right Column: Form */}
                <BentoCard className="p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-mono text-neutral-500 mb-2 uppercase">Identity</label>
                            <input
                                type="text"
                                placeholder="> Enter your name"
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-neutral-500 mb-2 uppercase">Frequency (Email)</label>
                            <input
                                type="email"
                                placeholder="> Enter your email"
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-neutral-500 mb-2 uppercase">Transmission</label>
                            <textarea
                                rows={4}
                                placeholder="> Enter message..."
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm resize-none"
                            />
                        </div>

                        <button className="w-full py-4 bg-white text-black font-mono font-bold uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </BentoCard>
            </motion.div>
        </div>
    );
}
