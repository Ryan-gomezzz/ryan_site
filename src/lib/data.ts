export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "competitions", label: "Competitions" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Ryan Gomez",
  label: "// RYAN GOMEZ",
  location: "Bengaluru, India",
  headline: "I build intelligent systems that solve real-world problems.",
  roles: ["AI Systems", "Robotics", "Cloud Architecture", "Embedded Systems"],
  stats: [
    { label: "Industry-level projects", value: "7+" },
    { label: "Multi-AI model accuracy", value: "80%" },
    { label: "Voice agent latency", value: "<300ms" },
    { label: "Competition wins", value: "10+" },
  ],
  profileImage: "/images/profile-ryan.png",
  about: [
    "AI/ML engineer and Electronics and Communication Engineering undergraduate with 2+ years of experience delivering production-grade systems across voice AI, computer vision, LLM workflows, robotics, and IoT-ML platforms.",
    "I build measurable systems, not demos: industry-level shipped work, multi-model AI with strong accuracy targets, sub-300ms voice agents, and consistent results in competitive settings.",
    "My north star is becoming a cloud security architect for intelligent systems operating at global scale.",
  ],
  quote:
    "I design systems where intelligence, reliability, and security scale together.",
};

/** Animated counters in the impact strip — synced with hero stats */
export const impactMetrics = [
  { label: "Industry-level projects", value: 7, suffix: "+" },
  { label: "Trained multi-AI models (peak accuracy)", value: 80, suffix: "%" },
  { label: "Voice agent response latency", value: 300, prefix: "<", suffix: "ms" },
  { label: "Competition wins", value: 10, suffix: "+" },
];

/** Placeholder — add events, placements, and links when ready */
export const competitions = {
  intro:
    "Hackathons, technical challenges, and formal competitions. Details below — you can expand this with dates, orgs, and outcomes.",
  items: [] as { title: string; placement?: string; year?: string; note?: string }[],
};

export const education = [
  {
    school: "Ramaiah Institute of Technology",
    degree: "B.E. Electronics and Communication Engineering",
    duration: "Aug 2023 - May 2027",
    score: "GPA: 7.77/10",
  },
  {
    school: "St. Joseph's Boy's High School",
    degree: "ISC (12th Standard)",
    duration: "Jun 2021 - May 2023",
    score: "Score: 86%",
  },
];

export const experience = [
  {
    role: "Quantum Design Lead",
    org: "Octakaigon Bock",
    duration: "Dec 2025 - Present",
    points: [
      "Leading Python simulation and optimization pipelines for photonic quantum systems.",
      "Driving algorithm performance tuning and improving execution stability.",
      "Contributing to quantum OS-level scheduling and hardware abstraction integrations.",
    ],
  },
  {
    role: "IT Head",
    org: "UI/UX Club - RIT",
    duration: "2025 - Present",
    points: [
      "Managing technical infrastructure, tooling, and delivery pipelines for design-led initiatives.",
      "Supporting cross-functional execution across product, design, and engineering contributors.",
    ],
  },
  {
    role: "Vice Chair",
    org: "IEEE Student Branch - RIT",
    duration: "Jan 2025 - Dec 2025",
    points: [
      "Coordinated 40+ technical workshops and seminars across 12 teams.",
      "Strengthened collaboration between student builders, faculty, and industry experts.",
    ],
  },
  {
    role: "Quantum Design and Research Intern",
    org: "Octakaigon Bock",
    duration: "Jun 2025 - Nov 2025",
    points: [
      "Improved execution efficiency by 20% across 5+ quantum circuit designs.",
      "Supported hardware-software integration and cryogenic control experimentation.",
      "Collaborated with senior research engineers on scalable 100-qubit architecture paths.",
    ],
  },
];

