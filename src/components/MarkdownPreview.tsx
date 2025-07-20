import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Copy, Download, Eye, Edit3, Save, X } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAppStore } from '../store/useAppStore';
import { generateMarkdown } from '../utils/markdownGenerator';

export const MarkdownPreview: React.FC = () => {
  const { personalInfo, skills, socialLinks, addOns, badgeStyle, darkMode } = useAppStore();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editableMarkdown, setEditableMarkdown] = React.useState('');
  const markdown = generateMarkdown(personalInfo, skills, socialLinks, addOns, badgeStyle);

  // Update editable markdown when generated markdown changes
  React.useEffect(() => {
    if (!isEditing) {
      setEditableMarkdown(markdown);
    }
  }, [markdown, isEditing]);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes - you could add validation here
      setIsEditing(false);
    } else {
      setEditableMarkdown(markdown);
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setEditableMarkdown(markdown);
    setIsEditing(false);
  };

  const downloadMarkdown = () => {
    const contentToDownload = isEditing ? editableMarkdown : markdown;
    const element = document.createElement('a');
    const file = new Blob([contentToDownload], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const cardClass = `p-6 rounded-xl border transition-all duration-200 ${
    darkMode
      ? 'bg-gray-900/60 border-gray-700/50 backdrop-blur-md shadow-xl mx-2 sm:mx-0'
      : 'bg-white/60 border-gray-200/50 backdrop-blur-md shadow-xl mx-2 sm:mx-0'
  } hover:shadow-2xl hover:scale-[1.01] transform transition-all duration-300`;

  const buttonClass = `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
    darkMode
      ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600'
      : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300'
  } border`;

  const textareaClass = `w-full h-full p-4 rounded-lg border resize-none font-mono text-sm leading-relaxed ${
    darkMode
      ? 'bg-gray-800 border-gray-600 text-gray-300 placeholder-gray-400 focus:border-blue-500'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="space-y-6"
    >
      <div className={cardClass}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
              {isEditing ? (
                <Edit3 className="w-6 h-6 text-white" />
              ) : (
                <Eye className="w-6 h-6 text-white" />
              )}
            </div>
            <h2 className={`text-lg md:text-xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {isEditing ? 'Edit Mode' : 'Live Preview'}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {isEditing && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancelEdit}
                className={`${buttonClass} hover:shadow-lg text-red-600 border-red-300 hover:bg-red-50 text-sm ${
                  darkMode ? 'hover:bg-red-900/20 border-red-700' : ''
                }`}
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Cancel</span>
              </motion.button>
            )}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEditToggle}
              className={`${buttonClass} hover:shadow-lg text-sm ${
                isEditing 
                  ? 'text-green-600 border-green-300 hover:bg-green-50' + (darkMode ? ' hover:bg-green-900/20 border-green-700' : '')
                  : ''
              }`}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4" />
                  <span className="hidden sm:inline">Save</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Edit</span>
                </>
              )}
            </motion.button>

            <CopyToClipboard text={isEditing ? editableMarkdown : markdown}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${buttonClass} hover:shadow-lg text-sm`}
              >
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </motion.button>
            </CopyToClipboard>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadMarkdown}
              className="flex items-center space-x-1 md:space-x-2 px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </motion.button>
          </div>
        </div>

        {isEditing ? (
          <div className={`h-64 md:h-96 rounded-lg border ${
            darkMode
              ? 'bg-gray-800 border-gray-600'
              : 'bg-gray-50 border-gray-200'
          }`}>
            <textarea
              value={editableMarkdown}
              onChange={(e) => setEditableMarkdown(e.target.value)}
              className={textareaClass}
              placeholder="Edit your markdown here..."
            />
          </div>
        ) : (
          <div className={`max-h-64 md:max-h-96 overflow-y-auto rounded-lg border p-4 md:p-6 ${
            darkMode
              ? 'bg-gray-800 border-gray-600'
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className={`text-xl md:text-3xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className={`text-lg md:text-2xl font-semibold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className={`text-base md:text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className={`mb-3 text-sm md:text-base ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {children}
                    </p>
                  ),
                  li: ({ children }) => (
                    <li className={`mb-2 text-sm md:text-base ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {children}
                    </li>
                  )
                }}
              >
                {editableMarkdown}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      <div className={cardClass}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
            <Copy className="w-6 h-6 text-white" />
          </div>
          <h3 className={`text-lg font-semibold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Raw Markdown
          </h3>
        </div>
        <div className={`rounded-lg border p-3 md:p-4 ${
          darkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-gray-50 border-gray-200'
        }`}>
          <pre className={`text-xs md:text-sm overflow-x-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {isEditing ? editableMarkdown : markdown}
          </pre>
        </div>
      </div>
    </motion.div>
  );
};