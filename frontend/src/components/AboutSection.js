import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { CheckBadgeIcon, UserGroupIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline';

const AboutSection = () => {
  const { language } = useTheme();

  const content = {
    de: {
      title: "Über Kronhardt Digital",
      subtitle: "Digitale Klarheit – bezahlbar gemacht",
      description: "Als Einzelunternehmer bringe ich persönliche Betreuung und technische Exzellenz zusammen. Jedes Projekt ist einzigartig, jede Lösung maßgeschneidert.",
      mission: "Unsere Mission",
      missionText: "Professionelle Websites sollten nicht unbezahlbar sein. Wir demokratisieren Webdesign durch smarte Technologien und effiziente Prozesse.",
      stats: [
        { number: "100+", label: "Erfolgreiche Projekte" },
        { number: "95%", label: "Kundenzufriedenheit" },
        { number: "10 Tage", label: "Durchschnittliche Projektzeit" },
        { number: "24/7", label: "Support verfügbar" }
      ],
      values: [
        {
          icon: CheckBadgeIcon,
          title: "Qualität",
          description: "Höchste Standards in Design und Entwicklung"
        },
        {
          icon: ClockIcon,
          title: "Schnelligkeit",
          description: "Effiziente Prozesse für schnelle Ergebnisse"
        },
        {
          icon: UserGroupIcon,
          title: "Persönlich",
          description: "Direkter Kontakt und individuelle Betreuung"
        },
        {
          icon: TrophyIcon,
          title: "Erfolg",
          description: "Messbare Ergebnisse für Ihr Unternehmen"
        }
      ]
    },
    en: {
      title: "About Kronhardt Digital",
      subtitle: "Digital clarity – made affordable",
      description: "As a solo entrepreneur, I combine personal attention with technical excellence. Every project is unique, every solution is tailored.",
      mission: "Our Mission",
      missionText: "Professional websites shouldn't be unaffordable. We democratize web design through smart technologies and efficient processes.",
      stats: [
        { number: "100+", label: "Successful Projects" },
        { number: "95%", label: "Customer Satisfaction" },
        { number: "10 Days", label: "Average Project Time" },
        { number: "24/7", label: "Support Available" }
      ],
      values: [
        {
          icon: CheckBadgeIcon,
          title: "Quality",
          description: "Highest standards in design and development"
        },
        {
          icon: ClockIcon,
          title: "Speed",
          description: "Efficient processes for quick results"
        },
        {
          icon: UserGroupIcon,
          title: "Personal",
          description: "Direct contact and individual support"
        },
        {
          icon: TrophyIcon,
          title: "Success",
          description: "Measurable results for your business"
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {content[language].subtitle}
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {content[language].description}
            </motion.p>

            {/* Mission */}
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {content[language].mission}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {content[language].missionText}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643"
                alt="Professional workspace"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Kronhardt Digital</p>
                <p className="text-blue-200">Ihr Partner für digitale Lösungen</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {content[language].stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content[language].values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;