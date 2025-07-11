import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your Formspree endpoint
    const response = await fetch('https://formspree.io/f/xyzjrnyo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      alert('There was an error sending your message.');
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@nurturexcel.com',
      description: 'Get in touch via email'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Vijaylaxmi Venture, 601 AT By AGM,',
      subValue: 'Mumbai 400093, Maharashtra, India.',
      description: 'Visit our headquarters'
    }
  ];

  const stats = [
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Users, value: '50+', label: 'Expert Team' },
    { icon: Award, value: '98%', label: 'Success Rate' }
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-nx-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-nx-castleton-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-nx-cambridge-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-nx-castleton-green/20 rounded-full blur-3xl"></div>
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
            Get In <span className="text-nx-castleton-green">Touch</span>
          </h2>
          <p className="text-base sm:text-xl text-nx-dark-green/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-nx-dark-green mb-6">Let's Start a Conversation</h3>
              <p className="text-xs sm:text-lg text-nx-dark-green/80 mb-8 leading-relaxed">
                Our team of experts is ready to help you bring your vision to life. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.title}
                  className="flex items-center space-x-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-nx-castleton-green rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <info.icon className="w-6 h-6 text-nx-mint-cream" />
                  </motion.div>
                  <div>
                    <div className="text-xs sm:text-base text-nx-dark-green font-semibold">{info.title}</div>
                    <div className="text-xs sm:text-base text-nx-dark-green/80">{info.value}</div>
                    {info.subValue && <div className="text-xs sm:text-base text-nx-dark-green/80">{info.subValue}</div>}
                    <div className="text-xs sm:text-sm text-nx-cambridge-blue">{info.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-8 border-t border-nx-castleton-green/20"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-nx-castleton-green" />
                  </div>
                  <div className="text-2xl font-bold text-nx-castleton-green mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-base text-nx-dark-green/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-nx-white/80 backdrop-blur-xl rounded-2xl p-8 border border-nx-mint-cream/20 shadow-2xl w-full"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-nx-castleton-green mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-nx-dark-green mb-2">Message Sent!</h3>
                  <p className="text-nx-dark-green/80">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-nx-mint-cream/40 border-nx-castleton-green/20 text-nx-dark-green placeholder:text-nx-cambridge-blue focus:border-nx-castleton-green focus:ring-nx-castleton-green/20 transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-nx-mint-cream/40 border-nx-castleton-green/20 text-nx-dark-green placeholder:text-nx-cambridge-blue focus:border-nx-castleton-green focus:ring-nx-castleton-green/20 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-nx-mint-cream/40 border-nx-castleton-green/20 text-nx-dark-green placeholder:text-nx-cambridge-blue focus:border-nx-castleton-green focus:ring-nx-castleton-green/20 transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-nx-mint-cream/40 border-nx-castleton-green/20 text-nx-dark-green placeholder:text-nx-cambridge-blue focus:border-nx-castleton-green focus:ring-nx-castleton-green/20 transition-all duration-300"
                    />
                  </motion.div>
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-nx-castleton-green text-nx-mint-cream font-semibold px-8 py-4 rounded-full hover:bg-nx-castleton-green/80 transition-all duration-300 flex items-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
