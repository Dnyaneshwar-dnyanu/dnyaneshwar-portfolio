import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Mail, MessageCircle, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMailTo = async (e) => {
        e.preventDefault();

        // 1. Trim Inputs
        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();

        // 2. Client-side Validation
        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            toast.error("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Prevent double submission
        if (isSubmitting) return;

        setIsSubmitting(true);
        const loadingToast = toast.loading("Sending message...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: trimmedName,
                    email: trimmedEmail,
                    message: trimmedMessage
                }),
            });

            const result = await response.json();

            // Dismiss loading toast
            toast.dismiss(loadingToast);

            if (!response.ok) {
                throw new Error(result.error || "Failed to send email");
            }

            toast.success("Message sent successfully!");
            // Reset form on success
            setFormData({ name: "", email: "", message: "" });
        }
        catch (err) {
            // Dismiss loading toast
            toast.dismiss(loadingToast);
            console.error("Form submission error:", err);
            toast.error(err.message || "Failed to send message. Please try again.");
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative py-28 bg-black overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute left-0 top-20 w-96 h-96 bg-green-500/10 blur-[140px] rounded-full" />
            <div className="absolute right-0 bottom-10 w-80 h-80 bg-green-400/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
                <SectionTitle
                    title="Let's Connect"
                    subtitle="Get In Touch"
                />

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-10 rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(34,197,94,0.08)]"
                >
                    {/* LEFT FORM */}
                    <div className="rounded-3xl flex flex-col items-center bg-black/30 backdrop-blur-xl shadow-[0_0_35px_rgba(34,197,94,0.08)] w-full">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Send a Message
                        </h3>

                        <p className="text-gray-300 leading-relaxed mb-8 text-center max-w-lg">
                            Have an idea, collaboration, or opportunity? Let’s build something meaningful together.
                        </p>

                        <form onSubmit={handleMailTo} className="w-full space-y-6">

                            {/* NAME + EMAIL */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        aria-label="Your Name"
                                        placeholder="Your Name"
                                        className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-green-500/15 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        aria-label="Your Email Address"
                                        placeholder="Your Email"
                                        className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-green-500/15 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition"
                                    />
                                </div>
                            </div>

                            {/* MESSAGE */}
                            <textarea
                                rows="3"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-label="Your Message Content"
                                placeholder="Tell me about your project, idea, or message..."
                                className="w-full px-6 py-5 rounded-2xl bg-black/50 border border-green-500/15 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition resize-none"
                            />

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-500 text-black font-semibold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.35)] transition duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 disabled:hover:shadow-none"
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <Send
                                        size={20}
                                        className="group-hover:translate-x-1 transition duration-300"
                                    />
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT QUICK CONNECT */}
                    <div className="flex flex-col items-center justify-center text-center rounded-3xl border border-green-500/20 bg-black/30 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(34,197,94,0.08)]">

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick Connect
                        </h3>

                        <p className="text-gray-300 max-w-md leading-relaxed mb-6">
                            Prefer direct communication? Reach out instantly through your favorite platform.
                        </p>

                        {/* ICON DOCK */}
                        <div className="flex gap-2 lg:gap-6 flex-wrap justify-center">
                            <a
                                href={`https://wa.me/${import.meta.env.VITE_PHONE_NO}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact via WhatsApp"
                                className="group relative w-12 h-12 lg:w-15 lg:h-15 rounded-2xl border border-green-500/20 bg-black/50 flex items-center justify-center hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] hover:-translate-y-2 transition duration-300"
                            >
                                <MessageCircle className="text-green-400 text-3xl group-hover:scale-125 transition duration-300" />
                            </a>

                            <a
                                href={import.meta.env.VITE_GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                                className="group relative w-12 h-12 lg:w-15 lg:h-15 rounded-2xl border border-green-500/20 bg-black/50 flex items-center justify-center hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] hover:-translate-y-2 transition duration-300"
                            >
                                <FaGithub className="text-green-400 text-3xl group-hover:scale-125 transition duration-300" />
                            </a>

                            <a
                                href={import.meta.env.VITE_LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my LinkedIn profile"
                                className="group relative w-12 h-12 lg:w-15 lg:h-15 rounded-2xl border border-green-500/20 bg-black/50 flex items-center justify-center hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] hover:-translate-y-2 transition duration-300"
                            >
                                <FaLinkedinIn className="text-green-400 text-3xl group-hover:scale-125 transition duration-300" />
                            </a>

                            <a
                                href={`mailto:${import.meta.env.VITE_MY_EMAIL}`}
                                aria-label="Send direct email"
                                className="group relative w-12 h-12 lg:w-15 lg:h-15 rounded-2xl border border-green-500/20 bg-black/50 flex items-center justify-center hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] hover:-translate-y-2 transition duration-300"
                            >
                                <Mail className="text-green-400 text-3xl group-hover:scale-125 transition duration-300" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}