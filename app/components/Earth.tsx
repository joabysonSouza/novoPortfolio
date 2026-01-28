"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";


export default function Earth() {
   const  PlanetModel =(props: any)=> {
  const { scene } = useGLTF("/image/planet_earth.glb");

  return <primitive object={scene} {...props} />;
}
  return (
    <div className="w-full  h-full rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
      
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

     
        <PlanetModel scale={0.4} />

       
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.4}
        />

    
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
