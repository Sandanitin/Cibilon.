import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LuUsers, LuBuilding, LuAward, LuCalendarClock } from 'react-icons/lu'

function Counter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Clean numerical value extraction (e.g., '5000' from '5000+')
  const target = parseInt(value.replace(/[^0-9]/g, ''), 10)

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const step = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const statsList = [
    {
      value: '5000',
      suffix: '+',
      label: 'Happy Customers',
      icon: LuUsers,
      desc: 'Assisted in loans and credit repairs'
    },
    {
      value: '100',
      suffix: '+',
      label: 'Banking Partners',
      icon: LuBuilding,
      desc: 'Top nationalized banks & NBFCs'
    },
    {
      value: '95',
      suffix: '%',
      label: 'Approval Success Rate',
      icon: LuAward,
      desc: 'Highest ratio in financial consultancy'
    },
    {
      value: '10',
      suffix: '+',
      label: 'Years of Experience',
      icon: LuCalendarClock,
      desc: 'Providing sound consulting guidance'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0B3D91,transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,#D4AF37,transparent_50%)] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-secondary/20 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mx-auto bg-secondary/10 p-3.5 rounded-xl text-secondary w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="text-secondary font-bold text-sm sm:text-base tracking-wide uppercase mb-1">
                  {stat.label}
                </h4>
                <p className="text-slate-400 font-light text-xs sm:text-sm">
                  {stat.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
