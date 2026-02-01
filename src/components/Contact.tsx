import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-white/10 to-slate-100/20 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white border-t border-white/50 dark:border-slate-900 relative overflow-hidden transition-all duration-700">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-indigo-600/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400">Get In Touch</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
                        Interested in working together or discussing real-time systems?
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-24">
                        <motion.a
                            href="mailto:sayantansk13@gmail.com"
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                            <div className="p-5 bg-white/20 dark:bg-slate-900 rounded-full group-hover:bg-indigo-600 transition-all border-t border-l border-white/80 dark:border-slate-800 border-b border-r border-white/10 shadow-[0_10px_20px_-5px_rgba(31,38,135,0.1)] group-hover:shadow-indigo-500/50 backdrop-blur-3xl relative overflow-hidden">
                                {/* Specular Highlight Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                                <Mail size={28} className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors relative z-10" />
                            </div>
                            <span className="text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-medium">sayantansk13@gmail.com</span>
                        </motion.a>
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="p-5 bg-white/20 dark:bg-slate-900 rounded-full group-hover:bg-purple-600 transition-all border-t border-l border-white/80 dark:border-slate-800 border-b border-r border-white/10 shadow-[0_10px_20px_-5px_rgba(31,38,135,0.1)] group-hover:shadow-purple-500/50 backdrop-blur-3xl relative overflow-hidden">
                                {/* Specular Highlight Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                                <Phone size={28} className="text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors relative z-10" />
                            </div>
                            <span className="text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-medium">+91-7980692503</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="p-5 bg-white/20 dark:bg-slate-900 rounded-full group-hover:bg-cyan-600 transition-all border-t border-l border-white/80 dark:border-slate-800 border-b border-r border-white/10 shadow-[0_10px_20px_-5px_rgba(31,38,135,0.1)] group-hover:shadow-cyan-500/50 backdrop-blur-3xl relative overflow-hidden">
                                {/* Specular Highlight Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                                <MapPin size={28} className="text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors relative z-10" />
                            </div>
                            <span className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors font-medium">Kolkata, India</span>
                        </motion.div>
                        <motion.a
                            href="https://github.com/sayantan2000"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                            <div className="p-5 bg-white/20 dark:bg-slate-900 rounded-full group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-all border-t border-l border-white/80 dark:border-slate-800 border-b border-r border-white/10 shadow-[0_10px_20px_-5px_rgba(31,38,135,0.1)] group-hover:shadow-slate-500/50 backdrop-blur-3xl relative overflow-hidden">
                                {/* Specular Highlight Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                                <Github size={28} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors relative z-10" />
                            </div>
                            <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors font-medium">GitHub</span>
                        </motion.a>
                    </div>

                    <footer className="text-slate-600 text-sm">
                        <p>© {new Date().getFullYear()} Sayantan Sadhukhan.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    )
}
