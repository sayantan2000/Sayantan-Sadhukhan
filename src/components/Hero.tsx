import { motion } from "framer-motion";
import { ChevronDown, Gamepad2, Cpu, Globe } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Sayantan Sadhukhan
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
                        Software Engineer <span className="text-cyan-400">|</span> Real-Time Systems
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-400 mb-10 text-lg leading-relaxed">
                        Building high-performance architectures, scalable multiplayer systems, and immersive interactive experiences using C# and Unity.
                    </p>

                    <div className="flex justify-center gap-8 mb-16">
                        <div className="flex flex-col items-center gap-3 text-cyan-400 group">
                            <div className="p-3 bg-cyan-950/30 rounded-full group-hover:bg-cyan-900/50 transition-colors border border-cyan-800/50">
                                <Gamepad2 size={24} />
                            </div>
                            <span className="text-sm font-medium tracking-wide text-slate-400 group-hover:text-cyan-300 transition-colors">Game Dev</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-purple-400 group">
                            <div className="p-3 bg-purple-950/30 rounded-full group-hover:bg-purple-900/50 transition-colors border border-purple-800/50">
                                <Cpu size={24} />
                            </div>
                            <span className="text-sm font-medium tracking-wide text-slate-400 group-hover:text-purple-300 transition-colors">Systems</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-indigo-400 group">
                            <div className="p-3 bg-indigo-950/30 rounded-full group-hover:bg-indigo-900/50 transition-colors border border-indigo-800/50">
                                <Globe size={24} />
                            </div>
                            <span className="text-sm font-medium tracking-wide text-slate-400 group-hover:text-indigo-300 transition-colors">Networking</span>
                        </div>
                    </div>

                    <motion.a
                        href="#about"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="inline-block text-slate-500 hover:text-white transition-colors cursor-pointer"
                    >
                        <ChevronDown size={32} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
