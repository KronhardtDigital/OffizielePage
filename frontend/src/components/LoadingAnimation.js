import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const LoadingAnimation = ({ onComplete }) => {
  const [showSlogan, setShowSlogan] = useState(false);
  const { language } = useTheme();

  const text = {
    de: "Ihre Website – einfach. klar. bezahlbar.",
    en: "Your Website – simple. clear. affordable."
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSlogan(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 0.8,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      >
        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
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
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <div className="text-center z-10">
          {/* Logo Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white tracking-tight"
              initial={{ letterSpacing: "0.1em" }}
              animate={{ letterSpacing: "0.05em" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Kronhardt
            </motion.h1>
            <motion.div 
              className="text-2xl md:text-4xl font-light text-blue-300 tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              DIGITAL
            </motion.div>
          </motion.div>

          {/* Slogan Animation */}
          <AnimatePresence>
            {showSlogan && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-xl md:text-2xl text-blue-100 font-light tracking-wide max-w-2xl mx-auto"
              >
                {text[language]}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Loading Bar */}
          <motion.div
            className="mt-12 w-64 h-1 bg-blue-900 rounded-full mx-auto overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 256 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;