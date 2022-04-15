import React from 'react'

import { About, Footer, Home, Skills, Questionnaire, Showcase, Service } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      {/* <Showcase /> */}
      {/* <About /> */}
      {/* <Service /> */}
      <Questionnaire />
      <Footer />

    </div>
  )
}

export default App