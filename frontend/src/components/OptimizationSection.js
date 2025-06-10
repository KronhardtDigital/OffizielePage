import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  RocketLaunchIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  BoltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const OptimizationSection = () => {
  const { language } = useTheme();

  const content = {
    de: {
      title: "Website-Optimierung",
      subtitle: "Wir machen Ihre Website schneller, sicherer und erfolgreicher",
      optimizations: [
        {
          icon: BoltIcon,
          title: "Performance-Optimierung",
          description: "Blitzschnelle Ladezeiten für bessere Nutzererfahrung und SEO-Rankings",
          image: "https://images.unsplash.com/photo-1632017261554-7c6712cb0a09",
          features: [
            "Lighthouse Score 95+",
            "Core Web Vitals optimiert", 
            "Lazy Loading implementiert",
            "CDN-Integration"
          ]
        },
        {
          icon: MagnifyingGlassIcon,
          title: "SEO-Optimierung",
          description: "Bessere Sichtbarkeit in Suchmaschinen für mehr organischen Traffic",
          image: "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg",
          features: [
            "Keyword-Optimierung",
            "Meta-Tags & Schema",
            "Sitemap & Robots.txt",
            "Local SEO Setup"
          ]
        },
        {
          icon: ShieldCheckIcon,
          title: "Sicherheit & DSGVO",
          description: "Höchste Sicherheitsstandards und vollständige DSGVO-Konformität",
          image: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf",
          features: [
            "SSL-Zertifikate",
            "Security Headers",
            "Cookie-Management",
            "Datenschutz-konform"
          ]
        },
        {
          icon: ChartBarIcon,
          title: "Analytics & Tracking",
          description: "Detaillierte Insights für datengetriebene Entscheidungen",
          image: "https://images.unsplash.com/photo-1543171165-6ec6ede147ca",
          features: [
            "Google Analytics 4",
            "Conversion Tracking",
            "Heatmap-Integration",
            "Performance Reports"
          ]
        }
      ],
      process: {
        title: "Unser Optimierungs-Prozess",
        steps: [
          {
            number: "01",
            title: "Analyse",
            description: "Comprehensive Website-Analyse mit Tools wie Lighthouse, GTMetrix und PageSpeed Insights"
          },
          {
            number: "02", 
            title: "Strategie",
            description: "Entwicklung einer maßgeschneiderten Optimierungsstrategie basierend auf Ihren Zielen"
          },
          {
            number: "03",
            title: "Umsetzung",
            description: "Professionelle Implementierung aller Optimierungsmaßnahmen durch unser Expertenteam"
          },
          {
            number: "04",
            title: "Monitoring",
            description: "Kontinuierliche Überwachung und weitere Optimierung für nachhaltige Ergebnisse"
          }
        ]
      }
    },
    en: {
      title: "Website Optimization",
      subtitle: "We make your website faster, more secure and more successful",
      optimizations: [
        {
          icon: BoltIcon,
          title: "Performance Optimization",
          description: "Lightning-fast loading times for better user experience and SEO rankings",
          image: "https://images.unsplash.com/photo-1632017261554-7c6712cb0a09",
          features: [
            "Lighthouse Score 95+",
            "Core Web Vitals optimized",
            "Lazy Loading implemented", 
            "CDN Integration"
          ]
        },
        {
          icon: MagnifyingGlassIcon,
          title: "SEO Optimization",
          description: "Better visibility in search engines for more organic traffic",
          image: "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg",
          features: [
            "Keyword Optimization",
            "Meta Tags & Schema",
            "Sitemap & Robots.txt",
            "Local SEO Setup"
          ]
        },
        {
          icon: ShieldCheckIcon,
          title: "Security & GDPR",
          description: "Highest security standards and full GDPR compliance",
          image: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf",
          features: [
            "SSL Certificates",
            "Security Headers",
            "Cookie Management",
            "Privacy Compliant"
          ]
        },
        {
          icon: ChartBarIcon,
          title: "Analytics & Tracking",
          description: "Detailed insights for data-driven decisions",
          image: "https://images.unsplash.com/photo-1543171165-6ec6ede147ca",
          features: [
            "Google Analytics 4",
            "Conversion Tracking",
            "Heatmap Integration",
            "Performance Reports"
          ]
        }
      ],
      process: {
        title: "Our Optimization Process",
        steps: [
          {
            number: "01",
            title: "Analysis",
            description: "Comprehensive website analysis using tools like Lighthouse, GTMetrix and PageSpeed Insights"
          },
          {
            number: "02",
            title: "Strategy", 
            description: "Development of a customized optimization strategy based on your goals"
          },
          {
            number: "03",
            title: "Implementation",
            description: "Professional implementation of all optimization measures by our expert team"
          },
          {
            number: "04",
            title: "Monitoring",
            description: "Continuous monitoring and further optimization for sustainable results"
          }
        ]
      }
    }
  };

  return (
    <section id="optimization" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
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

        {/* Optimization Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {content[language].optimizations.map((optimization, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={optimization.image}
                  alt={optimization.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <motion.div
                  className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <optimization.icon className="h-6 w-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {optimization.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {optimization.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {optimization.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {content[language].process.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[language].process.steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.number}
                </motion.div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {language === 'de' ? 'Website analysieren lassen' : 'Get Website Analysis'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizationSection;