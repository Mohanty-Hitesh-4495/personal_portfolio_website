import React from 'react';

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    category: "AI",
    date: "Mar 15, 2025",
    image: "https://i.ibb.co/hRnpD1v/blog-1.jpg",
    summary: "Exploring how AI is revolutionizing diagnosis, treatment planning, and patient care."
  },
  {
    id: 2,
    title: "Understanding Large Language Models",
    category: "Machine Learning",
    date: "Feb 20, 2025",
    image: "https://i.ibb.co/jkM1bNj/blog-2.jpg",
    summary: "A deep dive into how large language models work and their real-world applications."
  },
  {
    id: 3,
    title: "Machine Learning for Beginners",
    category: "Education",
    date: "Jan 15, 2025",
    image: "https://i.ibb.co/n1LG9DQ/blog-3.jpg",
    summary: "A comprehensive guide to starting your machine learning journey from scratch."
  },
  {
    id: 4,
    title: "Data Visualization Techniques",
    category: "Data Science",
    date: "Dec 10, 2024",
    image: "https://i.ibb.co/3YgvLk1/blog-4.jpg",
    summary: "Modern approaches to visualizing complex datasets for better insights and decision-making."
  },
  {
    id: 5,
    title: "The Art of Clean Code",
    category: "Programming",
    date: "Nov 25, 2024",
    image: "https://i.ibb.co/qMmsSzf/blog-5.jpg",
    summary: "Principles and practices for writing maintainable, efficient, and elegant code."
  },
  {
    id: 6,
    title: "Ethical AI Development",
    category: "Ethics",
    date: "Oct 20, 2024",
    image: "https://i.ibb.co/Yhjx6M1/blog-6.jpg",
    summary: "Navigating the complex ethical considerations in modern AI development and deployment."
  }
];

const BlogSection: React.FC = () => {
  return (
    <div className="section-transition max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <header className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-portfolio-dark mb-2">Blog</h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-post-item bg-white rounded-lg shadow-md overflow-hidden">
              <a href="#" className="block">
                <figure className="relative overflow-hidden h-48">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </figure>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-md">{blog.category}</span>
                    <span className="text-gray-400">•</span>
                    <time className="text-xs text-portfolio-text-light">{blog.date}</time>
                  </div>
                  <h3 className="text-lg font-medium text-portfolio-dark mb-2 hover:text-portfolio-primary transition-colors">{blog.title}</h3>
                  <p className="text-sm text-portfolio-text-light">{blog.summary}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
