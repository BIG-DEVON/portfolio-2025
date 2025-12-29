import { client, urlFor } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";

// 1. Fetch the specific project based on the URL "slug"
async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    category,
    "slug": slug.current,
    mainImage,
    description, // We are using the 'Short Description' field for the intro
    gallery
  }`;
  
  const data = await client.fetch(query, { slug });
  return data;
}

// 2. The Page Component
export default async function ProjectPage({ params }: { params: { id: string } }) {
  // Await params in newer Next.js versions if needed, but for now this works safely
  const { id } = await params; 
  
  const project = await getProject(id);

  if (!project) {
    return <div className="text-white text-center pt-40">Project not found.</div>;
  }

  return (
    <main className="bg-black min-h-screen text-white">
      
      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {project.mainImage && (
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={urlFor(project.mainImage).url()} 
              alt={project.title} 
              fill 
              className="object-cover opacity-60"
              priority
            />
          </div>
        )}
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 bg-gradient-to-t from-black via-black/50 to-transparent">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-syne text-6xl md:text-[8vw] font-bold leading-none uppercase">
            {project.title}
          </h1>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sticky Sidebar */}
          <div className="md:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="font-space text-gray-500 text-sm uppercase tracking-widest mb-2">Category</h3>
                <p className="font-syne text-xl">{project.category}</p>
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 border-b border-white pb-1 hover:opacity-70 transition-opacity">
                Live Preview <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Story & Gallery */}
          <div className="md:col-span-8 space-y-20">
            <div className="prose prose-invert prose-lg">
              <p className="font-space text-2xl leading-relaxed text-gray-200">
                {project.description}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-12">
              {project.gallery?.map((img: any, index: number) => (
                <div key={index} className="relative h-[60vh] w-full overflow-hidden rounded-lg group">
                   <Image 
                     src={urlFor(img).url()} 
                     alt={`Gallery ${index}`} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}