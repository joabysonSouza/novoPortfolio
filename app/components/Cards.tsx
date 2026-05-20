"use client";
import { motion } from "framer-motion";
import  skills  from "../constants/skills"; 

export default function Cards() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 }, 
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 gap-3 p-6 h-screen"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={item}
          className="w-40 h-40 bg-nav rounded-2xl shadow-xl flex flex-col items-center justify-center text-white cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
     
          <skill.icon className={`text-5xl ${skill.color} mb-2`} />

      
          <span className="text-lg font-semibold">{skill.title}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
