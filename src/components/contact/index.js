import css from './style/contact.module.scss'
import {motion} from 'framer-motion'

function Contact() {
    return (
        <motion.div className={css.container}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:2,duration:1}}
      >
        <h1>Contact</h1>
      </motion.div>
    )
}

export default Contact