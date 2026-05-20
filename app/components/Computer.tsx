"use client";

import React, { memo, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Loader } from "../hooks/Loader";

const Computer = memo(({ scale }: { scale: number }) => {
  const { scene } = useGLTF("/image/Computer.glb");

  return (
    <group scale={scale} position={[0, -1, 0]} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} />
    </group>
  );
});

Computer.displayName = "Computer";
useGLTF.preload("/image/Computer.glb");
export default function Scene() {
  const [scale, setScale] = useState(0.9);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 764px)");

    const updateScale = () => {
      setScale(mobile.matches ? 0.8 : 0.9);
    };

    updateScale();

    mobile.addEventListener("change", updateScale);

    return () => {
      mobile.removeEventListener("change", updateScale);
    };
  }, []);

  return (
    <div className="relative w-full h-62.5 pointer-events-auto cursor-pointer md:h-full">
      <Canvas
        frameloop="demand"
        camera={{ position: [-8, 2, 4], fov: 50 }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
        />

        <Suspense fallback={<Loader />}>
          <Computer scale={scale} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
        />
      </Canvas>
    </div>
  );
}