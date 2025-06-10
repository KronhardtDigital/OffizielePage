import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const LoadingAnimation = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const { language } = useTheme();

  const content = {
    de: {
      tagline: "Digitale Exzellenz – Einfach gemacht",
      loading: "Lädt..."
    },
    en: {
      tagline: "Digital Excellence – Made Simple", 
      loading: "Loading..."
    },
    fr: {
      tagline: "Excellence Numérique – Rendue Simple",
      loading: "Chargement..."
    },
    es: {
      tagline: "Excelencia Digital – Hecha Simple",
      loading: "Cargando..."
    },
    it: {
      tagline: "Eccellenza Digitale – Resa Semplice",
      loading: "Caricamento..."
    },
    nl: {
      tagline: "Digitale Excellentie – Eenvoudig Gemaakt",
      loading: "Laden..."
    }
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 1600);
    const timer3 = setTimeout(() => setStep(3), 2400);
    const timer4 = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 0.8,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [null, -200]
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

        {/* Main Content */}
        <div className="text-center z-10 px-4">
          {/* Logo Animation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-2"
              initial={{ letterSpacing: "0.2em" }}
              animate={{ letterSpacing: "0.05em" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              Kronhardt
            </motion.h1>
            <motion.div 
              className="text-xl md:text-3xl font-light text-white/80 tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              DIGITAL
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            {content[language]?.tagline || content.de.tagline}
          </motion.p>

          {/* Loading Steps */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Progress Dots */}
            <div className="flex justify-center space-x-3 mb-6">
              {[0, 1, 2, 3].map((dotStep) => (
                <motion.div
                  key={dotStep}
                  className={`w-3 h-3 rounded-full ${
                    step >= dotStep ? 'bg-white' : 'bg-white/30'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: step >= dotStep ? 1 : 0.5,
                    opacity: step >= dotStep ? 1 : 0.3
                  }}
                  transition={{ duration: 0.3, delay: dotStep * 0.1 }}
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.div
              className="text-white/70"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {content[language]?.loading || content.de.loading}
            </motion.div>
          </motion.div>

          {/* Final Animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
              animate={{ scale: [1, 2, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;