import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { darkMode } = useAppStore();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-16 border-t ${
        darkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-white/50'
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-2">
            <p className={`text-xs md:text-sm text-center lg:text-left ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2025 ProfileCraft Studio. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500 mx-1" />
              <span className="block sm:inline">by{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent break-words">
                Shaik Barood Mohammed Umar Adnaan Faiz
              </span>
              </span>
            </p>
          </div>

          {/* Empty space for balance */}
          <div></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;