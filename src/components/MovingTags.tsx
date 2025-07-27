import React from 'react';

const MovingTagsSlider = () => {
  const tags = [
    "Entrepreneur Success Stories",
    "Business Growth Hacks",
    "Startup Journey",
    "Marketing Strategies",
    "Leadership Tips",
    "Digital Transformation",
    "Revenue Optimization",
    "Customer Acquisition",
    "Product Development",
    "Team Building",
    "Investment Insights",
    "Market Research",
    "Brand Building",
    "Sales Techniques",
    "Innovation Methods",
    "Scaling Strategies",
    "Business Analytics",
    "Networking Tips",
    "Financial Planning",
    "Productivity Hacks"
  ];

  // Duplicate tags for seamless loop
  const duplicatedTags = [...tags, ...tags];

  return (
    <div className="relative overflow-hidden paper-bg py-12 ">
      {/* Paper tear effects */}
      <div className="paper-tear-top-slider"></div>
      <div className="paper-tear-bottom-slider"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-amber-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-yellow-200 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-200 rounded-full blur-lg"></div>
      </div>

      {/* First row - moving left to right */}
      <div className="relative mb-6">
        <div className="flex animate-scroll-right space-x-6">
          {duplicatedTags.slice(0, 14).map((tag, index) => (
            <div
              key={`row1-${index}`}
              className="paper-tag flex-shrink-0 transform transition-all duration-500 hover:scale-110 hover:-rotate-2"
              style={{
                transform: `rotate(${Math.random() * 6 - 3}deg)`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="block px-6 py-3 text-sm font-bold text-gray-800 whitespace-nowrap">
                {tag}
              </span>
              {/* Random paper effects */}
              {Math.random() > 0.7 && <div className="paper-fold"></div>}
              {Math.random() > 0.8 && <div className="ink-spot"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Second row - moving right to left */}
      <div className="relative">
        <div className="flex animate-scroll-left space-x-6">
          {duplicatedTags.slice(10).map((tag, index) => (
            <div
              key={`row2-${index}`}
              className="paper-tag-alt flex-shrink-0 transform transition-all duration-500 hover:scale-110 hover:rotate-2"
              style={{
                transform: `rotate(${Math.random() * 6 - 3}deg)`,
                animationDelay: `${index * 0.15}s`
              }}
            >
              <span className="block px-6 py-3 text-sm font-bold text-gray-800 whitespace-nowrap">
                {tag}
              </span>
              {/* Random paper effects */}
              {Math.random() > 0.6 && <div className="coffee-drop"></div>}
              {Math.random() > 0.9 && <div className="paper-clip-mini"></div>}
            </div>
          ))}
        </div>
        
      </div>

      <style>{`
        /* Paper background */
        .paper-bg {
          background-color: #f7f3e9;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(139, 69, 19, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        /* Paper tear effects */
        .paper-tear-top-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 15px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0,8 Q5,0 10,6 Q15,12 20,4 Q25,0 30,10 Q35,15 40,3 Q45,0 50,9 Q55,14 60,2 Q65,0 70,11 Q75,15 80,5 Q85,0 90,7 Q95,13 100,5 L100,15 L0,15 Z' fill='%23f7f3e9'/%3E%3C/svg%3E") repeat-x;
          background-size: 80px 15px;
          z-index: 10;
        }

        .paper-tear-bottom-slider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 15px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0,10 Q5,15 10,7 Q15,0 20,12 Q25,15 30,4 Q35,0 40,13 Q45,15 50,6 Q55,0 60,14 Q65,15 70,3 Q75,0 80,11 Q85,15 90,8 Q95,0 100,9 L100,0 L0,0 Z' fill='%23f7f3e9'/%3E%3C/svg%3E") repeat-x;
          background-size: 80px 15px;
          z-index: 10;
        }

        /* Paper tags */
        .paper-tag {
          background: linear-gradient(135deg, #fefcf0 0%, #f8f4e6 100%);
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(139, 69, 19, 0.1) 1px, transparent 1px);
          background-size: 8px 8px;
          border: 2px solid rgba(139, 69, 19, 0.3);
          border-radius: 4px 12px 4px 8px;
          box-shadow: 
            3px 3px 8px rgba(139, 69, 19, 0.2),
            inset 0 0 10px rgba(139, 69, 19, 0.05);
          position: relative;
          cursor: pointer;
        }

        /* Alternative paper tag style */
        .paper-tag-alt {
          background: linear-gradient(135deg, #fff8dc 0%, #f5deb3 100%);
          background-image: 
            radial-gradient(circle at 3px 3px, rgba(139, 69, 19, 0.08) 1px, transparent 1px);
          background-size: 12px 12px;
          border: 2px solid rgba(139, 69, 19, 0.25);
          border-radius: 8px 4px 12px 4px;
          box-shadow: 
            3px 3px 8px rgba(139, 69, 19, 0.15),
            inset 0 0 10px rgba(139, 69, 19, 0.03);
          position: relative;
          cursor: pointer;
        }

        /* Hover effects */
        .paper-tag:hover, .paper-tag-alt:hover {
          box-shadow: 
            5px 5px 15px rgba(139, 69, 19, 0.3),
            inset 0 0 15px rgba(139, 69, 19, 0.1);
          z-index: 10;
        }

        /* Paper fold effect */
        .paper-fold {
          position: absolute;
          top: -2px;
          right: -2px;
          border-left: 8px solid rgba(139, 69, 19, 0.2);
          border-top: 8px solid transparent;
          width: 0;
          height: 0;
        }

        /* Ink spot */
        .ink-spot {
          position: absolute;
          bottom: 2px;
          right: 4px;
          width: 4px;
          height: 4px;
          background: rgba(29, 78, 216, 0.3);
          border-radius: 50%;
        }

        /* Coffee drop */
        .coffee-drop {
          position: absolute;
          top: 2px;
          left: 4px;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, rgba(101, 67, 33, 0.2) 0%, rgba(101, 67, 33, 0.1) 70%, transparent 70%);
          border-radius: 50% 40% 60% 30%;
        }

        /* Mini paper clip */
        .paper-clip-mini {
          position: absolute;
          top: -3px;
          left: 8px;
          width: 12px;
          height: 6px;
          border: 1px solid #c0c0c0;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(135deg, #e0e0e0, #c0c0c0);
        }

        /* Scrolling animations */
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }

        /* Pause animation on hover */
        .paper-tag:hover,
        .paper-tag-alt:hover {
          animation-play-state: paused;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .animate-scroll-right {
            animation-duration: 40s;
          }
          
          .animate-scroll-left {
            animation-duration: 35s;
          }
          
          .paper-tag span,
          .paper-tag-alt span {
            font-size: 12px;
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default MovingTagsSlider;