import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  PaintBrushIcon, 
  CodeBracketIcon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

const TimelineSection = () => {
  const { language } = useTheme();
  const [activeTimeline, setActiveTimeline] = useState('wix');

  const content = {
    de: {
      title: "Projektablauf im Detail",
      subtitle: "Transparente Prozesse für optimale Ergebnisse",
      switchText: {
        wix: "Wix Studio Workflow",
        custom: "Individuelle Entwicklung"
      },
      timelines: {
        wix: {
          title: "Wix Studio Projekt",
          duration: "8-10 Tage",
          color: "blue",
          steps: [
            {
              day: "Tag 1",
              title: "Kickoff & Strategie",
              description: "Anforderungsanalyse, Zieldefinition und Content-Planung",
              icon: ChatBubbleBottomCenterTextIcon,
              details: ["Zielgruppenanalyse", "Funktionsumfang definieren", "Design-Briefing", "Content-Strategie"]
            },
            {
              day: "Tag 2-3",
              title: "Design & Struktur",
              description: "Template-Auswahl, Anpassung und Strukturierung der Inhalte",
              icon: PaintBrushIcon,
              details: ["Template-Auswahl", "Farbschema anpassen", "Layout strukturieren", "Navigation planen"]
            },
            {
              day: "Tag 4-6",
              title: "Umsetzung & Content",
              description: "Implementation der Designs und Integration aller Inhalte",
              icon: CodeBracketIcon,
              details: ["Seiten erstellen", "Content integrieren", "Funktionen einrichten", "Responsive optimieren"]
            },
            {
              day: "Tag 7-8",
              title: "Testing & Feedback",
              description: "Qualitätssicherung, Tests und Feedback-Integration",
              icon: CheckCircleIcon,
              details: ["Cross-Browser Tests", "Mobile Optimierung", "SEO-Check", "Kundenfeedback"]
            },
            {
              day: "Tag 9-10",
              title: "Launch & Schulung",
              description: "Go-Live der Website und Einweisung in das CMS",
              icon: RocketLaunchIcon,
              details: ["Domain-Setup", "SSL-Konfiguration", "CMS-Schulung", "Support-Setup"]
            }
          ]
        },
        custom: {
          title: "Individuelle Entwicklung",
          duration: "2-4 Wochen",
          color: "purple",
          steps: [
            {
              day: "Woche 1",
              title: "Konzeption & Design",
              description: "Detaillierte Planung, Wireframes und UI/UX Design",
              icon: PaintBrushIcon,
              details: ["User Journey Mapping", "Wireframes erstellen", "UI/UX Design", "Technische Architektur"]
            },
            {
              day: "Woche 2",
              title: "Frontend Entwicklung",
              description: "Implementation des Designs mit React und modernen Technologien",
              icon: CodeBracketIcon,
              details: ["React Setup", "Component Entwicklung", "State Management", "API Integration"]
            },
            {
              day: "Woche 3",
              title: "Backend & Integration",
              description: "Serverseitige Entwicklung und externe Integrations",
              icon: CheckCircleIcon,
              details: ["Backend API", "Datenbank Design", "Third-Party APIs", "Security Implementation"]
            },
            {
              day: "Woche 4",
              title: "Testing & Launch",
              description: "Umfassendes Testing, Optimierung und Deployment",
              icon: RocketLaunchIcon,
              details: ["Unit Testing", "E2E Testing", "Performance Optimierung", "Production Deployment"]
            }
          ]
        }
      }
    },
    en: {
      title: "Project Workflow in Detail",
      subtitle: "Transparent processes for optimal results",
      switchText: {
        wix: "Wix Studio Workflow",
        custom: "Custom Development"
      },
      timelines: {
        wix: {
          title: "Wix Studio Project",
          duration: "8-10 Days",
          color: "blue",
          steps: [
            {
              day: "Day 1",
              title: "Kickoff & Strategy",
              description: "Requirements analysis, goal definition and content planning",
              icon: ChatBubbleBottomCenterTextIcon,
              details: ["Target audience analysis", "Define scope", "Design briefing", "Content strategy"]
            },
            {
              day: "Day 2-3",
              title: "Design & Structure",
              description: "Template selection, customization and content structuring",
              icon: PaintBrushIcon,
              details: ["Template selection", "Adapt color scheme", "Structure layout", "Plan navigation"]
            },
            {
              day: "Day 4-6",
              title: "Implementation & Content",
              description: "Design implementation and integration of all content",
              icon: CodeBracketIcon,
              details: ["Create pages", "Integrate content", "Set up functions", "Optimize responsive"]
            },
            {
              day: "Day 7-8",
              title: "Testing & Feedback",
              description: "Quality assurance, testing and feedback integration",
              icon: CheckCircleIcon,
              details: ["Cross-browser tests", "Mobile optimization", "SEO check", "Customer feedback"]
            },
            {
              day: "Day 9-10",
              title: "Launch & Training",
              description: "Website go-live and CMS training",
              icon: RocketLaunchIcon,
              details: ["Domain setup", "SSL configuration", "CMS training", "Support setup"]
            }
          ]
        },
        custom: {
          title: "Custom Development",
          duration: "2-4 Weeks",
          color: "purple",
          steps: [
            {
              day: "Week 1",
              title: "Conception & Design",
              description: "Detailed planning, wireframes and UI/UX design",
              icon: PaintBrushIcon,
              details: ["User journey mapping", "Create wireframes", "UI/UX design", "Technical architecture"]
            },
            {
              day: "Week 2",
              title: "Frontend Development",
              description: "Design implementation with React and modern technologies",
              icon: CodeBracketIcon,
              details: ["React setup", "Component development", "State management", "API integration"]
            },
            {
              day: "Week 3",
              title: "Backend & Integration",
              description: "Server-side development and external integrations",
              icon: CheckCircleIcon,
              details: ["Backend API", "Database design", "Third-party APIs", "Security implementation"]
            },
            {
              day: "Week 4",
              title: "Testing & Launch",
              description: "Comprehensive testing, optimization and deployment",
              icon: RocketLaunchIcon,
              details: ["Unit testing", "E2E testing", "Performance optimization", "Production deployment"]
            }
          ]
        }
      }
    }
  };

  const timeline = content[language].timelines[activeTimeline];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <img
          src="https://images.unsplash.com/photo-1649150849642-c53366ebb480"
          alt="Timeline Background"
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

        {/* Timeline Switcher */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTimeline('wix')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTimeline === 'wix'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }`}
            >
              {content[language].switchText.wix}
            </button>
            <button
              onClick={() => setActiveTimeline('custom')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTimeline === 'custom'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
              }`}
            >
              {content[language].switchText.custom}
            </button>
          </div>
        </motion.div>

        {/* Timeline Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={activeTimeline}
        >
          <h3 className={`text-3xl font-bold mb-2 ${
            timeline.color === 'blue' 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-purple-600 dark:text-purple-400'
          }`}>
            {timeline.title}
          </h3>
          <div className="flex items-center justify-center">
            <ClockIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-2" />
            <span className="text-lg text-gray-600 dark:text-gray-300">{timeline.duration}</span>
          </div>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto">
          {timeline.steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              {index < timeline.steps.length - 1 && (
                <div className={`absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b ${
                  timeline.color === 'blue' 
                    ? 'from-blue-600 to-blue-300' 
                    : 'from-purple-600 to-purple-300'
                }`} />
              )}

              {/* Step Icon */}
              <motion.div
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  timeline.color === 'blue' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-purple-600 text-white'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="h-8 w-8" />
              </motion.div>

              {/* Step Content */}
              <div className="ml-8 flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      timeline.color === 'blue' 
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' 
                        : 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                    }`}>
                      {step.day}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>

                  {/* Step Details */}
                  <div className="grid grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + detailIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          timeline.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'
                        }`} />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            className={`px-8 py-4 font-semibold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
              timeline.color === 'blue'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
            }`}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {language === 'de' ? 'Projekt jetzt starten' : 'Start Project Now'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;