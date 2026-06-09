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
      case 'completed': return 'bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-zinc-700';
      case 'in-progress': return 'bg-zinc-50 text-zinc-500 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800';
      case 'planning': return 'bg-zinc-50 text-zinc-400 border-zinc-200 dark:bg-zinc-950 dark:text-zinc-500 dark:border-zinc-900';
      default: return 'bg-zinc-50 text-zinc-500 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800';
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
        className={`group relative bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
          featured ? 'lg:col-span-1' : ''
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/20 to-zinc-100/10 dark:from-zinc-800/10 dark:to-zinc-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative h-48 bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 overflow-hidden">
          <div className="absolute inset-0 bg-zinc-100/40 dark:bg-zinc-950/40"></div>
          <div className="absolute top-4 left-4">
            <CardIcon className="text-2xl text-zinc-700 dark:text-white" />
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-lg p-3 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg line-clamp-2">{project.title}</h3>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="mb-4">
            <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 font-mono uppercase tracking-wide mb-2 block">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => {
                const TechIcon = techIcons[tech];
                return (
                  <div
                    key={i}
                    className="flex items-center space-x-1 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:border-zinc-900 dark:hover:border-zinc-800 px-3 py-1 rounded-lg text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
                  >
                    {TechIcon && <TechIcon className="text-xs" />}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {project.status === 'completed' ? (
            <div className="relative z-10 flex flex-wrap gap-3 items-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors group/link font-mono text-xs"
                >
                  <FaGithub className="group-hover/link:scale-110 transition-transform" />
                  <span className="font-medium">Code</span>
                </a>
              )}

              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors group/link font-mono text-xs"
                >
                  <FaCode className="group-hover/link:scale-110 transition-transform" />
                  <span className="font-medium">Frontend</span>
                </a>
              )}

              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors group/link font-mono text-xs"
                >
                  <FaDatabase className="group-hover/link:scale-110 transition-transform" />
                  <span className="font-medium">Backend</span>
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 px-4 py-2 rounded-lg text-sm font-mono font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/link ml-auto cursor-pointer"
                >
                  <FaEye className="group-hover/link:scale-110 transition-transform" />
                  <span>Live Demo</span>
                  <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center space-x-2 text-zinc-400 dark:text-zinc-500">
                <div className="w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-zinc-500 dark:bg-zinc-500 rounded-full animate-pulse animation-delay-400"></div>
                <span className="text-sm font-mono font-medium ml-2">
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
    <div className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen py-16 px-6 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mb-4">
            <br></br>
            My Projects_
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
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