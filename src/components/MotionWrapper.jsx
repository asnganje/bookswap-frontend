import { motion } from "framer-motion";

const MotionWrapper = ({children, delay=0}) => {
  return (
    <motion.div
      initial={{opacity:0, y:30}}
      animate={{opacity:1, y:0}}
      transition={{duration: 1.0, delay}}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper;