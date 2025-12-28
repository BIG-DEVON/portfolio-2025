"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    // Rotates the object smoothly every frame
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
        {/* The Shape: A complex Torus Knot */}
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        
        {/* The Material: Frosted Glass */}
        <meshPhysicalMaterial 
            color="#ffffff" 
            roughness={0.1}   // Shiny
            metalness={0.1} 
            transmission={0.9} // See-through glass
            clearcoat={1}
            transparent={true}
            opacity={1}
        />
        
        {/* The "Tech" Overlay: A faint purple wireframe so you can see the shape clearly */}
        <meshBasicMaterial wireframe color="#a855f7" transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}