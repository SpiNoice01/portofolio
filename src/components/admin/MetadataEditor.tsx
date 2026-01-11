"use client";

import { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function MetadataEditor() {
  const { portfolioData, updateMetadata } = usePortfolio();
  const [formData, setFormData] = useState(portfolioData.metadata);

  useEffect(() => {
    setFormData(portfolioData.metadata);
  }, [portfolioData.metadata]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMetadata(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Edit SEO & Metadata</h2>
      <p className="text-gray-400 mb-6 text-sm">
        These settings affect how your portfolio appears in search engines and when shared on social media.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Site Name
          </label>
          <input
            type="text"
            value={formData.siteName}
            onChange={(e) => handleChange("siteName", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="John Doe Portfolio"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Page Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="John Doe - Full Stack Developer & UI/UX Designer"
          />
          <p className="text-xs text-gray-400 mt-1">Appears in browser tab and search results</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Meta Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="Passionate Full Stack Developer & UI/UX Designer with 5+ years of experience..."
          />
          <p className="text-xs text-gray-400 mt-1">Recommended: 150-160 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            value={formData.keywords}
            onChange={(e) => handleChange("keywords", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="Full Stack Developer, UI/UX Designer, React, Next.js, TypeScript"
          />
          <p className="text-xs text-gray-400 mt-1">Separate keywords with commas</p>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
        >
          Update Metadata
        </button>
      </form>
    </div>
  );
}
