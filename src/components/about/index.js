import React from 'react'

import css from './style/about.module.scss'
import {motion} from 'framer-motion'

function About() {
    return (
        <motion.div className={css.container}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
    >
      <h1>About</h1>
    </motion.div>
    )
}

export default About
