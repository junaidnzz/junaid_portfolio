import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Spiral SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="spiral-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M100,100 Q120,80 140,100 T180,100 Q160,120 140,140 T100,140 Q80,120 60,100 T20,100 Q40,80 60,60 T100,60"
              fill="none"
              stroke={isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(59, 130, 246, 0.05)'}
              strokeWidth="1"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </pattern>
          
          <radialGradient id="gradient1" cx="50%" cy="50%">
            <stop offset="0%" stopColor={isDark ? '#3b82f6' : '#60a5fa'} stopOpacity="0.2" />
            <stop offset="100%" stopColor={isDark ? '#1e40af' : '#3b82f6'} stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="gradient2" cx="50%" cy="50%">
            <stop offset="0%" stopColor={isDark ? '#8b5cf6' : '#a78bfa'} stopOpacity="0.2" />
            <stop offset="100%" stopColor={isDark ? '#5b21b6' : '#7c3aed'} stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#spiral-pattern)" />
      </svg>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Rotating Circle */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="0.5"
              strokeDasharray="10 5"
            />
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="0.5"
              strokeDasharray="5 10"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="0.5"
              strokeDasharray="15 5"
            />
          </svg>
        </motion.div>

        {/* Spiral Animation */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 50,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <path
              d="M200,200 Q250,150 300,200 T400,200 Q350,250 300,300 T200,300 Q150,250 100,200 T0,200 Q50,150 100,100 T200,100"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="0.5"
            />
            <path
              d="M200,180 Q240,140 280,180 T360,180 Q320,220 280,260 T200,260 Q160,220 120,180 T40,180 Q80,140 120,100 T200,100"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        {/* Floating Hexagon */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64"
          animate={{
            rotate: [0, -360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            rotate: {
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            },
            x: {
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            y: {
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <polygon
              points="100,30 150,55 150,105 100,130 50,105 50,55"
              fill="none"
              stroke={isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(167, 139, 250, 0.1)'}
              strokeWidth="0.5"
            />
            <polygon
              points="100,50 130,65 130,95 100,110 70,95 70,65"
              fill="none"
              stroke={isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(167, 139, 250, 0.08)'}
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        {/* DNA Helix Style Spiral */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72"
          animate={{
            rotateY: [0, 360],
            rotateZ: [0, 360],
          }}
          transition={{
            rotateY: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
            rotateZ: {
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ perspective: '1000px' }}
        >
          <svg className="w-full h-full" viewBox="0 0 300 300">
            <motion.path
              d="M 150 50 Q 200 100, 150 150 T 150 250"
              fill="none"
              stroke={isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.1)'}
              strokeWidth="1"
              animate={{
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.path
              d="M 150 50 Q 100 100, 150 150 T 150 250"
              fill="none"
              stroke={isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.1)'}
              strokeWidth="1"
              animate={{
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2.5,
              }}
            />
          </svg>
        </motion.div>

        {/* Small Floating Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isDark 
                ? `rgba(147, 197, 253, ${0.2 + Math.random() * 0.3})`
                : `rgba(96, 165, 250, ${0.1 + Math.random() * 0.2})`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[50vw] h-[50vh] rounded-full filter blur-[100px]"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[50vw] h-[50vh] rounded-full filter blur-[100px]"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;