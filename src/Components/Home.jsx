import React, { useState, useEffect } from 'react';
import profileimg from '../assets/Profile_Photo.jpeg';
import { FaLinkedinIn, FaDownload, FaCode } from "react-icons/fa";
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
      color: "text-zinc-600 dark:text-zinc-400 hover:text-white dark:hover:text-black",
      bg: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 dark:hover:bg-white"
    },
    {
      icon: ImGithub,
      url: "https://github.com/JaiPrakashPS",
      color: "text-zinc-600 dark:text-zinc-400 hover:text-white dark:hover:text-black",
      bg: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 dark:hover:bg-white"
    },
    {
      icon: CgMail,
      url: "mailto:jaiprakash.ps2023it@sece.ac.im",
      color: "text-zinc-600 dark:text-zinc-400 hover:text-white dark:hover:text-black",
      bg: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 dark:hover:bg-white"
    },
    {
      icon: SiLeetcode,
      url: "https://leetcode.com/u/jaiprakashps/",
      color: "text-zinc-600 dark:text-zinc-400 hover:text-white dark:hover:text-black",
      bg: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 dark:hover:bg-white"
    }
  ];

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden font-sans relative">
      {/* Background Blobs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-zinc-200 dark:bg-zinc-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-zinc-300/40 dark:bg-zinc-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-25 dark:opacity-15 animate-pulse-slow"></div>
        <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-zinc-200 dark:bg-zinc-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Intro Text */}
            <div className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight font-mono tracking-tight">
                  Hello
                  <span className="inline-block animate-bounce ml-2">👋</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-700 dark:text-zinc-300">
                  I'm <span className="text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white pb-1">Jai Prakash</span>
                </h2>
                <div className="h-8">
                  <p className="text-xl lg:text-2xl text-zinc-500 dark:text-zinc-400 font-medium font-mono">
                    &gt; <span className="text-zinc-900 dark:text-white font-semibold transition-all duration-500">
                      {roles[currentRole]}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
                A passionate tech enthusiast and full stack developer in the making. I love building 
                innovative web and mobile applications that solve real-world problems and create 
                meaningful user experiences.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleContactClick}
                  className="group bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 px-8 py-3 rounded-lg font-mono font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                >
                  <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Contact Me</span>
                </button>
                <a href={resume} download className="block">
                  <button className="group bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:border-zinc-700 px-8 py-3 rounded-lg font-mono font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                    <FaDownload className="group-hover:animate-bounce" />
                    <span>Download CV</span>
                  </button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 transform ${social.bg} ${social.color}`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image with outline rings */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative max-w-sm mx-auto">
                {/* Sleek monochrome double spinning ring */}
                <div className="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-800 animate-spin-slow"></div>
                <div className="absolute inset-3 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700 animate-spin-reverse-slow"></div>
                
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto p-4">
                  <img
                    src={profileimg}
                    alt="Jai Prakash"
                    className="w-full h-full object-cover object-top rounded-full shadow-2xl transform hover:scale-102 transition-all duration-500 border border-zinc-200 dark:border-zinc-800 p-2 bg-white dark:bg-zinc-950"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;