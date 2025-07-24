import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  exit: { scale: 0.6, opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
};

export default function Modal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.button
            className="close-btn"
            onClick={onClose}
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>

          <motion.h2 variants={contentVariants} initial="hidden" animate="visible">
  All those moments...
</motion.h2>

<motion.p variants={contentVariants} initial="hidden" animate="visible">
  ...will be lost in time, like tears in rain. <br />
</motion.p>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
