import React, { useState, useEffect } from "react";
import { Search, Mail, Star, CheckCircle } from "lucide-react";

interface TypewriterTextProps {
  words: string[];
  pauseDelay: number;
}

const TypewriterText = ({ words, pauseDelay }: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseDelay);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, pauseDelay]);

  return <span>{currentText}</span>;
};

const WhyWeBuyHeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .testimonial-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 20px;
          font-size: 60px;
          color: #6366f1;
          opacity: 0.3;
          font-weight: bold;
        }

        .highlight-number {
          background: #ffff00;
          color: #000;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: bold;
        }

        .profile-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .small-profile {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px solid #fff;
          margin-left: -10px;
          transition: transform 0.2s ease;
        }

        .small-profile:first-child {
          margin-left: 0;
        }

        .small-profile:hover {
          transform: scale(1.1);
        }

        .hero-image {
          border-radius: 20px;
          border: 4px solid #6366f1;
          position: relative;
          max-width: 100%;
          height: auto;
        }

        .decorative-element {
          position: absolute;
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }

        .heart-icon {
          background: #ff4757;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
        }

        .nerd-icon {
          background: #ffa502;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .arrow-curved {
          stroke: #22c55e;
          stroke-width: 3;
          fill: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      <section className="bg-[#fff9ec] py-16 relative overflow-hidden font-poppins">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-center">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 flex flex-wrap justify-center items-center gap-3 text-center">
            <span className="text-amber-600 font-playfair">BUILD</span>
            <span
              className="text-orange-500 italic font-playfair"
              style={{ fontFamily: "cursive" }}
            >
              something
            </span>
            <span className="text-indigo-700 font-extrabold font-playfair">
              <TypewriterText
                words={["INSPIRING", "UNIQUE", "CREATIVE", "MAGICAL"]}
                pauseDelay={1200}
              />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tools, playbooks & community for creators who want to build{" "}
            <span className="font-semibold text-gray-800">
              faster, smarter, and more profitably
            </span>
            .
          </p>

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-2xl w-full mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Drop your email for creative updates..."
              className="flex-1 py-3 px-5 rounded-xl text-lg border-2 border-yellow-400 bg-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitted}
              className={`${
                isSubmitted
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-yellow-400 hover:bg-yellow-500"
              } text-white py-3 px-6 sm:px-8 rounded-xl font-semibold text-lg transition-colors shadow-md flex items-center gap-2`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  JOINED!
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  JOIN US
                </>
              )}
            </button>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
          <div className="absolute top-20 left-20 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-36 h-36 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-300 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-white py-16 overflow-hidden">
        {/* Yellow Semi-Circle Background */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[160vw] h-[90vw] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full z-0"></div>

        <div className="relative max-w-7xl mx-auto  px-4 sm:px-6 z-10">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-lg">
              💬 Our Website Guidance Results
            </h2>
            <div className="w-24 h-1 mx-auto bg-gray-800 mt-4 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto mt-5">
              Proof that the right guidance can turn your business idea into
              real results.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Column 1: 2 Large Reviews */}
            <div className="space-y-6">
              <div className="bg-white/90 border border-gray-200 rounded-3xl shadow-xl p-7 hover:shadow-2xl transition duration-300">
                <p className="text-xl text-gray-900 italic leading-relaxed mb-3">
                  <span className="text-2xl">🛠️</span> “The playbook showed me
                  exactly what steps to follow. I launched in 10 days and hit
                  ₹75K in month one.”
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  — Arvind M., Solo Founder
                </p>
              </div>

              <div className="bg-white/90 border border-gray-200 rounded-3xl shadow-xl p-7 hover:shadow-2xl transition duration-300">
                <p className="text-xl text-gray-900 italic leading-relaxed mb-3">
                  <span className="text-2xl">💡</span> “From confusion to
                  clarity. This platform helped me map out a service business
                  and get paying clients fast.”
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  — Swetha N., Consultant
                </p>
              </div>
            </div>

            {/* Column 2: 3 Small Reviews */}
            <div className="space-y-5">
              <div className="bg-white/80 rounded-2xl border border-gray-200 shadow p-6 hover:shadow-md transition">
                <p className="text-gray-800 italic text-base mb-1">
                  ⏳ “10 hours saved every week thanks to your automation
                  workflow.”
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  — Sanjana R.
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl border border-gray-200 shadow p-6 hover:shadow-md transition">
                <p className="text-gray-800 italic text-base mb-1">
                  🛍️ “Built my first digital shop in a weekend with your
                  templates.”
                </p>
                <p className="text-sm text-gray-600 font-medium">— Imran H.</p>
              </div>

              <div className="bg-white/80 rounded-2xl border border-gray-200 shadow p-6 hover:shadow-md transition">
                <p className="text-gray-800 italic text-base mb-1">
                  💸 “That one Airtable setup turned my niche idea into monthly
                  income.”
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  — Lavanya K.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyWeBuyHeroSection;
