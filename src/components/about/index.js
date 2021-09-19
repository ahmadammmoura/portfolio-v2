import React from "react";

import css from "./style/about.module.scss";
import { motion } from "framer-motion";
import Thunder from "../../assets/Thunder";

function About() {
  return (
    <motion.div
      className={css.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className={css.heading}>
        <span className={css.openBody}>{"<body>"}</span>
        <div className={css.text}>
          <span className={css.openH}>{"<h1>"}</span>
          <h1>
            <motion.span>A</motion.span>
            <motion.span>b</motion.span>
            <motion.span>o</motion.span>
            <motion.span>u</motion.span>
            <motion.span>t</motion.span> <motion.span>M</motion.span>
            <motion.span>e</motion.span>
            <motion.span className={css.coma}>,</motion.span>
          </h1>
          <span className={css.closeH}>{"</h1>"}</span>
        </div>

        <div className={css.para}>
          <span className={css.openP}>{"<p>"}</span>
          <div className={css.article}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived
            </p>
          </div>
          <span className={css.closeP}>{"</p>"}</span>
        </div>
        <span className={css.closeBody}>{"</body>"}</span>
      </div>

      <div className={css.skills}>
        <Thunder />
      </div>
    </motion.div>
  );
}

export default About;
