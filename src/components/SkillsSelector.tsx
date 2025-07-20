import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { Search, Code, CheckCircle, Circle } from 'lucide-react';

export const SkillsSelector: React.FC = () => {
  const { skills, toggleSkill, darkMode } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  const cardClass = `p-6 rounded-xl border transition-all duration-200 ${
    darkMode
      ? 'bg-gray-900/60 border-gray-700/50 backdrop-blur-md shadow-xl mx-2 sm:mx-0'
      : 'bg-white/60 border-gray-200/50 backdrop-blur-md shadow-xl mx-2 sm:mx-0'
  } hover:shadow-2xl hover:scale-[1.01] transform transition-all duration-300`;

  const inputClass = `w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
    darkMode
      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`;

  const skillClass = `flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
    darkMode
      ? 'bg-gray-800 border-gray-600 hover:bg-gray-700'
      : 'bg-white/80 border-gray-300 hover:bg-blue-50'
  } hover:shadow-md`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="space-y-6"
    >
      <div className={cardClass}>
        <motion.div 
          className="flex items-center space-x-3 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h2 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            className={`${inputClass} pl-10`}
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {filteredSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${skillClass} ${
                      skill.checked
                        ? darkMode
                          ? 'bg-blue-900/70 border-blue-400 shadow-lg shadow-blue-500/20'
                          : 'bg-blue-100 border-blue-500 shadow-lg shadow-blue-500/20'
                        : ''
                    }`}
                    onClick={() => toggleSkill(
                      skills.findIndex(cat => cat.name === category.name),
                      skills.find(cat => cat.name === category.name)?.skills.findIndex(s => s.name === skill.name) || 0
                    )}
                  >
                    <div className="flex-shrink-0">
                      {skill.checked ? (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain transition-transform duration-200 hover:scale-110"
                    />
                    <span className={`font-medium text-sm sm:text-base ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};