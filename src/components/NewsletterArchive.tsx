import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Mail, Calendar, Users } from 'lucide-react';

const newsletters = [
  {
    title: 'The $100k Milestone: What I Learned',
    date: 'March 10, 2024',
    subscribers: '12.5k readers',
    preview: 'This week I hit a major milestone - $100k in revenue! Here are the 3 biggest lessons that got me here and what I wish I knew earlier...',
    topics: ['REVENUE MILESTONES', 'BUSINESS LESSONS', 'GROWTH STRATEGIES'],
    category: 'MILESTONE',
    featured: true
  },
  {
    title: 'Tools That Actually Matter in 2024',
    date: 'March 3, 2024',
    subscribers: '11.8k readers',
    preview: 'I tested 47 new business tools this quarter. Here are the only 8 that made it to my "essential" list and why they\'re game changers...',
    topics: ['TOOL REVIEWS', 'PRODUCTIVITY', 'RECOMMENDATIONS'],
    category: 'TOOLS',
    featured: false
  },
  {
    title: 'Why Most Side Hustles Fail (And How to Win)',
    date: 'February 25, 2024',
    subscribers: '11.2k readers',
    preview: 'After analyzing 200+ failed side hustles, I found 5 common patterns. Here\'s what successful entrepreneurs do differently...',
    topics: ['SIDE HUSTLES', 'SUCCESS PATTERNS', 'MINDSET'],
    category: 'STRATEGY',
    featured: true
  },
  {
    title: 'The Automation Stack That Saves Me 20 Hours/Week',
    date: 'February 18, 2024',
    subscribers: '10.9k readers',
    preview: 'My complete automation workflow revealed: from lead generation to customer onboarding, here\'s how I run my business on autopilot...',
    topics: ['AUTOMATION', 'WORKFLOWS', 'TIME MANAGEMENT'],
    category: 'SYSTEMS',
    featured: false
  }
];

const categories = ['ALL', 'MILESTONE', 'TOOLS', 'STRATEGY', 'SYSTEMS'];

const NewsletterArchive = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [filteredNewsletters, setFilteredNewsletters] = useState(newsletters);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const filtered = activeCategory === 'ALL' 
      ? newsletters 
      : newsletters.filter(newsletter => newsletter.category === activeCategory);
    setFilteredNewsletters(filtered);
    setExpandedItems([]);
  }, [activeCategory]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="newsletter" className="py-32 bg-white overflow-hidden relative">
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
              ARCHIVE
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-black transform skew-x-12"></div>
          </div>
          <p className="text-xl text-gray-600 font-light mt-8 max-w-2xl mx-auto leading-relaxed">
            Access our complete collection of business insights and strategic intelligence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-bold tracking-wider transition-all duration-300 relative overflow-hidden group ${
                activeCategory === category
                  ? 'text-white bg-black'
                  : 'text-gray-600 bg-transparent border border-gray-300 hover:border-black hover:text-black'
              }`}
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

        {/* Newsletter List */}
        <div className="space-y-6">
          {filteredNewsletters.map((newsletter, index) => (
            <div
              key={`${newsletter.title}-${index}`}
              className={`group relative bg-white border-2 border-gray-200 transition-all duration-500 hover:border-black overflow-hidden ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Featured Badge */}
              {newsletter.featured && (
                <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-bold tracking-wider z-20">
                  FEATURED
                </div>
              )}

              {/* Main Content */}
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-start space-x-6 flex-1">
                  {/* Icon */}
                  <div className="w-16 h-16 border-2 border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-black group-hover:bg-black transition-all duration-300">
                    <Mail className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Category Label */}
                    <div className="text-xs font-bold tracking-widest text-gray-500 mb-3">
                      {newsletter.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                      {newsletter.title}
                    </h3>
                    
                    {/* Meta Information */}
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{newsletter.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{newsletter.subscribers}</span>
                      </div>
                    </div>
                    
                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                      {newsletter.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold tracking-wider border"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Expand Icon */}
                <div className="flex-shrink-0 ml-6">
                  <div className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-300">
                    {expandedItems.includes(index) ? (
                      <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedItems.includes(index) && (
                <div className="border-t-2 border-gray-200 bg-gray-50 transition-all duration-300">
                  <div className="p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{newsletter.preview}</p>
                    <div className="flex items-center justify-between pt-4">
                      <button className="bg-black text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors duration-200">
                        READ FULL NEWSLETTER
                      </button>
                      <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 text-sm font-bold tracking-wider hover:border-black hover:bg-black hover:text-white transition-all duration-200">
                        SHARE
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Sliding Bottom Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500"></div>

              {/* Background Accent */}
              <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNewsletters.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl font-black mb-4">NO ISSUES</div>
            <p className="text-gray-600">No newsletters found in this category</p>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-24 text-center relative">
          <div className="absolute top-0 left-1/2 w-24 h-px bg-black transform -translate-x-1/2"></div>
          <div className="pt-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
              COMPLETE ARCHIVE
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Access our full library of business intelligence and strategic insights
            </p>
            <button className="bg-black text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors duration-200 group">
              VIEW ALL ISSUES
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </div>

      <style >{`
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

export default NewsletterArchive;