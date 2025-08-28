// Mock data for Sadanand Srivastava's Portfolio

export const personalInfo = {
  name: "Sadanand Srivastava",
  title: "Senior QA Engineer & Data Science Professional",
  subtitle: "Healthcare Testing Expert • MIT Applied Data Science Graduate",
  email: "saddy98@gmail.com",
  phone: "+1 (551) 263-2868",
  linkedin: "https://www.linkedin.com/in/sadanand-srivastava/",
  location: "United States",
  yearsOfExperience: "15+",
  visaStatus: "H1B (Valid until May 2027)"
};

export const aboutMe = {
  shortDescription: "Experienced IT professional with 15+ years in software testing within the healthcare domain, backed by MIT Applied Data Science certification.",
  fullDescription: `I am a seasoned Quality Assurance Engineer with over 15 years of specialized experience in healthcare software testing. My expertise spans across medical claims processing, pharmacy claims, member portals, and enterprise data warehouses.

Recently enhanced my skill set with Applied Data Science certification from MIT Professional Education, combining traditional QA excellence with modern data science capabilities. I excel in API testing, automation frameworks, and ETL validation while leading cross-functional teams to deliver high-quality healthcare solutions.

My unique blend of domain expertise, technical proficiency, and leadership experience enables me to drive quality initiatives that ensure reliable, compliant healthcare systems serving millions of users.`
};

export const skills = [
  {
    category: "Healthcare Domain",
    items: ["Medical Claims Processing", "Pharmacy Claims", "Member Portals", "FHIR API Compliance", "HL7 Standards", "Healthcare Regulations"]
  },
  {
    category: "Testing Expertise", 
    items: ["API Testing", "ETL Testing", "Data Warehouse Testing", "Automation Testing", "System Integration", "End-to-End Testing"]
  },
  {
    category: "Tools & Technologies",
    items: ["ReadyAPI", "Postman", "SoapUI", "Selenium", "Rest Assured", "SAS Enterprise Guide", "JIRA", "HP ALM"]
  },
  {
    category: "Databases",
    items: ["Oracle 11g", "IBM DB2", "MS SQL Server", "MongoDB", "Teradata", "SAS Database"]
  },
  {
    category: "Programming",
    items: ["Python", "Java", "PL-SQL", "VBA", "SQL", "Machine Learning", "Data Analysis"]
  },
  {
    category: "Leadership",
    items: ["Team Mentoring", "Project Management", "Cross-functional Collaboration", "Offshore Coordination", "Quality Strategy"]
  }
];

export const experience = [
  {
    title: "Senior QA Engineer - Enterprise Integration",
    company: "Infosys Limited",
    duration: "Jan 2021 - Present",
    location: "United States",
    description: "Leading API testing and automation for Enterprise Integration Shared Services (EIS), supporting Member, Claims, and Drug services with 200+ APIs.",
    achievements: [
      "Automated daily smoke testing achieving 100% uptime with GitHub integration",
      "Created comprehensive test suites for FHIR API compliance using HAPI FHIR server",
      "Led team members ensuring effective and timely delivery of critical healthcare systems",
      "Implemented data-driven testing frameworks reducing manual effort by 80%"
    ],
    technologies: ["ReadyAPI", "Postman", "MongoDB", "Oracle", "Rest Assured", "FHIR", "HL7"]
  },
  {
    title: "QA Engineer - Enterprise Data Warehouse",
    company: "Infosys Limited", 
    duration: "Jun 2021 - Nov 2022",
    location: "United States",
    description: "Ensured data integrity and transformation accuracy for central healthcare data repository supporting multiple database systems.",
    achievements: [
      "Developed SAS EG scripts ensuring 100% data integrity during database transfers",
      "Validated complex data transformation rules across Oracle, MS SQL, DB2, and Teradata",
      "Analyzed multi-layer database systems and validated BOBJ/Tableau reports",
      "Created comprehensive testing strategies for diverse data sources and formats"
    ],
    technologies: ["SAS EG", "DB2", "MS SQL Server", "Oracle", "Teradata", "BOBJ", "Tableau"]
  },
  {
    title: "QA Engineer - Healthcare Applications",
    company: "Infosys Limited",
    duration: "Oct 2014 - May 2020", 
    location: "United States",
    description: "Specialized in medical claims processing systems, member web portals, and healthcare provider applications.",
    achievements: [
      "Created Excel macros for 837X12 file generation, reducing manual effort by 80%",
      "Designed end-to-end test scenarios for complex healthcare workflows",
      "Managed multiple healthcare programs including vendor delegation and provider resubmission",
      "Established quality processes and mentored junior team members"
    ],
    technologies: ["HP ALM", "Excel VBA", "NASCO", "Healthcare Standards"]
  },
  {
    title: "Software Test Engineer",
    company: "Infosys Limited",
    duration: "Oct 2011 - Sep 2014",
    location: "India/International",
    description: "Focused on ETL testing, data migration, and web service automation for global healthcare applications.",
    achievements: [
      "Automated web applications using Selenium and Microsoft Test Manager",
      "Performed comprehensive ETL and data warehouse testing",
      "Implemented Parasoft SOATest 9.0 for web services automation",
      "Supported international clients in Australia, Brazil, and France"
    ],
    technologies: ["Selenium", "MS Test Manager", "Parasoft SOATest", "Java", "SoapUI"]
  }
];

