import React from "react";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";

const Projects = ({ isDark }) => {
  const projects = [
    {
      img: "https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=E-Commerce+Dashboard",
      title: "Web Development",
      name: "E-Commerce Dashboard",
      desc: "A high-performance dashboard with dark mode and real-time analytics.",
      link: "https://ecommerce-dashboard-demo.com",
      githubLink: "https://github.com/username/ecommerce-dashboard",
    },
    {
      img: "https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Finance+Tracker",
      title: "Mobile App",
      name: "Finance Tracker",
      desc: "Personal finance tracking with visual charts and budget goals.",
      link: "https://finance-tracker-demo.com",
      githubLink: "https://github.com/username/finance-tracker",
    },
    {
      img: "https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Task+Master",
      title: "Web App",
      name: "Task Master",
      desc: "Productivity application with drag-and-drop kanban boards.",
      link: "https://task-master-demo.com",
      githubLink: "https://github.com/username/task-master",
    },
    {
      img: "https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Project+4",
      title: "Mobile App",
      name: "Social Connect",
      desc: "Real-time messaging platform with interactive features.",
      link: "https://project4-demo.com",
      githubLink: "https://github.com/username/social-connect",
    },
    {
      img: "https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Project+5",
      title: "Web App",
      name: "E-Learning Hub",
      desc: "Online course platform with progress tracking and certificates.",
      link: "https://project5-demo.com",
      githubLink: "https://github.com/username/elearning-hub",
    },
    {
      img: "https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Project+6",
      title: "Web Development",
      name: "AI Content Generator",
      desc: "Smart content creation tool powered by machine learning.",
      link: "https://project6-demo.com",
      githubLink: "https://github.com/username/ai-content-gen",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 px-6 scroll-mt-20 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            A collection of projects showcasing my expertise in full-stack development, UI/UX design, and modern web technologies.
          </p>
        </div>

        <Toaster position="bottom-center" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} {...project} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;