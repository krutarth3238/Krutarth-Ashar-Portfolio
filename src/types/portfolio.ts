export type ActiveScreen = 'portfolio' | 'soil-lab' | 'lifesync' | 'resume';

export interface ProjectWorkflowStage {
  step: string;
  title: string;
  desc: string;
  details: string;
  codeSnippet: string;
  color: string;
}

export interface ProjectStage {
  id: string;
  step: string;
  title: string;
  desc: string;
  color: string;
  details: string;
  codeSnippet: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  bullets?: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  hasInteractiveDemo?: boolean;
  demoType?: 'soil-lab' | 'lifesync' | 'crewmate' | 'nexus' | 'civiciq' | 'saber';
  featured?: boolean;
  architectureStages?: ProjectWorkflowStage[];
  liveDemoStats?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyColor: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface SkillDetail {
  name: string;
  level?: string;
  experience?: string;
  proof?: string;
  usedIn?: string;
  highlighted?: boolean;
  tagColor?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  iconColor: string;
  description?: string;
  skills: SkillDetail[];
}

export interface AchievementItem {
  title: string;
  host: string;
  description: string;
  icon: string;
  badgeColor: string;
  type: 'hackathon' | 'competition';
}

export interface CertificationItem {
  issuer: string;
  title: string;
  subtopic: string;
  accentColor: string;
}
