"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timer makes the number count up
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a split second at 100% before lifting the curtain
          setTimeout(() => setIsLoading(false), 500); 
          return 100;
        }
        // Randomize the speed slightly to feel "real"
        return prev + Math.floor(Math.random() * 10) + 1; 
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* The Counter Text */}
          <div className="flex flex-col items-center">
            <motion.h1 
              className="font-syne text-[15vw] md:text-[10vw] font-bold leading-none tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {count}%
            </motion.h1>
            
            <motion.p 
              className="mt-4 font-space text-sm text-gray-400 uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading Experience
            </motion.p>
          </div>

          {/* Optional: Quote or branding at bottom */}
          <div className="absolute bottom-10 left-10 font-space text-xs text-gray-500 uppercase">
             Devon.Design ©2025
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}