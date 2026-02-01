import { motion } from "framer-motion";
import { ArrowDown, Code2, Gamepad2, Network } from "lucide-react";
import Wormhole from "./Wormhole";

export default function Hero() {
    const name = "Sayantan Sadhukhan";
    const nameVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'transparent' }}>
            {/* 3D Wormhole Background */}
            <Wormhole />

            {/* Content Container */}
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <a
                        href="#about"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-slate-900/50 backdrop-blur-3xl border-t border-l border-white/80 dark:border-slate-800 border-b border-r border-white/10 shadow-[0_10px_20px_-5px_rgba(31,38,135,0.1)] text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-white hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                    >
                        {/* Specular Highlight */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                        <ArrowDown className="animate-bounce relative z-10" />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md"
                    >
                        <span className="text-indigo-400 font-mono text-sm tracking-wider">GAMEPLAY & SYSTEMS ENGINEER</span>
                    </motion.div>

                    <motion.h1
                        variants={nameVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white selection:bg-cyan-500/30"
                    >
                        {name.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Crafting high-performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-bold">Virtual Realities</span> and robust
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 font-bold"> Multiplayer Architectures</span>.
                        <br />Specialized in C#, Unity, and low-latency systems.
                    </motion.p>

                    {/* Floating Icons with continuous animation */}
                    <div className="flex justify-center gap-8 md:gap-16 text-slate-400 dark:text-slate-500 mb-16">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.2, color: "#9333ea" }}
                            className="flex flex-col items-center gap-2 cursor-pointer transition-colors"
                        >
                            <Gamepad2 size={40} />
                            <span className="text-xs font-bold tracking-widest opacity-0 hover:opacity-100 transition-opacity absolute -bottom-6">GAME DEV</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            whileHover={{ scale: 1.2, color: "#0891b2" }}
                            className="flex flex-col items-center gap-2 cursor-pointer transition-colors"
                        >
                            <Code2 size={40} />
                            <span className="text-xs font-bold tracking-widest opacity-0 hover:opacity-100 transition-opacity absolute -bottom-6">SYSTEMS</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            whileHover={{ scale: 1.2, color: "#4f46e5" }}
                            className="flex flex-col items-center gap-2 cursor-pointer transition-colors"
                        >
                            <Network size={40} />
                            <span className="text-xs font-bold tracking-widest opacity-0 hover:opacity-100 transition-opacity absolute -bottom-6">NETWORKING</span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        <a href="#projects" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 animate-bounce cursor-pointer">
                            <span className="uppercase text-sm tracking-widest font-semibold">Explore Projects</span>
                            <ArrowDown size={16} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
