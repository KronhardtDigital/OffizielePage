import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  CurrencyEuroIcon, 
  BoltIcon, 
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const ComparisonSection = () => {
  const { language } = useTheme();
  const [activeTab, setActiveTab] = useState('comparison');

  const content = {
    de: {
      title: "Wix Studio vs. Individuelle Entwicklung",
      subtitle: "Was passt zu Ihnen? Finden Sie die perfekte Lösung für Ihr Projekt.",
      tabs: {
        comparison: "Vergleich",
        calculator: "Kostenkalkulator",
        recommendation: "Empfehlung"
      },
      criteria: [
        {
          icon: CurrencyEuroIcon,
          name: "Kosten",
          wix: { score: 9, text: "Ab 500€ - Sehr günstig" },
          custom: { score: 5, text: "Ab 2.500€ - Höhere Investition" }
        },
        {
          icon: BoltIcon,
          name: "Entwicklungszeit",
          wix: { score: 10, text: "5-10 Tage - Sehr schnell" },
          custom: { score: 6, text: "2-4 Wochen - Mehr Zeit" }
        },
        {
          icon: PaintBrushIcon,
          name: "Design-Flexibilität",
          wix: { score: 7, text: "Templates anpassbar" },
          custom: { score: 10, text: "Komplett individuell" }
        },
        {
          icon: WrenchScrewdriverIcon,
          name: "Wartbarkeit",
          wix: { score: 9, text: "Automatische Updates" },
          custom: { score: 7, text: "Manuelle Wartung" }
        },
        {
          icon: MagnifyingGlassIcon,
          name: "SEO-Potential",
          wix: { score: 8, text: "Gut optimiert" },
          custom: { score: 10, text: "Maximale Kontrolle" }
        },
        {
          icon: ClockIcon,
          name: "Zukunftssicherheit",
          wix: { score: 8, text: "Platform-abhängig" },
          custom: { score: 10, text: "Vollständige Kontrolle" }
        }
      ],
      recommendation: {
        wix: {
          title: "Wix Studio ist perfekt für Sie, wenn:",
          points: [
            "Sie schnell online gehen möchten",
            "Ihr Budget begrenzt ist",
            "Sie eine einfache Wartung bevorzugen",
            "Standard-Funktionen ausreichen",
            "Sie regelmäßig Content aktualisieren möchten"
          ]
        },
        custom: {
          title: "Individuelle Entwicklung ist ideal, wenn:",
          points: [
            "Sie einzigartige Funktionen benötigen",
            "Maximale Performance wichtig ist",
            "Sie vollständige Kontrolle wollen",
            "Langfristige Skalierung geplant ist",
            "Spezielle Integrationen erforderlich sind"
          ]
        }
      }
    },
    en: {
      title: "Wix Studio vs. Custom Development",
      subtitle: "What fits you? Find the perfect solution for your project.",
      tabs: {
        comparison: "Comparison",
        calculator: "Cost Calculator",
        recommendation: "Recommendation"
      },
      criteria: [
        {
          icon: CurrencyEuroIcon,
          name: "Cost",
          wix: { score: 9, text: "From €500 - Very affordable" },
          custom: { score: 5, text: "From €2,500 - Higher investment" }
        },
        {
          icon: BoltIcon,
          name: "Development Time",
          wix: { score: 10, text: "5-10 days - Very fast" },
          custom: { score: 6, text: "2-4 weeks - More time" }
        },
        {
          icon: PaintBrushIcon,
          name: "Design Flexibility",
          wix: { score: 7, text: "Customizable templates" },
          custom: { score: 10, text: "Completely individual" }
        },
        {
          icon: WrenchScrewdriverIcon,
          name: "Maintainability",
          wix: { score: 9, text: "Automatic updates" },
          custom: { score: 7, text: "Manual maintenance" }
        },
        {
          icon: MagnifyingGlassIcon,
          name: "SEO Potential",
          wix: { score: 8, text: "Well optimized" },
          custom: { score: 10, text: "Maximum control" }
        },
        {
          icon: ClockIcon,
          name: "Future-proof",
          wix: { score: 8, text: "Platform-dependent" },
          custom: { score: 10, text: "Full control" }
        }
      ],
      recommendation: {
        wix: {
          title: "Wix Studio is perfect for you if:",
          points: [
            "You want to go online quickly",
            "Your budget is limited",
            "You prefer easy maintenance",
            "Standard features are sufficient",
            "You want to update content regularly"
          ]
        },
        custom: {
          title: "Custom development is ideal if:",
          points: [
            "You need unique features",
            "Maximum performance is important",
            "You want full control",
            "Long-term scaling is planned",
            "Special integrations are required"
          ]
        }
      }
    }
  };

  const ScoreBar = ({ score, label, color = "blue" }) => (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600 dark:text-gray-300">{label}</span>
        <span className="font-semibold text-gray-900 dark:text-white">{score}/10</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${
            color === 'blue' 
              ? 'from-blue-500 to-blue-600' 
              : 'from-purple-500 to-purple-600'
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${score * 10}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <img
          src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
          alt="Development Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
            {Object.entries(content[language].tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Content */}
        {activeTab === 'comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Wix Studio Column */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-blue-200 dark:border-blue-800">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PaintBrushIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Wix Studio</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Schnell & Effizient</p>
              </div>

              <div className="space-y-6">
                {content[language].criteria.map((criterion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      <criterion.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="font-medium text-gray-900 dark:text-white">{criterion.name}</span>
                    </div>
                    <ScoreBar score={criterion.wix.score} label={criterion.wix.text} color="blue" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* VS Divider */}
            <div className="flex items-center justify-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-white font-bold text-xl">VS</span>
              </motion.div>
            </div>

            {/* Custom Development Column */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-purple-200 dark:border-purple-800">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CodeBracketIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Individuelle Entwicklung</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">Flexibel & Skalierbar</p>
              </div>

              <div className="space-y-6">
                {content[language].criteria.map((criterion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      <criterion.icon className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <span className="font-medium text-gray-900 dark:text-white">{criterion.name}</span>
                    </div>
                    <ScoreBar score={criterion.custom.score} label={criterion.custom.text} color="purple" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Recommendation Section */}
        {activeTab === 'recommendation' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Wix Recommendation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {content[language].recommendation.wix.title}
              </h3>
              <ul className="space-y-4">
                {content[language].recommendation.wix.points.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Custom Recommendation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                {content[language].recommendation.custom.title}
              </h3>
              <ul className="space-y-4">
                {content[language].recommendation.custom.points.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {language === 'de' ? 'Kostenlose Beratung buchen' : 'Book Free Consultation'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;