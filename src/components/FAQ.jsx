import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuPlus, LuMinus } from 'react-icons/lu'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: 'What is a CIBIL Score?',
      a: 'A CIBIL Score is a 3-digit numeric summary of your credit history, ranging between 300 and 900. It is calculated by TransUnion CIBIL using your credit accounts (loans, cards) and payment records. A score of 750 or above is considered excellent and significantly enhances your chances of loan approvals.'
    },
    {
      q: 'How can I improve my credit score?',
      a: 'You can improve your score by paying EMIs and credit card bills on time, keeping credit utilization below 30%, rectifying errors or duplicate records in your report, professionally settling old outstanding write-offs, and avoiding multiple hard inquiries. Cibilon helps formulate legally sound, customized plans to achieve this.'
    },
    {
      q: 'Which documents are required for a loan?',
      a: 'Commonly required papers include identity proof (PAN, Aadhaar), address proof, the last 3–6 months of bank salary statements, 2–3 years of IT returns (for self-employed/businesses), salary slips, and property/asset documentation depending on the specific loan type.'
    },
    {
      q: 'How long does loan approval take?',
      a: 'Unsecured personal loans can be approved within 24 to 48 hours with correct digital files. Secured business or home loans can take anywhere from 7 to 15 working days, as banks require legal and technical evaluation of properties or business assets.'
    },
    {
      q: 'Can you help with rejected loan applications?',
      a: 'Yes, we specialize in resolving rejections. We analyze the root causes (low CIBIL, high debt-to-income ratio, profile mismatches, or application errors), execute correction measures, restructure outstanding profiles, and match you with lenders suited to your revised credit grade.'
    },
    {
      q: 'Do you provide insurance consultation?',
      a: 'Absolutely. We offer complete consultation for life, health, vehicle, corporate liability, travel, and group insurance. We guide you in selecting optimal coverages and premium quotes from multiple leading insurance partners in India.'
    }
  ]

  const toggle = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null)
    } else {
      setOpenIdx(idx)
    }
  }

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Help Desk
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 font-light text-base">
            Find answers to common queries regarding credit repair, loan processes, and consultations.
          </p>
          <div className="h-1.5 w-20 bg-secondary rounded mx-auto mt-2" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-primary/30 bg-primary/5 shadow-md' : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-base sm:text-lg transition-colors ${
                    isOpen ? 'text-primary' : 'text-slate-800'
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`p-1.5 rounded-lg transition-colors ${
                    isOpen ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {isOpen ? <LuMinus className="h-4.5 w-4.5" /> : <LuPlus className="h-4.5 w-4.5" />}
                  </span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 font-light leading-relaxed border-t border-slate-100/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
