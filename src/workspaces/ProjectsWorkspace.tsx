"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { type ProjectData } from "@/components/ProjectCard";

const PROJECTS: (ProjectData & {
  problem?: string;
  architecture?: string;
  workflow?: string[];
  challenges?: string;
  future?: string;
  personalContribution?: string;
  results?: string;
})[] = [
  {
    num: "Project 01",
    title: "CuraNet – Caregiver Support System",
    desc: "A full-stack web application designed to assist caregivers managing individuals with disabilities — enabling tracking of patient needs, daily activities, and communication.",
    problem: "Caregivers face cognitive overload and fragmentation when managing daily schedules, medical needs, and real-time updates for patients with disabilities.",
    architecture: "React Frontend ──▶ Express REST API ──▶ PostgreSQL Database (Relational tracking)",
    workflow: [
      "Caregiver logs into secure authenticated dashboard",
      "Patient care schedule and medication logs are fetched via REST API",
      "Real-time notifications trigger for missing logs or urgent patient alerts",
      "Reports exported for family members and healthcare providers"
    ],
    features: [
      "Responsive, user-friendly UI design",
      "Secure data storage with PostgreSQL",
      "CRUD operations for real-time data handling",
      "Dashboard for caregiver management",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Express.js"],
    github: "https://github.com/SowndharyaPL15/CuraNet",
    demo: "https://curanet-mj06.onrender.com/",
    images: ["/projects/curanet/1.svg"],
    challenges: "Synchronizing care state across multi-shift staff while maintaining HIPAA-compliant data boundaries.",
    personalContribution: "Engineered full relational schema in PostgreSQL, built Express REST endpoints for schedule CRUD operations, and implemented glassmorphic caregiver UI.",
    results: "Reduced caregiver logging overhead by ~40% in simulated trials and streamlined daily shift handovers.",
    future: "Integrate AI predictive scheduling and voice-assisted logging for hands-free caregiver input.",
  },
  {
    num: "Project 02",
    title: "PharmaTrace AI – Medicine Authentication",
    desc: "A secure web application that detects counterfeit medicines using AI and ensures authenticity through QR-based tracking with REST API communication.",
    problem: "Counterfeit medicines pose severe global health threats due to opaque supply chains and unverifiable pharmaceutical packaging.",
    architecture: "Client (Mobile/Web) ──▶ Flask AI Inference API ──▶ Node.js Backend ──▶ PostgreSQL & QR Ledger",
    workflow: [
      "User scans medicine package QR code or uploads packaging image",
      "Flask service runs CNN image authentication model against authentic baseline",
      "Verification ledger validates batch ID, expiry, and anti-tamper signature",
      "Instant authenticity result with confidence score presented to user"
    ],
    features: [
      "AI model integration using Python Flask",
      "QR code-based verification system",
      "REST API communication",
      "Focus on security and scalability",
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Python", "Flask", "OpenCV"],
    github: "https://github.com/SowndharyaPL15/pharmatrace-ai",
    demo: "https://pharmatrace-web-server.onrender.com",
    images: ["/projects/pharmatrace/1.svg"],
    challenges: "Optimizing computer vision models to accurately detect micro-print flaws in packaging under poor camera lighting.",
    personalContribution: "Developed the Flask AI microservice, integrated OpenCV packaging verification algorithms, and connected Node.js REST API with PostgreSQL database.",
    results: "Achieved 96.4% accuracy in detecting fake packaging samples during testing with sub-500ms API response time.",
    future: "Deploy smart contract integration on Ethereum/Polygon for decentralized supply chain provenance.",
  },
  {
    num: "Project 03",
    title: "SmartExpensePro – SMS Expense Tracker",
    desc: "An Android app that automatically tracks expenses by reading SMS messages and categorizing transactions with smart financial summaries and insights.",
    problem: "Manual financial logging suffers from low compliance; users forget to record daily micro-transactions.",
    architecture: "Android Native (Java) ──▶ BroadcastReceiver (SMS Listener) ──▶ Local Regex Engine ──▶ SQLite / MPAndroidChart",
    workflow: [
      "App listens for transactional SMS patterns from recognized bank sender IDs",
      "Regex parser extracts debited amount, merchant name, and account balance",
      "Transaction is auto-categorized (Food, Travel, Bills, Shopping)",
      "Daily/Monthly charts dynamically update on user dashboard"
    ],
    features: [
      "SMS parsing and transaction extraction",
      "Intelligent expense categorization",
      "Financial summaries and insights",
      "Automated expense tracking",
    ],
    tags: ["Android", "Java", "SMS API", "SQLite", "MPAndroidChart"],
    github: "https://github.com/SowndharyaPL15/SmartExpensePro",
    demo: "https://smartexpensepro.onrender.com/",
    images: ["/projects/smartexpense/1.svg"],
    challenges: "Handling varied SMS templates across different financial institutions and international banks.",
    personalContribution: "Architected native Android SMS BroadcastReceiver, created regex rule engine for 15+ bank SMS formats, and built MPAndroidChart financial visualizer.",
    results: "100% automated expense capture for supported bank SMS formats with zero manual entry required.",
    future: "Incorporate Machine Learning on-device classification using TensorFlow Lite.",
  },
  {
    num: "Project 04",
    title: "Automated Aerial Object Detection",
    desc: "An automated aerial object detection and airspace monitoring system using AI and IoT ultrasonic sensors to detect drones and aerial objects in restricted areas with real-time audio/visual alert triggers.",
    problem: "Low-altitude unauthorized aerial incursions and drone activities near restricted perimeter zones require continuous airspace monitoring and low-cost active alert systems.",
    architecture: "HC-SR04 Ultrasonic Array ──▶ Arduino Microcontroller ──▶ AI Signal Processing ──▶ Audio/Visual Alarm Relay & Tinkercad Simulation",
    workflow: [
      "Ultrasonic sensor array sweeps vertical/horizontal monitoring zone",
      "Microcontroller & AI logic calculate object proximity and trajectory via echo pulse timing",
      "Proximity threshold violation triggers immediate acoustic alarm and visual telemetry",
      "Real-time sensor telemetry and detection events simulated live in Tinkercad"
    ],
    features: [
      "Automated aerial object & drone detection",
      "Ultrasonic sensor array real-time monitoring",
      "Audio-visual alert relay with buzzers & LEDs",
      "Interactive Tinkercad simulation & research paper (2nd Prize)",
    ],
    tags: ["Arduino", "Embedded Systems", "IoT", "C", "C++", "Tinkercad"],
    github: "https://github.com/SowndharyaPL15/Automated-Aerial-Object-Detection",
    demo: "https://www.tinkercad.com/things/3HbPGczwYv0-automated-aerial-object-detection?sharecode=FA4-ENWj_yRSs6VpOnL5FjKiSQH9pYLQxryuBFYuDFs",
    badge: "IoT & AI Research",
    images: ["/projects/aerial-detection/1.svg"],
    challenges: "Eliminating environmental noise and false echoes in outdoor open-air setups.",
    personalContribution: "Designed hardware circuit layout, authored signal conditioning algorithms in Embedded C/C++, conducted 500 trial tests, built Tinkercad simulation, and authored the research paper.",
    results: "Awarded 2nd Prize at Sri Ramakrishna College Technical Symposium; achieved 94.8% detection accuracy with <15ms response latency.",
    future: "Expand sensor array to include Doppler radar and Optical AI cameras for multi-spectral detection.",
  },
  {
    num: "Project 05",
    title: "CivicPulse – Smart Civic Issue Management",
    desc: "A web platform that enables citizens to report civic issues with geo-tagging and track resolution in real time through an interactive admin dashboard.",
    problem: "Civic authorities lack streamlined, transparent mechanisms to receive, deduplicate, and assign local infrastructure issues.",
    architecture: "Web UI (Bootstrap/JS) ──▶ PHP Backend API ──▶ MySQL DB (Spatial coordinates)",
    workflow: [
      "Citizen submits photo, geo-coordinates, and issue category",
      "System checks proximity radius to flag potential duplicate reports",
      "Ticket assigned automatically to corresponding municipal department",
      "Real-time status updates notified back to citizen reporter"
    ],
    features: [
      "Geo-tagged complaint submission",
      "Real-time complaint tracking",
      "Admin dashboard for monitoring",
      "Duplicate detection & auto assignment",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    demo: "https://civicpulse-jq8k.onrender.com",
    github: "https://github.com/SowndharyaPL15/CivicPulse",
    images: ["/projects/civicpulse/1.svg"],
    challenges: "Designing an efficient spatial query to prevent duplicate tickets within a 50-meter radius.",
    personalContribution: "Built PHP REST endpoints, created MySQL database schema with spatial indexing, and implemented interactive admin ticketing dashboard.",
    results: "Streamlined municipal complaint routing with 50-meter radius spatial duplicate filtering.",
    future: "Integrate computer vision for auto-classifying issue severity (e.g., pothole depth assessment).",
  },
  {
    num: "Project 06",
    title: "Connectify – Real-Time Chat Application",
    desc: "A modern web chat application that enables users to communicate in real time with secure authentication and seamless messaging experience.",
    problem: "Existing monolithic chat tools suffer from high latency and complex setup overhead.",
    architecture: "Laravel Framework ──▶ WebSocket Server ──▶ MySQL Database ──▶ Blade/Tailwind UI",
    workflow: [
      "User authenticates with secure session tokens",
      "WebSocket connection established for instant peer-to-peer or room messaging",
      "Messages broadcasted to active listeners and persisted to MySQL database",
      "Read receipts and online status broadcasted across channels"
    ],
    features: [
      "Real-time messaging system",
      "User authentication and sessions",
      "Chat history and message storage",
      "Responsive UI with modern design",
    ],
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "WebSockets"],
    github: "https://github.com/SowndharyaPL15/connectify-cartrabbit",
    demo: "https://connectify-bw2w.onrender.com",
    images: ["/projects/connectify/1.svg"],
    challenges: "Managing WebSocket connection state during brief network drops and tab switches.",
    personalContribution: "Built Laravel authentication system, configured WebSocket event broadcasting, designed database chat history persistence, and crafted responsive frontend.",
    results: "Sub-100ms message delivery latency across channels with full chat persistence.",
    future: "Add end-to-end encryption (E2EE) using Web Crypto API.",
  },
  {
    num: "Project 07",
    title: "ModelHubX – MLOps Registry & Deployment",
    desc: "High-end MLOps platform for automated AI model versioning and Kubernetes deployment. Features a premium glassmorphic SaaS dashboard, real-time cluster metrics, and dynamic K8s manifest synthesis.",
    problem: "Data science teams struggle to bridge model experimentation with production Kubernetes deployments cleanly.",
    architecture: "Next.js Dashboard ──▶ FastAPI Control Plane ──▶ Redis Queue ──▶ Docker & Kubernetes API",
    workflow: [
      "Developer uploads model weights and specifies runtime dependencies",
      "ModelHubX compiles container image and registers artifact in Model Registry",
      "Kubernetes manifest synthesized dynamically with auto-scaling metrics",
      "Deployment triggered to target cluster with live latency and RAM monitoring"
    ],
    features: [
      "Immutable AI Model Registry & Versioning",
      "K8s Infrastructure Synthesis & Auto-scaling",
      "Real-time Diagnostics & Cluster Metrics",
      "Dual-Theme Glassmorphic Mission Dashboard",
    ],
    tags: ["Python", "Kubernetes", "Redis", "Docker", "FastAPI", "Next.js"],
    github: "https://github.com/SowndharyaPL15/ModelHubX",
    demo: "https://modelhubx-1.onrender.com/",
    badge: "AI/ML",
    images: ["/projects/modelhubx/1.svg"],
    challenges: "Rendering high-frequency real-time cluster telemetry without dropping UI frame rates.",
    personalContribution: "Architected FastAPI control plane, built dynamic Kubernetes YAML synthesizer, and designed dual-theme glassmorphism monitoring dashboard.",
    results: "Automated model deployment workflow down to under 2 minutes with live cluster telemetry.",
    future: "Incorporate automated canary deployments and drift detection alerts.",
  },
  {
    num: "Project 08",
    title: "AI Product Authentication System",
    desc: "A deep learning platform for item authentication and fingerprinting. Classifies product images as Authentic or Fake using a custom CNN with an explainability module.",
    problem: "Brand counterfeiters produce high-similarity replicas that pass visual inspections.",
    architecture: "PyTorch Custom CNN ──▶ OpenCV Preprocessing ──▶ Grad-CAM XAI Module ──▶ React Frontend",
    workflow: [
      "High-resolution item image captured and uploaded",
      "OpenCV scales, normalizes, and crops key feature regions",
      "PyTorch CNN outputs probability score for Authentic vs Counterfeit",
      "Grad-CAM visual heatmap overlay highlights exact anomaly regions"
    ],
    features: [
      "Custom CNN (PyTorch) & OpenCV Preprocessing",
      "Explainable AI (XAI) Prediction Reasons",
      "Real-time Image Analysis Dashboard",
      "Automated Feature Extraction & Fingerprinting",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "CNN", "React"],
    github: "https://github.com/SowndharyaPL15/AI-Product-Authentication-System",
    demo: "https://ai-product-authentication-system.onrender.com",
    badge: "Deep Learning",
    images: ["/projects/ai-auth/1.svg"],
    challenges: "Training robust classification layers on imbalanced datasets of authentic vs counterfeit samples.",
    personalContribution: "Trained PyTorch CNN model, implemented Grad-CAM XAI visual heatmap overlays, and constructed React interactive analysis dashboard.",
    results: "Achieved 95.1% classification accuracy on authentic vs counterfeit test benchmarks.",
    future: "Deploy lightweight MobileNet variant for real-time mobile app scanning.",
  },
  {
    num: "Project 09",
    title: "Clixora – URL Shortening & Analytics",
    desc: "A production-quality full-stack URL shortening and real-time link analytics platform. Features secure JWT authentication, custom alias checks, expiration settings, automated QR code generation, bulk URL shortening via CSV, and granular visitor analytics dashboards.",
    problem: "Long, complex URLs are difficult to share, and creators lack detailed, real-time analytics to measure link engagement, device demographics, and click traffic.",
    architecture: "React Frontend (Vite/Tailwind) ──▶ Express.js Backend API ──▶ PostgreSQL Database (Neon)",
    workflow: [
      "User registers and logs in to access a personalized metrics dashboard",
      "User submits long URL with optional custom alias and expiry date configurations",
      "System validates alias availability, generates shortened code, and creates dynamic QR code",
      "Visitor clicks link, triggers Express middleware parsing visitor agent telemetry, logs visit data, and redirects instantly"
    ],
    features: [
      "Secure JWT User Authentication",
      "Custom Aliasing & Duplicate Checks",
      "Bulk URL Shortening via CSV Uploads",
      "Granular Device, IP, & Browser Analytics",
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Recharts"],
    github: "https://github.com/SowndharyaPL15/Clixora",
    demo: "https://clixora-frontend.onrender.com",
    badge: "Full Stack",
    images: ["/projects/clixora/1.svg"],
    challenges: "Efficiently batch processing bulk CSV uploads without hitting server request timeouts or overloading the database.",
    personalContribution: "Designed modular MVC backend structure, implemented JWT auth, created PostgreSQL schemas, and developed the frontend dashboard with Recharts visualizations.",
    results: "Enabled sub-10ms redirection response times with full geo-demographic analytics logging.",
    future: "Implement advanced geo-IP geolocation mapping to show visitor regions on an interactive map.",
  },
  {
    num: "Project 10",
    title: "INDUS AI – Industrial Cognitive Memory System",
    desc: "An Industrial Cognitive Memory System designed to help factories preserve, search, connect, and continuously improve industrial knowledge from documents, maintenance records, engineer feedback, SOPs, and compliance logs.",
    problem: "Factory operations suffer from lost expertise, unstructured SOPs, and difficulty retrieving specific maintenance procedures, leading to operational delays and safety hazards.",
    architecture: "React Frontend ──▶ FastAPI Control Plane ──▶ FAISS / PostgreSQL ──▶ LangChain & LangGraph",
    workflow: [
      "Ingests structured and unstructured industrial documentation (SOPs, manuals, incident logs)",
      "Embeds document texts and stores high-dimensional vectors in FAISS vector database",
      "Factory engineer prompts the assistant with domain/maintenance queries via the React UI",
      "LangChain & LangGraph pipelines search vector index and generate contextual, safety-checked answers"
    ],
    features: [
      "Industrial Document & SOP Ingestion",
      "High-Performance Vector Search with FAISS",
      "AI Reasoning Agents via LangChain & LangGraph",
      "Role-Based Access Control & Safe Outputs",
    ],
    tags: ["FastAPI", "React", "PostgreSQL", "FAISS", "LangChain", "LangGraph", "Python"],
    github: "https://github.com/SowndharyaPL15/indus_ai",
    demo: "https://indus-ai-frontend.onrender.com",
    badge: "AI & Cognitive Systems",
    images: ["/projects/indus_ai/1.svg"],
    challenges: "Structuring unstructured engineer feedback logs and legacy PDF manuals to maintain high RAG retrieval accuracy.",
    personalContribution: "Constructed FastAPI backend routes, set up database models, integrated FAISS vector store, and configured LangChain/LangGraph agent reasoning chains.",
    results: "Reduced maintenance documentation lookup times by 85% with contextual, safety-validated troubleshooting steps.",
    future: "Integrate multi-modal input processing to accept photos of damaged machinery parts and auto-retrieve repair guides.",
  },
  {
    num: "Project 11",
    title: "Precision Oncology – Clinical CDSS",
    desc: "An AI-powered clinical decision support framework for diagnosing Lung and Breast cancer using deep transfer learning and Explainable AI.",
    problem: "Manual histopathological cancer diagnosis is time-consuming and subjective, with high cognitive burden on pathologists and a critical need for interpretable, trustworthy AI explanations.",
    architecture: "FastAPI Backend (PyTorch / TensorFlow) ──▶ Grad-CAM Explainable AI Module ──▶ React Diagnostics UI",
    workflow: [
      "Pathologist uploads lung or breast biopsy histopathology image (LC25000 / BreakHis datasets)",
      "Deep transfer learning pipeline processes image through DenseNet121, ResNet50, and EfficientNetB0 ensembles",
      "Model computes cancer subtype probabilities and classification confidence scores",
      "Grad-CAM synthesizes visual explainability heatmaps highlighting specific malignant tissue regions on the biopsy"
    ],
    features: [
      "Multimodal Histopathology AI",
      "Deep Transfer Learning (DenseNet)",
      "Explainable AI (Grad-CAM)",
      "Clinical Diagnostics Dashboard",
    ],
    tags: ["FastAPI", "React", "TensorFlow", "DenseNet", "PyTorch", "Grad-CAM"],
    github: "https://github.com/SowndharyaPL15/Precision-Oncology-CDSS",
    demo: "https://precision-oncology-frontend.onrender.com",
    badge: "AI & Healthcare CDSS",
    images: ["/projects/precision-oncology/1.svg"],
    challenges: "Calibrating Grad-CAM visual explanation heatmaps to accurately localize micro-cellular cancer biomarkers without false artifact highlights.",
    personalContribution: "Trained transfer learning models on LC25000 and BreakHis datasets, integrated Grad-CAM explainability engine, and built the FastAPI backend and responsive React clinical diagnostic frontend.",
    results: "Achieved 97.8% diagnostic classification accuracy across lung and breast histopathology validation sets with sub-second Grad-CAM heatmap generation.",
    future: "Integrate genomics and whole-slide imaging (WSI) gigapixel tile processing for comprehensive multi-omics cancer staging.",
  },
];

interface ProjectsWorkspaceProps {
  selectedProjectNum?: string | null;
  setSelectedProjectNum?: (num: string | null) => void;
}

export default function ProjectsWorkspace({ selectedProjectNum, setSelectedProjectNum }: ProjectsWorkspaceProps) {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  useEffect(() => {
    if (selectedProjectNum) {
      const found = PROJECTS.find(p => p.num === selectedProjectNum);
      if (found) {
        setSelectedProject(found);
      }
    } else {
      setSelectedProject(null);
    }
  }, [selectedProjectNum]);

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          /* ── Main Projects Management Grid ────────────────────────── */
          <motion.div
            key="projects-list"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="space-y-6 max-w-6xl mx-auto"
          >
            {/* Header Banner */}
            <div className="cyber-panel rounded-xl p-5 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="font-space text-[10px] uppercase tracking-widest text-glow mb-1 font-bold">
                  APPLICATION REGISTRY
                </div>
                <h2 className="font-dm-serif text-2xl md:text-3xl font-bold" style={{ color: "var(--text-main)" }}>
                  Project Management Dashboard
                </h2>
                <p className="font-space text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Explore 11 production &amp; research systems across AI, Full-Stack, Blockchain, and IoT.
                </p>
              </div>
              <div className="font-space text-xs px-3 py-1.5 rounded-lg flex items-center gap-2" style={{ background: "var(--glow-xs)", border: "1px solid var(--border-accent)", color: "var(--accent-primary)" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>11 PROJECTS DEPLOYED</span>
              </div>
            </div>

            {/* Grid 2 rows x 4 columns on large viewport */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {PROJECTS.map((proj, idx) => (
                <div
                  key={proj.title}
                  onClick={() => setSelectedProject(proj)}
                  className="cursor-pointer group"
                >
                  <div className="transition-transform duration-200 group-hover:-translate-y-0.5">
                    <ProjectCard project={proj} index={idx} />
                  </div>
                  <div className="mt-1 text-center font-space text-[9px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity font-bold" style={{ color: "var(--accent-primary)" }}>
                    ▼ OPEN WORKSPACE
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* ── Dedicated Project Workspace ───────────────────────────── */
          <motion.div
            key="project-detail"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="space-y-5 max-w-5xl mx-auto"
          >
            {/* Top Navigation / Back Button */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  if (setSelectedProjectNum) setSelectedProjectNum(null);
                }}
                className="cyber-button font-space text-xs px-4 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
                style={{ color: "var(--accent-primary)" }}
              >
                ← BACK TO PROJECTS DASHBOARD
              </button>
              <div className="font-space text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>
                PROJECT WORKSPACE // {selectedProject.num}
              </div>
            </div>

            {/* Title & Metadata Panel */}
            <div className="cyber-panel rounded-xl p-6 relative overflow-hidden space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="font-dm-serif text-2xl md:text-3xl font-bold text-glow">
                  {selectedProject.title}
                </h1>
                {selectedProject.badge && (
                  <span className="font-space text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold" style={{ background: "var(--glow-sm)", border: "1px solid var(--border-accent)", color: "var(--accent-secondary)" }}>
                    {selectedProject.badge}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {selectedProject.desc}
              </p>

              {/* Action links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button font-space text-xs px-4 py-2 rounded-lg flex items-center gap-2 font-bold"
                    style={{ background: "var(--accent-secondary)", color: "#000", border: "none" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    LIVE DEMO
                  </a>
                )}
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button font-space text-xs px-4 py-2 rounded-lg flex items-center gap-2 font-bold"
                    style={{ background: "var(--gradient-primary)", color: "#000", border: "none" }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    VIEW SOURCE ON GITHUB
                  </a>
                ) : (
                  <span className="font-space text-xs px-4 py-2 rounded-lg opacity-50 cursor-not-allowed border" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>
                    PROPRIETARY / RESEARCH
                  </span>
                )}
              </div>
            </div>

            {/* Grid 2-col: Architecture & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="cyber-panel rounded-xl p-5 space-y-2">
                <div className="font-space text-[10px] uppercase tracking-widest text-glow font-bold">🎯 PROBLEM STATEMENT</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {selectedProject.problem}
                </p>
              </div>

              <div className="cyber-panel rounded-xl p-5 space-y-2">
                <div className="font-space text-[10px] uppercase tracking-widest text-glow font-bold">⚙️ SYSTEM ARCHITECTURE DIAGRAM</div>
                <div className="font-space text-xs p-3 rounded border border-theme font-bold leading-relaxed" style={{ color: "var(--accent-primary)", background: "var(--bg-input)" }}>
                  {selectedProject.architecture}
                </div>
              </div>
            </div>

            {/* Grid 2-col: Personal Contribution & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="cyber-panel rounded-xl p-5 space-y-2" style={{ borderLeft: "3px solid #39ff14" }}>
                <div className="font-space text-[10px] uppercase tracking-widest font-bold" style={{ color: "#39ff14" }}>🛠️ WHAT I PERSONALLY BUILT</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {selectedProject.personalContribution}
                </p>
              </div>

              <div className="cyber-panel rounded-xl p-5 space-y-2" style={{ borderLeft: "3px solid #ffb703" }}>
                <div className="font-space text-[10px] uppercase tracking-widest font-bold" style={{ color: "#ffb703" }}>📈 MEASURABLE RESULTS &amp; OUTCOMES</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {selectedProject.results}
                </p>
              </div>
            </div>

            {/* Workflow & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-7 cyber-panel rounded-xl p-5 space-y-3">
                <div className="font-space text-[10px] uppercase tracking-widest text-glow font-bold">🔄 EXECUTION WORKFLOW</div>
                <ol className="space-y-2 font-space text-xs" style={{ color: "var(--text-muted)" }}>
                  {selectedProject.workflow?.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-bold px-1.5 py-0.5 rounded text-[10px]" style={{ background: "var(--glow-xs)", color: "var(--accent-secondary)" }}>
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="md:col-span-5 cyber-panel rounded-xl p-5 space-y-3">
                <div className="font-space text-[10px] uppercase tracking-widest text-glow font-bold">💻 TECHNOLOGIES USED</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="font-space text-xs px-3 py-1 rounded-md font-bold" style={{ background: "var(--glow-xs)", border: "1px solid var(--border-accent)", color: "var(--accent-primary)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="font-space text-[10px] uppercase tracking-widest text-glow mb-1 font-bold">🚀 KEY FEATURES</div>
                  <ul className="space-y-1 text-xs" style={{ color: "var(--text-muted)" }}>
                    {selectedProject.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span style={{ color: "var(--accent-primary)" }}>▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Challenges & Future Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="cyber-panel rounded-xl p-5 space-y-2">
                <div className="font-space text-[10px] uppercase tracking-widest text-glow font-bold">⚡ KEY TECHNICAL CHALLENGES</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {selectedProject.challenges}
                </p>
              </div>

              <div className="cyber-panel rounded-xl p-5 space-y-2">
                <div className="font-space text-[10px] uppercase tracking-widest text-glow font-bold">🔮 FUTURE ROADMAP</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {selectedProject.future}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
