import React from 'react'
import { motion } from 'framer-motion'
import { LuQuote, LuStar } from 'react-icons/lu'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Business Owner, Mumbai',
      quote: 'My CIBIL score was stuck at 610 due to a dispute over a credit card charge. Cibilon analyzed my report, resolved the dispute with the bureau, and raised my score to 765. I was able to secure a business loan of 25 Lakhs within weeks!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
    },
    {
      name: 'Priya Patel',
      role: 'IT Professional, Bengaluru',
      quote: 'I had multiple rejections for home loans because of mismatch errors in my past loans. The consultants at Cibilon helped rectify the paperwork and represented my case to HDFC. Highly recommended for their transparency.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    },
    {
      name: 'Amit Verma',
      role: 'Freelancer, New Delhi',
      quote: 'Cibilon assisted me throughout my personal loan documentation. As a freelancer, showing stable income to banks is tricky, but they restructured my profile paperwork beautifully. Got the funds at competitive rates!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg">
            Read real stories from individuals and business owners who restored their financial credit scores and secured capital.
          </p>
          <div className="h-1.5 w-20 bg-secondary rounded mx-auto mt-2" />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-primary/10">
                <LuQuote className="h-10 w-10 transform scale-x-[-1]" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <LuStar key={i} className="h-4.5 w-4.5 text-secondary fill-secondary" />
                  ))}
                </div>

                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Profile */}
              <div className="mt-8 flex items-center space-x-4 pt-6 border-t border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-50"
                />
                <div>
                  <h4 className="font-bold text-primary text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 font-medium text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
