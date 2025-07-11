
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Zap, ArrowUp } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-nx-dark-green text-nx-mint-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-nx-castleton-green"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-nx-castleton-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-24 h-24 bg-nx-cambridge-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.jpg" alt="Nurture Xcel Logo" className="w-10 h-10 rounded-xl object-cover" />
              <div className="text-3xl font-bold text-nx-mint-cream">
                Nurture Xcel
              </div>
            </div>
            <p className="text-nx-mint-cream/80 mb-6 max-w-md leading-relaxed">
              Transforming businesses with cutting-edge UAV & UGV technology and innovative digital solutions. 
              Building the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 bg-nx-mint-cream/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-nx-cambridge-blue hover:text-white transition-all duration-300 hover:bg-nx-mint-cream/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links (right side on desktop) */}
          <motion.div variants={itemVariants} className="hidden sm:block md:col-start-4 md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-nx-mint-cream">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-nx-mint-cream/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-nx-mint-cream/20 pt-8 pb-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-nx-mint-cream/60 text-sm">
            © {currentYear} Nurture Xcel Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-nx-mint-cream/60 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-nx-mint-cream/60 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-nx-mint-cream/60 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-nx-castleton-green rounded-full shadow-2xl flex items-center justify-center text-nx-mint-cream hover:bg-nx-castleton-green/80 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
