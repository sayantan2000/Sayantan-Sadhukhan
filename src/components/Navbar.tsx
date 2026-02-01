import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled
                ? "py-4 bg-white/30 dark:bg-slate-950/60 backdrop-blur-3xl shadow-[0_15px_30px_-10px_rgba(31,38,135,0.1)] border-b border-white/50 dark:border-slate-800"
                : "py-6 bg-transparent"
                }`}
        >
            {/* Dynamic Glass Highlight for Scrolled State */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="font-bold text-2xl tracking-tighter text-slate-900 dark:text-white">
                    S<span className="text-indigo-500">S</span>.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium uppercase tracking-widest"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="hidden md:flex items-center gap-2 bg-slate-100/50 dark:bg-slate-900/50 p-1.5 rounded-full border border-white/50 dark:border-slate-800 backdrop-blur-md">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4 relative z-[60]">
                    <div className="scale-90 origin-right">
                        <ThemeToggle />
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-900 dark:text-white p-2 focus:outline-none rounded-xl bg-white/10 backdrop-blur-md border border-white/20 active:bg-white/20 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-x-4 top-24 bg-white/80 dark:bg-slate-900/90 p-8 rounded-3xl border border-white dark:border-slate-800 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-[55] overflow-hidden"
                    >
                        {/* Specular Highlight Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center gap-6 py-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xl font-bold tracking-tight py-2 w-full text-center"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
