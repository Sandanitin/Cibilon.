import React, { useState, useEffect } from 'react'
import { LuPhone, LuArrowUp, LuMessageCircle } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingWidgets() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3.5 items-end">
      
      {/* Call Button */}
      <a
        href="tel:+919999999999"
        className="bg-primary hover:bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center glow-primary"
        aria-label="Call Cibilon Support"
      >
        <LuPhone className="h-6 w-6 text-secondary animate-pulse" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999?text=Hello%20Cibilon%20Team%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20my%20credit%20score%20%2F%20loan%20requirements."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-emerald-400/20"
        aria-label="Chat via WhatsApp"
      >
        <LuMessageCircle className="h-6 w-6 fill-white text-emerald-500" />
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="bg-secondary text-primary-950 p-3.5 rounded-full shadow-xl hover:bg-amber-400 transition-colors duration-250 flex items-center justify-center hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
          >
            <LuArrowUp className="h-5 w-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
      
    </div>
  )
}
