import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import OptimizationSection from './components/OptimizationSection';
import DeviceShowcaseSection from './components/DeviceShowcaseSection';
import DifferentiationSection from './components/DifferentiationSection';
import ComparisonSection from './components/ComparisonSection';
import TimelineSection from './components/TimelineSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <motion.div 
        className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <OptimizationSection />
          <DeviceShowcaseSection />
          <DifferentiationSection />
          <ComparisonSection />
          <TimelineSection />
          <PortfolioSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;