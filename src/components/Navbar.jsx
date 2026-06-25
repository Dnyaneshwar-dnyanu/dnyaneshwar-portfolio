import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Activity", href: "#activity" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume.pdf" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold tracking-wide text-white"
          >
            <span className="text-green-400">&lt;</span>
            Dnyanu
            <span className="text-green-400">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={ link.name === "Resume" ? "_blank" : "" }
                rel={ link.name === "Resume" ? "noopener noreferrer" : undefined }
                className="relative text-gray-300 font-medium transition duration-300 hover:text-green-400 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="p-2 rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition duration-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="p-2 rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded p-1"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                target={ link.name === "Resume" ? "_blank" : undefined }
                rel={ link.name === "Resume" ? "noopener noreferrer" : undefined }
                className="text-gray-300 text-lg hover:text-green-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}