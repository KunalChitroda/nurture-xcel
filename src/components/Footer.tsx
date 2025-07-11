
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-tech-accent to-tech-secondary bg-clip-text text-transparent mb-4">
              TechForward
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses with cutting-edge technology and innovative digital solutions. 
              Building the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-accent transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-accent transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-accent transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-accent transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">UAV/UGV Systems</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">AI Solutions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} TechForward Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
