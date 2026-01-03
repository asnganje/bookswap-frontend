import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 px-4 bg-black/50 flex items-center justify-center"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={onClose}
      >
        <motion.div
          onClick={(e)=>e.stopPropagation()}
          initial={{scale:0.9, opacity:0}}
          animate={{scale:1, opacity:1}}
          exit={{scale:0.9, opacity:0}}
          className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal;