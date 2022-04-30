import React from 'react'

import { About, Footer, Home, Skills, Questionnaire, Form, Showcase, Service } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Showcase />
      <About />
      <Service />
      <Form />
      {/* <Questionnaire /> */}
      <Footer />

    </div>
  )
}

export default App