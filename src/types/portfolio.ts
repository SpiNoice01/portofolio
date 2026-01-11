export interface HeroData {
  name: string;
  title: string;
  description: string;
  initials: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  journeyTitle: string;
  journeyDescription: string;
  skills: string[];
  stats: {
    projects: number;
    experience: string;
    clients: number;
    support: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ContactData {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  projects: Project[];
  contact: ContactData;
  metadata: {
    siteName: string;
    title: string;
    description: string;
    keywords: string;
  };
}
