import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendar, FaMapMarkerAlt, FaBriefcase, FaRocket, 
  FaCode, FaLightbulb, FaUsers, FaChartLine, FaTrophy,
  FaReact, FaNodeJs, FaCloud, FaDatabase, FaMobile,
  FaGitAlt, FaCogs, FaCheckCircle
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiJest, SiCypress, SiStripe,
  SiMui, SiTailwindcss
} from 'react-icons/si';
import { HiSparkles, HiLightningBolt, HiCursorClick } from 'react-icons/hi';

const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const experiences = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Arena Club',
      period: '04/2024 - Present',
      duration: '1+ year',
      location: 'Los Angeles, United States',
      remote: true,
      description: 'Leading frontend development and payment integrations for a cutting-edge sports collectibles platform',
      achievements: [
        { icon: <FaReact />, text: 'Designed interactive UI components with React & Next.js' },
        { icon: <SiStripe />, text: 'Integrated secure payment solutions with Stripe' },
        { icon: <FaCode />, text: 'Refactored legacy code to modern React patterns' },
        { icon: <SiJest />, text: 'Achieved 90% test coverage with Jest' },
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Stripe', 'Material UI', 'Jest', 'Express.js'],
      techStack: [
        { icon: <FaReact className="text-cyan-500" />, name: 'React' },
        { icon: <SiNextdotjs className="text-gray-700 dark:text-gray-300" />, name: 'Next.js' },
        { icon: <SiTypescript className="text-blue-600" />, name: 'TypeScript' },
        { icon: <SiStripe className="text-purple-600" />, name: 'Stripe' },
      ],
      color: 'from-purple-500 via-violet-500 to-indigo-600',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
      metrics: {
        impact: '40% faster load times',
        team: '12 engineers',
        projects: '5 major features'
      }
    },
    {
      id: 2,
      title: 'JavaScript Engineer',
      company: 'Mission',
      period: '07/2022 - 12/2024',
      duration: '2.5 years',
      location: 'Montreal, Canada',
      remote: true,
      description: 'Full-stack development with focus on building scalable cloud-native applications',
      achievements: [
        { icon: <FaCloud />, text: 'Developed cloud functions for serverless architecture' },
        { icon: <FaCogs />, text: 'Created highly reusable component library' },
        { icon: <FaUsers />, text: 'Led agile sprint planning sessions' },
        { icon: <FaCheckCircle />, text: 'Maintained 100% sprint delivery rate' },
      ],
      skills: ['JavaScript', 'Node.js', 'React', 'Cloud Functions', 'Agile', 'API Design'],
      techStack: [
        { icon: <SiJavascript className="text-yellow-500" />, name: 'JavaScript' },
        { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
        { icon: <FaCloud className="text-sky-500" />, name: 'Cloud' },
        { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
      ],
      color: 'from-blue-500 via-cyan-500 to-teal-600',
      bgPattern: 'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
      metrics: {
        impact: '200+ components built',
        team: '8 engineers',
        projects: '10+ client projects'
      }
    },
    {
      id: 3,
      title: 'Full Stack JavaScript Engineer',
      company: 'SL2 Studio',
      period: '10/2020 - 05/2022',
      duration: '1.7 years',
      location: 'Lahore, Pakistan',
      remote: false,
      description: 'Technical lead driving architecture decisions and mentoring development teams',
      achievements: [
        { icon: <FaLightbulb />, text: 'Led technical architecture design' },
        { icon: <FaUsers />, text: 'Managed and mentored 5+ developers' },
        { icon: <FaDatabase />, text: 'Designed microservice architecture' },
        { icon: <FaTrophy />, text: 'Delivered 15+ successful projects' },
      ],
      skills: ['Leadership', 'Architecture', 'Microservices', 'Mentoring', 'Agile', 'Full Stack'],
      techStack: [
        { icon: <FaReact className="text-cyan-500" />, name: 'React' },
        { icon: <SiExpress className="text-gray-600" />, name: 'Express' },
        { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
        { icon: <FaDatabase className="text-purple-500" />, name: 'PostgreSQL' },
      ],
      color: 'from-green-500 via-emerald-500 to-teal-600',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
      metrics: {
        impact: '15 projects delivered',
        team: '5 direct reports',
        projects: '3 major architectures'
      }
    },
    {
      id: 4,
      title: 'Frontend Engineer',
      company: 'Arbisoft',
      period: '08/2019 - 09/2020',
      duration: '1.1 years',
      location: 'Lahore, Pakistan',
      remote: false,
      description: 'Modernized legacy applications and established testing best practices',
      achievements: [
        { icon: <FaReact />, text: 'Migrated legacy code to React' },
        { icon: <SiJest />, text: 'Implemented comprehensive test suites' },
        { icon: <SiCypress />, text: 'Built E2E testing automation' },
        { icon: <FaChartLine />, text: 'Improved code coverage by 70%' },
      ],
      skills: ['React', 'Jest', 'Cypress', 'Testing', 'Migration', 'Automation'],
      techStack: [
        { icon: <FaReact className="text-cyan-500" />, name: 'React' },
        { icon: <SiJest className="text-red-600" />, name: 'Jest' },
        { icon: <SiCypress className="text-gray-700" />, name: 'Cypress' },
        { icon: <SiJavascript className="text-yellow-500" />, name: 'JavaScript' },
      ],
      color: 'from-orange-500 via-red-500 to-pink-600',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
      metrics: {
        impact: '70% test coverage',
        team: '6 engineers',
        projects: '4 major migrations'
      }
    },
  ];

  const totalExperience = {
    years: '6+',
    companies: '4',
    projects: '50+',
    technologies: '20+'
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background with floating timeline elements */}
      <div className="absolute inset-0">
        {/* Animated gradient waves */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating timeline dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-full opacity-30 dark:opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10">
          <motion.path
            d="M 50 0 Q 100 50 150 100 T 250 200 T 350 300 T 450 400"
            stroke="url(#experienceGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
          <defs>
            <linearGradient id="experienceGradient">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
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
            <FaBriefcase className="text-4xl text-primary-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences at leading companies across the globe
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center gap-8 flex-wrap"
          >
            {Object.entries(totalExperience).map(([key, value], index) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Timeline with 3D Cards */}
        <div className="relative">
          {/* Animated connecting line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-px w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600"
            style={{
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Card Container */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer ml-12 md:ml-0"
                >
                  {/* 3D Card Effect */}
                  <motion.div
                    animate={{
                      rotateY: selectedExp === exp.id ? 0 : 0,
                      z: selectedExp === exp.id ? 50 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    {/* Card Background with Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-10 rounded-2xl blur-xl`}
                      style={{
                        transform: 'translateZ(-10px)',
                      }}
                    />

                    {/* Main Card */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                      {/* Animated Pattern Background */}
                      <div 
                        className="absolute inset-0 opacity-5"
                        style={{ background: exp.bgPattern }}
                      />

                      {/* Card Header */}
                      <div className={`relative bg-gradient-to-r ${exp.color} p-6 text-white`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-semibold">{exp.company}</span>
                              {exp.remote && (
                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                                  Remote
                                </span>
                              )}
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: selectedExp === exp.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <HiCursorClick className="text-2xl opacity-70" />
                          </motion.div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm mt-3 opacity-90">
                          <span className="flex items-center">
                            <FaCalendar className="mr-1" /> {exp.period}
                          </span>
                          <span className="flex items-center">
                            <FaMapMarkerAlt className="mr-1" /> {exp.location}
                          </span>
                        </div>

                        {/* Floating duration badge */}
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                        >
                          {exp.duration}
                        </motion.div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {exp.description}
                        </p>

                        {/* Tech Stack Icons */}
                        <div className="flex gap-3 mb-4">
                          {exp.techStack.map((tech, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              onHoverStart={() => setHoveredSkill(tech.name)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              className="relative"
                            >
                              <div className="text-2xl">
                                {tech.icon}
                              </div>
                              <AnimatePresence>
                                {hoveredSkill === tech.name && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                                  >
                                    {tech.name}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>

                        {/* Expandable Achievements */}
                        <AnimatePresence>
                          {selectedExp === exp.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                                  <HiSparkles className="mr-2 text-primary-500" />
                                  Key Achievements
                                </h4>
                                <div className="space-y-2">
                                  {exp.achievements.map((achievement, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-start gap-3"
                                    >
                                      <span className="text-primary-500 mt-1">{achievement.icon}</span>
                                      <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {achievement.text}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                  {Object.entries(exp.metrics).map(([key, value], i) => (
                                    <motion.div
                                      key={key}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="text-center"
                                    >
                                      <div className="text-sm font-bold text-primary-500">
                                        {value}
                                      </div>
                                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                        {key}
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {exp.skills.map((skill, i) => (
                                    <motion.span
                                      key={skill}
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.05 }}
                                      whileHover={{ scale: 1.1 }}
                                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                                    >
                                      {skill}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Click Indicator */}
                        <div className="mt-4 text-center">
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-xs text-gray-500 dark:text-gray-400"
                          >
                            {selectedExp === exp.id ? 'Click to collapse' : 'Click to explore'}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <motion.div
                whileHover={{ scale: 1.5, rotate: 180 }}
                className={`absolute left-8 md:left-1/2 transform -translate-x-1/2`}
              >
                <div className={`relative w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full shadow-lg`}>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-full`}
                  />
                  <HiLightningBolt className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs" />
                </div>
              </motion.div>

              {/* Year Badge (Desktop) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className={`hidden md:block absolute ${
                  index % 2 === 0 ? 'right-0 md:right-1/2 md:pr-16' : 'left-0 md:left-1/2 md:pl-16'
                } top-0`}
              >
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full shadow-md">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {exp.period.split(' - ')[0].split('/')[1]}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Journey Continues Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <FaRocket className="text-4xl text-primary-500 mb-2" />
            </motion.div>
            <p className="text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              The Journey Continues...
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Always learning, always growing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;