import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { User, Mail, Globe, FileText, Briefcase, Users, HelpCircle, BookOpen, Zap, Image, MapPin, Clock, MessageCircle } from 'lucide-react';

export const PersonalInfoForm: React.FC = () => {
  const { personalInfo, updatePersonalInfo, darkMode } = useAppStore();

  const inputClass = `w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
    darkMode
      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-gray-50'
  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`;

  const labelClass = `block text-sm font-medium mb-2 ${
    darkMode ? 'text-gray-300' : 'text-gray-700'
  }`;

  const cardClass = `p-6 rounded-xl border transition-all duration-200 ${
    darkMode
      ? 'bg-gray-900/60 border-gray-700/50 backdrop-blur-md shadow-xl mx-2 sm:mx-0'
      : 'bg-white/60 border-gray-200/50 backdrop-blur-md shadow-xl mx-2 sm:mx-0'
  } hover:shadow-2xl hover:scale-[1.01] transform transition-all duration-300`;

  const handleLanguageChange = (value: string) => {
    const languages = value.split(',').map(lang => lang.trim()).filter(lang => lang);
    updatePersonalInfo({ languages });
  };

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
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <User className="w-6 h-6 text-white" />
          </div>
          <h2 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Personal Information
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className={labelClass}>
              <User className="w-4 h-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.name}
              onChange={(e) => updatePersonalInfo({ name: e.target.value })}
              placeholder="Your Full Name"
            />
          </div>

          <div>
            <label className={labelClass}>
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </label>
            <input
              type="email"
              className={inputClass}
              value={personalInfo.email}
              onChange={(e) => updatePersonalInfo({ email: e.target.value })}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              <FileText className="w-4 h-4 inline mr-2" />
              Subtitle
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.subtitle}
              onChange={(e) => updatePersonalInfo({ subtitle: e.target.value })}
              placeholder="A passionate developer from..."
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              <Image className="w-4 h-4 inline mr-2" />
              Profile Image URL
            </label>
            <input
              type="url"
              className={inputClass}
              value={personalInfo.profileImage}
              onChange={(e) => updatePersonalInfo({ profileImage: e.target.value })}
              placeholder="https://example.com/your-profile-image.jpg"
            />
            {personalInfo.profileImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 flex justify-center"
              >
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <img
                      src={personalInfo.profileImage}
                      alt="Profile Preview"
                      className="w-full h-full rounded-full object-cover bg-white"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NCA2NEMzNiA2NCA2NCA5MiA2NCA5MkM2NCA5MiA5MiA2NCA4NCA2NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div>
            <label className={labelClass}>
              <MapPin className="w-4 h-4 inline mr-2" />
              Location
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.location}
              onChange={(e) => updatePersonalInfo({ location: e.target.value })}
              placeholder="City, Country"
            />
          </div>

          <div>
            <label className={labelClass}>
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Pronouns
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.pronouns}
              onChange={(e) => updatePersonalInfo({ pronouns: e.target.value })}
              placeholder="he/him, she/her, they/them"
            />
          </div>

          <div>
            <label className={labelClass}>
              <Clock className="w-4 h-4 inline mr-2" />
              Timezone
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.timezone}
              onChange={(e) => updatePersonalInfo({ timezone: e.target.value })}
              placeholder="Asia/Kolkata, America/New_York"
            />
          </div>

          <div>
            <label className={labelClass}>
              <Globe className="w-4 h-4 inline mr-2" />
              Languages
            </label>
            <input
              type="text"
              className={inputClass}
              value={(personalInfo.languages || []).join(', ')}
              onChange={(e) => handleLanguageChange(e.target.value)}
              placeholder="English, Hindi, Spanish"
            />
          </div>

          <div>
            <label className={labelClass}>
              <Globe className="w-4 h-4 inline mr-2" />
              Portfolio URL
            </label>
            <input
              type="url"
              className={inputClass}
              value={personalInfo.portfolio}
              onChange={(e) => updatePersonalInfo({ portfolio: e.target.value })}
              placeholder="https://yourportfolio.com"
            />
          </div>

          <div>
            <label className={labelClass}>
              <BookOpen className="w-4 h-4 inline mr-2" />
              Blog URL
            </label>
            <input
              type="url"
              className={inputClass}
              value={personalInfo.blog}
              onChange={(e) => updatePersonalInfo({ blog: e.target.value })}
              placeholder="https://yourblog.com"
            />
          </div>

          <div>
            <label className={labelClass}>
              <FileText className="w-4 h-4 inline mr-2" />
              Resume URL
            </label>
            <input
              type="url"
              className={inputClass}
              value={personalInfo.resume}
              onChange={(e) => updatePersonalInfo({ resume: e.target.value })}
              placeholder="https://yourresume.com"
            />
          </div>

          <div>
            <label className={labelClass}>
              <BookOpen className="w-4 h-4 inline mr-2" />
              Currently Learning
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.learning}
              onChange={(e) => updatePersonalInfo({ learning: e.target.value })}
              placeholder="React, Node.js, TypeScript"
            />
          </div>

          <div>
            <label className={labelClass}>
              <HelpCircle className="w-4 h-4 inline mr-2" />
              Ask Me About
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.askAbout}
              onChange={(e) => updatePersonalInfo({ askAbout: e.target.value })}
              placeholder="React, JavaScript, Web Development"
            />
          </div>

          <div>
            <label className={labelClass}>
              <Zap className="w-4 h-4 inline mr-2" />
              Fun Fact
            </label>
            <input
              type="text"
              className={inputClass}
              value={personalInfo.funFact}
              onChange={(e) => updatePersonalInfo({ funFact: e.target.value })}
              placeholder="Something interesting about you"
            />
          </div>
        </div>
      </div>

      <div className={cardClass}>
        <motion.div 
          className="flex items-center space-x-3 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Work & Projects
          </h2>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Current Project</label>
              <input
                type="text"
                className={inputClass}
                value={personalInfo.currentWork.project}
                onChange={(e) => updatePersonalInfo({ 
                  currentWork: { ...personalInfo.currentWork, project: e.target.value }
                })}
                placeholder="Project name"
              />
            </div>
            <div>
              <label className={labelClass}>Project Link</label>
              <input
                type="url"
                className={inputClass}
                value={personalInfo.currentWork.link}
                onChange={(e) => updatePersonalInfo({ 
                  currentWork: { ...personalInfo.currentWork, link: e.target.value }
                })}
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Collaboration Project</label>
              <input
                type="text"
                className={inputClass}
                value={personalInfo.collaboration.project}
                onChange={(e) => updatePersonalInfo({ 
                  collaboration: { ...personalInfo.collaboration, project: e.target.value }
                })}
                placeholder="Project name"
              />
            </div>
            <div>
              <label className={labelClass}>Collaboration Link</label>
              <input
                type="url"
                className={inputClass}
                value={personalInfo.collaboration.link}
                onChange={(e) => updatePersonalInfo({ 
                  collaboration: { ...personalInfo.collaboration, link: e.target.value }
                })}
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Need Help With</label>
              <input
                type="text"
                className={inputClass}
                value={personalInfo.helpWith.project}
                onChange={(e) => updatePersonalInfo({ 
                  helpWith: { ...personalInfo.helpWith, project: e.target.value }
                })}
                placeholder="Project name"
              />
            </div>
            <div>
              <label className={labelClass}>Help Project Link</label>
              <input
                type="url"
                className={inputClass}
                value={personalInfo.helpWith.link}
                onChange={(e) => updatePersonalInfo({ 
                  helpWith: { ...personalInfo.helpWith, link: e.target.value }
                })}
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};