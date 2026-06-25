import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { stats, strengths } from "../data/AboutData";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(34,197,94,0.08)]">
              <h3 className="text-3xl font-bold text-white mb-6">
                Building Digital Products with Purpose
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I'm Dnyaneshwar, a Full Stack Developer passionate about creating
                scalable, modern, and interactive web applications.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                My core expertise lies in the MERN stack, REST APIs, and
                building clean user experiences that feel polished and fast.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                I enjoy solving challenging problems, designing efficient systems,
                and turning ideas into real products.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-6 text-center hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(34,197,94,0.08)]"
                >
                  <h4 className="text-3xl font-bold text-green-400">
                    {stat.value}
                  </h4>
                  <p className="text-gray-300 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl px-5 py-4 border border-green-500/20 bg-black/40 text-green-300 font-medium hover:bg-green-500 hover:text-black transition duration-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}