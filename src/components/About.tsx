import { motion } from "framer-motion";
import { User, Layers, Zap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-950 text-white relative border-t border-slate-900">
            <div className="container mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-3 mb-12">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
                            <User className="text-white" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Professional Summary</h2>
                    </div>

                    <div className="bg-slate-900/50 p-8 md:p-10 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl shadow-indigo-900/5">
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            I am a Software Engineer with <strong className="text-white">4+ years of experience</strong> building real-time interactive systems using <strong className="text-white">C#</strong> and performance-critical architectures. My expertise lies in designing scalable client-server systems, managing state synchronization, and implementing runtime optimizations for complex applications in gaming and simulations.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-8 border-t border-slate-800 pt-8">
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-slate-100">Systems Architecture</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Specialized in modular design, clean architecture, and identifying bottlenecks in CPU, GPU, and memory usage to ensure stability.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-slate-100">Real-Time Performance</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Expert strategies for bandwidth optimization, latency handling, prediction, and ensuring smooth runtime in distributed environments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
