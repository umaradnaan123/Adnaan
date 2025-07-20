export interface PersonalInfo {
  name: string;
  subtitle: string;
  profileImage: string;
  currentWork: { project: string; link: string };
  collaboration: { project: string; link: string };
  helpWith: { project: string; link: string };
  learning: string;
  askAbout: string;
  email: string;
  portfolio: string;
  blog: string;
  resume: string;
  funFact: string;
  location: string;
  pronouns: string;
  timezone: string;
  languages: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  checked: boolean;
}

export interface SocialLink {
  platform: string;
  username: string;
  icon: string;
  baseUrl: string;
}

export interface AddOns {
  visitorCount: boolean;
  githubTrophy: boolean;
  githubStats: boolean;
  topSkills: boolean;
  githubStreak: boolean;
  twitterFollow: boolean;
  buyMeCoffee: string;
  devToBlog: boolean;
  wakaTimeStats: boolean;
  githubActivity: boolean;
  contributionGraph: boolean;
  profileViews3D: boolean;
  typingAnimation: boolean;
  musicStatus: boolean;
  codingStats: boolean;
  recentActivity: boolean;
}

export interface BadgeStyle {
  style: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' | 'social';
  color: string;
}

export interface AppState {
  personalInfo: PersonalInfo;
  skills: SkillCategory[];
  socialLinks: SocialLink[];
  addOns: AddOns;
  badgeStyle: BadgeStyle;
  darkMode: boolean;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  toggleSkill: (categoryIndex: number, skillIndex: number) => void;
  updateSocialLink: (index: number, username: string) => void;
  toggleAddOn: (addon: keyof AddOns, value?: any) => void;
  updateBadgeStyle: (style: Partial<BadgeStyle>) => void;
  toggleDarkMode: () => void;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}