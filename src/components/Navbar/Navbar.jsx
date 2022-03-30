import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [open, setOpen] = useState(false)

//   // hamburger
// const toggleBtn = document.querySelector('.hamburger')
// const bars = document.querySelector('.bar')
// const navbar = document.querySelector('.navbar')



  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="app__navbar-menu">
          <div className="app__navbar-hamburger " open={{open}} onClick={() => setOpen(!open)}>
            <div className={open ? 'bar toggled' :'bar'}></div>
          </div>
          {/* <HiMenuAlt4 onClick={() => setOpen(true)} /> */}
          {/* <div className="app__navbar-hamburger " onClick={() => setOpen(false)}>
                <div className={toggle ? 'bar toggled' :'bar'}></div>
              </div> */}
          {open && (
            // <motion.div
            //   // style={{ position: 'absolute', top: '0', }}
            //   initial={{ x: '0', y: '0'}}
            //   whileInView={{ x: [20, 0], opacity: [0, 1] }}
            //   transition={{ duration: 1, ease: 'easeInOut'}}
            //   className="app__navbar--wrapper"
            // >
              
              <ul className= {open ? 'app__navbar-links show-nav' :'app__navbar-links'} >
              

              {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setOpen(false)}>{item}</a>
                </li>
              ))}
              </ul>

              
            // </motion.div>
          )}
          
      </div>

      {/* <ul className="app__navbar-links show-nav">

              {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
              </ul> */}

   
    </nav>
  )
}

export default Navbar