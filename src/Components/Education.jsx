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
    //   "Member of technical clubs and societies",
      "Working on multiple full-stack projects"
    ],
    type: "Undergraduate",
    level: "current",
    icon: GraduationCap,
    color: "from-purple-500 to-blue-600"
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
    color: "from-green-500 to-teal-600"
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
    color: "from-orange-500 to-red-500"
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
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <br></br>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <GraduationCap className="text-white text-2xl" size={28} />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic path and achievements that have shaped my technical foundation and learning journey.
          </p>
          
          {/* Stats Section */}
          <div className="flex justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8.04</div>
              <div className="text-sm text-gray-500">Current CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-sm text-gray-500">Years Journey</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-500">Institutions</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 hidden md:block"></div>
          
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
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-purple-400 rounded-full hidden md:block z-10"></div>
                  
                  {/* Education Card */}
                  <div className="md:ml-16">
                    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl ${
                      isHovered ? 'transform hover:-translate-y-1' : ''
                    }`}>
                      {/* Header */}
                      <div 
                        className={`p-6 bg-gradient-to-r ${edu.color} cursor-pointer select-none`}
                        onClick={() => toggleCard(index)}
                      >
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-white/20 rounded-full">
                              <EduIcon size={24} />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold">{edu.institution}</h2>
                              <p className="text-white/90 text-sm">{edu.qualification}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(edu.level)}`}>
                              {edu.status}
                            </div>
                            <ChevronRight 
                              className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                              size={20} 
                            />
                          </div>
                        </div>
                        
                        {/* Duration and Result */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-4 text-white/80">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span className="text-sm">{edu.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-white">
                            <Trophy size={16} />
                            <span className="text-sm font-semibold">{edu.result}</span>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: isVisible ? getProgressWidth(edu.level) : '0%',
                                transitionDelay: `${index * 200 + 300}ms`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <div className={`transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-6 border-t border-gray-100">
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {edu.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <Star className="mr-2 text-yellow-500" size={16} />
                              Key Highlights
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {edu.highlights.map((highlight, hIndex) => (
                                <div key={hIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Additional Info */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center">
                                  <BookOpen size={12} className="mr-1" />
                                  {edu.type}
                                </span>
                                <span className="flex items-center">
                                  <Clock size={12} className="mr-1" />
                                  {edu.level === 'current' ? 'In Progress' : 'Completed'}
                                </span>
                              </div>
                              <div className="text-purple-600 font-medium">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
              <Users className="text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Looking Ahead</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Currently pursuing B.Tech in Information Technology with a focus on emerging technologies. 
              Aiming to excel in software development and contribute to innovative technological solutions.
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
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