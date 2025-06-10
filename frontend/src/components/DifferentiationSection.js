import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  StarIcon,
  ClockIcon,
  CurrencyEuroIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const DifferentiationSection = () => {
  const { language } = useTheme();

  const content = {
    de: {
      title: "Warum Kronhardt Digital?",
      subtitle: "Entdecken Sie, was uns von anderen Agenturen unterscheidet",
      differentiators: [
        {
          icon: ClockIcon,
          title: "Blitzschnelle Umsetzung",
          description: "Während andere Wochen brauchen, liefern wir in 8-10 Tagen",
          metric: "3x schneller",
          color: "blue",
          comparison: {
            us: "8-10 Tage",
            others: "4-8 Wochen"
          }
        },
        {
          icon: CurrencyEuroIcon,
          title: "Transparente Preisgestaltung",
          description: "Keine versteckten Kosten, keine Überraschungen - alles klar definiert",
          metric: "100% transparent",
          color: "green",
          comparison: {
            us: "Festpreise ab €499",
            others: "€2000+ mit Extras"
          }
        },
        {
          icon: UserGroupIcon,
          title: "Persönliche Betreuung",
          description: "Direkter Kontakt zum Geschäftsführer, keine Callcenter",
          metric: "1:1 Support",
          color: "purple",
          comparison: {
            us: "Persönlicher Ansprechpartner",
            others: "Anonyme Ticketsysteme"
          }
        },
        {
          icon: BoltIcon,
          title: "Modernste Technologie",
          description: "React, Next.js, moderne Tools - nicht veraltete Systeme",
          metric: "2025 Tech-Stack",
          color: "indigo",
          comparison: {
            us: "Neueste Frameworks",
            others: "Veraltete CMS-Systeme"
          }
        },
        {
          icon: ChartBarIcon,
          title: "Messbare Ergebnisse",
          description: "Lighthouse 95+, Core Web Vitals optimiert, nachweisbare Performance",
          metric: "95+ Lighthouse",
          color: "orange",
          comparison: {
            us: "Performance-garantiert",
            others: "Langsame Websites"
          }
        },
        {
          icon: ShieldCheckIcon,
          title: "Lebenslanger Support",
          description: "Wir lassen Sie nicht allein - Support auch Jahre später",
          metric: "∞ Support",
          color: "emerald",
          comparison: {
            us: "Lebenslanger Service",
            others: "Support-Ende nach Projekt"
          }
        }
      ],
      testimonial: {
        quote: "Kronhardt Digital hat in 9 Tagen geliefert, wofür unsere vorherige Agentur 3 Monate brauchte. Unglaublich!",
        author: "Sarah M.",
        role: "CEO, TechStartup GmbH",
        rating: 5
      }
    },
    en: {
      title: "Why Kronhardt Digital?",
      subtitle: "Discover what sets us apart from other agencies",
      differentiators: [
        {
          icon: ClockIcon,
          title: "Lightning-fast Implementation",
          description: "While others take weeks, we deliver in 8-10 days",
          metric: "3x faster",
          color: "blue",
          comparison: {
            us: "8-10 days",
            others: "4-8 weeks"
          }
        },
        {
          icon: CurrencyEuroIcon,
          title: "Transparent Pricing",
          description: "No hidden costs, no surprises - everything clearly defined",
          metric: "100% transparent",
          color: "green",
          comparison: {
            us: "Fixed prices from €499",
            others: "€2000+ with extras"
          }
        },
        {
          icon: UserGroupIcon,
          title: "Personal Support",
          description: "Direct contact with the CEO, no call centers",
          metric: "1:1 Support",
          color: "purple",
          comparison: {
            us: "Personal contact person",
            others: "Anonymous ticket systems"
          }
        },
        {
          icon: BoltIcon,
          title: "Latest Technology",
          description: "React, Next.js, modern tools - not outdated systems",
          metric: "2025 Tech Stack",
          color: "indigo",
          comparison: {
            us: "Latest frameworks",
            others: "Outdated CMS systems"
          }
        },
        {
          icon: ChartBarIcon,
          title: "Measurable Results",
          description: "Lighthouse 95+, Core Web Vitals optimized, proven performance",
          metric: "95+ Lighthouse",
          color: "orange",
          comparison: {
            us: "Performance guaranteed",
            others: "Slow websites"
          }
        },
        {
          icon: ShieldCheckIcon,
          title: "Lifetime Support",
          description: "We don't leave you alone - support even years later",
          metric: "∞ Support",
          color: "emerald",
          comparison: {
            us: "Lifetime service",
            others: "Support ends after project"
          }
        }
      ],
      testimonial: {
        quote: "Kronhardt Digital delivered in 9 days what our previous agency needed 3 months for. Incredible!",
        author: "Sarah M.",
        role: "CEO, TechStartup GmbH",
        rating: 5
      }
    },
    fr: {
      title: "Pourquoi Kronhardt Digital ?",
      subtitle: "Découvrez ce qui nous distingue des autres agences",
      differentiators: [
        {
          icon: ClockIcon,
          title: "Mise en œuvre ultra-rapide",
          description: "Pendant que d'autres prennent des semaines, nous livrons en 8-10 jours",
          metric: "3x plus rapide",
          color: "blue",
          comparison: {
            us: "8-10 jours",
            others: "4-8 semaines"
          }
        },
        {
          icon: CurrencyEuroIcon,
          title: "Prix transparents",
          description: "Pas de coûts cachés, pas de surprises - tout clairement défini",
          metric: "100% transparent",
          color: "green",
          comparison: {
            us: "Prix fixes à partir de 499€",
            others: "2000€+ avec extras"
          }
        },
        {
          icon: UserGroupIcon,
          title: "Support personnel",
          description: "Contact direct avec le PDG, pas de centres d'appels",
          metric: "Support 1:1",
          color: "purple",
          comparison: {
            us: "Personne de contact personnelle",
            others: "Systèmes de tickets anonymes"
          }
        },
        {
          icon: BoltIcon,
          title: "Technologie de pointe",
          description: "React, Next.js, outils modernes - pas de systèmes obsolètes",
          metric: "Tech Stack 2025",
          color: "indigo",
          comparison: {
            us: "Derniers frameworks",
            others: "Systèmes CMS obsolètes"
          }
        },
        {
          icon: ChartBarIcon,
          title: "Résultats mesurables",
          description: "Lighthouse 95+, Core Web Vitals optimisés, performance prouvée",
          metric: "95+ Lighthouse",
          color: "orange",
          comparison: {
            us: "Performance garantie",
            others: "Sites web lents"
          }
        },
        {
          icon: ShieldCheckIcon,
          title: "Support à vie",
          description: "Nous ne vous laissons pas seul - support même des années plus tard",
          metric: "∞ Support",
          color: "emerald",
          comparison: {
            us: "Service à vie",
            others: "Support se termine après projet"
          }
        }
      ],
      testimonial: {
        quote: "Kronhardt Digital a livré en 9 jours ce pour quoi notre agence précédente avait besoin de 3 mois. Incroyable !",
        author: "Sarah M.",
        role: "PDG, TechStartup GmbH",
        rating: 5
      }
    },
    es: {
      title: "¿Por qué Kronhardt Digital?",
      subtitle: "Descubre qué nos distingue de otras agencias",
      differentiators: [
        {
          icon: ClockIcon,
          title: "Implementación ultrarrápida",
          description: "Mientras otros tardan semanas, nosotros entregamos en 8-10 días",
          metric: "3x más rápido",
          color: "blue",
          comparison: {
            us: "8-10 días",
            others: "4-8 semanas"
          }
        },
        {
          icon: CurrencyEuroIcon,
          title: "Precios transparentes",
          description: "Sin costos ocultos, sin sorpresas - todo claramente definido",
          metric: "100% transparente",
          color: "green",
          comparison: {
            us: "Precios fijos desde €499",
            others: "€2000+ con extras"
          }
        },
        {
          icon: UserGroupIcon,
          title: "Soporte personal",
          description: "Contacto directo con el CEO, sin centros de llamadas",
          metric: "Soporte 1:1",
          color: "purple",
          comparison: {
            us: "Persona de contacto personal",
            others: "Sistemas de tickets anónimos"
          }
        },
        {
          icon: BoltIcon,
          title: "Tecnología de vanguardia",
          description: "React, Next.js, herramientas modernas - no sistemas obsoletos",
          metric: "Tech Stack 2025",
          color: "indigo",
          comparison: {
            us: "Últimos frameworks",
            others: "Sistemas CMS obsoletos"
          }
        },
        {
          icon: ChartBarIcon,
          title: "Resultados medibles",
          description: "Lighthouse 95+, Core Web Vitals optimizados, rendimiento comprobado",
          metric: "95+ Lighthouse",
          color: "orange",
          comparison: {
            us: "Rendimiento garantizado",
            others: "Sitios web lentos"
          }
        },
        {
          icon: ShieldCheckIcon,
          title: "Soporte de por vida",
          description: "No te dejamos solo - soporte incluso años después",
          metric: "∞ Soporte",
          color: "emerald",
          comparison: {
            us: "Servicio de por vida",
            others: "Soporte termina después del proyecto"
          }
        }
      ],
      testimonial: {
        quote: "Kronhardt Digital entregó en 9 días lo que nuestra agencia anterior necesitó 3 meses. ¡Increíble!",
        author: "Sarah M.",
        role: "CEO, TechStartup GmbH",
        rating: 5
      }
    },
    it: {
      title: "Perché Kronhardt Digital?",
      subtitle: "Scopri cosa ci distingue dalle altre agenzie",
      differentiators: [
        {
          icon: ClockIcon,
          title: "Implementazione ultra-veloce",
          description: "Mentre altri impiegano settimane, noi consegniamo in 8-10 giorni",
          metric: "3x più veloce",
          color: "blue",
          comparison: {
            us: "8-10 giorni",
            others: "4-8 settimane"
          }
        },
        {
          icon: CurrencyEuroIcon,
          title: "Prezzi trasparenti",
          description: "Nessun costo nascosto, nessuna sorpresa - tutto chiaramente definito",
          metric: "100% trasparente",
          color: "green",
          comparison: {
            us: "Prezzi fissi da €499",
            others: "€2000+ con extra"
          }
        },
        {
          icon: UserGroupIcon,
          title: "Supporto personale",
          description: "Contatto diretto con il CEO, nessun call center",
          metric: "Supporto 1:1",
          color: "purple",
          comparison: {
            us: "Persona di contatto personale",
            others: "Sistemi di ticket anonimi"
          }
        },
        {
          icon: BoltIcon,
          title: "Tecnologia all'avanguardia",
          description: "React, Next.js, strumenti moderni - non sistemi obsoleti",
          metric: "Tech Stack 2025",
          color: "indigo",
          comparison: {
            us: "Ultimi framework",
            others: "Sistemi CMS obsoleti"
          }
        },
        {
          icon: ChartBarIcon,
          title: "Risultati misurabili",
          description: "Lighthouse 95+, Core Web Vitals ottimizzati, performance comprovate",
          metric: "95+ Lighthouse",
          color: "orange",
          comparison: {
            us: "Performance garantite",
            others: "Siti web lenti"
          }
        },
        {
          icon: ShieldCheckIcon,
          title: "Supporto a vita",
          description: "Non ti lasciamo solo - supporto anche anni dopo",
          metric: "∞ Supporto",
          color: "emerald",
          comparison: {
            us: "Servizio a vita",
            others: "Supporto finisce dopo progetto"
          }
        }
      ],
      testimonial: {
        quote: "Kronhardt Digital ha consegnato in 9 giorni quello per cui la nostra agenzia precedente aveva bisogno di 3 mesi. Incredibile!",
        author: "Sarah M.",
        role: "CEO, TechStartup GmbH",
        rating: 5
      }
    },
    nl: {
      title: "Waarom Kronhardt Digital?",
      subtitle: "Ontdek wat ons onderscheidt van andere bureaus",
      differentiators: [
        {
          icon: ClockIcon,
          title: "Bliksemsnelle implementatie",
          description: "Terwijl anderen weken nodig hebben, leveren wij in 8-10 dagen",
          metric: "3x sneller",
          color: "blue",
          comparison: {
            us: "8-10 dagen",
            others: "4-8 weken"
          }
        },
        {
          icon: CurrencyEuroIcon,
          title: "Transparante prijzen",
          description: "Geen verborgen kosten, geen verrassingen - alles duidelijk gedefinieerd",
          metric: "100% transparant",
          color: "green",
          comparison: {
            us: "Vaste prijzen vanaf €499",
            others: "€2000+ met extra's"
          }
        },
        {
          icon: UserGroupIcon,
          title: "Persoonlijke ondersteuning",
          description: "Direct contact met de CEO, geen callcenters",
          metric: "1:1 Ondersteuning",
          color: "purple",
          comparison: {
            us: "Persoonlijk contactpersoon",
            others: "Anonieme ticketsystemen"
          }
        },
        {
          icon: BoltIcon,
          title: "Modernste technologie",
          description: "React, Next.js, moderne tools - geen verouderde systemen",
          metric: "2025 Tech Stack",
          color: "indigo",
          comparison: {
            us: "Nieuwste frameworks",
            others: "Verouderde CMS-systemen"
          }
        },
        {
          icon: ChartBarIcon,
          title: "Meetbare resultaten",
          description: "Lighthouse 95+, Core Web Vitals geoptimaliseerd, bewezen prestaties",
          metric: "95+ Lighthouse",
          color: "orange",
          comparison: {
            us: "Prestaties gegarandeerd",
            others: "Langzame websites"
          }
        },
        {
          icon: ShieldCheckIcon,
          title: "Levenslange ondersteuning",
          description: "We laten je niet alleen - ondersteuning zelfs jaren later",
          metric: "∞ Ondersteuning",
          color: "emerald",
          comparison: {
            us: "Levenslange service",
            others: "Ondersteuning eindigt na project"
          }
        }
      ],
      testimonial: {
        quote: "Kronhardt Digital leverde in 9 dagen wat ons vorige bureau 3 maanden voor nodig had. Ongelooflijk!",
        author: "Sarah M.",
        role: "CEO, TechStartup GmbH",
        rating: 5
      }
    }
  };

  const currentContent = content[language] || content.de;

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800"
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600",
        light: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-800"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        light: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-800"
      },
      emerald: {
        bg: "from-emerald-500 to-emerald-600",
        light: "bg-emerald-50 dark:bg-emerald-900/20",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-200 dark:border-emerald-800"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="differentiation" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-5 dark:opacity-10"
            style={{
              background: `linear-gradient(45deg, #3B82F6, #8B5CF6)`,
              left: `${-10 + i * 25}%`,
              top: `${-10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
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

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {currentContent.differentiators.map((item, index) => {
            const colorClasses = getColorClasses(item.color);
            return (
              <motion.div
                key={index}
                className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 group hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 ${colorClasses.text}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metric Badge */}
                <div className={`inline-flex items-center px-4 py-2 ${colorClasses.light} ${colorClasses.border} border rounded-full mb-6`}>
                  <span className={`text-sm font-semibold ${colorClasses.text}`}>
                    {item.metric}
                  </span>
                </div>

                {/* Comparison */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Wir:</span>
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">{item.comparison.us}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Andere:</span>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400">{item.comparison.others}</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${colorClasses.bg} rounded-full opacity-60`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.5,
                    repeat: Infinity
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Quote */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl text-blue-200 mb-4">"</div>
              <p className="text-2xl lg:text-3xl font-light italic leading-relaxed">
                {currentContent.testimonial.quote}
              </p>
            </motion.div>

            {/* Author */}
            <motion.div
              className="flex items-center justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="font-bold text-lg">{currentContent.testimonial.author}</div>
                <div className="text-blue-200">{currentContent.testimonial.role}</div>
                <div className="flex justify-center mt-2">
                  {[...Array(currentContent.testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    >
                      <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center">
              <HeartIcon className="h-5 w-5 mr-2" />
              {language === 'de' ? 'Überzeugen Sie sich selbst' : 
               language === 'fr' ? 'Convainquez-vous' :
               language === 'es' ? 'Convéncete tú mismo' :
               language === 'it' ? 'Convinciti tu stesso' :
               language === 'nl' ? 'Overtuig jezelf' : 'See for yourself'}
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;