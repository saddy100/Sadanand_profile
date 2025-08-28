import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            15+ years of progressive experience in healthcare software testing and quality assurance
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Header Information */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-3">
                      <div className="flex items-center">
                        <span className="font-semibold text-blue-600">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">
                      {exp.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Infosys Limited - Senior QA Professional
            </h3>
            <p className="text-slate-600 mb-4">
              Continuous growth and leadership in healthcare software testing with consistent promotion and increased responsibilities across multiple high-impact projects.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center">
                <Calendar className="mr-1" size={16} />
                <span>January 2010 - Present (15+ Years)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-1" size={16} />
                <span>Global Healthcare Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;