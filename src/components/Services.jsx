import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LuTrendingUp,
  LuDollarSign,
  LuShieldAlert,
  LuCoins,
  LuFileSpreadsheet,
  LuArrowRight,
  LuActivity,
  LuSearch,
  LuCopyMinus,
  LuCheck,
  LuHeart,
  LuCar,
  LuBriefcase,
  LuPlane,
  LuCompass,
  LuBookOpen,
  LuUser,
  LuPercent,
  LuHeartHandshake
} from 'react-icons/lu'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const categories = [
    {
      title: 'Credit & CIBIL Services',
      shortTitle: 'Credit & CIBIL',
      icon: LuTrendingUp,
      image: '/images/services-cibil.png',
      desc: 'Improve your credit profile and increase your loan approval chances through expert credit management services.',
      services: [
        { name: 'CIBIL Score Improvement', desc: 'Improve your credit score using legal and proven financial strategies.', icon: LuTrendingUp },
        { name: 'CIBIL Report Analysis', desc: 'Detailed review of your credit report to identify issues and errors.', icon: LuTrendingUp },
        { name: 'Credit Report Error Correction', desc: 'Correct inaccurate information affecting your credit score.', icon: LuFileSpreadsheet },
        { name: 'CIBIL Dispute Resolution', desc: 'Raise and resolve disputes with credit bureaus professionally.', icon: LuShieldAlert },
        { name: 'Account Mismatch Correction', desc: 'Fix incorrect account information appearing in your credit report.', icon: LuCheck },
        { name: 'Duplicate Account Removal', desc: 'Remove duplicate loan or credit card records.', icon: LuCopyMinus },
        { name: 'Written-off Account Assistance', desc: 'Professional guidance for resolving written-off loan accounts.', icon: LuFileSpreadsheet },
        { name: 'Settled Account Guidance', desc: 'Advice on improving credit scores after settled accounts.', icon: LuCoins },
        { name: 'Post Write-off Settlement Support', desc: 'Support after settlement to rebuild your financial profile.', icon: LuHeartHandshake },
        { name: 'Wilful Default Guidance', desc: 'Professional consultation regarding wilful default cases.', icon: LuShieldAlert },
        { name: 'Overdue Status Update Assistance', desc: 'Help update overdue accounts after payment is successfully made.', icon: LuActivity },
        { name: 'Credit Score Monitoring', desc: 'Regular monitoring and custom improvement recommendations.', icon: LuSearch }
      ]
    },
    {
      title: 'Loan Processing Services',
      shortTitle: 'Loan Processing',
      icon: LuDollarSign,
      image: '/images/services-loans.png',
      desc: 'We assist customers in securing the right loan with competitive interest rates and hassle-free processing.',
      services: [
        { name: 'Personal Loan', desc: 'Quick unsecured loans for education, travel, medical emergencies, weddings, or personal expenses.', icon: LuUser },
        { name: 'Business Loan', desc: 'Funding solutions for startups, MSMEs, and established businesses.', icon: LuBriefcase },
        { name: 'Home Loan', desc: 'Loans for purchasing, constructing, or renovating residential properties.', icon: LuCompass },
        { name: 'Loan Against Property (LAP)', desc: 'Secure loans using residential or commercial property as collateral.', icon: LuCompass },
        { name: 'Mortgage Loan', desc: 'Long-term financing against property for various financial requirements.', icon: LuCoins },
        { name: 'Gold Loan', desc: 'Instant loans against gold ornaments with minimal documentation.', icon: LuCoins },
        { name: 'Balance Transfer Loan', desc: 'Transfer existing loans to reduce EMI and interest rates.', icon: LuPercent },
        { name: 'Plot Loan', desc: 'Finance for purchasing approved residential or commercial plots.', icon: LuCompass },
        { name: 'Machinery Loan', desc: 'Funding for industrial machinery and equipment.', icon: LuFileSpreadsheet },
        { name: 'Commercial & Industrial Loan', desc: 'Loans for purchasing or expanding commercial properties and industries.', icon: LuBuilding2 },
        { name: 'Working Capital Loan', desc: 'Short-term business funding for daily operational expenses.', icon: LuTrendingUp },
        { name: 'MSME Loan', desc: 'Special financial assistance for Micro, Small, and Medium Enterprises.', icon: LuBriefcase }
      ]
    },
    {
      title: 'Insurance Services',
      shortTitle: 'Insurance Services',
      icon: LuShieldAlert,
      image: '/images/services-insurance.png',
      desc: 'Protect yourself, your family, employees, and valuable assets with comprehensive insurance plans.',
      services: [
        { name: 'Life Insurance', desc: 'Financial protection for your loved ones in times of uncertainty.', icon: LuHeart },
        { name: 'Health Insurance', desc: 'Coverage for hospitalization and medical expenses.', icon: LuHeart },
        { name: 'Motor / Vehicle Insurance', desc: 'Insurance for cars, bikes, and commercial vehicles.', icon: LuCar },
        { name: 'Personal Accident Insurance', desc: 'Financial security against accidental injuries.', icon: LuShieldAlert },
        { name: 'Critical Illness Insurance', desc: 'Coverage for major illnesses like cancer and heart disease.', icon: LuActivity },
        { name: 'Travel Insurance', desc: 'Protection against travel-related risks and emergencies.', icon: LuPlane },
        { name: 'Corporate Insurance', desc: 'Insurance solutions for businesses and organizations.', icon: LuBriefcase },
        { name: 'Liability Insurance', desc: 'Protection against legal liabilities.', icon: LuShieldAlert },
        { name: 'Group Health Insurance', desc: 'Employee health insurance plans.', icon: LuUsers2 },
        { name: 'Term Insurance', desc: 'Affordable life insurance with high coverage.', icon: LuCompass },
        { name: 'Child Education Plans', desc: 'Secure your child\'s future education.', icon: LuBookOpen },
        { name: 'Retirement & Pension Plans', desc: 'Build long-term financial security after retirement.', icon: LuCoins }
      ]
    },
    {
      title: 'Financial Consultation',
      shortTitle: 'Consultation',
      icon: LuCoins,
      image: '/images/services-consultation.png',
      desc: 'Expert financial advice to help you make smarter financial decisions.',
      services: [
        { name: 'Loan Eligibility Check', desc: 'Pre-check your profile against multi-bank parameters.', icon: LuCheck },
        { name: 'Bank Profile Assessment', desc: 'In-depth assessment of your banking transactions and viability.', icon: LuSearch },
        { name: 'Debt Management', desc: 'Strategies to consolidate, manage, and reduce debts.', icon: LuTrendingUp },
        { name: 'Financial Planning', desc: 'Tailored advice to help meet your short-term and long-term financial goals.', icon: LuCompass },
        { name: 'EMI Restructuring Guidance', desc: 'Restructure EMIs to align with your monthly cash flows.', icon: LuPercent },
        { name: 'Credit Improvement Strategy', desc: 'Step-by-step custom roadmap to restore healthy credit scores.', icon: LuTrendingUp }
      ]
    },
    {
      title: 'Banking & Documentation',
      shortTitle: 'Documentation',
      icon: LuFileSpreadsheet,
      image: '/images/services-documentation.png',
      desc: 'Complete assistance for banking paperwork and loan documentation.',
      services: [
        { name: 'Loan Documentation Support', desc: 'Detailed support in compiling income papers, deeds, and files.', icon: LuFileSpreadsheet },
        { name: 'Online Application Assistance', desc: 'Step-by-step guidance in completing electronic filings.', icon: LuCompass },
        { name: 'Bank Liaison Services', desc: 'Representing your concerns directly with bank staff for faster approvals.', icon: LuHeartHandshake },
        { name: 'Income & Financial Profile Review', desc: 'Reviewing tax and salary statements to build a solid case.', icon: LuTrendingUp },
        { name: 'Application Error Correction', desc: 'Modifying errors in applications before they trigger rejection.', icon: LuFileSpreadsheet }
      ]
    },
    {
      title: 'Corporate Services & Compliance',
      shortTitle: 'Corporate & Compliance',
      icon: LuBriefcase,
      image: '/images/services-corporate.png',
      desc: 'Expert support for business registrations, regulatory filings, corporate tax compliance, and legal auditing.',
      services: [
        { name: 'Business Registration', desc: 'End-to-end incorporation services for Private Limited, LLP, Partnership, and Sole Proprietorship firms.', icon: LuBriefcase },
        { name: 'GST Compliance', desc: 'Hassle-free GST registration, timely filing of monthly/quarterly returns, and reconciliation.', icon: LuFileSpreadsheet },
        { name: 'Income Tax Filing', desc: 'Accurate tax computation, preparation, and professional filing of IT returns for businesses and individuals.', icon: LuTrendingUp },
        { name: 'MCA Compliance', desc: 'Managing corporate secretarial activities, annual RoC filings, and statutory regulatory requirements.', icon: LuShieldAlert },
        { name: 'HR & Payroll Management', desc: 'Streamlined employee management, salary disbursements, PF, ESIC compliance, and contract drafting.', icon: LuBriefcase }
      ]
    }
  ]

  // Fallback icon selector if any specific icon component gets overwritten or lacks reference
  const renderIcon = (IconComp) => {
    if (!IconComp) return <LuTrendingUp className="h-6 w-6" />
    return <IconComp className="h-6 w-6 text-secondary" />
  }

  // Placeholder component used inline if local scope requires it
  function LuBuilding2(props) {
    return <LuFileSpreadsheet {...props} />
  }
  function LuUsers2(props) {
    return <LuUser {...props} />
  }

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Comprehensive Services
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg">
            We provide specialized solutions to rebuild your credit history and secure the best finance options.
          </p>
          <div className="h-1.5 w-20 bg-secondary rounded mx-auto mt-2" />
        </div>

        {/* Tab Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat, idx) => {
            const TabIcon = cat.icon
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center space-x-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === idx
                    ? 'text-white scale-105 shadow-md shadow-primary/10'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-700 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <TabIcon className={`h-4.5 w-4.5 z-10 ${activeTab === idx ? 'text-secondary animate-pulse' : 'text-slate-400'}`} />
                <span className="z-10">{cat.shortTitle}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Category Intro Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl">
                {/* Category Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-100 bg-slate-50 flex items-center justify-center">
                  <img
                    src={categories[activeTab].image}
                    alt={categories[activeTab].title}
                    className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary flex items-center gap-3">
                    <span className="p-2 bg-primary/10 rounded-xl text-primary block">
                      {React.createElement(categories[activeTab].icon, { className: 'h-6 w-6 text-secondary' })}
                    </span>
                    {categories[activeTab].title}
                  </h3>
                  <p className="text-slate-600 font-light text-base leading-relaxed">
                    {categories[activeTab].desc}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="bg-secondary/15 hover:bg-secondary/25 text-primary-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm w-full lg:w-auto shrink-0 border border-secondary/35"
              >
                <span>Consult on this</span>
                <LuArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Services Grid list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[activeTab].services.map((serv, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start space-x-4 group"
                >
                  <div className="bg-primary/5 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    {renderIcon(serv.icon)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-base group-hover:text-primary transition-colors duration-300">
                      {serv.name}
                    </h4>
                    <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
