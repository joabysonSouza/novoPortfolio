import React from "react";
import Cards from "./Cards";
import { Element } from "react-scroll";

export default function Stacks({}) {

  
  return (
    <div className="w-full  h-auto  bg-Bgblack mb-4">
      <Element name="Stacks"> 
      <p className="text-2xl p-6" >Introdução</p>
      <h2 className=" p-10 font-anton  text-white text-3xl md:text-7xl">
        {" "}
        Visão Geral.{" "}
      </h2>

      <p className=" text-wihte mx-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a dicta
        exercitationem odit, et rerum, ad ullam aliquid ipsa repudiandae placeat
        laboriosam, inventore earum. Incidunt labore blanditiis quaerat
        cupiditate itaque! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Unde quasi perferendis modi atque dicta libero, eaque at nemo
        delectus possimus fugit natus ipsum optio veritatis aut eos maxime!
        Libero, voluptatum.
      </p>


      <Cards/>
      </Element>
    </div>
  );
}
