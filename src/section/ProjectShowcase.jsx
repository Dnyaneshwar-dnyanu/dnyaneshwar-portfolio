import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import projects from "../data/ProjectList";
import { ChevronRight, ChevronLeft  } from "lucide-react"
import ProjectCard from "../components/ProjectCard";

export default function ProjectShowcase() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 w-96 h-96 bg-green-500/10 blur-[140px] rounded-full" />
      <div className="absolute right-0 bottom-10 w-80 h-80 bg-green-400/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <SectionTitle
          title="Project Showcase"
          subtitle="Featured Work"
        />

        <div className="relative rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(34,197,94,0.08)] overflow-hidden">
          
          <ProjectCard project={projects[current]} index={current} />

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevProject}
              className="p-4 rounded-full border border-green-500/20 bg-black/50 text-green-400 hover:bg-green-500 hover:text-black transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextProject}
              className="p-4 rounded-full border border-green-500/20 bg-black/50 text-green-400 hover:bg-green-500 hover:text-black transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}