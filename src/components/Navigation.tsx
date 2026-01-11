"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export default function Navigation() {
  const { portfolioData } = usePortfolio();
  
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            {portfolioData.hero.name}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-purple-300 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-purple-300 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
            <a href="/admin" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">Admin</a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
