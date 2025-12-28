"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// 1. Mock Data (We will replace these with your real designs later)
const projects = [
  {
    id: 1,
    title: "Neon Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Space Gym",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2700&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Luxury Realty",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2700&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Cyberpunk Event",
    category: "Poster Design",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2700&auto=format&fit=crop",
  },
];

export default function WorkGallery() {
  const targetRef = useRef<HTMLDivElement>(null);

  // 2. Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 3. Transform vertical scroll (0% to 100%) into horizontal movement (0px to -3000px)
  // The "-40%" depends on how many cards you have. Tweak this number if cards get cut off.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

  return (
    // This container is tall (300vh) to give us scrolling space
    <section ref={targetRef} id="work" className="relative h-[300vh] bg-neutral-900">
      
      {/* This sticky container stays locked in view while we scroll through the 300vh */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-10 pl-20">
          
          {/* Title Card */}
          <div className="flex h-[400px] w-[300px] flex-col justify-center shrink-0">
             <h2 className="font-syne text-6xl font-bold leading-tight text-white">
               SELECTED <br />
               <span className="text-purple-500">WORKS</span>
             </h2>
             <p className="mt-4 font-space text-gray-400">
               A curated selection of my best branding and visual design projects.
             </p>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[400px] w-[600px] overflow-hidden rounded-2xl bg-neutral-800 shrink-0"
            >
              {/* Image */}
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-8">
                <h3 className="font-syne text-3xl font-bold text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {project.title}
                </h3>
                <p className="font-space text-sm text-purple-400 translate-y-4 transition-transform duration-300 group-hover:translate-y-0 delay-75">
                  {project.category}
                </p>
              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}