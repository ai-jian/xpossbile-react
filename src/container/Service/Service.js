import React from 'react'
import { motion } from 'framer-motion'


import { images } from '../../constants'
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
        videoURL: images.step2
    },
    {
        title: 'step3',
        description: `We release the innocent soul, 
                        we design, we polish, we make it beautiful.`,
        videoURL: images.step3
    },
    {
        title: 'step4',
        description: `We build deeper connections with the world together.
                        We show the œuvre together.`,
        videoURL: '#'
    }
]



// const animation1 = lottie.loadAnimation({
//     container: document.getElementById('anim'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: true,
//     path: 'wNoise.json',
//     name: "Demo Animation1",
// });


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
                    {/* <div id="anim"></div>
                    <video
                        className="service-video"
                        // tabIndex={0}
                        preload="preload"
                        style={{ width: "50%", objectFit: "contain" }}
                        playsInline
                        autoPlay
                    // controls
                    >
                        <source
                            type="video/mp4"
                            src={service.videoURL}
                        // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        />
                    </video> */}


                    {/* <img src={service.videoURL} alt="" className="service-video" /> */}
                    <div className="service-video" style={{ backgroundImage: `url(${service.videoURL})` }} />
                    {/* <div className="service-video" /> */}


                    {/* <video type="video" src={service.videoURL}></video> */}


                </motion.div>
            ))
            }


        </section >
    )
}

export default Service
