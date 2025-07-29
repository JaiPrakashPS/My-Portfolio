import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaProjectDiagram, FaCogs, FaTrophy, FaCertificate, FaEnvelope } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', icon: FaHome, id: 'home' },
    { name: 'Projects', icon: FaProjectDiagram, id: 'projects' },
    { name: 'Skills', icon: FaCogs, id: 'skills' },
    { name:'Education',icon:LuActivity,id:'education'},
    { name: 'Achievements', icon: FaTrophy, id: 'achievements' },
    { name: 'Certifications', icon: FaCertificate, id: 'certifications' },
    { name: 'Contact', icon: FaEnvelope, id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleNavClick = (sectionId) => {
  setActiveSection(sectionId);
  setIsMobileMenuOpen(false);

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  JP
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>

            <ul className="hidden md:flex space-x-1 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-purple-600 bg-purple-50'
                        : 'hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <item.icon className={`text-sm transition-transform duration-300 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                    }`} />
                    <span className="relative">
                      {item.name}
                      {activeSection === item.id && (
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="md:hidden flex items-center space-x-2">
              <button className="p-2 text-2xl text-gray-600 hover:text-purple-600 transition-all duration-300">
                <CgProfile />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-2xl text-gray-600 hover:text-purple-600 transition-all duration-300"
              >
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Navigation
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <HiX className="text-xl" />
              </button>
            </div>
            
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="text-lg" />
                  <span className="font-medium">{item.name}</span>
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
        
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              <div className="text-sm font-semibold text-gray-800 mb-1">Jai Prakash</div>
              <div className="text-xs text-gray-600">Full Stack Developer</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;