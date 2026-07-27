"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Apexa AI Labs transformed our logistics operations with their custom software solutions. Their understanding of the Saudi market combined with their technical prowess is unmatched.",
    name: "Barakah Transport Service",
    role: "Saudi Arabia",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    quote: "The web development and branding work done by Apexa elevated our UK presence significantly. Highly responsive and professional team.",
    name: "Clarivive",
    role: "United Kingdom",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    quote: "Big effort - high quality. Best custom software solutions and AI integrations out there. They truly elevate the standards.",
    name: "Jan Dittrich",
    role: "Germany",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  }
];

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <div 
      className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left side: Grid Mosaic */}
      <div className="w-full md:w-[35%] shrink-0">
        <div className="grid grid-cols-3 gap-3 aspect-square relative">
          {/* Subtle background glow for the active image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
          
          {Array.from({ length: 9 }).map((_, i) => {
            const isCenter = i === 4;
            return (
              <div 
                key={i} 
                className={`rounded-2xl transition-all duration-700 ${
                  isCenter 
                    ? "relative overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)] z-10" 
                    : "bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.02]"
                }`}
              >
                {isCenter && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={current.image} 
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                      {/* Purple/Blue lighting overlay to match the reference image's vibe */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20 mix-blend-overlay" />
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-[65%] flex flex-col justify-center relative z-10">
        <Quote className="w-12 h-12 text-white/10 mb-6" fill="currentColor" />
        
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        <div className="min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                {current.quote}
              </h3>
              <div>
                <p className="text-gray-400 font-medium">{current.name}</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-1">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-3 mt-8">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
