import React from 'react'
import { motion } from "framer-motion";
import fadeIn from '../constants/animation';


interface projectsProps {
  nameProject : string
  image: string
  description: string
  code_link : string
  tags: string[]
  index : number

}

// TODO Mapear e construir os projects Cards

export default function Works() {

  const projects =({ nameProject , image , description, code_link, tags, index}: projectsProps)=>{
    return (
      <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 gap-6">
        teste
      </motion.div>
    )

  }
  return (
      <div className="w-full  h-auto  bg-Bgblack mb-4">
          <p className="text-2xl p-6">Meus Trabalhos</p>
          <h2 className=" p-10 font-anton  text-white text-3xl md:text-7xl">
            {" "}
            Projetos.{" "}
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
  
        </div>
  )
}
