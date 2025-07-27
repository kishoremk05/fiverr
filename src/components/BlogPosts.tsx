import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  Clock,
  User,
  BookOpen,
  Wrench,
  Target,
} from "lucide-react";
import CommentForm from "./CommentBox";

const blogPosts = [
  {
    title: "How I Built a $50k/Month SaaS in 6 Months",
    excerpt:
      "The exact playbook I used to validate, build, and scale my first profitable software business from zero to $600k ARR.",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "Sarah Chen",
    category: "CASE STUDY",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: true,
  },
  {
    title: "The 10 Tools Every New Entrepreneur Needs",
    excerpt:
      "Cut through the noise with this curated list of essential tools that actually move the needle for early-stage businesses.",
    date: "March 12, 2024",
    readTime: "5 min read",
    author: "Mike Rodriguez",
    category: "TOOLS",
    image:
      "https://images.pexels.com/photos/7688347/pexels-photo-7688347.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: false,
  },
  {
    title: "From Idea to First Sale: A 30-Day Challenge",
    excerpt:
      "Follow along as we document the complete journey from business idea to first paying customer in just 30 days.",
    date: "March 8, 2024",
    readTime: "12 min read",
    author: "Alex Johnson",
    category: "CHALLENGE",
    image:
      "https://images.pexels.com/photos/7688350/pexels-photo-7688350.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: true,
  },
];

const categories = [
  { name: "ALL", icon: BookOpen },
  { name: "CASE STUDY", icon: Target },
  { name: "TOOLS", icon: Wrench },
  { name: "CHALLENGE", icon: Target },
];

