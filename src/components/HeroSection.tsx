
import React from 'react';
import { ArrowRight, Play, Zap, Cpu, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-secondary">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-8 h-8 bg-secondary/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent/15 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-secondary/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Zap className="absolute top-32 left-32 w-6 h-6 text-accent/40 animate-pulse" />
        <Cpu className="absolute top-48 right-48 w-8 h-8 text-secondary/40 animate-pulse" style={{animationDelay: '1s'}} />
        <Rocket className="absolute bottom-48 left-48 w-7 h-7 text-accent/40 animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Future-Ready
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses with cutting-edge technology, modern web solutions, 
            and next-generation UAV/UGV systems that drive unprecedented growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary to-accent hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
