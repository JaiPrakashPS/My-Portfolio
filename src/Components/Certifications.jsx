import React, { useState } from "react";
import {
  Award,
  ExternalLink,
  Calendar,
  BookOpen,
  Code,
  Palette,
  Database,
  Brain,
  CheckCircle,
  Filter,
  Grid,
  List,
  ChevronRight,
  Eye,
  Star,
} from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Learn Java Programming - Beginner to Master",
    platform: "Udemy",
    link: "https://drive.google.com/file/d/1oMScNt-ipVH26PYIGHLXZ_CDgWnfhkHm/view",
    category: "Programming",
    duration: "40+ hours",
    level: "Beginner to Advanced",
    skills: ["Java", "OOP", "Collections", "Multithreading"],
    description: "Comprehensive Java programming course covering fundamentals to advanced concepts including object-oriented programming, data structures, and enterprise development.",
    icon: Code,
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    verified: true,
    completionDate: "2024",
  },
  {
    id: 2,
    title: "Java Basics - Programming Course (Hands-On)",
    platform: "SkillRack",
    link: "https://www.skillrack.com/faces/free/certificate.xhtml?t=cert&id=581219&key=LTK",
    category: "Programming",
    duration: "20+ hours",
    level: "Beginner",
    skills: ["Java Fundamentals", "Problem Solving", "Coding Practice"],
    description: "Hands-on Java programming course with practical exercises and real-world problem solving to build strong foundational skills.",
    icon: Code,
    color: "from-blue-400 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
    verified: true,
    completionDate: "2024",
  },
  {
    id: 3,
    title: "Mastering Data Structures and Algorithms Using C and C++",
    platform: "Udemy",
    link: "https://drive.google.com/file/d/1MiYfukJX6tBViS4HXvp8ZDyaaEuGqSb1/view",
    category: "Computer Science",
    duration: "50+ hours",
    level: "Intermediate to Advanced",
    skills: ["Data Structures", "Algorithms", "C/C++", "Problem Solving"],
    description: "In-depth coverage of data structures and algorithms implementation using C and C++, essential for competitive programming and technical interviews.",
    icon: Brain,
    color: "from-green-400 to-teal-500",
    bgColor: "from-green-50 to-teal-50",
    verified: true,
    completionDate: "2024",
  },
  {
    id: 4,
    title: "User Experience Design - Learn UI/UX App Design with Figma",
    platform: "Udemy",
    link: "https://drive.google.com/drive/u/1/folders/11eW6lbR0kP31z4hCr_qUPRACiEr3WX5c",
    category: "Design",
    duration: "30+ hours",
    level: "Beginner to Intermediate",
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
    description: "Complete UI/UX design course covering user research, wireframing, prototyping, and modern design principles using Figma.",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    verified: true,
    completionDate: "2024",
  },
  {
    id: 5,
    title: "Python for Data Science",
    platform: "Udemy",
    link: "https://drive.google.com/drive/u/1/folders/11eW6lbR0kP31z4hCr_qUPRACiEr3WX5c",
    category: "Data Science",
    duration: "35+ hours",
    level: "Beginner to Intermediate",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Machine Learning"],
    description: "Comprehensive Python course for data science covering data manipulation, analysis, visualization, and introduction to machine learning.",
    icon: Database,
    color: "from-cyan-400 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50",
    verified: true,
    completionDate: "2024",
  },
];

const Certifications = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["all", ...new Set(certifications.map((cert) => cert.category))];
  const filteredCertifications =
    filterCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === filterCategory);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const CertificationCard = ({ certification }) => {
    const CertIcon = certification.icon;
    const isExpanded = expandedCard === certification.id;

    return (
      <div className="relative bg-gradient-to-br rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-white/50 bg-white">
        {certification.verified && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-green-500 text-white p-1 rounded-full">
              <CheckCircle size={16} />
            </div>
          </div>
        )}

        <div className={`p-6 bg-gradient-to-r ${certification.color}`}>
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <CertIcon className="text-white" size={20} />
            </div>
            <div>
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-2">
                {certification.platform}
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                {certification.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 text-white/80 text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {certification.completionDate}
              </span>
              <span className="flex items-center">
                <BookOpen size={14} className="mr-1" />
                {certification.duration}
              </span>
            </div>
            <div className="text-white font-medium">{certification.level}</div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 bg-gradient-to-r ${certification.color} text-white text-xs rounded-full font-medium`}
            >
              {certification.category}
            </span>
            <button onClick={() => toggleExpand(certification.id)} className="text-gray-400 hover:text-gray-600">
              <ChevronRight className={`transition-transform ${isExpanded ? "rotate-90" : ""}`} size={16} />
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-4">{certification.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {certification.skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-white/70 text-gray-700 text-xs rounded-md font-medium">
                {skill}
              </span>
            ))}
            {certification.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">
                +{certification.skills.length - 3} more
              </span>
            )}
          </div>

          {isExpanded && (
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">All Skills Covered:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {certification.skills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white/70 text-gray-700 text-xs rounded-md font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r ${certification.color} text-white text-sm font-medium rounded-lg hover:shadow-lg`}
          >
            <Eye size={16} className="mr-2" />
            View Certificate
            <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Award className="text-white text-2xl" size={28} />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning through industry-recognized courses and certifications that enhance my technical expertise.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter size={16} className="text-gray-500" />
            <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-3 py-1 rounded-md text-sm font-medium capitalize ${
                    filterCategory === category
                      ? "bg-purple-600 text-white"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">View:</span>
            <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md ${viewMode === "grid" ? "bg-purple-600 text-white" : "text-gray-600"}`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md ${viewMode === "list" ? "bg-purple-600 text-white" : "text-gray-600"}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
              <Star className="text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These certifications represent my commitment to staying current with technology trends and 
              continuously expanding my skill set. Each course has contributed to my professional growth and expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
