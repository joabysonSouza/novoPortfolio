import { Variants } from "framer-motion";


const containerAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export default containerAnimation
