"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import FloatingShape from "./FloatingShape";

export default function Scene() {
  return (
    // FIXED: z-0 instead of -z-10 ensures it sits on top of the black body
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
        
        {/* Bright Lights to make sure we see it */}
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        {/* The Object */}
        <FloatingShape />
        
      </Canvas>
    </div>
  );
}