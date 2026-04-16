import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Gamepad2, Globe, Network, X, Server, Zap } from "lucide-react";
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

// Define enhanced project type
type Project = {
    title: string;
    category: string;
    description: string;
    workDone: string[];
    challenges: string[];
    techniques: string[];
    tags: string[];
    link?: string;
    icon: any;
    images?: string[];
};

const projects: Project[] = [
    {
        title: "The Verse VR",
        category: "Multi-User Social VR",
        description: "A comprehensive virtual reality social experience on the Meta Quest platform featuring shared virtual worlds, synchronized avatars, and robust multiplayer networking.",
        workDone: [
            "Engineered core multiplayer systems using custom client-server architecture handling avatar sync, spatial voice proximity, and object interactions for 8+ simultaneous users.",
            "Profiled and optimized the URP rendering pipeline to maintain a locked 72 FPS on Quest 2 hardware, utilizing aggressive frustum culling, LOD, and GPU instancing.",
            "Built fault-tolerant networking with automatic reconnection, graceful host migration, and state catch-up to prevent session drops during network interruptions."
        ],
        challenges: [
            "Maintaining strict performance budgets under tight 6GB memory limits while computing multi-user physics and spatial audio.",
            "Ensuring visual consistency and smooth avatar movement even at 80–120ms round-trip latency between users."
        ],
        techniques: [
            "Deterministic State Synchronization",
            "Universal Render Pipeline (URP) Optimization",
            "Client-Side Prediction & Dead Reckoning",
            "Draw-call consolidation (350 → 120 calls)"
        ],
        tags: ["Unity3D", "VR", "Meta Quest", "URP", "C#", "XR Interaction Toolkit"],
        link: "https://www.meta.com/experiences/4951395134941400/",
        icon: Globe,
        images: [
            `${import.meta.env.BASE_URL}media/the_verse/39001722_845351934060843_1219799958268738039_n.webp`,
            `${import.meta.env.BASE_URL}media/the_verse/39003227_934337464713960_3147103992867123578_n.webp`,
            `${import.meta.env.BASE_URL}media/the_verse/39036613_1432534167666537_6576254558792309383_n.webp`,
            `${import.meta.env.BASE_URL}media/the_verse/39001679_353647927036056_5740262429056735628_n.mp4`
        ]
    },
    {
        title: "Ludo Looters",
        category: "Real-Time Multiplayer",
        description: "A highly optimized, multi-user Android board game prioritizing bandwidth efficiency and seamless reconnection, catering to regions with diverse network stabilities.",
        workDone: [
            "Architected a custom TCP/UDP deterministic networking layer specifically tailored for turn-based board mechanics.",
            "Drastically reduced data footprint by transmitting only inputs and deterministic seeds rather than full game state.",
            "Engineered an automated session recovery system allowing dropped players to seamlessly jump back into exact board states under 3 seconds."
        ],
        challenges: [
            "Ensuring cross-device deterministic behavior without physics divergences, accounting for varying floating-point architectures on different Android chipsets.",
            "Balancing client-side visual prediction with server-authoritative dispute resolution over 3G cellular connections."
        ],
        techniques: [
            "Deterministic Lockstep Architecture",
            "Server-Authoritative Conflict Resolution",
            "Custom Byte-Buffer Packing (<128 bytes/turn)",
            "Deep Profiling & GC Stress Mitigation"
        ],
        tags: ["Multiplayer", "C#", "Custom Networking", "Android", "Environment Design", "Unity3D", "MObile"],
        link: "https://play.google.com/store/apps/details?id=com.webskitters.ludolooters",
        icon: Network,
        images: [
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_1.jfif`,
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_2.jfif`,
            `${import.meta.env.BASE_URL}media/ludo_looters/Media_3.jfif`
        ]
    },
    {
        title: "Fun Arena Modular Framework",
        category: "Scalable Architecture",
        description: "A highly modular application architecture built to house an expandable suite of interactive Unity applications, designed for ultra-low loading times and maximum reuse.",
        workDone: [
            "Pioneered a ScriptableObject-driven architecture allowing designers to inject new app logic with virtually zero core code adjustments.",
            "Established a unified memory management and asset streaming system utilizing Addressables to support low-end devices.",
            "Constructed shared lifecycle components (audio mixers, object pools, UI transition managers) resulting in a 40% reduction in per-game development time."
        ],
        challenges: [
            "Maintaining 30+ FPS and preventing Out-Of-Memory (OOM) crashes on entry-level Android devices operating under 1.5GB of available RAM.",
            "Managing complex asynchronous loading flows to ensure assets pop in seamlessly without freezing the main thread."
        ],
        techniques: [
            "Addressables Asset Streaming",
            "ScriptableObject Config Pipelines",
            "Texture Atlasing & Sprite Batching",
            "Asynchronous Scene Loading"
        ],
        tags: ["Mobile", "Architecture", "Optimization", "ScriptableObjects", "Unity3D"],
        link: "https://play.google.com/store/apps/details?id=com.webskitters.FunArena",
        icon: Gamepad2,
        images: [
            `${import.meta.env.BASE_URL}media/fun_arena/Media_1.webp`,
            `${import.meta.env.BASE_URL}media/fun_arena/Media_2.webp`
        ]
    },
    {
        title: "Odyssey",
        category: "Interactive Media",
        description: "An immersive multimedia interactive experience focusing on stunning visuals and fluid animations.",
        workDone: [
            "Architected scalable infrastructure for media playback.",
            "Implemented custom shaders for visual fidelity.",
            "Optimized asset loading times."
        ],
        challenges: [
            "Seamless media switching without visual stutter.",
            "Balancing high resolution assets with memory constraints."
        ],
        techniques: [
            "Custom Shaders",
            "Asset Preloading",
            "Memory Pooling"
        ],
        tags: ["Interactive", "Multimedia", "Optimization", "Unity3D", "Mobile", "Environment Design"],
        icon: Zap,
        images: [
            `${import.meta.env.BASE_URL}media/Odyssey/Dreamvale Lab.mp4`,
            `${import.meta.env.BASE_URL}media/Odyssey/Eco 2.mp4`,
            `${import.meta.env.BASE_URL}media/Odyssey/Mirror.mp4`,
            `${import.meta.env.BASE_URL}media/Odyssey/Ripple.mp4`
        ]
    },
    {
        title: "Bible Run",
        category: "Endless Runner Game",
        description: "An immersive endless runner game set under an ocean parted in two halves, featuring vibrant marine life and stunning underwater environment aesthetics.",
        workDone: [
            "Programmed the core endless runner progression and movement mechanics.",
            "Optimized procedural generation for the continuously parting ocean environment.",
            "Integrated high-fidelity marine life and environmental beauty assets."
        ],
        challenges: [
            "Maintaining fluid performance on mobile devices despite dense visual environments.",
            "Balancing gameplay speed and difficulty scaling with asset spawning."
        ],
        techniques: [
            "Procedural Environment Generation",
            "Object Pooling",
            "Mobile Performance Profiling"
        ],
        tags: ["Unity3D", "Mobile", "Endless Runner", "Environment Design"],
        icon: Gamepad2,
        images: [

            `${import.meta.env.BASE_URL}media/BibleRun/Image Sequence_001_0138.png`,
            `${import.meta.env.BASE_URL}media/BibleRun/Image Sequence_002_0600.png`,
            `${import.meta.env.BASE_URL}media/BibleRun/Image Sequence_002_0657.png`,
            `${import.meta.env.BASE_URL}media/BibleRun/Image Sequence_002_0702.png`,
            `${import.meta.env.BASE_URL}media/BibleRun/Image Sequence_002_0718.png`,
            `${import.meta.env.BASE_URL}media/BibleRun/Bible Run.mp4`
        ]
    },
    {
        title: "Aquatis Survival",
        category: "Survival Adventure Game",
        description: "A deep-sea survival game featuring 100 levels of progression. Players farm materials to construct and upgrade their base, unlock unique characters, and utilize diverse offensive and defensive abilities to conquer aquatic challenges.",
        workDone: [
            "Programmed a comprehensive 100-level progression and achievement unlocking system.",
            "Developed an intricate crafting and base-building mechanic utilizing farmed in-game materials.",
            "Designed and implemented unique offensive and defensive ability kits for multiple unlockable characters."
        ],
        challenges: [
            "Balancing material drop rates and progression pacing across 100 distinct difficulty tiers.",
            "Ensuring base-building mechanics remained performant while maintaining complex save states."
        ],
        techniques: [
            "Progression System Architecture",
            "Inventory & Resource Management",
            "Ability System Integration"
        ],
        tags: ["Unity3D", "Survival", "Base Building", "Level Progression", "Resource Management"],
        icon: Gamepad2,
        images: [
            `${import.meta.env.BASE_URL}media/AquatisSurvival/Aquatissurvival.mp4`
        ]
    }
];

