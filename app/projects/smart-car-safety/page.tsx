"use client";

import { motion } from "framer-motion";
import {
    Globe, AlertTriangle, Database, Gauge, MapPin,
    CheckCircle2, Zap, Shield, Radio, Activity,
    ArrowLeft, Cpu, Bell, Car, Bot, Smartphone, Link2
} from "lucide-react";
import BentoCard from "@/components/BentoCard";
import Link from "next/link";

export default function SmartCarSafetyPage() {
    const features = [
        { icon: AlertTriangle, title: "Accident Detection", desc: "Real-time crash detection with automatic alerts" },
        { icon: Gauge, title: "Speed Tracking", desc: "Continuous monitoring and overspeed warnings" },
        { icon: Database, title: "Driver Database", desc: "Integrated driver records and licensing verification" },
        { icon: MapPin, title: "GPS Tracking", desc: "Real-time vehicle location and route monitoring" },
        { icon: Bell, title: "Emergency Alerts", desc: "Automatic notifications to authorities and fleet managers" },
        { icon: Activity, title: "Behavior Analytics", desc: "Driver performance scoring and safety metrics" }
    ];

    const techStack = [
        {
            category: "Hardware",
            items: ["IoT Sensors", "GPS Modules", "Accelerometers", "Gyroscopes", "Communication Modules"]
        },
        {
            category: "Software",
            items: ["C++", "Embedded Systems", "Real-time Processing", "Event-Driven Architecture"]
        },
        {
            category: "Database",
            items: ["Driver Records", "Vehicle Data", "Incident Logs", "Route History"]
        },
        {
            category: "Integration",
            items: ["RTSA Systems", "Fleet Management", "Emergency Services", "Cloud Sync"]
        }
    ];

    const contributions = [
        "Designed IoT sensor integration architecture for accident detection and speed monitoring",
        "Implemented real-time data processing algorithms for crash detection using accelerometer data",
        "Built driver database integration for license verification and compliance tracking",
        "Developed emergency alert system with automatic notification to authorities",
        "Created GPS tracking module for real-time vehicle location monitoring",
        "Optimized embedded code for low-power, high-reliability operation",
        "Collaborated with RTSA (Road Transport and Safety Agency) for prototype validation"
    ];

    const innovations = [
        {
            icon: Zap,
            title: "Real-Time Detection",
            desc: "Sub-second accident detection using multi-axis accelerometer analysis and pattern recognition algorithms."
        },
        {
            icon: Shield,
            title: "Public Safety Focus",
            desc: "Designed specifically for public transport to protect passengers and improve road safety compliance."
        },
        {
            icon: Radio,
            title: "Offline Capability",
            desc: "Local data logging and processing ensure functionality even without network connectivity."
        },
        {
            icon: Cpu,
            title: "Resource Efficient",
            desc: "Optimized for low-cost hardware deployment across large public transport fleets."
        }
    ];

    return (
        <div className="pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Back Button */}
                <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-mono">Back to Projects</span>
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-violet-500/10 text-violet-500">
                            <Globe className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Smart Car Safety</h1>
                            <p className="text-[var(--color-text-secondary)] font-mono text-sm mt-1">IOT / SYSTEMS</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        <span className="text-sm font-mono text-yellow-500">PROTOTYPE</span>
                    </div>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
                        An IoT-based safety system for public transport vehicles, developed as a prototype for
                        Zambia's Road Transport and Safety Agency (RTSA) to improve road safety and compliance.
                    </p>
                </div>

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">01.</span> Overview
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                            Smart Car Safety is an <span className="text-[var(--color-text-primary)] font-semibold">IoT-based monitoring system</span> designed
                            to enhance safety in public transport vehicles. The system combines hardware sensors with intelligent
                            software to detect accidents, monitor driver behavior, and ensure regulatory compliance.
                        </p>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            Developed as a prototype for RTSA, this project demonstrates how <span className="text-[var(--color-text-primary)] font-semibold">embedded
                                systems and IoT technology</span> can be leveraged to save lives and improve transportation safety
                            in developing countries.
                        </p>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">02.</span> The Problem
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-violet-500/10 to-red-500/10 border-violet-500/20 p-8">
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Public transport accidents in Zambia often result in severe casualties due to delayed emergency
                                response, lack of driver accountability, and insufficient safety monitoring. Traditional methods
                                of tracking driver behavior and vehicle compliance are manual, inefficient, and prone to errors.
                            </p>
                            <p className="text-[var(--color-text-primary)] font-semibold">
                                Smart Car Safety addresses this by providing automated accident detection, real-time speed monitoring,
                                driver verification, and instant emergency alerts — all integrated into a single, cost-effective IoT system.
                            </p>
                        </div>
                    </BentoCard>
                </section>

                {/* Features */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">03.</span> Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <BentoCard className="h-full p-5">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-[var(--color-surface)] text-violet-500 flex-shrink-0">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                                            <p className="text-xs text-[var(--color-text-secondary)]">{feature.desc}</p>
                                        </div>
                                    </div>
                                </BentoCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">04.</span> Technology Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {techStack.map((category, index) => (
                            <BentoCard key={index} className="p-6">
                                <h3 className="font-mono text-xs text-violet-500 mb-3 uppercase">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs border border-[var(--color-border)] px-2 py-1 rounded text-[var(--color-text-secondary)] bg-[var(--color-surface)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </section>

                {/* Architecture */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">05.</span> System Architecture
                    </h2>
                    <BentoCard className="p-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-white mb-2">Sensor Layer</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Multi-axis accelerometers, gyroscopes, and GPS modules continuously monitor vehicle dynamics,
                                    detecting sudden impacts, harsh braking, and location changes.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">Processing Layer</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Embedded C++ algorithms analyze sensor data in real-time, identifying accident patterns and
                                    triggering alerts based on configurable thresholds and machine learning models.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">Communication Layer</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Cellular modules transmit critical data to cloud servers and emergency services, with local
                                    storage for offline operation and data redundancy.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">Integration Layer</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    APIs connect to RTSA databases for driver verification, fleet management systems for monitoring,
                                    and emergency services for rapid response coordination.
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </section>

                {/* My Contributions */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">06.</span> My Role & Contributions
                    </h2>
                    <BentoCard className="p-8">
                        <div className="space-y-3">
                            {contributions.map((contribution, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-[var(--color-text-secondary)]">{contribution}</p>
                                </div>
                            ))}
                        </div>
                    </BentoCard>
                </section>

                {/* Innovation Highlights */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">07.</span> Innovation & Key Wins
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {innovations.map((innovation, index) => (
                            <BentoCard key={index} className="p-6">
                                <innovation.icon className="w-6 h-6 text-violet-500 mb-3" />
                                <h3 className="font-bold text-white mb-2">{innovation.title}</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">{innovation.desc}</p>
                            </BentoCard>
                        ))}
                    </div>
                </section>

                {/* Impact */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">08.</span> Potential Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BentoCard className="text-center p-6">
                            <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-white mb-2">Faster Response</div>
                            <p className="text-sm text-[var(--color-text-secondary)]">Automatic emergency alerts reduce response time</p>
                        </BentoCard>
                        <BentoCard className="text-center p-6">
                            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-white mb-2">Safer Driving</div>
                            <p className="text-sm text-[var(--color-text-secondary)]">Real-time monitoring improves driver behavior</p>
                        </BentoCard>
                        <BentoCard className="text-center p-6">
                            <Database className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-white mb-2">Data-Driven</div>
                            <p className="text-sm text-[var(--color-text-secondary)]">Analytics enable better safety policies</p>
                        </BentoCard>
                    </div>
                </section>

                {/* Future Roadmap */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-violet-500">09.</span> Future Roadmap
                    </h2>
                    <BentoCard className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 border-violet-500/20 p-8">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-violet-500" />
                                    Fleet-Wide Deployment
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Scale from prototype to production deployment across public transport fleets
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Bot className="w-5 h-5 text-violet-500" />
                                    Predictive Analytics
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Machine learning models to predict high-risk situations before they occur
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Smartphone className="w-5 h-5 text-violet-500" />
                                    Driver Mobile App
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Real-time feedback and coaching for drivers to improve safety scores
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Link2 className="w-5 h-5 text-violet-500" />
                                    National Integration
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    Connect with national traffic management and emergency response systems
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </section>
            </motion.div>
        </div>
    );
}
