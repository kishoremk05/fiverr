import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
} from 'lucide-react';

// Define the Resource interface (ensure this is consistent with your data)
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
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lastUpdated: string;
  tags: string[];
  image: string;
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

// Dummy data (you should import your actual 'resources' array from wherever it's defined, e.g., from BusinessResourceHub.tsx or a separate data file)
// For demonstration purposes, I'm including a simplified version of the dummy data here.
// In a real application, you would ideally fetch this data from an API or a shared context/module.
const resources: Resource[] = [
  {
    id: '1',
    icon: Lightbulb,
    title: 'AI-Powered Business Growth Playbook',
    description: 'Master the art of leveraging artificial intelligence to scale your business operations and drive unprecedented growth.',
    shortDescription: 'Transform your business with AI tools and strategies that deliver measurable results.',
    category: 'PLAYBOOKS',
    featured: true,
    rating: 4.9,
    estimatedTime: '45 mins',
    difficulty: 'Advanced',
    lastUpdated: '2 days ago',
    tags: ['AI', 'Growth', 'Automation', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    content: {
      introduction: 'Navigate the AI revolution with confidence. This comprehensive playbook reveals the exact strategies and tools used by industry leaders to harness AI for exponential business growth.',
      sections: [
        {
          title: 'AI Foundations for Business Leaders',
          content: 'Understanding AI capabilities, limitations, and strategic applications. Learn how machine learning, natural language processing, and computer vision can transform your operations. This section provides a non-technical overview of AI technologies and their business implications, helping you make informed decisions about AI adoption.',
        },
        {
          title: 'Essential AI Tools and Platforms',
          content: 'Comprehensive review of the top AI platforms including OpenAI, Google Cloud AI, Microsoft Azure AI, and specialized business tools. Each tool is analyzed for cost-effectiveness, ease of implementation, and ROI potential. Includes detailed comparison matrices and real-world case studies.',
        },
        {
          title: 'Implementation Roadmap',
          content: 'Step-by-step guide to AI adoption, from initial assessment to full deployment. Covers data preparation, model selection, integration strategies, and change management. Includes timelines, budget considerations, and risk mitigation strategies for successful AI implementation.',
        }
      ],
      keyTakeaways: [
        'AI adoption can increase operational efficiency by up to 40%',
        'Strategic AI implementation requires careful planning and phased rollout',
        'Data quality is crucial for successful AI outcomes',
        'Employee training and change management are critical success factors'
      ],
      actionSteps: [
        'Conduct AI readiness assessment for your organization',
        'Identify high-impact use cases for AI implementation',
        'Select pilot project with clear success metrics',
        'Develop comprehensive AI strategy and roadmap'
      ],
      resources: [
        'AI Business Strategy Guide - McKinsey',
        'Google AI for Everyone Course',
        'Harvard Business Review AI Collection'
      ]
    },
    relatedTopics: ['Digital Transformation', 'Automation', 'Data Analytics']
  },
  {
    id: '2',
    icon: Rocket,
    title: 'Startup Marketing Mastery Kit',
    description: 'Complete marketing framework designed specifically for startups to achieve rapid, sustainable growth on limited budgets.',
    shortDescription: 'Proven marketing strategies that turn startups into market leaders without breaking the bank.',
    category: 'STARTER KITS',
    featured: true,
    rating: 4.8,
    estimatedTime: '60 mins',
    difficulty: 'Beginner',
    lastUpdated: '1 week ago',
    tags: ['Marketing', 'Startups', 'Growth Hacking', 'Branding'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    content: {
      introduction: 'Transform your startup into a marketing powerhouse. This comprehensive kit provides battle-tested strategies, templates, and tools used by successful startups to achieve explosive growth.',
      sections: [
        {
          title: 'Brand Foundation Blueprint',
          content: 'Create a compelling brand identity that resonates with your target audience. Includes brand positioning frameworks, messaging templates, and visual identity guidelines. Learn how to differentiate your startup in crowded markets and build authentic connections with customers.',
        },
        {
          title: 'Digital Marketing Playbook',
          content: 'Master the essential digital channels: SEO, content marketing, social media, email marketing, and paid advertising. Each channel includes specific tactics, budget allocation strategies, and performance metrics. Focus on channels that deliver the highest ROI for your specific industry.',
        },
        {
          title: 'Growth Hacking Techniques',
          content: 'Innovative, low-cost marketing tactics that drive rapid user acquisition and engagement. Includes viral marketing strategies, referral programs, partnerships, and community building. Real examples from successful startups and step-by-step implementation guides.',
        }
      ],
      keyTakeaways: [
        'Clear brand positioning is the foundation of effective marketing',
        'Focus on 2-3 marketing channels initially for maximum impact',
        'Data-driven optimization is key to sustainable growth',
        'Community building creates long-term competitive advantages'
      ],
      actionSteps: [
        'Define your unique value proposition and target audience',
        'Create comprehensive brand guidelines and messaging',
        'Set up analytics and tracking for all marketing channels',
        'Launch content marketing strategy with consistent publishing schedule'
      ],
      resources: [
        'Startup Marketing Playbook - First Round',
        'Growth Hacking Handbook - Sean Ellis',
        'Content Marketing Institute Resources'
      ]
    },
    relatedTopics: ['Brand Building', 'Digital Marketing', 'Customer Acquisition']
  },
  {
    id: '3',
    icon: Shield,
    title: 'SME Cybersecurity Essentials',
    description: 'Comprehensive security framework to protect your small-medium enterprise from cyber threats and data breaches.',
    shortDescription: 'Essential cybersecurity measures every SME needs to implement for complete digital protection.',
    category: 'CHECKLISTS',
    featured: false,
    rating: 4.7,
    estimatedTime: '30 mins',
    difficulty: 'Intermediate',
    lastUpdated: '3 days ago',
    tags: ['Cybersecurity', 'Risk Management', 'Compliance', 'Data Protection'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    content: {
      introduction: 'Protect your business from cyber threats with this comprehensive security framework. Designed specifically for SMEs, this guide provides practical, cost-effective security measures.',
      sections: [
        {
          title: 'Threat Landscape Assessment',
          content: 'Understanding the current cyber threat environment for SMEs. Common attack vectors including phishing, ransomware, and social engineering. Risk assessment methodologies to identify your unique vulnerabilities and prioritize security investments.',
        },
        {
          title: 'Essential Security Controls',
          content: 'Implementation guide for fundamental security measures: multi-factor authentication, endpoint protection, network security, and access controls. Step-by-step setup instructions for each control with recommended tools and configurations.',
        },
        {
          title: 'Incident Response Planning',
          content: 'Creating a comprehensive incident response plan including detection, containment, investigation, and recovery procedures. Templates for communication plans, legal considerations, and business continuity during security incidents.',
        }
      ],
      keyTakeaways: [
        'Human error is the leading cause of security breaches',
        'Regular security training reduces risk by up to 70%',
        'Incident response planning minimizes damage and downtime',
        'Compliance requirements vary by industry and region'
      ],
      actionSteps: [
        'Conduct comprehensive security risk assessment',
        'Implement multi-factor authentication across all systems',
        'Establish regular backup and recovery procedures',
        'Create employee security awareness training program'
      ],
      resources: [
        'NIST Cybersecurity Framework',
        'CISA Small Business Resources',
        'ISO 27001 Implementation Guide'
      ]
    },
    relatedTopics: ['Risk Management', 'Compliance', 'Business Continuity']
  },
  {
    id: '4',
    icon: Globe,
    title: 'Global E-commerce Expansion Blueprint',
    description: 'Strategic framework for successfully launching and scaling your e-commerce business in international markets.',
    shortDescription: 'Navigate international expansion with proven strategies for cross-border e-commerce success.',
    category: 'BLUEPRINTS',
    featured: true,
    rating: 4.6,
    estimatedTime: '90 mins',
    difficulty: 'Advanced',
    lastUpdated: '5 days ago',
    tags: ['E-commerce', 'International Business', 'Logistics', 'Localization'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
    content: {
      introduction: 'Expand your e-commerce reach globally with this comprehensive blueprint. Learn the strategies, tools, and frameworks used by successful international e-commerce companies.',
      sections: [
        {
          title: 'Market Research and Entry Strategy',
          content: 'Comprehensive methodology for international market research including demand analysis, competitive landscape assessment, and cultural considerations. Framework for selecting target markets and developing market entry strategies tailored to local conditions.',
        },
        {
          title: 'Localization and Customer Experience',
          content: 'Complete guide to product localization, website translation, payment methods, and customer service adaptation. Strategies for building trust with international customers and managing cultural differences in business practices.',
        },
        {
          title: 'International Logistics and Operations',
          content: 'Mastering cross-border shipping, customs regulations, warehousing strategies, and returns management. Detailed analysis of fulfillment options including local partnerships, third-party logistics, and direct shipping models.',
        }
      ],
      keyTakeaways: [
        'Market research is critical for successful international expansion',
        'Localization goes beyond translation to cultural adaptation',
        'Logistics complexity requires careful planning and partnerships',
        'Compliance with local regulations is non-negotiable'
      ],
      actionSteps: [
        'Conduct thorough market research for target countries',
        'Develop comprehensive localization strategy',
        'Establish relationships with local logistics partners',
        'Create compliance framework for target markets'
      ],
      resources: [
        'International Trade Administration Guide',
        'Shopify International Expansion Toolkit',
        'World Bank Trade Facilitation Resources'
      ]
    },
    relatedTopics: ['International Trade', 'Market Expansion', 'Supply Chain']
  },
  {
    id: '5',
    icon: BarChart,
    title: 'Data-Driven Decision Making Framework',
    description: 'Transform raw data into strategic insights with this comprehensive framework for data-driven business decisions.',
    shortDescription: 'Master the art of turning data into actionable business intelligence and strategic advantages.',
    category: 'FRAMEWORKS',
    featured: false,
    rating: 4.8,
    estimatedTime: '75 mins',
    difficulty: 'Intermediate',
    lastUpdated: '1 week ago',
    tags: ['Data Analytics', 'Business Intelligence', 'Strategy', 'KPIs'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    content: {
      introduction: 'Harness the power of data to drive strategic business decisions. This framework provides practical tools and methodologies for implementing data-driven decision making across your organization.',
      sections: [
        {
          title: 'Data Strategy and Infrastructure',
          content: 'Building a robust data foundation including data collection strategies, storage solutions, and governance frameworks. Guide to selecting appropriate tools and technologies for your specific business needs and budget constraints.',
        },
        {
          title: 'Analytics and Insights Generation',
          content: 'Comprehensive guide to data analysis techniques, visualization strategies, and insight generation methodologies. Includes practical examples of statistical analysis, predictive modeling, and business intelligence reporting.',
        },
        {
          title: 'Decision Implementation and Optimization',
          content: 'Framework for translating data insights into actionable business strategies. Includes change management strategies, performance monitoring, and continuous optimization processes to ensure data-driven decisions deliver expected results.',
        }
      ],
      keyTakeaways: [
        'Data quality is more important than data quantity',
        'Visual storytelling makes complex data accessible',
        'Predictive analytics provides competitive advantages',
        'Cultural change is required for data-driven organizations'
      ],
      actionSteps: [
        'Audit current data collection and analysis capabilities',
        'Implement comprehensive data governance framework',
        'Train team on data analysis and visualization tools',
        'Establish regular data review and decision-making processes'
      ],
      resources: [
        'MIT Data Science Methodology',
        'Tableau Data Visualization Best Practices',
        'Google Analytics Academy'
      ]
    },
    relatedTopics: ['Business Intelligence', 'Strategic Planning', 'Performance Management']
  },
  {
    id: '6',
    icon: Award,
    title: 'High-Performance Sales Team Builder',
    description: 'Complete system for recruiting, training, and managing a sales team that consistently exceeds targets.',
    shortDescription: 'Build and lead a world-class sales organization that drives consistent revenue growth.',
    category: 'SYSTEMS',
    featured: true,
    rating: 4.9,
    estimatedTime: '120 mins',
    difficulty: 'Advanced',
    lastUpdated: 'yesterday',
    tags: ['Sales', 'Team Building', 'Leadership', 'Performance'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop',
    content: {
      introduction: 'Build a sales organization that consistently delivers exceptional results. This comprehensive system covers every aspect of sales team development from recruitment to performance optimization.',
      sections: [
        {
          title: 'Strategic Sales Recruitment',
          content: 'Advanced recruitment strategies for identifying and attracting top sales talent. Includes competency frameworks, interview methodologies, and assessment tools to ensure you hire salespeople who will thrive in your specific environment.',
        },
        {
          title: 'Sales Training and Development',
          content: 'Comprehensive training programs covering product knowledge, sales methodologies, objection handling, and advanced closing techniques. Includes ongoing coaching frameworks and skill development pathways for continuous improvement.',
        },
        {
          title: 'Performance Management and Motivation',
          content: 'Systems for tracking, measuring, and optimizing sales performance. Includes compensation design, incentive programs, and motivation techniques that drive consistent high performance and team retention.',
        }
      ],
      keyTakeaways: [
        'Right recruitment saves training time and improves results',
        'Continuous coaching is more effective than periodic training',
        'Data-driven performance management improves outcomes',
        'Motivation requires both financial and non-financial incentives'
      ],
      actionSteps: [
        'Define ideal sales candidate profile and competencies',
        'Implement structured sales training and onboarding program',
        'Establish regular coaching and performance review processes',
        'Design comprehensive compensation and incentive structure'
      ],
      resources: [
        'Challenger Sale Methodology',
        'Sales Management Best Practices - Salesforce',
        'HubSpot Sales Training Resources'
      ]
    },
    relatedTopics: ['Sales Strategy', 'Team Management', 'Revenue Growth']
  }
];

// Helper functions (copy these from your resource card.txt if they are not globally available)
const getRelatedContent = (currentResource: Resource, allResources: Resource[]) => {
  return allResources
    .filter(
      (res) =>
        res.id !== currentResource.id &&
        res.relatedTopics.some((topic) => currentResource.relatedTopics.includes(topic))
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
};

const getTrendingContent = (allResources: Resource[]) => {
  return allResources
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
};

const getLatestContent = (allResources: Resource[]) => {
  return allResources
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 4);
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'text-emerald-700 bg-emerald-100 border-emerald-300';
    case 'Intermediate': return 'text-amber-700 bg-amber-100 border-amber-300';
    case 'Advanced': return 'text-red-700 bg-red-100 border-red-300';
    default: return 'text-gray-700 bg-gray-100 border-gray-300';
  }
};

// Global styles (copy these from your resource card.txt if they are not globally available)
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

  .reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(251, 191, 36, 0.2);
    z-index: 1000;
  }

  .reading-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #f59e0b, #d97706);
    transition: width 0.1s ease;
  }

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

  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .scroll-to-top:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
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

const ResourceCardExpand: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const navigate = useNavigate(); // For navigating back
  const [resource, setResource] = useState<Resource | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    if (id) {
      // Find the resource based on the ID from the URL
      const foundResource = resources.find(r => r.id === id);
      setResource(foundResource || null);
    }
  }, [id]);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    if (resource) {
      window.addEventListener('scroll', updateReadingProgress);
      return () => window.removeEventListener('scroll', updateReadingProgress);
    }
  }, [resource]);

  const shareArticle = async (resourceToShare: Resource) => {
    const shareData = {
      title: resourceToShare.title,
      text: resourceToShare.description,
      url: window.location.href // The current URL for the expanded resource
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const ReadingProgressBar = () => (
    resource && (
      <div className="reading-progress">
        <div
          className="reading-progress-bar"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
    )
  );

  if (!resource) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
        <style>{globalStyles}</style>
        <div className="paper-card p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Resource not found.</h3>
          <p className="text-gray-600 mb-6">The requested resource could not be loaded.</p>
          <button
            onClick={() => navigate('/')} // Navigate back to the main resource hub
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Go Back to Resources
          </button>
        </div>
      </div>
    );
  }

  const relatedContent = getRelatedContent(resource, resources);
  const trendingContent = getTrendingContent(resources);
  const latestContent = getLatestContent(resources);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <style>{globalStyles}</style>
      <ReadingProgressBar />

      {/* Article Header */}
      <div className="bg-white/80 backdrop-blur-md border-b-2 border-amber-200 sticky top-0 z-50 paper-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 text-gray-600 hover:text-amber-700 transition-colors duration-200 font-medium" >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Resources</span>
              <span className="sm:hidden">Back</span>
            </button>
            <div className="flex items-center space-x-4">
              <button onClick={() => shareArticle(resource)} className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200" >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" /> <span>{resource.estimatedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Article */}
          <main className="lg:col-span-3">
            <article className="paper-card overflow-hidden">
              {/* Article Hero */}
              <div className="relative">
                <img src={resource.image} alt={resource.title} className="w-full h-64 sm:h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full">
                      {resource.category.replace('_', ' ')}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border bg-white/90 ${getDifficultyColor(resource.difficulty).replace('bg-', 'bg-white/90 ')}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="mb-8">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    {resource.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" /> <span>Updated {resource.lastUpdated}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-500 fill-current" /> <span>{resource.rating} rating</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full font-medium" >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Introduction */}
                <div className="paper-card bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 p-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">What You'll Learn</h2>
                      <p className="text-gray-700 leading-relaxed">
                        {resource.content.introduction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article Sections */}
                <div className="space-y-10">
                  {resource.content.sections.map((section, index) => (
                    <section key={index} className="scroll-mt-24" id={`section-${index}`}>
                      <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-xl text-lg font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </span> {section.title}
                      </h2>
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4 text-base sm:text-lg">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="paper-card bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 p-6 sm:p-8 mt-12">
                  <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-4" /> Key Takeaways
                  </h2>
                  <ul className="space-y-4">
                    {resource.content.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                          {takeaway}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Steps */}
                <div className="paper-card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300 p-6 sm:p-8 mt-8">
                  <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    <Target className="w-8 h-8 text-blue-600 mr-4" /> Action Steps
                  </h2>
                  <ol className="space-y-4">
                    {resource.content.actionSteps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-lg font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Additional Resources */}
                <div className="paper-card bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300 p-6 sm:p-8 mt-8">
                  <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    <FileText className="w-8 h-8 text-purple-600 mr-4" /> Additional Resources
                  </h2>
                  <ul className="space-y-3">
                    {resource.content.resources.map((res, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <ExternalLink className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700 text-base sm:text-lg hover:text-purple-600 cursor-pointer transition-colors duration-200">
                          {res}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Table of Contents */}
            <div className="paper-card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {resource.content.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index}`}
                      className="flex items-center text-gray-600 hover:text-amber-700 transition-colors duration-200"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium line-clamp-2">
                        {index + 1}. {section.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Content */}
            {relatedContent.length > 0 && (
              <div className="paper-card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Content</h3>
                <div className="space-y-4">
                  {relatedContent.map((relatedResource) => (
                    <div
                      key={relatedResource.id}
                      onClick={() => navigate(`/resource/${relatedResource.id}`)} // Use navigate for related content
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <img
                        src={relatedResource.image}
                        alt={relatedResource.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-200 line-clamp-2 mb-1">
                          {relatedResource.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          Updated {relatedResource.lastUpdated}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Content */}
            <div className="paper-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Resources</h3>
              <div className="space-y-4">
                {trendingContent.map((trendingResource) => (
                  <div
                    key={trendingResource.id}
                    onClick={() => navigate(`/resource/${trendingResource.id}`)}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <img
                      src={trendingResource.image}
                      alt={trendingResource.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-200 line-clamp-2 mb-1">
                        {trendingResource.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        Updated {trendingResource.lastUpdated}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Content */}
            <div className="paper-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Resources</h3>
              <div className="space-y-4">
                {latestContent.map((latestResource) => (
                  <div
                    key={latestResource.id}
                    onClick={() => navigate(`/resource/${latestResource.id}`)}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <img
                      src={latestResource.image}
                      alt={latestResource.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-200 line-clamp-2 mb-1">
                        {latestResource.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        Updated {latestResource.lastUpdated}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ResourceCardExpand;