import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { FaArrowUp } from 'react-icons/fa'
import ProfileImage from '../assets/about.jpg'

const AnimatedText = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm Fariha"
  const [isRepeating, setIsRepeating] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    let currentIndex = 0

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
        timeoutId = setTimeout(typeText, 100)
      } else {
        // Wait for 2 seconds, then start erasing
        timeoutId = setTimeout(() => {
          eraseText()
        }, 2000)
      }
    }

    const eraseText = () => {
      if (currentIndex >= 0) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex--
        timeoutId = setTimeout(eraseText, 50)
      } else {
        // Reset and start over after 1 second
        timeoutId = setTimeout(() => {
          setIsRepeating(prev => !prev)
        }, 1000)
      }
    }

    typeText()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isRepeating])

  return (
    <h1 className={styles.heroHeadText}>
      {displayText}
      <span className='animate-pulse'>|</span>
    </h1>
  )
}

const Hero = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false)

  const scrollToContact = () => {
    // Try multiple methods to find the contact section
    const contactSection = 
      document.getElementById('contact') || 
      document.querySelector('[id="contact"]') || 
      document.querySelector('.contact-section')

    if (contactSection) {
      // Calculate the scroll position 100px down from current position
      const scrollToPosition = window.pageYOffset + contactSection.getBoundingClientRect().top + 100

      // Log for debugging
      console.log('Scrolling to contact section:', {
        currentScrollPosition: window.pageYOffset,
        contactSectionTop: contactSection.getBoundingClientRect().top,
        targetScrollPosition: scrollToPosition
      })

      // Scroll to the contact section
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      })
    } else {
      // Fallback scroll method if section not found
      console.warn('Contact section not found, scrolling to bottom')
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 300 pixels
      setIsScrollVisible(window.pageYOffset > 300)
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden bg-primary'>
      <div 
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between`}
      >
        {/* Left Side: Text Content */}
        <div className='flex flex-col justify-center z-10 w-full md:w-1/2 space-y-6'>
          <div className='flex items-center space-x-4'>
            <AnimatedText />
          </div>

          <p className={styles.heroSubText}>
            Digital Marketing Strategist passionate about helping businesses 
            grow their online presence through innovative and data-driven 
            marketing solutions.
          </p>

          <div className='flex space-x-4'>
            <button 
              onClick={scrollToContact}
              className='px-6 py-3 rounded-lg 
                bg-tertiary text-white 
                hover:bg-black-100 
                transition-all duration-300 
                font-body 
                shadow-md 
                hover:shadow-lg'
            >
              Hire Me
            </button>
            <a 
              href='#projects' 
              className='px-6 py-3 rounded-lg 
                border-2 border-tertiary 
                text-white 
                hover:bg-tertiary 
                transition-all duration-300 
                font-body 
                shadow-md 
                hover:shadow-lg'
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className='hidden md:block w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-tertiary 
        group relative transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
          <img 
            src={ProfileImage} 
            alt="Profile Image" 
            className='w-full h-full object-cover 
            transition-transform duration-500 
            group-hover:scale-110 
            group-hover:rotate-3 
            group-hover:brightness-90 
            group-hover:grayscale-50 
            group-hover:contrast-150'
          />
          <div className='absolute inset-0 bg-tertiary/30 opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-500 
          flex items-center justify-center'>
            <span className='text-white text-lg font-bold opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-500 
            transform translate-y-4 
            group-hover:translate-y-0'>
              Fariha Chowdhury
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' className='group'>
          <div className='w-[35px] h-[64px] rounded-3xl border-2 border-secondary 
            flex justify-center items-start p-2 relative overflow-hidden'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 
                group-hover:bg-opacity-70 transition-all'
            />
          </div>
        </a>
      </div>

      {/* Scroll to Top Button */}
      {isScrollVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-10 right-10 z-50 
          w-12 h-12 bg-tertiary text-white 
          rounded-full flex items-center justify-center 
          shadow-lg hover:bg-black-100 
          transition-all duration-300 
          animate-bounce'
        >
          <FaArrowUp className='text-2xl' />
        </button>
      )}
    </section>
  )
}

export default Hero
