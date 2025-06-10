import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  CheckIcon, 
  XMarkIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PricingSection = () => {
  const { language } = useTheme();
  const [billingCycle, setBillingCycle] = useState('project');

  const content = {
    de: {
      title: "Transparente Preise",
      subtitle: "Faire Preise für jedes Budget – keine versteckten Kosten",
      billingToggle: {
        project: "Projektpreise",
        monthly: "Monatlich"
      },
      packages: [
        {
          name: "Starter",
          type: "Wix Studio",
          price: { project: "€499", monthly: "€49" },
          description: "Perfekt für kleine Unternehmen und Startups",
          features: [
            "5 Seiten inklusive",
            "Responsive Design",
            "Basic SEO Setup",
            "Kontaktformular",
            "Social Media Integration",
            "1 Monat Support"
          ],
          notIncluded: [
            "E-Commerce Funktionen",
            "Custom Code",
            "Advanced Analytics"
          ],
          popular: false,
          color: "blue"
        },
        {
          name: "Business",
          type: "Wix Studio Pro",
          price: { project: "€1,299", monthly: "€99" },
          description: "Ideal für wachsende Unternehmen",
          features: [
            "15 Seiten inklusive",
            "Premium Design",
            "Advanced SEO",
            "E-Commerce Integration",
            "Booking System",
            "Analytics Setup",
            "3 Monate Support",
            "Content Management Training"
          ],
          notIncluded: [
            "Custom Features",
            "API Integrationen"
          ],
          popular: true,
          color: "purple"
        },
        {
          name: "Enterprise",
          type: "Individual",
          price: { project: "€3,999", monthly: "€299" },
          description: "Maßgeschneiderte Lösungen für große Projekte",
          features: [
            "Unlimited Seiten",
            "Custom React Development",
            "API Integrationen",
            "Performance Optimierung",
            "Security Features",
            "Admin Dashboard",
            "6 Monate Support",
            "Hosting inklusive",
            "Schulungen & Dokumentation"
          ],
          notIncluded: [],
          popular: false,
          color: "indigo"
        }
      ],
      addOns: [
        { name: "SEO Premium Package", price: "€299" },
        { name: "Logo Design", price: "€199" },
        { name: "Content Creation", price: "€99/Seite" },
        { name: "Zusätzliche Sprache", price: "€199" },
        { name: "E-Commerce Erweitert", price: "€399" }
      ]
    },
    en: {
      title: "Transparent Pricing",
      subtitle: "Fair prices for every budget – no hidden costs",
      billingToggle: {
        project: "Project Prices",
        monthly: "Monthly"
      },
      packages: [
        {
          name: "Starter",
          type: "Wix Studio",
          price: { project: "€499", monthly: "€49" },
          description: "Perfect for small businesses and startups",
          features: [
            "5 pages included",
            "Responsive Design",
            "Basic SEO Setup",
            "Contact Form",
            "Social Media Integration",
            "1 month support"
          ],
          notIncluded: [
            "E-Commerce Features",
            "Custom Code",
            "Advanced Analytics"
          ],
          popular: false,
          color: "blue"
        },
        {
          name: "Business",
          type: "Wix Studio Pro",
          price: { project: "€1,299", monthly: "€99" },
          description: "Ideal for growing businesses",
          features: [
            "15 pages included",
            "Premium Design",
            "Advanced SEO",
            "E-Commerce Integration",
            "Booking System",
            "Analytics Setup",
            "3 months support",
            "Content Management Training"
          ],
          notIncluded: [
            "Custom Features",
            "API Integrations"
          ],
          popular: true,
          color: "purple"
        },
        {
          name: "Enterprise",
          type: "Custom",
          price: { project: "€3,999", monthly: "€299" },
          description: "Tailored solutions for large projects",
          features: [
            "Unlimited pages",
            "Custom React Development",
            "API Integrations",
            "Performance Optimization",
            "Security Features",
            "Admin Dashboard",
            "6 months support",
            "Hosting included",
            "Training & Documentation"
          ],
          notIncluded: [],
          popular: false,
          color: "indigo"
        }
      ],
      addOns: [
        { name: "SEO Premium Package", price: "€299" },
        { name: "Logo Design", price: "€199" },
        { name: "Content Creation", price: "€99/page" },
        { name: "Additional Language", price: "€199" },
        { name: "E-Commerce Extended", price: "€399" }
      ]
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'project'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }`}
            >
              {content[language].billingToggle.project}
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }`}
            >
              {content[language].billingToggle.monthly}
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content[language].packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 ${
                pkg.popular 
                  ? 'border-2 border-purple-500 scale-105 shadow-2xl' 
                  : 'border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <StarIcon className="h-4 w-4 mr-1" />
                    {language === 'de' ? 'Beliebt' : 'Popular'}
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className={`text-sm font-medium mb-4 ${
                  pkg.color === 'blue' ? 'text-blue-600' :
                  pkg.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'
                }`}>
                  {pkg.type}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {pkg.price[billingCycle]}
                  </span>
                  {billingCycle === 'monthly' && (
                    <span className="text-gray-600 dark:text-gray-300">/Monat</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                      pkg.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                      pkg.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' : 'bg-indigo-100 dark:bg-indigo-900'
                    }`}>
                      <CheckIcon className={`h-3 w-3 ${
                        pkg.color === 'blue' ? 'text-blue-600' :
                        pkg.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'
                      }`} />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </motion.div>
                ))}

                {/* Not Included */}
                {pkg.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center opacity-50">
                    <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                      <XMarkIcon className="h-3 w-3 text-gray-400" />
                    </div>
                    <span className="text-gray-400 text-sm line-through">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                    : pkg.color === 'blue'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : pkg.color === 'purple'
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                } hover:scale-105`}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {language === 'de' ? 'Jetzt starten' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {language === 'de' ? 'Zusätzliche Services' : 'Additional Services'}
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {content[language].addOns.map((addon, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {addon.name}
                </p>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {addon.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-8 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-sm">
                {language === 'de' ? 'Geld-zurück-Garantie' : 'Money-back guarantee'}
              </span>
            </div>
            <div className="flex items-center">
              <BoltIcon className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-sm">
                {language === 'de' ? 'Schnelle Umsetzung' : 'Fast implementation'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;