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
    color: "from-zinc-800 to-zinc-900",
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
    color: "from-zinc-800 to-zinc-900",
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
    color: "from-zinc-800 to-zinc-900",
    skills: [
      { name: "Node.js", icon: Server, level: 90, description: "Server-side JavaScript runtime" },
      { name: "Express.js", icon: Server, level: 88, description: "Web application framework" }
    ]
  },
  "Development Tools": {
    icon: Settings,
    color: "from-zinc-800 to-zinc-900",
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
    color: "from-zinc-800 to-zinc-900",
    skills: [
      { name: "MySQL", icon: Database, level: 80, description: "Relational database management" },
      { name: "MongoDB", icon: Database, level: 90, description: "NoSQL document database" },
      { name: "Cloudinary", icon: Cloud, level: 90, description: "Cloud-based media management" }
    ]
  },
  "Core Concepts": {
    icon: Brain,
    color: "from-zinc-800 to-zinc-900",
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
    if (level >= 90) return "from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400";
    if (level >= 80) return "from-zinc-700 to-zinc-400 dark:from-zinc-200 dark:to-zinc-500";
    if (level >= 70) return "from-zinc-600 to-zinc-400 dark:from-zinc-400 dark:to-zinc-600";
    return "from-zinc-500 to-zinc-300 dark:from-zinc-600 dark:to-zinc-800";
  };

  const SkillBar = ({ skill, index, categoryColor }) => {
    const SkillIcon = skill.icon;
    
    return (
      <div 
        className={`group relative bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-md hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-500 transform hover:-translate-y-1 ${
          isVisible ? 'animate-slideInUp' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <SkillIcon className="text-zinc-700 dark:text-white text-lg" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors font-mono">
                {skill.name}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{skill.description}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300 font-mono">{skill.level}%</span>
          </div>
        </div>
        
        <div className="w-full bg-zinc-200 dark:bg-zinc-950 border border-zinc-150 dark:border-zinc-900 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out transform origin-left`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100 + 300}ms`
            }}
          />
        </div>
        
        {hoveredSkill === skill.name && (
          <div className="absolute -top-2 -right-2 bg-zinc-900 text-white dark:bg-white dark:text-black text-xs font-mono px-2 py-1 rounded-full animate-pulse">
            Expert
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-6 py-16 font-sans relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mb-4">
            <br></br>
            Technical Skills_
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
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
                className={`bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div 
                  className="p-6 bg-zinc-100/80 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 cursor-pointer select-none"
                  onClick={() => toggleCategory(category)}
                >
                  <div className="flex items-center justify-between text-zinc-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <CategoryIcon className="text-2xl text-zinc-700 dark:text-white" size={24} />
                      <div>
                        <h2 className="text-2xl font-bold font-mono">{category}</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs">
                          {data.skills.length} skill{data.skills.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right mr-2">
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Avg. Proficiency</div>
                        <div className="text-lg font-bold font-mono text-zinc-900 dark:text-white">
                          {Math.round(data.skills.reduce((sum, skill) => sum + skill.level, 0) / data.skills.length)}%
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="text-xl text-zinc-500 dark:text-zinc-400" size={20} /> : <ChevronDown className="text-xl text-zinc-500 dark:text-zinc-400" size={20} />}
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
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
          <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 font-mono">Continuous Learning_</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              I'm always eager to learn new technologies and improve my existing skills. 
              Currently exploring advanced topics in AI/ML, cloud computing, and modern web frameworks.
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-zinc-500 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              <div className="w-3 h-3 bg-zinc-600 dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
