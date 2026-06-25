import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <footer className="relative bg-black border-t border-green-500/15 overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-green-500/10 blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 relative z-10">

                    {/* Branding */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            <span className="text-green-400">&lt;</span>
                            Dnyanu
                            <span className="text-green-400">/&gt;</span>
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
                            Crafting scalable digital experiences through clean code,
                            modern web technologies, and thoughtful engineering.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-32 h-px bg-green-500/20 mx-auto mb-8" />

                    {/* Bottom */}
                    <div className="flex justify-center items-center">
                        <p className="text-gray-500 text-sm md:text-base text-center">
                            © 2026 Dnyaneshwar Bhajantri • Built with React + Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
            {showScrollTop && (
                <a
                    href="#hero"
                    aria-label="Scroll back to top"
                    className="fixed bottom-8 right-8 z-50 group p-4 rounded-2xl border border-green-500/20 bg-black/70 backdrop-blur-xl hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] transition duration-300"
                >
                    <ChevronUp className="text-green-400 group-hover:-translate-y-1 transition duration-300" />
                </a>
            )}
        </>
    );
}