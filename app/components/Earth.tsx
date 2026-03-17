import { Canvas,  ThreeElements } from "@react-three/fiber";
import { OrbitControls,  useGLTF } from "@react-three/drei";
import {  useMemo } from "react";



export default function Earth() {

type PlanetModelProps = Omit<ThreeElements["primitive"], "object">;

  const PlanetModel = ( props : PlanetModelProps) => {
    const { scene } = useGLTF("/image/planet_earth.glb");

    return <primitive object={scene} {...props} />;
  };

  const positionCamera = useMemo(
    () => [0, 1.5, 4] as [number, number, number],
    [],
  );

  const position = useMemo(() => [5, 5, 5] as [number, number, number], []);
  return (
    <div className="w-full h-75 rounded-xl overflow-hidden">
      <Canvas camera={{ position: positionCamera, fov: 45 }} frameloop="demand">
        <ambientLight intensity={0.8} />
        <directionalLight position={position} intensity={1.5} />

        <PlanetModel scale={0.4} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />

        {/* <Environment preset="city" /> */}
      </Canvas >
    </div>
  );
}
