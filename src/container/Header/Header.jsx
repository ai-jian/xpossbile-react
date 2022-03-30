import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
   <>
    <motion.div 
      className="manifesto"
      whileInView={{ y: [-50,0], opacity: [0, 1] }}
      transition={{ duration: 1, type: "tween", ease: 'easeInOut' }}
    >
      <h1>
        <span className="landing-left">We release</span>
        <span className="landing-right">innocent soul.</span>
        <span className="landing-left">We design, polish, </span>
        <span className="landing-right">and make it beautiful.</span>
      </h1>
    </motion.div>

   </>
  )
}

export default Header