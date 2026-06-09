import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { FaHome, FaProjectDiagram, FaCogs, FaTrophy, FaCertificate, FaEnvelope } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const navItems = [
    { name: 'Home', icon: FaHome, id: 'home' },
    { name: 'Projects', icon: FaProjectDiagram, id: 'projects' },
    { name: 'Skills', icon: FaCogs, id: 'skills' },
    { name: 'Education', icon: LuActivity, id: 'education' },
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

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

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
          ? 'bg-white/95 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 dark:bg-zinc-950/70 border-b border-zinc-100 dark:border-zinc-900/40 backdrop-blur-sm shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 group cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="relative">
                <div className="text-2xl font-mono font-bold text-zinc-900 dark:text-white tracking-wider group-hover:scale-105 transition-transform duration-300">
                  JP_
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-white group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-1 text-zinc-500 dark:text-zinc-400 font-medium font-mono text-xs">
                {navItems.map((item) => (
                  <li key={item.id} className="relative">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                        activeSection === item.id
                          ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'
                          : 'hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50'
                      }`}
                    >
                      <item.icon className={`text-[10px] transition-transform duration-300 ${
                        activeSection === item.id 
                          ? 'scale-110 text-zinc-900 dark:text-white' 
                          : 'group-hover:scale-110 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white'
                      }`} />
                      <span className="relative">
                        {item.name}
                        {activeSection === item.id && (
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-900 dark:bg-white rounded-full"></div>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Theme Toggle Switch */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 cursor-pointer ml-4 flex items-center justify-center"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <HiSun className="text-base" /> : <HiMoon className="text-base" />}
              </button>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 cursor-pointer"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <HiSun /> : <HiMoon />}
              </button>
              <button className="p-2 text-xl text-zinc-500 dark:text-zinc-400 hover:text-white transition-all duration-300">
                <CgProfile />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-2xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 cursor-pointer"
              >
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-900 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-bold font-mono text-zinc-900 dark:text-white tracking-wider">
                Navigation
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <HiX className="text-xl" />
              </button>
            </div>
            
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md border border-zinc-200 dark:border-zinc-800'
                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="text-lg" />
                  <span className="font-mono text-sm">{item.name}</span>
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-zinc-900 dark:bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
        
            <div className="mt-8 p-4 bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="text-sm font-semibold text-zinc-800 dark:text-white mb-1">Jai Prakash</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Full Stack Developer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;