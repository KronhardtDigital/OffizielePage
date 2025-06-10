import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ContactSection = () => {
  const { language } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'wix',
    budget: 'starter',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    de: {
      title: "Lassen Sie uns sprechen",
      subtitle: "Bereit für Ihr nächstes digitales Projekt? Kontaktieren Sie uns für eine kostenlose Beratung.",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        company: "Unternehmen (optional)",
        projectType: "Projekttyp",
        budget: "Budget",
        message: "Nachricht",
        submit: "Kostenlose Beratung anfragen",
        submitting: "Wird gesendet...",
        success: "Nachricht erfolgreich gesendet!"
      },
      projectTypes: {
        wix: "Wix Studio Website",
        custom: "Individuelle Entwicklung",
        ecommerce: "E-Commerce Shop",
        redesign: "Website Redesign"
      },
      budgets: {
        starter: "€500 - €1.000",
        business: "€1.000 - €3.000",
        enterprise: "€3.000+"
      },
      contact: {
        title: "Kontakt Info",
        email: "info@kronhardt-digital.de",
        phone: "+49 (0) 123 456 789",
        address: "Musterstraße 123, 12345 Berlin",
        hours: "Mo-Fr: 9:00 - 18:00 Uhr"
      },
      features: [
        "Kostenlose Erstberatung",
        "Transparente Preisgestaltung",
        "Schnelle Rückmeldung",
        "Persönliche Betreuung"
      ]
    },
    en: {
      title: "Let's Talk",
      subtitle: "Ready for your next digital project? Contact us for a free consultation.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company (optional)",
        projectType: "Project Type",
        budget: "Budget",
        message: "Message",
        submit: "Request Free Consultation",
        submitting: "Sending...",
        success: "Message sent successfully!"
      },
      projectTypes: {
        wix: "Wix Studio Website",
        custom: "Custom Development",
        ecommerce: "E-Commerce Shop",
        redesign: "Website Redesign"
      },
      budgets: {
        starter: "€500 - €1,000",
        business: "€1,000 - €3,000",
        enterprise: "€3,000+"
      },
      contact: {
        title: "Contact Info",
        email: "info@kronhardt-digital.de",
        phone: "+49 (0) 123 456 789",
        address: "Sample Street 123, 12345 Berlin",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM"
      },
      features: [
        "Free initial consultation",
        "Transparent pricing",
        "Quick response",
        "Personal support"
      ]
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'wix',
          budget: 'starter',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1623410439361-22ac19216577"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [null, -100]
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {content[language].form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Max Mustermann"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {content[language].form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="max@beispiel.de"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {content[language].form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                {/* Project Type & Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      {content[language].form.projectType}
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    >
                      {Object.entries(content[language].projectTypes).map(([key, label]) => (
                        <option key={key} value={key} className="bg-gray-800 text-white">
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      {content[language].form.budget}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    >
                      {Object.entries(content[language].budgets).map(([key, label]) => (
                        <option key={key} value={key} className="bg-gray-800 text-white">
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {content[language].form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder={language === 'de' ? 'Erzählen Sie uns von Ihrem Projekt...' : 'Tell us about your project...'}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {content[language].form.submit}
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {content[language].form.success}
                </h3>
                <p className="text-blue-100">
                  {language === 'de' 
                    ? 'Wir melden uns in Kürze bei Ihnen!'
                    : 'We\'ll get back to you soon!'
                  }
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                {content[language].contact.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-blue-100 text-sm">Email</p>
                    <p className="text-white font-medium">{content[language].contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-blue-100 text-sm">Telefon</p>
                    <p className="text-white font-medium">{content[language].contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-blue-100 text-sm">Adresse</p>
                    <p className="text-white font-medium">{content[language].contact.address}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <ClockIcon className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-blue-100 text-sm">Bürozeiten</p>
                    <p className="text-white font-medium">{content[language].contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">
                {language === 'de' ? 'Warum Kronhardt Digital?' : 'Why Kronhardt Digital?'}
              </h3>
              <div className="space-y-3">
                {content[language].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-blue-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;