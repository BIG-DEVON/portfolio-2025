export default function GrainOverlay() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[50] opacity-20 mix-blend-overlay">
       {/* We use an SVG filter to generate noise without needing an external image file */}
      <svg className="absolute w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}