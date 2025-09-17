export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center py-20">
          {/* Profile Image */}
          <div className="mb-8 animate-fadeInUp">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
            </div>
          </div>
          
          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, 
            functional web experiences that make a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              View My Work
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
