"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Computer() {
  const { scene } = useGLTF("/image/Teste.glb");
  return (
    <group scale={0.5} position={[0, -1, 0]} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [-8, 2, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      <Suspense fallback={null}>
        <Computer />
      </Suspense>
      <OrbitControls minDistance={3} maxDistance={20} />
    </Canvas>
  );
}
