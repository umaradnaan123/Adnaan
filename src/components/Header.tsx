import React from 'react';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useAppStore();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 ${
        darkMode ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-md border-b ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 md:space-x-3"
          >
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className={`text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                ProfileCraft Studio
              </h1>
              <p className={`text-xs md:text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              } hidden sm:block`}>
                Craft exceptional GitHub profiles that stand out
              </p>
            </div>
          </motion.div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/umaradnaan123"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } hover:shadow-lg`}
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/mohammed-umar-adnaan-faiz/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } hover:shadow-lg`}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:adnaanaddu1929@gmail.com"
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } hover:shadow-lg`}
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};