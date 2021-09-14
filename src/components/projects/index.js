
import css from './style/projects.module.scss'
import {motion} from 'framer-motion'
function Projects() {
    return (
        <motion.div className={css.container}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
      >
        <h1>Projects</h1>
      </motion.div>
    )
}

export default Projects