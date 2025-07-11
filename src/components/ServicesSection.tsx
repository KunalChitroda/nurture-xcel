import React from 'react';
import { Smartphone, Globe, Cpu, Plane, Shield, Zap, Code, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Accelerate with Purpose',
      description: 'Drive growth with tailored support, R&D access, strategic partnerships, and a powerful network of industry and institutional allies. We help visionary founders turn potential into performance.',
      color: 'tech-secondary',
      gradient: 'from-tech-secondary to-tech-accent'
    },
    {
      icon: Plane,
      title: 'Drone & Robotics Manufacturing Support',
      description: 'We support the launch of scalable drone and robotics manufacturing units in India by bridging access to and industry-ready processes.',
      gradient: 'from-tech-accent to-tech-secondary'
    },
    {
      icon: Zap,
      title: 'Lab Access and Innovation Support',
      description: 'We provide mentorship and prototyping support to businesses and universities, helping startups innovate and build real-world industry solutions.',
      color: 'tech-success',
      gradient: 'from-tech-success to-tech-accent'
    },
    {
      icon: Code,
      title: 'Industry Collaboration ',
      description: 'We host global events, investor summits, and policy forums to connect startups with capital, partners, and strategic alliances that enable long-term growth.',
      color: 'tech-secondary',
      gradient: 'from-tech-secondary to-tech-success'
    },
    {
      icon: Database,
      title: 'Global Tech Partnerships',
      description: 'We enable Indian companies to collaborate with global tech leaders for advanced drone hardware, AI solutions, and scalable autonomous manufacturing systems.',
      color: 'tech-accent',
      gradient: 'from-tech-accent to-tech-success'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-nx-mint-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-nx-castleton-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-nx-cambridge-blue/5 rounded-full blur-3xl"></div>
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
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-nx-dark-green mb-6">
            Our <span className="text-nx-castleton-green">Services</span>
          </h2>
          <p className="text-base sm:text-xl text-nx-dark-green/80 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive technology solutions that drive innovation and accelerate business growth
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-100 border border-nx-mint-cream"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-nx-castleton-green/5 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-nx-castleton-green mb-6 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <service.icon className="w-8 h-8 text-nx-mint-cream" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-2xl font-bold text-nx-dark-green mb-4 group-hover:text-nx-castleton-green transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-base text-nx-dark-green/80 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-nx-castleton-green/10 opacity-10 rounded-full blur-xl group-hover:blur-2xl group-hover:opacity-20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
