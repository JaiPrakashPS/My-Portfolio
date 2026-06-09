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
    color: "from-zinc-800 to-zinc-900",
    bgColor: "from-zinc-100 to-zinc-200",
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
    color: "from-zinc-800 to-zinc-900",
    bgColor: "from-zinc-100 to-zinc-200",
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
    color: "from-zinc-800 to-zinc-900",
    bgColor: "from-zinc-100 to-zinc-200",
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
        <div className="relative overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 p-0.5 shadow-xl">
          <div className="bg-white dark:bg-zinc-950 rounded-[22px] p-8">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-2xl flex items-center justify-center">
                    <AchievementIcon className="text-zinc-800 dark:text-white text-2xl" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-zinc-200 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 rounded-full flex items-center justify-center">
                    <Crown className="text-zinc-800 dark:text-white" size={12} />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-100 border border-zinc-200 text-zinc-700 dark:bg-white/10 dark:text-zinc-300 dark:border-white/5 mb-2">
                    <Star className="mr-1 text-zinc-900 dark:text-white" size={12} />
                    {achievement.category}
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">{achievement.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleExpand(achievement.id)}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-colors cursor-pointer text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <ChevronRight 
                  className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                  size={20} 
                />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(achievement.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 rounded-xl">
                  <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">{value}</div>
                  <div className="text-xs text-zinc-500 font-mono capitalize">{key}</div>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-900">
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{achievement.detailedDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 text-xs font-mono rounded-full font-medium"
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
        <div className="relative bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-xl flex items-center justify-center animate-pulse">
              <AchievementIcon className="text-zinc-700 dark:text-white" size={20} />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{achievement.date}</span>
              <Medal className="text-zinc-800 dark:text-white" size={16} />
            </div>
          </div>
          
          <h3 className="text-lg font-bold font-mono text-zinc-900 dark:text-white mb-2">{achievement.title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{achievement.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-zinc-700 dark:bg-white/10 dark:text-white dark:border-white/10 text-xs font-mono rounded-full font-medium">
              {achievement.category}
            </span>
            <button
              onClick={() => toggleExpand(achievement.id)}
              className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ExternalLink size={16} />
            </button>
          </div>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-900 animate-fadeIn">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{achievement.detailedDescription}</p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {Object.entries(achievement.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-sm font-bold font-mono text-zinc-900 dark:text-white">{value}</div>
                    <div className="text-xs text-zinc-500 font-mono capitalize">{key}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {achievement.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-zinc-50 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-900 text-zinc-600 dark:text-zinc-300 text-xs font-mono rounded-md font-medium"
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
      <div className={`group flex items-center space-x-4 p-4 rounded-xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-900 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/20 transition-all duration-300 ${
        isVisible ? 'animate-slideInLeft' : 'opacity-0'
      }`} style={{ animationDelay: `${index * 100}ms` }}>
        <div className="w-10 h-10 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
          <AchievementIcon className="text-zinc-700 dark:text-white" size={16} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold font-mono text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
            {achievement.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{achievement.description}</p>
        </div>
        <div className="text-right text-xs text-zinc-400 dark:text-zinc-500">
          <div className="font-mono">{achievement.date}</div>
          <div className="text-zinc-800 dark:text-white font-mono font-medium">{achievement.category}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-16 px-6 font-sans relative transition-colors duration-300">
      <br></br>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-full mb-6">
            <Award className="text-zinc-800 dark:text-white text-2xl" size={28} />
          </div>
          <h1 className="text-5xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mb-4">
            Achievements & Recognition_
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Milestones that showcase my dedication to continuous learning and excellence in technology.
          </p>

          {/* Stats */}
          <div className="flex justify-center mt-8 space-x-8 flex-wrap gap-4">
            <div className="text-center bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 px-6 py-3 rounded-xl min-w-28 shadow-sm">
              <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">₹20K</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Prize Won</div>
            </div>
            <div className="text-center bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 px-6 py-3 rounded-xl min-w-28 shadow-sm">
              <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">550+</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Problems Solved</div>
            </div>
            <div className="text-center bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 px-6 py-3 rounded-xl min-w-28 shadow-sm">
              <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">1396</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Contest Rating</div>
            </div>
          </div>
        </div>

        {/* View Mode Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-xl p-1 shadow-md">
            {['mixed', 'cards', 'list'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all capitalize cursor-pointer ${
                  viewMode === mode
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
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
          <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-50 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 rounded-full mb-4">
              <Target className="text-zinc-700 dark:text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 font-mono">Next Targets_</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Aiming for more hackathon victories, higher contest ratings, and contributing to open-source projects. 
              The journey of learning and achieving continues!
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              <Sparkles className="w-6 h-6 text-zinc-700 dark:text-white animate-pulse" />
              <Sparkles className="w-6 h-6 text-zinc-400 dark:text-zinc-400 animate-pulse" style={{ animationDelay: '200ms' }} />
              <Sparkles className="w-6 h-6 text-zinc-400 dark:text-zinc-600 animate-pulse" style={{ animationDelay: '400ms' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;