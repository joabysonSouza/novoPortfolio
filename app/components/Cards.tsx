"use client";
import { motion } from "framer-motion";
import { skills } from "../constants/index"; // importa a constante

export default function Cards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-6">
      {skills.map((Skill, index) => (
        <motion.div
          key={index}
          className="w-40 h-40 bg-gray-900 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white cursor-pointer"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Ícone */}
          <Skill.icon className="text-5xl text-yellow-400 mb-2" />
          
          {/* Título */}
          <span className="text-lg font-semibold">{Skill.title}</span>
        </motion.div>
      ))}
    </div>
  );
}
