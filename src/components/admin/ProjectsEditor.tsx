"use client";

import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Project } from "@/types/portfolio";

export default function ProjectsEditor() {
  const { portfolioData, addProject, updateProject, deleteProject } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: "",
    description: "",
    category: "",
    tags: [],
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
  });
  const [newTag, setNewTag] = useState("");

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormData(project);
    setNewTag("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      category: "",
      tags: [],
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    });
    setNewTag("");
  };

  const handleChange = (field: keyof Project, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      handleChange("tags", [...(formData.tags || []), newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    handleChange(
      "tags",
      formData.tags?.filter((t) => t !== tag) || []
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateProject(editingId, formData);
    } else {
      addProject({
        ...formData,
        id: Date.now().toString(),
      } as Project);
    }
    handleCancel();
  };

  const gradientOptions = [
    { from: "from-purple-500", to: "to-pink-500" },
    { from: "from-blue-500", to: "to-cyan-500" },
    { from: "from-green-500", to: "to-emerald-500" },
    { from: "from-orange-500", to: "to-red-500" },
    { from: "from-indigo-500", to: "to-purple-500" },
    { from: "from-yellow-500", to: "to-orange-500" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Manage Projects</h2>

      {/* Existing Projects */}
      <div className="space-y-4 mb-8">
        {portfolioData.projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/5 border border-white/10 rounded-lg p-4"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (confirm("Delete this project?")) {
                      deleteProject(project.id);
                    }
                  }}
                  className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">
          {editingId ? "Edit Project" : "Add New Project"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              value={formData.category || ""}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              placeholder="Web App, Mobile App, Dashboard, etc."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm flex items-center gap-1"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
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
                Gradient From
              </label>
              <select
                value={formData.gradientFrom}
                onChange={(e) => handleChange("gradientFrom", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                {gradientOptions.map((opt) => (
                  <option key={opt.from} value={opt.from}>
                    {opt.from}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Gradient To
              </label>
              <select
                value={formData.gradientTo}
                onChange={(e) => handleChange("gradientTo", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                {gradientOptions.map((opt) => (
                  <option key={opt.to} value={opt.to}>
                    {opt.to}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-lg font-semibold transition-all"
            >
              {editingId ? "Update Project" : "Add Project"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 rounded-lg transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
