import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-6"
          >
            <motion.a
              href="https://github.com/junaid1840"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/junaid-nazir-46b080147"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:junaid.nz1840@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-center flex items-center"
          >
            © {currentYear} Junaid Nazir. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1 text-red-500"
            >
              <FaHeart />
            </motion.span>{' '}
            using React & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;