
import React from 'react';
import { Smartphone, Globe, Cpu, Drone, Shield, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies and optimized for performance.',
      color: 'tech-secondary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'tech-accent'
    },
    {
      icon: Drone,
      title: 'UAV/UGV Systems',
      description: 'Advanced unmanned aerial and ground vehicle systems for various commercial applications.',
      color: 'tech-success'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems and automation solutions that transform business operations.',
      color: 'tech-secondary'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      color: 'tech-accent'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your applications and systems for maximum efficiency and user satisfaction.',
      color: 'tech-success'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions that drive innovation and accelerate business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-secondary/5 to-tech-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-${service.color} to-${service.color}/80 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-tech-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="inline-flex items-center text-tech-secondary font-semibold group-hover:text-tech-accent transition-colors duration-300">
                  Learn More
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-tech-accent/10 to-tech-secondary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-tech-secondary to-tech-accent text-white font-semibold rounded-full hover:shadow-xl hover:shadow-tech-secondary/30 transition-all duration-300 hover:scale-105 cursor-pointer">
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
