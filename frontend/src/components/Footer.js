import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  EnvelopeIcon, 
  PhoneIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaGithub,
  FaXing 
} from 'react-icons/fa';

const Footer = () => {
  const { language } = useTheme();

  const content = {
    de: {
      company: {
        description: "Kronhardt Digital macht professionelle Websites bezahlbar. Von Wix Studio bis zu individueller React-Entwicklung – wir finden die perfekte Lösung für Ihr Unternehmen."
      },
      services: {
        title: "Services",
        links: [
          "Wix Studio Websites",
          "Individuelle Entwicklung",
          "E-Commerce Lösungen",
          "Website Wartung",
          "SEO Optimierung",
          "Hosting & Support"
        ]
      },
      company_nav: {
        title: "Unternehmen",
        links: [
          "Über uns",
          "Portfolio",
          "Preise",
          "Kontakt",
          "Blog",
          "Karriere"
        ]
      },
      legal: {
        title: "Rechtliches",
        links: [
          "Impressum",
          "Datenschutz",
          "AGB",
          "Widerrufsrecht",
          "Cookie-Richtlinie"
        ]
      },
      contact: {
        title: "Kontakt",
        email: "info@kronhardt-digital.de",
        phone: "+49 (0) 123 456 789",
        address: "Musterstraße 123\n12345 Berlin, Deutschland"
      },
      newsletter: {
        title: "Newsletter",
        description: "Bleiben Sie über neue Technologien und Angebote informiert.",
        placeholder: "Ihre E-Mail-Adresse",
        button: "Abonnieren"
      },
      bottom: {
        copyright: "© 2025 Kronhardt Digital. Alle Rechte vorbehalten.",
        made_with: "Gemacht mit ❤️ für digitale Exzellenz"
      }
    },
    en: {
      company: {
        description: "Kronhardt Digital makes professional websites affordable. From Wix Studio to custom React development – we find the perfect solution for your business."
      },
      services: {
        title: "Services",
        links: [
          "Wix Studio Websites",
          "Custom Development",
          "E-Commerce Solutions",
          "Website Maintenance",
          "SEO Optimization",
          "Hosting & Support"
        ]
      },
      company_nav: {
        title: "Company",
        links: [
          "About",
          "Portfolio",
          "Pricing",
          "Contact",
          "Blog",
          "Careers"
        ]
      },
      legal: {
        title: "Legal",
        links: [
          "Imprint",
          "Privacy Policy",
          "Terms of Service",
          "Right of Withdrawal",
          "Cookie Policy"
        ]
      },
      contact: {
        title: "Contact",
        email: "info@kronhardt-digital.de",
        phone: "+49 (0) 123 456 789",
        address: "Sample Street 123\n12345 Berlin, Germany"
      },
      newsletter: {
        title: "Newsletter",
        description: "Stay informed about new technologies and offers.",
        placeholder: "Your email address",
        button: "Subscribe"
      },
      bottom: {
        copyright: "© 2025 Kronhardt Digital. All rights reserved.",
        made_with: "Made with ❤️ for digital excellence"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaXing, href: "#", label: "Xing" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaGithub, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <img
          src="https://images.pexels.com/photos/1635927/pexels-photo-1635927.jpeg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">
                  Kronhardt
                  <span className="text-blue-400 ml-1 font-light">Digital</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {content[language].company.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-3" />
                  <a 
                    href={`mailto:${content[language].contact.email}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {content[language].contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-blue-400 mr-3" />
                  <a 
                    href={`tel:${content[language].contact.phone.replace(/\s/g, '')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {content[language].contact.phone}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {content[language].services.title}
              </h3>
              <ul className="space-y-2">
                {content[language].services.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {content[language].company_nav.title}
              </h3>
              <ul className="space-y-2">
                {content[language].company_nav.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {content[language].legal.title}
              </h3>
              <ul className="space-y-2">
                {content[language].legal.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">
              {content[language].newsletter.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {content[language].newsletter.description}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={content[language].newsletter.placeholder}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                {content[language].newsletter.button}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {content[language].bottom.copyright}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              {content[language].bottom.made_with}
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <ArrowUpIcon className="h-6 w-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;