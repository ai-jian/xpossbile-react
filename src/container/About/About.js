import React, { useRef, useState } from 'react'
import { motion, useElementScroll, useTransform, useViewportScroll } from 'framer-motion'

import { Team1, Team2, Team3, Ai, Yuchen } from './components'
import { images } from '../../constants'
import "./About.scss"


const About = () => {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useElementScroll(ref)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const left = useTransform(scrollYProgress, [0, 1], ['20%', '70%'])
  const right = useTransform(scrollYProgress, [0, 1], ['50%', '0%'])

  return (
    <>
      <Team1 />
      <div id="shocase">
        <div style={{ height: '70vh' }}>
          <div ref={ref} style={{ height: '100%', overflow: 'auto' }}>
            <div
              style={{ height: '150vh', backgroundColor: 'yellowgreen' }}
            >

              <motion.img
                src={images.star}
                className="star"
                style={{
                  position: 'fixed',
                  top: '20%',
                  left: '-300px',
                  backgroundColor: 'transparent',
                  rotate,

                }}
              />

            </div>
            <div style={{ display: 'none' }}>{progress.toFixed(2)}</div>
          </div>
        </div>

      </div >



    </>
  )
}

export default About