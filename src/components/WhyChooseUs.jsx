import React from 'react'
import { motion } from 'framer-motion'
import {
  LuUserCheck,
  LuClock,
  LuBuilding,
  LuSlidersHorizontal,
  LuSearchCode,
  LuHeartHandshake
} from 'react-icons/lu'

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Expert Financial Consultation',
      desc: 'Our experienced financial advisors provide personalized guidance tailored to your financial goals.',
      image: '/images/value-consultation.png',
      color: 'from-blue-500/10 to-primary/10',
      iconColor: 'text-primary'
    },
    {
      title: 'Fast Processing',
      desc: 'Quick verification, documentation, and approval processes to save your valuable time.',
      image: '/images/value-processing.png',
      color: 'from-amber-500/10 to-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      title: 'Multiple Bank & Insurance Partners',
      desc: 'Access to leading banks and insurance providers for the best offers and competitive rates.',
      image: '/images/value-partners.png',
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-500'
    },
    {
      title: 'Personalized Solutions',
      desc: 'Customized financial plans based on your income, credit profile, and requirements.',
      image: '/images/value-solutions.png',
      color: 'from-purple-500/10 to-indigo-500/10',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Transparent Process',
      desc: 'No hidden charges, complete documentation, and honest guidance at every stage.',
      image: '/images/value-transparent.png',
      color: 'from-rose-500/10 to-orange-500/10',
      iconColor: 'text-rose-500'
    },
    {
      title: 'End-to-End Customer Support',
      desc: 'Dedicated assistance from consultation to final approval and after-sales support.',
      image: '/images/value-support.png',
      color: 'from-sky-500/10 to-cyan-500/10',
      iconColor: 'text-sky-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Why Choose Cibilon
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg">
            We bridge the gap between your aspirations and financial viability with absolute trust and expertise.
          </p>
          <div className="h-1.5 w-20 bg-secondary rounded mx-auto mt-2" />
        </div>

        {/* Features 2-Column Split Cards Grid (2 columns on mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8"
        >
          {points.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: '0 20px 40px -15px rgba(11, 61, 145, 0.12)',
                  borderColor: 'rgba(212, 175, 55, 0.35)'
                }}
                className="bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100 hover:bg-white shadow-sm transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group cursor-pointer"
              >
                {/* Left Side: Photo (Height adjusted: h-24 on mobile, left 40% width on tablet/desktop) */}
                <div className="w-full sm:w-2/5 h-24 sm:h-auto relative overflow-hidden shrink-0 min-h-[96px] sm:min-h-[200px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 sm:to-transparent pointer-events-none" />
                </div>

                {/* Right Side: Text details */}
                <div className="p-3 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-primary font-bold text-xs sm:text-xl mb-1.5 sm:mb-2.5 group-hover:text-secondary transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-light text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Visual Accent */}
                  <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary mt-3 sm:mt-5 group-hover:w-full transition-all duration-500 rounded" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
