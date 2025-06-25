import { motion, useTransform } from "motion/react"
import { useScroll, useSpring } from "motion/react";

function App() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(useTransform(scrollYProgress, [0,1], ["0px", "-700px"]), {stiffness: 30})
  const y = useSpring(useTransform(scrollYProgress, [0,1], ["0px", "500px"]), {stiffness: 30})
  const textscale = useSpring(useTransform(scrollYProgress, [0,1], [1,0.5]), {stiffness: 30})
  const scale = useSpring(useTransform(scrollYProgress, [0,1], [1,0.5]), {stiffness: 30})
  return(
    <div className="bg-[#212534]">
    <motion.div className="relative h-[200vh] w-[100vw]">
      <motion.h1 style={{ x,y,scale: textscale}} className="text-[#fa6909] text-6xl font-extrabold absolute mt-100 ml-170">hi there 👋 </motion.h1>
      <motion.svg  style={{ x,y,scale }} initial={{ scale: 1 }} animate={{ scale: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity }} viewBox="0 0 200 200" className="absolute mt-30 ml-90 w-[600px] h-[600px] opacity-20 blur-3xl">
      <path fill="#FA6909" d="M44.2,-75.9C58.3,-68.4,71.5,-58.6,80.2,-45.6C88.9,-32.6,93,-16.3,92.9,-0.1C92.7,16.1,88.2,32.2,79.8,45.8C71.4,59.3,59.2,70.3,45.2,77.3C31.3,84.3,15.6,87.2,-0.1,87.5C-15.9,87.7,-31.9,85.3,-45.6,78.2C-59.3,71,-70.8,59.3,-77.6,45.5C-84.4,31.7,-86.4,15.8,-86.7,-0.1C-86.9,-16.1,-85.4,-32.3,-78.9,-46.6C-72.4,-60.9,-61,-73.4,-47,-80.9C-33.1,-88.5,-16.5,-91.1,-0.7,-89.8C15,-88.5,30.1,-83.3,44.2,-75.9Z" transform="translate(100 100)" />   
    </motion.svg>
    </motion.div>
    
    
    </div>
  )
}

export default App; 

 