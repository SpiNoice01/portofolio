"use client";

import { useState } from "react";
import Link from "next/link";
import { usePortfolio } from "@/context/PortfolioContext";
import HeroEditor from "@/components/admin/HeroEditor";
import AboutEditor from "@/components/admin/AboutEditor";
import ProjectsEditor from "@/components/admin/ProjectsEditor";
import ContactEditor from "@/components/admin/ContactEditor";
import MetadataEditor from "@/components/admin/MetadataEditor";

type TabType = "hero" | "about" | "projects" | "contact" | "metadata";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>("hero");
  const { saveToLocalStorage, resetToDefault } = usePortfolio();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    saveToLocalStorage();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all data to default? This cannot be undone.")) {
      resetToDefault();
    }
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: "hero", label: "Hero Section" },
    { id: "about", label: "About Section" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "metadata", label: "SEO & Metadata" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Content Management System</h1>
              <p className="text-sm text-gray-400">Manage your portfolio content</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                View Site
              </Link>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all font-semibold"
              >
                {saved ? "✓ Saved" : "Save Changes"}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors border border-red-500/30"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 mb-8 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
          {activeTab === "hero" && <HeroEditor />}
          {activeTab === "about" && <AboutEditor />}
          {activeTab === "projects" && <ProjectsEditor />}
          {activeTab === "contact" && <ContactEditor />}
          {activeTab === "metadata" && <MetadataEditor />}
        </div>

        {/* Info */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-sm text-blue-300">
            <strong>Note:</strong> Changes are automatically saved to localStorage. For production, 
            you should integrate with a backend API or database.
          </p>
        </div>
      </div>
    </div>
  );
}
