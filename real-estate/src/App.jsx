import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Testimonials />
    </div>
  )
}

export default App
