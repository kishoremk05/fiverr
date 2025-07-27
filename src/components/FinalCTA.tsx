import React, { useState, useEffect } from 'react';
import { ArrowRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This newsletter completely changed how I think about business. The practical advice and real case studies gave me the confidence to finally launch my idea. Now I'm at $15k MRR!",
    author: "Jessica Davis",
    role: "SaaS Founder",
    initials: "JD",
    featured: true
  },
  {
    quote: "The frameworks shared here saved me months of trial and error. I went from idea to first paying customer in 6 weeks using their exact playbook.",
    author: "Marcus Chen",
    role: "E-commerce Entrepreneur", 
    initials: "MC",
    featured: false
  },
  {
    quote: "Finally, business advice that actually works in the real world. No fluff, just actionable strategies from people who've done it.",
    author: "Sarah Williams",
    role: "Agency Owner",
    initials: "SW", 
    featured: true
  }
];

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (email.trim()) {
      console.log('Email submitted:', email);
      setEmail('');
      alert('Welcome to the community! Check your email for your welcome gift 🎁');
    }
  };

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

        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20rem] font-black text-gray-50 leading-none tracking-tighter select-none opacity-30 transform rotate-3">
            JOIN
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`space-y-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Testimonial Section */}
          <div className="relative">
            <div className="bg-white border-2 border-gray-200 p-12 relative overflow-hidden group hover:border-black transition-all duration-500">
              {/* Featured Badge */}
              {testimonials[currentTestimonial].featured && (
                <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-bold tracking-wider">
                  FEATURED
                </div>
              )}

              {/* Quote Icon */}
              <div className="w-16 h-16 border-2 border-gray-300 flex items-center justify-center mb-8 group-hover:border-black group-hover:bg-black transition-all duration-300">
                <Quote className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Quote */}
              <blockquote className="text-2xl font-light text-gray-900 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-xl font-black tracking-wider">
                  {testimonials[currentTestimonial].initials}
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900 tracking-tight">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
                <div className="flex space-x-1 ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-black fill-current" />
                  ))}
                </div>
              </div>

              {/* Sliding Bottom Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-black transform scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main CTA Content */}
          <div className="text-center space-y-12">
            {/* Brutalist Typography Header */}
            <div className="relative">
              <h2 className="text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tighter mb-6">
                DON'T BUILD
                <br />
                <span className="relative">
                  ALONE
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-black transform skew-x-12"></div>
                </span>
              </h2>
              <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Join the architects of tomorrow's business landscape. Get the blueprints that actually work.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">25,000+</div>
                <div className="text-gray-600 font-medium tracking-wider">ENTREPRENEURS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">$2.3M+</div>
                <div className="text-gray-600 font-medium tracking-wider">REVENUE GENERATED</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
                <div className="text-gray-600 font-medium tracking-wider">SUCCESS RATE</div>
              </div>
            </div>

            {/* Email Form */}
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL ADDRESS"
                    className="md:col-span-2 px-6 py-4 border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none font-medium tracking-wider text-sm"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white font-bold tracking-wider text-sm py-4 px-6 hover:bg-gray-800 transition-colors duration-200 group"
                  >
                    START GROWING
                    <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="font-medium tracking-wider">FREE FOREVER</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="font-medium tracking-wider">NO SPAM POLICY</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="font-medium tracking-wider">UNSUBSCRIBE ANYTIME</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center relative">
            <div className="absolute top-0 left-1/2 w-24 h-px bg-black transform -translate-x-1/2"></div>
            <div className="pt-12">
              <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                IMMEDIATE ACCESS
              </h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Get your welcome package with our most popular frameworks and case studies
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="text-gray-700">The $100K Revenue Blueprint</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="text-gray-700">Weekly Strategy Sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="text-gray-700">Exclusive Case Studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="text-gray-700">Private Community Access</span>
                </div>
              </div>
            </div>
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
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;