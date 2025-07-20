import { PersonalInfo, SkillCategory, SocialLink, AddOns, BadgeStyle } from '../types';

export const generateMarkdown = (
  personalInfo: PersonalInfo,
  skills: SkillCategory[],
  socialLinks: SocialLink[],
  addOns: AddOns,
  badgeStyle: BadgeStyle
): string => {
  const { name } = personalInfo;
  const username = socialLinks.find(link => link.platform === 'GitHub')?.username || 'yourusername';
  
  let markdown = '';

  // Typing animation header
  if (addOns.typingAnimation) {
    markdown += `<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=Hello,+World!+👋;I'm+${personalInfo.name.replace(' ', '+')};Welcome+to+my+GitHub+Profile!&center=true&size=30">
  </a>
</h1>\n\n`;
  } else {
    markdown += `# Hi 👋, I'm ${personalInfo.name}\n\n`;
  }

  markdown += `## ${personalInfo.subtitle}\n\n`;

  // Add profile image if provided
  if (personalInfo.profileImage) {
    markdown += `<div align="center">\n`;
    markdown += `  <img src="${personalInfo.profileImage}" alt="${personalInfo.name}" width="200" height="200" style="border-radius: 50%; object-fit: cover;" />\n`;
    markdown += `</div>\n\n`;
  }

  // Profile views counter
  if (addOns.visitorCount) {
    if (addOns.profileViews3D) {
      markdown += `<p align="center">
  <img src="https://profile-counter.glitch.me/${username}/count.svg" alt="Profile Views" />
</p>\n\n`;
    } else {
      markdown += `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=${badgeStyle.color}&style=${badgeStyle.style}" alt="${username}" /> </p>\n\n`;
    }
  }

  // GitHub Trophy
  if (addOns.githubTrophy) {
    markdown += `<p align="center">
  <a href="https://github.com/ryo-ma/github-profile-trophy">
    <img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=onedark&no-frame=true&no-bg=true&margin-w=4" alt="${username}" />
  </a>
</p>\n\n`;
  }

  // Personal info section
  markdown += `<img align="right" alt="Coding" width="400" src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif">\n\n`;

  if (personalInfo.location) {
    markdown += `- 🌍 I'm based in **${personalInfo.location}**\n\n`;
  }

  if (personalInfo.pronouns) {
    markdown += `- 😄 Pronouns: **${personalInfo.pronouns}**\n\n`;
  }

  if (personalInfo.timezone) {
    markdown += `- ⏰ Timezone: **${personalInfo.timezone}**\n\n`;
  }

  if (personalInfo.languages && personalInfo.languages.length > 0) {
    markdown += `- 🗣️ Languages: **${personalInfo.languages.join(', ')}**\n\n`;
  }

  if (personalInfo.currentWork.project) {
    markdown += `- 🔭 I'm currently working on **${personalInfo.currentWork.project}**${personalInfo.currentWork.link ? ` [${personalInfo.currentWork.link}](${personalInfo.currentWork.link})` : ''}\n\n`;
  }

  if (personalInfo.collaboration.project) {
    markdown += `- 👯 I'm looking to collaborate on **${personalInfo.collaboration.project}**${personalInfo.collaboration.link ? ` [${personalInfo.collaboration.link}](${personalInfo.collaboration.link})` : ''}\n\n`;
  }

  if (personalInfo.helpWith.project) {
    markdown += `- 🤝 I'm looking for help with **${personalInfo.helpWith.project}**${personalInfo.helpWith.link ? ` [${personalInfo.helpWith.link}](${personalInfo.helpWith.link})` : ''}\n\n`;
  }

  if (personalInfo.learning) {
    markdown += `- 🌱 I'm currently learning **${personalInfo.learning}**\n\n`;
  }

  if (personalInfo.askAbout) {
    markdown += `- 💬 Ask me about **${personalInfo.askAbout}**\n\n`;
  }

  if (personalInfo.email) {
    markdown += `- 📫 How to reach me **${personalInfo.email}**\n\n`;
  }

  if (personalInfo.portfolio) {
    markdown += `- 👨‍💻 All of my projects are available at [${personalInfo.portfolio}](${personalInfo.portfolio})\n\n`;
  }

  if (personalInfo.blog) {
    markdown += `- 📝 I regularly write articles on [${personalInfo.blog}](${personalInfo.blog})\n\n`;
  }

  if (personalInfo.resume) {
    markdown += `- 📄 Know about my experiences [${personalInfo.resume}](${personalInfo.resume})\n\n`;
  }

  if (personalInfo.funFact) {
    markdown += `- ⚡ Fun fact **${personalInfo.funFact}**\n\n`;
  }

  // Social links
  const activeSocialLinks = socialLinks.filter(link => link.username);
  if (activeSocialLinks.length > 0) {
    markdown += `<h3 align="left">🌐 Connect with me:</h3>\n`;
    markdown += `<p align="left">\n`;
    activeSocialLinks.forEach(link => {
      const iconMap: { [key: string]: string } = {
        github: 'github',
        linkedin: 'linkedin',
        twitter: 'twitter',
        dev: 'dev-to',
        'stack-overflow': 'stackoverflow',
        medium: 'medium',
        codepen: 'codepen',
        code: 'leetcode',
        trophy: 'hackerrank',
        youtube: 'youtube',
        instagram: 'instagram',
        dribbble: 'dribbble',
        behance: 'behance'
      };
      
      const iconName = iconMap[link.icon] || link.icon;
      markdown += `<a href="${link.baseUrl}${link.username}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/${iconName}.svg" alt="${link.username}" height="30" width="40" /></a>\n`;
    });
    markdown += `</p>\n\n`;
  }

  // Skills section
  const selectedSkills = skills.flatMap(category => 
    category.skills.filter(skill => skill.checked)
  );
  
  if (selectedSkills.length > 0) {
    markdown += `<h3 align="left">🛠️ Languages and Tools:</h3>\n`;
    markdown += `<p align="left">`;
    selectedSkills.forEach(skill => {
      markdown += ` <a href="#" target="_blank" rel="noreferrer"> <img src="${skill.icon}" alt="${skill.name}" width="40" height="40"/> </a>`;
    });
    markdown += ` </p>\n\n`;
  }

  // GitHub Stats Section
  if (addOns.githubStats || addOns.topSkills || addOns.githubStreak) {
    markdown += `<h3 align="left">📊 GitHub Stats:</h3>\n\n`;
    
    if (addOns.githubStats && addOns.topSkills) {
      markdown += `<div align="center">\n`;
      markdown += `  <img src="https://github-readme-stats.vercel.app/api?username=${username}&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false" height="150" alt="stats graph" />\n`;
      markdown += `  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=${username}&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false" height="150" alt="languages graph" />\n`;
      markdown += `</div>\n\n`;
    } else if (addOns.githubStats) {
      markdown += `<p align="center"><img src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en&theme=dracula" alt="${username}" /></p>\n\n`;
    } else if (addOns.topSkills) {
      markdown += `<p align="center"><img src="https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact&theme=dracula" alt="${username}" /></p>\n\n`;
    }

    if (addOns.githubStreak) {
      markdown += `<p align="center"><img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark" alt="${username}" /></p>\n\n`;
    }
  }

  // Activity Graph
  if (addOns.githubActivity) {
    markdown += `<h3 align="left">📈 Activity Graph:</h3>\n`;
    markdown += `<img src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&bg_color=20232a&hide_border=true" width="100%"/>\n\n`;
  }

  // Contribution Graph
  if (addOns.contributionGraph) {
    markdown += `<h3 align="left">🏆 Contribution Graph:</h3>\n`;
    markdown += `<img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github_dark" width="100%"/>\n\n`;
  }

  // WakaTime Stats
  if (addOns.wakaTimeStats) {
    markdown += `<h3 align="left">⏱️ WakaTime Stats:</h3>\n`;
    markdown += `<img src="https://github-readme-stats.vercel.app/api/wakatime?username=${username}&theme=dracula" alt="WakaTime Stats" />\n\n`;
  }

  // Coding Stats
  if (addOns.codingStats) {
    markdown += `<h3 align="left">💻 Coding Stats:</h3>\n`;
    markdown += `<div align="center">\n`;
    markdown += `  <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=github_dark" />\n`;
    markdown += `  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=github_dark" />\n`;
    markdown += `</div>\n\n`;
  }

  // Recent Activity
  if (addOns.recentActivity) {
    markdown += `<h3 align="left">⚡ Recent Activity:</h3>\n`;
    markdown += `<!--START_SECTION:activity-->\n`;
    markdown += `<!--END_SECTION:activity-->\n\n`;
  }

  // Music Status
  if (addOns.musicStatus) {
    markdown += `<h3 align="left">🎵 Currently Playing:</h3>\n`;
    markdown += `<img src="https://spotify-github-profile.vercel.app/api/spotify-playing" alt="Spotify Playing" width="350" />\n\n`;
  }

  // Dev.to Blog Posts
  if (addOns.devToBlog) {
    markdown += `<h3 align="left">📝 Latest Blog Posts:</h3>\n`;
    markdown += `<!-- BLOG-POST-LIST:START -->\n`;
    markdown += `<!-- BLOG-POST-LIST:END -->\n\n`;
  }

  // Support section
  if (addOns.buyMeCoffee) {
    markdown += `<h3 align="left">☕ Support:</h3>\n`;
    markdown += `<p><a href="https://www.buymeacoffee.com/${addOns.buyMeCoffee}"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${addOns.buyMeCoffee}" /></a></p><br><br>\n\n`;
  }

  // Footer
  markdown += `---\n`;
  markdown += `<div align="center">\n`;
  markdown += `  <img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" alt="Snake animation" />\n`;
  markdown += `</div>\n\n`;
  markdown += `<div align="center">\n`;
  markdown += `  ⭐️ From [${username}](https://github.com/${username})\n`;
  markdown += `</div>`;

  return markdown;
};