import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-3xl" />,
      href: 'https://wa.me/923324917827',
      gradient: 'from-green-400 via-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/25',
      label: 'Quick Chat',
      delay: 0
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-3xl" />,
      href: 'mailto:junaid.nz1840@gmail.com',
      gradient: 'from-red-400 via-pink-500 to-rose-600',
      shadowColor: 'shadow-pink-500/25',
      label: 'Send Email',
      delay: 0.1
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-3xl" />,
      href: 'https://linkedin.com/in/junaid-nazir-46b080147',
      gradient: 'from-blue-400 via-blue-500 to-indigo-600',
      shadowColor: 'shadow-blue-500/25',
      label: 'Connect',
      delay: 0.2
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-3xl" />,
      href: 'https://github.com/junaid1840',
      gradient: 'from-gray-600 via-gray-700 to-gray-900',
      shadowColor: 'shadow-gray-700/25',
      label: 'View Code',
      delay: 0.3
    },
    {
      name: 'Schedule',
      icon: <FaCalendarAlt className="text-3xl" />,
      href: 'https://calendly.com/junaid-nz1840/30min',
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      shadowColor: 'shadow-purple-500/25',
      label: 'Book Time',
      delay: 0.4
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />
        
        {/* Animated color blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 dark:from-yellow-600/10 dark:to-orange-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-6"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <HiSparkles className="text-4xl text-purple-500" />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <HiLightningBolt className="text-4xl text-yellow-500" />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <HiSparkles className="text-4xl text-cyan-500" />
            </motion.div>
          </motion.div>

          {/* Main heading with rainbow gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Let's work together!
            </span>
          </motion.h2>

          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            <motion.span
              animate={{ 
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              I'm always excited to connect with creative minds and build amazing things
            </motion.span>
          </motion.p>

          {/* Colorful Social Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.3 + link.delay
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* Card with gradient background */}
                <div className={`relative h-32 bg-gradient-to-br ${link.gradient} rounded-3xl p-6 text-white shadow-xl ${link.shadowColor} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <motion.div
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "linear"
                      }}
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    {/* Animated icon */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="mb-2"
                    >
                      {link.icon}
                    </motion.div>
                    
                    {/* Label */}
                    <motion.p 
                      className="text-sm font-semibold opacity-90"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      {link.label}
                    </motion.p>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    initial={{ x: '-200%' }}
                    whileHover={{ 
                      x: '200%',
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Animated status card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <motion.div 
              className="relative bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.5)',
                  '0 0 40px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(34, 197, 94, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl px-8 py-6">
                {/* Animated status dot */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Available for new projects
                  </span>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Fun animated text at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                ✨ Let's create something amazing! ✨
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${['#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'][i % 5]}, ${['#f43f5e', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24'][i % 5]})`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;