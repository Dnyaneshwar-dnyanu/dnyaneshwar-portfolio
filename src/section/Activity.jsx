import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { ExternalLink } from "lucide-react";
import { profiles } from "../data/Profile.data";

export default function Activity() {
  return (
    <section
      id="activity"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 w-96 h-96 bg-green-500/10 blur-[140px] rounded-full" />
      <div className="absolute right-0 bottom-10 w-80 h-80 bg-green-400/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <SectionTitle
          title="Developer Activity"
          subtitle="Code Presence"
        />

        {/* CODING PROFILES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_25px_rgba(34,197,94,0.08)] hover:shadow-[0_0_45px_rgba(34,197,94,0.18)] transition duration-300"
              >
                <Icon className={`text-5xl ${profile.color} mb-6`} />

                <h3 className="text-2xl font-bold text-white mb-2">
                  {profile.name}
                </h3>

                <p className="text-green-400 mb-4">
                  {profile.username}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {profile.description}
                </p>

                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition"
                >
                  Visit Profile
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}