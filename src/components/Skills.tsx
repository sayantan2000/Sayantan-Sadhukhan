import { motion } from "framer-motion";
import { Code2, Server, Gauge, Network, PenTool, Database } from "lucide-react";

const skills = [
    {
        category: "Programming",
        icon: Code2,
        items: ["C#", "C++", "Object-Oriented Design", "Multithreading"]
    },
    {
        category: "Systems",
        icon: Server,
        items: ["Real-time Pipelines", "Client-Server Arch", "State Synchronization", "Modular Components"]
    },
    {
        category: "Performance",
        icon: Gauge,
        items: ["CPU/GPU Profiling", "Memory Optimization", "Runtime Stability", "Garbage Collection mgmt"]
    },
    {
        category: "Networking",
        icon: Network,
        items: ["Distributed Systems", "Bandwidth Optimization", "Latency Handling", "Deterministic Flows"]
    },
    {
        category: "Tools & Platforms",
        icon: PenTool,
        items: ["Unity Engine", "Profiling Tools", "Visual Studio", "Git"]
    },
    {
        category: "Foundations",
        icon: Database,
        items: ["Data Structures", "Clean Architecture", "System Design", "Debugging"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-32 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-32 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Technical Arsenal</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Core technologies and competencies driven by years of real-time application development.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.2 },
                                default: { duration: 0.3 }
                            }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.4)", boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)" }}
                            className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 transition-all duration-300 group backdrop-blur-sm shadow-lg hover:shadow-indigo-500/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="p-3 rounded-xl bg-slate-800 group-hover:bg-indigo-500/20 text-indigo-400 transition-colors shadow-lg"
                                >
                                    <skill.icon size={28} />
                                </motion.div>
                                <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{skill.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
