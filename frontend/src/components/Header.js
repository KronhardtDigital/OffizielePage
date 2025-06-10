import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, LanguageIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { isDark, language, languages, toggleTheme, changeLanguage } = useTheme();

  const navigation = {
    de: [
      { name: 'Start', href: '#home' },
      { name: 'Über uns', href: '#about' },
      { name: 'Leistungen', href: '#services' },
      { name: 'Optimierung', href: '#optimization' },
      { name: 'Geräte', href: '#devices' },
      { name: 'Warum wir?', href: '#differentiation' },
      { name: 'Vergleich', href: '#comparison' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Preise', href: '#pricing' },
      { name: 'Kontakt', href: '#contact' }
    ],
    en: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Optimization', href: '#optimization' },
      { name: 'Devices', href: '#devices' },
      { name: 'Why us?', href: '#differentiation' },
      { name: 'Comparison', href: '#comparison' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' }
    ],
    fr: [
      { name: 'Accueil', href: '#home' },
      { name: 'À propos', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Optimisation', href: '#optimization' },
      { name: 'Appareils', href: '#devices' },
      { name: 'Pourquoi nous?', href: '#differentiation' },
      { name: 'Comparaison', href: '#comparison' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Tarifs', href: '#pricing' },
      { name: 'Contact', href: '#contact' }
    ],
    es: [
      { name: 'Inicio', href: '#home' },
      { name: 'Acerca de', href: '#about' },
      { name: 'Servicios', href: '#services' },
      { name: 'Optimización', href: '#optimization' },
      { name: 'Dispositivos', href: '#devices' },
      { name: '¿Por qué nosotros?', href: '#differentiation' },
      { name: 'Comparación', href: '#comparison' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Precios', href: '#pricing' },
      { name: 'Contacto', href: '#contact' }
    ],
    it: [
      { name: 'Home', href: '#home' },
      { name: 'Chi siamo', href: '#about' },
      { name: 'Servizi', href: '#services' },
      { name: 'Ottimizzazione', href: '#optimization' },
      { name: 'Dispositivi', href: '#devices' },
      { name: 'Perché noi?', href: '#differentiation' },
      { name: 'Confronto', href: '#comparison' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Prezzi', href: '#pricing' },
      { name: 'Contatto', href: '#contact' }
    ],
    nl: [
      { name: 'Home', href: '#home' },
      { name: 'Over ons', href: '#about' },
      { name: 'Diensten', href: '#services' },
      { name: 'Optimalisatie', href: '#optimization' },
      { name: 'Apparaten', href: '#devices' },
      { name: 'Waarom wij?', href: '#differentiation' },
      { name: 'Vergelijking', href: '#comparison' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Prijzen', href: '#pricing' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLanguage = languages.find(lang => lang.code === language);
  const currentNav = navigation[language] || navigation.de;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 3.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
          >
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Kronhardt
              <span className="text-blue-600 dark:text-blue-400 ml-1 font-light">Digital</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {currentNav.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 3.7 + index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 4.2 }}
              >
                <span className="text-xl mr-2">{currentLanguage?.flag}</span>
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </motion.button>

              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setShowLanguageMenu(false);
                        }}
                        className={`w-full flex items-center px-4 py-2 text-sm transition-colors ${
                          language === lang.code
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="text-lg mr-3">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 4.4 }}
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Click outside to close language menu */}
      {showLanguageMenu && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setShowLanguageMenu(false)}
        />
      )}
    </motion.header>
  );
};

export default Header;