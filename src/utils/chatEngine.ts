/**
 * Intelligent AI Chat & NLP Intent Resolution Engine for Sowndharya P.L. Portfolio
 * Supports typo tolerance (Levenshtein distance), keyword weighting, sub-intent detection,
 * and rich contextual responses for both AIAssistant and AITerminal.
 */

// Levenshtein distance for fuzzy matching typos (e.g. "intership" -> "internship")
export function levenshtein(a: string, b: string): number {
  const an = a ? a.length : 0;
  const bn = b ? b.length : 0;
  if (an === 0) return bn;
  if (bn === 0) return an;
  const matrix: number[][] = [];
  for (let i = 0; i <= bn; ++i) matrix[i] = [i];
  for (let i = 0; i <= an; ++i) matrix[0][i] = i;
  for (let i = 1; i <= bn; ++i) {
    for (let j = 1; j <= an; ++j) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[bn][an];
}

export function isFuzzyMatch(word: string, target: string, maxDistance = 1): boolean {
  if (word === target) return true;
  // If word length is less than 6 characters, only exact matches to avoid collisions like 'reach' vs 'react'
  if (word.length < 6 || target.length < 6) {
    return false;
  }
  const dist = levenshtein(word, target);
  return dist <= maxDistance;
}

export type ChatIntent =
  | "internship"
  | "skills"
  | "projects"
  | "project_curanet"
  | "project_pharmatrace"
  | "project_smartexpense"
  | "project_aerial"
  | "project_civicpulse"
  | "project_connectify"
  | "project_modelhubx"
  | "project_aiproduct"
  | "project_clixora"
  | "project_indus"
  | "project_oncology"
  | "education"
  | "cgpa"
  | "certifications"
  | "contact"
  | "email"
  | "phone"
  | "location"
  | "linkedin"
  | "github"
  | "leetcode"
  | "resume"
  | "about"
  | "greeting"
  | "thanks"
  | "help"
  | "unknown";

export const KB = {
  about: `Sowndharya P.L. is an AI Engineer, Full Stack Developer, and Machine Learning Enthusiast from Tirupur, Tamil Nadu, India.

🎓 Education: Pursuing B.E. Computer Science & Engineering (Honours in Blockchain Technology) at Dr. N.G.P Institute of Technology (2023–2027) with a CGPA of 8.35/10.

💼 Experience: Software Development Intern at Mist Software Solutions (PHP, MySQL, Web Dev).

🚀 Projects: 11 real-world production projects on GitHub spanning Full Stack, AI/ML, Cloud/MLOps, Mobile, and IoT.`,

  skills: `💻 Programming Languages:
• Java, Python, C

🧠 AI & Machine Learning:
• PyTorch, OpenCV, CNN, Image Processing, Explainable AI (Grad-CAM / XAI), FAISS, LangChain

🌐 Web & Full Stack:
• HTML5, CSS3, JavaScript, React, Next.js, Node.js, Express, PHP, Laravel, Bootstrap, TailwindCSS, WebSockets

🗄️ Databases:
• PostgreSQL, MySQL, SQLite, Redis

⚙️ DevOps & Cloud:
• Docker, Kubernetes, Git, GitHub Actions, CI/CD

🛠️ Developer Tools:
• VS Code, Android Studio, Postman, IntelliJ IDEA, Render, Vercel`,

  projects: `🚀 Sowndharya has built 11 real-world projects across AI/ML, Full Stack, Mobile & IoT:

1. 🏥 CuraNet – Caregiver Support System (HTML, CSS, JS, PostgreSQL)
   🔗 Demo: https://curanet-mj06.onrender.com | GitHub: github.com/SowndharyaPL15/CuraNet

2. 💊 PharmaTrace AI – Medicine Authentication (Node.js, Express, PostgreSQL, Python, Flask, OpenCV)
   🔗 Demo: https://pharmatrace-web-server.onrender.com | GitHub: github.com/SowndharyaPL15/pharmatrace-ai

3. 📱 SmartExpensePro – SMS Expense Tracker (Android, Java, SQLite)
   🔗 Demo: https://smartexpensepro.onrender.com | GitHub: github.com/SowndharyaPL15/SmartExpensePro

4. 🛸 Automated Aerial Object Detection – IoT & AI (Arduino, Embedded Systems, IoT, C/C++)
   🔗 Tinkercad: https://www.tinkercad.com/things/3HbPGczwYv0-automated-aerial-object-detection | 🥈 2nd Prize Research Paper

5. 🏛️ CivicPulse – Smart Civic Issue Management (PHP, MySQL, JavaScript, Bootstrap)
   🔗 Demo: https://civicpulse-jq8k.onrender.com | GitHub: github.com/SowndharyaPL15/CivicPulse

6. 💬 Connectify – Real-Time Chat App (Laravel, PHP, MySQL, JavaScript, WebSockets)
   🔗 Demo: https://connectify-bw2w.onrender.com | GitHub: github.com/SowndharyaPL15/connectify-cartrabbit

7. ⚙️ ModelHubX – MLOps Registry & Deployment (FastAPI, Kubernetes, Redis, Docker, Next.js)
   🔗 Demo: https://modelhubx-1.onrender.com | GitHub: github.com/SowndharyaPL15/ModelHubX

8. 🔍 AI Product Authentication System (Python, PyTorch, OpenCV, CNN, React)
   🔗 Demo: https://ai-product-authentication-system.onrender.com | GitHub: github.com/SowndharyaPL15/AI-Product-Authentication-System

9. ⚡ Clixora – URL Shortener & Analytics (React, Node.js, Express, PostgreSQL)
   🔗 Demo: https://clixora-frontend.onrender.com | GitHub: github.com/SowndharyaPL15/Clixora

10. 🏭 INDUS AI – Industrial Cognitive Memory (FastAPI, React, PostgreSQL, FAISS, LangChain)
    🔗 Demo: https://indus-ai-frontend.onrender.com | GitHub: github.com/SowndharyaPL15/indus_ai

11. 🧬 Precision Oncology – Clinical Decision Support System (FastAPI, React, TensorFlow, PyTorch, DenseNet, XAI)
    🔗 Demo: https://precision-oncology-frontend.onrender.com | GitHub: github.com/SowndharyaPL15/Precision-Oncology-CDSS`,

  education: `🎓 B.E. Computer Science & Engineering (Honours in Blockchain Technology)
• Institution: Dr. N.G.P. Institute of Technology, Coimbatore
• Duration: 2023 – 2027
• Academic Score: CGPA: 8.35 / 10 (SEM-6)

📚 Higher Secondary Education (HSE / 12th)
• School: Sakthi Vigneswara School
• Year: 2021 – 2023 | Score: 84%

📚 Secondary School Leaving Certificate (SSLC / 10th)
• School: Sri Sai Matriculation School
• Year: 2021 | Status: Passed`,

  cgpa: `🎓 Sowndharya's Academic Performance:
• B.E. CSE (Blockchain Honours): **CGPA: 8.35 / 10** at Dr. N.G.P. Institute of Technology (2023–2027)
• Higher Secondary (12th): **84%** at Sakthi Vigneswara School
• SSLC (10th): **Passed** at Sri Sai Matriculation School`,

  internship: `💼 Software Development Intern — Mist Software Solutions, Coimbatore (15 Days)

Key Contributions & Responsibilities:
• Developed and deployed responsive user interfaces using HTML5, CSS3, JavaScript, and Bootstrap.
• Engineered robust backend application logic and data endpoints using PHP.
• Built full CRUD (Create, Read, Update, Delete) functionality for dynamic real-time data handling.
• Designed, structured, and normalized relational database tables in MySQL.
• Conducted comprehensive debugging and manual testing to ensure system reliability and uptime.`,

  certifications: `🏆 Verified Certifications & Honors:

1. 🥇 Full Stack Java Development — Simplilearn (2025)
2. ⚡ Java Full Stack with React JS & AI — Brainovision Solutions (2024)
3. 🐍 Data Science using Python — Dr. N.G.P. iTech & Brainovision (2024)
4. 🥈 2nd Prize — Paper Presentation on "Aerial Object Detection using IoT & AI" (2024)`,

  contact: `📬 Contact Information for Sowndharya P.L.:

📧 Email: plsowndharya@gmail.com
📱 Phone / Mobile: +91 9884606863
📍 Location: Tirupur, Tamil Nadu, India
💼 LinkedIn: linkedin.com/in/sowndharyapl
🐙 GitHub: github.com/SowndharyaPL15
💡 LeetCode: leetcode.com/u/SOWNDHARYAPL`,

  email: `📧 Email: **plsowndharya@gmail.com**\nFeel free to send a direct message or collaboration inquiry!`,
  phone: `📱 Phone / Mobile: **+91 9884606863**\nAvailable for opportunities and discussions.`,
  location: `📍 Location: **Tirupur, Tamil Nadu, India** (Open to local, hybrid, and remote roles).`,
  linkedin: `💼 LinkedIn: https://www.linkedin.com/in/sowndharyapl/\nConnect with Sowndharya on LinkedIn!`,
  github: `🐙 GitHub: https://github.com/SowndharyaPL15\nExplore 11 public repositories, source code, and active commits!`,
  leetcode: `💡 LeetCode: https://leetcode.com/u/SOWNDHARYAPL/\nView algorithm problem solving practice and rank!`,

  resume: `📄 Sowndharya's Resume is available for interactive preview and high-resolution PDF download.

It includes:
• Verified Academic Record (B.E. CSE Blockchain Honours, CGPA 8.35)
• 11 Real-World Production Projects
• Mist Software Solutions Internship
• Verified Industry Certifications (Simplilearn, Brainovision, etc.)`,

  greeting: `Hello! 👋 I'm Sowndharya's AI Portfolio Assistant.

I can help you explore:
• 💼 Internship & Experience at Mist Software
• 💻 Technical Skills & Tech Stack
• 🚀 11 Real-World Projects & Live Demos
• 🎓 Education & CGPA (8.35)
• 🏆 Certifications & Achievements
• 📄 Resume Preview & Download
• 📬 Contact Info & Socials

What would you like to know?`,

  thanks: `You're very welcome! 😊 Let me know if you need any other details about Sowndharya's skills, projects, internship, or contact info.`,

  unknown: `I can help you with anything regarding Sowndharya's portfolio!

Try asking about:
• 💼 "Tell me about her internship" or "Work experience"
• 💻 "What are her skills and tech stack?"
• 🚀 "Show her projects" or "Tell me about CuraNet / PharmaTrace"
• 🎓 "What is her education and CGPA?"
• 🏆 "What certifications does she hold?"
• 📄 "Download resume"
• 📬 "How to contact her?"`,
};

// Project specific breakdowns
const PROJECT_DETAILS: Record<string, string> = {
  curanet: `🏥 CuraNet – Caregiver Support System
• Stack: HTML, CSS, JavaScript, PostgreSQL
• Overview: A dedicated digital support system designed for caregivers, enabling seamless patient record tracking, medication schedules, and direct caregiver communication.
• 🔗 Live Demo: https://curanet-mj06.onrender.com/
• 🐙 GitHub: https://github.com/SowndharyaPL15/CuraNet`,

  pharmatrace: `💊 PharmaTrace AI – Medicine Authentication & Anti-Counterfeiting
• Stack: Node.js, Express, PostgreSQL, Python, Flask, OpenCV
• Overview: An AI-driven pharmaceutical verification platform utilizing computer vision and cryptographic serial tracking to detect counterfeit drugs.
• 🔗 Live Demo: https://pharmatrace-web-server.onrender.com
• 🐙 GitHub: https://github.com/SowndharyaPL15/pharmatrace-ai`,

  smartexpense: `📱 SmartExpensePro – SMS-Based Automated Expense Tracker
• Stack: Android (Native), Java, SQLite, MPAndroidChart, SMS Retriever API
• Overview: An Android utility that automatically parses incoming transaction SMS messages, categorizes expenses, and generates insightful spending analytics.
• 🔗 Live Demo: https://smartexpensepro.onrender.com/
• 🐙 GitHub: https://github.com/SowndharyaPL15/SmartExpensePro`,

  aerial: `🛸 Automated Aerial Object Detection – IoT & AI
• Stack: Arduino, Embedded C/C++, Ultrasonic Sensors, Computer Vision, IoT
• Overview: An intelligent UAV/aerial monitoring system capable of automated obstacle detection and target classification. Awarded 2nd Prize in Paper Presentation.
• 🔗 Tinkercad Simulation: https://www.tinkercad.com/things/3HbPGczwYv0-automated-aerial-object-detection
• 🐙 GitHub: https://github.com/SowndharyaPL15/Automated-Aerial-Object-Detection`,

  civicpulse: `🏛️ CivicPulse – Smart Civic Issue Reporting & Management
• Stack: PHP, MySQL, JavaScript, Bootstrap, Leaflet.js
• Overview: A civic engagement portal empowering citizens to report local municipal issues with geo-tagging, status tracking, and administrative dispatch.
• 🔗 Live Demo: https://civicpulse-jq8k.onrender.com
• 🐙 GitHub: https://github.com/SowndharyaPL15/CivicPulse`,

  connectify: `💬 Connectify – Real-Time Chat & Collaboration App
• Stack: Laravel, PHP, MySQL, JavaScript, WebSockets, Pusher
• Overview: A high-performance real-time messaging application with instant chat rooms, online status indicators, and encrypted communications.
• 🔗 Live Demo: https://connectify-bw2w.onrender.com
• 🐙 GitHub: https://github.com/SowndharyaPL15/connectify-cartrabbit`,

  modelhubx: `⚙️ ModelHubX – MLOps Model Registry & Deployment Engine
• Stack: FastAPI, Kubernetes, Redis, Docker, Next.js, Celery
• Overview: An enterprise MLOps platform for versioning, containerizing, and orchestrating machine learning model deployments with real-time inference telemetry.
• 🔗 Live Demo: https://modelhubx-1.onrender.com/
• 🐙 GitHub: https://github.com/SowndharyaPL15/ModelHubX`,

  aiproduct: `🔍 AI Product Authentication System
• Stack: Python, PyTorch, OpenCV, CNN (ResNet), React, FastAPI
• Overview: A deep learning quality control system that inspects product packaging features and serial codes to prevent counterfeit distribution.
• 🔗 Live Demo: https://ai-product-authentication-system.onrender.com
• 🐙 GitHub: https://github.com/SowndharyaPL15/AI-Product-Authentication-System`,

  clixora: `⚡ Clixora – High-Performance URL Shortener & Analytics
• Stack: React, Node.js, Express, PostgreSQL, Redis, Chart.js
• Overview: A fast URL shortening microservice featuring click stream analytics, geo-location insights, QR code generation, and custom alias support.
• 🔗 Live Demo: https://clixora-frontend.onrender.com
• 🐙 GitHub: https://github.com/SowndharyaPL15/Clixora`,

  indus: `🏭 INDUS AI – Industrial Cognitive Memory & Troubleshooting
• Stack: FastAPI, React, PostgreSQL, FAISS, LangChain, Python
• Overview: An AI assistant engineered for industrial automation, indexing technical machine manuals via vector search (RAG) to provide instant diagnostic steps.
• 🔗 Live Demo: https://indus-ai-frontend.onrender.com
• 🐙 GitHub: https://github.com/SowndharyaPL15/indus_ai`,

  oncology: `🧬 Precision Oncology – Clinical Decision Support System (CDSS)
• Stack: FastAPI, React, TensorFlow, PyTorch, DenseNet, Grad-CAM (XAI)
• Overview: An explainable clinical diagnostic AI model assisting oncologists in histopathology image classification with visual heatmap justifications.
• 🔗 Live Demo: https://precision-oncology-frontend.onrender.com
• 🐙 GitHub: https://github.com/SowndharyaPL15/Precision-Oncology-CDSS`,
};

// Keyword banks with common typos
const INTERNSHIP_KEYWORDS = [
  "internship", "internships", "intership", "interships", "intern", "interns",
  "intenship", "internshp", "intrnship", "intrenship", "interning", "interned",
  "mist", "mist software", "work experience", "working experience", "experience",
  "expereince", "experiance", "experince", "expreience", "exp", "job", "jobs",
  "career", "employment", "previous role", "company", "companies", "role", "roles"
];

const SKILL_KEYWORDS = [
  "skill", "skills", "skil", "skils", "tech", "techs", "stack", "stacks",
  "technology", "technologies", "technolog", "technologies", "language", "languages",
  "programming", "programing", "coding", "code", "framework", "frameworks",
  "tool", "tools", "expertise", "proficient", "proficiency", "abilities",
  "python", "java", "react", "nextjs", "node", "express", "fastapi", "laravel",
  "php", "pytorch", "opencv", "docker", "kubernetes", "sql", "postgresql",
  "mysql", "sqlite", "redis", "devops", "machine learning", "ai", "ml", "fullstack"
];

const PROJECT_KEYWORDS = [
  "project", "projects", "projct", "projcts", "proj", "projs", "app", "apps",
  "application", "applications", "built", "build", "developed", "develop",
  "create", "created", "github repo", "github repos", "github repository",
  "repositories", "portfolio works", "work done", "creations", "demos"
];

const EDUCATION_KEYWORDS = [
  "education", "educaton", "educatn", "edukation", "college", "colleg",
  "university", "school", "degree", "academic", "academics", "academick",
  "b.e", "be cse", "cse", "blockchain honours", "ngp", "dr ngp",
  "sakthi", "sakthi vigneswara", "sai matriculation", "sslc", "hse",
  "10th", "12th", "study", "studying", "studies", "studied", "matriculation"
];

const CGPA_KEYWORDS = [
  "cgpa", "gpa", "grade", "grades", "percentage", "marks", "score", "scores", "academic score"
];

const CERT_KEYWORDS = [
  "cert", "certs", "certification", "certifications", "certificate", "certificates",
  "certifcate", "award", "awards", "prize", "prizes", "achievement", "achievements",
  "honors", "honour", "simplilearn", "brainovision", "paper presentation", "recognition",
  "credential", "credentials"
];

const CONTACT_KEYWORDS = [
  "contact", "contct", "cntact", "reach", "email", "mail", "gmail", "phone",
  "mobile", "call", "number", "whatsapp", "message", "linkedin", "github",
  "leetcode", "social", "socials", "location", "address", "city", "tirupur",
  "connect", "get in touch", "hire", "talk"
];

const RESUME_KEYWORDS = [
  "resume", "resum", "cv", "curriculum vitae", "biodata", "download resume",
  "view resume", "pdf resume", "profile download", "get resume", "resume pdf"
];

const GREETING_KEYWORDS = [
  "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
  "greetings", "howdy", "sup", "yo", "hola", "namaste"
];

const THANKS_KEYWORDS = [
  "thank", "thanks", "thx", "thank you", "appreciate", "awesome", "great", "cool", "nice"
];

const ABOUT_KEYWORDS = [
  "who is sowndharya", "who is she", "who are you", "about sowndharya",
  "tell me about yourself", "tell me about sowndharya", "tell me about her",
  "introduce yourself", "introduce sowndharya", "biography",
  "bio", "background", "who made this", "who built this",
  "author", "creator", "profile summary", "about me"
];

export function detectIntent(rawInput: string): ChatIntent {
  const query = rawInput.toLowerCase().trim();
  if (!query) return "unknown";

  // Clean tokens
  const cleanStr = query.replace(/[^a-z0-9\s]/g, " ");
  const tokens = cleanStr.split(/\s+/).filter((t) => t.length > 0);

  // 1. Direct Specific Sub-Intent checks (Project / Sub-intent names)
  if (/\b(curanet)\b/.test(cleanStr)) return "project_curanet";
  if (/\b(pharmatrace|medicine auth)\b/.test(cleanStr)) return "project_pharmatrace";
  if (/\b(smartexpense|expense tracker|sms expense)\b/.test(cleanStr)) return "project_smartexpense";
  if (/\b(aerial|drone|object detection|tinkercad)\b/.test(cleanStr)) return "project_aerial";
  if (/\b(civicpulse|civic issue)\b/.test(cleanStr)) return "project_civicpulse";
  if (/\b(connectify|chat app)\b/.test(cleanStr)) return "project_connectify";
  if (/\b(modelhubx|mlops|model registry)\b/.test(cleanStr)) return "project_modelhubx";
  if (/\b(ai product|counterfeit|product auth)\b/.test(cleanStr)) return "project_aiproduct";
  if (/\b(clixora|url shortener)\b/.test(cleanStr)) return "project_clixora";
  if (/\b(indus|indus ai|industrial memory)\b/.test(cleanStr)) return "project_indus";
  if (/\b(oncology|precision oncology|cdss|cancer)\b/.test(cleanStr)) return "project_oncology";

  // Contact sub-intents
  if (/\b(email|gmail|mail id|send email)\b/.test(cleanStr)) return "email";
  if (/\b(phone|mobile|call|number|whatsapp)\b/.test(cleanStr)) return "phone";
  if (/\b(location|city|address|where.*live|where.*from|tirupur)\b/.test(cleanStr)) return "location";
  if (/\b(linkedin)\b/.test(cleanStr)) return "linkedin";
  if (/\b(leetcode)\b/.test(cleanStr)) return "leetcode";
  if (/\b(github profile|github link)\b/.test(cleanStr)) return "github";

  // CGPA specific sub-intent
  if (/\b(cgpa|gpa|marks|percentage|score|grades)\b/.test(cleanStr)) return "cgpa";

  // 2. Score Categories
  let internshipScore = 0;
  let skillsScore = 0;
  let projectsScore = 0;
  let educationScore = 0;
  let certsScore = 0;
  let contactScore = 0;
  let resumeScore = 0;
  let aboutScore = 0;
  let greetingScore = 0;
  let thanksScore = 0;

  // Check phrase inclusions
  if (/mist\s*software|work\s*experience|working\s*experience|internship\s*experience|previous\s*work/.test(cleanStr)) {
    internshipScore += 20;
  }
  if (/tech\s*stack|programming\s*languages|what\s*technologies/.test(cleanStr)) {
    skillsScore += 20;
  }
  if (/paper\s*presentation|simplilearn|brainovision/.test(cleanStr)) {
    certsScore += 20;
  }
  if (/download\s*resume|view\s*resume|get\s*resume|resume\s*pdf/.test(cleanStr)) {
    resumeScore += 20;
  }

  // Check token by token
  for (const token of tokens) {
    // Internship matching (including typo tolerance for "intership", "internshp", etc.)
    for (const kw of INTERNSHIP_KEYWORDS) {
      if (token === kw || isFuzzyMatch(token, kw, 1)) {
        internshipScore += kw === "experience" || kw === "intern" || kw === "internship" || kw === "intership" ? 10 : 5;
        break;
      }
    }

    // Skills matching
    for (const kw of SKILL_KEYWORDS) {
      if (token === kw || (token.length >= 5 && isFuzzyMatch(token, kw, 1))) {
        skillsScore += kw === "skill" || kw === "skills" || kw === "stack" ? 10 : 5;
        break;
      }
    }

    // Projects matching
    for (const kw of PROJECT_KEYWORDS) {
      if (token === kw || (token.length >= 5 && isFuzzyMatch(token, kw, 1))) {
        projectsScore += kw === "project" || kw === "projects" || kw === "projct" ? 10 : 4;
        break;
      }
    }

    // Education matching
    for (const kw of EDUCATION_KEYWORDS) {
      if (token === kw || (token.length >= 5 && isFuzzyMatch(token, kw, 1))) {
        educationScore += kw === "education" || kw === "college" || kw === "degree" || kw === "study" ? 10 : 5;
        break;
      }
    }

    // Certifications matching
    for (const kw of CERT_KEYWORDS) {
      if (token === kw || (token.length >= 5 && isFuzzyMatch(token, kw, 1))) {
        certsScore += kw.startsWith("cert") || kw === "award" || kw === "prize" ? 10 : 5;
        break;
      }
    }

    // Contact matching
    for (const kw of CONTACT_KEYWORDS) {
      if (token === kw || (token.length >= 5 && isFuzzyMatch(token, kw, 1))) {
        contactScore += kw === "contact" || kw === "email" || kw === "phone" ? 10 : 5;
        break;
      }
    }

    // Resume matching
    for (const kw of RESUME_KEYWORDS) {
      if (token === kw || (token.length >= 4 && isFuzzyMatch(token, kw, 1))) {
        resumeScore += 10;
        break;
      }
    }

    // Greeting matching
    for (const kw of GREETING_KEYWORDS) {
      if (token === kw) {
        greetingScore += 6;
        break;
      }
    }

    // Thanks matching
    for (const kw of THANKS_KEYWORDS) {
      if (token === kw || isFuzzyMatch(token, kw, 1)) {
        thanksScore += 6;
        break;
      }
    }
  }

  // Calculate highest domain score
  const maxDomainScore = Math.max(
    internshipScore,
    skillsScore,
    projectsScore,
    educationScore,
    certsScore,
    contactScore,
    resumeScore
  );

  // About intent should only match if no domain-specific query exists or explicit about queries
  if (maxDomainScore === 0) {
    for (const phrase of ABOUT_KEYWORDS) {
      if (cleanStr.includes(phrase)) {
        aboutScore += 15;
        break;
      }
    }
    if (/^(who|about|introduce|yourself|bio|background|profile|sowndharya)$/.test(cleanStr.trim())) {
      aboutScore += 15;
    }
    if (/^tell me about (her|yourself|sowndharya|you)$/.test(cleanStr.trim())) {
      aboutScore += 15;
    }
  }

  const scores: { intent: ChatIntent; score: number }[] = [
    { intent: "internship", score: internshipScore },
    { intent: "skills", score: skillsScore },
    { intent: "projects", score: projectsScore },
    { intent: "education", score: educationScore },
    { intent: "certifications", score: certsScore },
    { intent: "contact", score: contactScore },
    { intent: "resume", score: resumeScore },
    { intent: "about", score: aboutScore },
    { intent: "greeting", score: greetingScore },
    { intent: "thanks", score: thanksScore },
  ];

  scores.sort((a, b) => b.score - a.score);

  if (scores[0].score > 0) {
    return scores[0].intent;
  }

  return "unknown";
}

export function getChatResponse(intent: ChatIntent): string {
  switch (intent) {
    case "internship":
      return KB.internship;
    case "skills":
      return KB.skills;
    case "projects":
      return KB.projects;
    case "project_curanet":
      return PROJECT_DETAILS.curanet;
    case "project_pharmatrace":
      return PROJECT_DETAILS.pharmatrace;
    case "project_smartexpense":
      return PROJECT_DETAILS.smartexpense;
    case "project_aerial":
      return PROJECT_DETAILS.aerial;
    case "project_civicpulse":
      return PROJECT_DETAILS.civicpulse;
    case "project_connectify":
      return PROJECT_DETAILS.connectify;
    case "project_modelhubx":
      return PROJECT_DETAILS.modelhubx;
    case "project_aiproduct":
      return PROJECT_DETAILS.aiproduct;
    case "project_clixora":
      return PROJECT_DETAILS.clixora;
    case "project_indus":
      return PROJECT_DETAILS.indus;
    case "project_oncology":
      return PROJECT_DETAILS.oncology;
    case "education":
      return KB.education;
    case "cgpa":
      return KB.cgpa;
    case "certifications":
      return KB.certifications;
    case "contact":
      return KB.contact;
    case "email":
      return KB.email;
    case "phone":
      return KB.phone;
    case "location":
      return KB.location;
    case "linkedin":
      return KB.linkedin;
    case "github":
      return KB.github;
    case "leetcode":
      return KB.leetcode;
    case "resume":
      return KB.resume;
    case "about":
      return KB.about;
    case "greeting":
      return KB.greeting;
    case "thanks":
      return KB.thanks;
    case "help":
    case "unknown":
    default:
      return KB.unknown;
  }
}
