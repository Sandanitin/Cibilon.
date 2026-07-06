import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import WorkProcess from './components/WorkProcess'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWidgets from './components/FloatingWidgets'

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full overflow-hidden">
              <Hero />
              <About />
              <WhyChooseUs />
              <Services />
              <WorkProcess />
              <Stats />
              <Testimonials />
              <FAQ />
              <Contact />
            </main>
          }
        />
      </Routes>
      <Footer />
      <FloatingWidgets />
    </div>
  )
}

export default App
