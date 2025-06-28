
import { motion } from "framer-motion";
import { useState } from "react";
function Backdrop(props: { children: any; onClick: any; }) {
    let children= props.children;
    let onClick = props.onClick;
    const [modal, setModal] = useState(false);
    const [glowcolor, setGlowColor] = useState("rgba(175, 43, 191, 1)")
        const Glow = new Map();
        Glow.set(1, "rgba(175, 43, 191, 1)")
        Glow.set(2, "rgba(67, 170, 139, 1)")
        Glow.set(3, "rgba(178, 176, 155, 1)")
        Glow.set(4, "rgba(79, 124, 172, 1)")
    
        function glowPicker() {
            const x = Math.floor(Math.random() * 4) + 1;
            return Glow.get(x)
        }
    return(
        <motion.div
        onClick={onClick}
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}} 
        className="z-10 fixed top-0 left-0 h-[100%] w-[100%] bg-[#000000e1] flex items-center justify-center" 
        >
        <motion.button onClick={() => (modal ? close() : open())} whileHover={{ scale: 1.1}} whileTap={{ scale : 0.9}} className="cursor-pointer border mx-auto my-auto">
      <motion.div
       onHoverStart={() => {
          const newColor = glowPicker();
          setGlowColor(newColor);
        }}
        whileHover={{
          boxShadow:
            `0 20px 25px -5px rgba(250, 105, 9, 0.15), 0 8px 10px -6px ${glowcolor}`,
        }}
        transition={{ duration: 0.1 }}
        className="bg-[#171717] border border-zinc-700 rounded-lg w-[80vw] h-[80vh]"
      >
        <img
          src={"./3358359.jpg"}
          className="mx-auto mt-3 rounded-lg"
        />
      </motion.div>
    </motion.button>
        </motion.div>
    )
}

export default Backdrop;