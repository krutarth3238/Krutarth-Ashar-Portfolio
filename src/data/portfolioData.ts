import { ExperienceItem, Project, SkillCategory, AchievementItem, CertificationItem, ProjectStage } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Krutarth Ashar",
  initials: "KA",
  role: "AI & Data Science Engineer",
  tagline: "Engineering student fascinated by how intelligent systems learn, adapt, and align.",
  bio: "Grounded in Python, deep learning frameworks, and applied ML research, with hands-on experience across model training, evaluation, and real-world AI system deployment.",
  status: "AI & Data Science Student",
  availability: "Open to Internships (Summer/Fall 2026/2027)",
  location: "Thane, India 400610",
  email: "krutarth.a@somaiya.edu",
  phone: "+91 9662991858",
  github: "https://github.com/krutarth3238",
  linkedin: "https://www.linkedin.com/in/krutarth-ashar-1a6a08190/",
  education: {
    institution: "K. J. Somaiya School of Engineering",
    degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
    cgpa: "8.972",
    classYear: "Expected Graduation: 2027 (Final Year)",
    location: "Thane / Mumbai, India (IST UTC+5:30)",
    cbse12: "12th Standard (CBSE) – 82% (2023)",
    cbse10: "10th Standard (CBSE) – 91% (2021)"
  },
  focusAreas: [
    "LLM Alignment (RLHF / RLAIF)",
    "ThinkRL & LoRA Fine-Tuning",
    "Agent Orchestration",
    "Retrieval-Augmented Generation (RAG)",
    "Computer Vision & Edge Robotics"
  ]
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "ellanor-ai",
    role: "AI Research Intern",
    company: "EllanorAI",
    companyColor: "#003cffff",
    period: "Feb 2026 – May 2026",
    location: "Remote",
    description: "Core contributor to the in-house RL alignment team, engineering automated data pipelines and scaling reward-modeling infrastructure for LLM experimentation.",
    bullets: [
      "Contributed to reinforcement learning and alignment workflows, working with data pipelines supporting RLHF/RLAIF experimentation and model evaluation.",
      "Assisted in training, fine-tuning, and evaluating Large Language Models, analyzing model outputs and evaluation results across research workflows.",
      "Contributed to an in-house RL alignment library (ThinkRL), developing modular APIs, reward modeling components, and scalable training pipelines.",
      "Designed and prototyped transformer-based deep learning architectures for language-model research and experimentation."
    ],
    skills: ["RLHF / RLAIF", "ThinkRL", "PyTorch", "LoRA", "Transformers", "Reward Modeling", "Model Evaluation"]
  },
  {
    id: "blockwee",
    role: "Web3 Intern",
    company: "Blockwee",
    companyColor: "#5856d6",
    period: "Feb 2025 – Mar 2025",
    location: "Mumbai, India",
    description: "Full-stack engineer for a Web3 digital ecosystem, architecting resilient backend services and interactive frontends for global audiences.",
    bullets: [
      "Developed web platforms with Peachworld supporting live user engagement and large-scale content delivery.",
      "Implemented scalable backend APIs and contributed to real-time data processing pipelines for application workflows.",
      "Collaborated across design, product, and engineering teams to deliver full-stack features end-to-end."
    ],
    skills: ["REST APIs", "Real-Time Pipelines", "Node.js", "Express", "Full-Stack", "Peachworld"]
  },
  {
    id: "kjsce-robocon",
    role: "Member, Image Processing Department",
    company: "KJSCE Robocon",
    companyColor: "#34c759",
    period: "Sep 2023 – Feb 2024",
    location: "Somaiya Robotics Lab",
    description: "Computer vision engineer designing zero-latency target acquisition systems deployed directly to edge hardware for national robotics competitions.",
    bullets: [
      "Built and optimized image processing pipelines with Python and OpenCV for robotics competitions.",
      "Implemented real-time object detection (YOLOv5, Roboflow) for autonomous robot navigation and targeting.",
      "Optimized OpenCV color space masking and bounding-box coordinates to achieve consistent 60+ FPS processing."
    ],
    skills: ["Python", "OpenCV", "YOLOv5", "Roboflow", "Edge Robotics", "Object Detection"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "crewmate",
    title: "Crewmate — Gamified AI Co-Founder Console",
    subtitle: "Independent Project",
    badge: "Crewmate",
    badgeColor: "#003cffff",
    description: "Architected and built a full-stack, gamified AI co-founder platform (FastAPI, PostgreSQL, React 19 + TypeScript, Tailwind v4) featuring a sleek console dashboard and real agent execution loops.",
    tags: ["FastAPI", "PostgreSQL", "React 19", "Tailwind v4", "Groq LLM", "SQLAlchemy 2.0", "Firebase Admin", "Google OAuth 2.0", "Pytest"],
    githubUrl: "https://github.com/krutarth3238/Crewmate",
    architectureStages: [
      {
        step: "01",
        title: "Boundary-Gated Autonomy System",
        desc: "AI that organically levels up (Level 1 to 5)",
        color: "#003cffff",
        details: "Engineered a boundary-gated autonomy system capable of transforming single natural-language prompts into fully drafted Google Slides presentations, automated Gmail complaint resolutions, and dynamic Google Forms.",
        codeSnippet: ""
      },
      {
        step: "02",
        title: "Asynchronous Execution Engine",
        desc: "Groq LLM orchestrating 10+ sandboxed tools",
        color: "#003cffff",
        details: "Built an asynchronous execution engine using Groq LLM inference to orchestrate 10+ sandboxed business tools, maintaining an immutable, append-only mission audit log via SQLAlchemy 2.0 to securely track all AI operations.",
        codeSnippet: ""
      },
      {
        step: "03",
        title: "Stateless Dual-Layer Authentication",
        desc: "HMAC-SHA256 signatures for robust token validation",
        color: "#003cffff",
        details: "Implemented secure, stateless dual-layer authentication using Firebase Admin SDK and Google OAuth 2.0, utilizing HMAC-SHA256 signatures for robust token validation without server-side sessions; covered by an asynchronous Pytest suite.",
        codeSnippet: ""
      }
    ]
  },

  {
    id: "civiciq",
    title: "CivicIQ — AI-Powered Election Education Assistant",
    subtitle: "Hack2skill PromptWars Hackathon",
    badge: "CivicIQ",
    badgeColor: "#5856d6",
    description: "Built an election-education assistant using the Google Gemini API and Google Cloud services, deployed as a Flask + React web app.",
    tags: ["Google Gemini API", "Google Cloud", "Flask", "React"],
    githubUrl: "https://github.com/krutarth3238/civiciq",
    architectureStages: [
      {
        step: "01",
        title: "Data-Driven Education Platform",
        desc: "Structured, context-aware civic information",
        color: "#5856d6",
        details: "Developed the application as a data-driven platform for delivering structured, context-aware information to users.",
        codeSnippet: ""
      },
      {
        step: "02",
        title: "UN SDG 4 Impact SOP",
        desc: "Quality Education alignment for FutureMinds Summit",
        color: "#003cffff",
        details: "Authored the project SOP linking the work to UN SDG 4 (Quality Education) for the FutureMinds Summit, Thailand.",
        codeSnippet: ""
      }
    ]
  },
  {
    id: "saber",
    title: "SABER College Chatbot",
    subtitle: "SIH Hackathon 2024",
    badge: "SABER",
    badgeColor: "#34c759",
    description: "Architected a campus-scale chatbot using LLaMA and Flask, delivering instant, context-aware support to thousands of users.",
    tags: ["LLaMA", "Flask", "RAG", "Web Scraping"],
    githubUrl: "",
    architectureStages: [
      {
        step: "01",
        title: "Campus Knowledge Base RAG",
        desc: "Retrieving from web-scraped campus data",
        color: "#34c759",
        details: "Implemented a RAG pipeline retrieving from a web-scraped campus knowledge base to ground responses in accurate, context-specific information.",
        codeSnippet: ""
      },
      {
        step: "02",
        title: "End-to-End Feature Deployment",
        desc: "Scalable cross-functional delivery",
        color: "#003cffff",
        details: "Led end-to-end feature development and deployed robust, scalable solutions in cross-functional teams.",
        codeSnippet: ""
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Model Alignment",
    icon: "neurology",
    iconColor: "#003cffff",
    description: "Empirical reinforcement learning, preference optimization, and parameter-efficient fine-tuning",
    skills: [
      { name: "RLHF / RLAIF", level: "Production", proof: "EllanorAI alignment pipelines & behavioral scoring", usedIn: "EllanorAI", highlighted: true },
      { name: "ThinkRL Alignment Library", level: "Core Contributor", proof: "Modular APIs, reward modeling components & training hooks", usedIn: "ThinkRL", highlighted: true },
      { name: "LoRA Model Fine-Tuning", level: "Advanced", proof: "Parameter updates with low-rank adapters across task topologies", usedIn: "EllanorAI", highlighted: true },
      { name: "PyTorch Deep Learning", level: "Proficient", proof: "Transformer prototyping, loss curves & gradient stabilization", usedIn: "EllanorAI" },
      { name: "Reward Modeling", level: "Specialist", proof: "Preference pairwise ranking & adversarial drift detection", usedIn: "ThinkRL", highlighted: true },
      { name: "TensorFlow & scikit-learn", level: "Proficient", proof: "Classical ML pipelines, PCA, clustering & regression", usedIn: "Research" }
    ]
  },
  {
    title: "Data Science & Analytics",
    icon: "database",
    iconColor: "#34d399",
    description: "Exploratory data analysis, ETL pipelines, and predictive analytics",
    skills: [
      { name: "Pandas & Data Wrangling", level: "Expert", proof: "Transformed visual map data into clean, traceable datasets with 17 fields", usedIn: "Research", highlighted: true },
      { name: "SQL & Relational Databases", level: "Advanced", proof: "PostgreSQL, SQLite, SQLAlchemy 2.0, query optimization, OLAP/OLTP schemas", usedIn: "Projects", highlighted: true },
      { name: "Predictive Analytics", level: "Proficient", proof: "Feature engineering, regression, classification, PCA", usedIn: "Research", highlighted: true },
      { name: "Exploratory Data Analysis", level: "Advanced", proof: "Uncovering trends and validating extracted records against live portal data", usedIn: "Research", highlighted: true },
      { name: "ETL Pipelines", level: "Advanced", proof: "5-stage data workflow from unstructured generation to clean CSV export", usedIn: "Projects" },
      { name: "Power BI & Tableau Dashboarding", level: "Proficient", proof: "Interactive EDA, status metrics & executive reporting", usedIn: "Analytics" }
    ]
  },
  {
    title: "Agentic AI & GenAI Systems",
    icon: "smart_toy",
    iconColor: "#003cffff",
    description: "Autonomous tool calling, multi-agent orchestration, and prompt guardrails",
    skills: [
      { name: "LLM Agent Orchestration", level: "Advanced", proof: "Groq LLM inference driving 10+ sandboxed business tools", usedIn: "Crewmate", highlighted: true },
      { name: "Boundary-Gated Autonomy", level: "Architect", proof: "Level 1-5 progressive autonomy authorization gates", usedIn: "Crewmate", highlighted: true },
      { name: "Gemini API & Google Cloud", level: "Advanced", proof: "UN SDG 4 civic education platform & multimodal prompts", usedIn: "CivicIQ", highlighted: true },
      { name: "RAG Pipeline Architecture", level: "Advanced", proof: "ChromaDB vector embedding, cosine retrieval & LLaMA grounding", usedIn: "SABER", highlighted: true },
      { name: "Google Workspace APIs", level: "Proficient", proof: "Slides presentation generator, Gmail responder & Forms builder", usedIn: "Crewmate" },
      { name: "Prompt Security & Bias Guardrails", level: "Specialist", proof: "Non-partisan system prompt constraints & citation verification", usedIn: "CivicIQ" }
    ]
  },
  {
    title: "Full-Stack & Cloud Hardening",
    icon: "terminal",
    iconColor: "#003cffff",
    description: "Production web services, atomic transaction locks, and rigorous automated testing",
    skills: [
      { name: "FastAPI & Asynchronous Python", level: "Advanced", proof: "Non-blocking REST APIs, Pydantic validation & Asyncpg", usedIn: "Crewmate", highlighted: true },
      { name: "Node.js & Express Architecture", level: "Advanced", proof: "Multi-tenant ticket routing with atomic ID race prevention", usedIn: "Nexus CRM", highlighted: true },
      { name: "React 19 & TypeScript", level: "Advanced", proof: "Modern functional UI, custom hooks & high-performance state", usedIn: "All Projects", highlighted: true },
      { name: "Dual-Layer Auth (JWT + Firebase)", level: "Architect", proof: "Unified token issuance, HMAC-SHA256 & Google OAuth 2.0", usedIn: "Nexus CRM", highlighted: true },
      { name: "Async Pytest & Jest / Supertest", level: "Advanced", proof: "11-test suite debugging test-isolation race conditions", usedIn: "Nexus CRM & Crewmate", highlighted: true },
      { name: "Computer Vision (OpenCV / YOLOv5)", level: "Proficient", proof: "60+ FPS edge robotics targeting and Roboflow tracking", usedIn: "KJSCE Robocon" }
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Finalist — CaseQuest 2026",
    host: "KJSSE E-Summit",
    description: "Case study competition finalist: Engineered strategic operational resolutions for high-constraint enterprise scenarios with predictive forecasting.",
    icon: "military_tech",
    badgeColor: "#003cffff",
    type: "competition"
  },
  {
    title: "Finalist — MergeMania 2026",
    host: "SPIT E-Summit",
    description: "Case study competition finalist: Algorithmic problem solving, product integration, and rapid prototyping under timed sprint conditions.",
    icon: "military_tech",
    badgeColor: "#34c759",
    type: "competition"
  },
  {
    title: "Finalist — Green Club Ideathon 2026",
    host: "FCRIT",
    description: "Case study competition finalist: Presented telemetry models for environmental intelligence and sustainable agricultural resource monitoring.",
    icon: "military_tech",
    badgeColor: "#5856d6",
    type: "competition"
  },
  {
    title: "Smart India Hackathon (SIH 2024)",
    host: "National Initiative",
    description: "Architected SABER, a campus-scale chatbot using LLaMA and Flask delivering instant RAG-grounded support to thousands of students and faculty.",
    icon: "code",
    badgeColor: "#424245",
    type: "hackathon"
  },
  {
    title: "Hack2skill PromptWars Hackathon",
    host: "Google for Developers",
    description: "Delivered CivicIQ, an AI-powered election education assistant using Gemini API and Google Cloud connected to UN SDG 4.",
    icon: "code",
    badgeColor: "#003cffff",
    type: "hackathon"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuer: "Google for Developers",
    title: "Virtual PromptWars Competition",
    subtopic: "Hack2skill Accredited",
    accentColor: "#003cffff"
  },
  {
    issuer: "University of Virginia",
    title: "Digital Transformation",
    subtopic: "Coursera Accredited",
    accentColor: "#34c759"
  },
  {
    issuer: "IIM Ahmedabad",
    title: "Leadership Skills",
    subtopic: "Executive Specialization",
    accentColor: "#003cffff"
  },
  {
    issuer: "Yale University",
    title: "Financial Markets",
    subtopic: "Honors Specialization",
    accentColor: "#5856d6"
  },
  {
    issuer: "Google Cloud",
    title: "Intro to Large Language Models (LLMs)",
    subtopic: "Model Architectures",
    accentColor: "#003cffff"
  },
  {
    issuer: "Google Cloud",
    title: "Introduction to Generative AI",
    subtopic: "Foundational GenAI",
    accentColor: "#003cffff"
  },
  {
    issuer: "Google Cloud",
    title: "Introduction to Responsible AI",
    subtopic: "Safety & Alignment",
    accentColor: "#34c759"
  }
];

