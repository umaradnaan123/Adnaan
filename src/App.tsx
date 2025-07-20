import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from './store/useAppStore';
import { Header } from './components/Header';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { SkillsSelector } from './components/SkillsSelector';
import { SocialLinksForm } from './components/SocialLinksForm';
import { AddOnsForm } from './components/AddOnsForm';
import { MarkdownPreview } from './components/MarkdownPreview';
import Footer from './components/Footer';

function App() {
  const { darkMode } = useAppStore();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Craft Your Ultimate{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              GitHub Profile
            </span>
          </h1>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transform your GitHub presence with our advanced profile generator. Create stunning, 
            professional READMEs that showcase your skills, projects, and personality with style.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-4 px-4"
          >
            <div className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium ${
              darkMode 
                ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50' 
                : 'bg-blue-100 text-blue-700 border border-blue-200'
            }`}>
              ✨ Interactive Design
            </div>
            <div className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium ${
              darkMode 
                ? 'bg-purple-900/30 text-purple-300 border border-purple-700/50' 
                : 'bg-purple-100 text-purple-700 border border-purple-200'
            }`}>
              🎨 Modern Templates
            </div>
            <div className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium ${
              darkMode 
                ? 'bg-green-900/30 text-green-300 border border-green-700/50' 
                : 'bg-green-100 text-green-700 border border-green-200'
            }`}>
              🚀 Live Preview
            </div>
            <div className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium ${
              darkMode 
                ? 'bg-orange-900/30 text-orange-300 border border-orange-700/50' 
                : 'bg-orange-100 text-orange-700 border border-orange-200'
            }`}>
              🔧 Advanced Features
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6 lg:space-y-8">
            <PersonalInfoForm />
            <SkillsSelector />
            <SocialLinksForm />
            <AddOnsForm />
          </div>

          {/* Right Column - Preview */}
          <div className="xl:sticky xl:top-8 xl:h-fit">
            <MarkdownPreview />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;