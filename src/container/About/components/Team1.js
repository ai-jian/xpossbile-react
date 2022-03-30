import React, { useRef, useState } from 'react'
import { motion, useElementScroll, useTransform, useViewportScroll } from 'framer-motion'


import { images } from '../../../constants'
import "../About.scss"

const Team1 = () => {
    const ref = useRef(null)
    const [progress, setProgress] = useState(0)
    const { scrollYProgress } = useElementScroll(ref)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0])
    const filter = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)'])
    const left = useTransform(scrollYProgress, [0, 1], ['20%', '150%'])
    const right = useTransform(scrollYProgress, [0, 1], ['20%', '150%'])
    const top = useTransform(scrollYProgress, [0, 1], ['10%', '-90%'])
    const bottom = useTransform(scrollYProgress, [0, 1], ['0%', '-120%'])


    return (
        <section>
            <div style={{ height: '100vh' }}>
                <div ref={ref} style={{ height: '100%', overflow: 'auto' }}>
                    <div
                        style={{ height: '150vh', backgroundColor: 'pink' }}
                    >
                        <motion.div
                            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                            className="team t1"
                        >
                            <p> We
                                <motion.span style={{ scale, filter }}> focus </motion.span>
                                on client's needs.
                            </p>
                        </motion.div>

                        <motion.img
                            src={images.line}
                            className="line top"
                            whileInView={{ opacity: [0, 1] }}
                            style={{ left }}

                        />
                        <motion.img
                            src={images.line}
                            className="line bottom"
                            whileInView={{ opacity: [0, 1] }}
                            style={{ right }}
                        />
                        <motion.img
                            src={images.line}
                            className="line left"
                            whileInView={{ opacity: [0, 1] }}
                            style={{ top }}
                        />
                        <motion.img
                            src={images.line}
                            className="line right"
                            whileInView={{ opacity: [0, 1] }}
                            style={{ bottom }}
                        />

                    </div>
                </div>
            </div>
            {progress.toFixed(2)}
        </section >
    )
}

export default Team1