import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import BlurBlob from './BlurBlob'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'


const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-black overflow-x-hidden">

        <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%' }}></BlurBlob>

       <div className="absolute inset-0 z-0 overflow-hidden
    bg-[linear-gradient(to_right,#4f4f4f42_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f42_1px,transparent_1px)]
    bg-[size:14px_24px]
    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
    [mask-repeat:no-repeat]
    [mask-size:100%_100%]
    [webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
  </div>
       <div className="relative pt-20">
        <Navbar/>
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>
       </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 p-2.5 sm:p-3 rounded-full text-white shadow-lg cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #8245ec, #a855f7)',
              boxShadow: '0 0 15px rgba(130, 69, 236, 0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
