import React from 'react'

import { About, Footer, Home, Skills, Testimonial, Showcase } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      {/* <Showcase /> */}
      <About />
      {/* <Skills /> */}
      {/* <Testimonial /> */}
      {/* <Footer /> */}

    </div>
  )
}

export default App