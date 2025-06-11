import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleContactClick = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="lg:col-span-1 order-1">
              <Sidebar onContactClick={handleContactClick} />
            </div>
            <div className="lg:col-span-2 order-2">
              <AboutSection />
            </div>
          </div>
        );
      case 'resume':
        return <ResumeSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default Index;
