"use client";
import React, { memo, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


const Computer = memo(({ scale }: { scale: number }) => {
  const { scene } = useGLTF("/image/Teste.glb");
  return (
    <group scale={scale} position={[0, -1, 0]} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} />
    </group>
  );
});

useGLTF.preload("/image/Teste.glb");

export default function Scene() {
  const [scale, setScale] = useState(0.75);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 764px)");
    const tablet = window.matchMedia("(max-width: 1023px)");

    const updateScale = () => {
      if (mobile.matches) setScale(0.6);
      else if (tablet.matches) setScale(0.7);
      else setScale(0.8);
    };

    updateScale();
    mobile.addEventListener("change", updateScale);
    tablet.addEventListener("change", updateScale);

    return () => {
      mobile.removeEventListener("change", updateScale);
      tablet.removeEventListener("change", updateScale);
    };
  }, []);


  return (
    <div className=" relative w-full h-[250px] pointer-events-auto md:h-full ">
      <Canvas
        camera={{ position: [-8, 2, 4], fov: 50 }}
        style={{ touchAction: "none" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <Suspense fallback={<div className="text-sm opacity-50">Carregando 3D…</div>}>
          <Computer scale={scale} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}
