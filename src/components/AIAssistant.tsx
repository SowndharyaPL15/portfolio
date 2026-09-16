"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================================================================
   KNOWLEDGE BASE
   ================================================================ */
const KB = {
  about: `Sowndharya P.L. is an AI Engineer, Full Stack Developer, and Machine Learning Enthusiast from Tirupur, Tamil Nadu, India.

She is currently pursuing B.E. Computer Science & Engineering (Honours in Blockchain Technology) at Dr. N.G.P Institute of Technology (2023–2027) with a CGPA of 8.35.

She has hands-on experience in full-stack web development, AI/ML systems, mobile apps, IoT, and DevOps — with 11 real-world projects on GitHub.`,

  skills: `Programming: Java, Python, C
AI / Machine Learning: PyTorch, OpenCV, CNN, Image Processing, Grad-CAM / XAI
Web: HTML, CSS, JavaScript, PHP, Laravel, Node.js, Express, Bootstrap, React (Next.js)
Databases: SQL, MySQL, PostgreSQL, SQLite
DevOps: Docker, Kubernetes
Tools: Git, GitHub, VS Code, Android Studio, Postman, IntelliJ IDEA`,

  projects: `1. CuraNet – Caregiver Support System (HTML, CSS, JS, PostgreSQL) – github.com/SowndharyaPL15/CuraNet | Demo: https://curanet-mj06.onrender.com/
2. PharmaTrace AI – Medicine Authentication (Node.js, Express, PostgreSQL, Python, Flask, OpenCV) – github.com/SowndharyaPL15/pharmatrace-ai | Demo: https://pharmatrace-web-server.onrender.com
3. SmartExpensePro – SMS Expense Tracker (Android, Java, SQLite) – github.com/SowndharyaPL15/SmartExpensePro | Demo: https://smartexpensepro.onrender.com/
4. Automated Aerial Object Detection – IoT & AI (Arduino, Embedded Systems, IoT, C, C++) – github.com/SowndharyaPL15/Automated-Aerial-Object-Detection | Demo: https://www.tinkercad.com/things/3HbPGczwYv0-automated-aerial-object-detection?sharecode=FA4-ENWj_yRSs6VpOnL5FjKiSQH9pYLQxryuBFYuDFs | Research Paper (2nd Prize)
5. CivicPulse – Smart Civic Issue Management (PHP, MySQL, JavaScript, Bootstrap) – github.com/SowndharyaPL15/CivicPulse | Demo: https://civicpulse-jq8k.onrender.com
6. Connectify – Real-Time Chat Application (Laravel, PHP, MySQL, JavaScript, WebSockets) – github.com/SowndharyaPL15/connectify-cartrabbit | Demo: https://connectify-bw2w.onrender.com
7. ModelHubX – MLOps Registry & Deployment (FastAPI, Kubernetes, Redis, Docker, Next.js) – github.com/SowndharyaPL15/ModelHubX | Demo: https://modelhubx-1.onrender.com/
8. AI Product Authentication System (Python, PyTorch, OpenCV, CNN, React) – github.com/SowndharyaPL15/AI-Product-Authentication-System | Demo: https://ai-product-authentication-system.onrender.com
9. Clixora – URL Shortening & Analytics (React, Node.js, Express, PostgreSQL) – github.com/SowndharyaPL15/Clixora | Demo: https://clixora-frontend.onrender.com
10. INDUS AI – Industrial Cognitive Memory System (FastAPI, React, PostgreSQL, FAISS, LangChain, Python) – github.com/SowndharyaPL15/indus_ai | Demo: https://indus-ai-frontend.onrender.com
11. Precision Oncology – Clinical Decision Support System (FastAPI, React, TensorFlow, PyTorch, DenseNet, Explainable AI) – github.com/SowndharyaPL15/Precision-Oncology-CDSS | Demo: https://precision-oncology-frontend.onrender.com`,

  education: `🎓 B.E. Computer Science & Engineering (Honours in Blockchain Technology)
   Dr. N.G.P Institute of Technology | 2023–2027 | CGPA: 8.35 (SEM-6)

📚 HSE (Higher Secondary Education)
   Sakthi Vigneswara School | 2021–2023 | 84%

📚 SSLC
   Sri Sai Matriculation School | 2021 | Passed`,

  internship: `💼 Software Development Intern — Mist Software Solutions, Coimbatore (15 Days)

Key contributions:
• Built responsive UIs using HTML, CSS, JavaScript, Bootstrap
• Developed backend logic with PHP
• Implemented full CRUD operations for dynamic data management
• Designed relational database schemas
• Debugged and tested applications for reliability`,

  certifications: `🏆 Full Stack Java Development – Simplilearn (2025)
⚡ Java Full Stack with React JS & AI – Brainovision Solutions (2024)
🥈 2nd Prize – Paper Presentation on "Aerial Object Detection" (IoT) – 2024`,

  contact: `📧 Email: plsowndharya@gmail.com
📱 Phone: +91 9884606863
📍 Location: Tirupur, Tamil Nadu, India
💼 LinkedIn: linkedin.com/in/sowndharyapl
🐙 GitHub: github.com/SowndharyaPL15
💡 LeetCode: leetcode.com/u/SOWNDHARYAPL`,

  resume: `📄 Sowndharya's Resume is available for interactive preview and download.

It includes her verified academic record (B.E. CSE Blockchain Honours, CGPA 8.35), 11 projects, software development internship at Mist Software, and verified certifications.`,
};

