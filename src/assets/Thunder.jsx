import React from "react";

import { motion } from "framer-motion";
const svgVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    strokeWidth:0.5,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      
    },
  },
};

function Thunder() {
  return (
    <>
      <motion.svg
        width="100%"
        height="90%"
        viewBox="0 0 33 159"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M31.5 0.5L1 86.5H25L1 158L1.40323 156.799L31.5 82.5H8.5L31.5 0.5Z"
          stroke="#ffd100"
          stroke-width="1px"
          variants={pathVariants}
        />
      </motion.svg>
    </>
  );
}

export default Thunder;
