"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/client"; // Importing our new helper

// Define what a Project looks like
interface Project {
  _id: string;
  title: string;
  category: string;
  mainImage: any;
  slug: { current: string };
}

export default function WorkGallery({ projects }: { projects: Project[] }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

  return (
    <section ref={targetRef} id="work" className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-6 pl-4 md:gap-20 md:pl-20">
          
          {/* Title Card */}
          <div className="flex h-[400px] w-[85vw] md:w-[600px] flex-col justify-center shrink-0">
             <h2 className="font-syne text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
               SELECTED <br />
               <span className="text-purple-500">WORKS</span>
             </h2>
             <p className="max-w-md font-space text-gray-400 text-sm md:text-lg">
               A curated selection of my best branding and visual design projects.
             </p>
          </div>

          {/* REAL DATA LOOP */}
          {projects.map((project) => (
            <Link href={`/work/${project.slug.current}`} key={project._id}> 
                <div 
                  className="group relative h-[300px] md:h-[400px] w-[85vw] md:w-[600px] overflow-hidden rounded-2xl bg-neutral-800 shrink-0 cursor-pointer"
                >
                  {/* We use urlFor() to generate the real image URL from Sanity */}
                  {project.mainImage && (
                    <Image 
                      src={urlFor(project.mainImage).url()} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-8">
                    <h3 className="font-syne text-2xl md:text-4xl font-bold text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      {project.title}
                    </h3>
                    <p className="font-space text-sm md:text-md text-purple-400 translate-y-4 transition-transform duration-300 group-hover:translate-y-0 delay-75">
                      {project.category}
                    </p>
                  </div>
                </div>
            </Link>
          ))}

        </motion.div>
      </div>
    </section>
  );
}