"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { PortfolioData, HeroData, AboutData, Project, ContactData } from "@/types/portfolio";

// Default data
const defaultPortfolioData: PortfolioData = {
  hero: {
    name: "John Doe",
    title: "Full Stack Developer & UI/UX Designer",
    description: "Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional web experiences that make a difference.",
    initials: "JD",
  },
  about: {
    title: "About Me",
    subtitle: "I'm a passionate developer with 5+ years of experience creating digital solutions that combine beautiful design with robust functionality.",
    journeyTitle: "My Journey",
    journeyDescription: "Started as a curious student, evolved into a professional developer who loves solving complex problems and creating user-centered experiences. I believe in continuous learning and staying updated with the latest technologies.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"],
    stats: {
      projects: 50,
      experience: "5+",
      clients: 30,
      support: "24/7",
    },
  },
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution built with React, Node.js, and Stripe integration.",
      category: "Web App",
      tags: ["React", "Node.js", "MongoDB"],
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Cross-platform mobile app for team collaboration and project management.",
      category: "Mobile App",
      tags: ["React Native", "Firebase"],
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization.",
      category: "Dashboard",
      tags: ["Vue.js", "D3.js", "Python"],
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
    },
  ],
  contact: {
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    socialLinks: {},
  },
  metadata: {
    siteName: "John Doe Portfolio",
    title: "John Doe - Full Stack Developer & UI/UX Designer",
    description: "Passionate Full Stack Developer & UI/UX Designer with 5+ years of experience creating beautiful, functional web experiences.",
    keywords: "Full Stack Developer, UI/UX Designer, React, Next.js, TypeScript, Web Development, Portfolio",
  },
};

interface PortfolioContextType {
  portfolioData: PortfolioData;
  updateHero: (data: HeroData) => void;
  updateAbout: (data: AboutData) => void;
  updateProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  updateContact: (data: ContactData) => void;
  updateMetadata: (metadata: Partial<PortfolioData["metadata"]>) => void;
  resetToDefault: () => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolioData");
      if (saved) {
        try {
          setPortfolioData(JSON.parse(saved));
        } catch (error) {
          console.error("Error loading portfolio data:", error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    }
  }, [portfolioData, isLoaded]);

  const updateHero = (data: HeroData) => {
    setPortfolioData((prev) => ({ ...prev, hero: data }));
  };

  const updateAbout = (data: AboutData) => {
    setPortfolioData((prev) => ({ ...prev, about: data }));
  };

  const updateProjects = (projects: Project[]) => {
    setPortfolioData((prev) => ({ ...prev, projects }));
  };

  const addProject = (project: Project) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
    }));
  };

  const deleteProject = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  const updateContact = (data: ContactData) => {
    setPortfolioData((prev) => ({ ...prev, contact: data }));
  };

  const updateMetadata = (metadata: Partial<PortfolioData["metadata"]>) => {
    setPortfolioData((prev) => ({
      ...prev,
      metadata: { ...prev.metadata, ...metadata },
    }));
  };

  const resetToDefault = () => {
    setPortfolioData(defaultPortfolioData);
  };

  const saveToLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    }
  };

  const loadFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolioData");
      if (saved) {
        try {
          setPortfolioData(JSON.parse(saved));
        } catch (error) {
          console.error("Error loading portfolio data:", error);
        }
      }
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        updateHero,
        updateAbout,
        updateProjects,
        addProject,
        updateProject,
        deleteProject,
        updateContact,
        updateMetadata,
        resetToDefault,
        saveToLocalStorage,
        loadFromLocalStorage,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
