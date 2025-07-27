"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  items: string[];
}

interface StarterKitCardProps {
  isInView: boolean;
  mouseX: number;
  mouseY: number;
  
  handleMouseLeave: (e: React.MouseEvent) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  filteredCategories: Category[];
}

const StarterKitCard: React.FC<StarterKitCardProps> = ({
  isInView,
  mouseX,
  mouseY,
  
  handleMouseLeave,
  searchQuery,
  setSearchQuery,
  filteredCategories,
}) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      className="lg:col-span-2 relative"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <motion.div
        ref={cardRef}
        className="relative"
        
        onMouseLeave={handleMouseLeave}
        animate={{ rotateY: mouseX * 3, rotateX: -mouseY * 3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Paper Note Container */}
        <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-red-300 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
          {/* Paper texture overlay */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Spiral holes */}
          <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-center space-y-4 -ml-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white border-2 border-gray-300 rounded-full shadow-inner" />
            ))}
          </div>

          {/* Note Content */}
          <div className="pl-12 pr-6 py-8">
            {/* Note Title */}
            <div className="border-b border-gray-300 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 handwriting-style">Starter Kit Resources</h3>
              <p className="text-sm text-gray-600 mt-1">Everything you need to get started</p>
            </div>

            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-sm shadow-sm"
              />
            </div>

            {/* Categories List */}
            <div className="space-y-4 max-h-80 overflow-y-auto">
              <AnimatePresence>
                {filteredCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200 pb-3 last:border-b-0"
                  >
                    <div className="flex items-center mb-2">
                      <category.icon className="w-4 h-4 text-gray-600 mr-2" />
                      <h4 className="font-semibold text-gray-800 text-sm">{category.name}</h4>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredCategories.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-gray-500"
                >
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No resources found for "{searchQuery}"</p>
                </motion.div>
              )}
            </div>

            {/* Footer Note */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 italic">✨ More resources added weekly</p>
            </div>
          </div>

          {/* Paper clips */}
          <div className="absolute -top-2 right-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-400 shadow-md" />
          </div>
          <div className="absolute -bottom-2 right-8">
            <div className="w-6 h-6 bg-blue-300 rounded-full border-2 border-blue-400 shadow-md" />
          </div>
        </div>

        {/* Paper shadow */}
        <div className="absolute inset-0 bg-gray-400 transform translate-x-1 translate-y-1 -z-10 opacity-20" />
      </motion.div>
    </motion.div>
  );
};

export default StarterKitCard;
