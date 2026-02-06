"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import fadeIn from "../constants/animation";
import  projects  from "../constants/projects";
import Image from "next/image";
import { SiGithub } from "react-icons/si";


export default function Works() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <div className="w-full  min-h-auto mb-8 bg-Bgblack ">
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
        className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <div
            className="w-96 h-full justify-center bg-zinc-900  rounded-xl "
            key={project.nameproject}
          >
            <motion.div
              className="w-87.5 h-62.5 rounded-xl ml-3 mt-3 flex items-center relative overflow-hidden justify-center hover:cursor-pointer i"
              onClick={() => setOpenImage(project.image)}
              key={index}
            >
              <a
                href={project.code_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} 
                className="absolute top-3 right-3 z-10"
              >
                <SiGithub size={50} className="text-3xl text-white bg-black/60 p-2 rounded-full hover:scale-110 transition" />
              </a>
              <Image
                src={project.image}
                alt={project.nameproject}
                fill
                className=" w-full h-full object-cover "
              />
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold">{project.nameproject}</h3>
              <p className=" text-start mx-1.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, provident exercitationem aliquid nobis nam
                voluptatibus debitis consectetur, dignissimos quia esse
                reprehenderit corporis laudantium quibusdam
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-sm px-3 py-1 rounded-full ${tag.className} text-white`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
