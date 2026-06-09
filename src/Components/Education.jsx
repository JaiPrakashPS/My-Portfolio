import React, { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  MapPin, 
  Star,
  BookOpen,
  Trophy,
  ChevronRight,
  Users,
  Clock
} from "lucide-react";

const educationData = [
  {
    institution: "Sri Eshwar College of Engineering",
    qualification: "B.Tech (Information Technology)",
    result: "CGPA: 8.04",
    duration: "2023 - 2027",
    status: "Ongoing",
    description: "Specializing in Information Technology with focus on software development, data structures, and modern web technologies.",
    highlights: [
      "Current CGPA: 8.04 (Till 3rd Semester)",
      "Active participation in coding competitions",
      "Working on multiple full-stack projects"
    ],
    type: "Undergraduate",
    level: "current",
    icon: GraduationCap,
    color: "from-zinc-900 to-zinc-950"
  },
  {
    institution: "The TVS School",
    qualification: "Higher Secondary Certificate (HSC)",
    result: "80%",
    duration: "2022 - 2023",
    status: "Completed",
    description: "Completed higher secondary education with strong foundation in Science and Mathematics.",
    highlights: [
      "Scored 80% in HSC examinations",
      "Strong performance in Mathematics and Science",
      "Participated in various academic competitions",
      "Developed interest in computer programming"
    ],
    type: "Higher Secondary",
    level: "completed",
    icon: BookOpen,
    color: "from-zinc-900 to-zinc-950"
  },
  {
    institution: "Tagore Vidyalayam Matric Hr Sec School",
    qualification: "Secondary School Leaving Certificate (SSLC)",
    result: "Pass",
    duration: "2020 - 2021",
    status: "Completed",
    description: "Successfully completed secondary education with focus on core subjects and extracurricular activities.",
    highlights: [
      "Successfully passed SSLC examinations",
      "Built strong academic foundation",
      "Participated in school competitions",
      "Developed leadership skills"
    ],
    type: "Secondary",
    level: "completed",
    icon: Award,
    color: "from-zinc-900 to-zinc-950"
  },
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getStatusColor = (level) => {
    switch (level) {
      case 'current':
        return 'bg-zinc-900 text-white border-zinc-800 dark:bg-white/10 dark:text-white dark:border-white/20';
      case 'completed':
        return 'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700';
      default:
        return 'bg-zinc-50 text-zinc-500 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800';
    }
  };

  const getProgressWidth = (level) => {
    switch (level) {
      case 'current':
        return '75%';
      case 'completed':
        return '100%';
      default:
        return '50%';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-16 px-6 font-sans relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <br></br>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-full mb-6">
            <GraduationCap className="text-zinc-700 dark:text-white text-2xl" size={28} />
          </div>
          <h1 className="text-5xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mb-4">
            Educational Journey_
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            My academic path and achievements that have shaped my technical foundation and learning journey.
          </p>
          
          {/* Stats Section */}
          <div className="flex justify-center mt-8 space-x-8 flex-wrap gap-4">
            <div className="text-center bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 px-6 py-3 rounded-xl min-w-28 shadow-sm">
              <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">8.04</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Current CGPA</div>
            </div>
            <div className="text-center bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 px-6 py-3 rounded-xl min-w-28 shadow-sm">
              <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">4</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Years Journey</div>
            </div>
            <div className="text-center bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 px-6 py-3 rounded-xl min-w-28 shadow-sm">
              <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">3</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Institutions</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => {
              const EduIcon = edu.icon;
              const isExpanded = expandedCard === index;
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-zinc-50 dark:bg-zinc-950 border-4 border-zinc-300 dark:border-zinc-500 rounded-full hidden md:block z-10"></div>
                  
                  {/* Education Card */}
                  <div className="md:ml-16">
                    <div className={`bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl ${
                      isHovered ? 'transform hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-800' : ''
                    }`}>
                      {/* Header */}
                      <div 
                        className="p-6 bg-zinc-100/80 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-900 cursor-pointer select-none"
                        onClick={() => toggleCard(index)}
                      >
                        <div className="flex items-center justify-between text-zinc-900 dark:text-white flex-wrap gap-4">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-zinc-50 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 rounded-xl">
                              <EduIcon size={24} className="text-zinc-700 dark:text-white" />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold font-mono">{edu.institution}</h2>
                              <p className="text-zinc-600 dark:text-zinc-300 font-mono text-sm">{edu.qualification}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${getStatusColor(edu.level)}`}>
                              {edu.status}
                            </div>
                            <ChevronRight 
                              className={`transition-transform duration-300 text-zinc-400 ${isExpanded ? 'rotate-90' : ''}`} 
                              size={20} 
                            />
                          </div>
                        </div>
                        
                        {/* Duration and Result */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-4 text-zinc-500 dark:text-zinc-400 font-mono">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span className="text-sm">{edu.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-zinc-900 dark:text-white font-mono font-semibold">
                            <Trophy size={16} />
                            <span className="text-sm">{edu.result}</span>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="w-full bg-zinc-200 dark:bg-zinc-950 border border-zinc-150 dark:border-zinc-900 rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-zinc-800 dark:bg-zinc-400 rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: isVisible ? getProgressWidth(edu.level) : '0%',
                                transitionDelay: `${index * 200 + 300}ms`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-6 border-t border-zinc-200 dark:border-zinc-900">
                          <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            {edu.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-zinc-900 dark:text-white mb-3 font-mono flex items-center">
                              <Star className="mr-2 text-zinc-800 dark:text-white" size={16} />
                              Key Highlights
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {edu.highlights.map((highlight, hIndex) => (
                                <div key={hIndex} className="flex items-start space-x-2 text-sm text-zinc-600 dark:text-zinc-400">
                                  <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Additional Info */}
                          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center space-x-4 text-zinc-400 dark:text-zinc-500 font-mono">
                                <span className="flex items-center font-mono">
                                  <BookOpen size={12} className="mr-1" />
                                  {edu.type}
                                </span>
                                <span className="flex items-center font-mono">
                                  <Clock size={12} className="mr-1" />
                                  {edu.level === 'current' ? 'In Progress' : 'Completed'}
                                </span>
                              </div>
                              <div className="text-zinc-900 dark:text-white font-mono font-medium">
                                {index === 0 ? 'Current' : `${educationData.length - index} years ago`}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-100 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 rounded-full mb-4">
              <Users className="text-zinc-700 dark:text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 font-mono">Looking Ahead_</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Currently pursuing B.Tech in Information Technology with a focus on emerging technologies. 
              Aiming to excel in software development and contribute to innovative technological solutions.
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-zinc-500 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              <div className="w-3 h-3 bg-zinc-600 dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Education;