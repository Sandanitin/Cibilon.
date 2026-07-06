import React from 'react'
import { LuShieldCheck, LuFacebook, LuTwitter, LuLinkedin, LuInstagram, LuMail, LuPhone } from 'react-icons/lu'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Our Services', href: '#services' },
    { name: 'Work Process', href: '#process' },
    { name: 'Frequently Asked Questions', href: '#faq' },
    { name: 'Contact Us', href: '#contact' }
  ]

  const services = [
    { name: 'CIBIL Improvement', href: '#services' },
    { name: 'Report Error Correction', href: '#services' },
    { name: 'Personal & Business Loans', href: '#services' },
    { name: 'Home & Property Loans', href: '#services' },
    { name: 'Life & Health Insurance', href: '#services' },
    { name: 'Banking & Documentation', href: '#services' }
  ]

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex items-center space-x-2 w-fit">
            <img
              src="/images/logo.png"
              alt="Cibilon Logo"
              className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>
          <p className="text-sm font-light leading-relaxed text-slate-400 max-w-sm">
            India's premier financial consultancy. We specialize in credit report corrections, CIBIL scores booster, funding disbursements, and comprehensive risk cover policies.
          </p>
          <div className="flex items-center space-x-3 text-white">
            <a href="https://facebook.com" className="p-2.5 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-950 transition-all duration-300">
              <LuFacebook className="h-4.5 w-4.5" />
            </a>
            <a href="https://twitter.com" className="p-2.5 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-950 transition-all duration-300">
              <LuTwitter className="h-4.5 w-4.5" />
            </a>
            <a href="https://linkedin.com" className="p-2.5 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-950 transition-all duration-300">
              <LuLinkedin className="h-4.5 w-4.5" />
            </a>
            <a href="https://instagram.com" className="p-2.5 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-950 transition-all duration-300">
              <LuInstagram className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-3 space-y-5">
          <h4 className="font-bold text-white text-base tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-light">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-secondary transition-colors duration-250">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-3 space-y-5">
          <h4 className="font-bold text-white text-base tracking-wide uppercase">Key Services</h4>
          <ul className="space-y-2.5 text-sm font-light">
            {services.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-secondary transition-colors duration-250">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="font-bold text-white text-base tracking-wide uppercase">Contact Info</h4>
          <ul className="space-y-3.5 text-sm font-light">
            <li className="flex items-start space-x-2">
              <LuPhone className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-start space-x-2">
              <LuMail className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span>info@cibilon.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyrights and Terms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-light text-slate-500 gap-4">
        <div className="text-center sm:text-left space-y-1">
          <div>
            © 2026 Cibilon. All Rights Reserved.
          </div>
          <div>
            Designed and Developed by{' '}
            <a
              href="https://www.vikrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors font-medium"
            >
              Vikrin Pvt Ltd
            </a>
          </div>
        </div>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
