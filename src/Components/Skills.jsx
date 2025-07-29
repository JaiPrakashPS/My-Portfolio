import React, { useState, useEffect } from "react";
import { 
  Code, 
  Smartphone, 
  Server, 
  Database, 
  GitBranch,
  Github,
  Figma,
  FileText,
  Palette,
  Settings,
  Cloud,    
  Brain,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const skillsData = {
  "Programming Languages": {
    icon: Code,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "C", icon: Code, level: 80, description: "System programming & algorithms" },
      { name: "C++", icon: Code, level: 80, description: "Object-oriented programming" },
      { name: "Python", icon: Code, level: 70, description: "Backend development & AI/ML" },
      { name: "Java", icon: Code, level: 90, description: "Enterprise applications" },
      { name: "JavaScript", icon: Code, level: 85, description: "Full-stack web development" }
    ]
  },
  "Frontend Technologies": {
    icon: Smartphone,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML5", icon: FileText, level: 95, description: "Semantic markup & accessibility" },
      { name: "CSS3", icon: Palette, level: 90, description: "Modern styling & animations" },
      { name: "React", icon: Code, level: 85, description: "Component-based architecture" },
      { name: "Next.js", icon: Code, level: 80, description: "Server-side rendering" },
      { name: "React Native", icon: Smartphone, level: 85, description: "Cross-platform mobile apps" }
    ]
  },
  "Backend Technologies": {
    icon: Server,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Node.js", icon: Server, level: 90, description: "Server-side JavaScript runtime" },
      { name: "Express.js", icon: Server, level: 88, description: "Web application framework" }
    ]
  },
  "Development Tools": {
    icon: Settings,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "VS Code", icon: Code, level: 95, description: "Primary code editor" },
      { name: "Git", icon: GitBranch, level: 90, description: "Version control system" },
      { name: "GitHub", icon: Github, level: 90, description: "Code repository & collaboration" },
      { name: "Figma", icon: Figma, level: 75, description: "UI/UX design & prototyping" },
      { name: "Canva", icon: Palette, level: 80, description: "Graphic design & presentations" },
      { name: "Eclipse IDE", icon: Code, level: 85, description: "Java development environment" }
    ]
  },
  "Databases & Cloud": {
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MySQL", icon: Database, level: 80, description: "Relational database management" },
      { name: "MongoDB", icon: Database, level: 90, description: "NoSQL document database" },
      { name: "Cloudinary", icon: Cloud, level: 90, description: "Cloud-based media management" }
    ]
  },
  "Core Concepts": {
    icon: Brain,
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "Data Structures & Algorithms", icon: Code, level: 70, description: "Problem-solving & optimization" },
      { name: "Object Oriented Programming", icon: Code, level: 65, description: "Design patterns & architecture" }
    ]
  }
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    // Auto-expand first category
    const firstCategory = Object.keys(skillsData)[0];
    setExpandedCategories({ [firstCategory]: true });
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "from-green-400 to-emerald-500";
    if (level >= 80) return "from-blue-400 to-cyan-500";
    if (level >= 70) return "from-yellow-400 to-orange-500";
    return "from-gray-400 to-gray-500";
  };

  const SkillBar = ({ skill, index, categoryColor }) => {
    const SkillIcon = skill.icon;
    
    return (
      <div 
        className={`group relative bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
          isVisible ? 'animate-slideInUp' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor}`}>
              <SkillIcon className="text-white text-lg" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                {skill.name}
              </h4>
              <p className="text-xs text-gray-500">{skill.description}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-gray-700">{skill.level}%</span>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out transform origin-left`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100 + 300}ms`
            }}
          />
        </div>
        
        {hoveredSkill === skill.name && (
          <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Expert
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            <br></br>
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => {
            const CategoryIcon = data.icon;
            const isExpanded = expandedCategories[category];
            
            return (
              <div 
                key={category} 
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div 
                  className={`p-6 bg-gradient-to-r ${data.color} cursor-pointer select-none`}
                  onClick={() => toggleCategory(category)}
                >
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <CategoryIcon className="text-2xl" size={24} />
                      <div>
                        <h2 className="text-2xl font-bold">{category}</h2>
                        <p className="text-white/80 text-sm">
                          {data.skills.length} skill{data.skills.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="text-sm opacity-80">Avg. Proficiency</div>
                        <div className="text-lg font-bold">
                          {Math.round(data.skills.reduce((sum, skill) => sum + skill.level, 0) / data.skills.length)}%
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="text-xl" size={20} /> : <ChevronDown className="text-xl" size={20} />}
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data.skills.map((skill, index) => (
                      <SkillBar 
                        key={skill.name} 
                        skill={skill} 
                        index={index}
                        categoryColor={data.color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm always eager to learn new technologies and improve my existing skills. 
              Currently exploring advanced topics in AI/ML, cloud computing, and modern web frameworks.
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style> */}
    </div>
  );
};

export default Skills;
