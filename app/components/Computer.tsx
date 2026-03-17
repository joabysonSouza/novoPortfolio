"use client";
import React, { memo, Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Loader } from "../hooks/Loader";

const ComputerComponent = memo(({ scale }: { scale: number }) => {
  const { scene } = useGLTF("/image/Computer.glb");

  const position = useMemo(() => [0, -1, 0] as [number, number, number], []);

  const rotation = useMemo(
    () => [0, Math.PI, 0] as [number, number, number],
    [],
  );

  return (
    <group scale={scale} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
});

ComputerComponent.displayName = "Computer";

useGLTF.preload("/image/Computer.glb");

export default function Scene() {
  const [scale, setScale] = useState(0.75);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 764px)");
    const tablet = window.matchMedia("(max-width: 1023px)");

    const updateScale = () => {
      if (mobile.matches) {
        setScale(0.8);
      } else {
        setScale(0.9);
      }
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
    <div className=" relative w-full h-62.5 pointer-events-auto cursor-pointer md:h-full ">
      <Canvas
        frameloop="always"
        camera={{ position: [-8, 2, 4], fov: 50 }}
        style={{ touchAction: "none" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <Suspense fallback={<Loader />}>
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

const Computer = memo(ComputerComponent);
