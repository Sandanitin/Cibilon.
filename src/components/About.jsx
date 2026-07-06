import React from 'react'
import { motion } from 'framer-motion'
import { LuBriefcase, LuTarget, LuEye, LuShield, LuScale, LuUserCheck } from 'react-icons/lu'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const highlights = [
    { title: 'Bureau Liaisoning', desc: 'Direct updates with credit bureau offices.', icon: LuShield },
    { title: 'Complete Transparency', desc: 'No hidden charges or upfront claims.', icon: LuScale },
    { title: '95% Approval Rate', desc: 'Unmatched profile-matching algorithm.', icon: LuUserCheck }
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Circular Photo with Gold Crescent Arc */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px]">
              
              {/* Gold Crescent Arc wrap (hugs the circle perfectly) */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border-[10px] sm:border-[14px] border-secondary border-t-transparent border-l-transparent rotate-[35deg] pointer-events-none z-10" />

              {/* Main Circular Image */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white bg-slate-50 relative z-0">
                <img
                  src="/images/about-workspace.png"
                  alt="Finance Workspace"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Subtle background glow */}
              <div className="absolute inset-4 rounded-full bg-primary/5 blur-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: Slide Text Details with rich copywriting content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full inline-block">
                Know About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight font-display">
                About Cibilon
              </h2>
              {/* Double Line Underline Accent */}
              <div className="flex items-center space-x-1.5 pt-1">
                <div className="h-1 w-24 bg-secondary rounded" />
                <div className="h-1 w-4 bg-primary rounded" />
              </div>
            </motion.div>

            {/* Rich Content Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-5 text-slate-600 font-light text-base leading-relaxed">
              <p>
                <strong>Cibilon</strong> is a trusted financial consultancy dedicated to helping individuals and businesses improve their financial health. We specialize in CIBIL score improvement, loan processing, insurance solutions, banking documentation, and personalized financial consultation.
              </p>
              <p className="border-l-4 border-secondary pl-4 italic text-slate-700 bg-secondary/5 py-2.5 rounded-r-xl">
                "Our mission is to simplify financial services by providing transparent guidance, quick processing, and expert support throughout every step of the customer journey."
              </p>
              <p>
                We liaison with major credit bureaus and top financial institutions to secure the best results for you, ensuring legal, proven strategies.
              </p>
            </motion.div>

            {/* Key highlights list */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="bg-primary/5 text-primary p-2 rounded-lg shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs sm:text-sm">{h.title}</h4>
                      <p className="text-slate-500 font-light text-xxs leading-normal mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* Mission & Vision Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Mission Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-primary/25 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LuTarget className="h-6 w-6" />
                </div>
                <h3 className="text-primary font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  Deliver reliable financial solutions with complete transparency, quick turnaround times, and professional ethics.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-secondary/25 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LuEye className="h-6 w-6" />
                </div>
                <h3 className="text-primary font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  Become India's most trusted financial consultancy by providing data-driven credit improvement and funding solutions.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
