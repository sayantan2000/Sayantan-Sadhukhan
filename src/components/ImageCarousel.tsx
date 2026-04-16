import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Check if current item is a video
    const isVideo = (url: string) => {
        return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
    };

    // Auto-play for images (videos handle their own timing)
    useEffect(() => {
        const currentItem = images[currentIndex];

        // If it's a video, don't set timer - let video end event handle it
        if (isVideo(currentItem)) {
            return;
        }

        // For images, auto-advance after 3 seconds
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex, images]);

    // Handle video end - advance to next slide
    const handleVideoEnd = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    const currentItem = images[currentIndex];
    const isCurrentVideo = isVideo(currentItem);

    return (
        <div className="relative w-full h-full group">
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900">
                <AnimatePresence mode="wait">
                    {isCurrentVideo ? (
                        <motion.video
                            key={currentIndex}
                            ref={videoRef}
                            src={currentItem}
                            className="w-full h-full object-contain bg-black/50"
                            autoPlay
                            muted
                            playsInline
                            preload="metadata"
                            onEnded={handleVideoEnd}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    ) : (
                        <motion.img
                            key={currentIndex}
                            src={currentItem}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full h-full object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={20} />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/20 px-2 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {images.map((_, i) => (
                            <div 
                                key={i} 
                                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-white scale-125" : "bg-white/50"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
