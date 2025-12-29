"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Brand Identity",
    description: "Logos, typography, and visual language that sets you apart.",
  },
  {
    id: "02",
    title: "Web Design",
    description: "High-end immersive websites that convert visitors.",
  },
  {
    id: "03",
    title: "Social Media",
    description: "Viral-ready visuals and content strategies for growth.",
  },
  {
    id: "04",
    title: "Editorial & Print",
    description: "Posters, magazines, and physical assets that command attention.",
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="about" className="min-h-screen bg-black text-white px-8 py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 border-b border-white/20 pb-8">
          <h2 className="font-syne text-6xl md:text-8xl font-bold">
            WHAT I <span className="text-purple-500">DO</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative border-b border-white/20 py-12 transition-colors hover:border-white/60 cursor-pointer"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between gap-6">
                
                {/* ID & Title */}
                <div className="flex items-center gap-8">
                  <span className="font-space text-sm text-gray-500">
                    /{service.id}
                  </span>
                  <h3 className="font-syne text-4xl md:text-6xl font-bold transition-transform duration-300 group-hover:translate-x-4">
                    {service.title}
                  </h3>
                </div>

                {/* Description & Arrow */}
                <div className="flex items-center gap-8 opacity-0 md:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-space text-gray-400 max-w-xs hidden md:block">
                    {service.description}
                  </p>
                  <div className="bg-white text-black p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

              </div>
              
              {/* Hover Glow Effect */}
              {hoveredService === service.id && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 -z-10 bg-purple-900/10 blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}