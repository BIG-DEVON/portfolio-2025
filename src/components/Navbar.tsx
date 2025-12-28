"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
      {/* Logo Area */}
      <div className="text-xl font-bold font-syne tracking-tighter">
        DEVON<span className="text-purple-400">.DESIGN</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 font-space text-sm tracking-widest uppercase opacity-80">
        <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
        <Link href="#work" className="hover:text-purple-400 transition-colors">Work</Link>
        <Link href="#about" className="hover:text-purple-400 transition-colors">About</Link>
        <Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Icon (Visual Only for now) */}
      <div className="md:hidden">
        <div className="space-y-2 cursor-pointer">
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </div>
    </nav>
  );
}