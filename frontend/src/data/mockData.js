// Updated data from CV for portfolio website
export const personalInfo = {
  name: "Rupan Dutta",
  title: "IT Service Manager",
  tagline: "Certified SAP Commerce Consultant & Digital Innovation Specialist",
  email: "duttard27@gmail.com",
  phone: "(+91) 8617595261",
  linkedin: "https://www.linkedin.com/in/rupan-dutta-335615185",
  github: "https://github.com/rupandutta",
  location: "Chennai, India",
  experience: "4.8+ years",
  profileImage: "https://customer-assets.emergentagent.com/job_tech-portfolio-170/artifacts/ihounuhx_IMG_6056.jpeg",
  bio: `As a Certified SAP Commerce Consultant at EagleBurgmann, I specialize in building and optimizing robust B2B eCommerce solutions. My focus is on enhancing system performance, automating key processes, and ensuring seamless cross-functional integration with platforms like SAP S/4HANA.

With hands-on experience in SAP Commerce Cloud (CCV2) and Spartacus, I enjoy solving complex technical challenges and collaborating with global teams to deliver tangible business value. I am passionate about creating efficient, scalable systems that drive digital growth.

Currently serving as IT Service Manager, I provide technical liaison, support, and strategic guidance while promoting understanding of complex business processes and data structures.`
};

export const skills = {
  primary: [
    "SAP Commerce Cloud (CCV2)",
    "SAP Hybris 6.4",
    "Spartacus Framework",
    "SAP S/4HANA Integration",
    "Digital Innovation & Automation"
  ],
  technical: [
    "SAP Commerce",
    "Agile & Scrum Methodologies", 
    "Test Automation & Regression Testing",
    "Application Lifecycle Management",
    "Release & Change Management",
    "ServiceNow",
    "Azure Portal",
    "Java",
    "Spring Framework",
    "HTML5",
    "CSS3",
    "REST Web Services",
    "Database Management"
  ],
  softSkills: [
    "Problem Solving & Decision Making",
    "Analytical Thinking", 
    "Adaptability",
    "Collaboration",
    "Leadership & Ownership",
    "Stakeholder Communication"
  ],
  certifications: [
    {
      name: "SAP Certified Application Associate - SAP Commerce Cloud Business User",
      date: "14/06/2022 - 16/04/2023"
    },
    {
      name: "SAP Certified Development Professional - SAP Commerce Cloud 1905 Developer", 
      date: "07/2021 - 16/04/2023"
    },
    {
      name: "Managing Products in the Backoffice Product Cockpit by SAP",
      date: "15/03/2025"
    },
    {
      name: "Agile Software Development - University of Minnesota",
      date: "02/2022",
      provider: "Coursera"
    }
  ]
};

