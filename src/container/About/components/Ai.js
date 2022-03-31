import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'


import { images } from '../../../constants'
import "../About.scss"

const Ai = () => {
    const ref = useRef();

    // Stores the start and end scrolling position for our container
    const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
    const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

    const { scrollY, scrollYProgress } = useViewportScroll();

    // Use the container's start/end position percentage
    const scale = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [1, 0])
    const filter = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['blur(4px)', 'blur(0px)'])
    const left = useTransform(scrollYProgress, [scrollPercentageStart + 0.4, scrollPercentageEnd], ['20%', '150%'])
    const right = useTransform(scrollYProgress, [scrollPercentageStart + 0.4, scrollPercentageEnd], ['20%', '150%'])
    const top = useTransform(scrollYProgress, [scrollPercentageStart + 0.4, scrollPercentageEnd], ['10%', '-90%'])
    const bottom = useTransform(scrollYProgress, [scrollPercentageStart + 0.4, scrollPercentageEnd], ['0%', '-120%'])

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
        <section ref={ref}>


            <div className="team t3">
                <motion.div
                    className="header-text"
                    whileInView={{ y: [-100, 0], opacity: [0, 1], delay: 0.5 }}
                >
                    <div className="profile">
                        <div className="pic" />
                        <h3 className="name">Ai Jian</h3>
                        <p className="title">Creative Developer</p>
                        <p className="description">
                            Ai is a frontend web developer who has been always curious about new
                            technologies, loves all things aesthetically pleasing, and makes
                            visuals come to life and react on screen.
                        </p>
                    </div>
                </motion.div>



            </div>
        </section>
    )
}

export default Ai