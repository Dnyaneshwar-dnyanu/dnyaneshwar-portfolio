import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-green-400 tracking-[0.3em] uppercase text-sm mb-4">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      <div className="w-28 h-1 bg-green-500 mx-auto mt-5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
    </motion.div>
  );
}