"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import fadeIn from "../constants/animation";
import { container, projects } from "../constants";
import Image from "next/image";
import { div, image } from "framer-motion/client";
import ProjectCard from "./ProjectCard";

// TODO Fazer um modal para abrir a image em tela cheia

export default function Works() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <div className="w-full  h-screen  bg-Bgblack mb-4">
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            className="w-[400px] h-[250px] bg-amber-50 mr-14 rounded-xl flex items-center relative overflow-hidden justify-center hover:cursor-pointer"
            variants={fadeIn}
            whileHover={{ scale: 1.2 }}
            onClick={() => setOpenImage(project.image)}
            key={index}
          >
            <Image
              src={project.image}
              alt={project.nameproject}
              fill
              className="object-cover"
            />
    <div className="absolute bottom-0 w-full bg-black/70 p-4">
        <h3 className="text-white text-xl">
          {project.nameproject}
        </h3>
        <p className="text-gray-300 text-sm">
          {project
          
          
          .description}
        </p>
      </div>
         
          </motion.div>
          
        ))}
      </motion.div>

       {/* MODAL FULLSCREEN */}
    {openImage && (
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        onPointerDown={() => setOpenImage(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-[90vw] h-[90vh]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
        >
          <Image
            src={openImage}
            alt="Imagem ampliada"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    )}
    </div>
  );
}
