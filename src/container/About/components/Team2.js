import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'


import { images } from '../../../constants'
import "../About.scss"

const Team2 = () => {
    const ref = useRef();

    // Stores the start and end scrolling position for our container
    const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
    const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

    const { scrollY, scrollYProgress } = useViewportScroll();

    // Use the container's start/end position percentage
    const scale = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [1, 0])
    const filter = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['blur(4px)', 'blur(0px)'])
    const left = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['20%', '150%'])
    const right = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['20%', '150%'])
    const top = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['10%', '-90%'])
    const bottom = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], ['0%', '-120%'])

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
        <div ref={ref}>


            <div className="team t2">
                <motion.div
                    className="header-text"
                    whileInView={{ y: [-100, 0], opacity: [0, 1], delay: 0.5 }}
                >
                    <p>
                        We challenge design rules and aesthetics.
                    </p>
                </motion.div>



            </div>
        </div>
    )
}

export default Team2