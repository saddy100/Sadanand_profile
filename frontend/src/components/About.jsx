import React from 'react';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "MIT Certified",
      description: "Applied Data Science Professional"
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Healthcare Expert",
      description: "15+ years in medical systems"
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: "Team Leader",
      description: "Mentoring & project management"
    },
    {
      icon: <Zap className="text-orange-600" size={24} />,
      title: "Automation Specialist",
      description: "200+ APIs automated"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {aboutMe.shortDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="prose prose-lg text-slate-600 mb-8">
              {aboutMe.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full mb-4 flex items-center justify-center">
                  <Users size={48} className="text-slate-500" />
                </div>
                <p className="text-slate-600 font-medium">Professional Photo</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
              <div className="text-xs font-semibold text-blue-600">MIT Graduate</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
              <div className="text-xs font-semibold text-green-600">{personalInfo.yearsOfExperience} Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;