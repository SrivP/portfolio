import { motion } from "motion/react"
import { useScroll } from "motion/react";

function App() {
  const { scrollYProgress } = useScroll();
  return(
    <>
    <motion.div className="bg-[#212534] h-[100vh] w-[100vw] grid">
      <motion.h1 style={{ scaleX: scrollYProgress }} className="text-white text-6xl font-extrabold text-center place-self-center">hi there :wave:</motion.h1>
    </motion.div>

    <motion.div className="bg-[#212534] h-[100vh] w-[100vw] grid">

    </motion.div>

    </>
  )
}

export default App; 

 