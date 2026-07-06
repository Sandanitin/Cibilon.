import React from 'react'
import { motion } from 'framer-motion'

export default function WorkProcess() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Free Consultation',
      desc: 'Connect with our expert financial advisors to evaluate your CIBIL profile or loan requirements.',
      image: '/images/step-consultation.png'
    },
    {
      step: 'Step 2',
      title: 'Profile & Document Review',
      desc: 'Seamless documentation support to gather required papers, tax records, and ID proofs.',
      image: '/images/step-documents.png'
    },
    {
      step: 'Step 3',
      title: 'Eligibility Assessment',
      desc: 'We analyze your documentation against strict eligibility rules of multiple lending partners.',
      image: '/images/value-solutions.png'
    },
    {
      step: 'Step 4',
      title: 'Bank Selection',
      desc: 'Find and select the right bank with the most competitive interest rates for your profile.',
      image: '/images/value-partners.png'
    },
    {
      step: 'Step 5',
      title: 'Application Submission',
      desc: 'Professional filing of error-free applications to optimize and hasten verification checks.',
      image: '/images/value-processing.png'
    },
    {
      step: 'Step 6',
      title: 'Verification Process',
      desc: 'Liaison and coordinate with banks and credit bureaus through physical or digital verifications.',
      image: '/images/about-workspace.png'
    },
    {
      step: 'Step 7',
      title: 'Loan Approval',
      desc: 'Direct follow-up and liaison with bank staff to push applications through the approval pipeline.',
      image: '/images/services-documentation.png'
    },
    {
      step: 'Step 8',
      title: 'Disbursement & Post-Service Support',
      desc: 'Funds successfully disbursed or credit score repaired, along with complete handback support.',
      image: '/images/value-transparent.png'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Our Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg">
            We follow a streamlined, error-free 6-step process to ensure maximum approval rates and swift resolution.
          </p>
          <div className="h-1.5 w-20 bg-secondary rounded mx-auto mt-2" />
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 relative"
        >
          {steps.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                variants={stepVariants}
                className="relative bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden group hover:shadow-xl hover:border-slate-200 transition-all duration-300 cursor-pointer"
              >
                {/* Photo container (Height adjusted: h-24 on mobile, h-48 on desktop) */}
                <div className="w-full h-24 sm:h-48 relative overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                  
                  {/* Step Badge (Smaller padding/font on mobile) */}
                  <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-secondary text-primary-950 font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs tracking-wider shadow-md">
                    {item.step}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-primary font-bold text-xs sm:text-lg group-hover:text-secondary transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-light text-[10px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  {/* Progress indicators (desktop only to maintain mobile compact layout) */}
                  <div className="mt-4 hidden sm:flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-2.5 rounded-full transition-all duration-300 ${
                            i <= idx ? 'bg-secondary' : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-semibold">{idx + 1}/8 Done</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
