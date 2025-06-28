import Backdrop from "./backdrop";
import { motion } from "framer-motion";
function Modal(props: { handleClose: any; modalOpen: any; }) {
    let handleClose = props.handleClose;
    
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className="z-50 w-[200px] h-[200px] bg-black mx-auto px-8 rounded-[12px] flex flex-col items-center"
            variants ={{
                hidden: {
                    y: "-300vh",
                    opacity: 0
                },
                visible: {
                    y: "0",
                    transition: {
                        duration: 0.1,
                        type: "spring",
                        damping: 25,
                        stiffness: 500
                    }

                },  
                exit: {
                    y: "300vh",
                    opacity: 0
                },
            }}
            initial= "hidden"
            animate="visible"
            exit="exit">
  
            HAIII!

             

            </motion.div>

        </Backdrop>

    )
}

export default Modal;


