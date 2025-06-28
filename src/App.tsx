import { AnimatePresence, motion, useMotionValueEvent, useTransform } from "motion/react"
import { useScroll, useSpring } from "motion/react";
import Card from "./components/card";
import { useState } from "react";
import AboutMe from "./components/aboutMe";

function App() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(useTransform(scrollYProgress, [0,1], ["0px", "-500px"]), {stiffness: 30});
  const y = useSpring(useTransform(scrollYProgress, [0,1], ["0px", "550px"]), {stiffness: 30});
  const textscale = useSpring(useTransform(scrollYProgress, [0,1], [1,0.65]), {stiffness: 30});
  const scale = useSpring(useTransform(scrollYProgress, [0,1], [1,0.5]), {stiffness: 30});
  const opacity = useTransform(scrollYProgress, [0.8,1], [0,1]);
  const bopacity = useTransform(scrollYProgress, [0.8,1], [0.25,0]);
  const [v1, setV1] = useState(true);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [text, setText] = useState("hi there 👋")
  const [showNav, setShowNav] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.9) {
    setShowNav(latest >= 0.9)
    setText("Projects ⚒️")
    } else if (latest < 0.7) {
      setText("hi there 👋");
      setV1(true);
      setV2(false);
      setV3(false)
    }
  })

  
  
  

  return (
    <div className="bg-[#0a0a0a] h-[200vh] w-[100vw]">
      <motion.div style={{ x, y, scale: textscale }} initial={{scale : 1}} className="relative flex flex-col items-center justify-center h-screen">
        <motion.svg
          style={{ opacity: bopacity, x, y, scale }}
          initial={{ scale: 1 }}
          animate={{ scale: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          viewBox="0 0 200 200"
          className="absolute inset-0 m-auto w-[600px] h-[600px] opacity-20 blur-3xl z-0 pointer-events-none">
          <path fill="#FA6909" d="M44.2,-75.9C58.3,-68.4,71.5,-58.6,80.2,-45.6C88.9,-32.6,93,-16.3,92.9,-0.1C92.7,16.1,88.2,32.2,79.8,45.8C71.4,59.3,59.2,70.3,45.2,77.3C31.3,84.3,15.6,87.2,-0.1,87.5C-15.9,87.7,-31.9,85.3,-45.6,78.2C-59.3,71,-70.8,59.3,-77.6,45.5C-84.4,31.7,-86.4,15.8,-86.7,-0.1C-86.9,-16.1,-85.4,-32.3,-78.9,-46.6C-72.4,-60.9,-61,-73.4,-47,-80.9C-33.1,-88.5,-16.5,-91.1,-0.7,-89.8C15,-88.5,30.1,-83.3,44.2,-75.9Z" transform="translate(100 100)" />
        </motion.svg>

        <motion.h1 className="relative z-10 text-[#fa6909] text-6xl font-extrabold">
          {text}
        </motion.h1>
        { showNav && 
        <motion.nav style={{ opacity }} initial={{opacity : 0}} className="relative z-10 mt-6">
          <ul className="flex flex-col space-y-1 text-white">
            <li><motion.button onClick={() => {
              setV1(true);
              setV2(false);
              setV3(false);
              setText("Projects ⚒️")
            }} transition={{ duration: 2}} className="bg-[#fa6909]/50 hover:bg-[#fa6909]/75 px-5 py-1.25 rounded-full"></motion.button></li>
            <li><motion.button onClick={() => {
              setV1(false);
              setV2(true);
              setV3(false);
              setText("Experiences 🏢")
            }}className="bg-[#fa6909]/50 hover:bg-[#fa6909]/75 px-5 py-1.25 rounded-full"></motion.button></li>
            <li><motion.button onClick={() => {
              setV1(false);
              setV2(false);
              setV3(true);
              setText("About Me 🫠")
            }}className="bg-[#fa6909]/50 hover:bg-[#fa6909]/75 px-5 py-1.25 rounded-full"></motion.button></li>
          </ul>
        </motion.nav>
          }
      </motion.div>
      
      <AnimatePresence mode="wait">
  <motion.div
    key={v1 ? "v1" : v2 ? "v2" : "v3"} 
    style={{ opacity }}
    variants={{
      hidden: {
        y: "-600px",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: {
        x: "1000px",
        opacity: 0,
        transition: { duration: 0.2 },
      },
    }}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="overflow-hidden p-8 ml-[40vw] w-[60vw] h-[800px] grid grid-cols-2"
  >
    {v1 && <Card pic = "./Autumn.gif"/>}
    {v2 && <Card pic = "./City.gif"/>}
    {v3 && <AboutMe />}
  </motion.div>
</AnimatePresence>

    </div>
  );
}

export default App;
