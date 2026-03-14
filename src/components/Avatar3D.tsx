import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  MeshWobbleMaterial, 
  Image, 
  Text,
  Html
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';

export default function Avatar3D() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Avatar Image */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <planeGeometry args={[3, 4]} />
          <meshBasicMaterial transparent opacity={0} />
          <Html transform distanceFactor={10} position={[0, 0, 0.1]}>
            <div className="w-64 h-80 rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/avatar/600/800" 
                alt="Avatar" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </Html>
        </mesh>
      </Float>

      {/* Animated Background Elements */}
      <mesh ref={ringRef} position={[0, 0, -0.5]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
      </mesh>

      <Float speed={2} rotationIntensity={2}>
        <mesh position={[2, 1, -1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial color="#0070f3" distort={0.6} speed={2} />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1}>
        <mesh position={[-2, -1.5, -1]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <MeshWobbleMaterial color="#ffffff" factor={1} speed={2} />
        </mesh>
      </Float>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={Math.random() * 2} position={[
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4
        ]}>
          <mesh>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
