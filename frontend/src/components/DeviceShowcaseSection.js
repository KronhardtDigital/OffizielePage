import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedDesktop, AnimatedTablet, AnimatedMobile } from './DeviceAnimations';
import { 
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  CheckIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon
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
          description: "Vollständige Funktionalität mit großzügigen Layouts und erweiterten Features für maximale Produktivität",
          specs: ["1920x1080 & höher", "Alle Browser", "Vollständige Navigation", "Erweiterte Animationen"],
          icon: ComputerDesktopIcon,
          benefits: ["Große Bildschirme optimal genutzt", "Komplexe Interaktionen möglich", "Multitasking-fähig"]
        },
        tablet: {
          name: "Tablet",
          description: "Touch-optimierte Bedienung mit angepassten Layouts für mittlere Bildschirme und intuitive Gesten",
          specs: ["768px - 1024px", "Touch-Navigation", "Optimierte Layouts", "Schnelle Performance"],
          icon: DeviceTabletIcon,
          benefits: ["Touch-freundliche Bedienung", "Portable Nutzung", "Perfekt für Präsentationen"]
        },
        mobile: {
          name: "Smartphone", 
          description: "Mobile-First Design mit optimierter Performance für unterwegs und schnelle Ladezeiten",
          specs: ["320px - 768px", "Touch-freundlich", "Schnelle Ladezeiten", "Offline-Funktionen"],
          icon: DevicePhoneMobileIcon,
          benefits: ["Immer verfügbar", "One-Hand Bedienung", "Push-Benachrichtigungen"]
        }
      },
      features: [
        {
          title: "Responsive Design",
          description: "Automatische Anpassung an jede Bildschirmgröße",
          icon: SparklesIcon,
          color: "blue"
        },
        {
          title: "Touch-Optimierung",
          description: "Intuitive Bedienung auf Touch-Geräten",
          icon: BoltIcon,
          color: "purple"
        },
        {
          title: "Performance",
          description: "Optimiert für schnelle Ladezeiten auf allen Geräten",
          icon: BoltIcon,
          color: "green"
        },
        {
          title: "Cross-Browser",
          description: "Funktioniert in allen modernen Browsern",
          icon: GlobeAltIcon,
          color: "indigo"
        }
      ],
      stats: [
        { number: "100%", label: "Mobile-optimiert", icon: "📱" },
        { number: "<2s", label: "Ladezeit", icon: "⚡" },
        { number: "99%", label: "Browser-Kompatibilität", icon: "🌐" },
        { number: "95+", label: "Lighthouse Score", icon: "🚀" }
      ]
    },
    en: {
      title: "Optimized for all devices",
      subtitle: "Your website works perfectly on desktop, tablet and smartphone",
      devices: {
        desktop: {
          name: "Desktop & Laptop",
          description: "Full functionality with spacious layouts and advanced features for maximum productivity",
          specs: ["1920x1080 & higher", "All browsers", "Full navigation", "Advanced animations"],
          icon: ComputerDesktopIcon,
          benefits: ["Large screens optimally used", "Complex interactions possible", "Multitasking capable"]
        },
        tablet: {
          name: "Tablet",
          description: "Touch-optimized operation with adapted layouts for medium screens and intuitive gestures",
          specs: ["768px - 1024px", "Touch navigation", "Optimized layouts", "Fast performance"],
          icon: DeviceTabletIcon,
          benefits: ["Touch-friendly operation", "Portable use", "Perfect for presentations"]
        },
        mobile: {
          name: "Smartphone",
          description: "Mobile-first design with optimized performance for on-the-go and fast loading times",
          specs: ["320px - 768px", "Touch-friendly", "Fast loading", "Offline functions"],
          icon: DevicePhoneMobileIcon,
          benefits: ["Always available", "One-hand operation", "Push notifications"]
        }
      },
      features: [
        {
          title: "Responsive Design",
          description: "Automatic adaptation to any screen size",
          icon: SparklesIcon,
          color: "blue"
        },
        {
          title: "Touch Optimization",
          description: "Intuitive operation on touch devices",
          icon: BoltIcon,
          color: "purple"
        },
        {
          title: "Performance",
          description: "Optimized for fast loading times on all devices",
          icon: BoltIcon,
          color: "green"
        },
        {
          title: "Cross-Browser",
          description: "Works in all modern browsers",
          icon: GlobeAltIcon,
          color: "indigo"
        }
      ],
      stats: [
        { number: "100%", label: "Mobile-optimized", icon: "📱" },
        { number: "<2s", label: "Loading time", icon: "⚡" },
        { number: "99%", label: "Browser compatibility", icon: "🌐" },
        { number: "95+", label: "Lighthouse Score", icon: "🚀" }
      ]
    },
    fr: {
      title: "Optimisé pour tous les appareils",
      subtitle: "Votre site web fonctionne parfaitement sur ordinateur, tablette et smartphone",
      devices: {
        desktop: {
          name: "Ordinateur & Portable",
          description: "Fonctionnalité complète avec des mises en page spacieuses et des fonctionnalités avancées",
          specs: ["1920x1080 et plus", "Tous les navigateurs", "Navigation complète", "Animations avancées"],
          icon: ComputerDesktopIcon,
          benefits: ["Grands écrans optimalement utilisés", "Interactions complexes possibles", "Multitâche capable"]
        },
        tablet: {
          name: "Tablette",
          description: "Fonctionnement optimisé pour le tactile avec des mises en page adaptées",
          specs: ["768px - 1024px", "Navigation tactile", "Mises en page optimisées", "Performance rapide"],
          icon: DeviceTabletIcon,
          benefits: ["Fonctionnement tactile", "Utilisation portable", "Parfait pour les présentations"]
        },
        mobile: {
          name: "Smartphone",
          description: "Design mobile-first avec performance optimisée pour une utilisation mobile",
          specs: ["320px - 768px", "Tactile", "Chargement rapide", "Fonctions hors ligne"],
          icon: DevicePhoneMobileIcon,
          benefits: ["Toujours disponible", "Utilisation d'une main", "Notifications push"]
        }
      },
      features: [
        {
          title: "Design Responsive",
          description: "Adaptation automatique à toute taille d'écran",
          icon: SparklesIcon,
          color: "blue"
        },
        {
          title: "Optimisation Tactile",
          description: "Utilisation intuitive sur appareils tactiles",
          icon: BoltIcon,
          color: "purple"
        },
        {
          title: "Performance",
          description: "Optimisé pour des temps de chargement rapides",
          icon: BoltIcon,
          color: "green"
        },
        {
          title: "Cross-Browser",
          description: "Fonctionne dans tous les navigateurs modernes",
          icon: GlobeAltIcon,
          color: "indigo"
        }
      ],
      stats: [
        { number: "100%", label: "Optimisé mobile", icon: "📱" },
        { number: "<2s", label: "Temps de chargement", icon: "⚡" },
        { number: "99%", label: "Compatibilité navigateur", icon: "🌐" },
        { number: "95+", label: "Score Lighthouse", icon: "🚀" }
      ]
    },
    es: {
      title: "Optimizado para todos los dispositivos",
      subtitle: "Su sitio web funciona perfectamente en escritorio, tablet y smartphone",
      devices: {
        desktop: {
          name: "Escritorio y Portátil",
          description: "Funcionalidad completa con diseños espaciosos y características avanzadas",
          specs: ["1920x1080 y superior", "Todos los navegadores", "Navegación completa", "Animaciones avanzadas"],
          icon: ComputerDesktopIcon,
          benefits: ["Pantallas grandes optimizadas", "Interacciones complejas posibles", "Capacidad multitarea"]
        },
        tablet: {
          name: "Tablet",
          description: "Operación optimizada para táctil con diseños adaptados para pantallas medianas",
          specs: ["768px - 1024px", "Navegación táctil", "Diseños optimizados", "Rendimiento rápido"],
          icon: DeviceTabletIcon,
          benefits: ["Operación táctil", "Uso portátil", "Perfecto para presentaciones"]
        },
        mobile: {
          name: "Smartphone",
          description: "Diseño mobile-first con rendimiento optimizado para uso móvil",
          specs: ["320px - 768px", "Táctil", "Carga rápida", "Funciones offline"],
          icon: DevicePhoneMobileIcon,
          benefits: ["Siempre disponible", "Operación con una mano", "Notificaciones push"]
        }
      },
      features: [
        {
          title: "Diseño Responsive",
          description: "Adaptación automática a cualquier tamaño de pantalla",
          icon: SparklesIcon,
          color: "blue"
        },
        {
          title: "Optimización Táctil",
          description: "Operación intuitiva en dispositivos táctiles",
          icon: BoltIcon,
          color: "purple"
        },
        {
          title: "Rendimiento",
          description: "Optimizado para tiempos de carga rápidos",
          icon: BoltIcon,
          color: "green"
        },
        {
          title: "Cross-Browser",
          description: "Funciona en todos los navegadores modernos",
          icon: GlobeAltIcon,
          color: "indigo"
        }
      ],
      stats: [
        { number: "100%", label: "Optimizado móvil", icon: "📱" },
        { number: "<2s", label: "Tiempo de carga", icon: "⚡" },
        { number: "99%", label: "Compatibilidad navegador", icon: "🌐" },
        { number: "95+", label: "Puntuación Lighthouse", icon: "🚀" }
      ]
    },
    it: {
      title: "Ottimizzato per tutti i dispositivi",
      subtitle: "Il tuo sito web funziona perfettamente su desktop, tablet e smartphone",
      devices: {
        desktop: {
          name: "Desktop e Laptop",
          description: "Funzionalità complete con layout spaziosi e caratteristiche avanzate",
          specs: ["1920x1080 e superiore", "Tutti i browser", "Navigazione completa", "Animazioni avanzate"],
          icon: ComputerDesktopIcon,
          benefits: ["Schermi grandi ottimizzati", "Interazioni complesse possibili", "Capacità multitasking"]
        },
        tablet: {
          name: "Tablet",
          description: "Funzionamento ottimizzato per touch con layout adattati per schermi medi",
          specs: ["768px - 1024px", "Navigazione touch", "Layout ottimizzati", "Prestazioni veloci"],
          icon: DeviceTabletIcon,
          benefits: ["Funzionamento touch", "Uso portatile", "Perfetto per presentazioni"]
        },
        mobile: {
          name: "Smartphone",
          description: "Design mobile-first con prestazioni ottimizzate per l'uso mobile",
          specs: ["320px - 768px", "Touch-friendly", "Caricamento veloce", "Funzioni offline"],
          icon: DevicePhoneMobileIcon,
          benefits: ["Sempre disponibile", "Operazione con una mano", "Notifiche push"]
        }
      },
      features: [
        {
          title: "Design Responsive",
          description: "Adattamento automatico a qualsiasi dimensione schermo",
          icon: SparklesIcon,
          color: "blue"
        },
        {
          title: "Ottimizzazione Touch",
          description: "Operazione intuitiva su dispositivi touch",
          icon: BoltIcon,
          color: "purple"
        },
        {
          title: "Prestazioni",
          description: "Ottimizzato per tempi di caricamento veloci",
          icon: BoltIcon,
          color: "green"
        },
        {
          title: "Cross-Browser",
          description: "Funziona in tutti i browser moderni",
          icon: GlobeAltIcon,
          color: "indigo"
        }
      ],
      stats: [
        { number: "100%", label: "Ottimizzato mobile", icon: "📱" },
        { number: "<2s", label: "Tempo di caricamento", icon: "⚡" },
        { number: "99%", label: "Compatibilità browser", icon: "🌐" },
        { number: "95+", label: "Punteggio Lighthouse", icon: "🚀" }
      ]
    },
    nl: {
      title: "Geoptimaliseerd voor alle apparaten",
      subtitle: "Uw website werkt perfect op desktop, tablet en smartphone",
      devices: {
        desktop: {
          name: "Desktop & Laptop",
          description: "Volledige functionaliteit met ruime layouts en geavanceerde functies",
          specs: ["1920x1080 en hoger", "Alle browsers", "Volledige navigatie", "Geavanceerde animaties"],
          icon: ComputerDesktopIcon,
          benefits: ["Grote schermen optimaal benut", "Complexe interacties mogelijk", "Multitasking geschikt"]
        },
        tablet: {
          name: "Tablet",
          description: "Touch-geoptimaliseerde bediening met aangepaste layouts voor middelgrote schermen",
          specs: ["768px - 1024px", "Touch navigatie", "Geoptimaliseerde layouts", "Snelle prestaties"],
          icon: DeviceTabletIcon,
          benefits: ["Touch-vriendelijke bediening", "Draagbaar gebruik", "Perfect voor presentaties"]
        },
        mobile: {
          name: "Smartphone",
          description: "Mobile-first ontwerp met geoptimaliseerde prestaties voor onderweg",
          specs: ["320px - 768px", "Touch-vriendelijk", "Snelle laadtijden", "Offline functies"],
          icon: DevicePhoneMobileIcon,
          benefits: ["Altijd beschikbaar", "Eenhandige bediening", "Push notificaties"]
        }
      },
      features: [
        {
          title: "Responsive Design",
          description: "Automatische aanpassing aan elke schermgrootte",
          icon: SparklesIcon,
          color: "blue"
        },
        {
          title: "Touch Optimalisatie",
          description: "Intuïtieve bediening op touch apparaten",
          icon: BoltIcon,
          color: "purple"
        },
        {
          title: "Prestaties",
          description: "Geoptimaliseerd voor snelle laadtijden",
          icon: BoltIcon,
          color: "green"
        },
        {
          title: "Cross-Browser",
          description: "Werkt in alle moderne browsers",
          icon: GlobeAltIcon,
          color: "indigo"
        }
      ],
      stats: [
        { number: "100%", label: "Mobiel geoptimaliseerd", icon: "📱" },
        { number: "<2s", label: "Laadtijd", icon: "⚡" },
        { number: "99%", label: "Browser compatibiliteit", icon: "🌐" },
        { number: "95+", label: "Lighthouse Score", icon: "🚀" }
      ]
    }
  };

  const devices = Object.keys(content[language]?.devices || content.de.devices);
  const currentContent = content[language] || content.de;

  const getAnimatedDevice = (device) => {
    switch(device) {
      case 'desktop': return <AnimatedDesktop isActive={activeDevice === 'desktop'} />;
      case 'tablet': return <AnimatedTablet isActive={activeDevice === 'tablet'} />;
      case 'mobile': return <AnimatedMobile isActive={activeDevice === 'mobile'} />;
      default: return <AnimatedDesktop isActive={true} />;
    }
  };

  return (
    <section id="devices" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-10"
            style={{
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
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
          <motion.h2
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {currentContent.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {currentContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Device Selector */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            {devices.map((device) => {
              const DeviceIcon = currentContent.devices[device].icon;
              return (
                <motion.button
                  key={device}
                  onClick={() => setActiveDevice(device)}
                  className={`flex items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeDevice === device
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700/50 hover:text-blue-600'
                  }`}
                  whileHover={{ scale: activeDevice === device ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DeviceIcon className="h-5 w-5 mr-2" />
                  {currentContent.devices[device].name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Device Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Animated Device */}
          <motion.div
            className="relative"
            key={activeDevice}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative bg-gradient-to-br from-white/60 to-blue-50/60 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/30 dark:border-gray-700/30">
              {getAnimatedDevice(activeDevice)}
              
              {/* Floating Tech Elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${15 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Device Info */}
          <motion.div
            key={`${activeDevice}-info`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {currentContent.devices[activeDevice].name}
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {currentContent.devices[activeDevice].description}
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'de' ? 'Vorteile' : language === 'fr' ? 'Avantages' : language === 'es' ? 'Beneficios' : language === 'it' ? 'Vantaggi' : language === 'nl' ? 'Voordelen' : 'Benefits'}:
              </h4>
              {currentContent.devices[activeDevice].benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Specs */}
            <motion.div
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/30 dark:border-gray-700/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'de' ? 'Technische Specs' : language === 'fr' ? 'Spécifications' : language === 'es' ? 'Especificaciones' : language === 'it' ? 'Specifiche' : language === 'nl' ? 'Specificaties' : 'Technical Specs'}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentContent.devices[activeDevice].specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {currentContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                  feature.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  feature.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  feature.color === 'green' ? 'from-green-500 to-green-600' :
                  'from-indigo-500 to-indigo-600'
                } flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {currentContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="text-4xl mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
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