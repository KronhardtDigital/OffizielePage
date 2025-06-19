import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const { language } = useTheme();

  const content = {
    de: {
      headline: "Ihre Website –",
      subHeadline: "einfach. klar. bezahlbar.",
      description: "Professionelle Websites mit Wix Studio oder individueller Entwicklung. Wir machen digitale Klarheit bezahlbar.",
      ctaPrimary: "Projekt starten",
      ctaSecondary: "Wix vs. Individuell vergleichen",
      trustText: "Vertraut von 100+ Unternehmen"
    },
    en: {
      headline: "Your Website –",
      subHeadline: "simple. clear. affordable.",
      description: "Professional websites with Wix Studio or custom development. We make digital clarity affordable.",
      ctaPrimary: "Start Project",
      ctaSecondary: "Compare Wix vs. Custom",
      trustText: "Trusted by 100+ companies"
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1708192548343-6359167a3efe"
          alt="Corporate Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
                y: [null, -200]
              }}
              transition={{
                duration: 4,
                delay: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 5 }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 5.2 }}
          >
            <motion.span
              className="block"
              initial={{ letterSpacing: "0.2em" }}
              animate={{ letterSpacing: "0.05em" }}
              transition={{ duration: 2, delay: 5.5 }}
            >
              {content[language].headline}
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 5.8 }}
            >
              {content[language].subHeadline}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 6.2 }}
          >
            {content[language].description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 6.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                {content[language].ctaPrimary}
                <motion.div
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.div>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#comparison')}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[language].ctaSecondary}
            </motion.button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            className="text-blue-200 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 7 }}
          >
            ⭐⭐⭐⭐⭐ {content[language].trustText}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 7.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;