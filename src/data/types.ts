export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  highlight?: boolean;
  skills: { name: string; icon?: string }[];
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  remote?: boolean;
  description: string;
  bullets: { text: string; ai?: boolean }[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
  gradient: string;
  ai?: boolean;
  link: string | null;
  year: string;
}

export interface Competency {
  id: string;
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}
