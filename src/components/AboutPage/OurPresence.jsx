import React, { useRef } from 'react';
import { Canvas, useFrame, extend, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { Text } from 'troika-three-text';

// Extend the Text class from troika-three-text
extend({ TroikaText: Text });

const Globe = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Load high-quality Earth textures
  const [baseMap, normalMap, specularMap] = useLoader(THREE.TextureLoader, [
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg',
  ]);

  const locations = [
    { name: 'UAE', lat: 24.4539, lon: 54.3773, color: '#ff4d4d' }, // Vibrant red
    { name: 'India', lat: 20.5937, lon: 78.9629, color: '#4dff4d' }, // Bright green
    { name: 'Oman', lat: 21.4735, lon: 55.9754, color: '#4d4dff' }, // Deep blue
  ];

  const getPositionFromLatLon = (lat, lon, radius = 5.1) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return [x, y, z];
  };

  return (
    <group>
      {/* Enhanced lighting for better depth and color vibrancy */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ffffff" />
      
      {/* Globe with improved material properties */}
      <Sphere ref={meshRef} args={[5, 64, 64]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial
          map={baseMap}
          normalMap={normalMap}
          specularMap={specularMap}
          roughness={0.7}
          metalness={0.2}
          emissive="#1a1a1a"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {locations.map((loc, index) => {
        const [x, y, z] = getPositionFromLatLon(loc.lat, loc.lon);
        return (
          <group key={index} position={[x, y, z]}>
            {/* Glowing marker with emissive effect */}
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color={loc.color}
                emissive={loc.color}
                emissiveIntensity={0.8}
                toneMapped={false}
              />
            </mesh>
            {/* Enhanced text with glow and better readability */}
            <troikaText
              position={[0, -0.4, 0]}
              fontSize={0.25}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              text={loc.name}
              maxWidth={2}
              lineHeight={1.2}
              font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxM.woff"
              outlineWidth={0.015}
              outlineColor="#000000"
              strokeWidth={0.01}
              strokeColor="#ffffff"
            >
              <meshStandardMaterial toneMapped={false} emissive="#ffffff" emissiveIntensity={0.2} />
            </troikaText>
          </group>
        );
      })}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={7}
        maxDistance={15}
        dampingFactor={0.05}
      />
    </group>
  );
};

const OurPresence = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-600 p-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-10 text-center drop-shadow-xl tracking-tight">
        Our Global Reach
      </h1>
      <div className="w-full max-w-5xl h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <Canvas
          camera={{ position: [12, 8, 12], fov: 50 }}
          gl={{ antialias: true, alpha: false }}
          shadows
        >
          <Globe />
        </Canvas>
      </div>
      <div className="w-full max-w-5xl mt-12 p-8 bg-white/10 backdrop-blur-lg rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between shadow-lg">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-2">Worldwide Impact</h2>
          <p className="text-lg opacity-90">
            Connecting innovation across UAE, India, Oman, and beyond.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <span className="text-sm opacity-70">Interactive 3D Globe</span>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;