"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import { useState, useEffect } from "react";
import { isValidEmail, validateInput } from "@/lib/security"; // Adjusted import path and functions

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error" | "ratelimit">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [csrfToken, setCsrfToken] = useState("");

    useEffect(() => {
        // Generate a simple CSRF token for client-side validation
        setCsrfToken(Math.random().toString(36).substring(2));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (submitStatus === "error") {
            setSubmitStatus("idle");
            setErrorMessage("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true); // Set submitting state
        setSubmitStatus("submitting"); // Reset status
        setErrorMessage("");

        // Rate limiting check (5 requests per minute)
        // Placeholder for actual rate limit logic if needed
        const rateLimitCheck = { allowed: true }; // Simplified for this example
        if (!rateLimitCheck.allowed) {
            setSubmitStatus("ratelimit");
            setErrorMessage("Too many requests. Please wait a minute before trying again.");
            setIsSubmitting(false);
            return;
        }

        // Check if all fields are filled FIRST
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus("error");
            setErrorMessage("Please fill in all fields");
            setIsSubmitting(false);
            return;
        }

        // Validate name
        const nameValidation = validateInput(formData.name, { maxLength: 100, minLength: 1, checkSQL: true });
        if (!nameValidation.valid) {
            setSubmitStatus("error");
            setErrorMessage(nameValidation.error || "Invalid name");
            setIsSubmitting(false);
            return;
        }

        // Validate email format first
        if (!isValidEmail(formData.email)) {
            setSubmitStatus("error");
            setErrorMessage("Please enter a valid email address");
            setIsSubmitting(false);
            return;
        }

        // Then validate email for security
        const emailValidation = validateInput(formData.email, { maxLength: 254, minLength: 1, checkSQL: true });
        if (!emailValidation.valid) {
            setSubmitStatus("error");
            setErrorMessage(emailValidation.error || "Invalid email");
            setIsSubmitting(false);
            return;
        }

        // Validate message
        const messageValidation = validateInput(formData.message, { maxLength: 5000, minLength: 1, checkSQL: true });
        if (!messageValidation.valid) {
            setSubmitStatus("error");
            setErrorMessage(messageValidation.error || "Invalid message");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, csrfToken }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" }); // Reset form fields
        } catch (error) {
            console.error("Contact form error:", error);
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)]">
                    CONTACT
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <BentoCard className="p-8">
                            <h2 className="text-2xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)] flex items-center gap-2">
                                <span className="text-[var(--color-accent-primary)]">&gt;</span> SEND_MESSAGE
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono text-[var(--color-text-secondary)] mb-2 uppercase">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono text-[var(--color-text-secondary)] mb-2 uppercase">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-mono text-[var(--color-text-secondary)] mb-2 uppercase">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded p-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitStatus === 'submitting'}
                                    className="w-full py-4 bg-[var(--color-text-primary)] text-[var(--color-background)] font-bold uppercase tracking-wider hover:bg-[var(--color-accent-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitStatus === 'submitting' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            SENDING...
                                        </>
                                    ) : (
                                        <>
                                            SEND MESSAGE <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded text-green-500 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span>Message sent successfully! I'll get back to you soon.</span>
                                    </div>
                                )}

                                {(submitStatus === 'error' || submitStatus === 'ratelimit') && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-500 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        <span>{errorMessage || "Failed to send message. Please try again."}</span>
                                    </div>
                                )}
                            </form>
                        </BentoCard>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <BentoCard className="p-8">
                            <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <a href="mailto:josephngandu@outlook.com" className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors group">
                                    <div className="p-3 rounded-lg bg-[var(--color-background)] group-hover:bg-[var(--color-surface)] transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono">josephngandu@outlook.com</span>
                                </a>
                                <a href="https://linkedin.com/in/josephngandu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors group">
                                    <div className="p-3 rounded-lg bg-[var(--color-background)] group-hover:bg-[var(--color-surface)] transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono">linkedin.com/in/josephngandu</span>
                                </a>
                                <a href="https://github.com/joseph0ngandu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors group">
                                    <div className="p-3 rounded-lg bg-[var(--color-background)] group-hover:bg-[var(--color-surface)] transition-colors">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono">github.com/joseph0ngandu</span>
                                </a>
                            </div>
                        </BentoCard>

                        <BentoCard className="p-8 bg-[var(--color-accent-primary)]/5 border-[var(--color-accent-primary)]/20">
                            <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">Availability Status</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="font-mono text-green-600 font-bold">OPEN FOR WORK</span>
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                I am currently available for freelance projects and full-time opportunities.
                                Let's build something great together.
                            </p>
                        </BentoCard>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
