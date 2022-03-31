import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { AppWrap } from '../../wrapper';
import { images } from '../../constants'
import './Showcase.scss'



const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgURL: images.about01 },
  { title: 'Web Design', description: 'I am a good web developer', imgURL: images.about02 },
  { title: 'UI/UX', description: 'I am a good web developer', imgURL: images.about03 },
  { title: 'Web Animation', description: 'I am a good web developer', imgURL: images.about04 },
]

const Showcase = () => {

  const ref = useRef();

  // Stores the start and end scrolling position for our container
  const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

  const { scrollY, scrollYProgress } = useViewportScroll();
  // Use the container's start/end position percentage
  const x = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['0%', '200%']);
  const left = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['0%', '-100%']);
  const opacity = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [1, .1]);

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
    <>

      <div className="app__profiles" ref={ref}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: .5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
            style={{ opacity }}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: '20' }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: '10' }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Showcase