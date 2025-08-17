import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, FaLightbulb, FaRocket, FaUsers, 
  FaChartLine, FaBrain, FaHandshake, FaTrophy,
  FaPuzzlePiece, FaShieldAlt, FaMagic, FaCrown,
  FaStar, FaGem, FaAward, FaMedal, FaFire,
  FaBolt, FaAtom, FaCubes, FaInfinity, FaCompass,
  FaFlask, FaPalette, FaFeatherAlt
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiBeaker, HiCube, HiPuzzle } from 'react-icons/hi';
import { GiCrystalGrowth, GiDiamondHard, GiSparkles } from 'react-icons/gi';
import { BiPolygon } from 'react-icons/bi';

const About: React.FC = () => {
  const [selectedCompetency, setSelectedCompetency] = useState<string | null>(null);

  const coreCompetencies = [
    {
      id: 'architecture',
      icon: <FaCode className="text-2xl" />,
      title: 'System Architecture',
      shortDesc: 'Designing scalable solutions',
      fullDesc: 'Expert in designing and implementing microservices architectures, distributed systems, and cloud-native applications that scale to millions of users.',
      skills: ['Microservices', 'Cloud Architecture', 'System Design', 'Scalability'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'fullstack',
      icon: <HiLightningBolt className="text-2xl" />,
      title: 'Full-Stack Development',
      shortDesc: 'End-to-end implementation',
      fullDesc: 'Proficient across the entire stack, from crafting pixel-perfect UIs with React/Next.js to building robust APIs with Node.js and optimizing database queries.',
      skills: ['React/Next.js', 'Node.js', 'Database Design', 'API Development'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'ai',
      icon: <FaBrain className="text-2xl" />,
      title: 'AI Integration',
      shortDesc: 'Leveraging intelligent solutions',
      fullDesc: 'Integrating cutting-edge AI/ML capabilities including LLMs, RAG systems, and vector databases to create intelligent, context-aware applications.',
      skills: ['OpenAI', 'LangChain', 'Vector DBs', 'Machine Learning'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'leadership',
      icon: <FaUsers className="text-2xl" />,
      title: 'Technical Leadership',
      shortDesc: 'Mentoring & collaboration',
      fullDesc: 'Leading cross-functional teams, mentoring junior developers, and fostering a culture of innovation and continuous improvement.',
      skills: ['Team Management', 'Mentoring', 'Code Reviews', 'Agile'],
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 'innovation',
      icon: <FaLightbulb className="text-2xl" />,
      title: 'Innovation',
      shortDesc: 'Pushing boundaries',
      fullDesc: 'Constantly exploring emerging technologies and implementing innovative solutions that give businesses a competitive edge.',
      skills: ['R&D', 'Problem Solving', 'Creative Thinking', 'Prototyping'],
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 'performance',
      icon: <FaChartLine className="text-2xl" />,
      title: 'Performance Optimization',
      shortDesc: 'Speed & efficiency',
      fullDesc: 'Optimizing application performance, reducing load times by up to 70%, and implementing efficient caching strategies.',
      skills: ['Optimization', 'Caching', 'Load Balancing', 'Monitoring'],
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  const achievements = [
    { number: '50+', label: 'Projects Delivered', color: 'from-blue-400 to-cyan-600', icon: '🚀' },
    { number: '6+', label: 'Years Experience', color: 'from-purple-400 to-pink-600', icon: '💼' },
    { number: '200K+', label: 'Lines of Code', color: 'from-green-400 to-emerald-600', icon: '💻' },
    { number: '20+', label: 'Happy Clients', color: 'from-orange-400 to-yellow-600', icon: '⭐' },
  ];

  // Floating abstract shapes and symbols
  const floatingElements = [
    { Icon: FaPuzzlePiece, color: 'text-purple-500 dark:text-purple-400', size: 30, position: 'top-20 left-10', opacity: 0.4, darkOpacity: 0.3, delay: 0 },
    { Icon: FaLightbulb, color: 'text-yellow-500 dark:text-yellow-400', size: 28, position: 'top-32 right-20', opacity: 0.35, darkOpacity: 0.25, delay: 0.5 },
    { Icon: FaGem, color: 'text-blue-500 dark:text-blue-400', size: 26, position: 'bottom-32 left-20', opacity: 0.4, darkOpacity: 0.3, delay: 1 },
    { Icon: FaStar, color: 'text-pink-500 dark:text-pink-400', size: 24, position: 'top-1/4 left-1/3 hidden md:block', opacity: 0.35, darkOpacity: 0.25, delay: 1.5 },
    { Icon: FaAtom, color: 'text-cyan-500 dark:text-cyan-400', size: 32, position: 'bottom-40 right-16', opacity: 0.4, darkOpacity: 0.3, delay: 2 },
    { Icon: GiCrystalGrowth, color: 'text-indigo-500 dark:text-indigo-400', size: 30, position: 'top-1/3 right-1/4 hidden lg:block', opacity: 0.35, darkOpacity: 0.25, delay: 2.5 },
    { Icon: FaMagic, color: 'text-purple-400 dark:text-purple-300', size: 28, position: 'bottom-20 left-1/3 hidden md:block', opacity: 0.4, darkOpacity: 0.3, delay: 3 },
    { Icon: FaCrown, color: 'text-yellow-600 dark:text-yellow-500', size: 26, position: 'top-1/2 left-10', opacity: 0.35, darkOpacity: 0.25, delay: 3.5 },
    { Icon: HiBeaker, color: 'text-green-500 dark:text-green-400', size: 30, position: 'bottom-1/4 right-1/3 hidden lg:block', opacity: 0.4, darkOpacity: 0.3, delay: 4 },
    { Icon: FaAward, color: 'text-orange-500 dark:text-orange-400', size: 28, position: 'top-16 right-10', opacity: 0.35, darkOpacity: 0.25, delay: 4.5 },
    { Icon: FaBolt, color: 'text-yellow-400 dark:text-yellow-300', size: 26, position: 'top-2/3 left-1/4', opacity: 0.4, darkOpacity: 0.3, delay: 5 },
    { Icon: GiDiamondHard, color: 'text-blue-400 dark:text-blue-300', size: 24, position: 'bottom-36 right-1/4 hidden md:block', opacity: 0.35, darkOpacity: 0.25, delay: 5.5 },
    { Icon: FaInfinity, color: 'text-purple-600 dark:text-purple-500', size: 30, position: 'top-1/2 right-20', opacity: 0.4, darkOpacity: 0.3, delay: 6 },
    { Icon: HiCube, color: 'text-pink-400 dark:text-pink-300', size: 28, position: 'bottom-16 left-1/2 hidden lg:block', opacity: 0.35, darkOpacity: 0.25, delay: 6.5 },
    { Icon: FaCompass, color: 'text-teal-500 dark:text-teal-400', size: 26, position: 'top-3/4 right-1/3', opacity: 0.4, darkOpacity: 0.3, delay: 7 },
    { Icon: FaFlask, color: 'text-green-400 dark:text-green-300', size: 24, position: 'bottom-28 left-16 hidden md:block', opacity: 0.35, darkOpacity: 0.25, delay: 7.5 },
    { Icon: BiPolygon, color: 'text-indigo-400 dark:text-indigo-300', size: 32, position: 'top-1/3 left-1/2', opacity: 0.4, darkOpacity: 0.3, delay: 8 },
    { Icon: FaPalette, color: 'text-pink-600 dark:text-pink-500', size: 28, position: 'bottom-1/2 right-10', opacity: 0.35, darkOpacity: 0.25, delay: 8.5 },
    { Icon: FaFeatherAlt, color: 'text-cyan-400 dark:text-cyan-300', size: 26, position: 'top-12 left-2/3 hidden lg:block', opacity: 0.4, darkOpacity: 0.3, delay: 9 },
    { Icon: GiSparkles, color: 'text-yellow-500 dark:text-yellow-400', size: 30, position: 'bottom-44 right-2/3', opacity: 0.35, darkOpacity: 0.25, delay: 9.5 },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Simple animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(at 40% 20%, rgba(120, 119, 198, 0.3) 0px, transparent 50%),
                radial-gradient(at 80% 0%, rgba(255, 182, 193, 0.2) 0px, transparent 50%),
                radial-gradient(at 0% 50%, rgba(147, 197, 253, 0.3) 0px, transparent 50%),
                radial-gradient(at 80% 80%, rgba(196, 181, 253, 0.2) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(254, 202, 202, 0.2) 0px, transparent 50%)
              `,
            }}
          />
        </div>
        
        {/* Subtle animated gradient shift */}
        <motion.div
          className="absolute inset-0 opacity-30 dark:opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating abstract elements */}
        {floatingElements.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position}`}
            initial={{ y: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              opacity: [item.opacity * 0.5, item.opacity, item.opacity * 0.5],
            }}
            transition={{
              y: {
                duration: 8 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotate: {
                duration: 25 + index * 2,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay,
              },
              opacity: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              className={`${item.color} transition-all duration-300 cursor-pointer`}
            >
              <item.Icon size={item.size} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <HiSparkles className="text-4xl text-primary-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Combining technical excellence with creative problem-solving to deliver exceptional results
          </p>
        </motion.div>

        {/* Competency Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreCompetencies.map((competency, index) => (
            <motion.div
              key={competency.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCompetency(
                selectedCompetency === competency.id ? null : competency.id
              )}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-full"
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${competency.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="relative h-full p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${competency.color} rounded-xl text-white`}>
                      {competency.icon}
                    </div>
                    <motion.div
                      animate={{ rotate: selectedCompetency === competency.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {competency.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {competency.shortDesc}
                  </p>

                  <AnimatePresence>
                    {selectedCompetency === competency.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {competency.fullDesc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {competency.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>Click to {selectedCompetency === competency.id ? 'collapse' : 'expand'}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon - No animation */}
                <div className="text-3xl mb-3">
                  {achievement.icon}
                </div>
                
                {/* Number with gradient - No animation */}
                <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                  {achievement.number}
                </div>
                
                {/* Label */}
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to build something amazing together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <motion.span
              animate={{ x: [0, -2, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10"
            >
              Let's Connect
            </motion.span>
            
            {/* Animated icon */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10 ml-2"
            >
              <FaHandshake className="text-xl" />
            </motion.div>
            
            {/* Sparkle effect */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute right-4 top-2"
            >
              <HiSparkles className="text-white/50 text-sm" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;