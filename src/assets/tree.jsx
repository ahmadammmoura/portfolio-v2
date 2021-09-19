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
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

function Tree() {
  return (
    <>
      <motion.svg
        width="69"
        height="108"
        viewBox="0 0 69 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M35.5 0V33.5M35.5 33.5L0.5 50.5V84L35.5 106.5L68.5 84V50.5L35.5 33.5Z"
          stroke="black"
          variants={pathVariants}
        />
      </motion.svg>
    </>
  );
}

export default Tree;
