"use client";

import { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { AboutData } from "@/types/portfolio";

export default function AboutEditor() {
  const { portfolioData, updateAbout } = usePortfolio();
  const [formData, setFormData] = useState<AboutData>(portfolioData.about);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    setFormData(portfolioData.about);
  }, [portfolioData.about]);

  const handleChange = (field: keyof AboutData, value: string | string[] | AboutData["stats"]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStatsChange = (field: keyof AboutData["stats"], value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      stats: { ...prev.stats, [field]: value },
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      handleChange("skills", [...formData.skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    handleChange(
      "skills",
      formData.skills.filter((s) => s !== skill)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAbout(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Edit About Section</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Section Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subtitle
          </label>
          <textarea
            value={formData.subtitle}
            onChange={(e) => handleChange("subtitle", e.target.value)}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Journey Title
          </label>
          <input
            type="text"
            value={formData.journeyTitle}
            onChange={(e) => handleChange("journeyTitle", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Journey Description
          </label>
          <textarea
            value={formData.journeyDescription}
            onChange={(e) => handleChange("journeyDescription", e.target.value)}
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Skills
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              placeholder="Add a skill"
            />
            <button
              type="button"
              onClick={addSkill}
              className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill) => (
              <span
                key={skill}
                className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="hover:text-red-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Projects Count
            </label>
            <input
              type="number"
              value={formData.stats.projects}
              onChange={(e) => handleStatsChange("projects", parseInt(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Experience
            </label>
            <input
              type="text"
              value={formData.stats.experience}
              onChange={(e) => handleStatsChange("experience", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              placeholder="5+"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Clients Count
            </label>
            <input
              type="number"
              value={formData.stats.clients}
              onChange={(e) => handleStatsChange("clients", parseInt(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Support
            </label>
            <input
              type="text"
              value={formData.stats.support}
              onChange={(e) => handleStatsChange("support", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              placeholder="24/7"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
        >
          Update About Section
        </button>
      </form>
    </div>
  );
}
