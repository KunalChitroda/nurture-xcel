
import React from 'react';
import { ArrowRight, Play, CheckCircle, Heart, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import DroneIcon from './icons/DroneIcon';
import RobotIcon from './icons/RobotIcon';
import AiChipIcon from './icons/AiChipIcon';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingTransition = {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut' as const
  };

  // Use custom icons for stats
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: CheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Headphones },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nx-mint-cream">
        
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-4 w-10 h-10 sm:top-20 sm:left-20 sm:w-16 sm:h-16 bg-nx-cambridge-blue/20 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={floatingTransition}
        ></motion.div>
        <motion.div 
          className="absolute top-24 right-8 w-6 h-6 sm:top-40 sm:right-32 sm:w-8 sm:h-8 bg-nx-castleton-green/30 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ ...floatingTransition, delay: 2 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-24 left-6 w-8 h-8 sm:bottom-32 sm:left-16 sm:w-12 sm:h-12 bg-nx-cambridge-blue/15 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ ...floatingTransition, delay: 4 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-6 w-12 h-12 sm:bottom-20 sm:right-20 sm:w-20 sm:h-20 bg-nx-castleton-green/10 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ ...floatingTransition, delay: 1 }}
        ></motion.div>
      </div>

      {/* Tech Icons (custom) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <DroneIcon className="absolute top-16 left-8 w-10 h-10 sm:top-32 sm:left-32 sm:w-16 sm:h-16 text-nx-cambridge-blue/60 animate-pulse" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <RobotIcon className="absolute top-32 right-10 w-12 h-12 sm:top-48 sm:right-48 sm:w-20 sm:h-20 text-nx-castleton-green/60 animate-pulse" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <AiChipIcon className="absolute bottom-32 left-10 w-10 h-10 sm:bottom-48 sm:left-48 sm:w-16 sm:h-16 text-nx-cambridge-blue/60 animate-pulse" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <DroneIcon className="absolute bottom-16 right-8 w-10 h-10 sm:bottom-32 sm:right-32 sm:w-16 sm:h-16 text-nx-castleton-green/60 animate-pulse" />
        </motion.div>
      </div>

      {/* Drone Background Image */}
      <img
        src="/drone-bg.png"
        alt="Drone"
        className="absolute left-1/2 top-[40%] sm:top-[60%] -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl opacity-60 pointer-events-none z-0"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.25))' }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-28 sm:mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="quantico-bold text-3xl sm:text-4xl lg:text-7xl font-bold text-nx-dark-green drop-shadow-lg leading-tight flex flex-col items-center justify-center min-h-[24vh] sm:min-h-[40vh]">
            <span className="block quantico-regular">Building India’s Future in</span>
            <span className="block quantico-bold text-4xl sm:text-5xl lg:text-7xl">Drones & Robotics</span>
          </h1>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center mb-6 sm:mb-10"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-nx-dark-green hover:shadow-2xl hover:bg-nx-dark-green/80 transition-all duration-300 px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold text-nx-mint-cream"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-nx-ash-gray/30 text-nx-dark-green hover:bg-nx-castleton-green/50 backdrop-blur-sm px-5 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hidden sm:flex absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-nx-castleton-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nx-castleton-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