type Intent =
  | "about"
  | "skills"
  | "projects"
  | "education"
  | "internship"
  | "certifications"
  | "contact"
  | "resume"
  | "greeting"
  | "unknown";

function detectIntent(input: string): Intent {
  const q = input.toLowerCase();
  if (/\b(who|about|yourself|tell me|introduce|name|background)\b/.test(q)) return "about";
  if (/\b(skill|tech|stack|language|tool|framework|know|proficient|expertise)\b/.test(q)) return "skills";
  if (/\b(project|built|developed|app|work|create|github|repository|repo)\b/.test(q)) return "projects";
  if (/\b(edu|study|degree|college|university|cgpa|grade|academic|school)\b/.test(q)) return "education";
  if (/\b(intern|experience|job|career|work experience|professional)\b/.test(q)) return "internship";
  if (/\b(cert|award|achieve|prize|certification|recognition)\b/.test(q)) return "certifications";
  if (/\b(contact|email|phone|reach|connect|linkedin|github|social|location)\b/.test(q)) return "contact";
  if (/\b(resume|cv|download|pdf)\b/.test(q)) return "resume";
  if (/\b(hi|hello|hey|greet|good morning|good evening|howdy|sup)\b/.test(q)) return "greeting";
  return "unknown";
}

function getResponse(intent: Intent): string {
  switch (intent) {
    case "about":         return KB.about;
    case "skills":        return KB.skills;
    case "projects":      return KB.projects;
    case "education":     return KB.education;
    case "internship":    return KB.internship;
    case "certifications":return KB.certifications;
    case "contact":       return KB.contact;
    case "resume":        return KB.resume;
    case "greeting":
      return "Hello! 👋 I'm Sowndharya's AI Portfolio Guide. I can tell you about her skills, projects, education, internship, certifications, or how to contact her. What would you like to know?";
    default:
      return "I can help you learn about Sowndharya's skills, projects, education, experience, certifications, or contact details.\n\nTry asking:\n• \"What are her skills?\"\n• \"Tell me about her projects\"\n• \"What is her education?\"\n• \"How to contact her?\"";
  }
}

interface Message {
  role: "user" | "bot";
  text: string;
  ts: number;
}

