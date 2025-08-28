import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200 mb-4"
            >
              {personalInfo.name}
            </button>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Senior QA Engineer specializing in healthcare software testing with MIT Applied Data Science certification. 
              Passionate about ensuring quality in critical healthcare systems.
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Professional</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                {personalInfo.yearsOfExperience} Years Experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Healthcare Domain Expert
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                MIT Data Science Graduate
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Automation Specialist
              </li>
            </ul>

            {/* Contact Link */}
            <div className="mt-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="mr-2" size={16} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-slate-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="mx-2 text-red-500" size={16} />
              <span>for quality healthcare systems.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Portfolio • Resume • Professional Profile</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;