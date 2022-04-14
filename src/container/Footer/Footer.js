import React from 'react'

import { AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { images } from '../../constants'


import './Footer.scss'


const Footer = () => {
  return (
    <footer id="app__footer">
      <div className="footer-content">
        {/* <img className="footer-logo" src={images.logo} alt="logo" /> */}
        <h1 className="footer-title">Let's get started!</h1>
        <div className="footer-email">
          <AiOutlineMail className="mailicon" />
          <a href="mailto:xpossiblestudio@gmail.com">xpossiblestudio@gmail.com</a>
        </div>
        <p className="footer-find-text">Find out more</p>
        <div className="footer-social-icons">
          <AiOutlineInstagram className="social-icon" />
          <AiOutlineFacebook className="social-icon" />
          <AiOutlineLinkedin className="social-icon" />
        </div>

        {/* footer navigation */}
        <ul className="footer-nav">
          <li><h3 className="nav-title"> Menu</h3></li>
          {['home', 'about', 'contact', 'showcase', 'service'].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>&copy; xPossible Studio 2022</p>
      </div>
    </footer >
  )
}

export default Footer