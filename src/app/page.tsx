import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer with 5+ years of experience creating digital solutions 
              that combine beautiful design with robust functionality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Started as a curious student, evolved into a professional developer who loves 
                solving complex problems and creating user-centered experiences. I believe in 
                continuous learning and staying updated with the latest technologies.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">30+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-sm">Web App</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  Modern e-commerce solution built with React, Node.js, and Stripe integration.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-purple-400 hover:text-purple-300 font-medium">Live Demo</button>
                  <button className="text-gray-400 hover:text-gray-300 font-medium">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-sm">Mobile App</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Task Management App</h3>
                <p className="text-gray-300 mb-4">
                  Cross-platform mobile app for team collaboration and project management.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">React Native</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Firebase</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-purple-400 hover:text-purple-300 font-medium">Live Demo</button>
                  <button className="text-gray-400 hover:text-gray-300 font-medium">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-sm">Dashboard</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Real-time analytics dashboard with interactive charts and data visualization.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Vue.js</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">D3.js</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Python</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-purple-400 hover:text-purple-300 font-medium">Live Demo</button>
                  <button className="text-gray-400 hover:text-gray-300 font-medium">GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400">📧</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-300">john.doe@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400">📱</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400">📍</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-300">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white">🐙</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white">💼</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white">🐦</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white">📸</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Doe. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}