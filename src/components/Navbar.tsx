"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react"; // Make sure lucide-react is installed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the menu
  const menuVariants = {
    closed: { 
      opacity: 0, 
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    open: { 
      opacity: 1, 
      y: "0%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: { delay: 0.1 * i, duration: 0.5 }
    })
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-syne tracking-tighter z-50 relative">
          DEVON<span className="text-purple-400">.DESIGN</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-space text-sm tracking-widest uppercase opacity-80">
          <Link href="#work" className="hover:text-purple-400 transition-colors">Work</Link>
          <Link href="#about" className="hover:text-purple-400 transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div 
          className="md:hidden z-50 relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {["Home", "Work", "Services", "Contact"].map((item, i) => (
                <motion.div 
                  key={item}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link 
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`} 
                    className="font-syne text-6xl font-bold text-white hover:text-purple-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative bottom text */}
            <div className="absolute bottom-10 text-gray-500 font-space text-xs uppercase tracking-widest">
              Based in Abuja • Worldwide
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}