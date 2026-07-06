import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuPhone, LuMail, LuMapPin, LuClock, LuSend, LuCheck } from 'react-icons/lu'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 800)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Contact Cibilon
          </h2>
          <p className="text-slate-600 font-light text-base">
            Fill out the form below or connect with us directly. Our team responds within 24 business hours.
          </p>
          <div className="h-1.5 w-20 bg-secondary rounded mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="mx-auto bg-emerald-100 text-emerald-600 p-4 rounded-full w-fit">
                  <LuCheck className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Inquiry Sent Successfully!</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto">
                  Thank you for contacting Cibilon. One of our credit advisors will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary-700 font-semibold text-sm underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Required</label>
                    <select
                      required
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium bg-white"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="CIBIL Improvement">Credit & CIBIL Score Improvement</option>
                      <option value="Loan Assistance">Loan Processing (Personal/Business/Home)</option>
                      <option value="Insurance Cover">Insurance Plans (Life/Health/Vehicle)</option>
                      <option value="Financial Consultation">General Financial Consultation</option>
                      <option value="Banking Documents">Banking Paperwork & Documentation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">How can we help you?</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your query..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 text-base"
                >
                  <span>Submit Consultation Request</span>
                  <LuSend className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                  <LuPhone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Call Us</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5 font-medium">+91 99999 99999</p>
                  <p className="text-slate-400 text-xxs font-light">Mon-Sat (9 AM - 6 PM)</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                  <LuMail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Email Us</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5 font-medium">info@cibilon.com</p>
                  <p className="text-slate-400 text-xxs font-light">24x7 Online support</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-4">
              <div className="bg-secondary/15 text-secondary p-3 rounded-xl">
                <LuMapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary text-sm sm:text-base">Registered Office Address</h4>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  Cibilon Financial Towers, 4th Floor, Block B,<br />
                  Connaught Place, New Delhi, India - 110001
                </p>
              </div>
            </div>

            {/* Google Maps Iframe placeholder/map */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-md overflow-hidden h-60 relative w-full">
              <iframe
                title="Cibilon Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.996767228965!2d77.21832047630282!3d28.629864275667362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd365a6b8ef3%3A0xea8706ee979c09c5!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
