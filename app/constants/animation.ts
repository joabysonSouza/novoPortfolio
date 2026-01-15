import {Variants} from "framer-motion" 
 const fadeIn : Variants = {
  hidden: {
    opacity: 0,
    y: 50, 
  },
  show: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default fadeIn