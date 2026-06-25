import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ project, index }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[280px] md:h-[450px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-green-500/20 bg-black/40 text-green-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${project.title}`}
                    className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold flex items-center gap-2 hover:scale-105 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo for ${project.title}`}
                    className="px-6 py-3 rounded-xl border border-green-500/30 text-green-400 font-semibold flex items-center gap-2 hover:bg-green-500 hover:text-black transition"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
    );
}

export default ProjectCard