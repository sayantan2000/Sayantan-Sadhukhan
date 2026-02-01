import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const options = [
        { id: "light", icon: Sun, label: "Light" },
        { id: "dark", icon: Moon, label: "Dark" },
        { id: "system", icon: Monitor, label: "System" },
    ] as const;

    return (
        <div className="flex items-center gap-1 bg-white/10 dark:bg-slate-800/50 p-1 rounded-full border-t border-l border-white/80 dark:border-slate-700 border-b border-r border-white/10 shadow-[0_8px_16px_-4px_rgba(31,38,135,0.05)] backdrop-blur-3xl relative overflow-hidden">
            {/* Specular Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

            {options.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.id;

                return (
                    <button
                        key={option.id}
                        onClick={() => setTheme(option.id)}
                        className={`relative p-2 rounded-full transition-colors duration-200 ${isActive
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                            }`}
                        title={option.label}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeTheme"
                                className="absolute inset-0 bg-white/80 dark:bg-slate-900 rounded-full shadow-md backdrop-blur-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <Icon className="w-4 h-4 relative z-10" />
                    </button>
                );
            })}
        </div>
    );
}
