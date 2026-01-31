import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-indigo-600/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Get In Touch</h2>
                    <p className="text-slate-400 mb-12 text-lg">
                        Interested in working together or discussing real-time systems?
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-24">
                        <motion.a
                            href="mailto:sayantansk13@gmail.com"
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                            <div className="p-5 bg-slate-900 rounded-full group-hover:bg-indigo-600 transition-colors border border-slate-800 group-hover:border-indigo-500 shadow-lg group-hover:shadow-indigo-500/50">
                                <Mail size={28} className="text-indigo-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-400 group-hover:text-indigo-400 transition-colors font-medium">sayantansk13@gmail.com</span>
                        </motion.a>
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="p-5 bg-slate-900 rounded-full group-hover:bg-purple-600 transition-colors border border-slate-800 group-hover:border-purple-500 shadow-lg group-hover:shadow-purple-500/50">
                                <Phone size={28} className="text-purple-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-400 group-hover:text-purple-400 transition-colors font-medium">+91-7980692503</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="p-5 bg-slate-900 rounded-full group-hover:bg-cyan-600 transition-colors border border-slate-800 group-hover:border-cyan-500 shadow-lg group-hover:shadow-cyan-500/50">
                                <MapPin size={28} className="text-cyan-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-400 group-hover:text-cyan-400 transition-colors font-medium">Kolkata, India</span>
                        </motion.div>
                        <motion.a
                            href="https://github.com/sayantan2000"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                            <div className="p-5 bg-slate-900 rounded-full group-hover:bg-slate-700 transition-colors border border-slate-800 group-hover:border-slate-600 shadow-lg group-hover:shadow-slate-500/50">
                                <Github size={28} className="text-slate-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium">GitHub</span>
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
