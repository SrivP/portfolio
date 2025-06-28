import { useState } from "react";
import Modal from "./modal";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


function Card(props: { pic: any;}) {
    const header = props.pic;
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

    const [modal, setModal] = useState(false);
    const close = () => {
        setModal(false)
        };
    const open = () => {
        setModal(true)
        
    };

  return (
    <>
      <AnimatePresence>
      {modal && <Modal modalOpen = {modal} handleClose={close} />}
    </AnimatePresence>
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
        className="bg-[#171717] border border-zinc-700 w-[25vw] h-[25vh] rounded-lg"
      >
        <img
          src={header}
          className="mx-auto mt-3 w-[22vw] rounded-lg"
        />
      </motion.div>
    </motion.button>
    </>

    
  );
}

export default Card;
