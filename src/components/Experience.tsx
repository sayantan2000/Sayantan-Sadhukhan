import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
    {
        company: "Web Skitters Technology Solutions Pvt. Ltd.",
        role: "Software Engineer (Real-Time Applications)",
        period: "Mar 2023 – Present",
        description: [
            "Architected scalable, real-time C# systems for high-traffic applications, significantly reducing CPU overhead and memory fragmentation.",
            "Engineered fault-tolerant networking modules and cross-platform compatibility layers to ensure stability across diverse hardware environments."
        ]
    },
    {
        company: "Biswa Games Pvt. Ltd.",
        role: "Software Engineer (Networked Systems)",
        period: "Mar 2022 – Feb 2023",
        description: [
            "Developed deterministic synchronization logic for multiplayer environments, mitigating latency issues to deliver seamless real-time user experiences.",
            "Optimized data serialization and transmission protocols, reducing bandwidth consumption while maintaining high-fidelity state synchronization."
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } as any }
};

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-5xl z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        Professional Journey
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative space-y-12"
                >
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 -translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative md:flex items-center justify-between gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Spacer for desktop alignment */}
                            <div className="hidden md:block w-1/2" />

                            {/* Timeline dot */}
                            <motion.div
                                whileHover={{ scale: 1.5, borderColor: "#a855f7" }}
                                className="absolute left-[-12px] md:left-1/2 top-0 md:top-1/2 w-6 h-6 rounded-full bg-slate-950 border-4 border-indigo-500 z-10 -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(99,102,241,0.6)] cursor-pointer transition-colors"
                            />

                            {/* Content Card */}
                            <div className="md:w-1/2 pl-8 md:pl-0">
                                <motion.div
                                    whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(79, 70, 229, 0.2)" }}
                                    className="bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group backdrop-blur-md"
                                >
                                    <span className="inline-flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                                        <Calendar size={12} /> {exp.period}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                                    <h4 className="text-lg text-slate-400 mb-6 flex items-center gap-2 font-medium">
                                        <Briefcase size={16} className="text-purple-400" />
                                        {exp.company}
                                    </h4>
                                    <ul className="space-y-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-3">
                                                <ChevronRight size={16} className="mt-0.5 text-indigo-500 shrink-0 group-hover:translate-x-1 transition-transform" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
