import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { images } from '../../constants'
import './Home.scss'

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

const Home = () => {
  //--------------------------------------------------------------------------
  const ref = useRef();

  // Stores the start and end scrolling position for our container
  const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

  const { scrollY, scrollYProgress } = useViewportScroll();
  // Use the container's start/end position percentage
  const x = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['0%', '200%']);
  const left = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['0%', '-100%']);
  const opacity = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [1, 0]);

  useLayoutEffect(() => {
    // Get the distance from the start of the page to the element start
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const offsetStart = rect.top + scrollTop;
    const offsetEnd = (offsetStart + rect.height);

    const elementScrollStart = offsetStart / document.body.clientHeight;
    const elementScrollEnd = offsetEnd / document.body.clientHeight;

    setScrollPercentageStart(elementScrollStart);
    setScrollPercentageEnd(elementScrollEnd);

    //   console.log(rect.top)
    //   console.log(scrollTop)
    //   console.log(offsetStart)
  });


  return (
   
    <section ref={ref} id="home">
      <motion.div
      className="manifesto"
      whileInView={{ y: [-50,0], opacity: [0, 1] }}
      transition={{ duration: 1, type: "tween", ease: 'easeInOut' }}
      >
        <motion.p style={{ left: '0%', left, opacity}} className="landing-left">We release</motion.p>
        <motion.p style={{ left: '0%', x, opacity}} className="landing-right">innocent soul.</motion.p>
        <motion.p style={{ left: '0%', left, opacity}} className="landing-left">We design, polish, </motion.p>
        <motion.p style={{ left: '0%', x, opacity}} className="landing-right">and make it beautiful.</motion.p>
      </motion.div>
    </section>
   
  )
}

export default Home