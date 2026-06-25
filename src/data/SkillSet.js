import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiPostman,
  SiGithubactions,
} from "react-icons/si";


export const orbitSkills = [
  {
    name: "React",
    icon: SiReact,
    accent: "#22d3ee",
    position: "top-[2%] left-1/2 -translate-x-1/2",
    floatDelay: 0,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    accent: "#22c55e",
    position: "top-[14%] right-[6%]",
    floatDelay: 0.2,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    accent: "#34d399",
    position: "top-1/2 right-[2%] -translate-y-1/2",
    floatDelay: 0.4,
  },
  {
    name: "Docker",
    icon: SiDocker,
    accent: "#60a5fa",
    position: "bottom-[14%] right-[6%]",
    floatDelay: 0.6,
  },
  {
    name: "Express",
    icon: SiExpress,
    accent: "#e5e7eb",
    position: "bottom-[2%] left-1/2 -translate-x-1/2",
    floatDelay: 0.8,
  },
  {
    name: "Git",
    icon: SiGit,
    accent: "#fb923c",
    position: "bottom-[14%] left-[6%]",
    floatDelay: 1,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    accent: "#facc15",
    position: "top-1/2 left-[2%] -translate-y-1/2",
    floatDelay: 1.2,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    accent: "#38bdf8",
    position: "top-[14%] left-[6%]",
    floatDelay: 1.4,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, accent: "#22d3ee" },
      { name: "JavaScript", icon: SiJavascript, accent: "#facc15" },
      { name: "HTML5", icon: SiHtml5, accent: "#f97316" },
      { name: "CSS3", icon: SiCss, accent: "#3b82f6" },
      { name: "Tailwind", icon: SiTailwindcss, accent: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, accent: "#22c55e" },
      { name: "Express", icon: SiExpress, accent: "#e5e7eb" },
      { name: "MongoDB", icon: SiMongodb, accent: "#34d399" },
      { name: "MySQL", icon: SiMysql, accent: "#60a5fa" },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git", icon: SiGit, accent: "#fb923c" },
      { name: "GitHub", icon: SiGithub, accent: "#e5e7eb" },
      { name: "Docker", icon: SiDocker, accent: "#60a5fa" },
      { name: "Vercel", icon: SiVercel, accent: "#e5e7eb" },
      { name: "Postman", icon: SiPostman, accent: "#f97316" },
      { name: "GitHub Actions", icon: SiGithubactions, accent: "#60a5fa" },
    ],
  },
  {
    title: "Foundations",
    skills: [
      { name: "C", icon: SiC, accent: "#93c5fd" },
      { name: "C++", icon: SiCplusplus, accent: "#60a5fa" },
      { name: "Python", icon: SiPython, accent: "#facc15" },
    ],
  },
];