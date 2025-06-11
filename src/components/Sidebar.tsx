import React from 'react';
import { Mail, Phone, Calendar, MapPin, Linkedin, Facebook, Instagram, Github } from 'lucide-react';

interface SidebarProps {
  onContactClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onContactClick }) => {
  return (
    <aside className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-[350px] mx-auto lg:sticky lg:top-8">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img 
            src="my_avtar.jpg" 
            alt="Hitesh Mohanty" 
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-gray-200"
          />
        </div>

        <div className="text-center mb-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-portfolio-dark">Mohanty Hitesh</h1>
          <p className="text-sm sm:text-base text-portfolio-text-light">Data Scientist</p>
        </div>

        {/* Contact Details */}
        <div className="mt-4 space-y-4 w-full">
          <div className="border-t border-b border-gray-200 py-4">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Email</p>
                  <a href="mailto:mohantyhitesh4495@gmail.com" className="text-xs sm:text-sm text-portfolio-dark hover:text-portfolio-primary break-all">
                    mohantyhitesh4495@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                  <a href="tel:+917205374495" className="text-xs sm:text-sm text-portfolio-dark hover:text-portfolio-primary">
                    +91 7205374495
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Birthday</p>
                  <time className="text-xs sm:text-sm text-portfolio-dark">September 25, 2002</time>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Location</p>
                  <address className="text-xs sm:text-sm text-portfolio-dark not-italic">Bhubaneswar, Odisha, India</address>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="py-4">
            <ul className="flex justify-center space-x-3">
              <li>
                <a href="https://www.linkedin.com/in/hitesh-mohanty8/" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-portfolio-primary text-portfolio-dark hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/hitesh.mohanty.3348/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-portfolio-primary text-portfolio-dark hover:text-white transition-colors">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/im_hitesh_2509/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-portfolio-primary text-portfolio-dark hover:text-white transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Mohanty-Hitesh-4495" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-portfolio-primary text-portfolio-dark hover:text-white transition-colors">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Me Button */}
          <button 
            onClick={onContactClick}
            className="w-full py-2 sm:py-3 px-4 rounded-md bg-portfolio-primary text-white text-sm sm:text-base font-medium hover:bg-portfolio-primary/90 transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
