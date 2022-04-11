import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Service.scss'


const services = [
    {
        title: 'step1',
        description: 'No idea should be directly thrown in the bin unless it has been tried.',
        videoURL: '#'
    },
    {
        title: 'step2',
        description: 'We can always find the jade beneath the skin of stone.',
        videoURL: '#'
    },
    {
        title: 'step3',
        description: `We release the innocent soul, 
                        we design, we polish, we make it beautiful.`,
        videoURL: '#'
    },
    {
        title: 'step4',
        description: `We build deeper connections with the world together.
                        We show the œuvre together.`,
        videoURL: '#'
    }
]


const Service = () => {
    return (
        <section id="service" className="app__service">
            {services.map((service, index) => (
                <motion.div
                    key={service.title + index}
                    whileInView={{ opacity: 1 }}
                    className="service-wrapper"
                >
                    <div className="service-text">
                        <h1 className="service-title">{service.title}</h1>
                        <p className="service-description">{service.description}</p>
                    </div>
                    <div className="service-video">{service.videoURL}</div>

                </motion.div>
            ))}


        </section>
    )
}

export default Service
