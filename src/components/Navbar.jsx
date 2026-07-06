import React, { useState, useEffect } from 'react'
import { LuMenu, LuX, LuPhone, LuShieldCheck } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <img
                src="/images/logo.png"
                alt="Cibilon Logo"
                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm tracking-wide hover:text-secondary transition-colors duration-300 ${
                    isScrolled ? 'text-slate-700' : 'text-white/95 hover:text-secondary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919999999999"
                className={`flex items-center space-x-2 font-semibold text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                <LuPhone className="h-4 w-4 text-secondary animate-bounce" />
                <span>+91 99999 99999</span>
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-primary to-primary-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 border border-primary-500/20"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <LuX className={`h-7 w-7 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              ) : (
                <LuMenu className={`h-7 w-7 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900 border-t border-slate-800 text-white shadow-2xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-800 space-y-4">
                  <a
                    href="tel:+919999999999"
                    className="flex items-center space-x-2 px-3 py-2 text-base font-semibold text-white"
                  >
                    <LuPhone className="h-5 w-5 text-secondary" />
                    <span>+91 99999 99999</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-primary-950 font-bold px-4 py-3 rounded-xl shadow-lg transition-all"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
