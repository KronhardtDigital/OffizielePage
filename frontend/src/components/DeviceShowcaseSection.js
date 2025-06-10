import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const DeviceShowcaseSection = () => {
  const { language } = useTheme();
  const [activeDevice, setActiveDevice] = useState('desktop');

  const content = {
    de: {
      title: "Optimiert für alle Geräte",
      subtitle: "Ihre Website funktioniert perfekt auf Desktop, Tablet und Smartphone",
      devices: {
        desktop: {
          name: "Desktop & Laptop",
          description: "Vollständige Funktionalität mit großzügigen Layouts und erweiterten Features",
          image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
          specs: ["1920x1080 & höher", "Alle Browser", "Vollständige Navigation", "Erweiterte Animationen"],
          icon: ComputerDesktopIcon
        },
        tablet: {
          name: "Tablet",
          description: "Touch-optimierte Bedienung mit angepassten Layouts für mittlere Bildschirme",
          image: "https://images.pexels.com/photos/17561470/pexels-photo-17561470.jpeg",
          specs: ["768px - 1024px", "Touch-Navigation", "Optimierte Layouts", "Schnelle Performance"],
          icon: DeviceTabletIcon
        },
        mobile: {
          name: "Smartphone", 
          description: "Mobile-First Design mit optimierter Performance für unterwegs",
          image: "https://images.unsplash.com/photo-1585060282215-39a72f82385c",
          specs: ["320px - 768px", "Touch-freundlich", "Schnelle Ladezeiten", "Offline-Funktionen"],
          icon: DevicePhoneMobileIcon
        }
      },
      features: [
        {
          title: "Responsive Design",
          description: "Automatische Anpassung an jede Bildschirmgröße"
        },
        {
          title: "Touch-Optimierung",
          description: "Intuitive Bedienung auf Touch-Geräten"
        },
        {
          title: "Performance",
          description: "Optimiert für schnelle Ladezeiten auf allen Geräten"
        },
        {
          title: "Cross-Browser",
          description: "Funktioniert in allen modernen Browsern"
        }
      ],
      stats: [
        { number: "100%", label: "Mobile-optimiert" },
        { number: "<3s", label: "Ladezeit" },
        { number: "99%", label: "Browser-Kompatibilität" },
        { number: "95+", label: "Lighthouse Score" }
      ]
    },
    en: {
      title: "Optimized for all devices",
      subtitle: "Your website works perfectly on desktop, tablet and smartphone",
      devices: {
        desktop: {
          name: "Desktop & Laptop",
          description: "Full functionality with spacious layouts and advanced features",
          image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
          specs: ["1920x1080 & higher", "All browsers", "Full navigation", "Advanced animations"],
          icon: ComputerDesktopIcon
        },
        tablet: {
          name: "Tablet",
          description: "Touch-optimized operation with adapted layouts for medium screens",
          image: "https://images.pexels.com/photos/17561470/pexels-photo-17561470.jpeg",
          specs: ["768px - 1024px", "Touch navigation", "Optimized layouts", "Fast performance"],
          icon: DeviceTabletIcon
        },
        mobile: {
          name: "Smartphone",
          description: "Mobile-first design with optimized performance for on-the-go",
          image: "https://images.unsplash.com/photo-1585060282215-39a72f82385c",
          specs: ["320px - 768px", "Touch-friendly", "Fast loading", "Offline functions"],
          icon: DevicePhoneMobileIcon
        }
      },
      features: [
        {
          title: "Responsive Design",
          description: "Automatic adaptation to any screen size"
        },
        {
          title: "Touch Optimization",
          description: "Intuitive operation on touch devices"
        },
        {
          title: "Performance",
          description: "Optimized for fast loading times on all devices"
        },
        {
          title: "Cross-Browser",
          description: "Works in all modern browsers"
        }
      ],
      stats: [
        { number: "100%", label: "Mobile-optimized" },
        { number: "<3s", label: "Loading time" },
        { number: "99%", label: "Browser compatibility" },
        { number: "95+", label: "Lighthouse Score" }
      ]
    }
  };

  const devices = Object.keys(content[language].devices);

  return (
    <section id="devices" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-blue-200 dark:border-blue-700 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Device Selector */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
            {devices.map((device) => {
              const DeviceIcon = content[language].devices[device].icon;
              return (
                <button
                  key={device}
                  onClick={() => setActiveDevice(device)}
                  className={`flex items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeDevice === device
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600'
                  }`}
                >
                  <DeviceIcon className="h-5 w-5 mr-2" />
                  {content[language].devices[device].name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Device Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Device Image */}
          <motion.div
            className="relative"
            key={activeDevice}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={content[language].devices[activeDevice].image}
                alt={content[language].devices[activeDevice].name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Device Badge */}
              <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="flex items-center text-white">
                  {React.createElement(content[language].devices[activeDevice].icon, { className: "h-5 w-5 mr-2" })}
                  <span className="font-medium">{content[language].devices[activeDevice].name}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Device Info */}
          <motion.div
            key={`${activeDevice}-info`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {content[language].devices[activeDevice].name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {content[language].devices[activeDevice].description}
              </p>
            </div>

            {/* Specs */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'de' ? 'Technische Specs' : 'Technical Specs'}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {content[language].devices[activeDevice].specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content[language].features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {content[language].stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceShowcaseSection;