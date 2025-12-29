import Scene from "@/components/Scene";
import WorkGallery from "@/components/WorkGallery";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/client"; // Import the client

// 1. Function to fetch data
async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    category,
    mainImage,
    slug
  }`;
  const data = await client.fetch(query);
  return data;
}

// 2. Make the component async
export default async function Home() {
  // 3. Fetch the data
  const projects = await getProjects();

  return (
    <main className="bg-black w-full relative">
      
      {/* HERO SECTION */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        <Scene />
        <div className="z-10 text-center flex flex-col items-center">
          <p className="font-space text-sm md:text-base tracking-[0.3em] text-gray-400 uppercase mb-4 animate-pulse">
            Portfolio 2025
          </p>
          <h1 className="font-syne text-7xl md:text-[10rem] font-extrabold leading-[0.85] tracking-tighter text-white mix-blend-difference mb-8">
            CREATIVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              VISUALS
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
            <button className="group relative px-8 py-4 bg-white text-black font-space font-bold tracking-widest uppercase overflow-hidden rounded-full transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View My Work <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-space tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* WORK GALLERY - PASSING REAL DATA */}
      <WorkGallery projects={projects} />

      <Services />
      <Footer />

    </main>
  );
}