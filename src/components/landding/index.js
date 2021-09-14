import React from "react";
import css from "./style/landding.module.scss";
import img from "../../assets/img.jpg";
import { motion } from "framer-motion";
import ReactCanvasNest from "react-canvas-nest";
function Landding() {
  return (
    <motion.div className={css.container} id="home">
      <ReactCanvasNest
        config={{
          pointColor: "100, 100, 100 ",
          lineColor: "255, 209,0",
          lineWidth: 1,
          count: 80,
          pointR: 1.5,
        }}
      />
      <div className={css.welcome}>
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: -10 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          <span>H</span>
          <span>i</span>
          <span className={css.coma}>,</span>
        </motion.h1>
        <motion.h1
          initial={{ y: -300 }}
          animate={{ y: -10 }}
          transition={{
            duration: 1,
            delay: 0.9,
            type: "spring",
            stiffness: 200,
          }}
          style={{ marginLeft: "3rem" }}
        >
          <span>I</span>
          <span className={css.coma}>'</span>
          <span>m</span> <span>A</span>
          <span>h</span>
          <span>m</span>
          <span>a</span>
          <span>d</span>
          <span className={css.coma}>,</span>
        </motion.h1>
        <motion.h1
          initial={{ y: -500 }}
          animate={{ y: -10 }}
          transition={{
            duration: 1,
            delay: 1.4,
            type: "spring",
            stiffness: 100,
          }}
          style={{ marginLeft: "6rem" }}
        >
          <span>W</span>
          <span>e</span>
          <span>b</span> <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span className={css.coma}>.</span>
        </motion.h1>
      </div>
      <motion.div className={css.btn}
      initial={{ x: -600 }}
      animate={{ x: -10 }}
      transition={{
        duration: 1,
        delay: 1.6,
        type:'spring',
        stiffness: 500,
      }}
      >
          <span>Contact me</span>
          <i class="fas fa-arrow-right"></i>
      </motion.div>
    </motion.div>
  );
}

export default Landding;
