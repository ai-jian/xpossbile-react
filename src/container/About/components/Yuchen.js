import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'


import { images } from '../../../constants'
import "../About.scss"

const Yuchen = () => {
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

        <div ref={ref} className='app-container app-flex-center'>

            <motion.div
                className="app__about-profile app-flex-center"
                whileInView={{ y: [-100, 0], opacity: [0, 1], delay: 0.5 }}
            >
                <div className="profile-pic pic-yuchen"></div>
                <div className="profile-name-wrapper">
                    <h3 className="name">Yuchen Yang</h3>
                    <p className="title">Talented graphic designer</p>
                </div>
                <p className="profile-description">
                    <span>Yuchen</span> is a professional practitioner of art and design. She gathers
                    idea from her daily sketches and observation, develops concepts,
                    creating graphic design from her small laptop. Always willing and
                    has ability to work independently as well as part of a team. She is
                    never tired of taking challenges.
                </p>

            </motion.div>

        </div >


    )
}

export default Yuchen