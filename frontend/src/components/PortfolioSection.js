import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  EyeIcon, 
  ArrowTopRightOnSquareIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ShoppingCartIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const PortfolioSection = () => {
  const { language } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const content = {
    de: {
      title: "Portfolio",
      subtitle: "Erfolgreiche Projekte unserer Kunden",
      filters: {
        all: "Alle Projekte",
        wix: "Wix Studio",
        custom: "Individuell",
        ecommerce: "E-Commerce",
        business: "Business"
      },
      projects: [
        {
          id: 1,
          title: "Modern E-Commerce Store",
          category: "ecommerce",
          type: "Wix Studio",
          description: "Vollständiger Online-Shop mit modernem Design und optimierter User Experience",
          image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
          tags: ["E-Commerce", "Responsive", "SEO"],
          stats: { views: "15.2k", conversions: "+250%" }
        },
        {
          id: 2,
          title: "Corporate Business Website",
          category: "business",
          type: "Individuell",
          description: "Professionelle Unternehmenswebsite mit Custom React Development",
          image: "https://images.unsplash.com/photo-1649150849642-c53366ebb480",
          tags: ["React", "Performance", "Corporate"],
          stats: { views: "8.7k", conversions: "+180%" }
        },
        {
          id: 3,
          title: "Restaurant & Catering",
          category: "wix",
          type: "Wix Studio",
          description: "Elegante Website für Restaurant mit Online-Reservierung und Menü-Integration",
          image: "https://images.pexels.com/photos/2832772/pexels-photo-2832772.jpeg",
          tags: ["Restaurant", "Booking", "Mobile"],
          stats: { views: "12.3k", conversions: "+300%" }
        },
        {
          id: 4,
          title: "Tech Startup Platform",
          category: "custom",
          type: "Individuell",
          description: "Innovative SaaS-Platform mit komplexen Datenvisualisierungen",
          image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
          tags: ["SaaS", "Dashboard", "API"],
          stats: { views: "22.1k", conversions: "+420%" }
        },
        {
          id: 5,
          title: "Healthcare Clinic",
          category: "business",
          type: "Wix Studio",
          description: "Vertrauensvolle Website für medizinische Praxis mit Terminbuchung",
          image: "https://images.unsplash.com/photo-1649150849642-c53366ebb480",
          tags: ["Healthcare", "Appointments", "Trust"],
          stats: { views: "9.8k", conversions: "+200%" }
        },
        {
          id: 6,
          title: "Fashion E-Commerce",
          category: "ecommerce",
          type: "Individuell",
          description: "Hochmoderner Fashion-Store mit AR-Integration und personalisiertem Shopping",
          image: "https://images.pexels.com/photos/2832772/pexels-photo-2832772.jpeg",
          tags: ["Fashion", "AR", "Personalization"],
          stats: { views: "18.9k", conversions: "+380%" }
        }
      ]
    },
    en: {
      title: "Portfolio",
      subtitle: "Successful projects from our clients",
      filters: {
        all: "All Projects",
        wix: "Wix Studio",
        custom: "Custom",
        ecommerce: "E-Commerce",
        business: "Business"
      },
      projects: [
        {
          id: 1,
          title: "Modern E-Commerce Store",
          category: "ecommerce",
          type: "Wix Studio",
          description: "Complete online store with modern design and optimized user experience",
          image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
          tags: ["E-Commerce", "Responsive", "SEO"],
          stats: { views: "15.2k", conversions: "+250%" }
        },
        {
          id: 2,
          title: "Corporate Business Website",
          category: "business",
          type: "Custom",
          description: "Professional corporate website with custom React development",
          image: "https://images.unsplash.com/photo-1649150849642-c53366ebb480",
          tags: ["React", "Performance", "Corporate"],
          stats: { views: "8.7k", conversions: "+180%" }
        },
        {
          id: 3,
          title: "Restaurant & Catering",
          category: "wix",
          type: "Wix Studio",
          description: "Elegant restaurant website with online reservation and menu integration",
          image: "https://images.pexels.com/photos/2832772/pexels-photo-2832772.jpeg",
          tags: ["Restaurant", "Booking", "Mobile"],
          stats: { views: "12.3k", conversions: "+300%" }
        },
        {
          id: 4,
          title: "Tech Startup Platform",
          category: "custom",
          type: "Custom",
          description: "Innovative SaaS platform with complex data visualizations",
          image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
          tags: ["SaaS", "Dashboard", "API"],
          stats: { views: "22.1k", conversions: "+420%" }
        },
        {
          id: 5,
          title: "Healthcare Clinic",
          category: "business",
          type: "Wix Studio",
          description: "Trustworthy website for medical practice with appointment booking",
          image: "https://images.unsplash.com/photo-1649150849642-c53366ebb480",
          tags: ["Healthcare", "Appointments", "Trust"],
          stats: { views: "9.8k", conversions: "+200%" }
        },
        {
          id: 6,
          title: "Fashion E-Commerce",
          category: "ecommerce",
          type: "Custom",
          description: "Ultra-modern fashion store with AR integration and personalized shopping",
          image: "https://images.pexels.com/photos/2832772/pexels-photo-2832772.jpeg",
          tags: ["Fashion", "AR", "Personalization"],
          stats: { views: "18.9k", conversions: "+380%" }
        }
      ]
    }
  };

  const filteredProjects = content[language].projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const getFilterIcon = (filter) => {
    const icons = {
      all: ComputerDesktopIcon,
      wix: DevicePhoneMobileIcon,
      custom: ComputerDesktopIcon,
      ecommerce: ShoppingCartIcon,
      business: BuildingOfficeIcon
    };
    return icons[filter] || ComputerDesktopIcon;
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500 to-blue-500 transform skew-x-12"></div>
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

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.entries(content[language].filters).map(([key, label]) => {
            const IconComponent = getFilterIcon(key);
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600'
                }`}
              >
                <IconComponent className="h-5 w-5 mr-2" />
                {label}
              </button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              layout
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === 'Wix Studio' || project.type === 'Wix Studio'
                      ? 'bg-blue-600 text-white'
                      : 'bg-purple-600 text-white'
                  }`}>
                    {project.type}
                  </span>
                </div>

                {/* Actions */}
                <motion.div
                  className="absolute top-4 right-4 flex gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scale: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="flex justify-between text-white text-sm">
                    <span>{project.stats.views} Views</span>
                    <span>{project.stats.conversions} Conversion</span>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 dark:group-hover:border-blue-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {language === 'de' ? 'Ihr Projekt besprechen' : 'Discuss Your Project'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;