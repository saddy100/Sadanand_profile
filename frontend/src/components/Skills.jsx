import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryColors = [
    'bg-blue-100 text-blue-800 border-blue-200',
    'bg-green-100 text-green-800 border-green-200',
    'bg-purple-100 text-purple-800 border-purple-200',
    'bg-orange-100 text-orange-800 border-orange-200',
    'bg-indigo-100 text-indigo-800 border-indigo-200',
    'bg-pink-100 text-pink-800 border-pink-200'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical skills spanning healthcare testing, data science, and automation technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeCategory === index
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`font-semibold ${
                      activeCategory === index ? 'text-blue-900' : 'text-slate-800'
                    }`}>
                      {skill.category}
                    </h3>
                    <ChevronRight 
                      className={`transition-transform duration-300 ${
                        activeCategory === index ? 'rotate-90 text-blue-600' : 'text-slate-400'
                      }`}
                      size={20}
                    />
                  </div>
                  <p className={`text-sm mt-1 ${
                    activeCategory === index ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {skill.items.length} skills
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {skills[activeCategory].category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills[activeCategory].items.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                      categoryColors[activeCategory % categoryColors.length]
                    }`}
                  >
                    <div className="font-medium text-sm">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Description */}
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-600 text-sm">
                  {activeCategory === 0 && "Deep expertise in healthcare regulations, standards, and domain-specific testing requirements."}
                  {activeCategory === 1 && "Comprehensive testing methodologies ensuring quality across all system layers and integration points."}
                  {activeCategory === 2 && "Industry-leading automation tools and frameworks for efficient testing workflows."}
                  {activeCategory === 3 && "Multi-database expertise with focus on healthcare data integrity and compliance."}
                  {activeCategory === 4 && "Programming skills enhanced with machine learning and data analysis capabilities from MIT training."}
                  {activeCategory === 5 && "Proven leadership in guiding teams, managing projects, and driving quality initiatives."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;