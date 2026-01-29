import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-950 text-white border-t border-slate-900">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Get In Touch</h2>
                    <p className="text-slate-400 mb-12 text-lg">
                        Interested in working together or discussing real-time systems?
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-16">
                        <a href="mailto:sayantansk13@gmail.com" className="flex flex-col items-center gap-4 group cursor-pointer">
                            <div className="p-4 bg-slate-900 rounded-full group-hover:bg-indigo-600 transition-colors border border-slate-800 group-hover:border-indigo-500 shadow-lg">
                                <Mail size={24} className="text-indigo-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-400 group-hover:text-indigo-400 transition-colors font-medium">sayantansk13@gmail.com</span>
                        </a>
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="p-4 bg-slate-900 rounded-full group-hover:bg-purple-600 transition-colors border border-slate-800 group-hover:border-purple-500 shadow-lg">
                                <Phone size={24} className="text-purple-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-400 group-hover:text-purple-400 transition-colors font-medium">+91-7980692503</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="p-4 bg-slate-900 rounded-full group-hover:bg-cyan-600 transition-colors border border-slate-800 group-hover:border-cyan-500 shadow-lg">
                                <MapPin size={24} className="text-cyan-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-400 group-hover:text-cyan-400 transition-colors font-medium">Kolkata, India</span>
                        </div>
                    </div>

                    <footer className="text-slate-700 text-sm border-t border-slate-900 pt-8">
                        <p>© {new Date().getFullYear()} Sayantan Sadhukhan.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    )
}
