"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { 
    value: "4+", 
    label: "Years Experience", 
    gradient: "from-blue-500/20 to-purple-500/20", 
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400" 
  },
  { 
    value: "100+", 
    label: "Projects Shipped", 
    gradient: "from-primary/30 to-primary/5", 
    borderColor: "border-primary/40",
    textColor: "text-primary" 
  },
  { 
    value: "15+", 
    label: "AI Models Built", 
    gradient: "from-accent/30 to-accent/5", 
    borderColor: "border-accent/40",
    textColor: "text-accent" 
  },
  { 
    value: "3", 
    label: "Global Locations", 
    gradient: "from-magenta/30 to-magenta/5", 
    borderColor: "border-magenta/40",
    textColor: "text-magenta" 
  },
];

export function MobileMockupCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000); // Swaps every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: -80, scale: 0.8, rotateX: 20 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          style={{ transformPerspective: 1000 }}
          className={`absolute w-[85%] aspect-square rounded-3xl p-6 flex flex-col items-center justify-center bg-gradient-to-br ${data[index].gradient} border ${data[index].borderColor} backdrop-blur-xl shadow-2xl`}
        >
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="text-6xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            {data[index].value}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-xs font-bold uppercase tracking-widest text-center ${data[index].textColor}`}
          >
            {data[index].label}
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Interactive Dots Indicator */}
      <div className="absolute bottom-8 flex gap-2.5 z-20">
        {data.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${i === index ? 'bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/20 w-2 hover:bg-white/40'}`} 
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
