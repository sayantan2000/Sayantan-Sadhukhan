import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Users, Layers } from "lucide-react";

const projects = [
    {
        title: "The Verse VR",
        category: "Multi-User Real-Time VR",
        description: "Deployed application on Meta Store. Developed client-server systems for real-time interaction, synchronization logic for consistency, and fault-tolerant distributed logic.",
        tags: ["VR", "Networking", "Optimization"],
        link: "https://www.meta.com/experiences/4951395134941400/",
        icon: Users
    },
    {
        title: "Ludo Looters",
        category: "Real-Time Multiplayer",
        description: "A real-time, multi-user board application. Implemented deterministic turn-based synchronization and optimized data transmission for bandwidth efficiency to handle latency.",
        tags: ["Multiplayer", "C#", "Client-Server"],
        link: "https://play.google.com/store/apps/details?id=com.webskitters.ludolooters",
        icon: Gamepad2
    },
    {
        title: "Fun Arena",
        category: "Interactive Collection",
        description: "Collection of lightweight, interactive apps for children. Built with modular systems to support multiple mini-apps focused on fast load times and stability for low-end devices.",
        tags: ["Mobile", "Performance", "Modular"],
        link: "https://play.google.com/store/apps/details?id=com.webskitters.FunArena",
        icon: Layers
    }

];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-950 text-white relative">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Featured Projects</h2>
                    <p className="text-slate-400">Highlights of technical challenges & solutions</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:from-indigo-900/20 group-hover:to-purple-900/20 transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <project.icon size={64} className="text-slate-700 group-hover:text-indigo-400 transition-colors duration-500 transform group-hover:scale-110" />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-wider">{project.category}</div>
                                <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                                    {project.title}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" title="View Project">
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
