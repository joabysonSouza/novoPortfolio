"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


function Computer() {
  const { scene } = useGLTF("/image/Teste.glb");
  return <primitive object={scene} scale={1} position={[3, -2, 3]} />;
}

export default function Scene() {
  return (
    <Canvas camera={{position: [1, 1, 1],}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0 , 0]} />
      <Suspense fallback={null}>
        <Computer />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