function TiltCard({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={onClick}
            className="h-full cursor-pointer bg-white/5 dark:bg-slate-900/50 border-t border-l border-white/70 dark:border-slate-800 border-b border-r border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(31,38,135,0.07)] hover:shadow-[0_25px_50px_-12px_rgba(31,38,135,0.15)] hover:border-purple-400/50 dark:hover:border-purple-500/30 transition-all duration-500 group flex flex-col relative backdrop-blur-xl"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            {children}
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 bg-gradient-to-b from-white/20 to-slate-50/10 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-all duration-700">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400">Engineering Portfolio</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        In-depth technical breakdowns of my work bridging Unity architecture, multi-user systems, and IoT integrations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            className="h-full"
                        >
                            <TiltCard onClick={() => setSelectedProject(project)}>
                                <div className="h-64 bg-slate-100/50 dark:bg-slate-900/80 flex items-center justify-center relative overflow-hidden border-b border-indigo-500/10">
                                    {project.images && project.images.length > 0 ? (
                                        <div className="w-full h-full relative z-20 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                                            <ImageCarousel images={project.images} />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent opacity-50 transition-opacity duration-500" />
                                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                                                <project.icon size={80} className="text-indigo-400 dark:text-indigo-500 opacity-80" />
                                            </motion.div>
                                        </>
                                    )}
                                </div>

                                <div className="p-8 flex-1 flex flex-col backdrop-blur-md relative z-10">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">{project.category}</div>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                                                title="View Live Project"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-8 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md border border-indigo-100 dark:border-indigo-800/50">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md border border-slate-100 dark:border-slate-700">
                                                    +{project.tags.length - 3} MORE
                                                </span>
                                            )}
                                        </div>
                                        <button className="text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:text-pink-500 transition-colors flex items-center gap-1">
                                            Dive Deep
                                        </button>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for Deep Dive */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl">
                                        <selectedProject.icon size={28} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">{selectedProject.category}</div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                            {selectedProject.title}
                                        </h2>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 leading-relaxed border-l-4 border-indigo-500 pl-4 py-1">
                                    {selectedProject.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-10">
                                    {/* Work Done & Techniques */}
                                    <div className="space-y-10">
                                        <section>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                                                <Server className="text-indigo-500" size={24} />
                                                Work Completed
                                            </h3>
                                            <ul className="space-y-4">
                                                {selectedProject.workDone.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                                                        <div className="min-w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2" />
                                                        <span className="leading-relaxed text-sm md:text-base">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                                                <Zap className="text-yellow-500" size={24} />
                                                Technical Stack & Paradigms
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techniques.map((tech, i) => (
                                                    <span key={i} className="px-3 py-2 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </section>
                                    </div>

                                    {/* Challenges & Links */}
                                    <div className="space-y-10">
                                        <section>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                                                <Network className="text-pink-500" size={24} />
                                                Engineering Challenges
                                            </h3>
                                            <div className="space-y-4">
                                                {selectedProject.challenges.map((challenge, i) => (
                                                    <div key={i} className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/30">
                                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                                            {challenge}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {selectedProject.link && (
                                            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                                                <a
                                                    href={selectedProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                                >
                                                    <ExternalLink size={20} />
                                                    View Live Deployment
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
