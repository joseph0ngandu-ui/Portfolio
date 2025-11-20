"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Github, AlertTriangle } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import { useState, FormEvent } from "react";
import { sanitizeInput, isValidEmail, validateInput, checkRateLimit, generateSecureToken } from "@/lib/security";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "ratelimit">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [csrfToken] = useState(() => generateSecureToken());

    const handleInputChange = (field: keyof typeof formData, value: string) => {
        // Sanitize input in real-time
        const sanitized = sanitizeInput(value);
        setFormData({ ...formData, [field]: sanitized });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset status
        setSubmitStatus("idle");
        setErrorMessage("");

        // Rate limiting check (5 requests per minute)
        const rateLimitCheck = checkRateLimit('contact-form', 5, 60000);
        if (!rateLimitCheck.allowed) {
            setSubmitStatus("ratelimit");
            setErrorMessage("Too many requests. Please wait a minute before trying again.");
            return;
        }

        // Check if all fields are filled FIRST
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus("error");
            setErrorMessage("Please fill in all fields");
            return;
        }

        // Validate name
        const nameValidation = validateInput(formData.name, { maxLength: 100, minLength: 1, checkSQL: true });
        if (!nameValidation.valid) {
            setSubmitStatus("error");
            setErrorMessage(nameValidation.error || "Invalid name");
            return;
        }

        // Validate email format first
        if (!isValidEmail(formData.email)) {
            setSubmitStatus("error");
            setErrorMessage("Please enter a valid email address");
            return;
        }

        // Then validate email for security
        const emailValidation = validateInput(formData.email, { maxLength: 254, minLength: 1, checkSQL: true });
        if (!emailValidation.valid) {
            setSubmitStatus("error");
            setErrorMessage(emailValidation.error || "Invalid email");
            return;
        }

        // Validate message
        const messageValidation = validateInput(formData.message, { maxLength: 5000, minLength: 1, checkSQL: true });
        if (!messageValidation.valid) {
            setSubmitStatus("error");
            setErrorMessage(messageValidation.error || "Invalid message");
            return;
        }

        setIsSubmitting(true);

        try {
            // Here you would send to your API endpoint with CSRF token
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                },
                body: JSON.stringify({
                    name: nameValidation.sanitized,
                    email: emailValidation.sanitized,
                    message: messageValidation.sanitized,
                    csrfToken
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error('Contact form error:', error);
            setSubmitStatus("error");
            setErrorMessage("Failed to send message. Please try again or contact directly via email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
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
                                <p>Lusaka, Zambia (Open for Remote)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-neutral-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-violet-500">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase">Direct Line</p>
                                <a href="mailto:joseph.0.ngandu@icloud.com" className="hover:text-white transition-colors">
                                    joseph.0.ngandu@icloud.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <a
                            href="https://github.com/joseph0ngandu-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-500 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joseph-ngandu-74b570372"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-500 transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right Column: Form */}
                <BentoCard className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <input type="hidden" name="csrf_token" value={csrfToken} />

                        <div>
                            <label htmlFor="name" className="block text-xs font-mono text-neutral-500 mb-2 uppercase">
                                Identity
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                placeholder="> Enter your name"
                                required
                                maxLength={100}
                                autoComplete="name"
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-mono text-neutral-500 mb-2 uppercase">
                                Frequency (Email)
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder="> Enter your email"
                                required
                                maxLength={254}
                                autoComplete="email"
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-mono text-neutral-500 mb-2 uppercase">
                                Transmission
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                placeholder="> Enter message..."
                                required
                                maxLength={5000}
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm resize-none"
                            />
                            <p className="text-xs text-neutral-600 mt-1 font-mono">
                                {formData.message.length}/5000 characters
                            </p>
                        </div>

                        {submitStatus === "success" && (
                            <div className="text-green-500 text-sm font-mono text-center p-3 bg-green-500/10 border border-green-500/20 rounded">
                                ✓ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="text-red-500 text-sm font-mono text-center p-3 bg-red-500/10 border border-red-500/20 rounded flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                {errorMessage || "Please fill in all fields correctly"}
                            </div>
                        )}

                        {submitStatus === "ratelimit" && (
                            <div className="text-yellow-500 text-sm font-mono text-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-white text-black font-mono font-bold uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </BentoCard>
            </motion.div>
        </div>
    );
}
