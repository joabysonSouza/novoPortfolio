import React from "react";
import Cards from "./Cards";
import { Element } from "react-scroll";

export default function Stacks({}) {
  return (
    <div className="w-full  h-auto mr-8 bg-Bgblack mb-4">
      <Element name="Stacks">
        <p className="text-2xl p-6">Introdução</p>
        <h2 className=" p-10 font-anton  text-white text-3xl md:text-7xl">
          {" "}
          Visão Geral.{" "}
        </h2>

        <p className=" text-wihte text-xl mx-8">
          Essas são minhas principais stacks, utilizadas diariamente no meu
          fluxo de trabalho, nas quais possuo  experiência 
        , todas voltadas especificamente para o desenvolvimento web,
          com foco em performance, boas práticas, escalabilidade e construção de
          soluções modernas e eficientes.
        </p>

        <Cards />
      </Element>
    </div>
  );
}
