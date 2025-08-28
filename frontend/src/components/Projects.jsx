import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Award } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Key testing frameworks and automation solutions developed for healthcare systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Project Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-24">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeProject === index
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <h3 className={`font-semibold text-sm mb-1 ${
                    activeProject === index ? 'text-blue-900' : 'text-slate-800'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs ${
                    activeProject === index ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {project.technologies.slice(0, 2).join(', ')}...
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Active Project Display */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <h3 className="text-2xl font-bold mb-3">
                  {projects[activeProject].title}
                </h3>
                <p className="text-blue-100 mb-4">
                  {projects[activeProject].description}
                </p>
                
                {/* Technology badges */}
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <ChevronRight className="mr-2 text-blue-600" size={20} />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects[activeProject].features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-200"
                      >
                        <ChevronRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <Award className="mr-2 text-orange-600" size={20} />
                    Business Impact
                  </h4>
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg">
                    <p className="text-slate-700 font-medium">
                      {projects[activeProject].impact}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                    <ExternalLink className="mr-2" size={18} />
                    View Details
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                    <Github className="mr-2" size={18} />
                    Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Note */}
        <div className="mt-12 text-center bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Professional Testing Portfolio
            </h3>
            <p className="text-slate-600">
              These projects represent real-world healthcare testing solutions developed throughout my career. 
              Each project demonstrates comprehensive testing methodologies, automation frameworks, and quality assurance practices 
              that ensure reliable healthcare software systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;