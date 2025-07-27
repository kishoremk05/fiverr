import React, { useEffect, useState } from 'react';
import { Rocket, DollarSign, MapPin, TrendingUp, Users, Lightbulb } from 'lucide-react';

const topics = [
  { icon: Rocket, text: 'Start from Scratch', category: 'FOUNDATION', featured: true },
  { icon: DollarSign, text: 'Make Passive Income', category: 'REVENUE', featured: false },
  { icon: MapPin, text: 'Work from Anywhere', category: 'LIFESTYLE', featured: true },
  { icon: TrendingUp, text: 'Scale Your Biz', category: 'GROWTH', featured: false },
  { icon: Users, text: 'Build Your Team', category: 'OPERATIONS', featured: false },
  { icon: Lightbulb, text: 'Find Your Niche', category: 'STRATEGY', featured: true }
];

const categories = ['ALL', 'FOUNDATION', 'REVENUE', 'LIFESTYLE', 'GROWTH', 'OPERATIONS', 'STRATEGY'];

const TopicsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [filteredTopics, setFilteredTopics] = useState(topics);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTopics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredTopics.length]);

  useEffect(() => {
    const filtered = activeCategory === 'ALL' 
      ? topics 
      : topics.filter(topic => topic.category === activeCategory);
    setFilteredTopics(filtered);
    setCurrentIndex(0);
  }, [activeCategory]);

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-y-1/2"></div>
        
        {/* Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-gray-900"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Brutalist Typography Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter mb-4">
              TOPICS
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-black transform skew-x-12"></div>
          </div>
          <p className="text-xl text-gray-600 font-light mt-8 max-w-2xl mx-auto leading-relaxed">
            Navigate your entrepreneurial journey with precision and purpose
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
            onClick={() => {
  setActiveCategory(category);
  const targetId = `topic-${category.toLowerCase()}`;
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}}

            >
              <span className="relative z-10">{category}</span>
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
              {activeCategory !== category && (
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold tracking-wider">
                  {category}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTopics.map((topic, index) => (
            <div
              key={`${topic.text}-${index}`}
              className={`group relative bg-white border-2 border-gray-200 transition-all duration-500 hover:border-black cursor-pointer overflow-hidden ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Featured Badge */}
              {topic.featured && (
                <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-bold tracking-wider z-20">
                  FEATURED
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 relative z-10">
                {/* Category Label */}
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-4">
                  {topic.category}
                </div>

                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-300">
                    <topic.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    {topic.text}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Master the fundamentals and advanced strategies needed to excel in this critical area of business development.
                </p>

                {/* Action Button - Appears on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="bg-black text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors duration-200">
                    EXPLORE TOPIC
                  </button>
                </div>
              </div>

              {/* Sliding Bottom Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500"></div>

              {/* Background Accent */}
              <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Mobile Current Topic Indicator */}
        <div className="lg:hidden mt-12 flex justify-center space-x-2">
          {filteredTopics.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black transform scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 text-center relative">
          <div className="absolute top-0 left-1/2 w-24 h-px bg-black transform -translate-x-1/2"></div>
          <div className="pt-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
              READY TO BEGIN?
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Choose your focus area and access curated resources designed for serious entrepreneurs
            </p>
            <button className="bg-black text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors duration-200 group">
              VIEW ALL RESOURCES
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TopicsCarousel;