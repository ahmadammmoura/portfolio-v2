
import css from './style/projects.module.scss'
import {motion} from 'framer-motion'
import ReactCanvasNest from "react-canvas-nest";

function Projects() {
    return (
        <motion.div className={css.container}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
      >
        <ReactCanvasNest
        config={{
          pointColor: "100, 100, 100 ",
          lineColor: "255, 209,0",
          lineWidth: 1,
          count: 80,
          pointR: 1.5,
        }}
      />
        <h1>Projects</h1>
      </motion.div>
    )
}

export default Projects