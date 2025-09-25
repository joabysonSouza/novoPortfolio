import React from "react";
import Cards from "./Cards";

export default function Sobre() {
  return (
    <div className="w-screen h-screen  bg-Bgblack">
      <p className="text-2xl p-6">Introdução</p>
      <h2 className=" p-10 font-anton  text-white text-3xl md:text-7xl">
        {" "}
        Visão Geral.{" "}
      </h2>

      <p className=" mx-4 text-wihte">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a dicta
        exercitationem odit, et rerum, ad ullam aliquid ipsa repudiandae placeat
        laboriosam, inventore earum. Incidunt labore blanditiis quaerat
        cupiditate itaque! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Unde quasi perferendis modi atque dicta libero, eaque at nemo
        delectus possimus fugit natus ipsum optio veritatis aut eos maxime!
        Libero, voluptatum.
      </p>

      <Cards/>
    </div>
  );
}
