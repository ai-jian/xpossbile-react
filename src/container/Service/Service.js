import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { step1 } from "../../assets/image/service/step1.mp4"
import './Service.scss'


const services = [
    {
        title: 'step1',
        description: 'No idea should be directly thrown in the bin unless it has been tried.',
        videoURL: images.step1
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
                    <video controls width="480" autoplay>

                        {/* <source src="/media/cc0-videos/flower.webm"
                            type="video/webm" /> */}

                        <source src="../../assets/image/service/step1.mp4"
                            type="video/mp4" />

                        Sorry, your browser doesn't support embedded videos.
                    </video>



                    {/* <video type="video" src={service.videoURL}></video> */}


                </motion.div>
            ))}


        </section>
    )
}

export default Service
