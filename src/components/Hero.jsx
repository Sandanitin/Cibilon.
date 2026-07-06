import React from 'react'
import { motion } from 'framer-motion'
import { LuTrendingUp, LuDollarSign, LuShieldAlert, LuUsers, LuChevronRight } from 'react-icons/lu'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Navy blue overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 px-4 py-1.5 rounded-full text-secondary text-sm font-semibold tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span>Premium Financial Consultancy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Better Credit. <br />
            <span className="bg-gradient-to-r from-secondary via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Better Opportunities.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed"
          >
            Your trusted financial partner for CIBIL improvement, loans, insurance, and financial consultation. We help individuals and businesses achieve financial success with expert guidance and quick processing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-secondary to-yellow-500 text-primary-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-secondary/20 hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center space-x-2 text-base"
            >
              <span>Get Free Consultation</span>
              <LuChevronRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-md border border-white/20 hover:border-white/40 active:scale-95 transition-all text-center text-base"
            >
              Apply Now
            </a>
          </motion.div>
        </div>

        {/* Hero Right Visuals (Floating Cards) */}
        <div className="lg:col-span-5 relative min-h-[350px] sm:min-h-[450px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-primary/20 rounded-full blur-3xl opacity-50 z-0" />

          {/* Floating Cards Grid / Absolute Stack */}
          <div className="w-full relative z-10 max-w-sm sm:max-w-md h-full space-y-4 sm:space-y-6 px-4">
            {/* Card 1: Credit Score */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{
                x: { duration: 0.6, delay: 0.4 },
                opacity: { duration: 0.6, delay: 0.4 },
                y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="glass-panel-dark p-4 sm:p-5 rounded-2xl flex items-center space-x-4 shadow-xl cursor-pointer"
            >
              <div className="bg-secondary/20 p-3 rounded-xl text-secondary">
                <LuTrendingUp className="h-6 sm:h-7 w-6 sm:w-7" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base">CIBIL Score Analysis</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Expert analysis and legal boost strategies</p>
                <div className="mt-1 flex items-center space-x-1">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">CIBIL 750+</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Loan Approval */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                x: { duration: 0.6, delay: 0.5 },
                opacity: { duration: 0.6, delay: 0.5 },
                y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.2 }
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="glass-panel-dark p-4 sm:p-5 rounded-2xl flex items-center space-x-4 shadow-xl translate-x-2 sm:translate-x-6 cursor-pointer"
            >
              <div className="bg-emerald-500/20 p-3 rounded-xl text-emerald-400">
                <LuDollarSign className="h-6 sm:h-7 w-6 sm:w-7" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base">Fast Loan Approvals</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Pre-eligibility check & documentation help</p>
                <div className="mt-1 flex items-center space-x-1">
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded font-semibold">Quick Processing</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Insurance Cover */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                x: { duration: 0.6, delay: 0.6 },
                opacity: { duration: 0.6, delay: 0.6 },
                y: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.4 }
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="glass-panel-dark p-4 sm:p-5 rounded-2xl flex items-center space-x-4 shadow-xl cursor-pointer"
            >
              <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                <LuShieldAlert className="h-6 sm:h-7 w-6 sm:w-7" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base">Comprehensive Protection</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Top-tier health, term & asset coverages</p>
                <div className="mt-1 flex items-center space-x-1">
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-semibold">10+ Partners</span>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Happy Customers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1.6 },
                opacity: { duration: 0.6, delay: 0.7 }
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="glass-panel p-4 sm:p-5 rounded-2xl flex items-center justify-between shadow-2xl relative overflow-hidden group translate-x-1 sm:translate-x-3 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                  <LuUsers className="h-5 sm:h-6 w-5 sm:w-6" />
                </div>
                <div>
                  <h4 className="text-primary font-extrabold text-base sm:text-lg">5,000+</h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">Satisfied Clients Served</p>
                </div>
              </div>
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Client 1" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Client 2" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Client 3" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
