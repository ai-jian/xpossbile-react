import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'

// import { urlFor, client } from '../../client'

const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgURL: images.about01},
  { title: 'Web Design', description: 'I am a good web developer', imgURL: images.about02},
  { title: 'UI/UX', description: 'I am a good web developer', imgURL: images.about03},
  { title: 'Web Animation', description: 'I am a good web developer', imgURL: images.about04},
]

const Showcase = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "aboouts"]'

  //   client.fetch(query).then((data) => {
  //     setAbouts(data)
  //   })
  // },[])

  return (
    <>

      <div className="app__profiles">
        { abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: .5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
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