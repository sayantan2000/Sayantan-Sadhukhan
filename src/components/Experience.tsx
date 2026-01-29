import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Web Skitters Technology Solutions Pvt. Ltd.",
        role: "Software Engineer (Real-Time Applications)",
        period: "Mar 2023 – Present",
        description: [
            "Designed and implemented modular, real-time application components using C#.",
            "Built and maintained performance-critical systems with predictable update cycles.",
            "Identified and resolved CPU, memory, and stability bottlenecks using profiling tools.",
            "Improved runtime reliability across constrained hardware environments, including mobile devices.",
            "Collaborated cross-functionally to translate system requirements into maintainable technical solutions."
        ]
    },
    {
        company: "Biswa Games Pvt. Ltd.",
        role: "Software Engineer (Networked Systems)",
        period: "Mar 2022 – Feb 2023",
        description: [
            "Developed client-server systems for real-time, multi-user applications.",
            "Designed synchronization logic to maintain consistency under latency and network variance.",
            "Optimized data transmission strategies to reduce bandwidth usage and improve system stability.",
            "Implemented fault-tolerant logic for live, distributed environments."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative md:flex items-center justify-between gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Spacer for desktop alignment */}
                            <div className="hidden md:block w-1/2" />

                            {/* Timeline dot */}
                            <div className="absolute left-[-12px] md:left-1/2 top-0 md:top-1/2 w-6 h-6 rounded-full bg-slate-950 border-4 border-indigo-500 z-10 -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

                            {/* Content Card */}
                            <div className="md:w-1/2 pl-8 md:pl-0">
                                <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all hover:shadow-lg hover:shadow-indigo-500/5 group">
                                    <span className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium mb-3 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                                        <Calendar size={14} /> {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{exp.role}</h3>
                                    <h4 className="text-lg text-slate-400 mb-4 flex items-center gap-2">
                                        <Briefcase size={16} />
                                        {exp.company}
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 bg-slate-600 rounded-full shrink-0 group-hover:bg-indigo-500 transition-colors" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
