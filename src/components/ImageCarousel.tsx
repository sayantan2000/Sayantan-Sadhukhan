import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
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
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons and Dots removed as per request for fully automatic carousel */}
        </div>
    );
}
