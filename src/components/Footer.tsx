import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Coffee,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative paper-bg-dark " id="about">
      {/* Paper tear transition from main content */}
      <div className="paper-tear-top"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info - Pinned Note Style */}
          <div className="paper-note relative transform -rotate-2">
            <div className="push-pin-footer pin-red"></div>
            <div className="p-6">
              <h3 className="text-2xl font-black text-gray-800 mb-4 ">
                Business<span className="text-amber-600">Grow</span>
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-4">
                Helping entrepreneurs turn their ideas into thriving businesses
                since 2020.
              </p>
              <div className="ink-signature">
                <span className=" text-amber-600 text-lg font-extrabold">
                  - The Team
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links - Torn Paper Style */}
          <div className="paper-note relative transform rotate-1">
            <div className="push-pin-footer pin-blue"></div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4  border-b-2 border-amber-600 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Success Stories",
                  "Tools & Resources",
                  "Blog",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-amber-700 font-medium transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-700 transition-colors"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - Sticky Note Style */}
          <div className="paper-note sticky-note relative">
            <div className="fold-corner"></div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4 ">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">hello@businessgrow.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter - Index Card Style */}
          <div className="paper-note index-card relative transform -rotate-1">
            <div className="paper-clip-large"></div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4 ">
                Stay Updated
              </h4>
              <p className="text-gray-700 font-medium mb-4 text-sm leading-relaxed">
                Get weekly insights delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full paper-input-small"
                />
                <button className="paper-button-small w-full">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Business Cards Style */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  className="business-card group transform transition-all duration-300 hover:scale-110"
                  style={{ transform: `rotate(${(index - 1.5) * 5}deg)` }}
                >
                  <div className="p-4 bg-white paper-texture border-2 border-gray-300 shadow-lg">
                    <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <div className="business-card-shadow"></div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar - Torn Paper Strip */}
        <div className="paper-strip relative">
          {/* Water stain */}
          <div className="water-stain"></div>

          {/* Pen marks */}
          <div className="pen-marks"></div>
        </div>
      </div>

      <style>{`
        /* Paper background - darker for footer */
        .paper-bg-dark {
          background-color: #f0ead6;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(139, 69, 19, 0.15) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(139, 69, 19, 0.08) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        /* Paper tear at top */
        .paper-tear-top {
          height: 20px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0,10 Q5,0 10,8 Q15,16 20,6 Q25,0 30,12 Q35,20 40,4 Q45,0 50,14 Q55,18 60,2 Q65,0 70,16 Q75,20 80,8 Q85,0 90,10 Q95,18 100,6 L100,20 L0,20 Z' fill='%23f0ead6'/%3E%3C/svg%3E") repeat-x;
          background-size: 100px 20px;
          margin-bottom: -1px;
        }

        /* Paper note base style */
        .paper-note {
          background: linear-gradient(135deg, #fefcf0 0%, #f8f4e6 100%);
          background-image: 
            linear-gradient(90deg, rgba(139, 69, 19, 0.04) 1px, transparent 1px),
            linear-gradient(rgba(139, 69, 19, 0.04) 1px, transparent 1px);
          background-size: 20px 20px;
          border: 2px solid rgba(139, 69, 19, 0.2);
          box-shadow: 
            4px 4px 12px rgba(139, 69, 19, 0.2),
            inset 0 0 20px rgba(139, 69, 19, 0.05);
          transition: all 0.3s ease;
        }

        .paper-note:hover {
          transform: translateY(-2px) rotate(0deg) !important;
          box-shadow: 
            6px 6px 20px rgba(139, 69, 19, 0.25),
            inset 0 0 20px rgba(139, 69, 19, 0.05);
        }

        /* Sticky note variation */
        .sticky-note {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
        }

        /* Index card variation */
        .index-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 2px solid #6c757d;
        }

        /* Push pins */
        .push-pin-footer {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          box-shadow: 
            inset -3px -3px 6px rgba(0,0,0,0.3),
            2px 2px 6px rgba(0,0,0,0.2);
          top: -7px;
          left: 50%;
          transform: translateX(-50%);
        }

        .pin-red {
          background: radial-gradient(circle, #dc2626 30%, #b91c1c 70%);
        }

        .pin-blue {
          background: radial-gradient(circle, #2563eb 30%, #1d4ed8 70%);
        }

        /* Fold corner for sticky note */
        .fold-corner {
          position: absolute;
          top: 0;
          right: 0;
          border-left: 20px solid #f1c40f;
          border-top: 20px solid #f0ead6;
          width: 0;
          height: 0;
        }

        /* Large paper clip */
        .paper-clip-large {
          position: absolute;
          top: -12px;
          right: 15px;
          width: 40px;
          height: 20px;
          border: 4px solid #c0c0c0;
          border-radius: 12px 12px 0 0;
          background: linear-gradient(135deg, #e0e0e0, #c0c0c0);
          z-index: 10;
          box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
        }
        .paper-clip-large::after {
          content: '';
          position: absolute;
          top: 10px;
          left: 4px;
          width: 24px;
          height: 12px;
          border: 3px solid #a0a0a0;
          border-radius: 0 0 6px 6px;
        }

        /* Business cards */
        .business-card {
          position: relative;
          display: block;
        }

        .business-card-shadow {
          position: absolute;
          inset: 0;
          background: rgba(139, 69, 19, 0.2);
          transform: translate(3px, 3px);
          z-index: -1;
          border: 2px solid transparent;
        }

        /* Paper strip */
        .paper-strip {
          background: linear-gradient(135deg, #faf7f0 0%, #f5f1e8 100%);
          background-image: 
            linear-gradient(90deg, rgba(139, 69, 19, 0.06) 1px, transparent 1px);
          background-size: 30px 30px;
          border: 3px solid rgba(139, 69, 19, 0.2);
          border-left: none;
          border-right: none;
          box-shadow: 
            inset 0 4px 8px rgba(139, 69, 19, 0.1),
            0 2px 4px rgba(139, 69, 19, 0.1);
          
          /* Torn edges */
          -webkit-mask-image: 
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,5 Q5,0 10,8 Q15,15 20,3 Q25,0 30,10 Q35,18 40,5 Q45,0 50,12 Q55,20 60,4 Q65,0 70,15 Q75,18 80,6 Q85,0 90,11 Q95,16 100,8 L100,92 Q95,84 90,89 Q85,100 80,94 Q75,82 70,85 Q65,100 60,96 Q55,80 50,88 Q45,100 40,95 Q35,82 30,90 Q25,100 20,97 Q15,85 10,92 Q5,100 0,95 Z' fill='white'/%3E%3C/svg%3E");
          mask-image: 
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,5 Q5,0 10,8 Q15,15 20,3 Q25,0 30,10 Q35,18 40,5 Q45,0 50,12 Q55,20 60,4 Q65,0 70,15 Q75,18 80,6 Q85,0 90,11 Q95,16 100,8 L100,92 Q95,84 90,89 Q85,100 80,94 Q75,82 70,85 Q65,100 60,96 Q55,80 50,88 Q45,100 40,95 Q35,82 30,90 Q25,100 20,97 Q15,85 10,92 Q5,100 0,95 Z' fill='white'/%3E%3C/svg%3E");
        }

        /* Water stain */
        .water-stain {
          position: absolute;
          bottom: 10px;
          left: 60px;
          width: 60px;
          height: 30px;
          background: radial-gradient(ellipse, rgba(139, 69, 19, 0.08) 0%, rgba(139, 69, 19, 0.03) 60%, transparent 80%);
          border-radius: 50% 80% 40% 60%;
          transform: rotate(-15deg);
        }

        /* Pen marks */
        .pen-marks {
          position: absolute;
          top: 20px;
          right: 80px;
          width: 40px;
          height: 2px;
          background: rgba(29, 78, 216, 0.3);
          border-radius: 1px;
          transform: rotate(5deg);
        }
        .pen-marks::before {
          content: '';
          position: absolute;
          top: 8px;
          left: -5px;
          width: 30px;
          height: 2px;
          background: rgba(29, 78, 216, 0.2);
          border-radius: 1px;
          transform: rotate(-3deg);
        }

        /* Handwriting font */
        .handwriting-font {
          font-family: 'Brush Script MT', cursive;
          text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.1);
        }

        /* Paper texture */
        .paper-texture {
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(139, 69, 19, 0.15) 1px, transparent 1px);
          background-size: 10px 10px;
          filter: contrast(1.1) brightness(0.98);
        }

        /* Small paper input */
        .paper-input-small {
          background: #fefcf0;
          border: 2px solid rgba(139, 69, 19, 0.3);
          border-bottom: 3px solid #d4af37;
          background-image: linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px);
          background-size: 100% 18px;
          color: #8b4513;
          font-weight: 500;
          padding: 8px 12px;
          font-size: 14px;
        }
        .paper-input-small:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
        }

        /* Small paper button */
        .paper-button-small {
          background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          border: 2px solid #8b4513;
          color: white;
          font-weight: bold;
          padding: 8px 16px;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
        }
        .paper-button-small:hover {
          background: linear-gradient(135deg, #b8860b 0%, #8b4513 100%);
          transform: translateY(-1px);
          box-shadow: 3px 3px 6px rgba(139, 69, 19, 0.4);
        }

        /* Ink signature */
        .ink-signature {
          position: relative;
        }
        .ink-signature::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 80px;
          height: 2px;
          background: rgba(29, 78, 216, 0.4);
          border-radius: 1px;
          transform: rotate(-1deg);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
