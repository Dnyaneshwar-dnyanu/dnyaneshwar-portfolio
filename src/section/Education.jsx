import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { educationData, certifications   } from "../data/EducationAndCertification";

export default function Education() {
    return (
        <section
            id="education"
            className="relative py-28 bg-black overflow-hidden"
        >
            {/* Glow */}
            <div className="absolute left-0 top-20 w-80 h-80 bg-green-500/10 blur-[130px] rounded-full" />
            <div className="absolute right-0 bottom-10 w-96 h-96 bg-green-400/10 blur-[140px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
                <SectionTitle
                    title="Education & Certifications"
                    subtitle="My Journey"
                />

                {/* EDUCATION TIMELINE */}
                <div className="relative mb-24">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-green-500/20" />

                    <div className="space-y-16">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={item.institution}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                                    }`}
                            >
                                {/* Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border border-green-500/30 bg-black flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                    <GraduationCap size={16} className="text-green-400" />
                                </div>

                                {/* Card */}
                                <div className="ml-14 md:ml-0 md:w-[45%] rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(34,197,94,0.08)] hover:shadow-[0_0_40px_rgba(34,197,94,0.18)] transition duration-300">
                                    <p className="text-green-400 font-semibold mb-2">
                                        {item.year}
                                    </p>

                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {item.institution}
                                    </h3>

                                    <p className="text-gray-300 mb-2">
                                        {item.degree}
                                    </p>

                                    <p className="text-green-300 font-medium">
                                        {item.score}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ACHIEVEMENTS & CERTIFICATIONS */}
                {certifications.length > 0 && (
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                            Achievements & Certifications
                        </h3>

                        <div className="space-y-10">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.title}
                                    variants={{
                                        offscreen: {
                                            y: 250,
                                            opacity: 0,
                                            scale: 0.92,
                                            rotate: index % 2 === 0 ? -4 : 4,
                                        },
                                        onscreen: {
                                            y: 0,
                                            opacity: 1,
                                            scale: 1,
                                            rotate: 0,
                                            transition: {
                                                type: "spring",
                                                bounce: 0.35,
                                                duration: 0.9,
                                                delay: index * 0.12,
                                            },
                                        },
                                    }}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ amount: 0.3, once: true }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        boxShadow: "0 0 50px rgba(34,197,94,0.18)",
                                    }}
                                    className="
                                                sticky top-24
                                                rounded-3xl
                                                border border-green-500/20
                                                bg-white/5
                                                backdrop-blur-2xl
                                                overflow-hidden
                                                shadow-[0_0_40px_rgba(34,197,94,0.08)]
                                                transition duration-300
                                            "
                                >
                                    <div className="flex flex-col md:flex-row gap-10 p-6 md:p-6">

                                        {/* LEFT IMAGE */}
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative md:w-[30%] h-[150px] md:h-[200px] rounded-2xl overflow-hidden"
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                                        </motion.div>

                                        {/* RIGHT CONTENT */}
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="inline-flex w-fit items-center gap-3 px-5 py-3 rounded-2xl border border-green-500/20 bg-black/30 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                                                <Award
                                                    className="text-amber-400"
                                                    size={22}
                                                />

                                                <p className="text-green-400 font-semibold tracking-wide uppercase text-sm">
                                                    {cert.title}
                                                </p>
                                            </div>

                                            <p className="text-gray-300 leading-relaxed text-base mt-6 mb-8">
                                                {cert.description}
                                            </p>

                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:scale-105 transition"
                                            >
                                                View Certificate
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}