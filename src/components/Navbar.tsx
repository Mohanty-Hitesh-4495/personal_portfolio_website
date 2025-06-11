import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Projects' },
    // { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white rounded-2xl shadow-lg p-2 mb-8">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-end mb-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-portfolio-text-dark hover:text-portfolio-primary"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`flex flex-col lg:flex-row lg:flex-wrap justify-center space-y-2 lg:space-y-0 lg:space-x-2 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden lg:flex'}`}>
        {tabs.map((tab) => (
          <li key={tab.id} className="w-full lg:w-auto">
            <button
              className={cn(
                "w-full lg:w-auto px-4 py-2 text-portfolio-text-dark transition-colors rounded-md",
                activeTab === tab.id ? "active-tab font-medium" : "hover:text-portfolio-primary"
              )}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMenuOpen(false);
              }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
