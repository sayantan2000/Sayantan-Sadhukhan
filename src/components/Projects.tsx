import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Gamepad2 } from "lucide-react";
import React from "react";
import ImageCarousel from "./ImageCarousel";

// Define project type to include optional images
type Project = {
    title: string;
    category: string;
    description: string;
    tags: string[];
    link: string;
    icon: any;
    images?: string[];
};

const projects: Project[] = [
    {
        title: "The Verse VR",
        category: "Multi-User Real-Time VR",
        description: "Deployed application on Meta Store. Developed client-server systems for real-time interaction, synchronization logic for consistency, and fault-tolerant distributed logic.",
        tags: ["VR", "Networking", "Optimization"],
        link: "https://www.meta.com/experiences/4951395134941400/",
        icon: Gamepad2,
        images: [
            `${import.meta.env.BASE_URL}media/the_verse/39001722_845351934060843_1219799958268738039_n.webp`,
            `${import.meta.env.BASE_URL}media/the_verse/39003227_934337464713960_3147103992867123578_n.webp`,
            `${import.meta.env.BASE_URL}media/the_verse/39001679_353647927036056_5740262429056735628_n.mp4`,
            `${import.meta.env.BASE_URL}media/the_verse/39031560_401605032252963_1997246490830445445_n.webp`,
            `${import.meta.env.BASE_URL}media/the_verse/39036613_1432534167666537_6576254558792309383_n.webp`,
            `${import.meta.env.BASE_URL}media/the_verse/57572950_931468841307300_2595699674538666790_n.webp`
        ]
    },
    {
        title: "Ludo Looters",
        category: "Real-Time Multiplayer",
        description: "A real-time, multi-user board application. Implemented deterministic turn-based synchronization and optimized data transmission for bandwidth efficiency to handle latency.",
        tags: ["Multiplayer", "C#", "Client-Server"],
        link: "https://play.google.com/store/apps/details?id=com.webskitters.ludolooters",
        icon: Gamepad2,
        images: [
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_1.jfif`,
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_2.jfif`,
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_3.jfif`,
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_4.jfif`,
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_5.jfif`
        ]
    },
    {
        title: "Fun Arena",
        category: "Interactive Collection",
        description: "Collection of lightweight, interactive apps for children. Built with modular systems to support multiple mini-apps focused on fast load times and stability for low-end devices.",
        tags: ["Mobile", "Performance", "Modular"],
        link: "https://play.google.com/store/apps/details?id=com.webskitters.FunArena",
        icon: Gamepad2,
        images: [
            `${import.meta.env.BASE_URL}media/fun_arena/Media_1.webp`,
            `${import.meta.env.BASE_URL}media/fun_arena/Media_2.webp`,
            `${import.meta.env.BASE_URL}media/fun_arena/Media_3.webp`,
            `${import.meta.env.BASE_URL}media/fun_arena/Media_4.webp`
        ]
    }
];

// Tilt Card Component
function TiltCard({ children }: { children: React.ReactNode }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    return (
        <motion.div
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            onMouseMove={onMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className="h-full"
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:border-purple-500/50 transition-colors duration-300 group flex flex-col relative"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-950 text-white relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

            {/* Container and Header ... */}

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header ... */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Featured Projects</h2>
                    <p className="text-slate-400 text-lg">Highlights of technical challenges & solutions</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            className="h-full"
                        >
                            <TiltCard>
                                <div className="h-56 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:from-indigo-900/20 group-hover:to-purple-900/20 transition-colors relative overflow-hidden">
                                    {project.images && project.images.length > 0 ? (
                                        <div className="w-full h-full relative z-20"> {/* Ensure carousel is interactive */}
                                            <ImageCarousel images={project.images} />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                            >
                                                <project.icon size={64} className="text-slate-700 group-hover:text-indigo-400 transition-colors duration-500 transform group-hover:scale-110" />
                                            </motion.div>
                                        </>
                                    )}
                                </div>

                                <div className="p-6 flex-1 flex flex-col bg-slate-900/80 backdrop-blur-sm">
                                    <div className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-wider">{project.category}</div>
                                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                                        {project.title}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-500 hover:text-white transition-colors"
                                                style={{ position: 'relative', zIndex: 50 }}
                                                title="View Project"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    window.open(project.link, '_blank');
                                                }}
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-slate-800 group-hover:bg-indigo-900/30 text-slate-300 group-hover:text-indigo-200 rounded-md border border-slate-700 group-hover:border-indigo-500/30 transition-all">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
