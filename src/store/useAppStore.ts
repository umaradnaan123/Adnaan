import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, PersonalInfo, AddOns, BadgeStyle } from '../types';
import { skillCategories } from '../data/skills';
import { socialPlatforms } from '../data/socialPlatforms';

const defaultPersonalInfo: PersonalInfo = {
  name: 'Your Name',
  subtitle: 'A passionate frontend developer from India',
  profileImage: '',
  currentWork: { project: 'project name', link: '' },
  collaboration: { project: 'project name', link: '' },
  helpWith: { project: 'project name', link: '' },
  learning: 'React, Node.js',
  askAbout: 'React, JavaScript, Node.js',
  email: 'your.email@example.com',
  portfolio: 'https://yourportfolio.com',
  blog: 'https://yourblog.com',
  resume: 'https://yourresume.com',
  funFact: 'I think I am funny',
  location: 'India',
  pronouns: 'he/him',
  timezone: 'Asia/Kolkata',
  languages: ['English', 'Hindi']
};

const defaultAddOns: AddOns = {
  visitorCount: true,
  githubTrophy: true,
  githubStats: true,
  topSkills: true,
  githubStreak: true,
  twitterFollow: false,
  buyMeCoffee: '',
  devToBlog: false,
  wakaTimeStats: false,
  githubActivity: true,
  contributionGraph: true,
  profileViews3D: false,
  typingAnimation: true,
  musicStatus: false,
  codingStats: true,
  recentActivity: true
};

const defaultBadgeStyle: BadgeStyle = {
  style: 'for-the-badge',
  color: 'blue'
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      personalInfo: defaultPersonalInfo,
      skills: skillCategories,
      socialLinks: socialPlatforms,
      addOns: defaultAddOns,
      badgeStyle: defaultBadgeStyle,
      darkMode: false,
      
      updatePersonalInfo: (info) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...info }
        })),
      
      toggleSkill: (categoryIndex, skillIndex) =>
        set((state) => {
          const newSkills = [...state.skills];
          newSkills[categoryIndex].skills[skillIndex].checked = 
            !newSkills[categoryIndex].skills[skillIndex].checked;
          return { skills: newSkills };
        }),
      
      updateSocialLink: (index, username) =>
        set((state) => {
          const newLinks = [...state.socialLinks];
          newLinks[index].username = username;
          return { socialLinks: newLinks };
        }),
      
      toggleAddOn: (addon, value) =>
        set((state) => ({
          addOns: { 
            ...state.addOns, 
            [addon]: typeof value !== 'undefined' ? value : !state.addOns[addon]
          }
        })),
      
      updateBadgeStyle: (style) =>
        set((state) => ({
          badgeStyle: { ...state.badgeStyle, ...style }
        })),
      
      toggleDarkMode: () =>
        set((state) => ({ darkMode: !state.darkMode }))
    }),
    {
      name: 'github-readme-generator',
      partialize: (state) => ({
        personalInfo: state.personalInfo,
        skills: state.skills,
        socialLinks: state.socialLinks,
        addOns: state.addOns,
        badgeStyle: state.badgeStyle,
        darkMode: state.darkMode
      })
    }
  )
);