import React from 'react'

import css from './style/skills.module.scss'
import {motion} from 'framer-motion'
function Skills() {
    return (
        <motion.div className={css.container}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
      >
        
      </motion.div>
    )
}

export default Skills
