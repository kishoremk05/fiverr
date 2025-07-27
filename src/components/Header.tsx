import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  PenTool,
  Home,
  Database,
  BookOpen,
  User,
  Search,
  Bell,
} from "lucide-react";

const PaperThemedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-amber-50/95 backdrop-blur-md border-b-2 border-amber-200 shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139,117,91,0.15) 1px, transparent 0),
            linear-gradient(45deg, transparent 40%, rgba(139,117,91,0.05) 50%, transparent 60%)
          `,
            backgroundSize: "20px 20px, 40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative paper clips */}
      <div className="absolute top-2 right-20 w-4 h-4 border-2 border-gray-400 rounded-full bg-gray-100 shadow-sm opacity-60"></div>
      <div className="absolute top-4 right-32 w-3 h-3 border-2 border-blue-400 rounded-full bg-blue-100 shadow-sm opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Handwritten-style Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative transform rotate-1">
              <div className="w-12 h-12 bg-amber-100 border-2 border-amber-300 flex items-center justify-center relative shadow-md">
                <PenTool className="w-6 h-6 text-amber-700" />
                {/* Paper corner fold */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-amber-200 border-l border-b border-amber-300 transform rotate-45 translate-x-1.5 -translate-y-1.5"></div>
              </div>
            </div>
            <div className="flex flex-col transform -rotate-0.5">
              <span
                className="text-2xl font-bold text-slate-800 tracking-tight leading-none"
                style={{ fontFamily: "'Kalam', cursive" }}
              >
                Business
              </span>
              <span
                className="text-sm font-medium text-amber-600 tracking-wide"
                style={{ fontFamily: "'Kalam', cursive" }}
              >
                GROW
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {[
              { name: "HOME", icon: null },
              { name: "ARTICLES", icon: null },
              { name: "RESOURCES", icon: null },
              { name: "ABOUT", icon: null },
            ].map((item, index) => (
              <a
                key={item.name}
                href={
                  item.name === "HOME" ? "#" : `#${item.name.toLowerCase()}`
                }
                className="group relative py-2 px-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-2">
                  <span
                    className="text-[15px] tracking-wide font-semibold text-slate-800 group-hover:text-amber-700 transition-colors duration-300"
                    style={{
                      fontFamily: `'DM Sans', 'Kalam', cursive`,
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </span>
                </div>

                {/* Hand-drawn underline */}
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"
                  style={{
                    background: `linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)`,
                  }}
                ></div>

                {/* Paper corner accent */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45"></div>
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              className="relative group p-2 bg-white   hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 shadow-sm transform rotate-0.5 hover:rotate-0"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-4 h-4 text-slate-600 group-hover:text-amber-600" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45 translate-x-1 -translate-y-1"></div>
            </button>

            {/* Sign In Button */}

            <button className="group relative py-2 px-4 bg-white border-2 border-slate-300 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 shadow-sm transform -rotate-0.5 hover:rotate-0">
              <div className="flex items-center space-x-2">
                <span
                  className="text-sm font-medium text-slate-700 group-hover:text-amber-700"
                  style={{ fontFamily: "'Kalam', cursive" }}
                >
                  Sign In
                </span>
              </div>
              {/* Paper corner fold */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-amber-200 border-l border-b border-amber-300 transform rotate-45 translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Subscribe Button */}
            <button className="group relative py-2 px-4 bg-amber-100 border-2 border-amber-300 hover:bg-amber-200 hover:border-amber-400 transition-all duration-300 shadow-md transform rotate-1 hover:rotate-0">
              <div className="flex items-center space-x-2">
                <span
                  className="text-sm font-medium text-amber-800 group-hover:text-amber-900"
                  style={{ fontFamily: "'Kalam', cursive" }}
                >
                  Subscribe
                </span>
              </div>
              {/* Highlight effect */}
              <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform rotate-45"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-12 h-12 bg-white border-2 border-slate-300 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 group shadow-sm transform rotate-0.5 hover:rotate-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {isMenuOpen ? (
                <X
                  size={18}
                  className="transition-transform duration-300 text-slate-600"
                />
              ) : (
                <Menu
                  size={18}
                  className="transition-transform duration-300 text-slate-600"
                />
              )}
            </div>
            {/* Paper hole decoration */}
            <div className="absolute top-1 left-1 w-2 h-2 border border-gray-300 rounded-full bg-white"></div>
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <div
          className={`hidden lg:block overflow-hidden transition-all duration-500 ${
            searchOpen ? "max-h-20 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles, resources..."
              className="w-full px-4 py-3 bg-white border-2 border-amber-200 focus:border-amber-400 focus:outline-none transition-colors duration-300 shadow-inner"
              style={{ fontFamily: "'Kalam', cursive" }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-amber-500" />
            </div>
            {/* Paper texture in search bar */}
            <div
              className="mb-6 absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 117, 91, 0.2) 1px, transparent 0)`,
                backgroundSize: "15px 15px",
              }}
            ></div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t-2 border-amber-200 py-6 bg-white/80 backdrop-blur-sm">
            {/* Notebook lines background */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(transparent, transparent 23px, #e2e8f0 23px, #e2e8f0 25px)`,
                backgroundSize: "100% 25px",
              }}
            ></div>

            {/* Red margin line */}
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-300 opacity-50"></div>

            <nav className="flex flex-col space-y-4 relative z-10 pl-16 pr-6">
              {[
                { name: "HOME", icon: Home },
                { name: "ARTICLES", icon: BookOpen },
                { name: "RESOURCES", icon: Database },
                { name: "ABOUT", icon: User },
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={
                    item.name === "HOME" ? "#" : `#${item.name.toLowerCase()}`
                  }
                  className="group flex items-center justify-between py-2 hover:bg-amber-50/50 transition-all duration-300 px-2 -mx-2 rounded"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && (
                      <item.icon className="w-4 h-4 text-amber-600" />
                    )}
                    <span
                      className="text-lg font-medium text-slate-700 group-hover:text-amber-700 transition-colors duration-300"
                      style={{ fontFamily: "'Kalam', cursive" }}
                    >
                      {item.name}
                    </span>
                  </div>
                  {/* Bullet point */}
                  <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:bg-amber-500 transition-colors duration-300"></div>
                </a>
              ))}

              {/* Mobile Action Buttons */}
              <div className="border-t border-amber-200 pt-4 mt-4 space-y-3">
                <button className="w-full flex items-center justify-between py-2 px-2 hover:bg-amber-50/50 transition-all duration-300 rounded">
                  <div className="flex items-center space-x-3">
                    <Search className="w-4 h-4 text-amber-600" />
                    <span
                      className="text-lg font-medium text-slate-700"
                      style={{ fontFamily: "'Kalam', cursive" }}
                    >
                      Search
                    </span>
                  </div>
                </button>

                <button className="w-full flex items-center justify-between py-2 px-2 bg-amber-100/50 hover:bg-amber-100 transition-all duration-300 rounded border border-amber-200">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-4 h-4 text-amber-700" />
                    <span
                      className="text-lg font-medium text-amber-800"
                      style={{ fontFamily: "'Kalam', cursive" }}
                    >
                      Subscribe
                    </span>
                  </div>
                </button>
              </div>
            </nav>

            {/* Decorative doodles */}
            <div className="absolute bottom-4 right-6 opacity-30">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 border border-slate-400 rounded-full"
                    style={{
                      animationDelay: `${i * 200}ms`,
                      animation: "fadeIn 1s ease-out forwards",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hand-drawn bottom border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-1000 ${
          isScrolled ? "scale-x-100" : "scale-x-0"
        }`}
        style={{
          background: `linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)`,
          opacity: 0.6,
        }}
      ></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes chainSway {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(1px) rotate(1deg); }
          50% { transform: translateX(0) rotate(0deg); }
          75% { transform: translateX(-1px) rotate(-1deg); }
        }
        
        @keyframes boardSway {
          0%, 100% { transform: rotate(1deg); }
          25% { transform: rotate(3deg); }
          50% { transform: rotate(-1deg); }
          75% { transform: rotate(-2deg); }
        }
      `}</style>
    </header>
  );
};

export default PaperThemedHeader;
