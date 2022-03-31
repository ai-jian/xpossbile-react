import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { images } from '../../../constants'
import "../About.scss"


const Star = () => {

  const ref = useRef();

  // Stores the start and end scrolling position for our container
  const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

  const { scrollY, scrollYProgress } = useViewportScroll();
  // Use the container's start/end position percentage
  const rotate = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [0, 360]);

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

  });



  return (
    <section ref={ref} style={{ position: 'absolute' }}>
      <motion.img
        src={images.star}
        className="star"
        whileInView={{ y: [-100, 0], opacity: [0, 1], delay: 0.5 }}
        style={{
          position: 'fixed',
          top: '20%',
          left: '-300px',
          backgroundColor: 'transparent',
          rotate,
          // scale

        }}
      />

    </section>



  )
}

export default Star