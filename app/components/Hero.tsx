"use client";

import dynamic from "next/dynamic";
import LoadingSpinner from "./Spinner";

const SceneDynamic = dynamic(() => import("./Computer"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

export default function Hero() {
  return (
    <div className="w-96 m-6 text-center h-auto bg-black-transparent flex flex-col md:w-full md:flex-row md:items-center md:h-screen">
      <div>
        <h1 className="font-anton mt-40 text-white text-3xl md:text-7xl">
          Olá eu sou <span className="text-red-600">Joabyson</span>
        </h1>

        <p className="flex justify-center p-4 m-2 text-2xl">
          Analista e Desenvolvedor de Sistemas FullStack
        </p>
      </div>

      <SceneDynamic />
    </div>
  );
}