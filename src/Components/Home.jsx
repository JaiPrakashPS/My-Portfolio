import React, { useState, useEffect } from 'react';
import profileimg from '../assets/Profile.jpg';
import { FaLinkedinIn, FaDownload, FaCode, FaMobile } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { CgMail } from "react-icons/cg";
import { SiLeetcode, SiReact, SiJavascript, SiNodedotjs, SiPython } from "react-icons/si";
import resume from '../assets/Resume.pdf';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "React Enthusiast", 
    "Problem Solver",
    "Tech Explorer"
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/jai-prakash-ab0662291",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50"
    },
    {
      icon: ImGithub,
      url: "https://github.com/JaiPrakashPS",
      color: "hover:text-gray-800",
      bg: "hover:bg-gray-50"
    },
    {
      icon: CgMail,
      url: "mailto:jaiprakash.ps2023it@sece.ac.im",
      color: "hover:text-red-500",
      bg: "hover:bg-red-50"
    },
    {
      icon: SiLeetcode,
      url: "https://leetcode.com/u/jaiprakashps/",
      color: "hover:text-orange-500",
      bg: "hover:bg-orange-50"
    }
  ];

  const skills = [
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiPython, name: "Python", color: "text-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Hello
                  <span className="inline-block animate-bounce ml-2">👋</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold">
                  I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Jai Prakash</span>
                </h2>
                <div className="h-8">
                  <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                    A <span className="text-purple-600 font-semibold transition-all duration-500">
                      {roles[currentRole]}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                A passionate tech enthusiast and full stack developer in the making. I love building 
                innovative web and mobile applications that solve real-world problems and create 
                meaningful user experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Contact Me</span>
                </button>
                    <a href={resume} download>
            <button className="group bg-white text-gray-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-purple-300 flex items-center space-x-2">
                <FaDownload className="group-hover:animate-bounce" />
                <span>Download CV</span>
            </button>
            </a>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-full shadow-md ${social.color} ${social.bg} transition-all duration-300 hover:shadow-lg hover:scale-110 transform`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-purple-200 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border-2 border-blue-200 animate-spin-reverse-slow"></div>
                
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <img
                    src={profileimg}
                    alt="Jai Prakash"
                    className="w-full h-full object-cover rounded-full shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-white"
                  />
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div className="absolute top-1/4 -left-8 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-lg">💡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;