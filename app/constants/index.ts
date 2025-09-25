import { SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";

const navLinks = [
  { label: "Trabalhos", href: "/Trabalhos", id: 1},
  { label: "Sobre", href: "/sobre" ,id: 2},
  { label: "Contatos", href: "/Contatos" ,id: 3},
  { label: "Feedback", href: "/Feedback", id: 4},
];




 const skills = [
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    title: "React",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "text-white", // geralmente branco ou preto
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-sky-600",
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
];



export {navLinks , skills}

