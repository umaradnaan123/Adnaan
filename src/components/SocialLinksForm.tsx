import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { Share2, ExternalLink } from 'lucide-react';

export const SocialLinksForm: React.FC = () => {
  const { socialLinks, updateSocialLink, darkMode } = useAppStore();

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

  const labelClass = `block text-sm font-medium mb-2 ${
    darkMode ? 'text-gray-300' : 'text-gray-700'
  }`;

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
          <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <h2 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Social Links
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.platform}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -1 }}
              transition={{ delay: index * 0.05 }}
              className="space-y-2"
            >
              <label className={labelClass}>
                <span className="flex items-center">
                  {link.platform}
                  {link.username && (
                    <ExternalLink className="w-4 h-4 ml-2 text-blue-500" />
                  )}
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  className={inputClass}
                  value={link.username}
                  onChange={(e) => updateSocialLink(index, e.target.value)}
                  placeholder={`Your ${link.platform} username`}
                />
                <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                } hidden sm:block`}>
                  {link.baseUrl}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};