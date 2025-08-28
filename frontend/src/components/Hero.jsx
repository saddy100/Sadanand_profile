import React, { useEffect } from 'react';
import { Download, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useAnalytics } from '../hooks/useAnalytics';

const Hero = () => {
  const { trackSectionView } = useAnalytics();

  useEffect(() => {
    // Track hero section view
    const cleanup = trackSectionView('hero');
    return cleanup;
  }, [trackSectionView]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-200 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Professional Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6 animate-fade-in border border-blue-200">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            Available for Healthcare Testing Projects
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 animate-fade-in">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-3 animate-fade-in-delay-1">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto mb-8 animate-fade-in-delay-2 leading-relaxed">
              {personalInfo.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto animate-fade-in-delay-2"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-delay-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{personalInfo.yearsOfExperience}</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-slate-600">APIs Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">MIT</div>
              <div className="text-slate-600">Data Science Graduate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-4">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="mr-2" size={20} />
              Get In Touch
            </button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-600 animate-fade-in-delay-5">
            <div className="flex items-center">
              <MapPin className="mr-2" size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2" size={18} />
              <span>{personalInfo.visaStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;