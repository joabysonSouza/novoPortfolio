"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Computer({scale}: {scale: number}) {
  const { scene } = useGLTF("/image/Teste.glb");
  return (
    <group scale={scale} position={[0, -1, 0]} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// TODO tentando fazer a imagem ficar na frente da div 

export default function Scene() {
   const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  const [scale, setScale] = useState(0.8);

  useEffect(()=>{

    const handleSize =()=>{
      setWindowWidth(window.innerWidth)

       if (window.innerWidth < 765) {
        setScale(0.35); // mobile
      } else if (window.innerWidth < 1024) {
        setScale(0.45); // tablet
      } else {
        setScale(0.75); // desktop
      }
  
    }
    handleSize()
    window.addEventListener("resize", handleSize)
    return () => window.removeEventListener("resize", handleSize);
  },[])
  
  return (

<div className="w-full h-full md:w-96 md:h-56">
     <Canvas camera={{ position: [-8, 2, 4], fov: 50 }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      <Suspense fallback={null}>
        <Computer scale={scale} />
      </Suspense>
      <OrbitControls minDistance={3} maxDistance={20} />
    </Canvas>


</div>

   

  );
}
