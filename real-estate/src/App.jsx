import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
        <Navbar />
        <Header />
        <About />
        <Projects />
    </div>
  )
}

export default App
