import React from 'react';
import { Code, Cpu, Layout, Terminal } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="section-transition max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-portfolio-dark mb-3">About Me</h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
      </header>

      {/* About Description */}
      <section className="mb-12">
        <p className="text-portfolio-text-light leading-relaxed mb-6">
          I'm Hitesh, passionate about Artificial Intelligence and Machine Learning, from India. My journey extends beyond traditional boundaries as I explore the intricacies of AI models. With a solid grounding in Java programming and a dedicated focus on Data Structures and Algorithms, I specialize in transforming complex challenges into elegant solutions.
        </p>
        <p className="text-portfolio-text-light leading-relaxed">
          My approach emphasizes creativity and intuition, ensuring that each project is not only functional but also aligned with your unique vision. Whether it's implementing hybrid AI models or mastering intricate algorithms, I strive to deliver solutions that seamlessly integrate innovation with practicality.
        </p>
      </section>

      {/* What I'm Doing */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-portfolio-dark mb-8">What I'm Doing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Gen-AI & Agentic AI", desc: "Developing intelligent autonomous systems and AI-driven applications.", icon: Cpu },
            { title: "Machine Learning & Deep Learning", desc: "Crafting predictive models and optimizing AI workflows.", icon: Cpu },
            { title: "Java Development", desc: "Building robust backend solutions with Java and database connectivity.", icon: Cpu },
            { title: "Data Structures & Algorithms", desc: "Designing efficient algorithms for optimized problem solving.", icon: Cpu }
          ].map((service, index) => (
            <div key={index} className="service-item bg-white p-6 rounded-lg shadow-md flex items-start space-x-5 hover:shadow-lg transition-shadow duration-300">
              <div className="service-icon-box h-14 w-14 bg-portfolio-primary/10 rounded-md flex items-center justify-center">
                <service.icon className="service-icon text-portfolio-primary w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-portfolio-dark mb-2">{service.title}</h4>
                <p className="text-portfolio-text-light leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honors & Awards with Effect */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-portfolio-dark mb-8">Honors & Awards</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "1st Runner-Up at GIET Hackfest 2025", desc: "Secured 1st Runner-Up position in the inter-college hackathon under the category of Smart Cities & Sustainability." },
            { title: "1st Runner-Up at BPUT Hackathon 2024", desc: "Achieved the Runner-up position at BPUT Hackathon 2024 under the Data Mining, AI & ML track." }
          ].map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-5 hover:shadow-lg transition-shadow duration-300">
              <div className="h-14 w-14 bg-portfolio-primary/10 rounded-md flex items-center justify-center">
                <img src="https://i.ibb.co/TcWx2wf/trophy.png" alt="Trophy" className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-portfolio-dark mb-2">{award.title}</h4>
                <p className="text-portfolio-text-light leading-relaxed">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-portfolio-dark mb-4">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Python</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="data:image/png;base64,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" alt="Langchain" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Langchian</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="data:image/png;base64,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" alt="Java" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">AG2</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000" alt="Tensorflow" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Tensorflow</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://icon.icepanel.io/Technology/svg/scikit-learn.svg" alt="scikit-learn" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Scikit-learn</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAdtAAZAA0" alt="Fastapi" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">FastAPI</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Java</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">JavaScript</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Firebase</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">MySQL</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Git</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-xs sm:text-sm text-center">Docker</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
