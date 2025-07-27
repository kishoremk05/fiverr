// Define your Resource interface here, so it's consistent
import {
  Lightbulb, Rocket, Shield, Globe, BarChart, Award,
  // ... import all other Lucide icons you use for resource.icon
  PencilRuler, Compass, Newspaper, Bug, ExternalLink, ArrowRight, ArrowLeft, X, Clock, Users,
  TrendingUp, CheckCircle, Star, FileText, Play, BookOpen, Target, Zap, DollarSign, Calendar,
  Share2, Code, Briefcase, Heart, MessageSquare, Cpu, Layers, Settings, Database, ChevronDown,
  ChevronUp, Filter, Search, Bookmark, Plus, Home, Menu, Flame, Timer, Hash, ChevronRight, Tag,
  Gift, Sparkles, ArrowUp
} from 'lucide-react';


export interface Resource {
  id: string;
  icon: React.ElementType; // Use React.ElementType for Lucide icons
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

// Your centralized resources array
export const resources: Resource[] = [
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