const BlogPosts = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    const filtered =
      activeCategory === "ALL"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);
    setFilteredPosts(filtered);
  }, [activeCategory]);

  return (
    <div className="min-h-screen paper-bg" id="articles">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Paper tear effect at top */}
          <div className="absolute -top-8 left-0 w-full h-8 paper-tear"></div>

          <div className="paper-sheet p-12 relative">
            {/* Tape elements */}
            <div className="tape tape-1"></div>
            <div className="tape tape-2"></div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-4  tracking-wide transform -rotate-1">
              Business Growth Articles
            </h1>
            <div className="w-32 h-1 bg-amber-600 mx-auto mb-6 rough-line"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Real entrepreneurs sharing their journey from idea to success
            </p>

            {/* Coffee stain */}
            <div className="coffee-stain"></div>
          </div>
        </div>

        {/* Category Filter - Paper tabs style */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`paper-tab group relative transform transition-all duration-300 ${
                  activeCategory === category.name
                    ? "scale-105 -translate-y-1"
                    : "hover:scale-102 hover:-translate-y-0.5"
                }`}
                style={{ transform: `rotate(${(index - 1) * 2}deg)` }}
              >
                <div
                  className={`px-6 py-3 paper-texture border-2 border-amber-800 ${
                    activeCategory === category.name
                      ? "bg-amber-100 shadow-lg"
                      : "bg-amber-50 hover:bg-amber-100"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4 text-amber-800" />
                    <span className="font-bold text-amber-900 text-sm tracking-wide">
                      {category.name}
                    </span>
                  </div>
                </div>
                {/* Paper fold shadow */}
                <div className="absolute inset-0 bg-amber-900 opacity-20 transform translate-x-1 translate-y-1 -z-10 paper-texture"></div>
              </button>
            );
          })}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post, index) => (
            <article
              key={post.title}
              className="paper-card group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
              style={{
                transform: `rotate(${index % 2 === 0 ? "1" : "-1"}deg)`,
                zIndex: filteredPosts.length - index,
              }}
            >
              <div className="paper-sheet relative overflow-hidden">
                {/* Paperclip */}
                <div className="paperclip"></div>

                {/* Featured stamp */}
                {post.featured && (
                  <div className="featured-stamp">FEATURED</div>
                )}

                {/* Image with torn edge */}
                <div className="relative mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover paper-image-tear filter sepia-10"
                  />
                  <div className="absolute inset-0 bg-amber-50 mix-blend-multiply opacity-30"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Category tag */}
                  <div className="inline-block bg-amber-200 text-amber-900 px-3 py-1 text-xs font-bold mb-4 paper-texture border border-amber-400 transform -rotate-1">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-800 mb-4 leading-tight ">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="text-sm text-gray-600 mb-4 space-y-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read more button */}
                  <button className="paper-button group/btn w-full">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Read Full Story</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </button>
                </div>

                {/* Paper shadows */}
                <div className="absolute inset-0 bg-amber-900 opacity-10 transform translate-x-2 translate-y-2 -z-10 paper-texture"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="paper-sheet p-12 text-center relative transform -rotate-1">
          {/* Push pins */}
          <div className="push-pin pin-1"></div>
          <div className="push-pin pin-2"></div>

          <h3 className="text-4xl font-black text-gray-800 mb-6 ">
            Comment Your Journey
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Share Your Experiences and Struggles
          </p>

          <CommentForm />

          {/* Ink blot */}
          <div className="ink-blot"></div>
        </div>
      </div>

      <style>{`
        /* Paper texture background */
        .paper-bg {
          background-color: #f7f3e9;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(139, 69, 19, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
          position: relative;
        }

        /* Paper sheet style */
        .paper-sheet {
          background: linear-gradient(135deg, #fefcf0 0%, #f8f4e6 100%);
          background-image: 
            linear-gradient(90deg, rgba(139, 69, 19, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(139, 69, 19, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          border: 2px solid rgba(139, 69, 19, 0.2);
          box-shadow: 
            4px 4px 8px rgba(139, 69, 19, 0.15),
            inset 0 0 20px rgba(139, 69, 19, 0.05);
          position: relative;
        }

        /* Handwriting font */
        .handwriting-font {
          font-family: 'Brush Script MT', cursive;
          text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.1);
        }

        /* Paper texture class */
        .paper-texture {
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(139, 69, 19, 0.15) 1px, transparent 1px);
          background-size: 10px 10px;
          filter: contrast(1.1) brightness(0.98);
        }

        /* Tape elements */
        .tape {
          position: absolute;
          width: 80px;
          height: 25px;
          background: rgba(255, 223, 186, 0.8);
          border: 1px solid rgba(139, 69, 19, 0.3);
          transform: rotate(-5deg);
          box-shadow: 2px 2px 4px rgba(139, 69, 19, 0.2);
        }
        .tape-1 { top: -12px; left: 20px; }
        .tape-2 { top: -12px; right: 20px; transform: rotate(5deg); }

        /* Coffee stain */
        .coffee-stain {
          position: absolute;
          bottom: 20px;
          right: 30px;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, rgba(101, 67, 33, 0.15) 0%, rgba(101, 67, 33, 0.05) 50%, transparent 70%);
          border-radius: 50% 40% 60% 30%;
        }

        /* Paper tabs */
        .paper-tab {
          position: relative;
        }

        /* Paper card */
        .paper-card:hover {
          z-index: 20 !important;
        }

        /* Paperclip */
        .paperclip {
          position: absolute;
          top: -8px;
          right: 20px;
          width: 30px;
          height: 15px;
          border: 3px solid #c0c0c0;
          border-radius: 8px 8px 0 0;
          background: linear-gradient(135deg, #e0e0e0, #c0c0c0);
          z-index: 10;
          box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        .paperclip::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 3px;
          width: 18px;
          height: 8px;
          border: 2px solid #a0a0a0;
          border-radius: 0 0 4px 4px;
        }

        /* Featured stamp */
        .featured-stamp {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #dc2626;
          color: white;
          font-weight: bold;
          font-size: 10px;
          padding: 8px 12px;
          transform: rotate(15deg);
          border: 3px solid #dc2626;
          border-radius: 4px;
          box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 1px;
          z-index: 10;
        }

        /* Paper image tear */
        .paper-image-tear {
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cpath d='M0,0 L400,0 L400,180 Q380,190 360,185 Q340,180 320,190 Q300,200 280,185 Q260,170 240,185 Q220,200 200,185 Q180,170 160,185 Q140,200 120,185 Q100,170 80,185 Q60,200 40,185 Q20,170 0,185 Z' fill='white'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cpath d='M0,0 L400,0 L400,180 Q380,190 360,185 Q340,180 320,190 Q300,200 280,185 Q260,170 240,185 Q220,200 200,185 Q180,170 160,185 Q140,200 120,185 Q100,170 80,185 Q60,200 40,185 Q20,170 0,185 Z' fill='white'/%3E%3C/svg%3E");
        }

        /* Paper buttons */
        .paper-button {
          background: linear-gradient(135deg, #f4e4bc 0%, #e6d299 100%);
          border: 2px solid #d4af37;
          color: #8b4513;
          font-weight: bold;
          padding: 12px 24px;
          transition: all 0.3s ease;
          box-shadow: 2px 2px 4px rgba(139, 69, 19, 0.2);
        }
        .paper-button:hover {
          background: linear-gradient(135deg, #e6d299 0%, #d4af37 100%);
          transform: translateY(-1px);
          box-shadow: 3px 3px 6px rgba(139, 69, 19, 0.3);
        }

        .paper-button-primary {
          background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          border: 2px solid #8b4513;
          color: white;
          font-weight: bold;
          padding: 12px 24px;
          transition: all 0.3s ease;
          box-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
        }
        .paper-button-primary:hover {
          background: linear-gradient(135deg, #b8860b 0%, #8b4513 100%);
          transform: translateY(-1px);
        }

        /* Paper input */
        .paper-input {
          background: #fefcf0;
          border: 2px solid rgba(139, 69, 19, 0.3);
          border-bottom: 3px solid #d4af37;
          background-image: linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px);
          background-size: 100% 20px;
          color: #8b4513;
          font-weight: medium;
        }
        .paper-input:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        }

        /* Push pins */
        .push-pin {
          position: absolute;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #dc2626 30%, #b91c1c 70%);
          border-radius: 50%;
          box-shadow: 
            inset -2px -2px 4px rgba(0,0,0,0.3),
            2px 2px 4px rgba(0,0,0,0.2);
        }
        .pin-1 { top: 20px; left: 30px; }
        .pin-2 { top: 20px; right: 30px; }

        /* Ink blot */
        .ink-blot {
          position: absolute;
          bottom: 30px;
          left: 40px;
          width: 25px;
          height: 25px;
          background: rgba(29, 78, 216, 0.2);
          border-radius: 50% 40% 60% 70%;
          transform: rotate(45deg);
        }

        /* Rough line */
        .rough-line {
          position: relative;
          border-radius: 2px;
        }
        .rough-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: inherit;
          transform: rotate(0.5deg);
        }

        /* Paper tear effect */
        .paper-tear {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10'%3E%3Cpath d='M0,5 Q5,0 10,5 Q15,10 20,5 Q25,0 30,5 Q35,10 40,5 Q45,0 50,5 Q55,10 60,5 Q65,0 70,5 Q75,10 80,5 Q85,0 90,5 Q95,10 100,5 L100,10 L0,10 Z' fill='%23f7f3e9'/%3E%3C/svg%3E") repeat-x;
          background-size: 50px 100%;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .sepia-10 {
          filter: sepia(10%);
        }

        .scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default BlogPosts;
