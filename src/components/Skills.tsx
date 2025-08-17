import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiNestjs, SiPrisma, SiFirebase, SiTailwindcss,
  SiRedux, SiGooglecloud, SiGit, SiDocker,
  SiMongodb, SiPostgresql, SiGraphql, SiPython
} from 'react-icons/si';

const Skills: React.FC = () => {
  const techStack = [
    // Core Languages
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Python', icon: <SiPython />, color: 'text-green-500' },
    
    // Frontend
    { name: 'React', icon: <SiReact />, color: 'text-cyan-500' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-800 dark:text-white' },
    { name: 'Redux', icon: <SiRedux />, color: 'text-purple-600' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-teal-500' },
    
    // Backend
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'NestJS', icon: <SiNestjs />, color: 'text-red-600' },
    { name: 'GraphQL', icon: <SiGraphql />, color: 'text-pink-600' },
    
    // Database
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
    { name: 'Prisma', icon: <SiPrisma />, color: 'text-gray-800 dark:text-white' },
    { name: 'Firebase', icon: <SiFirebase />, color: 'text-orange-500' },
    
    // DevOps & Tools
    { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
    { name: 'Google Cloud', icon: <SiGooglecloud />, color: 'text-red-500' },
    { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        {/* Minimal Icon Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`text-4xl md:text-5xl ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  {tech.icon}
                </motion.div>
                <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Areas - Simple Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Core Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Full Stack Development',
                'System Architecture',
                'API Design',
                'Database Optimization',
                'Cloud Infrastructure',
                'AI Integration',
                'Performance Optimization',
                'Team Leadership'
              ].map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;