import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  CloudIcon, 
  MagnifyingGlassIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const { language } = useTheme();

  const content = {
    de: {
      title: "Unsere Leistungen",
      subtitle: "Alles aus einer Hand – von der Idee bis zum Launch",
      services: [
        {
          icon: PaintBrushIcon,
          title: "Wix Studio Websites",
          description: "Schnelle, professionelle Websites mit Wix Studio. Perfekt für kleine bis mittlere Unternehmen.",
          features: ["Responsive Design", "SEO-optimiert", "Content Management", "E-Commerce Integration"],
          highlight: "10 Tage Umsetzung"
        },
        {
          icon: CodeBracketIcon,
          title: "Individuelle React-Websites",
          description: "Maßgeschneiderte Weblösungen mit modernster Technologie für maximale Flexibilität.",
          features: ["Custom Development", "Skalierbare Architektur", "Performance-optimiert", "API-Integrationen"],
          highlight: "2-3 Wochen Entwicklung"
        },
        {
          icon: CloudIcon,
          title: "Hosting & Support",
          description: "Zuverlässiges Hosting und kontinuierlicher Support für Ihre Website.",
          features: ["99.9% Uptime", "SSL-Zertifikate", "Regelmäßige Backups", "24/7 Monitoring"],
          highlight: "Lebenslanger Support"
        },
        {
          icon: MagnifyingGlassIcon,
          title: "SEO & Performance",
          description: "Optimierung für Suchmaschinen und maximale Ladegeschwindigkeit.",
          features: ["On-Page SEO", "Core Web Vitals", "Speed Optimization", "Analytics Setup"],
          highlight: "Messbare Ergebnisse"
        },
        {
          icon: BoltIcon,
          title: "Wartung & Updates",
          description: "Kontinuierliche Pflege und Updates für optimale Performance.",
          features: ["Security Updates", "Content Updates", "Performance Monitoring", "Bug Fixes"],
          highlight: "Monatliche Berichte"
        },
        {
          icon: ShieldCheckIcon,
          title: "DSGVO & Sicherheit",
          description: "Vollständige DSGVO-Konformität und höchste Sicherheitsstandards.",
          features: ["DSGVO-Compliance", "Security Audits", "Datenschutz", "Cookie Management"],
          highlight: "100% Konform"
        }
      ]
    },
    en: {
      title: "Our Services",
      subtitle: "Everything from one source – from idea to launch",
      services: [
        {
          icon: PaintBrushIcon,
          title: "Wix Studio Websites",
          description: "Fast, professional websites with Wix Studio. Perfect for small to medium businesses.",
          features: ["Responsive Design", "SEO-optimized", "Content Management", "E-Commerce Integration"],
          highlight: "10 Days Implementation"
        },
        {
          icon: CodeBracketIcon,
          title: "Custom React Websites",
          description: "Tailored web solutions with cutting-edge technology for maximum flexibility.",
          features: ["Custom Development", "Scalable Architecture", "Performance-optimized", "API Integrations"],
          highlight: "2-3 Weeks Development"
        },
        {
          icon: CloudIcon,
          title: "Hosting & Support",
          description: "Reliable hosting and continuous support for your website.",
          features: ["99.9% Uptime", "SSL Certificates", "Regular Backups", "24/7 Monitoring"],
          highlight: "Lifetime Support"
        },
        {
          icon: MagnifyingGlassIcon,
          title: "SEO & Performance",
          description: "Search engine optimization and maximum loading speed.",
          features: ["On-Page SEO", "Core Web Vitals", "Speed Optimization", "Analytics Setup"],
          highlight: "Measurable Results"
        },
        {
          icon: BoltIcon,
          title: "Maintenance & Updates",
          description: "Continuous maintenance and updates for optimal performance.",
          features: ["Security Updates", "Content Updates", "Performance Monitoring", "Bug Fixes"],
          highlight: "Monthly Reports"
        },
        {
          icon: ShieldCheckIcon,
          title: "GDPR & Security",
          description: "Full GDPR compliance and highest security standards.",
          features: ["GDPR Compliance", "Security Audits", "Data Protection", "Cookie Management"],
          highlight: "100% Compliant"
        }
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <img
          src="https://images.unsplash.com/photo-1610989001873-03968eed0f08"
          alt="Code Background"
          className="w-full h-full object-cover"
        />
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
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {content[language].title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {content[language].subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {service.highlight}
              </div>

              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
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

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {language === 'de' ? 'Kostenlose Beratung anfragen' : 'Request Free Consultation'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;