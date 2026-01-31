import { motion } from "framer-motion";
import { User, Layers, Zap } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-950 text-white relative border-t border-slate-900 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-lg shadow-purple-500/20">
                            <User className="text-white" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Professional Summary</h2>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-slate-900/50 p-8 md:p-10 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl shadow-indigo-900/5 hover:border-indigo-500/30 transition-colors duration-500"
                    >
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            I am a Software Engineer with <strong className="text-white">3+ years of experience</strong> building real-time interactive systems using <strong className="text-white">C#</strong> and performance-critical architectures. My expertise lies in designing scalable client-server systems, managing state synchronization, and implementing runtime optimizations for complex applications in gaming and simulations.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-8 border-t border-slate-800 pt-8">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex gap-4 items-start group"
                            >
                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">Systems Architecture</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Specialized in modular design, clean architecture, and identifying bottlenecks in CPU, GPU, and memory usage to ensure stability.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex gap-4 items-start group"
                            >
                                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-slate-100 group-hover:text-purple-400 transition-colors">Real-Time Performance</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Expert strategies for bandwidth optimization, latency handling, prediction, and ensuring smooth runtime in distributed environments.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
