import React from 'react';
import { Users, Award, Target, TrendingUp, CheckCircle, Zap, Brain, Globe } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: Award, value: '150+', label: 'Projects Completed' },
    { icon: Target, value: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '5+', label: 'Years of Excellence' }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: Brain,
      title: 'Intelligent Solutions',
      description: 'Our AI-powered systems and autonomous technologies create smarter, more efficient operations.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We build solutions that scale globally, connecting businesses and communities worldwide.'
    }
  ];

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
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-nx-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-nx-castleton-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-nx-cambridge-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-nx-castleton-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-nx-dark-green mb-6">
            About <span className="text-nx-castleton-green">Nurture Xcel</span>
          </h2>
          <p className="text-base sm:text-xl text-nx-dark-green/80 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company specializing in UAV & UGV solutions, 
            AI-powered systems, and innovative digital transformations.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-nx-castleton-green rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-nx-mint-cream" />
                </div>
              </div>
              <div className="text-xl sm:text-4xl font-bold text-nx-castleton-green mb-2">{stat.value}</div>
              <div className="text-xs sm:text-base text-nx-dark-green/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg sm:text-3xl font-bold text-nx-dark-green">Our Mission</h3>
            <p className="text-sm sm:text-lg text-nx-dark-green/80 leading-relaxed">
              To revolutionize industries through cutting-edge autonomous technology, 
              creating safer, more efficient, and sustainable solutions that empower 
              businesses to reach new heights of innovation and productivity.
            </p>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-nx-castleton-green" />
              <span className="text-nx-dark-green">Advanced UAV & UGV Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-nx-castleton-green" />
              <span className="text-nx-dark-green">AI-Powered Automation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-nx-castleton-green" />
              <span className="text-nx-dark-green">Sustainable Technology</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg sm:text-3xl font-bold text-nx-dark-green">Our Vision</h3>
            <p className="text-sm sm:text-lg text-nx-dark-green/80 leading-relaxed">
              To be the global leader in autonomous technology solutions, driving the 
              future of industry through innovation, reliability, and unwavering commitment 
              to excellence in every project we undertake.
            </p>
            <div className="bg-nx-mint-cream rounded-2xl p-6 border border-nx-castleton-green/20">
              <h4 className="text-base sm:text-xl font-semibold text-nx-dark-green mb-3">Core Values</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-nx-castleton-green rounded-full"></div>
                  <span className="text-xs sm:text-base text-nx-dark-green">Innovation Excellence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-nx-castleton-green rounded-full"></div>
                  <span className="text-xs sm:text-base text-nx-dark-green">Client Success</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-nx-castleton-green rounded-full"></div>
                  <span className="text-xs sm:text-base text-nx-dark-green">Quality Assurance</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              className="group relative bg-nx-mint-cream rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-nx-castleton-green/30"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-nx-castleton-green rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <value.icon className="w-8 h-8 text-nx-mint-cream" />
              </motion.div>
              
              <h3 className="text-lg sm:text-2xl font-bold text-nx-dark-green mb-4 group-hover:text-nx-castleton-green transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-xs sm:text-base text-nx-dark-green/80 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-nx-castleton-green/10 rounded-full blur-xl group-hover:blur-2xl group-hover:opacity-20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 