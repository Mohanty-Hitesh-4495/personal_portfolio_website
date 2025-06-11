import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const skills = [
    { name: "Programming Languages (Java and Python)", percentage: 90 },
    { name: "Data Structures and Algorithms", percentage: 80 },
    { name: "AI/ML", percentage: 70 },
    { name: "Generative AI & LLMs", percentage: 75 },
    { name: "Web Design", percentage: 50 }
  ];

  return (
    <div className="section-transition max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <header className="mb-8 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-dark mb-2">Resume</h2>
        <div className="w-20 sm:w-24 h-1 mx-auto bg-gradient-to-r from-portfolio-primary to-indigo-500 rounded"></div>
      </header>

      {/* Education Section */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-primary/10 rounded-md flex items-center justify-center mr-3 sm:mr-4">
            <BookOpen className="text-portfolio-primary w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-portfolio-dark">Education</h3>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-gray-300">
          {[
            {
              institution: "Gandhi Institute for Technology, Bhubaneswar",
              degree: "Bachelor of Technology in Computer Science Engineering",
              years: "2022 — 2026"
            },
            {
              institution: "Aska Science College, Ganjam",
              degree: "Higher Secondary Education with a strong focus on the Science stream.",
              years: "2020 — 2022"
            },
            {
              institution: "Shree Dhanvantary International School, Surat",
              degree: "Graduated with a strong academic record in High School.",
              years: "2015 — 2019"
            }
          ].map((edu, index) => (
            <div key={index} className="relative mb-8 sm:mb-10">
              <div className="absolute -left-[9px] sm:-left-[11px] top-1 w-4 h-4 sm:w-5 sm:h-5 bg-white border-4 border-portfolio-primary rounded-full"></div>
              <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-portfolio-dark">{edu.institution}</h4>
                  <span className="text-xs sm:text-sm bg-portfolio-primary/10 text-portfolio-primary px-2 sm:px-3 py-1 rounded-md w-fit">{edu.years}</span>
                </div>
                <p className="text-sm sm:text-base text-portfolio-text-light">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-primary/10 rounded-md flex items-center justify-center mr-3 sm:mr-4">
            <Briefcase className="text-portfolio-primary w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-portfolio-dark">Experience</h3>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-gray-300">
          {[
            {
              title: "Generative AI Intern",
              company: "Tata Group, Mumbai",
              duration: "Feb 2025 - Present",
              description: "Building an Advanced Finance Copilot for the Government of India using open-source generative models. Developing Multi-Agent Systems for document retrieval and collaborative financial analysis."
            },
            {
              title: "Artificial Intelligence and Data Science Intern",
              company: "National Institute of Technology, Rourkela",
              duration: "May 2024 - Jul 2024",
              description: "Conducted data analysis, built machine learning models, and enhanced my skills in Python, statistical modeling, and GitHub."
            },
            {
              title: "Java Developer Intern",
              company: "IIG Varsity, Bhubaneswar",
              duration: "Jul 2023 - Aug 2023",
              description: "Developed and enhanced Java applications, collaborated with a skilled team, and honed my coding and problem-solving abilities."
            }
          ].map((exp, index) => (
            <div key={index} className="relative mb-8 sm:mb-10">
              <div className="absolute -left-[9px] sm:-left-[11px] top-1 w-4 h-4 sm:w-5 sm:h-5 bg-white border-4 border-portfolio-primary rounded-full"></div>
              <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-portfolio-dark">{exp.title}</h4>
                  <span className="text-xs sm:text-sm bg-portfolio-primary/10 text-portfolio-primary px-2 sm:px-3 py-1 rounded-md w-fit">{exp.duration}</span>
                </div>
                <h5 className="text-sm sm:text-base text-portfolio-text-dark mb-1">{exp.company}</h5>
                <p className="text-sm sm:text-base text-portfolio-text-light">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 className="text-xl sm:text-2xl font-semibold text-portfolio-dark mb-4 sm:mb-6">My Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <h5 className="text-sm sm:text-base font-medium text-portfolio-dark">{skill.name}</h5>
                <span className="text-xs sm:text-sm font-semibold text-portfolio-primary">{skill.percentage}%</span>
              </div>
              <div className="w-full h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-portfolio-primary to-indigo-500 transition-all duration-700 ease-in-out rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeSection;
