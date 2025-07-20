import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { Plus, BarChart3, Trophy, Star, Zap, Twitter, Coffee, BookOpen, Activity, GitBranch, Eye, Type, Music, Code, Clock } from 'lucide-react';

export const AddOnsForm: React.FC = () => {
  const { addOns, toggleAddOn, badgeStyle, updateBadgeStyle, darkMode } = useAppStore();

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

  const selectClass = `w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
    darkMode
      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500'
      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`;

  const switchClass = `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
    darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
  }`;

  const addOnItems = [
    {
      key: 'visitorCount' as keyof typeof addOns,
      icon: BarChart3,
      title: 'Visitor Count Badge',
      description: 'Show profile view count',
      color: 'text-blue-500'
    },
    {
      key: 'githubTrophy' as keyof typeof addOns,
      icon: Trophy,
      title: 'GitHub Trophy',
      description: 'Display GitHub achievements',
      color: 'text-yellow-500'
    },
    {
      key: 'githubStats' as keyof typeof addOns,
      icon: BarChart3,
      title: 'GitHub Stats',
      description: 'Show GitHub statistics',
      color: 'text-green-500'
    },
    {
      key: 'topSkills' as keyof typeof addOns,
      icon: Star,
      title: 'Top Skills Badge',
      description: 'Display most used languages',
      color: 'text-purple-500'
    },
    {
      key: 'githubStreak' as keyof typeof addOns,
      icon: Zap,
      title: 'GitHub Streak',
      description: 'Show contribution streak',
      color: 'text-orange-500'
    },
    {
      key: 'wakaTimeStats' as keyof typeof addOns,
      icon: Clock,
      title: 'WakaTime Stats',
      description: 'Coding time statistics',
      color: 'text-indigo-500'
    },
    {
      key: 'githubActivity' as keyof typeof addOns,
      icon: Activity,
      title: 'GitHub Activity Graph',
      description: 'Recent activity visualization',
      color: 'text-cyan-500'
    },
    {
      key: 'contributionGraph' as keyof typeof addOns,
      icon: GitBranch,
      title: 'Contribution Graph',
      description: '3D contribution calendar',
      color: 'text-emerald-500'
    },
    {
      key: 'profileViews3D' as keyof typeof addOns,
      icon: Eye,
      title: '3D Profile Views',
      description: 'Animated profile views',
      color: 'text-pink-500'
    },
    {
      key: 'typingAnimation' as keyof typeof addOns,
      icon: Type,
      title: 'Typing Animation',
      description: 'Animated typing text',
      color: 'text-violet-500'
    },
    {
      key: 'musicStatus' as keyof typeof addOns,
      icon: Music,
      title: 'Spotify Status',
      description: 'Currently playing music',
      color: 'text-green-600'
    },
    {
      key: 'codingStats' as keyof typeof addOns,
      icon: Code,
      title: 'Coding Stats',
      description: 'Detailed coding metrics',
      color: 'text-blue-600'
    },
    {
      key: 'recentActivity' as keyof typeof addOns,
      icon: Activity,
      title: 'Recent Activity',
      description: 'Latest GitHub activity',
      color: 'text-red-500'
    },
    {
      key: 'twitterFollow' as keyof typeof addOns,
      icon: Twitter,
      title: 'Twitter Follow',
      description: 'Twitter follow button',
      color: 'text-blue-400'
    },
    {
      key: 'devToBlog' as keyof typeof addOns,
      icon: BookOpen,
      title: 'Dev.to Blog Posts',
      description: 'Auto-fetch blog posts',
      color: 'text-gray-500'
    }
  ];

  const badgeStyles = [
    { value: 'flat', label: 'Flat' },
    { value: 'flat-square', label: 'Flat Square' },
    { value: 'plastic', label: 'Plastic' },
    { value: 'for-the-badge', label: 'For The Badge' },
    { value: 'social', label: 'Social' }
  ];

  const badgeColors = [
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'purple', label: 'Purple' },
    { value: 'pink', label: 'Pink' },
    { value: 'black', label: 'Black' }
  ];

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
          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h2 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Add-ons & Enhancements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {addOnItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800/80 border-gray-600 hover:bg-gray-700 shadow-lg mx-1 sm:mx-0'
                  : 'bg-white/80 border-gray-300 hover:bg-gray-50 shadow-lg mx-1 sm:mx-0'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs md:text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } hidden sm:block`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                  onClick={() => toggleAddOn(item.key)}
                  className={`${switchClass} ${
                    addOns[item.key] ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      addOns[item.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Coffee className="w-4 h-4 inline mr-2" />
              Buy Me a Coffee Username
            </label>
            <input
              type="text"
              className={inputClass}
              value={addOns.buyMeCoffee}
              onChange={(e) => toggleAddOn('buyMeCoffee', e.target.value)}
              placeholder="yourusername"
            />
          </div>
        </div>
      </div>

      <div className={cardClass}>
        <motion.div 
          className="flex items-center space-x-3 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h2 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Badge Customization
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Badge Style
            </label>
            <select
              className={selectClass}
              value={badgeStyle.style}
              onChange={(e) => updateBadgeStyle({ style: e.target.value as any })}
            >
              {badgeStyles.map((style) => (
                <option key={style.value} value={style.value}>
                  {style.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Badge Color
            </label>
            <select
              className={selectClass}
              value={badgeStyle.color}
              onChange={(e) => updateBadgeStyle({ color: e.target.value })}
            >
              {badgeColors.map((color) => (
                <option key={color.value} value={color.value}>
                  {color.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700">
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <Star className="w-4 h-4 inline mr-2 text-yellow-500" />
            Badge styles will be applied to social media badges and skill icons in your README.
          </p>
        </div>
      </div>
    </motion.div>
  );
};