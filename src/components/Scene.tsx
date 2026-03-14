import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars, PerspectiveCamera, Environment, Grid } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/src/context/ThemeContext';

function FloatingShapes() {
  const { theme } = useTheme();
  const count = 20;
  const shapes = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.8 + 0.3,
      type: Math.floor(Math.random() * 4)
    }));
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={shape.position as any}>
          <mesh rotation={shape.rotation as any} scale={shape.scale}>
            {shape.type === 0 ? <boxGeometry /> : shape.type === 1 ? <octahedronGeometry /> : shape.type === 2 ? <tetrahedronGeometry /> : <torusGeometry args={[0.5, 0.1, 16, 100]} />}
            <meshStandardMaterial 
              color={theme === 'dark' ? "#ffffff" : "#000000"} 
              transparent 
              opacity={0.05} 
              wireframe 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function GridFloor() {
  const { theme } = useTheme();
  return (
    <group position={[0, -5, 0]}>
      <Grid
        infiniteGrid
        fadeDistance={40}
        fadeStrength={5}
        cellSize={1}
        sectionSize={5}
        sectionColor={theme === 'dark' ? "#D4AF37" : "#0070f3"}
        sectionThickness={1.5}
        cellColor={theme === 'dark' ? "#222222" : "#eeeeee"}
        cellThickness={0.5}
      />
    </group>
  );
}

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (!sphereRef.current) return;
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.x = time * 0.1;
    sphereRef.current.rotation.y = time * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color={theme === 'dark' ? "#1a1a1a" : "#f0f0f0"}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const { theme } = useTheme();
  const count = 3000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color={theme === 'dark' ? "#D4AF37" : "#0070f3"} 
        transparent 
        opacity={0.3} 
        sizeAttenuation 
      />
    </points>
  );
}

function ScrollScene() {
  const { theme } = useTheme();
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const scrollY = window.scrollY;
    groupRef.current.rotation.y = scrollY * 0.0002;
    groupRef.current.rotation.x = scrollY * 0.0001;
  });

  return (
    <group ref={groupRef}>
      <AnimatedSphere />
      {theme === 'dark' && <Stars radius={150} depth={60} count={7000} factor={6} saturation={0} fade speed={0.5} />}
      <Particles />
      <FloatingShapes />
      <GridFloor />
    </group>
  );
}

export default function Scene() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 4, 12]} fov={50} />
        <ambientLight intensity={theme === 'dark' ? 0.3 : 0.8} />
        <spotLight position={[15, 20, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-15, -10, -10]} intensity={1} color="#D4AF37" />
        
        <ScrollScene />
        
        <Environment preset="night" />
        <fog attach="fog" args={[theme === 'dark' ? '#050505' : '#fafafa', 10, 35]} />
      </Canvas>
    </div>
  );
}
