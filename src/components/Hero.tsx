import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowDown, FaReact, FaNodeJs, FaDatabase, FaCloud, FaCode, FaMobile, FaRocket, FaCalendarAlt, FaGitAlt, FaDocker, FaAws, FaPython, FaFigma, FaServer, FaCogs, FaLaptopCode } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiRedux, SiGraphql, SiExpress, SiNestjs, SiFirebase, SiVercel } from 'react-icons/si';

const Hero: React.FC = () => {
  const floatingIcons = [
    // Original icons
    { Icon: FaReact, color: 'text-cyan-500', size: 40, position: 'top-20 left-10 md:left-20', delay: 0 },
    { Icon: SiJavascript, color: 'text-yellow-500', size: 35, position: 'top-32 right-10 md:right-32', delay: 0.5 },
    { Icon: FaNodeJs, color: 'text-green-500', size: 38, position: 'bottom-32 left-12 md:left-24', delay: 1 },
    { Icon: SiTypescript, color: 'text-blue-600', size: 35, position: 'top-40 left-1/3 hidden md:block', delay: 1.5 },
    { Icon: FaDatabase, color: 'text-purple-500', size: 36, position: 'bottom-40 right-10 md:right-20', delay: 2 },
    { Icon: SiNextdotjs, color: 'text-gray-700 dark:text-gray-300', size: 38, position: 'top-1/4 right-1/4 hidden lg:block', delay: 2.5 },
    { Icon: FaCloud, color: 'text-sky-500', size: 42, position: 'bottom-20 left-1/3 hidden md:block', delay: 3 },
    { Icon: SiTailwindcss, color: 'text-teal-500', size: 36, position: 'top-1/3 left-10 md:left-20', delay: 3.5 },
    { Icon: FaCode, color: 'text-pink-500', size: 34, position: 'bottom-1/4 right-1/3 hidden lg:block', delay: 4 },
    { Icon: FaMobile, color: 'text-indigo-500', size: 32, position: 'top-20 right-10 md:right-20', delay: 4.5 },
    
    // Additional icons
    { Icon: SiMongodb, color: 'text-green-600', size: 35, position: 'top-16 left-1/2 hidden md:block', delay: 0.3 },
    { Icon: SiPostgresql, color: 'text-blue-700', size: 33, position: 'bottom-36 right-1/4 hidden lg:block', delay: 0.8 },
    { Icon: FaGitAlt, color: 'text-orange-600', size: 37, position: 'top-1/2 left-16', delay: 1.2 },
    { Icon: FaDocker, color: 'text-blue-500', size: 38, position: 'bottom-16 left-1/2 hidden md:block', delay: 1.8 },
    { Icon: SiRedux, color: 'text-purple-600', size: 34, position: 'top-36 right-1/3 hidden lg:block', delay: 2.2 },
    { Icon: SiGraphql, color: 'text-pink-600', size: 35, position: 'bottom-1/3 left-1/4', delay: 2.6 },
    { Icon: FaAws, color: 'text-orange-500', size: 40, position: 'top-1/3 right-16 hidden md:block', delay: 3.2 },
    { Icon: SiExpress, color: 'text-gray-600 dark:text-gray-400', size: 36, position: 'bottom-24 right-1/2 hidden lg:block', delay: 3.8 },
    { Icon: FaPython, color: 'text-yellow-600', size: 35, position: 'top-2/3 left-1/3 hidden md:block', delay: 4.2 },
    { Icon: SiNestjs, color: 'text-red-600', size: 34, position: 'bottom-1/2 right-12', delay: 4.6 },
    { Icon: FaFigma, color: 'text-purple-500', size: 32, position: 'top-12 right-2/3 hidden lg:block', delay: 5 },
    { Icon: SiFirebase, color: 'text-orange-400', size: 36, position: 'bottom-28 left-2/3 hidden md:block', delay: 5.4 },
    { Icon: FaServer, color: 'text-gray-500', size: 33, position: 'top-1/2 right-1/3 hidden lg:block', delay: 5.8 },
    { Icon: SiVercel, color: 'text-gray-800 dark:text-gray-200', size: 35, position: 'bottom-44 left-16 hidden md:block', delay: 6.2 },
    { Icon: FaCogs, color: 'text-teal-600', size: 34, position: 'top-3/4 right-1/4', delay: 6.6 },
    { Icon: FaLaptopCode, color: 'text-indigo-600', size: 38, position: 'bottom-12 right-2/3 hidden lg:block', delay: 7 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position}`}
            initial={{ y: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              y: {
                duration: 6 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotate: {
                duration: 20 + index * 2,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay,
              },
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.5, opacity: 1 }}
              className={`${item.color} transition-all duration-300 cursor-pointer drop-shadow-lg`}
            >
              <item.Icon size={item.size} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <HiSparkles className="text-4xl text-primary-500 mb-4" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Junaid Nazir</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Engineer 🚀',
                2000,
                'Frontend Expert 🎨',
                2000,
                'Backend Expert ⚙️',
                2000,
                'Database Expert 🗄️',
                2000,
                'AI Expert 🤖',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Seasoned Senior Software Engineer with over{' '}
            <span className="font-bold text-primary-500 dark:text-primary-400">6 years</span>{' '}
            of experience building scalable, high-performance applications. 
            Specialized in React, Next.js, Node.js, and modern cloud architectures with a proven track record at industry leaders like{' '}
            <span className="font-semibold text-gray-700 dark:text-gray-300">KAYAK</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/junaid1840"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaGithub size={24} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/junaid-nazir-46b080147"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaLinkedin size={24} className="relative z-10" />
            </motion.a>
            <motion.a
              href="mailto:junaid.nz1840@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaEnvelope size={24} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://wa.me/923324917827"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaWhatsapp size={24} className="relative z-10" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex items-center space-x-2"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="https://calendly.com/junaid-nz1840/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex items-center space-x-2"
            >
              <span className="relative z-10">Schedule Meeting</span>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <FaCalendarAlt className="group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 max-w-3xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <span className="text-3xl mb-2 block">💼</span>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                6+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <span className="text-3xl mb-2 block">💻</span>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                200K+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Lines of Code</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <span className="text-3xl mb-2 block">🚀</span>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <span className="text-3xl mb-2 block">⭐</span>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowDown className="text-2xl text-gray-400 dark:text-gray-600 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;