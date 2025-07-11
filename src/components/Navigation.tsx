
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-nx-dark-green/95 backdrop-blur-xl shadow-2xl border-b border-nx-ash-gray/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Nurture Xcel Logo" className="w-8 h-8 rounded-xl object-cover" />
              <div className={`text-3xl ${
                scrolled 
                  ? 'text-nx-mint-cream' 
                  : 'text-nx-dark-green drop-shadow-lg'
              }`}>
                Nurture Xcel
              </div>
            </div>
          </motion.div>

          {/* Right: Nav links and Contact Us button */}
          <div className="flex items-center space-x-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-md
                    ${scrolled ? 'text-nx-mint-cream hover:text-nx-mint-cream hover:bg-nx-dark-green/20' : 'text-nx-dark-green hover:text-nx-castleton-green hover:bg-nx-mint-cream/40'}
                    hover:-translate-y-1`} 
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                    ${scrolled ? 'bg-nx-mint-cream' : 'bg-nx-castleton-green'}
                  `}></span>
                </motion.a>
              ))}
              {/* Contact Us Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact">
                  <Button className={`ml-2 px-6 py-2 text-sm font-semibold transition-all duration-300
                    ${scrolled ? 'bg-nx-mint-cream text-nx-dark-green hover:bg-nx-mint-cream/80' : 'bg-nx-dark-green text-nx-mint-cream hover:bg-nx-dark-green/90'}
                    hover:shadow-xl`}>
                    Contact Us
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  scrolled ? 'text-nx-mint-cream hover:text-nx-cambridge-blue' : 'text-nx-dark-green hover:text-nx-castleton-green'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-nx-dark-green/95 backdrop-blur-xl rounded-xl mt-2 shadow-2xl border border-nx-ash-gray/20">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-nx-mint-cream hover:text-nx-cambridge-blue block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg hover:bg-nx-ash-gray/20"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <a href="#contact">
                    <Button className={`w-full px-6 py-2 text-sm font-semibold transition-all duration-300
                      ${scrolled ? 'bg-nx-mint-cream text-nx-dark-green hover:bg-nx-ash-gray/60' : 'bg-nx-dark-green text-nx-mint-cream hover:bg-nx-castleton-green/80'}
                      hover:shadow-lg`}>
                      Contact Us
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
