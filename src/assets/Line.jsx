import React from "react";

import { motion } from "framer-motion";


function Line({length,color}) {


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
          pathLength: length,
          strokeWidth:2,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            
          },
        },
      };
  return (
    <>
      <motion.svg
        width="80%"
        height="50%"
        viewBox="0 0 338 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
        stroke={color}
        variants={pathVariants}
        d="M0 1H338"/>
      </motion.svg>
    </>
  );
}

export default Line;
