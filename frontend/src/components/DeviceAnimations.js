import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedDesktop = ({ isActive }) => (
  <motion.div
    className="relative w-full h-64 flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: isActive ? 1 : 0.6, 
      scale: isActive ? 1 : 0.8,
      y: isActive ? 0 : 10 
    }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    {/* Monitor */}
    <div className="relative">
      {/* Screen */}
      <motion.div
        className="w-56 h-36 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-2xl border-4 border-gray-700"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Screen Content */}
        <div className="p-4 h-full relative overflow-hidden">
          {/* Animated Website Content */}
          <motion.div
            className="space-y-2"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-2 bg-blue-500 rounded w-3/4"></div>
            <div className="h-1 bg-gray-600 rounded w-full"></div>
            <div className="h-1 bg-gray-600 rounded w-2/3"></div>
            <div className="h-1 bg-gray-600 rounded w-5/6"></div>
            <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-1/2 mt-4"></div>
          </motion.div>
          
          {/* Floating Elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{ left: `${20 + i * 30}%`, top: `${30 + i * 20}%` }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: 2, 
                delay: i * 0.5, 
                repeat: Infinity 
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Stand */}
      <div className="w-8 h-8 bg-gray-700 mx-auto mt-1 rounded-b-lg"></div>
      <div className="w-16 h-2 bg-gray-600 mx-auto rounded-full"></div>
    </div>
  </motion.div>
);

export const AnimatedTablet = ({ isActive }) => (
  <motion.div
    className="relative w-full h-64 flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: isActive ? 1 : 0.6, 
      scale: isActive ? 1 : 0.8,
      rotateY: isActive ? 0 : 15 
    }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    {/* Tablet */}
    <motion.div
      className="w-40 h-56 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl border-2 border-gray-600 p-3"
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Screen */}
      <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden relative">
        {/* Status Bar */}
        <div className="h-4 bg-gray-800 flex items-center justify-between px-2">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-green-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
          <div className="text-xs text-white">12:34</div>
        </div>
        
        {/* Content */}
        <div className="p-3 space-y-3">
          <motion.div
            className="h-3 bg-blue-500 rounded w-2/3"
            animate={{ width: ["66%", "80%", "66%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="space-y-1">
            <div className="h-1 bg-gray-600 rounded w-full"></div>
            <div className="h-1 bg-gray-600 rounded w-3/4"></div>
            <div className="h-1 bg-gray-600 rounded w-5/6"></div>
          </div>
          
          {/* Interactive Elements */}
          <motion.div
            className="grid grid-cols-2 gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.3, 
                  repeat: Infinity 
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export const AnimatedMobile = ({ isActive }) => (
  <motion.div
    className="relative w-full h-64 flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: isActive ? 1 : 0.6, 
      scale: isActive ? 1 : 0.8,
      y: isActive ? 0 : 10 
    }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    {/* Phone */}
    <motion.div
      className="w-24 h-48 bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-2xl border-2 border-gray-600 p-2"
      whileHover={{ scale: 1.1, rotateZ: 2 }}
      transition={{ duration: 0.3 }}
    >
      {/* Screen */}
      <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
        
        {/* Status Bar */}
        <div className="h-6 bg-gray-800 flex items-center justify-between px-2 pt-3">
          <motion.div
            className="flex space-x-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-0.5 h-2 bg-green-400 rounded-full ${i > 2 ? 'opacity-50' : ''}`}></div>
            ))}
          </motion.div>
          <div className="text-xs text-white">100%</div>
        </div>
        
        {/* Content */}
        <div className="p-2 space-y-2">
          <motion.div
            className="h-2 bg-blue-500 rounded w-4/5"
            animate={{ width: ["80%", "90%", "80%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="space-y-1">
            <div className="h-0.5 bg-gray-600 rounded w-full"></div>
            <div className="h-0.5 bg-gray-600 rounded w-3/4"></div>
            <div className="h-0.5 bg-gray-600 rounded w-5/6"></div>
          </div>
          
          {/* App Icons */}
          <motion.div
            className="grid grid-cols-3 gap-1 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.2, 
                  repeat: Infinity 
                }}
              />
            ))}
          </motion.div>
          
          {/* Notification */}
          <motion.div
            className="absolute bottom-4 left-2 right-2 h-4 bg-gray-800/90 rounded-lg flex items-center px-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1"></div>
            <div className="text-xs text-gray-300 truncate">Neue Nachricht</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);