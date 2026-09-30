export interface DeveloperProfile {
  name: string;
  roleTitle: string;
  tagline: string;
  bioParagraphs: string[];
  location: string;
  contacts: {
    email: string;
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
    whatsappUrl: string;
    github: string;
    githubUsername: string;
    linkedin: string;
  };
  avatarUrl: string;
  statusText: string;
  openToRoles: string[];
  stats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}

export type ProjectCategory = 'All' | 'Go Systems' | 'Full-Stack' | 'FinTech / SDK';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architectureDetails: string[];
  tags: string[];
  category: 'Full-Stack' | 'Go Systems' | 'FinTech / SDK';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  accentColor: 'emerald' | 'cyan' | 'indigo' | 'amber';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  tags: string[];
  type: 'engineering' | 'education';
  badge: string;
}

export interface SkillItem {
  name: string;
  category: string;
  featured: boolean;
  level?: 'Mastery' | 'Advanced' | 'Proficient';
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}
