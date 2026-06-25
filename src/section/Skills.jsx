import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { orbitSkills, skillGroups } from "../data/SkillSet";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-black overflow-hidden"
    >
      <div className="absolute left-0 top-16 w-80 h-80 bg-green-500/10 blur-[140px] rounded-full" />
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-green-400/10 blur-[160px] rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tech Arsenal"
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] border border-green-500/20 bg-gradient-to-br from-white/5 to-black/80 p-8 md:p-10 overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.12)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.12),transparent_55%)]" />

            <div className="relative mx-auto w-full max-w-[520px] aspect-square">
              <div className="absolute inset-0 rounded-full border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.18)]" />
              <div className="absolute inset-[7%] rounded-full border border-green-500/20 border-dashed animate-spin [animation-duration:30s]" />
              <div className="absolute inset-[18%] rounded-full border border-green-500/10" />

              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[26%] rounded-3xl border border-green-500/30 bg-black/70 backdrop-blur-xl shadow-[0_0_40px_rgba(34,197,94,0.25)] flex flex-col items-center justify-center text-center px-6"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-green-300/70">
                  Core Stack
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-3">
                  MERN
                </h3>
                <p className="text-sm hidden lg:block text-gray-300 mt-3 leading-relaxed">
                  Shipping full stack products with speed, structure, and clean UI.
                </p>
              </motion.div>

              {orbitSkills.map((skill, index) => {
                const Icon = skill.icon;
                const floatDuration = 4.5 + index * 0.35;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                    className={`absolute ${skill.position} group`}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                      transition={{
                        duration: floatDuration,
                        delay: skill.floatDelay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl border border-green-500/20 bg-black/70 backdrop-blur-md shadow-[0_0_24px_rgba(34,197,94,0.18)] flex items-center justify-center transition duration-300 group-hover:scale-105 group-hover:border-green-400/60">
                        <Icon
                          className="text-xl md:text-3xl"
                          style={{
                            color: skill.accent,
                            filter: `drop-shadow(0 0 10px ${skill.accent}55)`,
                          }}
                        />
                      </div>
                      <span className="text-[11px] md:text-xs text-gray-300 group-hover:text-white transition">
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(34,197,94,0.12)]"
            >
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-green-300/70">
                    Stack
                  </p>
                  <h3 className="text-2xl font-bold text-white mt-3">
                    Skill Matrix
                  </h3>
                </div>
                <span className="text-xs text-green-300/70 border border-green-500/20 px-3 py-1 rounded-full">
                  Always learning
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-green-300 font-semibold text-sm uppercase tracking-[0.2em]">
                      {group.title}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {group.skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-full border border-green-500/20 bg-black/50 text-sm text-gray-200 hover:border-green-400/60 hover:text-white transition"
                          >
                            <Icon
                              className="text-base"
                              style={{ color: skill.accent }}
                            />
                            <span>{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
