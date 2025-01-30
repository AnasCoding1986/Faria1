import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas } from './components'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${darkMode ? 'dark' : ''}`}>
        <div className='bg-primary dark:bg-white transition-colors duration-300'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
