import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingAnimation from './components/LoadingAnimation';
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
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
        
        {!isLoading && (
          <>
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
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;