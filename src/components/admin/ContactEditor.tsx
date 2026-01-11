"use client";

import { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { ContactData } from "@/types/portfolio";

export default function ContactEditor() {
  const { portfolioData, updateContact } = usePortfolio();
  const [formData, setFormData] = useState<ContactData>(portfolioData.contact);

  useEffect(() => {
    setFormData(portfolioData.contact);
  }, [portfolioData.contact]);

  const handleChange = (field: keyof ContactData, value: string | ContactData["socialLinks"]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (platform: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContact(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Edit Contact Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="City, Country"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-4">
            Social Media Links
          </label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">GitHub URL</label>
              <input
                type="url"
                value={formData.socialLinks.github || ""}
                onChange={(e) => handleSocialChange("github", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="https://github.com/username"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">LinkedIn URL</label>
              <input
                type="url"
                value={formData.socialLinks.linkedin || ""}
                onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Twitter/X URL</label>
              <input
                type="url"
                value={formData.socialLinks.twitter || ""}
                onChange={(e) => handleSocialChange("twitter", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="https://twitter.com/username"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Instagram URL</label>
              <input
                type="url"
                value={formData.socialLinks.instagram || ""}
                onChange={(e) => handleSocialChange("instagram", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="https://instagram.com/username"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
        >
          Update Contact Information
        </button>
      </form>
    </div>
  );
}
