import React, { useState, useEffect } from "react";
import { 
  Trophy, 
  Code, 
  Brain, 
  Star, 
  Award, 
  Zap,
  Calendar,
  Users,
  Target,
  Sparkles,
  Medal,
  Crown,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Winner - HackXelerate '25 🏆",
    category: "Hackathon",
    description: "Won 1st prize and a cash prize of ₹20,000 in the 24-hour National Level Hackathon held at KPRIET, among 200+ teams.",
    detailedDescription: "Led a team of 4 developers to create an innovative solution during a 24-hour coding marathon. Our project impressed judges with its technical excellence, user experience, and practical application.",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    date: "2025",
    metrics: {
      teams: "200+",
      prize: "₹20,000",
      duration: "24 hours"
    },
    skills: ["React", "Node.js", "MongoDB", "Team Leadership"],
    style: "featured"
  },
  {
    id: 2,
    title: "LeetCode Achiever 💻",
    category: "Competitive Programming",
    description: "Solved 100+ problems with a contest rating of 1396, demonstrating strong problem-solving abilities.",
    detailedDescription: "Consistently solving algorithmic challenges and participating in weekly contests. Achieved a solid rating through dedication to data structures and algorithms.",
    icon: Code,
    color: "from-green-400 to-blue-500",
    bgColor: "from-green-50 to-blue-50",
    date: "Ongoing",
    metrics: {
      problems: "100+",
      rating: "1396",
      rank: "Top 30%"
    },
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Python"],
    style: "card"
  },
  {
    id: 3,
    title: "SkillRack Coding Expert 🧠",
    category: "Programming Practice",
    description: "Solved 500+ coding problems across various programming concepts and languages.",
    detailedDescription: "Demonstrated exceptional coding proficiency by solving a diverse range of programming challenges, from basic syntax to advanced algorithmic problems.",
    icon: Brain,
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    date: "2023-2025",
    metrics: {
      problems: "500+",
      languages: "5+",
      accuracy: "85%"
    },
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
    style: "minimal"
  }
];

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [viewMode, setViewMode] = useState('mixed'); // 'mixed', 'cards', 'list'

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const FeaturedAchievement = ({ achievement, index }) => {
    const AchievementIcon = achievement.icon;
    const isExpanded = expandedCard === achievement.id;
    
    return (
      <div className={`relative mb-8 transition-all duration-700 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`} style={{ animationDelay: `${index * 200}ms` }}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-1">
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <AchievementIcon className="text-white text-2xl" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Crown className="text-white" size={12} />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-2">
                    <Star className="mr-1" size={12} />
                    {achievement.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600 mt-1">{achievement.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleExpand(achievement.id)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight 
                  className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                  size={20} 
                />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(achievement.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-xs text-gray-500 capitalize">{key}</div>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-4">{achievement.detailedDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CardAchievement = ({ achievement, index }) => {
    const AchievementIcon = achievement.icon;
    const isHovered = hoveredCard === achievement.id;
    const isExpanded = expandedCard === achievement.id;
    
    return (
      <div 
        className={`group relative transition-all duration-500 ${
          isVisible ? 'animate-slideInUp' : 'opacity-0'
        } ${isHovered ? 'transform -translate-y-2' : ''}`}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredCard(achievement.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className={`relative bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}>
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center`}>
              <AchievementIcon className="text-white" size={20} />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">{achievement.date}</span>
              <Medal className="text-yellow-500" size={16} />
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
          
          <div className="flex items-center justify-between">
            <span className={`px-2 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs rounded-full font-medium`}>
              {achievement.category}
            </span>
            <button
              onClick={() => toggleExpand(achievement.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ExternalLink size={16} />
            </button>
          </div>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
              <p className="text-sm text-gray-600 mb-3">{achievement.detailedDescription}</p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {Object.entries(achievement.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-sm font-bold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {achievement.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-white/70 text-gray-700 text-xs rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const MinimalAchievement = ({ achievement, index }) => {
    const AchievementIcon = achievement.icon;
    
    return (
      <div className={`group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 ${
        isVisible ? 'animate-slideInLeft' : 'opacity-0'
      }`} style={{ animationDelay: `${index * 100}ms` }}>
        <div className={`w-10 h-10 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <AchievementIcon className="text-white" size={16} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            {achievement.title}
          </h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
        </div>
        <div className="text-right text-xs text-gray-500">
          <div>{achievement.date}</div>
          <div className="text-purple-600 font-medium">{achievement.category}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 px-6">
        <br></br>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
            <Award className="text-white text-2xl" size={28} />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Achievements & Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Milestones that showcase my dedication to continuous learning and excellence in technology.
          </p>

          {/* Stats */}
          <div className="flex justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">₹20K</div>
              <div className="text-sm text-gray-500">Prize Won</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">550+</div>
              <div className="text-sm text-gray-500">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1396</div>
              <div className="text-sm text-gray-500">Contest Rating</div>
            </div>
          </div>
        </div>

        {/* View Mode Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-md">
            {['mixed', 'cards', 'list'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  viewMode === mode
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {mode} View
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Display */}
        {viewMode === 'mixed' && (
          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              if (achievement.style === 'featured') {
                return <FeaturedAchievement key={achievement.id} achievement={achievement} index={index} />;
              } else if (achievement.style === 'card') {
                return (
                  <div key={achievement.id} className="max-w-md mx-auto">
                    <CardAchievement achievement={achievement} index={index} />
                  </div>
                );
              } else {
                return (
                  <div key={achievement.id} className="max-w-2xl mx-auto">
                    <MinimalAchievement achievement={achievement} index={index} />
                  </div>
                );
              }
            })}
          </div>
        )}

        {viewMode === 'cards' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <CardAchievement key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="max-w-4xl mx-auto space-y-2">
            {achievements.map((achievement, index) => (
              <MinimalAchievement key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        )}

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Target className="text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Next Targets</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Aiming for more hackathon victories, higher contest ratings, and contributing to open-source projects. 
              The journey of learning and achieving continues!
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" style={{ animationDelay: '200ms' }} />
              <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" style={{ animationDelay: '400ms' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;