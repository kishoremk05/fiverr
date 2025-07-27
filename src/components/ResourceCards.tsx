import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  PencilRuler,
  Compass,
  Newspaper,
  Bug,
  X,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  FileText,
  Play,
  BookOpen,
  Target,
  Zap,
  DollarSign,
  Calendar,
  Award,
  Share2,
  Code,
  Briefcase,
  Globe,
  BarChart,
  Shield,
  Lightbulb,
  Rocket,
  Heart,
  MessageSquare,
  Cpu,
  Layers,
  Settings,
  Database,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Bookmark,
  Plus,
  Home,
  Menu,
  Flame,
  Timer,
  Hash,
  ChevronRight,
  Tag,
  Gift,
  Sparkles,
  ArrowUp,
} from "lucide-react";

// Define the Resource interface (ensure this is consistent across your project)
interface Resource {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  featured: boolean;
  rating: number;
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  lastUpdated: string;
  tags: string[];
  image: string; // Ensure this property exists and has a URL for cards to show up
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    keyTakeaways: string[];
    actionSteps: string[];
    resources: string[];
  };
  relatedTopics: string[];
}

// Dummy data (Make sure this data is available. Ideally, fetch from an API or central store.)
// For this example, I'm including the data directly. In a larger app, you might put this in a separate `data.ts` file.
const resources: Resource[] = [
  {
    id: "1",
    icon: Lightbulb,
    title: "AI-Powered Business Growth Playbook",
    description:
      "Master the art of leveraging artificial intelligence to scale your business operations and drive unprecedented growth.",
    shortDescription:
      "Transform your business with AI tools and strategies that deliver measurable results.",
    category: "PLAYBOOKS",
    featured: true,
    rating: 4.9,
    estimatedTime: "45 mins",
    difficulty: "Advanced",
    lastUpdated: "2 days ago",
    tags: ["AI", "Growth", "Automation", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    content: {
      introduction:
        "Navigate the AI revolution with confidence. This comprehensive playbook reveals the exact strategies and tools used by industry leaders to harness AI for exponential business growth.",
      sections: [
        {
          title: "AI Foundations for Business Leaders",
          content:
            "Understanding AI capabilities, limitations, and strategic applications. Learn how machine learning, natural language processing, and computer vision can transform your operations. This section provides a non-technical overview of AI technologies and their business implications, helping you make informed decisions about AI adoption.",
        },
        {
          title: "Essential AI Tools and Platforms",
          content:
            "Comprehensive review of the top AI platforms including OpenAI, Google Cloud AI, Microsoft Azure AI, and specialized business tools. Each tool is analyzed for cost-effectiveness, ease of implementation, and ROI potential. Includes detailed comparison matrices and real-world case studies.",
        },
        {
          title: "Implementation Roadmap",
          content:
            "Step-by-step guide to AI adoption, from initial assessment to full deployment. Covers data preparation, model selection, integration strategies, and change management. Includes timelines, budget considerations, and risk mitigation strategies for successful AI implementation.",
        },
      ],
      keyTakeaways: [
        "AI adoption can increase operational efficiency by up to 40%",
        "Strategic AI implementation requires careful planning and phased rollout",
        "Data quality is crucial for successful AI outcomes",
        "Employee training and change management are critical success factors",
      ],
      actionSteps: [
        "Conduct AI readiness assessment for your organization",
        "Identify high-impact use cases for AI implementation",
        "Select pilot project with clear success metrics",
        "Develop comprehensive AI strategy and roadmap",
      ],
      resources: [
        "AI Business Strategy Guide - McKinsey",
        "Google AI for Everyone Course",
        "Harvard Business Review AI Collection",
      ],
    },
    relatedTopics: ["Digital Transformation", "Automation", "Data Analytics"],
  },
  {
    id: "2",
    icon: Rocket,
    title: "Startup Marketing Mastery Kit",
    description:
      "Complete marketing framework designed specifically for startups to achieve rapid, sustainable growth on limited budgets.",
    shortDescription:
      "Proven marketing strategies that turn startups into market leaders without breaking the bank.",
    category: "STARTER KITS",
    featured: true,
    rating: 4.8,
    estimatedTime: "60 mins",
    difficulty: "Beginner",
    lastUpdated: "1 week ago",
    tags: ["Marketing", "Startups", "Growth Hacking", "Branding"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    content: {
      introduction:
        "Transform your startup into a marketing powerhouse. This comprehensive kit provides battle-tested strategies, templates, and tools used by successful startups to achieve explosive growth.",
      sections: [
        {
          title: "Brand Foundation Blueprint",
          content:
            "Create a compelling brand identity that resonates with your target audience. Includes brand positioning frameworks, messaging templates, and visual identity guidelines. Learn how to differentiate your startup in crowded markets and build authentic connections with customers.",
        },
        {
          title: "Digital Marketing Playbook",
          content:
            "Master the essential digital channels: SEO, content marketing, social media, email marketing, and paid advertising. Each channel includes specific tactics, budget allocation strategies, and performance metrics. Focus on channels that deliver the highest ROI for your specific industry.",
        },
        {
          title: "Growth Hacking Techniques",
          content:
            "Innovative, low-cost marketing tactics that drive rapid user acquisition and engagement. Includes viral marketing strategies, referral programs, partnerships, and community building. Real examples from successful startups and step-by-step implementation guides.",
        },
      ],
      keyTakeaways: [
        "Clear brand positioning is the foundation of effective marketing",
        "Focus on 2-3 marketing channels initially for maximum impact",
        "Data-driven optimization is key to sustainable growth",
        "Community building creates long-term competitive advantages",
      ],
      actionSteps: [
        "Define your unique value proposition and target audience",
        "Create comprehensive brand guidelines and messaging",
        "Set up analytics and tracking for all marketing channels",
        "Launch content marketing strategy with consistent publishing schedule",
      ],
      resources: [
        "Startup Marketing Playbook - First Round",
        "Growth Hacking Handbook - Sean Ellis",
        "Content Marketing Institute Resources",
      ],
    },
    relatedTopics: [
      "Brand Building",
      "Digital Marketing",
      "Customer Acquisition",
    ],
  },
  {
    id: "3",
    icon: Shield,
    title: "SME Cybersecurity Essentials",
    description:
      "Comprehensive security framework to protect your small-medium enterprise from cyber threats and data breaches.",
    shortDescription:
      "Essential cybersecurity measures every SME needs to implement for complete digital protection.",
    category: "CHECKLISTS",
    featured: false,
    rating: 4.7,
    estimatedTime: "30 mins",
    difficulty: "Intermediate",
    lastUpdated: "3 days ago",
    tags: ["Cybersecurity", "Risk Management", "Compliance", "Data Protection"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    content: {
      introduction:
        "Protect your business from cyber threats with this comprehensive security framework. Designed specifically for SMEs, this guide provides practical, cost-effective security measures.",
      sections: [
        {
          title: "Threat Landscape Assessment",
          content:
            "Understanding the current cyber threat environment for SMEs. Common attack vectors including phishing, ransomware, and social engineering. Risk assessment methodologies to identify your unique vulnerabilities and prioritize security investments.",
        },
        {
          title: "Essential Security Controls",
          content:
            "Implementation guide for fundamental security measures: multi-factor authentication, endpoint protection, network security, and access controls. Step-by-step setup instructions for each control with recommended tools and configurations.",
        },
        {
          title: "Incident Response Planning",
          content:
            "Creating a comprehensive incident response plan including detection, containment, investigation, and recovery procedures. Templates for communication plans, legal considerations, and business continuity during security incidents.",
        },
      ],
      keyTakeaways: [
        "Human error is the leading cause of security breaches",
        "Regular security training reduces risk by up to 70%",
        "Incident response planning minimizes damage and downtime",
        "Compliance requirements vary by industry and region",
      ],
      actionSteps: [
        "Conduct comprehensive security risk assessment",
        "Implement multi-factor authentication across all systems",
        "Establish regular backup and recovery procedures",
        "Create employee security awareness training program",
      ],
      resources: [
        "NIST Cybersecurity Framework",
        "CISA Small Business Resources",
        "ISO 27001 Implementation Guide",
      ],
    },
    relatedTopics: ["Risk Management", "Compliance", "Business Continuity"],
  },
  {
    id: "4",
    icon: Globe,
    title: "Global E-commerce Expansion Blueprint",
    description:
      "Strategic framework for successfully launching and scaling your e-commerce business in international markets.",
    shortDescription:
      "Navigate international expansion with proven strategies for cross-border e-commerce success.",
    category: "BLUEPRINTS",
    featured: true,
    rating: 4.6,
    estimatedTime: "90 mins",
    difficulty: "Advanced",
    lastUpdated: "5 days ago",
    tags: ["E-commerce", "International Business", "Logistics", "Localization"],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    content: {
      introduction:
        "Expand your e-commerce reach globally with this comprehensive blueprint. Learn the strategies, tools, and frameworks used by successful international e-commerce companies.",
      sections: [
        {
          title: "Market Research and Entry Strategy",
          content:
            "Comprehensive methodology for international market research including demand analysis, competitive landscape assessment, and cultural considerations. Framework for selecting target markets and developing market entry strategies tailored to local conditions.",
        },
        {
          title: "Localization and Customer Experience",
          content:
            "Complete guide to product localization, website translation, payment methods, and customer service adaptation. Strategies for building trust with international customers and managing cultural differences in business practices.",
        },
        {
          title: "International Logistics and Operations",
          content:
            "Mastering cross-border shipping, customs regulations, warehousing strategies, and returns management. Detailed analysis of fulfillment options including local partnerships, third-party logistics, and direct shipping models.",
        },
      ],
      keyTakeaways: [
        "Market research is critical for successful international expansion",
        "Localization goes beyond translation to cultural adaptation",
        "Logistics complexity requires careful planning and partnerships",
        "Compliance with local regulations is non-negotiable",
      ],
      actionSteps: [
        "Conduct thorough market research for target countries",
        "Develop comprehensive localization strategy",
        "Establish relationships with local logistics partners",
        "Create compliance framework for target markets",
      ],
      resources: [
        "International Trade Administration Guide",
        "Shopify International Expansion Toolkit",
        "World Bank Trade Facilitation Resources",
      ],
    },
    relatedTopics: ["International Trade", "Market Expansion", "Supply Chain"],
  },
  {
    id: "5",
    icon: BarChart,
    title: "Data-Driven Decision Making Framework",
    description:
      "Transform raw data into strategic insights with this comprehensive framework for data-driven business decisions.",
    shortDescription:
      "Master the art of turning data into actionable business intelligence and strategic advantages.",
    category: "FRAMEWORKS",
    featured: false,
    rating: 4.8,
    estimatedTime: "75 mins",
    difficulty: "Intermediate",
    lastUpdated: "1 week ago",
    tags: ["Data Analytics", "Business Intelligence", "Strategy", "KPIs"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    content: {
      introduction:
        "Harness the power of data to drive strategic business decisions. This framework provides practical tools and methodologies for implementing data-driven decision making across your organization.",
      sections: [
        {
          title: "Data Strategy and Infrastructure",
          content:
            "Building a robust data foundation including data collection strategies, storage solutions, and governance frameworks. Guide to selecting appropriate tools and technologies for your specific business needs and budget constraints.",
        },
        {
          title: "Analytics and Insights Generation",
          content:
            "Comprehensive guide to data analysis techniques, visualization strategies, and insight generation methodologies. Includes practical examples of statistical analysis, predictive modeling, and business intelligence reporting.",
        },
        {
          title: "Decision Implementation and Optimization",
          content:
            "Framework for translating data insights into actionable business strategies. Includes change management strategies, performance monitoring, and continuous optimization processes to ensure data-driven decisions deliver expected results.",
        },
      ],
      keyTakeaways: [
        "Data quality is more important than data quantity",
        "Visual storytelling makes complex data accessible",
        "Predictive analytics provides competitive advantages",
        "Cultural change is required for data-driven organizations",
      ],
      actionSteps: [
        "Audit current data collection and analysis capabilities",
        "Implement comprehensive data governance framework",
        "Train team on data analysis and visualization tools",
        "Establish regular data review and decision-making processes",
      ],
      resources: [
        "MIT Data Science Methodology",
        "Tableau Data Visualization Best Practices",
        "Google Analytics Academy",
      ],
    },
    relatedTopics: [
      "Business Intelligence",
      "Strategic Planning",
      "Performance Management",
    ],
  },
  {
    id: "6",
    icon: Award,
    title: "High-Performance Sales Team Builder",
    description:
      "Complete system for recruiting, training, and managing a sales team that consistently exceeds targets.",
    shortDescription:
      "Build and lead a world-class sales organization that drives consistent revenue growth.",
    category: "SYSTEMS",
    featured: true,
    rating: 4.9,
    estimatedTime: "120 mins",
    difficulty: "Advanced",
    lastUpdated: "yesterday",
    tags: ["Sales", "Team Building", "Leadership", "Performance"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    content: {
      introduction:
        "Build a sales organization that consistently delivers exceptional results. This comprehensive system covers every aspect of sales team development from recruitment to performance optimization.",
      sections: [
        {
          title: "Strategic Sales Recruitment",
          content:
            "Advanced recruitment strategies for identifying and attracting top sales talent. Includes competency frameworks, interview methodologies, and assessment tools to ensure you hire salespeople who will thrive in your specific environment.",
        },
        {
          title: "Sales Training and Development",
          content:
            "Comprehensive training programs covering product knowledge, sales methodologies, objection handling, and advanced closing techniques. Includes ongoing coaching frameworks and skill development pathways for continuous improvement.",
        },
        {
          title: "Performance Management and Motivation",
          content:
            "Systems for tracking, measuring, and optimizing sales performance. Includes compensation design, incentive programs, and motivation techniques that drive consistent high performance and team retention.",
        },
      ],
      keyTakeaways: [
        "Right recruitment saves training time and improves results",
        "Continuous coaching is more effective than periodic training",
        "Data-driven performance management improves outcomes",
        "Motivation requires both financial and non-financial incentives",
      ],
      actionSteps: [
        "Define ideal sales candidate profile and competencies",
        "Implement structured sales training and onboarding program",
        "Establish regular coaching and performance review processes",
        "Design comprehensive compensation and incentive structure",
      ],
      resources: [
        "Challenger Sale Methodology",
        "Sales Management Best Practices - Salesforce",
        "HubSpot Sales Training Resources",
      ],
    },
    relatedTopics: ["Sales Strategy", "Team Management", "Revenue Growth"],
  },
];

// Helper function for difficulty color (re-used from previous code)
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "text-emerald-700 bg-emerald-100 border-emerald-300";
    case "Intermediate":
      return "text-amber-700 bg-amber-100 border-amber-300";
    case "Advanced":
      return "text-red-700 bg-red-100 border-red-300";
    default:
      return "text-gray-700 bg-gray-100 border-gray-300";
  }
};

// Global styles (These should ideally be in your global CSS or a dedicated styles file)
// Including them here for completeness so the component looks correct on its own.
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
    color: #1f2937;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  .paper-texture {
    background-image:
      radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 2%),
      radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 1%, transparent 1%);
    background-size: 100px 100px;
  }

  .paper-card {
    background: linear-gradient(135deg, #fffbeb 0%, #fef7e0 100%);
    border: 2px solid #fbbf24;
    border-radius: 16px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Added transition for hover-lift */
  }

  .paper-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 1px, transparent 1px),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 1px, transparent 1px);
    background-size: 30px 30px;
    pointer-events: none;
    opacity: 0.6;
  }

  .paper-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
    border-color: #f59e0b;
  }

  .gradient-text {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-pattern {
    background-image:
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2%, transparent 2%),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1%, transparent 1%);
    background-size: 60px 60px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-delay-200 { animation-delay: 0.2s; }
  .animate-delay-400 { animation-delay: 0.4s; }
  .animate-delay-600 { animation-delay: 0.6s; }

  .mobile-optimized {
    @media (max-width: 768px) {
      padding: 1rem !important;
      font-size: 0.9rem !important;
    }
  }

  .hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover-lift:hover {
    transform: translateY(-8px) scale(1.02);
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ResourceCards: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(resources.map((r) => r.category))),
  ];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "All" ||
      resource.difficulty === selectedDifficulty;
    const hasImage = !!resource.image; // Ensure the resource has an image

    return matchesSearch && matchesCategory && matchesDifficulty && hasImage;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
  };

  // Function to handle clicking on a resource card
  const handleCardClick = (resourceId: string) => {
    navigate(`/resource/${resourceId}`); // Navigate to the detailed resource page
  };

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen"
      id="resources"
    >
      <style>{globalStyles}</style>{" "}
      {/* Apply global styles within the component */}
      <div className="max-w-7xl mx-auto">
        {/* Header (can be kept in App.tsx if it's universal) */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Free Business Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to scale your business - completely free. Click
            to read and implement.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="paper-card p-6 mb-12 mobile-optimized">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-amber-200 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white rounded-xl border-2 border-amber-200 text-gray-700 font-medium focus:ring-amber-500 focus:border-amber-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-6 py-3 bg-white rounded-xl border-2 border-amber-200 text-gray-700 font-medium focus:ring-amber-500 focus:border-amber-500"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </div>

          {(searchTerm ||
            selectedCategory !== "All" ||
            selectedDifficulty !== "All") && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {filteredResources.length} resources found
              </span>
              <button
                onClick={clearFilters}
                className="text-sm text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center space-x-1"
              >
                <X className="w-4 h-4" />
                <span>Clear Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Resources Grid - Only posts with images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              onClick={() => handleCardClick(resource.id)} // Call the new handler
              className="paper-card cursor-pointer hover-lift group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={resource.image} // Displays the image
                  alt={resource.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    {resource.category.replace("_", " ")}
                  </span>
                </div>
                {resource.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Flame className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{resource.estimatedTime}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-5 h-5 text-white" />
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${getDifficultyColor(
                      resource.difficulty
                    )}`}
                  >
                    {resource.difficulty}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200 line-clamp-2">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {resource.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {resource.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                  <span className="text-sm text-gray-500">
                    {resource.lastUpdated}
                  </span>
                  <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No resources found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all resources.
            </p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceCards;
