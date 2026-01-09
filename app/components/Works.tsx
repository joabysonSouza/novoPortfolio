"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../constants/animation";
import { container, projects } from "../constants";
import Image from "next/image";
import { image } from "framer-motion/client";

// { nameProject , image , description, code_link, tags, index}: projectsProps

interface projectsProps {
  nameProject: string;
  image: string;
  description: string;
  code_link: string;
  tags?: string[];
  index: number;
}

// TODO Mapear e construir os projects Cards
// TODO Fazer um modal para abrir a image em tela cheia

export default function Works() {
  const ProjectCards = ({
    nameProject,
    image,
    description,
    code_link,
    tags,
    index,
  }: projectsProps) => {
    return (
      <motion.div
        className="w-[400px] h-[250px] bg-amber-50 m-8 rounded-xl flex items-center relative overflow-hidden justify-center hover:cursor-pointer"
        variants={fadeIn}
        whileHover={{ scale: 1.2 }}
      >
        <Image
          src={image}
          alt="Aquila"
          fill
          className="w-full h-full object-cover"
          
        />
      </motion.div>
    );
  };
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <ProjectCards
            nameProject={project.nameproject}
            code_link={project.code_link}
            description={project.description}
            image={project.image}
            index={index}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
}
