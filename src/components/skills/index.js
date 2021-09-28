import React, { useEffect } from "react";

import css from "./style/skills.module.scss";
import { motion } from "framer-motion";
import Line from "../../assets/Line";

const pirsent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
};
function Skills() {
  return (
    <motion.div
      className={css.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={css.leftSide}>
        <span className={css.htmlO}>{"<html>"}</span>
        <span className={css.bodyO}>{"<body>"}</span>
        <div className={css.heading}>
          <span>{"<h1>"}</span>
          <h1>
            <motion.span>S</motion.span>
            <motion.span>k</motion.span>
            <motion.span>i</motion.span>
            <motion.span>l</motion.span>
            <motion.span>l</motion.span>
            <motion.span>s</motion.span>{" "}
            <motion.span className={css.coma}>{"&"}</motion.span>{" "}
            <motion.span>E</motion.span>
            <motion.span>x</motion.span>
            <motion.span>p</motion.span>
            <motion.span>e</motion.span>
            <motion.span>r</motion.span>
            <motion.span>i</motion.span>
            <motion.span>e</motion.span>
            <motion.span>n</motion.span>
            <motion.span>c</motion.span>
            <motion.span>e</motion.span>
            <motion.span className={css.coma}>,</motion.span>
          </h1>
          <span>{"</h1>"}</span>
        </div>
        <div className={css.paragraph}>
          <span>{"<p>"}</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span>{"</p>"}</span>
        </div>
        <span className={css.bodyC}>{"</body>"}</span>
        <span className={css.htmlC}>{"</html>"}</span>
      </div>
      <div className={css.rightSide}>
        <div className={css.skills}>
          <div>
            <motion.span>Front-End: </motion.span>
            <Line length={0.9} color="#ffd100" />
            <motion.span variants={pirsent} initial="hidden" animate="visible">
              90%{" "}
            </motion.span>
          </div>
          <div>
            <motion.span>Back-End : </motion.span>
            <Line length={0.75} color="#ffd100" />
            <motion.span variants={pirsent} initial="hidden" animate="visible">
              75%{" "}
            </motion.span>
          </div>
          <div>
            <motion.span>React js: </motion.span>
            <Line length={0.88} color="#ffd100" />
            <motion.span variants={pirsent} initial="hidden" animate="visible">
              88%{" "}
            </motion.span>
          </div>
          <div>
            <motion.span>Node js : </motion.span>
            <Line length={0.7} color="#ffd100" />
            <motion.span variants={pirsent} initial="hidden" animate="visible">
              70%{" "}
            </motion.span>
          </div>
        </div>
        <div className={css.expereince}>
          <div className={css.timeLine}>
            <p>2017-2019</p>
            <div className={css.disc}>
              <h3>video editing</h3>
              <ul>
                <li>Developed and edited client testimonial videos.</li>
                <li>Organized project footage and arranged shot selections into sequences.</li>
              </ul>
            </div>
          </div>
          <div className={css.timeLine}>
            <p>2019-2020</p>
            <div className={css.disc}>
            <h3>Front-End Web Developer</h3>
              <ul>
                <li>Designed dynamic and browser compatible pages using HTML5, CSS3, jQuery, and Javascript.</li>
                <li>translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3</li>
              </ul>
            </div>
          </div>
          <div className={css.timeLine}>
            <p>2020-Now</p>
            <div className={css.disc}>
            <h3>Full-Stack Web Developer</h3>
              <ul>
                <li>Managed, optimized, and updated MySQL {'&'} NoSQL databases </li>
                <li>Developed full-stack web applications which processed, analyzed, and rendered data visually.</li>
                <li>Developed app integration with REST / SOAP and other APIs for Google Maps, social media logins, payment processors, and other services.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default Skills;





