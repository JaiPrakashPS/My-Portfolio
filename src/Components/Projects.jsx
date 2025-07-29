import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaArrowRight, FaLaptopCode, FaMobile, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiMysql, SiCloudinary, SiPython, SiSolidity, SiEthereum, SiTensorflow } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "JobXpress - Job Application & Posting Platform",
    description: "A comprehensive web platform where users can apply for jobs and employers can post job openings. Built using the MERN stack with Cloudinary integration for resume and image uploads.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    github: "https://github.com/JaiPrakashPS/JobXpress-full-project",
    live: "https://jobxpress-web-application.netlify.app/",
    category: "Full Stack",
    status: "completed",
    featured: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "TrashGo - Waste Management System",
    description: "An innovative mobile app to optimize waste collection tasks by assigning labors and tracking requests using location-based services and real-time task status updates.",
    tech: ["React Native", "Express", "MongoDB", "Expo"],
    github: "https://github.com/JaiPrakashPS/TrashGo",
    live: "https://trashgo-site-4xvrex0wy-voting-systems-projects.vercel.app",
    category: "Mobile App",
    status: "completed",
    featured: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Restaurant Menu Recommender",
    description: "An intelligent recommendation system that suggests dishes based on user preferences, past orders, and popular menu items using advanced algorithms.",
    tech: ["Java", "MySQL", "JDBC"],
    github: "https://github.com/JaiPrakashPS/Restaurant-Menu-Recommendation-system-",
    live: "https://github.com/JaiPrakashPS/Restaurant-Menu-Recommendation-system-",
    category: "Backend",
    status: "completed",
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "RecipeShare - Community Recipe App",
    description: "A vibrant community-driven MERN stack application where users can share recipes, engage with others through comments, and discover new culinary experiences.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    githubFrontend: "https://github.com/JaiPrakashPS/Recipe_app_Frontend",
    githubBackend: "https://github.com/JaiPrakashPS/Recipe_app_backend",
    live: "https://recipe-app-frontend-psi.vercel.app/",
    category: "Full Stack",
    status: "completed",
    featured: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Future project",
    description: "Coming Soon",
    tech: ["NA"],
    github: "",
    live: "",
    category: "",
    status: "in-progress",
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Future project",
    description: "Coming Soon",
    tech: ["NA"],
    github: "",
    live: "",
    category: "",
    status: "in-progress",
    featured: false,
    image: "/api/placeholder/400/250"
  },
];

const techIcons = {
  "MongoDB": SiMongodb,
  "Express": SiExpress,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  "JavaScript": SiJavascript,
  "Java": FaJava,
  "MySQL": SiMysql,
  "Cloudinary": SiCloudinary,
  "React Native": SiReact,
  "Expo": SiReact,
  "JDBC": FaJava,
  "TensorFlow": SiTensorflow,
  "Python": SiPython,
  "FastAPI": SiPython,
  "Solidity": SiSolidity,
  "Web3.js": SiJavascript,
  "Ethereum": SiEthereum
};

const categoryIcons = {
  "Full Stack": FaLaptopCode,
  "Mobile App": FaMobile,
  "Backend": FaDatabase,
  "AI/ML": FaCode,
  "Blockchain": FaCode
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planning': return 'Planning';
      default: return 'Unknown';
    }
  };

  const ProjectCard = ({ project, index, featured = false }) => {
    const CardIcon = categoryIcons[project.category] || FaCode;
    
    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
          featured ? 'lg:col-span-1' : ''
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
          <div className="absolute top-4 left-4">
            <CardIcon className="text-2xl text-purple-600" />
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <h3 className="font-bold text-gray-800 text-lg line-clamp-2">{project.title}</h3>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => {
                const TechIcon = techIcons[tech];
                return (
                  <div
                    key={i}
                    className="flex items-center space-x-1 bg-gray-50 hover:bg-purple-50 px-3 py-1 rounded-full text-xs font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
                  >
                    {TechIcon && <TechIcon className="text-sm" />}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {project.status === 'completed' ? (
            <div className="relative z-10 flex flex-wrap gap-3">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors group/link"
    >
      <FaGithub className="group-hover/link:scale-110 transition-transform" />
      <span className="text-sm font-medium">Code</span>
    </a>
  )}

  {project.githubFrontend && (
    <a
      href={project.githubFrontend}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors group/link"
    >
      <FaCode className="group-hover/link:scale-110 transition-transform" />
      <span className="text-sm font-medium">Frontend</span>
    </a>
  )}

  {project.githubBackend && (
    <a
      href={project.githubBackend}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors group/link"
    >
      <FaDatabase className="group-hover/link:scale-110 transition-transform" />
      <span className="text-sm font-medium">Backend</span>
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/link ml-auto"
    >
      <FaEye className="group-hover/link:scale-110 transition-transform" />
      <span>Live Demo</span>
      <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
    </a>
  )}
</div>

          ) : (
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-400"></div>
                <span className="text-sm font-medium ml-2">
                  {project.status === 'in-progress' ? 'Under Development' : 'Coming Soon'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            <br></br>
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through code - from full-stack applications to mobile apps and everything in between.
            Each project represents a step forward in my development journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;