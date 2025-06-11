import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const projects = [
  {
    id: 2,
    title: "AI-Powered Resume Analyzer",
    category: "ai/ml",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/Mohanty-Hitesh-4495/AI-Powered_Resume_Analyzer"
  },
  {
    id: 3,
    title: "Crop Recommendation System",
    category: "ai/ml",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/Mohanty-Hitesh-4495/Crop-Recommendation-System"
  },
  {
    id: 6,
    title: "To Do List with Priority",
    category: "java app",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/syedsadiquh/PriorPlan"
  },
  {
    id: 7,
    title: "Hospital management System",
    category: "java app",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/Mohanty-Hitesh-4495/Hospital-Management-System"
  },
  {
    id: 8,
    title: "Indian Script Classification",
    category: "ai/ml",
    image: "textual image classification model.png",
    github: "https://github.com/Mohanty-Hitesh-4495/Indian-Script-Classification"
  },
  {
    id: 5,
    title: "Expose Game",
    category: "web design",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/Mohanty-Hitesh-4495/The-Expose_Game"
  },
  {
    id: 9,
    title: "Talent Bridge",
    category: "hackathon",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/ankitku3101/TalentBridge"
  },
  {
    id: 10,
    title: "Carbon Emission Dashboard",
    category: "hackathon",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/ankitku3101/Carbon-Emissions-Dashboard"
  },
  {
    id: 11,
    title: "Disaster Management System",
    category: "hackathon",
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/570/025/small_2x/rescuer-background-illustration-vector.jpg",
    github: "https://github.com/ankitku3101/disaster-management-project",
    live: "https://disaster-management-project-self.vercel.app/"
  },
  {
    id: 12,
    title: "ResumeForge - AI Resume Builder",
    category: "ai/ml",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/Mohanty-Hitesh-4495/ResumeForge-resumebuilder"
  }
];

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const filterItems = [
    { id: 'all', label: 'All' },
    { id: 'ai/ml', label: 'AI/ML' },
    { id: 'java app', label: 'Java App' },
    { id: 'hackathon', label: 'Hackathon Projects' },
    { id: 'web design', label: 'Web Design' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="section-transition max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <header className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-portfolio-dark mb-2">Projects</h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
      </header>

      <section>
        <div className="mb-8">
          <ul className="hidden md:flex space-x-4 mb-6">
            {filterItems.map(item => (
              <li key={item.id}>
                <button
                  className={`px-4 py-2 rounded-md transition-colors font-medium ${
                    filter === item.id
                      ? 'bg-portfolio-primary text-white'
                      : 'bg-white text-portfolio-text-dark hover:bg-gray-100'
                  }`}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Select Dropdown */}
          <div className="md:hidden relative mb-6">
            <button
              className="w-full flex items-center justify-between bg-white px-4 py-3 rounded-md shadow-sm border border-gray-200"
              onClick={() => setIsOpenSelect(!isOpenSelect)}
            >
              <span>{filterItems.find(item => item.id === filter)?.label || 'Select Category'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isOpenSelect && (
              <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                {filterItems.map(item => (
                  <li key={item.id}>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setFilter(item.id);
                        setIsOpenSelect(false);
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="block group">
                <figure className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Eye className="text-white w-8 h-8" />
                  </div>
                </figure>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-portfolio-dark truncate">{project.title}</h3>
                  <p className="text-sm text-portfolio-text-light capitalize">{project.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
