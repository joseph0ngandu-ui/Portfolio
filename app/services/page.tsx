"use client";

import { motion } from "framer-motion";
import {
    Code, Cloud, Database, Zap, Brain, Smartphone,
    LineChart, Shield, Cpu, Globe, CheckCircle2, ArrowRight
} from "lucide-react";
import BentoCard from "@/components/BentoCard";
import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            icon: Cloud,
            title: "Cloud Infrastructure & DevOps",
            color: "text-blue-500",
            description: "End-to-end cloud architecture, deployment automation, and infrastructure optimization.",
            offerings: [
                "AWS infrastructure design and deployment",
                "CI/CD pipeline setup and optimization",
                "Docker containerization and orchestration",
                "Serverless architecture implementation",
                "Infrastructure as Code (IaC)",
                "Performance monitoring and optimization"
            ]
        },
        {
            icon: Brain,
            title: "AI/ML Integration",
            color: "text-violet-500",
            description: "Custom AI solutions, machine learning model development, and intelligent automation.",
            offerings: [
                "ML model training and deployment",
                "HuggingFace model integration",
                "Automated decision systems",
                "Predictive analytics implementation",
                "Natural language processing",
                "Computer vision solutions"
            ]
        },
        {
            icon: Globe,
            title: "Full-Stack Web Development",
            color: "text-green-500",
            description: "Modern, responsive web applications built with cutting-edge technologies.",
            offerings: [
                "Next.js and React applications",
                "RESTful API development (FastAPI, Node.js)",
                "Database design and optimization",
                "Real-time features with WebSockets",
                "Progressive Web Apps (PWA)",
                "Mobile-first responsive design"
            ]
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            color: "text-pink-500",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            offerings: [
                "iOS development with Swift",
                "React Native cross-platform apps",
                "Mobile-first UI/UX design",
                "Offline-first architecture",
                "Push notifications and real-time sync",
                "App Store deployment"
            ]
        },
        {
            icon: LineChart,
            title: "Algorithmic Trading Systems",
            color: "text-orange-500",
            description: "Sophisticated trading automation with ML-driven strategy optimization.",
            offerings: [
                "Custom trading bot development",
                "Strategy backtesting and optimization",
                "Multi-timeframe analysis systems",
                "Risk management automation",
                "Real-time market data integration",
                "Performance analytics dashboards"
            ]
        },
        {
            icon: Database,
            title: "System Architecture & Design",
            color: "text-cyan-500",
            description: "Scalable, resilient system architecture for complex business requirements.",
            offerings: [
                "Microservices architecture design",
                "Database schema optimization",
                "API design and documentation",
                "Load balancing and scaling strategies",
                "Security best practices implementation",
                "Technical documentation"
            ]
        }
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "Understanding your requirements, challenges, and goals to create a tailored solution strategy."
        },
        {
            step: "02",
            title: "Architecture & Design",
            description: "Designing scalable, efficient systems with clear technical specifications and timelines."
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Building production-grade solutions with continuous testing and quality assurance."
        },
        {
            step: "04",
            title: "Deployment & Support",
            description: "Seamless deployment with monitoring, documentation, and ongoing optimization support."
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">SERVICES_OFFERED</h1>
                    <p className="text-lg text-neutral-400 max-w-3xl">
                        From cloud infrastructure to AI integration, I deliver production-grade solutions
                        that scale. No fluff. Just engineering that works.
                    </p>
                </div>

                {/* Services Grid */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-blue-500">01.</span> What I Build
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <BentoCard className="h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-lg bg-white/5 ${service.color} flex-shrink-0`}>
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                            <p className="text-sm text-neutral-400">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 mt-4">
                                        {service.offerings.map((offering, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-neutral-300">{offering}</span>
                                            </div>
                                        ))}
                                    </div>
                                </BentoCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Process */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-blue-500">02.</span> How I Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, index) => (
                            <BentoCard key={index}>
                                <div className="text-4xl font-bold text-blue-500/20 mb-4">{item.step}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-neutral-400">{item.description}</p>
                            </BentoCard>
                        ))}
                    </div>
                </section>

                {/* Why Work With Me */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-blue-500">03.</span> Why Work With Me
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BentoCard>
                            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Fast Execution</h3>
                            <p className="text-sm text-neutral-400">
                                I ship production-grade code quickly without sacrificing quality.
                                No endless meetings, just results.
                            </p>
                        </BentoCard>
                        <BentoCard>
                            <Shield className="w-8 h-8 text-green-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Production-Ready</h3>
                            <p className="text-sm text-neutral-400">
                                Everything I build is designed to scale, self-heal, and run with
                                minimal intervention from day one.
                            </p>
                        </BentoCard>
                        <BentoCard>
                            <Cpu className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Full-Stack Expertise</h3>
                            <p className="text-sm text-neutral-400">
                                From embedded systems to cloud infrastructure, I handle the entire
                                stack so you don't need multiple specialists.
                            </p>
                        </BentoCard>
                    </div>
                </section>

                {/* CTA */}
                <section>
                    <BentoCard className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border-blue-500/20">
                        <div className="text-center py-8">
                            <h2 className="text-3xl font-bold mb-4">Ready to Build Something?</h2>
                            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                                Whether you need a complete system built from scratch or want to optimize
                                existing infrastructure, let's discuss how I can help.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-all"
                            >
                                Get In Touch
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </BentoCard>
                </section>
            </motion.div>
        </div>
    );
}