export const projects = [
  {
    id: "P-01",
    title: "SOYL - AI Voice Agent Platform",
    problem: "Real-time voice agents needed low-latency, concurrent processing at production scale.",
    stack: ["Python", "FastAPI", "WebSockets", "Docker", "AWS", "GCP"],
    impact: "Delivered under-900ms end-to-end response latency with scalable cloud deployment.",
    github: "https://github.com/Ryan-gomezzz/SOYL_PROTOTYPE",
    featured: true,
    image: "/images/projects/soyl-preview.jpg",
  },
  {
    id: "P-02",
    title: "AI-Powered Hotel Concierge and PMS",
    problem: "Hospitality teams needed unified, reliable AI automation without unsafe direct DB operations.",
    stack: ["FastAPI", "RAG", "OpenAI", "Supabase", "TypeScript", "React"],
    impact: "Shipped production-grade AI workflows with strict backend data control and scalable architecture.",
    github: "https://github.com/Ryan-gomezzz/angeldesign-studio",
    featured: false,
    image: "/images/projects/concierge-preview.jpg",
  },
  {
    id: "P-03",
    title: "Smart Wastewater Monitoring - The Jellyfish",
    problem: "Pharmaceutical pollutants required real-time detection and automated remediation.",
    stack: ["ESP32", "C++", "Python", "Flask", "MQTT", "LSTM", "Random Forest"],
    impact: "Built edge + AI pipeline for anomaly detection, classification, and predictive contamination alerts.",
    github: "https://github.com/Ryan-gomezzz/saffron-dashboard",
    featured: false,
    image: "/images/projects/jellyfish-preview.jpg",
  },
  {
    id: "P-04",
    title: "Life Link - AI Flood Rescue Robot",
    problem: "Flood rescue scenarios needed autonomous, fast human detection and navigation support.",
    stack: ["YOLOv8", "Python", "OpenCV", "GPS", "ROS", "Embedded Systems"],
    impact: "Reduced rescue response time by 30% in simulation and controlled environment tests.",
    github: "https://github.com/BOCK-AI/BockQSC1090",
    featured: false,
    image: "/images/projects/lifelink-preview.jpg",
  },
  {
    id: "P-05",
    title: "Hush Gentle - Full-Stack E-Commerce Storefront",
    problem: "A live skincare brand needed a complete digital commerce stack from storefront to operations.",
    stack: ["Next.js 16", "React 18", "TypeScript", "Tailwind CSS", "Supabase", "Cashfree", "Resend"],
    impact:
      "Launched production B2C storefront with admin dashboard, payment webhooks, and automated transactional emails.",
    github: "https://github.com/Ryan-gomezzz/zaksr-premium-website",
    featured: false,
    image: "/images/projects/hush-gentle-preview.jpg",
  },
];

export const skillGroups = [
  {
    category: "SYS // AI & ML",
    items: [
      "LLMs",
      "RAG",
      "Computer Vision",
      "YOLOv8",
      "LSTM",
      "Random Forest",
      "Isolation Forest",
      "PyTorch",
      "TensorFlow",
      "Prompt Engineering",
    ],
  },
  {
    category: "SYS // Embedded & IoT",
    items: ["ESP32", "Raspberry Pi", "MQTT", "Edge IoT", "IoT Automation", "Verilog", "Altium"],
  },
  {
    category: "SYS // Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Supabase", "Vercel", "pgvector"],
  },
];

export const currentlyBuilding = {
  title: "Interaction Intelligence System + Secure Cloud AI Pipelines",
  description:
    "Building backend pipelines for large-scale audio/text interaction analytics while hardening cloud services for reliability, observability, and secure inference delivery.",
  progress: 72,
  startDate: "2025-10-01",
};

export const recruiter = {
  locations: ["Germany", "Netherlands", "Ireland"],
  roles: ["AI/ML Engineer", "Cloud Security Architect", "Embedded Systems Engineer", "Backend AI Engineer"],
};

export const leadership = [
  {
    role: "Research & Project Head",
    org: "IEEE Student Branch - RIT",
    impact: "Leading applied research initiatives and execution across 8+ interdisciplinary technical projects.",
  },
  {
    role: "Vice Chair",
    org: "IEEE Student Branch - RIT",
    impact: "Coordinated 40+ workshops and events across 12 technical teams.",
  },
  {
    role: "President",
    org: "RITMUNSOC",
    impact: "Led a 25-member, five-department organization and delivered 3 conferences with 200+ attendees.",
  },
  {
    role: "IT Head",
    org: "UI/UX Club - RIT",
    impact: "Managed technical infrastructure and project execution across design-driven initiatives.",
  },
];

export const certifications = [
  "AWS Cloud Practitioner",
  "Cloud IoT Edge ML (NPTEL)",
  "Cybersecurity Foundations (Coursera)",
  "JPMC Cybersecurity Job Simulation (Forage)",
  "Java Basic - HackerRank",
];

export const contact = {
  github: "https://github.com/Ryan-gomezzz",
  linkedin: "https://www.linkedin.com/in/ryan-gomez-a1a216276/",
  email: "mailto:ryangomez9965@gmail.com",
  phone: "+91 7022509965",
};