export const experience = [
  {
    id: 1,
    company: "EagleBurgmann KE",
    position: "IT Service Manager",
    duration: "Feb 2025 - Present",
    location: "Chennai, India",
    description: "Leading IT service management and strategic guidance for digital transformation initiatives in B2B eCommerce solutions.",
    achievements: [
      "Provided technical liaison, support, and strategic guidance to process experts",
      "Served as Technical Product Owner in Agile IT teams, resolving issues and maintaining business alignment",
      "Defined and implemented test automation strategies for regression testing",
      "Evaluated and proposed innovative solutions for online shop optimization",
      "Oversaw validation and deployment of releases, ensuring quality standards and operational readiness"
    ],
    technologies: ["SAP Commerce Cloud", "Agile Methodologies", "Test Automation", "Release Management", "Digital Innovation"]
  },
  {
    id: 2,
    company: "EagleBurgmann KE",
    position: "Consultant - SAP Commerce",
    duration: "Oct 2023 - Jan 2025",
    location: "Chennai, India",
    description: "Specialized SAP Commerce consultant focused on release management, quality assurance, and business process optimization.",
    achievements: [
      "Accepted and validated releases, ensuring adherence to quality standards",
      "Provided expert support to business process experts and stakeholders",
      "Planned and executed comprehensive knowledge transfer sessions",
      "Executed configuration adjustments within SAP Commerce Cloud",
      "Served as primary point of contact for process experts and cross-functional collaboration"
    ],
    technologies: ["SAP Commerce Cloud", "CCV2", "Agile Development", "Quality Assurance", "Business Process Management"]
  },
  {
    id: 3,
    company: "Capgemini",
    position: "Senior Analyst/Senior Software Engineer",
    duration: "Oct 2022 - Oct 2023", 
    location: "Bangalore, India",
    description: "Led SAP Hybris CCV2 development, maintenance, and mentoring initiatives for enterprise e-commerce solutions.",
    achievements: [
      "Provided live support, development, and maintenance for SAP Hybris CCV2",
      "Designed and developed new features and enhancements for enterprise clients",
      "Conducted comprehensive root cause analysis and troubleshooting",
      "Mentored and coached team members on technical best practices",
      "Collaborated with cross-functional teams for seamless project delivery"
    ],
    technologies: ["SAP Hybris CCV2", "Java", "Database Management", "Technical Leadership", "Cross-functional Collaboration"]
  },
  {
    id: 4,
    company: "Capgemini",
    position: "Analyst/Software Engineer",
    duration: "Jun 2021 - Oct 2022",
    location: "Bangalore, India", 
    description: "Developed and implemented features on SAP Commerce Cloud with focus on platform management and workflow optimization.",
    achievements: [
      "Worked extensively on SAP Commerce Cloud Version 2 (CCV2) and Hybris 6.4",
      "Designed and implemented features using various SAP Hybris tools and techniques",
      "Managed incident and service request workflows using ServiceNow",
      "Configured and optimized Azure Portal for enhanced system performance",
      "Collaborated effectively with cross-functional teams for project success"
    ],
    technologies: ["SAP Commerce Cloud", "Hybris 6.4", "ServiceNow", "Azure Portal", "Platform Management"]
  },
  {
    id: 5,
    company: "Capgemini",
    position: "Analyst/Software Engineer Trainee",
    duration: "Mar 2021 - May 2021",
    location: "Bangalore, India",
    description: "Comprehensive training program covering full-stack development and SAP Hybris E-Commerce fundamentals.",
    achievements: [
      "Completed intensive training in Java and Spring Framework",
      "Gained proficiency in frontend technologies: HTML5, CSS3",
      "Learned REST Web Services development and implementation",
      "Acquired foundational knowledge in SAP Hybris E-Commerce platform"
    ],
    technologies: ["Java", "Spring Framework", "HTML5", "CSS3", "REST Web Services", "SAP Hybris"]
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

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Academy of Technology (MAKAUT)",
    location: "Adisaptagram, India",
    duration: "2016 - 2020",
    grade: "7.56 CGPA"
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "DAV Model School, IIT Kharagpur (CBSE)",
    location: "Kharagpur, India", 
    duration: "2015 - 2016",
    grade: "82.8%"
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "DAV Model School, IIT Kharagpur (CBSE)",
    location: "Kharagpur, India",
    duration: "2013 - 2014", 
    grade: "CGPA 9.8"
  }
];

export const honorsAwards = [
  {
    id: 1,
    title: "ECommerce Operations and Solution Delivery Award",
    organization: "EagleBurgmann",
    date: "March 2025",
    description: "Recognized for outstanding contributions to eCommerce operations and innovative solution delivery in SAP Commerce implementations."
  },
  {
    id: 2,
    title: "Value Creator Award", 
    organization: "Capgemini",
    date: "March 2022",
    description: "Awarded for exceptional value creation and innovative problem-solving in SAP Commerce Cloud projects."
  }
];

export const recommendations = [
  {
    id: 1,
    name: "Vanessa Siemon",
    position: "Solution Architect SAP Commerce",
    company: "Klueber GmbH",
    content: "Rupan consistently demonstrates exceptional technical skills and problem-solving abilities in SAP Commerce Cloud implementations. His analytical thinking and collaborative approach make him a valuable team member who delivers high-quality results.",
    date: "2024"
  },
  {
    id: 2,
    name: "Ravi Iyer", 
    position: "Associate Director",
    company: "Capgemini Australia",
    content: "Working with Rupan has been a pleasure. His deep understanding of SAP Commerce Cloud, combined with his excellent communication skills and adaptability, makes him stand out as a professional. He consistently delivers beyond expectations.",
    date: "2023"
  },
  {
    id: 3,
    name: "Sudeep Bansal",
    position: "Senior IT Engineer", 
    company: "Honeywell",
    content: "Rupan's leadership qualities and technical ownership in SAP Commerce projects are commendable. His ability to collaborate effectively with stakeholders while maintaining high standards of quality makes him an asset to any organization.",
    date: "2023"
  }
];