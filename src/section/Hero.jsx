import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BookOpen, FolderOpen } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 lg:pt-0 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 blur-[140px] rounded-full" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center justify-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-green-400 text-lg md:text-xl mb-4 tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Dnyaneshwar
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mt-6 h-20 text-green-300">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "MERN Stack Developer",
                1500,
                "Problem Solver",
                1500,
                "React Developer",
                1500,
                "Backend Enthusiast",
                1500,
                "Software Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            Full Stack Developer skilled in MERN stack, REST APIs, and modern
            web development. Passionate about building scalable applications and
            solving real-world problems through clean and efficient code.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-green-500 text-black font-semibold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition duration-300"
            >
              <FolderOpen size={20} />
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl border border-green-500/40 text-green-400 font-semibold flex items-center justify-center gap-3 hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
            >
              <BookOpen size={20} />
              View Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">

            {/* Outer pulse ring */}
            <div className="absolute inset-0 rounded-full border border-green-500/20 animate-ping" />

            {/* Rotating ring */}
            <div className="absolute inset-0 lg:inset-4 rounded-full border-2 border-dashed border-green-400/30 animate-spin [animation-duration:20s]" />

            {/* Profile */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-green-400 to-green-700 p-1 shadow-[0_0_60px_rgba(34,197,94,0.35)]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-7xl md:text-8xl font-bold text-green-400">
                <img src="/profile-img.jpeg" alt="profile photo" className="w-full h-full overflow-hidden rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}