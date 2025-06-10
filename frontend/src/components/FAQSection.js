import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const FAQSection = () => {
  const { language } = useTheme();
  const [openFAQ, setOpenFAQ] = useState(null);

  const content = {
    de: {
      title: "Häufig gestellte Fragen",
      subtitle: "Alles was Sie über unsere Services wissen müssen",
      faqs: [
        {
          question: "Wie lange dauert die Entwicklung einer Website?",
          answer: "Das hängt vom gewählten Service ab: Wix Studio Websites sind in 8-10 Tagen fertig, während individuelle React-Entwicklungen 2-4 Wochen benötigen. Wir halten uns strikt an unsere Zeitpläne und informieren Sie regelmäßig über den Fortschritt."
        },
        {
          question: "Was ist der Unterschied zwischen Wix Studio und individueller Entwicklung?",
          answer: "Wix Studio bietet schnelle, kostengünstige Lösungen mit bewährten Templates und einfacher Wartung. Individuelle Entwicklung ermöglicht völlige Gestaltungsfreiheit, bessere Performance und einzigartige Funktionen, benötigt aber mehr Zeit und Budget."
        },
        {
          question: "Sind die Websites mobiloptimiert?",
          answer: "Ja, alle unsere Websites sind vollständig responsive und für alle Geräte optimiert. Wir testen auf verschiedenen Bildschirmgrößen und stellen sicher, dass Ihre Website auf Smartphones, Tablets und Desktop-Computern perfekt funktioniert."
        },
        {
          question: "Übernehmen Sie auch die Wartung der Website?",
          answer: "Ja, wir bieten verschiedene Wartungspakete an. Diese umfassen regelmäßige Updates, Sicherheitsüberwachung, Backups, Content-Updates und technischen Support. Sie können sich ganz auf Ihr Geschäft konzentrieren."
        },
        {
          question: "Kann ich meine Website selbst bearbeiten?",
          answer: "Bei Wix Studio-Websites auf jeden Fall! Sie erhalten eine ausführliche Einweisung in das benutzerfreundliche Content Management System. Bei individuellen Websites entwickeln wir auf Wunsch ein Admin-Panel für Sie."
        },
        {
          question: "Was passiert nach dem Launch?",
          answer: "Nach dem Launch erhalten Sie eine Einweisung, alle Zugangsdaten und Dokumentation. Wir bieten je nach Paket 1-6 Monate Support und sind auch danach für Wartung und Erweiterungen verfügbar."
        },
        {
          question: "Sind Ihre Websites DSGVO-konform?",
          answer: "Absolut! Alle unsere Websites werden mit vollständiger DSGVO-Konformität entwickelt. Das umfasst Cookie-Banner, Datenschutzerklärungen, sichere Datenverarbeitung und alle erforderlichen rechtlichen Aspekte."
        },
        {
          question: "Bieten Sie auch SEO-Services an?",
          answer: "Ja, grundlegende SEO-Optimierung ist in allen Paketen enthalten. Wir bieten auch erweiterte SEO-Services wie Keyword-Recherche, Content-Optimierung und lokale SEO als Zusatzleistung an."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our services",
      faqs: [
        {
          question: "How long does website development take?",
          answer: "It depends on the chosen service: Wix Studio websites are ready in 8-10 days, while custom React development takes 2-4 weeks. We strictly adhere to our timelines and keep you regularly informed about progress."
        },
        {
          question: "What's the difference between Wix Studio and custom development?",
          answer: "Wix Studio offers fast, cost-effective solutions with proven templates and easy maintenance. Custom development enables complete design freedom, better performance and unique features, but requires more time and budget."
        },
        {
          question: "Are the websites mobile-optimized?",
          answer: "Yes, all our websites are fully responsive and optimized for all devices. We test on various screen sizes and ensure your website works perfectly on smartphones, tablets and desktop computers."
        },
        {
          question: "Do you also handle website maintenance?",
          answer: "Yes, we offer various maintenance packages. These include regular updates, security monitoring, backups, content updates and technical support. You can focus entirely on your business."
        },
        {
          question: "Can I edit my website myself?",
          answer: "Absolutely with Wix Studio websites! You'll receive comprehensive training in the user-friendly content management system. For custom websites, we can develop an admin panel for you upon request."
        },
        {
          question: "What happens after launch?",
          answer: "After launch, you receive training, all access credentials and documentation. We provide 1-6 months of support depending on your package and are available for maintenance and extensions afterwards."
        },
        {
          question: "Are your websites GDPR compliant?",
          answer: "Absolutely! All our websites are developed with full GDPR compliance. This includes cookie banners, privacy policies, secure data processing and all required legal aspects."
        },
        {
          question: "Do you also offer SEO services?",
          answer: "Yes, basic SEO optimization is included in all packages. We also offer advanced SEO services like keyword research, content optimization and local SEO as additional services."
        }
      ]
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="faq-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-pattern)" />
        </svg>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {content[language].faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFAQ === index ? (
                      <MinusIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <PlusIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          className="border-t border-gray-200 dark:border-gray-600 pt-4"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Support CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'de' ? 'Noch Fragen?' : 'Still have questions?'}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {language === 'de' 
                ? 'Unser Team steht Ihnen gerne für ein persönliches Gespräch zur Verfügung. Lassen Sie uns Ihr Projekt besprechen!'
                : 'Our team is happy to talk to you personally. Let\'s discuss your project!'
              }
            </p>
            <motion.button
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {language === 'de' ? 'Kostenlose Beratung buchen' : 'Book Free Consultation'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;