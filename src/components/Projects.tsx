import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, 
  FaFigma, FaDatabase, FaCloud, FaMobile, FaRobot,
  FaShoppingCart, FaHeartbeat, FaPalette, FaCoins,
  FaCogs, FaGraduationCap, FaGamepad, FaChartLine,
  FaLock, FaRocket, FaTrophy, FaCode, FaArrowRight,
  FaEye, FaStar, FaUsers
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiFirebase, SiStripe, 
  SiTailwindcss, SiMongodb, SiPrisma, SiNestjs,
  SiCypress, SiJest, SiGraphql, SiRedux, SiWeb3Dotjs,
  SiExpress, SiPostgresql, SiMui, SiSocketdotio
} from 'react-icons/si';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { BiLogoFlutter } from 'react-icons/bi';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'ArenaClub',
      subtitle: 'Sports Card Marketplace',
      description: 'The most trusted sports card marketplace featuring Slab Packs™, graded card auctions, and comprehensive collection management for collectors.',
      image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&h=600&fit=crop',
      technologies: ['React', 'Next.js', 'Material UI', 'Stripe', 'PostgreSQL'],
      category: 'E-Commerce',
      color: 'from-green-600 to-emerald-600',
      stats: {
        users: '10K+',
        transactions: '$2M+',
        performance: '40% faster'
      },
      link: 'https://arenaclub.com',
      github: null,
      year: '2025',
      featured: true
    },
    {
      id: 2,
      title: 'HatchPath',
      subtitle: 'Health Coaching Platform',
      description: 'AI-powered platform connecting health coaches with clients, featuring personalized matching, video consultations, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'WebRTC'],
      category: 'Healthcare',
      color: 'from-emerald-600 to-teal-600',
      stats: {
        users: '5K+',
        coaches: '500+',
        satisfaction: '4.9/5'
      },
      link: 'https://hatchpath.io',
      github: null,
      year: '2023',
      featured: true
    },
    {
      id: 3,
      title: 'Virtua Magazine',
      subtitle: 'NFT Publishing Platform',
      description: 'Web3 marketplace for digital magazines with NFT minting, drag-and-drop builder, and blockchain-based ownership verification.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      technologies: ['React', 'Web3.js', 'NestJS', 'Ethereum', 'IPFS'],
      category: 'Web3',
      color: 'from-pink-600 to-rose-600',
      stats: {
        sales: '$500K+',
        artists: '1K+',
        nfts: '5K+'
      },
      link: 'https://virtua.com',
      github: null,
      year: '2023',
      featured: true
    },
    {
      id: 4,
      title: 'EduAI',
      subtitle: 'Adaptive Learning System',
      description: 'Intelligent education platform using machine learning to personalize curriculum and track student progress in real-time.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
      technologies: ['React', 'Python', 'TensorFlow', 'GraphQL', 'MongoDB'],
      category: 'EdTech',
      color: 'from-blue-600 to-cyan-600',
      stats: {
        students: '10K+',
        courses: '500+',
        improvement: '30%'
      },
      link: null,
      github: null,
      year: '2023',
      featured: false
    },
    {
      id: 5,
      title: 'DesignPro',
      subtitle: 'Design Collaboration Tool',
      description: 'Real-time design feedback platform with Figma integration, version control, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      technologies: ['React', 'Redux', 'Figma API', 'Node.js', 'Socket.io'],
      category: 'Productivity',
      color: 'from-orange-600 to-red-600',
      stats: {
        teams: '500+',
        designs: '10K+',
        integrations: '5+'
      },
      link: 'https://beta.designpro.ai',
      github: null,
      year: '2022',
      featured: false
    },
    {
      id: 6,
      title: 'KAYAK',
      subtitle: 'Travel Search Platform',
      description: 'Worked on frontend development and E2E test automation for one of the world\'s leading travel search engines, serving millions of users globally.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Jest', 'Cypress', 'Protractor'],
      category: 'Travel Tech',
      color: 'from-orange-600 to-red-600',
      stats: {
        users: '100M+',
        searches: '2B+/year',
        coverage: '90% tests'
      },
      link: 'https://www.kayak.com',
      github: null,
      year: '2019-2020',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background with floating project cards */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating card shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 rounded-lg opacity-10 dark:opacity-5"
            style={{
              width: `${80 + i * 20}px`,
              height: `${60 + i * 15}px`,
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
        
        {/* Animated code symbols */}
        {['</', '/>', '{ }', '[ ]', '( )'].map((symbol, i) => (
          <motion.div
            key={symbol}
            className="absolute text-2xl font-mono text-purple-400 dark:text-purple-600 opacity-20 dark:opacity-10"
            style={{
              left: `${20 + i * 20}%`,
              top: `${60 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {symbol}
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
            <FaRocket className="text-4xl text-primary-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my best work across various industries and technologies
          </p>
        </motion.div>

        {/* Projects Grid - Consistent Card Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {project.subtitle}
                          </p>
                        </div>
                        {project.featured && (
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-yellow-400 text-gray-900 p-2 rounded-lg"
                          >
                            <FaTrophy className="text-sm" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                  >
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                      >
                        <FaGithub size={18} />
                      </motion.a>
                    )}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white rounded-full text-gray-900"
                    >
                      <FaEye size={18} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: selectedProject === project.id ? 1 : 0.8, 
                          scale: selectedProject === project.id ? 1 : 1 
                        }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {selectedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center justify-between">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm"
                          >
                            View Details
                            <FaArrowRight />
                          </motion.button>
                          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <FaUsers /> Team Project
                            </span>
                            <span className="flex items-center gap-1">
                              <FaStar className="text-yellow-500" /> Featured
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Click Indicator */}
                <div className="absolute bottom-2 right-2">
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xs text-gray-400 dark:text-gray-500"
                  >
                    {selectedProject === project.id ? '▼' : '▶'}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/junaid1840"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            View GitHub Profile
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;