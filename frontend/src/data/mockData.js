// Mock data for portfolio website
export const personalInfo = {
  name: "Rupan Dutta",
  title: "Senior SAP Commerce Cloud Consultant",
  tagline: "Transforming E-commerce Experiences with SAP Commerce Cloud Expertise",
  email: "rupan.dutta@email.com",
  phone: "+91 XXXXX XXXXX",
  linkedin: "https://www.linkedin.com/in/rupan-dutta-335615185",
  github: "https://github.com/rupandutta",
  location: "India",
  experience: "2.5+ years",
  bio: `Senior Analyst/Software Engineer specializing in SAP Commerce Cloud (Hybris CCV2) with over 2.5 years of experience in e-commerce platforms and omnichannel strategies. Passionate about delivering scalable, optimized eCommerce solutions for global clients.

With expertise in Java development and hands-on experience with enterprise-grade tools, I help businesses transform their digital commerce capabilities. My experience spans across major beverage industry clients including Carlton & United Breweries and Asahi Beverages.

I hold multiple SAP certifications and stay current with the latest developments in SAP Commerce Cloud, Spartacus framework, and modern e-commerce technologies.`
};

export const skills = {
  primary: [
    "SAP Commerce Cloud (Hybris CCV2)",
    "Java Development",
    "Spartacus Framework",
    "E-commerce Platform Development",
    "Omnichannel Strategy"
  ],
  technical: [
    "Azure AD Portal",
    "ServiceNow",
    "Azure DevOps",
    "Kibana",
    "Dynatrace",
    "Loggly",
    "New Relic",
    "SAP Commerce Cloud Portal",
    "SAP One Launchpad",
    "Git",
    "HTML5",
    "CSS3",
    "OpenSearch Dashboard",
    "Impex"
  ],
  certifications: [
    "SAP Certified Application Associate - SAP Commerce Cloud Business User",
    "SAP Certified Development Professional - SAP Commerce Cloud 1905 Developer"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Current Organization",
    position: "Senior Analyst/Software Engineer",
    duration: "2022 - Present",
    description: "Specializing in SAP Commerce Cloud (Hybris CCV2) development and e-commerce platform optimization for enterprise clients.",
    achievements: [
      "Led SAP Commerce Cloud implementations for major beverage industry clients",
      "Optimized e-commerce platform performance resulting in improved user experience",
      "Developed custom solutions using Java and Spartacus framework",
      "Collaborated with cross-functional teams on omnichannel strategy implementations"
    ],
    technologies: ["SAP Commerce Cloud", "Java", "Spartacus", "Azure DevOps", "Kibana"]
  },
  {
    id: 2,
    company: "EagleBurgmann Industries",
    position: "SAP Commerce Developer",
    duration: "2021 - 2022",
    description: "Worked as part of the SAP Commerce practice, developing and maintaining e-commerce solutions.",
    achievements: [
      "Contributed to multiple SAP Commerce Cloud projects",
      "Gained expertise in enterprise-level e-commerce development",
      "Worked with monitoring tools like Dynatrace and New Relic",
      "Developed proficiency in Impex and SAP Commerce administration"
    ],
    technologies: ["SAP Commerce Cloud", "Java", "Dynatrace", "New Relic", "Impex"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Carlton & United Breweries E-commerce Platform",
    category: "SAP Commerce Cloud Implementation",
    description: "Led the development and optimization of a comprehensive e-commerce platform for one of Australia's leading beverage companies.",
    overview: "Comprehensive e-commerce solution featuring advanced product catalog management, customer personalization, and multi-channel integration for the beverage industry.",
    challenges: [
      "Complex product catalog with seasonal variations",
      "Multi-region deployment requirements",
      "Integration with existing ERP systems",
      "Performance optimization for high-traffic periods"
    ],
    solutions: [
      "Implemented SAP Commerce Cloud with custom product catalog structure",
      "Developed Spartacus-based frontend for enhanced user experience",
      "Integrated with Azure AD for seamless authentication",
      "Optimized performance using Dynatrace monitoring insights"
    ],
    results: [
      "40% improvement in page load times",
      "Enhanced customer experience with personalized recommendations",
      "Seamless integration with existing business processes",
      "Scalable architecture supporting future growth"
    ],
    technologies: ["SAP Commerce Cloud", "Spartacus", "Java", "Azure AD", "Dynatrace"],
    duration: "6 months",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Asahi Beverages Omnichannel Strategy",
    category: "System Integration",
    description: "Developed and implemented an omnichannel strategy for Asahi Beverages, integrating online and offline customer touchpoints.",
    overview: "Strategic omnichannel implementation connecting e-commerce, mobile, and retail channels for consistent customer experience across all touchpoints.",
    challenges: [
      "Disparate systems across different channels",
      "Data synchronization between platforms",
      "Consistent customer experience requirements",
      "Real-time inventory management"
    ],
    solutions: [
      "Implemented SAP Commerce Cloud as central hub",
      "Developed custom APIs for system integration",
      "Created unified customer profile management",
      "Established real-time data synchronization"
    ],
    results: [
      "Unified customer experience across all channels",
      "30% increase in customer retention",
      "Improved inventory accuracy and management",
      "Enhanced customer data insights"
    ],
    technologies: ["SAP Commerce Cloud", "Java", "ServiceNow", "OpenSearch", "Kibana"],
    duration: "8 months",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Enterprise Performance Optimization Suite",
    category: "Performance Enhancement",
    description: "Comprehensive performance optimization project for multiple SAP Commerce Cloud implementations using advanced monitoring tools.",
    overview: "End-to-end performance optimization initiative focusing on platform speed, reliability, and scalability improvements across enterprise e-commerce implementations.",
    challenges: [
      "Slow page load times affecting conversion rates",
      "Memory leaks in custom extensions",
      "Database query performance issues",
      "Scalability constraints during peak traffic"
    ],
    solutions: [
      "Implemented comprehensive monitoring with Dynatrace and New Relic",
      "Optimized database queries and caching strategies",
      "Refactored custom code for better performance",
      "Established performance monitoring dashboards"
    ],
    results: [
      "60% reduction in average page load time",
      "50% improvement in server response times",
      "Enhanced system stability during peak loads",
      "Proactive issue identification and resolution"
    ],
    technologies: ["Dynatrace", "New Relic", "Kibana", "Loggly", "SAP Commerce Cloud"],
    duration: "4 months",
    image: "/api/placeholder/600/400"
  }
];

export const services = [
  {
    id: 1,
    title: "SAP Commerce Cloud Consulting",
    description: "End-to-end SAP Commerce Cloud implementation and optimization services for enterprise e-commerce solutions.",
    features: [
      "Platform assessment and strategy development",
      "Custom implementation and configuration",
      "Third-party system integrations",
      "Performance optimization and monitoring",
      "Migration from legacy platforms"
    ],
    benefits: [
      "Accelerated time-to-market",
      "Scalable e-commerce architecture",
      "Enhanced customer experience",
      "Improved operational efficiency"
    ],
    icon: "ShoppingCart"
  },
  {
    id: 2,
    title: "System Integration Services",
    description: "Seamless integration of SAP Commerce Cloud with existing enterprise systems and third-party applications.",
    features: [
      "ERP system integration",
      "CRM platform connectivity",
      "Payment gateway integration",
      "Inventory management synchronization",
      "Custom API development"
    ],
    benefits: [
      "Unified data management",
      "Streamlined business processes",
      "Real-time information sync",
      "Reduced manual intervention"
    ],
    icon: "Network"
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Comprehensive performance tuning and optimization services to ensure your e-commerce platform runs at peak efficiency.",
    features: [
      "Performance monitoring and analysis",
      "Database query optimization",
      "Caching strategy implementation",
      "Code review and refactoring",
      "Load testing and capacity planning"
    ],
    benefits: [
      "Faster page load times",
      "Improved user experience",
      "Higher conversion rates",
      "Reduced operational costs"
    ],
    icon: "Zap"
  },
  {
    id: 4,
    title: "Technical Support & Maintenance",
    description: "Ongoing technical support and maintenance services to keep your SAP Commerce Cloud platform running smoothly.",
    features: [
      "24/7 technical support",
      "Regular platform updates",
      "Security patch management",
      "Issue troubleshooting and resolution",
      "Platform health monitoring"
    ],
    benefits: [
      "Minimized downtime",
      "Enhanced security",
      "Proactive issue resolution",
      "Peace of mind"
    ],
    icon: "Shield"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "IT Director",
    company: "Carlton & United Breweries",
    content: "Rupan's expertise in SAP Commerce Cloud transformed our e-commerce platform. His attention to detail and deep technical knowledge resulted in a 40% improvement in performance.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Digital Operations Manager",
    company: "Asahi Beverages",
    content: "Working with Rupan on our omnichannel strategy was exceptional. He delivered a seamless integration that significantly improved our customer experience across all touchpoints.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Williams",
    position: "E-commerce Director",
    company: "Enterprise Client",
    content: "Rupan's performance optimization work was outstanding. He identified and resolved critical bottlenecks, resulting in faster load times and improved customer satisfaction.",
    rating: 5
  }
];