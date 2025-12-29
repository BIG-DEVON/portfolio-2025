"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative h-[80vh] bg-black text-white flex flex-col justify-between px-8 py-12 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Section */}
      <div className="flex justify-between items-start z-10">
        <div className="font-syne text-xl font-bold">DEVON.DESIGN</div>
        <div className="flex gap-8 font-space text-sm text-gray-400 uppercase">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Main Call to Action */}
      <div className="z-10 flex flex-col items-center text-center">
        <p className="font-space text-gray-400 mb-4 uppercase tracking-widest">
          Have a project in mind?
        </p>
        <h2 className="font-syne text-[12vw] font-bold leading-none hover:text-purple-500 transition-colors cursor-pointer">
          LET'S TALK
        </h2>
        
        {/* Email Button */}
        <a 
          href="mailto:hello@devon.design" 
          className="mt-8 flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all group"
        >
          <span className="font-space uppercase tracking-widest">hello@devon.design</span>
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </a>
      </div>

      {/* Copyright */}
      <div className="flex justify-between items-end z-10 font-space text-xs text-gray-500 uppercase">
        <div>© 2025 Devon Design</div>
        <div>Abuja • Worldwide</div>
      </div>

    </footer>
  );
}