const QUICK_PROMPTS = [
  "What are her skills?",
  "Show her projects",
  "How to contact her?",
  "Download resume",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm Sowndharya's AI Portfolio Guide.\n\nAsk me anything about her skills, projects, education, or how to get in touch!",
      ts: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    const handleOpenChat = () => setOpen(true);
    window.addEventListener("open-ai-chat", handleOpenChat);
    return () => window.removeEventListener("open-ai-chat", handleOpenChat);
  }, []);

  const send = useCallback(
    (text?: string) => {
      const msg = (text ?? input).trim();
      if (!msg) return;
      setInput("");

      const userMessage: Message = { role: "user", text: msg, ts: Date.now() };
      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      const intent = detectIntent(msg);
      const delay = 100;

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: getResponse(intent), ts: Date.now() },
        ]);
      }, delay);
    },
    [input]
  );

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg focus:outline-none"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "0 0 25px var(--glow-sm), 0 4px 20px rgba(0,0,0,0.4)",
            }}
            aria-label="Open AI Portfolio Guide"
          >
            {/* Ping ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "var(--glow-xs)", animationDuration: "2s" }}
            />
            <svg
              className="w-6 h-6 text-white relative z-10"
              fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-3 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-6 z-50 w-auto sm:w-96 flex flex-col"
            style={{ height: "min(500px, 78vh)" }}
          >
            <div
              className="rounded-xl flex flex-col h-full overflow-hidden"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-accent)",
                boxShadow: "0 0 40px var(--glow-sm), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-3 flex-shrink-0"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      🤖
                    </div>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                      style={{ background: "#39ff14", borderColor: "var(--bg-surface)" }}
                    />
                  </div>
                  <div>
                    <span
                      className="font-space text-xs font-bold tracking-wider block"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      AI PORTFOLIO GUIDE
                    </span>
                    <span className="font-space text-[9px]" style={{ color: "var(--text-muted)" }}>
                      Always Online
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="transition-opacity hover:opacity-100 opacity-50 focus:outline-none"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="Close AI assistant"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[85%] text-[11px] leading-relaxed rounded-xl px-3 py-2.5 whitespace-pre-line"
                      style={
                        msg.role === "user"
                          ? {
                              background: "var(--glow-sm)",
                              color: "var(--text-main)",
                              border: "1px solid var(--border-accent)",
                            }
                          : {
                              background: "rgba(255,255,255,0.04)",
                              color: "var(--text-main)",
                              border: "1px solid var(--border-subtle)",
                            }
                      }
                    >
                      <div>{msg.text}</div>
                      {msg.role === "bot" && (msg.text.includes("Resume") || msg.text.includes("resume")) && (
                        <button
                          onClick={() => window.dispatchEvent(new CustomEvent("open-resume-preview"))}
                          className="mt-2.5 font-space text-[10px] px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer shadow-sm"
                          style={{ background: "var(--gradient-primary)", color: "#000" }}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                          <span>Preview & Download Resume</span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div
                      className="rounded-xl px-3 py-2.5 flex gap-1 items-center"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)" }}
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{ background: "var(--accent-primary)", animationDelay: `${i * 0.12}s` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Quick prompts */}
              {messages.length === 1 && (
                <div
                  className="px-3 pb-2 flex flex-wrap gap-1.5"
                  style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "8px" }}
                >
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => send(prompt)}
                      className="font-space text-[9px] px-2 py-1 rounded-full transition-all"
                      style={{
                        color: "var(--accent-primary)",
                        border: "1px solid var(--border-subtle)",
                        background: "var(--glow-xs)",
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div
                className="p-3 flex-shrink-0"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="flex gap-2 rounded-lg px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)" }}
                >
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Ask about skills, projects..."
                    className="flex-1 bg-transparent text-xs outline-none font-space"
                    style={{ color: "var(--text-main)" }}
                    aria-label="Message input"
                  />
                  <button
                    onClick={() => send()}
                    disabled={!input.trim()}
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                    style={{
                      background: "var(--gradient-primary)",
                      color: "white",
                    }}
                    aria-label="Send message"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