export const projects = [
  {
    title: "Healthcare API Testing Suite",
    description: "Comprehensive automation framework for testing 200+ healthcare APIs with FHIR compliance and real-time monitoring.",
    technologies: ["ReadyAPI", "Postman", "Rest Assured", "MongoDB", "FHIR"],
    features: [
      "Automated smoke testing with GitHub integration",
      "FHIR API compliance validation using HAPI FHIR server", 
      "Real-time monitoring and failure notifications",
      "Data-driven test scenarios for comprehensive coverage"
    ],
    impact: "Achieved 100% API uptime and reduced manual testing effort by 85%"
  },
  {
    title: "Enterprise Data Warehouse Validator",
    description: "Advanced ETL testing framework ensuring data integrity across multiple database systems in healthcare environment.",
    technologies: ["SAS EG", "Oracle", "DB2", "MS SQL Server", "Teradata"],
    features: [
      "Automated data transformation rule validation",
      "Multi-database integrity checks and reconciliation",
      "Custom SAS EG scripts for complex data scenarios",
      "Integration with BOBJ and Tableau for report validation"
    ],
    impact: "Ensured 100% data accuracy across enterprise data warehouse migrations"
  },
  {
    title: "Medical Claims Processing Framework",
    description: "End-to-end testing solution for healthcare claims processing including 837X12 file generation and validation.",
    technologies: ["Excel VBA", "HP ALM", "NASCO", "Healthcare EDI"],
    features: [
      "Automated 837X12 file generation with macro scripting",
      "Provider specialty and member benefit validation",
      "Payment processing and voucher generation testing",
      "Comprehensive claim workflow automation"
    ],
    impact: "Reduced manual file generation effort by 80% and eliminated processing errors"
  },
  {
    title: "Healthcare Web Services Automation",
    description: "Robust automation solution for healthcare web services testing using industry-standard tools and methodologies.",
    technologies: ["Parasoft SOATest", "SoapUI", "Selenium", "Java"],
    features: [
      "WSDL-based automated test generation",
      "Comprehensive data permutation testing",
      "Cross-browser compatibility validation",
      "Integration with existing healthcare systems"
    ],
    impact: "Streamlined regression testing and improved system reliability for global healthcare clients"
  }
];

export const education = [
  {
    degree: "Applied Data Science Program",
    institution: "MIT Professional Education",
    year: "2022",
    description: "Advanced program covering machine learning, data analysis, and Python programming with focus on real-world applications."
  },
  {
    degree: "Bachelor of Engineering - Electronics and Communications",
    institution: "Uttar Pradesh Technical University",
    year: "2009",
    location: "Uttar Pradesh, India",
    description: "Comprehensive engineering program providing foundation in electronics, communications, and software systems."
  }
];

export const certifications = [
  "MIT Applied Data Science Professional Certificate",
  "FHIR API Compliance Specialist",
  "Healthcare Data Standards (HL7, EDI 837X12)",
  "Agile and Waterfall Methodologies",
  "Advanced SQL and Database Management"
];